const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf-8');

function findCss(className) {
    const term = className;
    let index = 0;
    while ((index = content.indexOf(term, index)) !== -1) {
        console.log(`--- CSS Match for "${term}" at index ${index} ---`);
        console.log(content.substring(Math.max(0, index - 100), index + 400));
        index += term.length;
    }
}

findCss('stories-relearning-section');
findCss('stories-container');
