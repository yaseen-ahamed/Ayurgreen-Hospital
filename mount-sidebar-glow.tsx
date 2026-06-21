import React from 'react';
import { createRoot } from 'react-dom/client';
import { GlowCard } from './components/ui/spotlight-card';

export function mountSidebarGlow() {
  const selectors = [
    '.ayur-qdept-sidebar',
    '.card',
    '.admire-info-card',
    '.nations-badge-card',
    '.story-card',
    '.rehab-card',
    '.rv-info-card',
    '.admire-card',
    '.therapy-card',
    '.scroll-card',
    '.storytelling-card',
    '.hero-canvas-card'
  ];
  
  const elements = document.querySelectorAll(selectors.join(', '));
  if (elements.length === 0) return;
  
  // Skip if we are on the homepage
  const isHomepage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');
  if (isHomepage) return;

  // Insert global style to ensure text inside dark cards is readable
  if (!document.getElementById('glow-dark-theme-style')) {
    const style = document.createElement('style');
    style.id = 'glow-dark-theme-style';
    style.innerHTML = `
      .glow-dark-theme {
        background: transparent !important;
        background-color: transparent !important;
        background-image: none !important;
        border-color: transparent !important;
        box-shadow: none !important;
      }
      .glow-dark-theme::before,
      .glow-dark-theme::after {
        background: transparent !important;
        background-image: none !important;
        border-color: transparent !important;
      }
      .glow-dark-theme,
      .glow-dark-theme h1,
      .glow-dark-theme h2,
      .glow-dark-theme h3,
      .glow-dark-theme h4,
      .glow-dark-theme h5,
      .glow-dark-theme h6,
      .glow-dark-theme p,
      .glow-dark-theme span:not([class*="icon"]),
      .glow-dark-theme a,
      .glow-dark-theme div {
        color: #ffffff !important;
      }
      .glow-dark-theme p, .glow-dark-theme .text-muted {
        color: rgba(255, 255, 255, 0.8) !important;
      }
    `;
    document.head.appendChild(style);
  }

  elements.forEach(element => {
    // Skip if nested in a footer
    if (element.closest('footer')) return;

    // Check if already mounted
    if (element.querySelector('.glow-card-bg-root')) return;

    element.classList.add('glow-dark-theme');

    const rootElement = document.createElement('div');
    rootElement.className = 'glow-card-bg-root';
    rootElement.style.position = 'absolute';
    rootElement.style.inset = '0';
    rootElement.style.zIndex = '-1';
    
    // Keep the border radius of the element
    const computedStyle = window.getComputedStyle(element);
    rootElement.style.borderRadius = computedStyle.borderRadius;
    rootElement.style.overflow = 'hidden';
    
    // The element itself needs position relative and z-index to overlay the background
    if (computedStyle.position === 'static') {
        (element as HTMLElement).style.position = 'relative';
    }
    (element as HTMLElement).style.zIndex = '1';
    
    if (element.classList.contains('ayur-qdept-sidebar')) {
      // Remove internal scrolling and max-height so it grows to fit all items
      (element as HTMLElement).style.maxHeight = 'none';
      (element as HTMLElement).style.overflowY = 'visible';
    }
    
    // Make element transparent so the glow shows through
    (element as HTMLElement).style.background = 'transparent';
    (element as HTMLElement).style.backgroundColor = 'transparent';

    element.prepend(rootElement);
    
    const root = createRoot(rootElement);
    // You can customize colors based on card types if needed, using green as default
    root.render(
      <GlowCard customSize className="w-full h-full m-0 p-0" glowColor="green" />
    );
  });
}
