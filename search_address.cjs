const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    if (file === 'node_modules' || file === '.git' || file === 'dist') return;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else {
      results.push(filePath);
    }
  });
  return results;
}

const files = walk('.');
const terms = ['malappuram', 'edappal', 'perinthalmanna', 'kerala', 'address'];

console.log('Searching...');
files.forEach(f => {
  if (f.endsWith('.html') || f.endsWith('.js') || f.endsWith('.ts') || f.endsWith('.tsx') || f.endsWith('.md')) {
    const content = fs.readFileSync(f, 'utf-8');
    terms.forEach(term => {
      if (content.toLowerCase().includes(term)) {
        console.log(`Found "${term}" in ${f}`);
      }
    });
  }
});
