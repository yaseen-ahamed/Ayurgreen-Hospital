const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..');
const excludeDirs = ['node_modules', '.git', 'Assets', 'scripts', '.vscode'];

function replaceExtensions(content) {
    // Replace .png, .jpg, .jpeg (case-insensitive) with .webp
    return content.replace(/\.(png|jpg|jpeg)\b/gi, '.webp');
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            if (!excludeDirs.includes(file)) {
                processDirectory(filePath);
            }
        } else if (stat.isFile()) {
            const ext = path.extname(file).toLowerCase();
            // Process code files
            if (['.html', '.css', '.js', '.cjs', '.ts', '.tsx'].includes(ext)) {
                const content = fs.readFileSync(filePath, 'utf8');
                const newContent = replaceExtensions(content);
                
                if (content !== newContent) {
                    fs.writeFileSync(filePath, newContent, 'utf8');
                    console.log(`Updated references in: ${filePath}`);
                }
            }
        }
    }
}

console.log('Starting reference update process...');
processDirectory(targetDir);
console.log('Reference update complete.');
