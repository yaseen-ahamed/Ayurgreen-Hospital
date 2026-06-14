import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, 'Assets', 'international_patients.webp');
const outputPath = path.join(__dirname, 'Assets', 'international_patients_transparent.webp');

console.log('Processing image to remove white background using ES Modules...');

sharp(inputPath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })
  .then(({ data, info }) => {
    // Process pixels to replace white/near-white with transparent
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      // If it is solid white or extremely close to white, make it transparent
      // We use a threshold of 245 to catch compression artifacts near the edges
      if (r >= 245 && g >= 245 && b >= 245) {
        data[i + 3] = 0; // Alpha channel to 0 (transparent)
      }
    }

    return sharp(data, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    })
    .webp({ quality: 90 })
    .toFile(outputPath);
  })
  .then(() => {
    console.log('Image successfully made transparent and saved to Assets/international_patients_transparent.webp');
  })
  .catch(err => {
    console.error('Error processing image:', err);
    process.exit(1);
  });
