const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(fullPath));
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
                results.push(fullPath);
            }
        }
    });
    return results;
}

const files = walk('./src');
console.log("TSX/JS files found in src:", files);

for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    if (content.toLowerCase().includes('different nations') || content.toLowerCase().includes('nations served') || content.toLowerCase().includes('patients recovered')) {
        console.log(`FOUND keyword in: ${file}`);
        // Print snippet
        const idx = content.toLowerCase().indexOf('different nations');
        if (idx !== -1) {
            console.log(content.substring(idx - 100, idx + 800));
        } else {
            console.log(content.substring(0, 500));
        }
    }
}
