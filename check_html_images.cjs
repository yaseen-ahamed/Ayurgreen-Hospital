const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const content = fs.readFileSync('index.html', 'utf-8');
const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
let match;
const imgPaths = new Set();

while ((match = imgRegex.exec(content)) !== null) {
  imgPaths.add(match[1]);
}

async function verifyImages() {
  console.log(`Found ${imgPaths.size} unique image paths in index.html:`);
  const report = [];
  for (const src of imgPaths) {
    if (src.startsWith('http')) {
      report.push({ src, status: 'external' });
      continue;
    }
    // Decode URI
    const decoded = decodeURIComponent(src);
    let realPath = path.join(__dirname, decoded);
    let exists = fs.existsSync(realPath);
    
    // If not exists, check in other folders like Assets/Logo
    if (!exists) {
      const filename = path.basename(decoded);
      // search recursively in Assets
      function searchFile(dir, name) {
        const list = fs.readdirSync(dir);
        for (const file of list) {
          const p = path.join(dir, file);
          const stat = fs.statSync(p);
          if (stat.isDirectory()) {
            const found = searchFile(p, name);
            if (found) return found;
          } else if (file === name) {
            return p;
          }
        }
        return null;
      }
      const foundPath = searchFile('Assets', filename);
      if (foundPath) {
        realPath = foundPath;
        exists = true;
      }
    }
    
    if (exists) {
      try {
        const metadata = await sharp(realPath).metadata();
        report.push({
          src,
          realPath: path.relative(__dirname, realPath),
          width: metadata.width,
          height: metadata.height,
          status: 'exists'
        });
      } catch (err) {
        report.push({ src, realPath: path.relative(__dirname, realPath), error: err.message, status: 'error' });
      }
    } else {
      report.push({ src, status: 'missing' });
    }
  }
  console.log(JSON.stringify(report, null, 2));
  fs.writeFileSync('html_image_report.json', JSON.stringify(report, null, 2));
}

verifyImages();
