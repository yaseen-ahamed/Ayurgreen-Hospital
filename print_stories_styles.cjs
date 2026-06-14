const fs = require('fs');
const lines = fs.readFileSync('index.html', 'utf-8').split('\n');

let foundLine = -1;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('.stories-container {')) {
        foundLine = i + 1;
        break;
    }
}

if (foundLine !== -1) {
    console.log(`Found .stories-container at line: ${foundLine}`);
    for (let i = foundLine - 10; i < foundLine + 25; i++) {
        console.log(`${i+1}: ${lines[i]}`);
    }
} else {
    console.log("Could not find style definition.");
}
