const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf-8');

// Find all HTML tags that look like sections, headers, footers, divs with ids, headings, etc.
const lines = content.split('\n');
const results = [];

lines.forEach((line, index) => {
    const trimmed = line.trim();
    // Match <div id="..." or <section or <header or <footer or <h1, <h2, <h3, <h4, <img
    if (trimmed.startsWith('<div') && trimmed.includes('id=')) {
        results.push({ line: index + 1, type: 'div-id', content: trimmed });
    } else if (trimmed.startsWith('<section')) {
        results.push({ line: index + 1, type: 'section', content: trimmed });
    } else if (trimmed.startsWith('<header')) {
        results.push({ line: index + 1, type: 'header', content: trimmed });
    } else if (trimmed.startsWith('<footer')) {
        results.push({ line: index + 1, type: 'footer', content: trimmed });
    } else if (trimmed.match(/<h[1-6]/i)) {
        results.push({ line: index + 1, type: 'heading', content: trimmed });
    } else if (trimmed.startsWith('<img')) {
        results.push({ line: index + 1, type: 'img', content: trimmed });
    }
});

fs.writeFileSync('index_structure.json', JSON.stringify(results, null, 2));
console.log('Structure analyzed and saved to index_structure.json. Found ' + results.length + ' elements.');
