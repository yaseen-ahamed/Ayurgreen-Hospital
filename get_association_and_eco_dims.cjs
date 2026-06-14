const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const assoc = [
  'Assets/Our Associations/AMAI Logo.png',
  'Assets/Our Associations/Ahma-Logo.png',
  'Assets/Our Associations/Aura-Malabar-Logo.webp',
  'Assets/Our Associations/Blood Bank Perinthalmanna Logo.jpg',
  'Assets/Our Associations/CII Logo.png',
  'Assets/Our Associations/ILA Foundation Logo.jpg',
  'Assets/Our Associations/National Ayurvedic Medical Association.webp',
  'Assets/Our Associations/ayurveda promotion society logo.jpg',
  'Assets/Ayurgreen Ecosystem/Logomark Ayurgreen.png',
  'Assets/Ayurgreen Ecosystem/Getwell Logo.jpg',
  'Assets/Ayurgreen Ecosystem/logo Niramaya.png',
  'Assets/Ayurgreen Ecosystem/Green Health Logo.jpg',
  'Assets/Ayurgreen Ecosystem/Ayurgreen College.png',
  'Assets/Ayurgreen Ecosystem/ayurgreen Scientifica Logo.png',
  'Assets/Ayurgreen Ecosystem/Shadrasa Logo.jpg',
  'Assets/Ayurgreen Ecosystem/AG Foundation Logo.jpg',
  'Assets/Ayurgreen Ecosystem/ACFHE Logo.png'
];

async function getDimensions() {
  const results = {};
  for (const img of assoc) {
    const p = path.join(__dirname, img);
    if (fs.existsSync(p)) {
      try {
        const metadata = await sharp(p).metadata();
        results[img] = { width: metadata.width, height: metadata.height };
      } catch (err) {
        results[img] = { error: err.message };
      }
    } else {
      results[img] = { error: 'Not found' };
    }
  }
  console.log(JSON.stringify(results, null, 2));
  fs.writeFileSync('assoc_dimensions.json', JSON.stringify(results, null, 2));
}

getDimensions();
