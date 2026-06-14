const fs = require('fs');
const lines = fs.readFileSync('index.html', 'utf-8').split('\n');

console.log("Searching for 'scroll-videos':");
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('scroll-videos')) {
        console.log(`Line ${i+1}: ${lines[i].trim()}`);
    }
}
