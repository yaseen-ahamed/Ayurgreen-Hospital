const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
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

const allFiles = walk('Assets');
console.log('--- All Files in Assets ---');
allFiles.forEach(f => {
  const relative = path.relative(__dirname, f);
  if (relative.toLowerCase().includes('nabh') || relative.toLowerCase().includes('diamond') || relative.toLowerCase().includes('ahma') || relative.toLowerCase().includes('voh') || relative.toLowerCase().includes('ayush') || relative.toLowerCase().includes('patients_transparent')) {
    console.log(relative);
  }
});
