'use client';

/**
 * Ayurgreen Hospital — Search Highlight on Land
 *
 * When a user clicks a search result and navigates to a page,
 * this module finds the searched terms in the page content
 * and highlights them with an animated mark element.
 * Also handles smooth scroll to the #anchor section.
 */

import { getSearchSessionQuery, clearSearchSessionQuery } from './search-engine';

const HIGHLIGHT_CLASS = 'ayurgreen-search-highlight';
const HIGHLIGHT_ACTIVE_CLASS = 'ayurgreen-search-highlight--active';
const HIGHLIGHT_PULSE_CLASS = 'ayurgreen-search-highlight--pulse';

// ─── Main Highlight Runner ────────────────────────────────────────────────────

export function setupPageHighlight(): void {
  const query = getSearchSessionQuery();
  if (!query || query.trim().length < 2) return;

  // Wait for DOM to be ready + React hydration
  requestAnimationFrame(() => {
    setTimeout(() => {
      highlightQueryOnPage(query);
      clearSearchSessionQuery();
    }, 400);
  });
}

// ─── DOM Text Highlighting ────────────────────────────────────────────────────

function highlightQueryOnPage(query: string): void {
  // Remove any existing highlights
  removeHighlights();

  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .filter(t => t.length >= 3) // Only highlight meaningful terms
    .slice(0, 5); // Limit to 5 terms max

  if (terms.length === 0) return;

  // Walk text nodes in the main content area
  const mainContent = document.querySelector('main') || document.body;
  const walker = document.createTreeWalker(
    mainContent,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: (node) => {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;

        // Skip script, style, and already-highlighted nodes
        const tag = parent.tagName.toLowerCase();
        if (['script', 'style', 'noscript', 'code', 'pre'].includes(tag)) {
          return NodeFilter.FILTER_REJECT;
        }
        if (parent.closest(`.${HIGHLIGHT_CLASS}`)) {
          return NodeFilter.FILTER_REJECT;
        }
        // Only text nodes with meaningful content
        if (!node.textContent || node.textContent.trim().length < 3) {
          return NodeFilter.FILTER_REJECT;
        }

        return NodeFilter.FILTER_ACCEPT;
      },
    }
  );

  const textNodesToHighlight: Array<{ node: Text; term: string }> = [];

  let textNode: Text | null;
  while ((textNode = walker.nextNode() as Text | null)) {
    const text = textNode.textContent || '';
    for (const term of terms) {
      if (text.toLowerCase().includes(term)) {
        textNodesToHighlight.push({ node: textNode, term });
        break; // Only first matching term per node
      }
    }
  }

  // Apply highlights (max 15 to avoid overwhelming the page)
  const toHighlight = textNodesToHighlight.slice(0, 15);
  let firstHighlight: HTMLElement | null = null;

  for (const { node, term } of toHighlight) {
    const highlighted = wrapTextNode(node, term);
    if (highlighted && !firstHighlight) {
      firstHighlight = highlighted;
    }
  }

  // Smooth scroll to the first highlight
  if (firstHighlight) {
    setTimeout(() => {
      firstHighlight!.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
      firstHighlight!.classList.add(HIGHLIGHT_PULSE_CLASS);
    }, 200);
  } else {
    // No text found — try scrolling to anchor if present
    scrollToHashAnchor();
  }

  // Auto-remove highlights after 5 seconds
  setTimeout(removeHighlights, 5000);
}

// ─── Text Node Wrapper ────────────────────────────────────────────────────────

function wrapTextNode(textNode: Text, term: string): HTMLElement | null {
  const text = textNode.textContent || '';
  const lowerText = text.toLowerCase();
  const termLower = term.toLowerCase();
  const index = lowerText.indexOf(termLower);

  if (index === -1) return null;

  const parent = textNode.parentNode;
  if (!parent) return null;

  // Split text: before, match, after
  const before = text.substring(0, index);
  const match = text.substring(index, index + term.length);
  const after = text.substring(index + term.length);

  const fragment = document.createDocumentFragment();

  if (before) {
    fragment.appendChild(document.createTextNode(before));
  }

  const mark = document.createElement('mark');
  mark.className = `${HIGHLIGHT_CLASS} ${HIGHLIGHT_ACTIVE_CLASS}`;
  mark.textContent = match;
  fragment.appendChild(mark);

  if (after) {
    fragment.appendChild(document.createTextNode(after));
  }

  parent.replaceChild(fragment, textNode);
  return mark;
}

// ─── Remove Highlights ────────────────────────────────────────────────────────

function removeHighlights(): void {
  const highlights = document.querySelectorAll(`.${HIGHLIGHT_CLASS}`);
  highlights.forEach(el => {
    const parent = el.parentNode;
    if (parent) {
      parent.replaceChild(document.createTextNode(el.textContent || ''), el);
      parent.normalize(); // Merge adjacent text nodes
    }
  });
}

// ─── Anchor Scroll ────────────────────────────────────────────────────────────

function scrollToHashAnchor(): void {
  const hash = window.location.hash;
  if (!hash) return;

  const id = hash.substring(1);
  const target = document.getElementById(id);

  if (target) {
    setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
}

// ─── Export ───────────────────────────────────────────────────────────────────

export { removeHighlights };
