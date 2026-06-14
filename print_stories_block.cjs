const fs = require('fs');
const lines = fs.readFileSync('index.html', 'utf-8').split('\n');

let startLine = -1;
let endLine = -1;

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('class="stories-relearning-section"')) {
        startLine = i + 1;
    }
    // Find the closing section tag
    if (startLine !== -1 && lines[i].includes('</section>') && endLine === -1) {
        // Let's verify if it's the closing section of stories
        // We know that stories section contains 'scroll-videos' or similar
        let sectionText = lines.slice(startLine - 1, i + 1).join('\n');
        if (sectionText.includes('scroll-videos')) {
            endLine = i + 1;
        }
    }
}

console.log(`Stories section starts at line: ${startLine}, ends at line: ${endLine}`);
console.log("--- Lines ---");
for (let i = startLine - 1; i < Math.min(startLine + 25, lines.length); i++) {
    console.log(`${i+1}: ${lines[i]}`);
}
console.log("...");
for (let i = endLine - 5; i < Math.min(endLine + 5, lines.length); i++) {
    console.log(`${i+1}: ${lines[i]}`);
}
