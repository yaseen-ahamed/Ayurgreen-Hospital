import type { RehabPageData } from "./types";

export const pageData: RehabPageData = {
  slug: "hydro-therapy",
  sidebarId: "hydro-therapy",
  metaTitle: "Hydro / Aquatic Therapy | Ayurgreen Hospital",
  metaDescription: "Heated pool therapy leveraging buoyancy to rebuild active walking patterns and coordination without heavy joint loads.",
  canonicalPath: "/hydro-therapy",
  hero: {
    bannerImage: "Assets/rehab/th_aquatic.webp",
    label: "Departments",
    breadcrumbCategory: "Departments",
    title: "Hydro / Aquatic Therapy",
    subtitle: "Heated pool therapy leveraging buoyancy to rebuild active walking patterns and coordination without heavy joint loads.",
  },
  overview: {
    sectionLabel: "OVERVIEW",
    title: "Hydrotherapy: The Healing Power of Water",
    paragraphs: ["Hydrotherapy — therapeutic exercise and treatment in water — harnesses the unique physical properties of water to facilitate rehabilitation that would be impossible on dry land. The buoyancy of water dramatically reduces gravitational loading on joints and muscles; the resistance of water provides gentle, 360° resistance for strengthening; and the warmth of water relaxes muscle spasm and reduces pain.", "At Ayurgreen Hospital, our Hydrotherapy Department features specialized aquatic therapy facilities with separate pools for men and women, and an advanced Underwater Treadmill (AquaCiser III) — enabling precise, progressive water-based rehabilitation from the earliest stages of recovery.", "Hydrotherapy is particularly valuable for our rehabilitation population: it enables weight-bearing walking practice for patients who cannot yet bear full weight on land; provides gentle, effective exercise for obese patients where land-based exercise is limited by joint pain; and offers a refreshing, motivating alternative to conventional physiotherapy."],
    image: "Assets/rehab/prog_stroke.webp",
    imageAlt: "Hydro / Aquatic Therapy at Ayurgreen Hospital",
  },
  conditions: {
    sectionLabel: "HYDROTHERAPY INDICATIONS",
    sectionTitle: "Who Benefits from Hydrotherapy",
    sectionSupport: "Specialized aquatic rehabilitation for neurological, orthopedic, and general rehabilitation conditions.",
    cards: [
    {
        "image": "Assets/rehab/prog_stroke.webp",
        "title": "Neurological Rehabilitation",
        "description": "Stroke and TBI patients practicing gait and balance in the safe, buoyancy-supported aquatic environment. Spinal cord injury patients with incomplete recovery practicing walking movements. Parkinson's disease balance and gait therapy in water."
    },
    {
        "image": "Assets/rehab/prog_spinal_cord.webp",
        "title": "Orthopedic & Post-Surgical Rehabilitation",
        "description": "Early post-surgical weight-bearing practice after knee and hip replacement. Osteoarthritis and back pain management with water-based exercise. Sciatica rehabilitation and fracture recovery using the reduced gravitational loading of water."
    },
    {
        "image": "Assets/rehab/prog_parkinsons.webp",
        "title": "Obesity & General Deconditioning",
        "description": "Effective cardiovascular and strengthening exercise for obese patients who cannot perform land-based exercise due to joint pain. Post-ICU deconditioning rehabilitation using the motivating aquatic environment."
    }
],
  },
  treatments: {
    sectionLabel: "HYDROTHERAPY SERVICES",
    sectionTitle: "Comprehensive Hydrotherapy Services",
    sectionSupport: "Advanced aquatic rehabilitation using our hydrotherapy pool and AquaCiser III underwater treadmill.",
    steps: [
    {
        "image": "Assets/rehab/prog_stroke.webp",
        "title": "AquaCiser III Underwater Treadmill Training",
        "description": "Our AquaCiser III underwater treadmill allows precise, progressive gait training at adjustable water depths — enabling patients to practice walking at any percentage of body weight from 20% to full weight bearing. This is invaluable for patients who cannot yet bear full weight on land after neurological injury, joint replacement, or fracture. Water depth, belt speed, and jet resistance are individually adjustable for complete customization."
    },
    {
        "image": "Assets/rehab/th_physiotherapy.webp",
        "title": "Aquatic Physiotherapy",
        "description": "Structured therapeutic exercise programs in our hydrotherapy pool: Bad Ragaz Ring Method for facilitated aquatic exercise; Halliwick Concept for swimming and water confidence in neurologically impaired patients; water-based strengthening using resistance paddles and buoyancy equipment; aquatic balance and proprioception training. All sessions are directed by trained aquatic physiotherapists."
    },
    {
        "image": "Assets/rehab/th_panchakarma.webp",
        "title": "Medicated Aquatic Therapies",
        "description": "Integration of Ayurvedic principles with aquatic therapy: medicated warm water immersion with Ayurvedic herbs (Dashamoola, Nirgundi) added to the hydrotherapy pool provides simultaneous physiotherapy and topical Ayurvedic treatment. This reduces joint inflammation, relaxes muscle spasm, and provides the anti-inflammatory and analgesic benefits of Ayurvedic herbs through water immersion."
    },
    {
        "image": "Assets/rehab/prog_spinal_cord.webp",
        "title": "Halliwick Aquatic Therapy for Neurological Rehab",
        "description": "The Halliwick Concept is a specialized aquatic therapy method for people with physical and mental disabilities, developing water independence and using water's properties for therapeutic effect. Particularly valuable for stroke, CP, and SCI patients — improving balance, rotation control, and confidence in water, with significant carryover to land-based balance and mobility."
    }
],
  },
  technologies: {
    sectionLabel: "HYDROTHERAPY TECHNOLOGY",
    sectionTitle: "Advanced Hydrotherapy Facilities",
    sectionSupport: "State-of-the-art hydrotherapy equipment for comprehensive aquatic rehabilitation.",
    cards: [
    {
        "icon": "waves",
        "title": "AquaCiser III Underwater Treadmill",
        "description": "Advanced underwater treadmill allowing precise weight-bearing reduction from 20-80% of body weight — enabling gait training at any recovery stage after neurological or orthopedic injury."
    },
    {
        "icon": "droplet",
        "title": "Therapeutic Hydrotherapy Pool",
        "description": "Separate hydrotherapy pools for men and women with temperature control, hydraulic floor lift for safe pool entry, and appropriate accessibility for wheelchair and non-ambulant patients."
    },
    {
        "icon": "thermometer",
        "title": "Precise Temperature Control",
        "description": "Thermostatically controlled pool temperature maintained at therapeutic levels (33-36°C) — warm enough to relax spasm without causing dehydration or cardiovascular stress."
    },
    {
        "icon": "leaf",
        "title": "Medicated Aquatic Therapy",
        "description": "Dashamoola and Nirgundi herbal additions to hydrotherapy water — combining the physiotherapy benefits of aquatic exercise with topical Ayurvedic anti-inflammatory treatment."
    },
    {
        "icon": "activity",
        "title": "Underwater Gait Analysis",
        "description": "Underwater video gait analysis identifying movement compensations during aquatic gait training — guiding precise physiotherapy interventions to improve gait quality."
    }
],
  },
  faq: {
    sectionSupport: "Find answers to key details about the Hydro / Aquatic Therapy program.",
    items: [
    {
        "question": "What is the recovery protocol for this program?",
        "answer": "Our recovery protocol for Hydro / Aquatic Therapy combines daily intensive rehabilitation therapies (robotic support and physical therapy) with personalized Ayurvedic nerve nourishment and systemic detoxification to accelerate functional gains."
    },
    {
        "question": "How long is the typical inpatient stay?",
        "answer": "Most inpatient stays range from 14 to 28 days. A comprehensive assessment is conducted on arrival to map specific milestones, timelines, and discharge pathways."
    },
    {
        "question": "Is robotic therapy safe for all patients?",
        "answer": "Yes, robotic training is safe and is adjusted based on muscle strength, joint ranges, and fatigue levels. Every session is directly supervised by certified clinical engineers and therapists."
    },
    {
        "question": "Are the Ayurvedic medicines safe?",
        "answer": "All herbal oils and medicines are sourced from GMP-certified traditional pharmacies and undergo rigorous testing. They are prescribed specifically to match the patient's biological state."
    },
    {
        "question": "Can we coordinate with our existing neurologist?",
        "answer": "Absolutely. We encourage multidisciplinary alignment and coordinate closely with the patient's referring clinicians to ensure continuity of care."
    },
    {
        "question": "What is the daily therapy schedule?",
        "answer": "A typical day includes active physical and robotic rehabilitation in the morning, followed by relaxing Ayurvedic therapies and counseling sessions in the afternoon."
    },
    {
        "question": "Do you offer post-discharge support?",
        "answer": "Yes, we provide detailed home-exercise regimens, custom orthotic consultations, and online follow-ups to ensure patients maintain their functional gains."
    },
    {
        "question": "How do I book a consultation?",
        "answer": "You can book a virtual consultation by submitting your medical records online, messaging our coordinators via WhatsApp, or calling our helpline directly."
    }
],
  },
};
