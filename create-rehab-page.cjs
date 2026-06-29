const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'scratch', 'rehab-village-markup.html');
let htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Escape backticks in HTML so we can use template literals
htmlContent = htmlContent.replace(/`/g, '\\`');

// Create the Next.js page component
const pageTsxContent = `import React from 'react';
import Head from 'next/head';
import MegaMenu from '@/components/layout/MegaMenu';
import Footer from '@/components/layout/Footer';

export default function RehabVillagePage() {
    return (
        <div className="w-full relative">
            <MegaMenu />
            <main dangerouslySetInnerHTML={{ __html: \`
${htmlContent}
            \` }} />
            <Footer />
        </div>
    );
}
`;

const destPath = path.join(__dirname, 'app', 'rehab-village', 'page.tsx');
fs.mkdirSync(path.dirname(destPath), { recursive: true });
fs.writeFileSync(destPath, pageTsxContent);
console.log('Created app/rehab-village/page.tsx');
