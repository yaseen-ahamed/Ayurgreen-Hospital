const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf-8');

const terms = ['review', 'testimonial', 'rating', 'star', 'patient says', 'feedback'];
console.log('--- Search Results ---');
terms.forEach(term => {
  const regex = new RegExp(term, 'gi');
  const matches = content.match(regex) || [];
  console.log(`${term}: ${matches.length} matches`);
});

// Print matches with context
const lines = content.split('\n');
lines.forEach((line, index) => {
  terms.forEach(term => {
    if (line.toLowerCase().includes(term)) {
      console.log(`Line ${index + 1}: ${line.trim().substring(0, 100)}`);
    }
  });
});
