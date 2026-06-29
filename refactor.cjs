const fs = require('fs');
const path = require('path');

const extractTarget = 'components/hero/Hero.tsx';
const content = fs.readFileSync(extractTarget, 'utf-8');
const lines = content.split('\n');

// 0-indexed: lines 6 to 1086 (inclusive)
const useEffectLines = lines.slice(6, 1087).join('\n');

const newComponentCode = `"use client";

import React, { useEffect } from 'react';

export default function HomepageScripts() {
${useEffectLines}

  return null;
}
`;

fs.writeFileSync('components/scripts/HomepageScripts.tsx', newComponentCode);
console.log('Created components/scripts/HomepageScripts.tsx');

const filesToClean = [
  'components/sections/AdmireEcosystemSection.tsx',
  'components/sections/AyurgreenEcosystemSection.tsx',
  'components/sections/LifeGallerySection.tsx',
  'components/sections/OurAssociationsSection.tsx',
  'components/sections/RehabVillagePreview.tsx',
  'components/sections/RehabilitationJourneySection.tsx',
  'components/sections/StoriesSection.tsx',
  'components/sections/UnderstandingSection.tsx',
  'components/layout/Footer.tsx',
  'components/layout/MegaMenu.tsx',
  'components/hero/Hero.tsx'
];

for (const file of filesToClean) {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${file}`);
    continue;
  }
  
  const fileLines = fs.readFileSync(filePath, 'utf-8').split('\n');
  
  // Double check if lines 6 starts with useEffect
  if (fileLines[6] && fileLines[6].includes('useEffect(() => {')) {
    // Remove lines 6 to 1086
    fileLines.splice(6, 1081);
    fs.writeFileSync(filePath, fileLines.join('\n'));
    console.log(`Cleaned ${file}`);
  } else {
    console.warn(`Skipped ${file} - didn't match expected pattern at line 7`);
  }
}
