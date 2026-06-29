const fs = require('fs');

// Read the first 50 bytes of the webp file to check for VP8X chunk which contains alpha flag
const buffer = fs.readFileSync('public/Assets/AG Sub-pages Banner/Cerebral Palsy.webp');
const str = buffer.toString('utf8', 0, 50);

console.log("Header info:");
console.log(buffer.slice(0, 32).toString('hex'));
if (buffer.includes(Buffer.from('VP8X'))) {
  const vp8xIndex = buffer.indexOf(Buffer.from('VP8X'));
  const flags = buffer[vp8xIndex + 8];
  const hasAlpha = (flags & 0x10) !== 0;
  console.log('Has alpha channel:', hasAlpha);
} else {
  console.log('No VP8X chunk, probably no alpha.');
}
