// Shared TypeScript types for all rehabilitation/speciality pages

export interface HeroData {
  bannerImage: string;
  label: string;
  breadcrumbCategory: string;
  title: string;
  subtitle: string;
}

export interface ConditionCard {
  image: string;
  alt?: string;
  title: string;
  description: string;
}

export interface ConditionsData {
  sectionLabel: string;
  sectionTitle: string;
  sectionSupport: string;
  cards: ConditionCard[];
}

export interface TreatmentStep {
  image: string;
  alt?: string;
  title: string;
  description: string;
}

export interface TreatmentsData {
  sectionLabel: string;
  sectionTitle: string;
  sectionSupport: string;
  steps: TreatmentStep[];
}

export interface TechCard {
  icon: string;
  title: string;
  description: string;
}

export interface TechnologiesData {
  sectionLabel: string;
  sectionTitle: string;
  sectionSupport: string;
  cards: TechCard[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQData {
  sectionSupport: string;
  items: FAQItem[];
}

export interface OverviewData {
  sectionLabel: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
}

export interface RehabPageData {
  slug: string;
  sidebarId: string;
  metaTitle: string;
  metaDescription: string;
  canonicalPath: string;
  hero: HeroData;
  overview: OverviewData;
  conditions: ConditionsData;
  treatments: TreatmentsData;
  technologies: TechnologiesData;
  faq: FAQData;
}
