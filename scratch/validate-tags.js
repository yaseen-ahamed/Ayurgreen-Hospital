import fs from 'fs';

const pagePath = '/Users/Yasin/Documents/Antigravity/AG 2/app/page.tsx';

try {
  const content = fs.readFileSync(pagePath, 'utf8');

  // Count standard tags: div, section, span, a, p, button, header, nav
  const tags = ['div', 'section', 'span', 'a', 'p', 'button', 'header', 'nav'];

  console.log('Tag counts in app/page.tsx:');
  tags.forEach(tag => {
    // Exclude self-closing tags like <div /> or <span /> if they are used, but they are rare.
    // Also make sure we don't match <span ... /> or <div ... />
    const openRegex = new RegExp(`<${tag}\\b[^>]*?([\\/]?)>`, 'g');
    const closeRegex = new RegExp(`</${tag}>`, 'g');

    let openCount = 0;
    let match;
    while ((match = openRegex.exec(content)) !== null) {
      // If the match ends with />, it's self-closing.
      if (!match[0].endsWith('/>')) {
        openCount++;
      }
    }

    const closeCount = (content.match(closeRegex) || []).length;

    console.log(`${tag}: open=${openCount}, close=${closeCount}, diff=${openCount - closeCount}`);
  });

} catch (error) {
  console.error('Error validating tags:', error);
}
