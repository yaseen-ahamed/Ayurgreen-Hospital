'use client';

/**
 * Ayurgreen Hospital — Client-side Semantic Search Engine
 *
 * Features:
 * - Fuse.js powered fuzzy matching
 * - Medical synonym expansion
 * - Abbreviation normalization
 * - Weighted field relevance scoring
 * - Grouped, categorized results
 * - "Did you mean?" suggestions
 * - Zero-result recovery
 * - Contextual recommendations
 */

import Fuse, { type IFuseOptions } from 'fuse.js';
import type { SearchIndexEntry, SearchResult, SearchGrouped, SearchCategory } from './search-types';
import { CATEGORY_ICONS, CATEGORY_ORDER } from './search-types';

// ─── Medical Synonym Map ──────────────────────────────────────────────────────
// Expands user queries with related medical terms

const SYNONYM_MAP: Record<string, string[]> = {
  // Stroke
  'stroke': ['brain attack', 'cerebrovascular accident', 'cva', 'hemiplegia', 'brain stroke', 'ischemic', 'hemorrhagic', 'paralysis', 'weakness'],
  'brain stroke': ['stroke', 'cva', 'cerebrovascular', 'paralysis', 'hemiplegia'],
  'brain attack': ['stroke', 'cva', 'cerebrovascular accident'],
  'paralysis': ['hemiplegia', 'paraplegia', 'quadriplegia', 'weakness', 'stroke', 'spinal cord'],
  'walking problem': ['gait', 'mobility', 'motor', 'physiotherapy', 'robotic gait', 'balance'],
  'hand weakness': ['upper limb', 'arm weakness', 'occupational therapy', 'robotic arm', 'fine motor'],
  'speech issue': ['dysarthria', 'aphasia', 'speech therapy', 'communication', 'swallowing'],
  'speech problem': ['aphasia', 'dysarthria', 'speech therapy', 'communication disorder'],
  'memory loss': ['cognitive', 'dementia', 'alzheimer', 'neuropsychology', 'cognitive rehab'],
  'balance problem': ['vestibular', 'gait', 'physiotherapy', 'virtual reality', 'proprioception'],

  // Neurological conditions
  "parkinson's": ['parkinsons', 'parkinson', 'tremor', 'rigidity', 'movement disorder', 'pd'],
  'parkinsons': ["parkinson's disease", 'tremor', 'bradykinesia', 'rigidity', 'movement disorder'],
  'tremor': ["parkinson's", 'movement disorder', 'essential tremor', 'neurology'],
  'spasticity': ['cerebral palsy', 'stroke', 'spinal cord', 'muscle tightness'],
  'numbness': ['neuropathy', 'sensory loss', 'sciatica', 'nerve damage'],

  // Robotic / technology
  'robot therapy': ['robotic rehab', 'exoskeleton', 'robotic gait', 'armotion'],
  'robot': ['robotic rehab', 'exoskeleton', 'automation', 'g-eo system'],
  'vr therapy': ['virtual reality', 'vr rehab', 'gamified therapy', 'immersive rehab'],
  'vr rehab': ['virtual reality', 'vr therapy', 'gamified', 'happy moves'],
  'exoskeleton': ['robotic rehab', 'g-eo system', 'gait training robot'],

  // Ayurveda
  'ayurveda for stroke': ['ayurveda', 'stroke rehab', 'abhyanga', 'pizhichil', 'shirodhara'],
  'panchakarma': ['ayurveda', 'vamana', 'virechana', 'basti', 'nasya', 'raktamokshana'],
  'shirodhara': ['ayurveda', 'oil therapy', 'stress relief', 'neurological'],
  'herbal treatment': ['ayurveda', 'herbal medicine', 'panchakarma'],

  // Body regions / symptoms
  'back pain': ['disc', 'spine', 'sciatica', 'lumbar', 'physiotherapy', 'pain management'],
  'neck pain': ['cervical', 'disc', 'spine', 'physiotherapy'],
  'knee pain': ['osteoarthritis', 'knee arthritis', 'physiotherapy', 'orthopedic'],
  'shoulder pain': ['orthopedic', 'physiotherapy', 'occupational therapy'],
  'swallowing difficulty': ['dysphagia', 'speech therapy', 'neurological'],
  'depression': ['psychiatry', 'counseling', 'psychological', 'mental health'],
  'anxiety': ['psychiatry', 'counseling', 'psychological', 'mental health'],

  // General rehab
  'rehabilitation': ['rehab', 'recovery', 'therapy', 'physiotherapy', 'occupational therapy'],
  'therapy': ['physiotherapy', 'occupational therapy', 'speech therapy', 'ayurveda'],
  'recovery': ['rehabilitation', 'rehab', 'healing', 'therapy'],
  'neurological': ['neurology', 'stroke', 'brain', 'spinal cord', 'parkinson'],
  'pediatric': ['pediatrics', 'child', 'cerebral palsy', 'autism', 'developmental delay'],

  // International / facilities
  'medical tourism': ['international patients', 'overseas', 'travel', 'accommodation'],
  'inpatient': ['rehab village', 'accommodation', 'residential', 'stay'],
  'accommodation': ['rehab village', 'inpatient', 'residential', 'stay', 'rooms'],
};

// ─── Abbreviation Map ─────────────────────────────────────────────────────────

const ABBREVIATIONS: Record<string, string> = {
  'vr': 'virtual reality',
  'tbi': 'traumatic brain injury',
  'sci': 'spinal cord injury',
  'ot': 'occupational therapy',
  'pt': 'physiotherapy',
  'slp': 'speech therapy',
  'cp': 'cerebral palsy',
  'ms': 'multiple sclerosis',
  'als': 'amyotrophic lateral sclerosis',
  'mnd': 'motor neuron disease',
  'pd': "parkinson's disease",
  'oa': 'osteoarthritis',
  'ra': 'rheumatoid arthritis',
  'asd': 'autism spectrum disorder',
  'gdd': 'global developmental delay',
  'cva': 'cerebrovascular accident',
  'ent': 'ear nose throat',
  'dmd': 'duchenne muscular dystrophy',
  'adl': 'activities of daily living',
  'fes': 'functional electrical stimulation',
  'tens': 'transcutaneous electrical nerve stimulation',
  'gp': 'general physician',
};

// ─── Popular Searches ─────────────────────────────────────────────────────────

export const POPULAR_SEARCHES = [
  'Stroke rehabilitation',
  'Robotic therapy',
  "Parkinson's treatment",
  'Ayurveda panchakarma',
  'Virtual reality rehab',
  'Speech therapy',
  'Spinal cord injury',
  'Cerebral palsy',
  'Rehab Village accommodation',
  'Occupational therapy',
  'International patients',
  'Physiotherapy',
];

// ─── Query Processing ─────────────────────────────────────────────────────────

export function normalizeQuery(query: string): string {
  return query.toLowerCase().trim().replace(/\s+/g, ' ');
}

export function expandQuery(query: string): string {
  const normalized = normalizeQuery(query);
  const words = normalized.split(' ');
  const expanded = new Set<string>([normalized]);

  // Expand abbreviations
  const fullWords = words.map(w => ABBREVIATIONS[w] || w);
  const expandedQuery = fullWords.join(' ');
  if (expandedQuery !== normalized) {
    expanded.add(expandedQuery);
  }

  // Add synonyms
  for (const [key, synonyms] of Object.entries(SYNONYM_MAP)) {
    if (normalized.includes(key)) {
      synonyms.forEach(s => expanded.add(s));
    }
  }

  return Array.from(expanded).join(' ');
}

// ─── Fuse.js Configuration ────────────────────────────────────────────────────

const FUSE_OPTIONS: IFuseOptions<SearchIndexEntry> = {
  includeScore: true,
  includeMatches: true,
  threshold: 0.4,          // 0.0 = exact, 1.0 = match anything (0.4 = balanced fuzzy)
  distance: 100,            // max character distance for positional matching
  minMatchCharLength: 2,
  ignoreLocation: true,     // don't penalize for match position in string
  useExtendedSearch: false,
  findAllMatches: true,
  keys: [
    { name: 'title',       weight: 10 },
    { name: 'keywords',    weight: 8 },
    { name: 'description', weight: 5 },
    { name: 'content',     weight: 3 },
    { name: 'category',    weight: 1 },
  ],
};

// ─── Search Engine Class ──────────────────────────────────────────────────────

let fuseInstance: Fuse<SearchIndexEntry> | null = null;
let cachedIndex: SearchIndexEntry[] = [];

export async function loadSearchIndex(): Promise<SearchIndexEntry[]> {
  if (cachedIndex.length > 0) return cachedIndex;

  try {
    const response = await fetch('/search-index.json', { cache: 'force-cache' });
    if (!response.ok) throw new Error(`Failed to fetch search index: ${response.status}`);
    const data = await response.json();
    cachedIndex = data;
    return cachedIndex;
  } catch (err) {
    console.error('[Search] Failed to load index:', err);
    return [];
  }
}

export function initFuse(index: SearchIndexEntry[]): Fuse<SearchIndexEntry> {
  if (!fuseInstance || cachedIndex !== index) {
    fuseInstance = new Fuse(index, FUSE_OPTIONS);
  }
  return fuseInstance;
}

export function search(query: string, index: SearchIndexEntry[]): SearchResult[] {
  if (!query.trim() || query.length < 2) return [];

  const fuse = initFuse(index);
  const expandedQuery = expandQuery(query);

  // Run primary search with expanded query
  const primaryResults = fuse.search(expandedQuery) as SearchResult[];

  // If query was expanded, also run original query and merge
  let allResults = primaryResults;
  if (expandedQuery !== normalizeQuery(query)) {
    const originalResults = fuse.search(normalizeQuery(query)) as SearchResult[];
    const seen = new Set(primaryResults.map(r => r.item.id));
    originalResults.forEach(r => {
      if (!seen.has(r.item.id)) {
        allResults.push(r);
      }
    });
  }

  // Apply priority boost to ranking
  allResults = allResults.map(result => ({
    ...result,
    score: (result.score || 0) + (result.item.priority - 1) * 0.08,
  }));

  // Sort by adjusted score (lower = better)
  allResults.sort((a, b) => (a.score || 0) - (b.score || 0));

  // Deduplicate by id (keep best-scoring)
  const seen = new Set<string>();
  const deduped: SearchResult[] = [];
  for (const result of allResults) {
    if (!seen.has(result.item.id)) {
      seen.add(result.item.id);
      deduped.push(result);
    }
  }

  // Limit to top 50 results
  return deduped.slice(0, 50);
}

// ─── Result Grouping ──────────────────────────────────────────────────────────

export function groupResults(results: SearchResult[]): SearchGrouped[] {
  const groupMap = new Map<SearchCategory, SearchResult[]>();

  for (const result of results) {
    const cat = result.item.category as SearchCategory;
    if (!groupMap.has(cat)) {
      groupMap.set(cat, []);
    }
    groupMap.get(cat)!.push(result);
  }

  // Sort groups by CATEGORY_ORDER
  const sorted: SearchGrouped[] = [];
  for (const cat of CATEGORY_ORDER) {
    const catResults = groupMap.get(cat);
    if (catResults && catResults.length > 0) {
      sorted.push({
        category: cat,
        icon: CATEGORY_ICONS[cat],
        results: catResults.slice(0, 5), // Max 5 per category
      });
    }
  }

  return sorted;
}

// ─── Did You Mean? ────────────────────────────────────────────────────────────

export function getDidYouMean(query: string, index: SearchIndexEntry[]): string | null {
  if (index.length === 0) return null;

  const fuse = new Fuse(index, {
    ...FUSE_OPTIONS,
    threshold: 0.6, // More lenient for suggestions
    keys: [{ name: 'title', weight: 1 }, { name: 'keywords', weight: 1 }],
  });

  const results = fuse.search(query, { limit: 3 });
  if (results.length === 0) return null;

  const best = results[0];
  const score = best.score || 1;

  // Only suggest if score is between 0.3 and 0.65 (not too close, not too far)
  if (score >= 0.3 && score <= 0.65) {
    return best.item.title;
  }

  return null;
}

// ─── Zero-Result Suggestions ──────────────────────────────────────────────────

export function getZeroResultSuggestions(query: string): string[] {
  const normalized = normalizeQuery(query);

  // Check if query matches any known keywords
  const suggestions: string[] = [];

  for (const [key, synonyms] of Object.entries(SYNONYM_MAP)) {
    if (normalized.includes(key) || synonyms.some(s => normalized.includes(s))) {
      suggestions.push(key.charAt(0).toUpperCase() + key.slice(1));
    }
  }

  // Add some popular searches as fallback
  if (suggestions.length < 3) {
    suggestions.push(...POPULAR_SEARCHES.slice(0, 4));
  }

  // Deduplicate and limit
  return [...new Set(suggestions)].slice(0, 5);
}

// ─── Contextual Recommendations ───────────────────────────────────────────────

const RELATED_MAP: Record<string, string[]> = {
  'Treatments': ['Rehabilitation Programs', 'Departments', 'Technologies', 'FAQs'],
  'Conditions': ['Treatments', 'Rehabilitation Programs', 'FAQs', 'Departments'],
  'Departments': ['Treatments', 'Rehabilitation Programs', 'Technologies'],
  'Technologies': ['Rehabilitation Programs', 'Treatments', 'Departments'],
  'FAQs': ['Treatments', 'Conditions', 'General Pages'],
  'Rehab Village': ['International Patients', 'General Pages'],
};

export function getRelatedCategories(category: string): string[] {
  return RELATED_MAP[category] || ['General Pages'];
}

// ─── Text Highlighting ────────────────────────────────────────────────────────

export function highlightText(text: string, query: string, maxLength = 200): string {
  if (!query.trim()) return text.substring(0, maxLength);

  const terms = normalizeQuery(query).split(/\s+/).filter(t => t.length >= 2);
  let result = text.substring(0, maxLength * 2); // Extra buffer for highlighting

  // Sort terms by length (longest first to avoid partial overwrites)
  const sortedTerms = [...terms].sort((a, b) => b.length - a.length);

  for (const term of sortedTerms) {
    const regex = new RegExp(`(${escapeRegex(term)})`, 'gi');
    result = result.replace(regex, '<mark class="search-match">$1</mark>');
  }

  // Trim to maxLength characters (account for <mark> tags)
  const textOnly = result.replace(/<[^>]+>/g, '');
  if (textOnly.length > maxLength) {
    // Find the first highlight and center around it
    const firstMark = result.indexOf('<mark');
    const start = Math.max(0, firstMark - 60);
    result = (start > 0 ? '...' : '') + result.substring(start);
  }

  return result;
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ─── Recent Searches (localStorage) ──────────────────────────────────────────

const RECENT_SEARCHES_KEY = 'ayurgreen_recent_searches';
const MAX_RECENT = 5;

export function getRecentSearches(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(RECENT_SEARCHES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function addRecentSearch(query: string): void {
  if (typeof window === 'undefined') return;
  try {
    const recent = getRecentSearches().filter(q => q !== query);
    const updated = [query, ...recent].slice(0, MAX_RECENT);
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
  } catch {
    // ignore
  }
}

export function clearRecentSearches(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(RECENT_SEARCHES_KEY);
  } catch {
    // ignore
  }
}

// ─── Search Session Store (for highlight on land) ────────────────────────────

const SEARCH_SESSION_KEY = 'ayurgreen_search_query';

export function setSearchSessionQuery(query: string): void {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem(SEARCH_SESSION_KEY, query);
  } catch {
    // ignore
  }
}

export function getSearchSessionQuery(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return sessionStorage.getItem(SEARCH_SESSION_KEY);
  } catch {
    return null;
  }
}

export function clearSearchSessionQuery(): void {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.removeItem(SEARCH_SESSION_KEY);
  } catch {
    // ignore
  }
}
