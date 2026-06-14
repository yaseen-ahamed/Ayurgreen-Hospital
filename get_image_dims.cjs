const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const images = [
  'Assets/ayurgreen-hospital.webp',
  'Assets/Rehab_Stories_Banner.webp',
  'Assets/Ayurgreen_Logo.webp',
  'Assets/nabh-seeklogo.webp',
  'Assets/ayur-diamond.webp',
  'Assets/Ahma-Logo.webp',
  'Assets/VOH Logo.webp',
  'Assets/ayush-logo.webp',
  'Assets/international_patients_transparent.webp',
  'Assets/rehab/prog_stroke.webp',
  'Assets/rehab/prog_spinal_cord.webp',
  'Assets/rehab/prog_tbi.webp',
  'Assets/rehab/prog_hemiplegia.webp',
  'Assets/rehab/prog_paraplegia.webp',
  'Assets/rehab/prog_cerebral_palsy.webp',
  'Assets/rehab/prog_motor_neuron.webp',
  'Assets/rehab/prog_post_surgical.webp',
  'Assets/rehab/prog_parkinsons.webp',
  'Assets/rehab/prog_sciatica.webp',
  'Assets/rehab/th_ayurveda.webp',
  'Assets/rehab/th_physiotherapy.webp',
  'Assets/rehab/th_robotic.webp',
  'Assets/rehab/th_ot.webp',
  'Assets/rehab/th_speech.webp',
  'Assets/rehab/th_vr.webp',
  'Assets/rehab/th_aquatic.webp',
  'Assets/rehab/th_cycle.webp',
  'Assets/Logo/Rehab Village.jpg',
  'Assets/Rehab_Process_Transparent.webp',
  'Assets/Patients/IMG_0265.JPG',
  'Assets/Patients/IMG_0279.JPG',
  'Assets/Patients/IMG_0463.JPG',
  'Assets/Patients/IMG_1479.JPG',
  'Assets/Patients/IMG_1518.JPG',
  'Assets/Patients/IMG_1525.JPG',
  'Assets/Patients/IMG_1555.JPG',
  'Assets/Patients/IMG_1690.JPG'
];

async function getDimensions() {
  const results = {};
  for (const img of images) {
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
  fs.writeFileSync('image_dimensions.json', JSON.stringify(results, null, 2));
}

getDimensions();
