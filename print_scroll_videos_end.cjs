const fs = require('fs');
const lines = fs.readFileSync('index.html', 'utf-8').split('\n');

console.log("Lines 3060 to 3080:");
for (let i = 3059; i < Math.min(lines.length, 3080); i++) {
    console.log(`${i+1}: ${lines[i]}`);
}

// Find next closing tag of stories-content-wrap after 3067
let endLine = -1;
for (let i = 3067; i < lines.length; i++) {
    if (lines[i].includes('<!-- End stories-content-wrap -->')) {
        endLine = i;
        break;
    }
}

console.log(`End line found after 3067: ${endLine + 1}`);
console.log("Lines around End line:");
for (let i = endLine - 10; i <= endLine + 5; i++) {
    console.log(`${i+1}: ${lines[i]}`);
}
