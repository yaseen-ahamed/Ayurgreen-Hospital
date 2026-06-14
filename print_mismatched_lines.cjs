const fs = require('fs');
const lines = fs.readFileSync('index.html', 'utf-8').split('\n');

console.log("Lines 2350 to 2380:");
for (let i = 2349; i < Math.min(lines.length, 2380); i++) {
    console.log(`${i+1}: ${lines[i]}`);
}
