import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');

const domain = 'https://ayurgreenhospital.com';

const patientStoryVideos = [
    {
        shortcode: 'DUfjDAYAYyj',
        index: 1,
        title: 'Patient Recovery Story 1 | Ayurgreen Hospital',
        description: 'Watch the inspiring patient recovery and integrated ortho-neuro rehabilitation journey at Ayurgreen Hospital.'
    },
    {
        shortcode: 'DUqTXCjCLf9',
        index: 2,
        title: 'Patient Recovery Story 2 | Ayurgreen Hospital',
        description: 'Watch the inspiring patient recovery and integrated ortho-neuro rehabilitation journey at Ayurgreen Hospital.'
    },
    {
        shortcode: 'DVKpXc8CI2O',
        index: 3,
        title: 'Patient Recovery Story 3 | Ayurgreen Hospital',
        description: 'Watch the inspiring patient recovery and integrated ortho-neuro rehabilitation journey at Ayurgreen Hospital.'
    },
    {
        shortcode: 'DVNhzc7CI4s',
        index: 4,
        title: 'Patient Recovery Story 4 | Ayurgreen Hospital',
        description: 'Watch the inspiring patient recovery and integrated ortho-neuro rehabilitation journey at Ayurgreen Hospital.'
    },
    {
        shortcode: 'DVa26Hvgddv',
        index: 5,
        title: 'Patient Recovery Story 5 | Ayurgreen Hospital',
        description: 'Watch the inspiring patient recovery and integrated ortho-neuro rehabilitation journey at Ayurgreen Hospital.'
    },
    {
        shortcode: 'DVnPsqkAQv2',
        index: 6,
        title: 'Patient Recovery Story 6 | Ayurgreen Hospital',
        description: 'Watch the inspiring patient recovery and integrated ortho-neuro rehabilitation journey at Ayurgreen Hospital.'
    },
    {
        shortcode: 'DVnoVftAYsW',
        index: 7,
        title: 'Patient Recovery Story 7 | Ayurgreen Hospital',
        description: 'Watch the inspiring patient recovery and integrated ortho-neuro rehabilitation journey at Ayurgreen Hospital.'
    },
    {
        shortcode: 'DWT3WNMAU8_',
        index: 8,
        title: 'Patient Recovery Story 8 | Ayurgreen Hospital',
        description: 'Watch the inspiring patient recovery and integrated ortho-neuro rehabilitation journey at Ayurgreen Hospital.'
    },
    {
        shortcode: 'DWgAjJhgUty',
        index: 9,
        title: 'Patient Recovery Story 9 | Ayurgreen Hospital',
        description: 'Watch the inspiring patient recovery and integrated ortho-neuro rehabilitation journey at Ayurgreen Hospital.'
    },
    {
        shortcode: 'DWjEZG6Aaj3',
        index: 10,
        title: 'Patient Recovery Story 10 | Ayurgreen Hospital',
        description: 'Watch the inspiring patient recovery and integrated ortho-neuro rehabilitation journey at Ayurgreen Hospital.'
    },
    {
        shortcode: 'DWlhRvEAf59',
        index: 11,
        title: 'Patient Recovery Story 11 | Ayurgreen Hospital',
        description: 'Watch the inspiring patient recovery and integrated ortho-neuro rehabilitation journey at Ayurgreen Hospital.'
    },
    {
        shortcode: 'DXvaUWyzm3i',
        index: 12,
        title: 'Patient Recovery Story 12 | Ayurgreen Hospital',
        description: 'Watch the inspiring patient recovery and integrated ortho-neuro rehabilitation journey at Ayurgreen Hospital.'
    },
    {
        shortcode: 'DX4Knwshg8V',
        index: 13,
        title: 'Patient Recovery Story 13 | Ayurgreen Hospital',
        description: 'Watch the inspiring patient recovery and integrated ortho-neuro rehabilitation journey at Ayurgreen Hospital.'
    }
];

const generateXml = () => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  
  <!-- Homepage -->
  <url>
    <loc>${domain}/</loc>
    <lastmod>2026-06-15</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${domain}/Assets/ayurgreen-hospital.webp</image:loc>
      <image:title>Ayurgreen Hospital Kerala</image:title>
      <image:caption>Front view of Ayurgreen Hospital – Integrated Ortho-Neuro Rehabilitation &amp; Ayurveda Hospital in Kerala, India</image:caption>
    </image:image>
    <image:image>
      <image:loc>${domain}/Assets/Rehab_Stories_Banner.webp</image:loc>
      <image:title>Stories of Relearning</image:title>
      <image:caption>Ayurgreen Hospital patient recovery success stories and integrated rehabilitation journey</image:caption>
    </image:image>
    <image:image>
      <image:loc>${domain}/Assets/Ayurgreen_Logo.webp</image:loc>
      <image:title>Ayurgreen Hospital Logo</image:title>
      <image:caption>Official logo of Ayurgreen Hospital – Integrated Ortho-Neuro Rehabilitation &amp; Ayurveda Hospital</image:caption>
    </image:image>
    <video:video>
      <video:thumbnail_loc>${domain}/Assets/ayurgreen-hospital.webp</video:thumbnail_loc>
      <video:title>Ayurgreen Hospital – Integrated Rehabilitation &amp; Ayurveda</video:title>
      <video:description>An introduction to India's leading integrated ortho-neuro rehabilitation hospital combining robotics and authentic Kerala Ayurveda.</video:description>
      <video:content_loc>${domain}/Assets/Logo/Ayurgreen%20Hospitals.webm</video:content_loc>
      <video:publication_date>2026-06-15T00:00:00+05:30</video:publication_date>
    </video:video>`;

    // Add video sitemaps for the 13 patient stories
    patientStoryVideos.forEach(v => {
        const thumbnail = `https://images.weserv.nl/?url=https://www.instagram.com/p/${v.shortcode}/media/?size=l`;
        xml += `
    <video:video>
      <video:thumbnail_loc>${thumbnail}</video:thumbnail_loc>
      <video:title>${v.title}</video:title>
      <video:description>${v.description}</video:description>
      <video:content_loc>${domain}/Assets/Patients/Stories%20of%20Relearning/Stories%20of%20Relearning%20${v.index}.mp4</video:content_loc>
      <video:publication_date>2026-06-15T00:00:00+05:30</video:publication_date>
    </video:video>`;
    });

    xml += `
  </url>

  <!-- About Us -->
  <url>
    <loc>${domain}/about.html</loc>
    <lastmod>2026-06-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Clinical Programs -->
  <url>
    <loc>${domain}/programs.html</loc>
    <lastmod>2026-06-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Therapies and Modalities -->
  <url>
    <loc>${domain}/therapies.html</loc>
    <lastmod>2026-06-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Rehab Village -->
  <url>
    <loc>${domain}/rehab-village.html</loc>
    <lastmod>2026-06-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${domain}/Assets/Logo/Rehab%20Village.webp</image:loc>
      <image:title>Rehab Village Logo</image:title>
      <image:caption>Rehab Village at Ayurgreen Hospital – Community living for long-term patient rehabilitation stay</image:caption>
    </image:image>
  </url>

  <!-- International Patients -->
  <url>
    <loc>${domain}/international-patients.html</loc>
    <lastmod>2026-06-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;

  // Service Pages
  const servicePages = [
    // Therapies
    'stroke-rehab.html', 'spinal-cord-injury.html', 'traumatic-brain-injury.html', 'hemiplegia.html',
    'quadriplegia-paraplegia.html', 'post-surgical-complications.html', 'motor-neuron-diseases.html',
    'cerebral-palsy.html', 'parkinsons-disease.html', 'myopathy.html', 'disc-spine-problems.html',
    'sciatica.html', 'obesity.html', 'post-covid-complications.html', 'muscular-dystrophy.html',
    'osteoarthritis.html', 'rheumatoid-arthritis.html', 'developmental-delay.html',
    'psychological-problems.html', 'autism.html', 'psychiatry.html',
    // Departments
    'ayurveda.html', 'physiotherapy.html', 'robotic-rehab.html', 'occupational-therapy.html',
    'speech-therapy.html', 'virtual-reality.html', 'yoga-meditation.html', 'acupuncture.html',
    'reflexology.html', 'hydro-therapy.html', 'pediatrics.html', 'slimming-treatment.html',
    'pain-management.html', 'diet-nutrition.html', 'counseling.html', 'dentistry.html', 'assistive-devices.html',
    // Specializations
    'neurology.html', 'neurosurgery.html', 'orthopedic.html', 'ent.html', 'general-medicine.html',
    'urology.html', 'cardiology.html', 'respiratory-therapy.html', 'neuro-psychology.html'
  ];

  servicePages.forEach(page => {
      xml += `
  <url>
    <loc>${domain}/${page}</loc>
    <lastmod>2026-06-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`;
  });

  xml += `\n</urlset>\n`;
    return xml;
};

try {
    const xmlContent = generateXml();
    fs.writeFileSync(sitemapPath, xmlContent, 'utf8');
    console.log('Successfully generated public/sitemap.xml');
} catch (err) {
    console.error('Error generating sitemap.xml:', err);
    process.exit(1);
}
