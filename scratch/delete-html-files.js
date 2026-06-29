import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();

// Directories to scan for .html files to delete
const targets = [
  projectRoot,
  path.join(projectRoot, 'public')
];

targets.forEach(dir => {
  if (!fs.existsSync(dir)) return;

  const files = fs.readdirSync(dir);
  files.forEach(file => {
    if (file.endsWith('.html')) {
      const filePath = path.join(dir, file);
      try {
        fs.unlinkSync(filePath);
        console.log(`Deleted: ${filePath}`);
      } catch (err) {
        console.error(`Error deleting ${filePath}:`, err);
      }
    }
  });
});
