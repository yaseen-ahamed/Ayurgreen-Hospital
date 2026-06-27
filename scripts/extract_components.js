const fs = require('fs');
const path = require('path');

const pageContent = fs.readFileSync(path.join(__dirname, '../app/page-backup.tsx'), 'utf-8');
const lines = pageContent.split('\n');

function extractLines(startLine, endLine) {
    return lines.slice(startLine - 1, endLine).join('\n');
}

function writeComponent(destPath, content, imports = '') {
    const fullPath = path.join(__dirname, '../', destPath);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    let finalContent = `"use client";\n\nimport React, { useEffect } from "react";\n${imports}\n\n`;
    finalContent += `export default function ${path.basename(destPath, '.tsx')}() {\n`;
    
    // Check if there is useEffect logic for this component
    // We can inject it if needed, but for now we'll just return the JSX
    finalContent += `  return (\n    <>\n${content}\n    </>\n  );\n}\n`;
    
    fs.writeFileSync(fullPath, finalContent);
}

// Extraction boundaries based on previous grep search
// Navbar: 1110 to 1308
const navbarJsx = extractLines(1110, 1308);
writeComponent('components/layout/Navbar.tsx', navbarJsx);

// MobileMenu (MegaMenu): 3269 to 3429
const mobileMenuJsx = extractLines(3269, 3429);
writeComponent('components/layout/MegaMenu.tsx', mobileMenuJsx);

// Hero Slider controls + Text: 1311 to 1349 (wait, we need to extract Hero)
// Let's hold off on this script and just use multi_replace or standard extraction
