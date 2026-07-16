'use client';

/**
 * SearchHighlightProvider — Root-level client component.
 *
 * Listens for route change completions and runs the page highlight
 * algorithm whenever a user navigates from a search result.
 * Reads the search query from sessionStorage and highlights
 * matching text on the new page.
 */

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { setupPageHighlight } from '@/lib/search-highlight';

export default function SearchHighlightProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // Run highlight logic after every navigation
    setupPageHighlight();
  }, [pathname]);

  // Render nothing — purely behavioral
  return null;
}
