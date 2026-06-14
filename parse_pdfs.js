import fs from 'fs';
import path from 'path';
import pdf from 'pdf-parse';

const files = [
  'Docs/Ayurgreen Website Header.pdf',
  'Docs/Ayurgreen Website Homepage Structure.pdf',
  'Docs/Homepage Content.pdf',
  'Docs/Homepage Visual Guidance.pdf'
];

async function parseAll() {
  for (const file of files) {
    try {
      if (fs.existsSync(file)) {
        const dataBuffer = fs.readFileSync(file);
        const data = await pdf(dataBuffer);
        const name = path.basename(file).replace('.pdf', '.txt');
        fs.writeFileSync(name, data.text, 'utf-8');
        console.log(`Successfully parsed ${file} into ${name}`);
      } else {
        console.error(`File not found: ${file}`);
      }
    } catch (e) {
      console.error(`Error parsing ${file}:`, e.message);
    }
  }
}

parseAll();
