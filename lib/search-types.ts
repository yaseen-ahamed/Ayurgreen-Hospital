// Search Index Entry — one record in the search index
export interface SearchIndexEntry {
  id: string;           // unique identifier (slug + section)
  url: string;          // internal path + optional #anchor
  title: string;        // page or section title (shown in results)
  description: string;  // short snippet shown in results
  category: SearchCategory;
  icon: string;         // emoji for category
  content: string;      // full text blob for fuzzy matching
  keywords: string[];   // synonyms, abbreviations, related terms
  priority: number;     // 1 (highest) to 5 (lowest) — affects ranking
}

export type SearchCategory =
  | 'Treatments'
  | 'Conditions'
  | 'Departments'
  | 'Specialities'
  | 'Technologies'
  | 'Rehabilitation Programs'
  | 'Rehab Village'
  | 'International Patients'
  | 'Blogs & Articles'
  | 'FAQs'
  | 'General Pages';

export interface SearchResult {
  item: SearchIndexEntry;
  score: number;
  refIndex: number;
}

export interface SearchGrouped {
  category: SearchCategory;
  icon: string;
  results: SearchResult[];
}

export interface SearchState {
  query: string;
  results: SearchResult[];
  grouped: SearchGrouped[];
  didYouMean: string | null;
  isLoading: boolean;
  isEmpty: boolean;
}

export const CATEGORY_ICONS: Record<SearchCategory, string> = {
  'Treatments': '🧠',
  'Conditions': '🩺',
  'Departments': '🏥',
  'Specialities': '⚕️',
  'Technologies': '🤖',
  'Rehabilitation Programs': '🏃',
  'Rehab Village': '🏡',
  'International Patients': '✈️',
  'Blogs & Articles': '📖',
  'FAQs': '❓',
  'General Pages': '📄',
};

export const CATEGORY_ORDER: SearchCategory[] = [
  'Treatments',
  'Conditions',
  'Departments',
  'Specialities',
  'Technologies',
  'Rehabilitation Programs',
  'FAQs',
  'Rehab Village',
  'International Patients',
  'Blogs & Articles',
  'General Pages',
];
