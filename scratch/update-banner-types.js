import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const dataDir = path.join(process.cwd(), 'data/rehab');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.ts') && f !== 'types.ts');

files.forEach(file => {
  const filePath = path.join(dataDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // find bannerImage
  const match = content.match(/bannerImage:\s*"([^"]+)"/);
  if (match) {
    const imgPath = path.join(process.cwd(), 'public', match[1]);
    try {
      const output = execSync(`sips -g pixelWidth -g pixelHeight "${imgPath}"`).toString();
      const widthMatch = output.match(/pixelWidth:\s*(\d+)/);
      const heightMatch = output.match(/pixelHeight:\s*(\d+)/);
      
      if (widthMatch && heightMatch) {
        const width = parseInt(widthMatch[1]);
        const height = parseInt(heightMatch[1]);
        
        let bannerType = 'photo';
        if (width === height) {
           bannerType = 'illustration';
        }
        
        if (!content.includes('bannerType:')) {
           content = content.replace(
             /bannerImage:\s*"([^"]+)",/,
             `bannerImage: "$1",\n    bannerType: "${bannerType}",`
           );
           fs.writeFileSync(filePath, content);
           console.log(`Updated ${file} -> ${bannerType}`);
        }
      }
    } catch(err) {
      console.error(`Error processing image for ${file}:`, err.message);
    }
  }
});
