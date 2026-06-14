const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf-8');

function findAndPrint(term) {
    let index = 0;
    while ((index = content.indexOf(term, index)) !== -1) {
        console.log(`--- Match for "${term}" ---`);
        console.log(content.substring(Math.max(0, index - 100), index + 350));
        index += term.length;
    }
}

findAndPrint("banner");
findAndPrint("hero");
findAndPrint("border-radius");
