'use client';

import React, { useCallback } from 'react';
import { ArrowUpRight, Hash } from 'lucide-react';
import type { SearchResult } from '@/lib/search-types';
import { highlightText, setSearchSessionQuery, addRecentSearch } from '@/lib/search-engine';

interface SearchResultItemProps {
  result: SearchResult;
  query: string;
  isActive: boolean;
  onClose: () => void;
}

export default function SearchResultItem({
  result,
  query,
  isActive,
  onClose,
}: SearchResultItemProps) {
  const { item } = result;

  // Parse the URL to detect if it has an anchor
  const [basePath, anchor] = item.url.split('#');
  const displayUrl = basePath.replace(/^\//, '') || 'home';

  const handleClick = useCallback(() => {
    if (query.trim()) {
      setSearchSessionQuery(query);
      addRecentSearch(query);
    }
    onClose();
    // Navigate programmatically
    window.location.href = item.url;
  }, [item.url, query, onClose]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }, [handleClick]);

  // Highlight matched text in title and description
  const highlightedTitle = highlightText(item.title, query, 80);
  const highlightedDesc = highlightText(item.description, query, 160);

  return (
    <div
      role="option"
      aria-selected={isActive}
      className={`search-result-item ${isActive ? 'search-result--active' : ''}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Category Icon */}
      <div className="search-result-icon-wrapper" aria-hidden="true">
        <span>{item.icon}</span>
      </div>

      {/* Content */}
      <div className="search-result-content">
        <div
          className="search-result-title"
          dangerouslySetInnerHTML={{ __html: highlightedTitle }}
        />
        {item.description && (
          <div
            className="search-result-description"
            dangerouslySetInnerHTML={{ __html: highlightedDesc }}
          />
        )}
        <div className="search-result-meta">
          <span className="search-result-url">
            {displayUrl || 'Home'}
          </span>
          {anchor && (
            <span className="search-result-anchor">
              <Hash size={9} />
              {anchor}
            </span>
          )}
        </div>
      </div>

      {/* Arrow indicator */}
      <div className="search-result-arrow" aria-hidden="true">
        <ArrowUpRight size={15} />
      </div>
    </div>
  );
}
