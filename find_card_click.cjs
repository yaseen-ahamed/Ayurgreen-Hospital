const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf-8');

const matches = [];
const lines = content.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('rehab-card') || line.includes('switchRehabTab') || line.includes('click')) {
    matches.push({ line: idx + 1, text: line.trim() });
  }
});
console.log(JSON.stringify(matches.slice(0, 50), null, 2));
