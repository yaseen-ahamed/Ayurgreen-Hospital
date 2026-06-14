const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const logos = [
  'Assets/Logo/nabh-seeklogo.webp',
  'Assets/Logo/ayur-diamond.webp',
  'Assets/Logo/Ahma-Logo.webp',
  'Assets/Logo/VOH Logo.webp',
  'Assets/Logo/ayush-logo.webp',
  'Assets/Logo/international_patients_transparent.webp'
];

async function getDimensions() {
  const results = {};
  for (const img of logos) {
    const p = path.join(__dirname, img);
    if (fs.existsSync(p)) {
      try {
        const metadata = await sharp(p).metadata();
        results[img] = { width: metadata.width, height: metadata.height };
      } catch (err) {
        results[img] = { error: err.message };
      }
    } else {
      results[img] = { error: 'Not found' };
    }
  }
  console.log(JSON.stringify(results, null, 2));
  fs.writeFileSync('logo_dimensions.json', JSON.stringify(results, null, 2));
}

getDimensions();
