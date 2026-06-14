const fs = require('fs');
const lines = fs.readFileSync('index.html', 'utf-8').split('\n');

// Find the line that starts the section after the stories section
// We know it is "Your Journey to Rehabilitation" or some other section.
// Let's print lines from 3500 to 3800 to see where the stories section ends and what comes next.
let storiesStart = -1;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('class="stories-relearning-section"')) {
        storiesStart = i;
        break;
    }
}

console.log(`Stories start line: ${storiesStart + 1}`);

// Print lines around 3600-3660
console.log("Lines 3590 to 3650:");
for (let i = 3589; i < Math.min(lines.length, 3650); i++) {
    console.log(`${i+1}: ${lines[i]}`);
}
