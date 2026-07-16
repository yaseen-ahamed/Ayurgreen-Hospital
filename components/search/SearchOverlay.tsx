'use client';

/**
 * Ayurgreen Hospital — Premium Search Overlay
 *
 * Full-screen intelligent search with:
 * - Live fuzzy + semantic search via Fuse.js
 * - Medical synonym expansion
 * - Categorized, grouped results
 * - Keyboard navigation (↑↓ Arrow, Enter, Escape)
 * - "Did you mean?" for misspelled queries
 * - Zero-result recovery with suggestions
 * - Recent searches (localStorage)
 * - Popular searches
 * - Cmd+K / Ctrl+K shortcut
 */

import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from 'react';
import { Search, X, Clock, TrendingUp, ArrowRight } from 'lucide-react';
import type { SearchIndexEntry, SearchResult, SearchGrouped } from '@/lib/search-types';
import {
  loadSearchIndex,
  search,
  groupResults,
  getDidYouMean,
  getZeroResultSuggestions,
  POPULAR_SEARCHES,
  getRecentSearches,
  clearRecentSearches,
  setSearchSessionQuery,
  addRecentSearch,
} from '@/lib/search-engine';
import SearchResultItem from './SearchResultItem';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

// ─── Debounce Hook ────────────────────────────────────────────────────────────

function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState<T>(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

// ─── SearchOverlay Component ──────────────────────────────────────────────────

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState<SearchIndexEntry[]>([]);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [grouped, setGrouped] = useState<SearchGrouped[]>([]);
  const [didYouMean, setDidYouMean] = useState<string | null>(null);
  const [zeroSuggestions, setZeroSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [indexLoaded, setIndexLoaded] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const debouncedQuery = useDebounce(query, 150);

  // ── Load index on first open ───────────────────────────────────────────────
  useEffect(() => {
    if (isOpen && !indexLoaded) {
      setIsLoading(true);
      loadSearchIndex().then(data => {
        setIndex(data);
        setIndexLoaded(true);
        setIsLoading(false);
      });
    }
  }, [isOpen, indexLoaded]);

  // ── Focus input when opened ────────────────────────────────────────────────
  useEffect(() => {
    if (isOpen) {
      setRecentSearches(getRecentSearches());
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
      setGrouped([]);
      setDidYouMean(null);
      setZeroSuggestions([]);
      setActiveIndex(-1);
    }
  }, [isOpen]);

  // ── Body scroll lock ───────────────────────────────────────────────────────
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // ── Run search when query changes ──────────────────────────────────────────
  useEffect(() => {
    if (!indexLoaded || !debouncedQuery.trim()) {
      setResults([]);
      setGrouped([]);
      setDidYouMean(null);
      setZeroSuggestions([]);
      setActiveIndex(-1);
      return;
    }

    if (debouncedQuery.trim().length < 2) return;

    setIsLoading(true);
    // Use requestIdleCallback if available, else setTimeout
    const run = () => {
      const searchResults = search(debouncedQuery, index);
      const searchGrouped = groupResults(searchResults);

      setResults(searchResults);
      setGrouped(searchGrouped);
      setActiveIndex(-1);

      if (searchResults.length === 0) {
        setDidYouMean(getDidYouMean(debouncedQuery, index));
        setZeroSuggestions(getZeroResultSuggestions(debouncedQuery));
      } else {
        const score = searchResults[0]?.score || 0;
        if (score > 0.35) {
          setDidYouMean(getDidYouMean(debouncedQuery, index));
        } else {
          setDidYouMean(null);
        }
        setZeroSuggestions([]);
      }

      setIsLoading(false);
    };

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      (window as any).requestIdleCallback(run);
    } else {
      setTimeout(run, 0);
    }
  }, [debouncedQuery, index, indexLoaded]);

  // ── Flatten all results for keyboard navigation ────────────────────────────
  const allResults = useMemo(
    () => grouped.flatMap(g => g.results),
    [grouped]
  );

  // ── Keyboard navigation ────────────────────────────────────────────────────
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex(i => Math.min(i + 1, allResults.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex(i => Math.max(i - 1, -1));
        break;
      case 'Enter':
        if (activeIndex >= 0 && allResults[activeIndex]) {
          e.preventDefault();
          const item = allResults[activeIndex].item;
          if (query.trim()) {
            setSearchSessionQuery(query);
            addRecentSearch(query);
          }
          onClose();
          window.location.href = item.url;
        }
        break;
      case 'Escape':
        onClose();
        break;
    }
  }, [activeIndex, allResults, query, onClose]);

  // ── Scroll active item into view ───────────────────────────────────────────
  useEffect(() => {
    if (activeIndex >= 0 && resultsRef.current) {
      const activeEl = resultsRef.current.querySelector('[aria-selected="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [activeIndex]);

  // ── Query suggestion click ─────────────────────────────────────────────────
  const handleSuggestionClick = useCallback((suggestion: string) => {
    setQuery(suggestion);
    inputRef.current?.focus();
  }, []);

  // ── Navigate from "Did you mean" ───────────────────────────────────────────
  const handleDidYouMeanClick = useCallback(() => {
    if (didYouMean) {
      setQuery(didYouMean);
      inputRef.current?.focus();
    }
  }, [didYouMean]);

  // ── Backdrop click ─────────────────────────────────────────────────────────
  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  }, [onClose]);

  // ── Count a flat result index for active tracking ─────────────────────────
  let flatResultIndex = 0;

  const isEmpty = query.trim().length >= 2 && !isLoading && results.length === 0;
  const showDefault = !query.trim();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`search-overlay-backdrop ${isOpen ? 'search-overlay--open' : ''}`}
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      {/* Overlay Panel */}
      <div
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site search"
        className={`search-overlay ${isOpen ? 'search-overlay--open' : ''}`}
        onKeyDown={handleKeyDown}
      >
        {/* ── Input Area ──────────────────────────────────────────── */}
        <div className="search-input-wrapper">
          <div className="search-input-icon" aria-hidden="true">
            <Search size={20} strokeWidth={2} />
          </div>
          <input
            ref={inputRef}
            type="search"
            className="search-input-field"
            placeholder="Search treatments, conditions, doctors, FAQs…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="none"
            spellCheck={false}
            aria-label="Search"
            aria-autocomplete="list"
            aria-controls="search-results-listbox"
            aria-activedescendant={activeIndex >= 0 ? `search-result-${activeIndex}` : undefined}
          />
          {isLoading && (
            <div className="search-spinner" aria-label="Searching…" />
          )}
          {query && !isLoading && (
            <button
              className="search-close-btn"
              onClick={() => setQuery('')}
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}
          {!query && (
            <button
              className="search-close-btn"
              onClick={onClose}
              aria-label="Close search"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* ── Keyboard Shortcuts Bar ───────────────────────────────── */}
        <div className="search-shortcuts-bar" aria-hidden="true">
          <span className="search-shortcut-item">
            <span className="search-shortcut-key">↑↓</span> Navigate
          </span>
          <span className="search-shortcut-item">
            <span className="search-shortcut-key">↵</span> Select
          </span>
          <span className="search-shortcut-item">
            <span className="search-shortcut-key">Esc</span> Close
          </span>
          <span className="search-shortcut-item">
            <span className="search-shortcut-key">⌘K</span> Open
          </span>
        </div>

        {/* ── Did You Mean Banner ──────────────────────────────────── */}
        {didYouMean && query && (
          <div className="search-did-you-mean" role="alert">
            <span>💡 Did you mean:</span>
            <span
              className="search-did-you-mean-link"
              onClick={handleDidYouMeanClick}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && handleDidYouMeanClick()}
            >
              {didYouMean}
            </span>
          </div>
        )}

        {/* ── Results Container ────────────────────────────────────── */}
        <div
          ref={resultsRef}
          id="search-results-listbox"
          role="listbox"
          aria-label="Search results"
          className="search-results-container"
        >
          {/* Default state: Popular + Recent searches */}
          {showDefault && (
            <div className="search-default-state">
              {recentSearches.length > 0 && (
                <>
                  <div className="search-state-heading" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Clock size={11} />
                      Recent Searches
                    </span>
                    <span
                      style={{ cursor: 'pointer', textTransform: 'none', letterSpacing: 0, fontWeight: 400, color: 'rgba(15,61,46,0.6)', fontSize: 11 }}
                      onClick={() => {
                        clearRecentSearches();
                        setRecentSearches([]);
                      }}
                    >
                      Clear
                    </span>
                  </div>
                  <div className="search-pill-grid">
                    {recentSearches.map((q, i) => (
                      <button
                        key={i}
                        className="search-pill"
                        onClick={() => handleSuggestionClick(q)}
                      >
                        <span className="search-pill-icon">🕐</span>
                        {q}
                      </button>
                    ))}
                  </div>
                </>
              )}

              <div className="search-state-heading" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <TrendingUp size={11} />
                Popular Searches
              </div>
              <div className="search-pill-grid">
                {POPULAR_SEARCHES.map((q, i) => (
                  <button
                    key={i}
                    className="search-pill"
                    onClick={() => handleSuggestionClick(q)}
                  >
                    <span className="search-pill-icon">🔍</span>
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Zero results state */}
          {isEmpty && (
            <div className="search-zero-state">
              <div className="search-zero-icon">🔍</div>
              <div className="search-zero-title">No results for "{query}"</div>
              <div className="search-zero-subtitle">
                Try a different spelling, or explore these related topics:
              </div>
              {zeroSuggestions.length > 0 && (
                <div className="search-suggestions-grid">
                  {zeroSuggestions.map((s, i) => (
                    <button
                      key={i}
                      className="search-pill"
                      onClick={() => handleSuggestionClick(s)}
                    >
                      <ArrowRight size={11} />
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Categorized results */}
          {grouped.map((group) => (
            <div
              key={group.category}
              className="search-group"
              data-category={group.category}
            >
              <div className="search-group-header" aria-hidden="true">
                <span className="search-group-icon">{group.icon}</span>
                <span className="search-group-label">{group.category}</span>
                <span className="search-group-count">{group.results.length}</span>
              </div>
              {group.results.map((result) => {
                const currentIndex = flatResultIndex++;
                return (
                  <SearchResultItem
                    key={result.item.id}
                    result={result}
                    query={query}
                    isActive={activeIndex === currentIndex}
                    onClose={onClose}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* ── Footer ──────────────────────────────────────────────── */}
        {(grouped.length > 0 || query) && (
          <div className="search-footer">
            <span className="search-footer-brand">
              🏥 Ayurgreen Hospital
            </span>
            {results.length > 0 && (
              <span className="search-footer-count">
                {results.length} result{results.length !== 1 ? 's' : ''}
              </span>
            )}
          </div>
        )}
      </div>
    </>
  );
}
