const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const rootDir = __dirname;
const htmlFiles = fs.readdirSync(rootDir).filter(file => file.endsWith('.html'));

const index = [];

// Keywords for auto-classification if schema isn't present or explicit
const CATEGORY_KEYWORDS = {
    Treatments: [
        'rehabilitation', 'rehab', 'stroke rehabilitation', 'parkinson’s', 'parkinson',
        'cerebral palsy', 'traumatic brain injury', 'spinal cord injury', 'sci', 'ms',
        'alzheimer’s', 'alzheimer', 'hemiplegia', 'myopathy', 'motor neuron', 'muscular dystrophy',
        'autism', 'developmental delay', 'psychological problems', 'slimming treatment',
        'post-covid', 'post-surgical', 'arthritis', 'osteoarthritis', 'rheumatoid', 'sciatica', 'spine', 'disc'
    ],
    Conditions: [
        'stroke', 'parkinson\'s disease', 'cerebral palsy', 'spinal cord injury', 'multiple sclerosis',
        'alzheimer\'s disease', 'hemiplegia', 'myopathy', 'motor neuron disease', 'muscular dystrophy',
        'autism spectrum disorder', 'developmental delay', 'osteoarthritis', 'rheumatoid arthritis',
        'sciatica', 'disc protrusion', 'spine pain', 'obesity'
    ],
    Specialities: [
        'physiotherapy', 'occupational therapy', 'speech therapy', 'acupuncture', 'reflexology',
        'yoga', 'meditation', 'diet', 'nutrition', 'ayurveda', 'hydrotherapy', 'hydro-therapy',
        'respiratory therapy', 'shirodhara', 'pizhichil', 'nasya', 'vasti', 'abhyanga',
        'udwarthanam', 'panchakarma', 'mirror therapy'
    ],
    Technologies: [
        'robotic gait', 'robotic arm', 'virtual reality', 'vr ', 'electrical stimulation',
        'fes', 'underwater treadmill', 'sensory motor', 'huber 360', 'assistive device'
    ],
    Departments: [
        'neurology', 'neurosurgery', 'orthopedic', 'cardiology', 'pediatrics',
        'dentistry', 'ent', 'urology', 'psychiatry', 'general medicine',
        'neuro-psychology', 'naturopathy'
    ],
    Facilities: [
        'international patient', 'swimming pool', 'mosque', 'travel desk', 'fitness centre',
        'accommodation', 'guest house', 'dining', 'restaurant', 'travel support', 'visa assistance'
    ],
    Blogs: [
        'blog', 'article', 'news', 'insights'
    ],
    Pages: [
        'about us', 'why ayurgreen', 'admire', 'careers', 'contact'
    ]
};

// Maps of specific HTML file basenames to target categories
const PAGE_CATEGORY_MAP = {
    'index.html': 'Pages',
    'about.html': 'Pages',
    'rehab-village.html': 'Rehab Village',
    'international-patients.html': 'Facilities',
    
    // Treatments/Conditions
    'stroke-rehab.html': 'Treatments',
    'parkinsons-disease.html': 'Treatments',
    'cerebral-palsy.html': 'Treatments',
    'traumatic-brain-injury.html': 'Treatments',
    'spinal-cord-injury.html': 'Treatments',
    'hemiplegia.html': 'Treatments',
    'myopathy.html': 'Treatments',
    'motor-neuron-diseases.html': 'Treatments',
    'autism.html': 'Treatments',
    'osteoarthritis.html': 'Treatments',
    'sciatica.html': 'Treatments',
    'rheumatoid-arthritis.html': 'Treatments',
    'muscular-dystrophy.html': 'Treatments',
    'disc-spine-problems.html': 'Treatments',
    'obesity.html': 'Treatments',
    'developmental-delay.html': 'Treatments',
    'psychological-problems.html': 'Treatments',
    'slimming-treatment.html': 'Treatments',
    'post-covid-complications.html': 'Treatments',
    'post-surgical-complications.html': 'Treatments',
    
    // Specialities
    'physiotherapy.html': 'Specialities',
    'occupational-therapy.html': 'Specialities',
    'speech-therapy.html': 'Specialities',
    'acupuncture.html': 'Specialities',
    'reflexology.html': 'Specialities',
    'yoga-meditation.html': 'Specialities',
    'diet-nutrition.html': 'Specialities',
    'ayurveda.html': 'Specialities',
    'hydro-therapy.html': 'Specialities',
    'respiratory-therapy.html': 'Specialities',
    
    // Technologies
    'robotic-rehab.html': 'Technologies',
    'virtual-reality.html': 'Technologies',
    'assistive-devices.html': 'Technologies',
    
    // Departments
    'neurology.html': 'Departments',
    'neurosurgery.html': 'Departments',
    'orthopedic.html': 'Departments',
    'ent.html': 'Departments',
    'general-medicine.html': 'Departments',
    'urology.html': 'Departments',
    'cardiology.html': 'Departments',
    'respiratory-therapy.html': 'Departments',
    'neuro-psychology.html': 'Departments',
    'pediatrics.html': 'Departments',
    'dentistry.html': 'Departments'
};

const CATEGORY_ICONS = {
    Treatments: '🧠',
    Conditions: '🤒',
    Departments: '🏥',
    Specialities: '🏃',
    Technologies: '🤖',
    Doctors: '👨‍⚕️',
    Facilities: '🏨',
    'Rehab Village': '🏡',
    FAQs: '❓',
    Blogs: '📖',
    Pages: '📄'
};

function cleanText(text) {
    if (!text) return '';
    return text
        .replace(/\s+/g, ' ')
        .trim();
}

function determineCategory(text, defaultCategory) {
    const textLower = text.toLowerCase();
    
    for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
        for (const keyword of keywords) {
            if (textLower.includes(keyword)) {
                return category;
            }
        }
    }
    
    return defaultCategory;
}

function slugify(text) {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

console.log('Generating dynamic search index...');

htmlFiles.forEach(file => {
    // Skip utilities or build files
    if (file === 'add_youtube.py' || file === 'process_image.py') return;
    
    const filePath = path.join(rootDir, file);
    const html = fs.readFileSync(filePath, 'utf8');
    const $ = cheerio.load(html);
    
    // Extract metadata
    const pageTitle = cleanText($('title').text()) || file;
    const cleanTitle = pageTitle.split('|')[0].trim();
    const metaDesc = cleanText($('meta[name="description"]').attr('content')) || '';
    
    const defaultPageCategory = PAGE_CATEGORY_MAP[file] || 'Pages';
    
    // 1. Index the Page itself
    index.push({
        url: file,
        title: cleanTitle,
        desc: metaDesc || `Explore more about ${cleanTitle} at Ayurgreen Hospital.`,
        category: defaultPageCategory,
        icon: CATEGORY_ICONS[defaultPageCategory] || '📄',
        content: cleanText($('body').text())
    });

    // 2. Parse JSON-LD structured data for conditions, procedures, FAQs, or doctors
    $('script[type="application/ld+json"]').each((_, script) => {
        try {
            const data = JSON.parse($(script).html());
            const graph = data['@graph'] || (Array.isArray(data) ? data : [data]);
            
            graph.forEach(item => {
                if (!item) return;

                // Process FAQPage schema
                if (item['@type'] === 'FAQPage' && item.mainEntity) {
                    const questions = Array.isArray(item.mainEntity) ? item.mainEntity : [item.mainEntity];
                    questions.forEach((q, idx) => {
                        if (q && q.name && q.acceptedAnswer && q.acceptedAnswer.text) {
                            const qText = cleanText(q.name);
                            const aText = cleanText(q.acceptedAnswer.text.replace(/<[^>]+>/g, ' '));
                            
                            index.push({
                                url: `${file}#faq-${idx}`,
                                title: qText,
                                desc: aText,
                                category: 'FAQs',
                                icon: CATEGORY_ICONS['FAQs'],
                                content: `${qText} ${aText}`
                            });
                        }
                    });
                }
                
                // Process Physician schema
                if (item['@type'] === 'Physician' || item['@type'] === 'Person' && (item.jobTitle || '').toLowerCase().includes('doctor')) {
                    const docName = cleanText(item.name);
                    const specialty = cleanText(item.medicalSpecialty || item.jobTitle || '');
                    const credential = cleanText(item.credential || '');
                    const desc = cleanText(item.description || '');
                    
                    index.push({
                        url: file,
                        title: docName,
                        desc: `${specialty} ${credential ? `(${credential})` : ''}. ${desc}`,
                        category: 'Doctors',
                        icon: CATEGORY_ICONS['Doctors'],
                        content: `${docName} ${specialty} ${credential} ${desc}`
                    });
                }
            });
        } catch (e) {
            // Ignore malformed JSON-LD scripts
        }
    });

    // 3. Extract FAQ elements using CSS class patterns
    $('.ayur-faq-item').each((idx, el) => {
        const trigger = $(el).find('.ayur-faq-trigger');
        const content = $(el).find('.ayur-faq-content-inner, .ayur-faq-content');
        
        if (trigger.length && content.length) {
            // Remove the plus/minus icon text from heading if present
            const triggerClone = trigger.clone();
            triggerClone.find('.faq-icon, svg, i').remove();
            
            const question = cleanText(triggerClone.text());
            const answer = cleanText(content.text());
            
            // Check if element has an ID, if not create one
            let id = $(el).attr('id');
            if (!id) {
                id = `faq-${slugify(question.substring(0, 30))}`;
                $(el).attr('id', id); // We don't save back the HTML file, but we can generate a predictable anchor
            }
            
            // Avoid indexing duplicates already picked up by schema
            const isDuplicate = index.some(item => item.category === 'FAQs' && item.title === question);
            if (!isDuplicate && question && answer) {
                index.push({
                    url: `${file}#${id}`,
                    title: question,
                    desc: answer,
                    category: 'FAQs',
                    icon: CATEGORY_ICONS['FAQs'],
                    content: `${question} ${answer}`
                });
            }
        }
    });

    // 4. Index major content headings and sections for precise search navigation
    $('h2, h3').each((_, el) => {
        const headingText = cleanText($(el).text());
        if (!headingText || headingText.length < 4 || headingText.toLowerCase() === 'frequently asked questions' || headingText.toLowerCase() === 'common queries') return;
        
        let id = $(el).attr('id');
        if (!id) {
            id = slugify(headingText);
        }
        
        // Find text content under this heading until the next heading
        let paragraphText = '';
        let next = $(el).next();
        while (next.length && !next.is('h1, h2, h3')) {
            if (next.is('p, li, .rv-para-medium, .ayur-section-support')) {
                paragraphText += ' ' + cleanText(next.text());
            }
            next = next.next();
        }
        paragraphText = cleanText(paragraphText);
        
        if (paragraphText.length > 20) {
            // Auto-classify section based on content/keywords
            let sectionCategory = determineCategory(headingText + ' ' + paragraphText, defaultPageCategory);
            
            // If it classified as "Pages" or "Rehab Village", keep it aligned
            if (sectionCategory === 'Pages' && defaultPageCategory !== 'Pages') {
                sectionCategory = defaultPageCategory;
            }
            
            index.push({
                url: `${file}#${id}`,
                title: headingText,
                desc: paragraphText.substring(0, 160) + (paragraphText.length > 160 ? '...' : ''),
                category: sectionCategory,
                icon: CATEGORY_ICONS[sectionCategory] || '📄',
                content: `${headingText} ${paragraphText}`
            });
        }
    });
});

// Remove duplicate FAQ entries and page-level overlap entries to keep search clean
const uniqueIndex = [];
const seenKeys = new Set();

index.forEach(item => {
    const key = `${item.category}:${item.title.toLowerCase().trim()}:${item.url}`;
    if (!seenKeys.has(key)) {
        seenKeys.add(key);
        uniqueIndex.push(item);
    }
});

fs.writeFileSync(path.join(rootDir, 'public', 'search-index.json'), JSON.stringify(uniqueIndex, null, 2));
console.log(`Search index successfully updated inside public/ directory.`);
console.log(`Indexed ${uniqueIndex.length} distinct records across ${htmlFiles.length} pages.`);
