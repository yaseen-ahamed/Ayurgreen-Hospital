const fs = require('fs');
const path = require('path');

const pageContent = fs.readFileSync(path.join(__dirname, '../app/page-backup.tsx'), 'utf-8');

function writeComponent(destPath, componentName, jsxContent, useEffectContent = '') {
    const fullPath = path.join(__dirname, '../', destPath);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    let content = `"use client";\n\nimport React, { useEffect } from "react";\n\n`;
    content += `export default function ${componentName}() {\n`;
    
    if (useEffectContent) {
        content += `  useEffect(() => {\n${useEffectContent}\n  }, []);\n\n`;
    }
    
    content += `  return (\n    <>\n${jsxContent}\n    </>\n  );\n}\n`;
    
    fs.writeFileSync(fullPath, content);
    console.log(`Wrote ${destPath}`);
}

function extractSection(startMarker, endMarker) {
    const startIndex = pageContent.indexOf(startMarker);
    if (startIndex === -1) throw new Error(`Could not find start marker: ${startMarker}`);
    
    const endIndex = pageContent.indexOf(endMarker, startIndex);
    if (endIndex === -1) throw new Error(`Could not find end marker: ${endMarker}`);
    
    return pageContent.substring(startIndex, endIndex + endMarker.length);
}

// 1. Extract Navbar
const navbarJsx = extractSection('<header className="hero-header">', '</header>');
const navbarJs = `
        const menuBtn = document.getElementById('menu-btn');
        const drawer = document.getElementById('mobile-menu-drawer');
        const closeBtn = document.getElementById('mobile-menu-close-btn');
        const backdrop = document.getElementById('mobile-menu-backdrop');
        const triggers = document.querySelectorAll('.mobile-nav-trigger');

        if (!menuBtn || !drawer || !backdrop) return;

        function openMenu() {
            drawer.classList.add('active');
            backdrop.classList.add('active');
            drawer.setAttribute('aria-hidden', 'false');
            backdrop.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            drawer.classList.remove('active');
            backdrop.classList.remove('active');
            drawer.setAttribute('aria-hidden', 'true');
            backdrop.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }

        menuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (window.innerWidth > 1024) return;
            if (drawer.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        if (closeBtn) closeBtn.addEventListener('click', closeMenu);
        backdrop.addEventListener('click', closeMenu);

        drawer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        triggers.forEach(trigger => {
            trigger.addEventListener('click', function (e) {
                e.preventDefault();
                const parent = this.parentElement;
                const content = parent.querySelector('.mobile-nav-dropdown-content');
                const icon = this.querySelector('[data-lucide="chevron-down"]');

                const isActive = parent.classList.toggle('active');
                if (isActive) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    if (icon) icon.style.transform = 'rotate(180deg)';
                } else {
                    content.style.maxHeight = '0px';
                    if (icon) icon.style.transform = 'rotate(0deg)';
                }
            });
        });
`;
writeComponent('components/layout/Navbar.tsx', 'Navbar', navbarJsx, navbarJs);

// 2. Extract MegaMenu (Mobile Menu Drawer)
const megaMenuJsx = extractSection('<div className="mobile-menu-drawer"', '<div className="mobile-menu-backdrop" id="mobile-menu-backdrop" aria-hidden="true"></div>');
writeComponent('components/layout/MegaMenu.tsx', 'MegaMenu', megaMenuJsx);

console.log("Extraction complete.");
