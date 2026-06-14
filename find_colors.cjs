const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\Yasin\\.gemini\\antigravity\\brain\\13fa4742-a547-450a-aa37-f2c0e307e6c6\\.system_generated\\steps\\600\\content.md', 'utf-8');
const hexes = content.match(/#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}/g) || [];
console.log("Hexes found:", [...new Set(hexes)]);
