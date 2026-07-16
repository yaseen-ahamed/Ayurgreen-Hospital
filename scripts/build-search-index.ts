/**
 * Ayurgreen Hospital — Intelligent Search Index Builder
 *
 * This script reads ALL structured data from data/rehab/*.ts and static page metadata,
 * then generates a comprehensive public/search-index.json used by the client-side
 * fuzzy search engine.
 *
 * Run: npx tsx scripts/build-search-index.ts
 * Auto-run: called from next.config.mjs before each build.
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');

// ─── Type Definitions ───────────────────────────────────────────────────────

interface SearchIndexEntry {
  id: string;
  url: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  content: string;
  keywords: string[];
  priority: number;
}

// ─── Category Configuration ──────────────────────────────────────────────────

const CATEGORY_ICONS: Record<string, string> = {
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

// ─── Page Registry ────────────────────────────────────────────────────────────
// Maps each data/rehab slug to its route + category info

const PAGE_REGISTRY: Record<string, {
  route: string;
  category: string;
  priority: number;
  keywords: string[];
}> = {
  // ── Treatments / Conditions ─────────────────────────────────────────────
  'stroke-rehab': {
    route: '/stroke-rehab',
    category: 'Treatments',
    priority: 1,
    keywords: [
      'stroke', 'brain stroke', 'brain attack', 'cerebrovascular accident', 'cva',
      'hemiplegia', 'paralysis', 'weakness', 'ischemic stroke', 'hemorrhagic stroke',
      'stroke recovery', 'stroke rehabilitation', 'post stroke', 'brain rehab',
      'walking problem', 'hand weakness', 'arm weakness', 'speech problem after stroke',
    ],
  },
  'spinal-cord-injury': {
    route: '/spinal-cord-injury',
    category: 'Treatments',
    priority: 1,
    keywords: [
      'spinal cord injury', 'sci', 'spinal injury', 'paralysis', 'quadriplegia',
      'paraplegia', 'spine injury', 'cervical injury', 'thoracic injury', 'lumbar injury',
      'wheelchair', 'immobile', 'loss of sensation',
    ],
  },
  'traumatic-brain-injury': {
    route: '/traumatic-brain-injury',
    category: 'Treatments',
    priority: 1,
    keywords: [
      'traumatic brain injury', 'tbi', 'head injury', 'brain injury', 'concussion',
      'coup contrecoup', 'diffuse axonal', 'brain trauma', 'accident brain',
      'memory loss', 'cognitive impairment after accident',
    ],
  },
  'hemiplegia': {
    route: '/hemiplegia',
    category: 'Conditions',
    priority: 1,
    keywords: [
      'hemiplegia', 'hemi', 'one side paralysis', 'left side weakness',
      'right side weakness', 'unilateral paralysis', 'stroke paralysis',
      'arm paralysis', 'leg paralysis',
    ],
  },
  'quadriplegia-paraplegia': {
    route: '/quadriplegia-paraplegia',
    category: 'Conditions',
    priority: 1,
    keywords: [
      'quadriplegia', 'paraplegia', 'tetraplegia', 'four limb paralysis',
      'both leg paralysis', 'all limb paralysis', 'complete paralysis',
      'incomplete paralysis', 'sci paralysis',
    ],
  },
  'parkinsons-disease': {
    route: '/parkinsons-disease',
    category: 'Treatments',
    priority: 1,
    keywords: [
      "parkinson's disease", 'parkinson', 'parkinsons', 'pd', 'tremor', 'shaking',
      'trembling', 'rigidity', 'stiffness', 'bradykinesia', 'freezing of gait',
      'balance problems parkinson', 'movement disorder',
    ],
  },
  'cerebral-palsy': {
    route: '/cerebral-palsy',
    category: 'Treatments',
    priority: 1,
    keywords: [
      'cerebral palsy', 'cp', 'spasticity', 'muscle tightness child',
      'developmental motor disorder', 'cp child', 'spastic cp',
      'athetoid cp', 'ataxic cp',
    ],
  },
  'motor-neuron-diseases': {
    route: '/motor-neuron-diseases',
    category: 'Conditions',
    priority: 1,
    keywords: [
      'motor neuron disease', 'mnd', 'als', 'amyotrophic lateral sclerosis',
      'lou gehrig', 'progressive muscular atrophy', 'primary lateral sclerosis',
      'pls', 'muscle weakness progressive',
    ],
  },
  'muscular-dystrophy': {
    route: '/muscular-dystrophy',
    category: 'Conditions',
    priority: 1,
    keywords: [
      'muscular dystrophy', 'md', 'duchenne', 'dmd', 'becker',
      'muscle wasting disease', 'genetic muscle disease', 'myopathy',
      'progressive muscle weakness',
    ],
  },
  'myopathy': {
    route: '/myopathy',
    category: 'Conditions',
    priority: 1,
    keywords: [
      'myopathy', 'muscle disease', 'inflammatory myopathy', 'polymyositis',
      'dermatomyositis', 'inclusion body myositis', 'mitochondrial myopathy',
      'congenital myopathy', 'muscle pain', 'proximal weakness',
    ],
  },
  'autism': {
    route: '/autism',
    category: 'Conditions',
    priority: 1,
    keywords: [
      'autism', 'asd', 'autism spectrum disorder', 'autistic child',
      'developmental disability', 'social communication', 'sensory processing',
      'behavioral therapy autism',
    ],
  },
  'developmental-delay': {
    route: '/developmental-delay',
    category: 'Conditions',
    priority: 1,
    keywords: [
      'developmental delay', 'global developmental delay', 'gdd',
      'delayed milestones', 'speech delay child', 'motor delay child',
      'cognitive delay', 'intellectual disability child',
    ],
  },
  'disc-spine-problems': {
    route: '/disc-spine-problems',
    category: 'Treatments',
    priority: 2,
    keywords: [
      'disc problem', 'spine problem', 'disc herniation', 'disc bulge',
      'disc protrusion', 'disc prolapse', 'slipped disc', 'herniated disc',
      'back pain disc', 'neck pain disc', 'cervical spondylosis',
      'lumbar spondylosis', 'spinal stenosis',
    ],
  },
  'sciatica': {
    route: '/sciatica',
    category: 'Treatments',
    priority: 2,
    keywords: [
      'sciatica', 'sciatic nerve pain', 'leg pain radiating', 'shooting pain leg',
      'piriformis syndrome', 'lumbar radiculopathy', 'lower back pain radiating',
      'buttock pain', 'nerve pain leg',
    ],
  },
  'osteoarthritis': {
    route: '/osteoarthritis',
    category: 'Treatments',
    priority: 2,
    keywords: [
      'osteoarthritis', 'oa', 'knee pain', 'joint pain', 'arthritis',
      'degenerative joint disease', 'cartilage damage', 'knee arthritis',
      'hip arthritis', 'joint degeneration', 'bone on bone',
    ],
  },
  'rheumatoid-arthritis': {
    route: '/rheumatoid-arthritis',
    category: 'Treatments',
    priority: 2,
    keywords: [
      'rheumatoid arthritis', 'ra', 'autoimmune arthritis', 'inflammatory arthritis',
      'joint inflammation', 'swollen joints', 'morning stiffness', 'ra treatment',
    ],
  },
  'post-covid-complications': {
    route: '/post-covid-complications',
    category: 'Treatments',
    priority: 2,
    keywords: [
      'post covid', 'long covid', 'post covid syndrome', 'covid complications',
      'covid fatigue', 'brain fog covid', 'covid rehabilitation',
      'post covid weakness', 'long hauler', 'persistent covid symptoms',
    ],
  },
  'post-surgical-complications': {
    route: '/post-surgical-complications',
    category: 'Treatments',
    priority: 2,
    keywords: [
      'post surgical', 'after surgery', 'post operative', 'surgery rehabilitation',
      'post op rehab', 'surgical recovery', 'joint replacement rehab',
      'post knee surgery', 'post hip surgery', 'post spine surgery',
    ],
  },
  'obesity': {
    route: '/obesity',
    category: 'Treatments',
    priority: 2,
    keywords: [
      'obesity', 'weight loss', 'overweight', 'metabolic syndrome', 'bmi',
      'obesity treatment', 'weight management', 'bariatric rehab',
    ],
  },
  'psychological-problems': {
    route: '/psychological-problems',
    category: 'Treatments',
    priority: 2,
    keywords: [
      'psychological problems', 'anxiety', 'depression', 'mental health',
      'stress', 'ptsd', 'trauma', 'mental disorder', 'psychological therapy',
      'psychiatric rehab',
    ],
  },
  'psychiatry': {
    route: '/psychiatry',
    category: 'Departments',
    priority: 2,
    keywords: [
      'psychiatry', 'psychiatrist', 'mental health doctor', 'psychiatric',
      'schizophrenia', 'bipolar', 'ocd', 'mental illness', 'psychosis',
    ],
  },

  // ── Departments / Specialities ───────────────────────────────────────────
  'ayurveda': {
    route: '/ayurveda',
    category: 'Departments',
    priority: 1,
    keywords: [
      'ayurveda', 'ayurvedic', 'ayurvedic medicine', 'kerala ayurveda',
      'panchakarma', 'shirodhara', 'abhyanga', 'nasya', 'basti',
      'vamana', 'virechana', 'raktamokshana', 'njavarakizhi', 'pizhichil',
      'ayurveda for stroke', 'ayurveda parkinson', 'herbal medicine',
      'traditional medicine india',
    ],
  },
  'physiotherapy': {
    route: '/physiotherapy',
    category: 'Departments',
    priority: 1,
    keywords: [
      'physiotherapy', 'physical therapy', 'physio', 'pt', 'exercise therapy',
      'movement therapy', 'manual therapy', 'muscle strengthening',
      'gait training', 'balance training',
    ],
  },
  'robotic-rehab': {
    route: '/robotic-rehab',
    category: 'Technologies',
    priority: 1,
    keywords: [
      'robotic rehab', 'robotic rehabilitation', 'exoskeleton', 'robot therapy',
      'robotic gait training', 'g-eo system', 'armotion', 'robotic arm',
      'huber 360', 'automated therapy', 'exo', 'robotic exoskeleton',
    ],
  },
  'occupational-therapy': {
    route: '/occupational-therapy',
    category: 'Departments',
    priority: 1,
    keywords: [
      'occupational therapy', 'ot', 'activities of daily living', 'adl',
      'hand function', 'fine motor skills', 'adaptive equipment',
      'independence skills', 'daily activities rehab',
    ],
  },
  'speech-therapy': {
    route: '/speech-therapy',
    category: 'Departments',
    priority: 1,
    keywords: [
      'speech therapy', 'speech language therapy', 'slp', 'aphasia',
      'dysarthria', 'dysphasia', 'swallowing therapy', 'dysphagia',
      'communication disorder', 'speech issue', 'talking problem',
      'voice therapy', 'language therapy',
    ],
  },
  'virtual-reality': {
    route: '/virtual-reality',
    category: 'Technologies',
    priority: 1,
    keywords: [
      'virtual reality', 'vr', 'vr rehabilitation', 'vr therapy', 'vr rehab',
      'happy moves', 'gamified therapy', 'immersive therapy', 'vr physio',
      'virtual rehab', 'game therapy', 'neurological vr',
    ],
  },
  'yoga-meditation': {
    route: '/yoga-meditation',
    category: 'Specialities',
    priority: 2,
    keywords: [
      'yoga', 'meditation', 'yoga therapy', 'mind body', 'mindfulness',
      'pranayama', 'breathing exercises', 'relaxation therapy',
      'yoga for rehab', 'yoga for stroke', 'stress reduction',
    ],
  },
  'acupuncture': {
    route: '/acupuncture',
    category: 'Specialities',
    priority: 2,
    keywords: [
      'acupuncture', 'needling', 'traditional chinese medicine', 'tcm',
      'dry needling', 'acupressure', 'meridian therapy',
    ],
  },
  'reflexology': {
    route: '/reflexology',
    category: 'Specialities',
    priority: 3,
    keywords: [
      'reflexology', 'foot massage therapy', 'zone therapy', 'pressure points',
      'foot therapy', 'reflex points',
    ],
  },
  'hydro-therapy': {
    route: '/hydro-therapy',
    category: 'Specialities',
    priority: 2,
    keywords: [
      'hydrotherapy', 'hydro therapy', 'aquatic therapy', 'water therapy',
      'pool therapy', 'underwater treadmill', 'aquatic rehab',
      'swimming therapy', 'water rehabilitation',
    ],
  },
  'diet-nutrition': {
    route: '/diet-nutrition',
    category: 'Departments',
    priority: 3,
    keywords: [
      'diet', 'nutrition', 'dietitian', 'nutritionist', 'meal plan',
      'therapeutic diet', 'clinical nutrition', 'medical nutrition therapy',
    ],
  },
  'pain-management': {
    route: '/pain-management',
    category: 'Departments',
    priority: 2,
    keywords: [
      'pain management', 'chronic pain', 'pain relief', 'pain therapy',
      'pain clinic', 'neuropathic pain', 'musculoskeletal pain',
    ],
  },
  'counseling': {
    route: '/counseling',
    category: 'Departments',
    priority: 3,
    keywords: [
      'counseling', 'counselling', 'therapy', 'psychological counseling',
      'rehabilitation counseling', 'family counseling', 'coping strategies',
    ],
  },
  'slimming-treatment': {
    route: '/slimming-treatment',
    category: 'Treatments',
    priority: 3,
    keywords: [
      'slimming', 'weight loss treatment', 'slimming therapy', 'body contouring',
      'fat reduction', 'body slimming', 'weight reduction treatment',
    ],
  },
  'respiratory-therapy': {
    route: '/respiratory-therapy',
    category: 'Departments',
    priority: 2,
    keywords: [
      'respiratory therapy', 'breathing therapy', 'pulmonary rehab',
      'lung rehab', 'copd rehab', 'ventilator weaning', 'chest physiotherapy',
      'respiratory rehab', 'breathing exercises rehab',
    ],
  },
  'assistive-devices': {
    route: '/assistive-devices',
    category: 'Technologies',
    priority: 3,
    keywords: [
      'assistive devices', 'wheelchair', 'walker', 'crutches', 'orthotics',
      'prosthetics', 'splint', 'brace', 'afo', 'ankle foot orthosis',
      'adaptive equipment', 'mobility aids',
    ],
  },
  'pediatrics': {
    route: '/pediatrics',
    category: 'Departments',
    priority: 2,
    keywords: [
      'pediatrics', 'paediatrics', 'child health', 'children hospital',
      'child rehabilitation', 'kid therapy', 'neonatal', 'infant rehab',
      'child development',
    ],
  },
  'dentistry': {
    route: '/dentistry',
    category: 'Departments',
    priority: 3,
    keywords: [
      'dentistry', 'dental', 'teeth', 'dental care', 'oral health', 'dentist',
    ],
  },

  // ── Modern Integrations ──────────────────────────────────────────────────
  'neurology': {
    route: '/neurology',
    category: 'Departments',
    priority: 2,
    keywords: [
      'neurology', 'neurologist', 'nerve specialist', 'brain specialist',
      'neurological condition', 'neuro doctor', 'epilepsy', 'seizure',
    ],
  },
  'neurosurgery': {
    route: '/neurosurgery',
    category: 'Departments',
    priority: 2,
    keywords: [
      'neurosurgery', 'brain surgery', 'spine surgery', 'neurosurgeon',
      'craniotomy', 'spinal surgery',
    ],
  },
  'orthopedic': {
    route: '/orthopedic',
    category: 'Departments',
    priority: 2,
    keywords: [
      'orthopedic', 'orthopaedic', 'bone doctor', 'joint specialist',
      'fracture', 'bone fracture', 'orthopedic surgeon', 'joint replacement',
    ],
  },
  'ent': {
    route: '/ent',
    category: 'Departments',
    priority: 3,
    keywords: [
      'ent', 'ear nose throat', 'otolaryngology', 'hearing loss', 'ear problem',
      'nose problem', 'throat problem', 'tinnitus', 'vertigo',
    ],
  },
  'general-medicine': {
    route: '/general-medicine',
    category: 'Departments',
    priority: 3,
    keywords: [
      'general medicine', 'general physician', 'internal medicine',
      'primary care', 'gp', 'general doctor',
    ],
  },
  'urology': {
    route: '/urology',
    category: 'Departments',
    priority: 3,
    keywords: [
      'urology', 'urologist', 'bladder', 'kidney', 'urinary',
      'neurogenic bladder', 'urinary incontinence',
    ],
  },
  'cardiology': {
    route: '/cardiology',
    category: 'Departments',
    priority: 2,
    keywords: [
      'cardiology', 'cardiologist', 'heart', 'cardiac', 'heart disease',
      'cardiac rehab', 'heart attack recovery',
    ],
  },
  'neuro-psychology': {
    route: '/neuro-psychology',
    category: 'Departments',
    priority: 2,
    keywords: [
      'neuropsychology', 'neuro psychology', 'cognitive assessment',
      'cognitive rehabilitation', 'memory rehab', 'attention training',
      'executive function', 'neuropsychological testing',
    ],
  },
};

// ─── Static Pages ────────────────────────────────────────────────────────────

const STATIC_PAGES: SearchIndexEntry[] = [
  {
    id: 'home',
    url: '/',
    title: 'Ayurgreen Hospital — Integrated Ortho-Neuro Rehabilitation',
    description: "India's leading integrated rehabilitation center combining robotics, physiotherapy, Ayurveda, speech therapy, and holistic care for stroke, Parkinson's, spinal cord injury, and neurological recovery.",
    category: 'General Pages',
    icon: '🏥',
    content: "Ayurgreen Hospital integrated ortho neuro rehabilitation Kerala robotic physiotherapy Ayurveda stroke Parkinson's spinal cord injury neurological",
    keywords: ['ayurgreen', 'ayurgreen hospital', 'hospital', 'rehabilitation hospital', 'rehab center', 'neuro rehab', 'kerala hospital'],
    priority: 1,
  },
  {
    id: 'rehab-village',
    url: '/rehab-village',
    title: 'Rehab Village — Immersive Rehabilitation Living at Ayurgreen',
    description: 'A unique in-patient rehabilitation ecosystem where patients live, recover, and thrive in a serene, purpose-built healing environment with 24/7 expert care.',
    category: 'Rehab Village',
    icon: '🏡',
    content: 'rehab village rehabilitation village in-patient accommodation stay live recover serene healing environment residential care facilities amenities',
    keywords: ['rehab village', 'rehabilitation village', 'inpatient', 'residential rehab', 'stay accommodation', 'live rehab', 'healing village', 'therapeutic village'],
    priority: 1,
  },
  {
    id: 'international-patients',
    url: '/international-patients',
    title: 'International Patients — Medical Tourism at Ayurgreen Hospital',
    description: 'Dedicated support for international patients seeking world-class rehabilitation in Kerala — visa assistance, airport pickup, accommodation, translators, and concierge care.',
    category: 'International Patients',
    icon: '✈️',
    content: 'international patients medical tourism kerala visa assistance airport pickup accommodation translator arabic english gulf patients overseas rehabilitation',
    keywords: ['international patients', 'medical tourism', 'overseas patients', 'foreign patients', 'gulf patients', 'arabic patients', 'visa', 'travel assistance', 'medical travel'],
    priority: 1,
  },
  {
    id: 'contact-us',
    url: '/contact-us',
    title: 'Contact Us — Book an Appointment at Ayurgreen Hospital',
    description: 'Get in touch with Ayurgreen Hospital to book a consultation, inquire about treatments, or arrange your admission. Multiple ways to reach our care coordinators.',
    category: 'General Pages',
    icon: '📞',
    content: 'contact us book appointment consultation admission phone call whatsapp email care coordinator ayurgreen hospital',
    keywords: ['contact', 'book appointment', 'appointment', 'consultation', 'admission', 'phone', 'email', 'whatsapp'],
    priority: 1,
  },
];

// ─── Rehab Village Section Entries ───────────────────────────────────────────

const REHAB_VILLAGE_SECTIONS: SearchIndexEntry[] = [
  {
    id: 'rehab-village-accommodation',
    url: '/rehab-village#accommodation',
    title: 'Rehab Village Accommodation',
    description: 'Comfortable, purpose-built rooms and suites designed for long-term rehabilitation stays with all modern amenities.',
    category: 'Rehab Village',
    icon: '🏡',
    content: 'accommodation rooms suites inpatient stay rehabilitation living quarters comfortable modern amenities',
    keywords: ['accommodation', 'rooms', 'inpatient stay', 'suites', 'hospital stay'],
    priority: 2,
  },
  {
    id: 'rehab-village-facilities',
    url: '/rehab-village#facilities',
    title: 'Rehab Village Facilities & Amenities',
    description: 'State-of-the-art facilities including swimming pool, fitness centre, mosque, dining, and recreation areas.',
    category: 'Rehab Village',
    icon: '🏡',
    content: 'facilities swimming pool fitness centre mosque dining restaurant recreation garden accessibility amenities',
    keywords: ['facilities', 'swimming pool', 'mosque', 'dining', 'fitness centre', 'recreation', 'amenities'],
    priority: 2,
  },
  {
    id: 'rehab-village-travel',
    url: '/rehab-village#travel',
    title: 'Travel & Concierge Support — Rehab Village',
    description: 'Airport pickup, travel desk, visa assistance, and 24/7 concierge support for domestic and international patients.',
    category: 'Rehab Village',
    icon: '✈️',
    content: 'airport pickup travel desk visa assistance concierge support domestic international patients flight booking transfer',
    keywords: ['travel support', 'airport pickup', 'visa', 'concierge', 'travel desk'],
    priority: 3,
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function cleanText(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

// ─── Main Index Building ──────────────────────────────────────────────────────

async function buildIndex(): Promise<void> {
  console.log('\n🔍 Building Ayurgreen Hospital Search Index...\n');

  const entries: SearchIndexEntry[] = [];
  const seen = new Set<string>();

  function addEntry(entry: SearchIndexEntry): void {
    if (seen.has(entry.id)) return;
    seen.add(entry.id);
    entries.push(entry);
  }

  // 1. Add static pages
  STATIC_PAGES.forEach(page => addEntry(page));
  REHAB_VILLAGE_SECTIONS.forEach(section => addEntry(section));

  // 2. Process each rehab data file
  const dataDir = path.join(ROOT, 'data', 'rehab');
  const dataFiles = fs.readdirSync(dataDir)
    .filter(f => f.endsWith('.ts') && !['types.ts', 'themes.ts'].includes(f));

  for (const file of dataFiles) {
    const slug = file.replace('.ts', '');
    const pageInfo = PAGE_REGISTRY[slug];

    if (!pageInfo) {
      console.log(`  ⚠️  No registry entry for: ${slug} — skipping`);
      continue;
    }

    // Dynamically import the data file
    const modulePath = path.join(dataDir, file);
    const fileContent = fs.readFileSync(modulePath, 'utf-8');

    // Parse the data using a simple regex approach (avoids complex TS compilation)
    // We'll extract the exported pageData object structure
    let data: any;
    try {
      // Use dynamic require via creating a temporary compiled version
      data = parseRehabData(fileContent, slug);
    } catch (err) {
      console.log(`  ⚠️  Could not parse ${file}: ${err}`);
      continue;
    }

    if (!data) {
      console.log(`  ⚠️  No data found in ${file}`);
      continue;
    }

    const { route, category, priority, keywords } = pageInfo;
    const icon = CATEGORY_ICONS[category] || '📄';

    // ── Page-level entry (highest priority for this page)
    const pageTitle = data.metaTitle || data.hero?.title || slug;
    const pageDesc = data.metaDescription || data.hero?.subtitle || '';
    const overviewText = data.overview?.paragraphs?.join(' ') || '';

    addEntry({
      id: slug,
      url: route,
      title: cleanText(pageTitle.replace(' | Ayurgreen Hospital', '')),
      description: cleanText(pageDesc).substring(0, 200),
      category,
      icon,
      content: cleanText(`${pageTitle} ${pageDesc} ${overviewText} ${keywords.join(' ')}`),
      keywords,
      priority,
    });

    // ── Overview section
    if (data.overview && overviewText.length > 30) {
      addEntry({
        id: `${slug}-overview`,
        url: `${route}#overview`,
        title: cleanText(data.overview.title || `${data.hero?.title || slug} — Overview`),
        description: cleanText(overviewText).substring(0, 200),
        category,
        icon,
        content: cleanText(`${data.overview.title} ${overviewText}`),
        keywords,
        priority: priority + 1,
      });
    }

    // ── Condition cards
    if (data.conditions?.cards) {
      for (let i = 0; i < data.conditions.cards.length; i++) {
        const card = data.conditions.cards[i];
        if (!card?.title) continue;
        addEntry({
          id: `${slug}-condition-${slugify(card.title).substring(0, 40)}`,
          url: `${route}#conditions`,
          title: cleanText(card.title),
          description: cleanText(card.description || '').substring(0, 200),
          category,
          icon,
          content: cleanText(`${card.title} ${card.description || ''}`),
          keywords,
          priority: priority + 2,
        });
      }
    }

    // ── Treatment steps
    if (data.treatments?.steps) {
      for (let i = 0; i < data.treatments.steps.length; i++) {
        const step = data.treatments.steps[i];
        if (!step?.title) continue;
        addEntry({
          id: `${slug}-treatment-${slugify(step.title).substring(0, 40)}`,
          url: `${route}#treatments`,
          title: cleanText(step.title),
          description: cleanText(step.description || '').substring(0, 200),
          category: 'Rehabilitation Programs',
          icon: CATEGORY_ICONS['Rehabilitation Programs'],
          content: cleanText(`${step.title} ${step.description || ''}`),
          keywords,
          priority: priority + 2,
        });
      }
    }

    // ── Technology cards
    if (data.technologies?.cards) {
      for (let i = 0; i < data.technologies.cards.length; i++) {
        const tech = data.technologies.cards[i];
        if (!tech?.title) continue;
        addEntry({
          id: `${slug}-tech-${slugify(tech.title).substring(0, 40)}`,
          url: `${route}#technologies`,
          title: cleanText(tech.title),
          description: cleanText(tech.description || '').substring(0, 200),
          category: 'Technologies',
          icon: CATEGORY_ICONS['Technologies'],
          content: cleanText(`${tech.title} ${tech.description || ''}`),
          keywords,
          priority: priority + 2,
        });
      }
    }

    // ── FAQ items
    if (data.faq?.items) {
      for (let i = 0; i < data.faq.items.length; i++) {
        const faq = data.faq.items[i];
        if (!faq?.question) continue;
        addEntry({
          id: `${slug}-faq-${i}`,
          url: `${route}#faq`,
          title: cleanText(faq.question),
          description: cleanText(faq.answer || '').substring(0, 200),
          category: 'FAQs',
          icon: CATEGORY_ICONS['FAQs'],
          content: cleanText(`${faq.question} ${faq.answer || ''}`),
          keywords,
          priority: priority + 1,
        });
      }
    }

    console.log(`  ✅ Indexed: ${slug} (${category})`);
  }

  // Special: Stroke rehab page — indexed via static entry since it has its own client
  if (!seen.has('stroke-rehab')) {
    addEntry({
      id: 'stroke-rehab',
      url: '/stroke-rehab',
      title: 'Stroke Rehabilitation & Care',
      description: 'A highly aggressive, time-sensitive integrated treatment pathway utilizing brain plasticity to recover lost motor, speech, and cognitive functions post-stroke.',
      category: 'Treatments',
      icon: CATEGORY_ICONS['Treatments'],
      content: 'stroke rehabilitation stroke recovery brain attack cerebrovascular accident motor speech cognitive functions hemiplegia paralysis walking',
      keywords: PAGE_REGISTRY['stroke-rehab']?.keywords || [],
      priority: 1,
    });
    addEntry({
      id: 'stroke-rehab-faq',
      url: '/stroke-rehab#faq',
      title: 'Stroke Rehabilitation FAQs',
      description: 'Frequently asked questions about stroke recovery and rehabilitation at Ayurgreen Hospital.',
      category: 'FAQs',
      icon: CATEGORY_ICONS['FAQs'],
      content: 'stroke faq frequently asked questions recovery timeline motor speech cognitive therapy',
      keywords: PAGE_REGISTRY['stroke-rehab']?.keywords || [],
      priority: 2,
    });
    console.log('  ✅ Indexed: stroke-rehab (static entry)');
  }

  // Write output
  const outputPath = path.join(ROOT, 'public', 'search-index.json');
  fs.writeFileSync(outputPath, JSON.stringify(entries, null, 2), 'utf-8');

  console.log(`\n✨ Search index built successfully!`);
  console.log(`   📄 Total entries: ${entries.length}`);
  console.log(`   📁 Output: public/search-index.json\n`);
}

// ─── TS Data File Parser ──────────────────────────────────────────────────────
// Extracts the pageData export from a TypeScript file without full compilation.
// Uses JSON.parse on extracted object literals where possible.

function parseRehabData(content: string, slug: string): any {
  // Remove TypeScript-specific syntax
  let cleaned = content
    .replace(/import.*?;\n/g, '')
    .replace(/export\s+const\s+pageData:\s+RehabPageData\s*=\s*/, '')
    .replace(/;\s*$/, '')
    .trim();

  // Try to evaluate as a JS object
  try {
    // Use Function constructor to safely evaluate the object literal
    const fn = new Function(`return ${cleaned}`);
    return fn();
  } catch (e) {
    // If that fails, try more aggressive cleanup
    try {
      cleaned = cleaned
        .replace(/([{,]\s*)(\w+)(\s*:)/g, '$1"$2"$3')  // quote keys
        .replace(/'/g, '"')
        .replace(/,\s*([}\]])/g, '$1')  // remove trailing commas
        .replace(/\/\/.*/g, '')  // remove line comments
        .replace(/\/\*[\s\S]*?\*\//g, ''); // remove block comments

      return JSON.parse(cleaned);
    } catch (e2) {
      // Fall through to manual extraction
      return extractManually(content, slug);
    }
  }
}

function extractManually(content: string, slug: string): any {
  // Extract just the key fields we need using regex
  const getField = (key: string): string => {
    const match = content.match(new RegExp(`${key}:\\s*["'\`]([^"'\`]+)["'\`]`));
    return match ? match[1] : '';
  };

  const getArray = (key: string): string[] => {
    const match = content.match(new RegExp(`${key}:\\s*\\[([\\s\\S]*?)\\]`));
    if (!match) return [];
    return match[1]
      .split(',')
      .map(s => s.replace(/["'`\s]/g, '').trim())
      .filter(Boolean);
  };

  return {
    metaTitle: getField('metaTitle'),
    metaDescription: getField('metaDescription'),
    hero: {
      title: getField('title'),
      subtitle: getField('subtitle'),
    },
    overview: {
      title: getField('title'),
      paragraphs: [content.match(/paragraphs:\s*\[([\s\S]*?)\]/)?.[1] || ''],
    },
    conditions: { cards: [] },
    treatments: { steps: [] },
    technologies: { cards: [] },
    faq: { items: [] },
  };
}

// ─── Entry Point ──────────────────────────────────────────────────────────────

buildIndex().catch(err => {
  console.error('❌ Search index build failed:', err);
  process.exit(1);
});
