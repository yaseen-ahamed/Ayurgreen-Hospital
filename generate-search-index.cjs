const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const htmlFiles = fs.readdirSync(rootDir).filter(file => file.endsWith('.html'));

const index = [];

function cleanText(text) {
    if (!text) return '';
    return text
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // strip script contents
        .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')   // strip style contents
        .replace(/<[^>]+>/g, ' ') // strip HTML tags
        .replace(/\s+/g, ' ')   // normalize whitespace
        .trim();
}

htmlFiles.forEach(file => {
    // Skip external dependencies or generated files if any
    if (file === 'add_youtube.py' || file === 'process_image.py') return;
    
    const filePath = path.join(rootDir, file);
    const content = fs.readFileSync(filePath, 'utf8');

    // Title
    const titleMatch = content.match(/<title>(.*?)<\/title>/i);
    const title = titleMatch ? cleanText(titleMatch[1]) : file;

    // Meta Description
    const descMatch = content.match(/<meta\s+name="description"\s+content="([^"]+)"/i) || 
                      content.match(/<meta\s+content="([^"]+)"\s+name="description"/i);
    const desc = descMatch ? descMatch[1] : '';

    const headings = [];
    const paragraphs = [];

    // Extract headings
    const headingRegex = /<h([1-4])\b([^>]*?)>(.*?)<\/h\1>/gi;
    let match;
    while ((match = headingRegex.exec(content)) !== null) {
        const level = parseInt(match[1]);
        const attrs = match[2];
        const rawText = match[3];
        const text = cleanText(rawText);
        
        // Try to find id in the heading itself
        const idMatch = attrs.match(/id="([^"]+)"/i);
        let id = idMatch ? idMatch[1] : '';
        
        if (text) {
            headings.push({ level, text, id });
        }
    }

    // Extract paragraph texts
    const pRegex = /<p\b[^>]*?>(.*?)<\/p>/gi;
    while ((match = pRegex.exec(content)) !== null) {
        const text = cleanText(match[1]);
        // Avoid indexing cookie notices or footer boilerplate if too short
        if (text && text.length > 10) {
            paragraphs.push(text);
        }
    }

    index.push({
        url: file,
        title,
        desc,
        headings,
        content: paragraphs.join(' ')
    });
});

fs.writeFileSync(path.join(rootDir, 'public', 'search-index.json'), JSON.stringify(index, null, 2));
console.log(`Search index generated with ${index.length} pages inside public/ directory.`);


