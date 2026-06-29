import fs from 'fs';
import path from 'path';

const files = [
  'components/layout/Header.tsx',
  'components/layout/MegaMenu.tsx',
  'components/layout/Footer.tsx'
];

const projectRoot = process.cwd();

files.forEach(file => {
  const filePath = path.join(projectRoot, file);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Replace href="name.html" with href="/name"
  // Handles hashes too, like href="about.html#facilities" -> href="/about#facilities"
  const regex = /href="([a-zA-Z0-9_-]+)\.html(#?[a-zA-Z0-9_-]*)"/g;
  content = content.replace(regex, 'href="/$1$2"');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated links in ${file}`);
});
