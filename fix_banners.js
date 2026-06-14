import sharp from 'sharp';
import fs from 'fs';

async function run() {
   try {
       await sharp('Assets/Ayurgreen Hospital.png').webp({quality: 85}).toFile('Assets/ayurgreen-hospital.webp');
       console.log("Converted Ayurgreen Hospital.webp");
       await sharp('Assets/Stories of Relearning Banner.png').webp({quality: 85}).toFile('Assets/stories-banner.webp');
       console.log("Converted Stories of Relearning Banner.webp");
   } catch(e) {
       console.error(e);
   }
}
run();
