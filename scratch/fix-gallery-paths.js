import fs from 'fs';
import path from 'path';

const filePath = '/Users/Yasin/Documents/Antigravity/AG 2/gallery_data.js';

try {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace new URL('./Assets/xxx', import.meta.url).href with "/Assets/xxx"
  content = content.replace(/new URL\('\.(.*?)\', import\.meta\.url\)\.href/gi, '"$1"');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully fixed paths in gallery_data.js');
} catch (error) {
  console.error('Error fixing gallery paths:', error);
  process.exit(1);
}
