import React from 'react';
import { createRoot } from 'react-dom/client';
import { GlowCard } from './components/ui/spotlight-card';

export function mountSidebarGlow() {
  const sidebars = document.querySelectorAll('.ayur-qdept-sidebar');
  if (sidebars.length === 0) return;
  
  // Skip if we are on the homepage
  const isHomepage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');
  if (isHomepage) return;

  sidebars.forEach(sidebar => {
    // Check if already mounted
    if (sidebar.querySelector('.glow-card-bg-root')) return;

    const rootElement = document.createElement('div');
    rootElement.className = 'glow-card-bg-root';
    rootElement.style.position = 'absolute';
    rootElement.style.inset = '0';
    rootElement.style.zIndex = '-1';
    
    // Keep the border radius of the sidebar
    const computedStyle = window.getComputedStyle(sidebar);
    rootElement.style.borderRadius = computedStyle.borderRadius;
    rootElement.style.overflow = 'hidden';
    
    // The sidebar itself needs position relative and z-index to overlay the background
    (sidebar as HTMLElement).style.position = 'relative';
    (sidebar as HTMLElement).style.zIndex = '1';
    
    // Remove internal scrolling and max-height so it grows to fit all items
    (sidebar as HTMLElement).style.maxHeight = 'none';
    (sidebar as HTMLElement).style.overflowY = 'visible';
    
    // Make sidebar transparent so the glow shows through
    (sidebar as HTMLElement).style.background = 'transparent';
    (sidebar as HTMLElement).style.backgroundColor = 'transparent';

    sidebar.prepend(rootElement);
    
    const root = createRoot(rootElement);
    root.render(
      <GlowCard customSize className="w-full h-full m-0 p-0" glowColor="green" />
    );
  });
}
