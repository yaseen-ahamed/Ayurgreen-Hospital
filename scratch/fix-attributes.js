import fs from 'fs';

const pagePath = '/Users/Yasin/Documents/Antigravity/AG 2/app/page.tsx';

try {
  let content = fs.readFileSync(pagePath, 'utf8');

  // Convert aria-valuemin, aria-valuemax, aria-valuenow string attributes to JSX expressions with numbers
  content = content.replace(/aria-valuemin="([^"]*?)"/gi, 'aria-valuemin={$1}');
  content = content.replace(/aria-valuemax="([^"]*?)"/gi, 'aria-valuemax={$1}');
  content = content.replace(/aria-valuenow="([^"]*?)"/gi, 'aria-valuenow={$1}');

  fs.writeFileSync(pagePath, content, 'utf8');
  console.log('Successfully corrected aria-value attributes in page.tsx');
} catch (error) {
  console.error('Error fixing attributes:', error);
}
