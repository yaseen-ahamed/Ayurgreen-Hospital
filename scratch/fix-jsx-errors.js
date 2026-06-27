import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagePath = '/Users/Yasin/Documents/Antigravity/AG 2/app/page.tsx';

try {
  let content = fs.readFileSync(pagePath, 'utf8');

  // 1. Clean style tags - convert <style> ... </style> to <style dangerouslySetInnerHTML={{ __html: `...` }} />
  content = content.replace(/<style>([\s\S]*?)<\/style>/gi, (match, cssContent) => {
    const escapedCss = cssContent.replace(/`/g, '\\`').replace(/\$/g, '\\$');
    return `<style dangerouslySetInnerHTML={{ __html: \`${escapedCss}\` }} />`;
  });

  console.log('Successfully wrapped style tags in dangerouslySetInnerHTML');

  // 2. Remove script tags from the JSX tree.
  content = content.replace(/<script type="module" src="main\.js"><\/script>/gi, '');
  content = content.replace(/<script>([\s\S]*?)<\/script>/gi, (match, jsContent) => {
    return `{/* Script removed from JSX and moved to useEffect */}`;
  });

  console.log('Successfully removed inline script tags from JSX rendering');

  // 3. Clean inline "onclick" attributes
  content = content.replace(/onclick="switchRehabTab\('([^']+)'\)"/gi, 'onClick={() => (window as any).switchRehabTab?.(\'$1\')}');
  content = content.replace(/onclick="slideCards\('([^']*)',([\s\S]*?)\)"/gi, 'onClick={() => (window as any).slideCards?.(\'$1\', $2)}');
  content = content.replace(/onclick="slideVideos\(([^)]*?)\)"/gi, 'onClick={() => (window as any).slideVideos?.($1)}');

  console.log('Successfully converted onclick to React-compatible onClick handlers');

  fs.writeFileSync(pagePath, content, 'utf8');
  console.log('JSX Page successfully cleaned and written!');

} catch (error) {
  console.error('Error running JSX cleaner:', error);
  process.exit(1);
}
