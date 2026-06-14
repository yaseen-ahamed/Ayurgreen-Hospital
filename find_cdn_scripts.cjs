const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf-8');

const regex = /<script[^>]*>([\s\S]*?)<\/script>/gi;
const matches = content.match(/<script[^>]*>[\s\S]*?<\/script>/gi) || [];
console.log("--- Script tags in index.html ---");
for (const match of matches) {
    console.log(match);
}
