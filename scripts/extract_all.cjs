const fs = require('fs');
const path = require('path');

const pageContent = fs.readFileSync(path.join(__dirname, '../app/page-backup.tsx'), 'utf-8');

// Extract global useEffect
const lines = pageContent.split('\n');
const globalEffectBlock = lines.slice(7, 1088).join('\n').replace("import('../main.js')", "import('../../main.js')"); // lines 8 to 1088

function extractJSX(startStr, endStr) {
    const startIndex = pageContent.indexOf(startStr);
    if (startIndex === -1) throw new Error(`Not found: ${startStr}`);
    let endIndex = pageContent.indexOf(endStr, startIndex);
    if (endIndex === -1) throw new Error(`Not found: ${endStr}`);
    return pageContent.substring(startIndex, endIndex + endStr.length);
}

function writeComponent(dest, name, jsx) {
    const fullPath = path.join(__dirname, '../', dest);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    // We add the globalEffectBlock directly in the component
    // Note that the block already includes `useEffect(() => { ...`
    const content = `"use client";\n\nimport React, { useEffect } from "react";\nimport { galleryImages } from "../../gallery_data.js";\n\nexport default function ${name}() {\n${globalEffectBlock}\n\n  return (\n    <>\n${jsx}\n    </>\n  );\n}\n`;
    fs.writeFileSync(fullPath, content);
    console.log(`Created ${dest}`);
}

// Extract sections
writeComponent('components/sections/UnderstandingSection.tsx', 'UnderstandingSection', extractJSX('<section id="understanding-pin-trigger"', '</section>'));
writeComponent('components/sections/AdmireEcosystemSection.tsx', 'AdmireEcosystemSection', extractJSX('<section id="admire-ecosystem-section"', '</section>'));
writeComponent('components/sections/RehabilitationJourneySection.tsx', 'RehabilitationJourneySection', extractJSX('<section id="rehabilitation-journey"', '</section>'));
writeComponent('components/sections/RehabVillagePreview.tsx', 'RehabVillagePreview', extractJSX('<section className="rv-banner-section"', '</section>'));
writeComponent('components/sections/StoriesSection.tsx', 'StoriesSection', extractJSX('<section className="stories-relearning-section"', '</section>'));
writeComponent('components/sections/LifeGallerySection.tsx', 'LifeGallerySection', extractJSX('<section className="life-gallery-section"', '</section>'));
writeComponent('components/sections/AyurgreenEcosystemSection.tsx', 'AyurgreenEcosystemSection', extractJSX('<section id="ayurgreen-ecosystem-section"', '</section>'));
writeComponent('components/sections/OurAssociationsSection.tsx', 'OurAssociationsSection', extractJSX('<section className="assoc-section"', '</section>'));
writeComponent('components/layout/Footer.tsx', 'Footer', extractJSX('<footer className="minimal-footer"', '</footer>'));
writeComponent('components/layout/MegaMenu.tsx', 'MegaMenu', extractJSX('<div className="mobile-menu-drawer"', '<div className="mobile-menu-backdrop" id="mobile-menu-backdrop" aria-hidden="true"></div>'));

// For Hero, we need to extract from hero-canvas-wrapper but replace the Navbar if it's extracted, OR keep Navbar inside Hero for now.
writeComponent('components/hero/Hero.tsx', 'Hero', extractJSX('<section className="hero-canvas-wrapper"', '</section>'));

// Generate the new page.tsx
const newPage = `"use client";

import React from "react";
import DifferentNationsSection from "@/components/ui/scroll-morph-hero";
import Hero from "@/components/hero/Hero";
import UnderstandingSection from "@/components/sections/UnderstandingSection";
import AdmireEcosystemSection from "@/components/sections/AdmireEcosystemSection";
import RehabilitationJourneySection from "@/components/sections/RehabilitationJourneySection";
import RehabVillagePreview from "@/components/sections/RehabVillagePreview";
import StoriesSection from "@/components/sections/StoriesSection";
import LifeGallerySection from "@/components/sections/LifeGallerySection";
import AyurgreenEcosystemSection from "@/components/sections/AyurgreenEcosystemSection";
import OurAssociationsSection from "@/components/sections/OurAssociationsSection";
import Footer from "@/components/layout/Footer";
import MegaMenu from "@/components/layout/MegaMenu";

export default function Home() {
  return (
    <div className="w-full relative">
      <Hero />
      <UnderstandingSection />
      <AdmireEcosystemSection />
      <RehabilitationJourneySection />
      <RehabVillagePreview />
      <StoriesSection />
      <LifeGallerySection />
      <AyurgreenEcosystemSection />
      <OurAssociationsSection />
      <DifferentNationsSection />
      <Footer />
      <MegaMenu />
    </div>
  );
}
`;

fs.writeFileSync(path.join(__dirname, '../app/page.tsx'), newPage);
console.log("Updated app/page.tsx");
