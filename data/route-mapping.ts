export type RouteMapping = {
    legacyUrl: string;
    newRoute: string;
    category: 'specialities' | 'departments' | 'modern-integrations' | 'core';
    status: 'migrated' | 'pending';
};

export const routeMapping: RouteMapping[] = [
    { legacyUrl: 'index.html', newRoute: '/', category: 'core', status: 'migrated' },
    { legacyUrl: 'rehab-village.html', newRoute: '/rehab-village', category: 'core', status: 'migrated' },
    { legacyUrl: 'about.html', newRoute: '/about', category: 'core', status: 'pending' },
    { legacyUrl: 'international-patients.html', newRoute: '/international-patients', category: 'core', status: 'pending' },
    
    // Specialities
    { legacyUrl: 'stroke-rehab.html', newRoute: '/specialities/stroke-rehab', category: 'specialities', status: 'pending' },
    { legacyUrl: 'spinal-cord-injury.html', newRoute: '/specialities/spinal-cord-injury', category: 'specialities', status: 'pending' },
    { legacyUrl: 'traumatic-brain-injury.html', newRoute: '/specialities/traumatic-brain-injury', category: 'specialities', status: 'pending' },
    { legacyUrl: 'hemiplegia.html', newRoute: '/specialities/hemiplegia', category: 'specialities', status: 'pending' },
    { legacyUrl: 'quadriplegia-paraplegia.html', newRoute: '/specialities/quadriplegia-paraplegia', category: 'specialities', status: 'pending' },
    { legacyUrl: 'post-surgical-complications.html', newRoute: '/specialities/post-surgical-complications', category: 'specialities', status: 'pending' },
    { legacyUrl: 'motor-neuron-diseases.html', newRoute: '/specialities/motor-neuron-diseases', category: 'specialities', status: 'pending' },
    { legacyUrl: 'cerebral-palsy.html', newRoute: '/specialities/cerebral-palsy', category: 'specialities', status: 'pending' },
    { legacyUrl: 'parkinsons-disease.html', newRoute: '/specialities/parkinsons-disease', category: 'specialities', status: 'pending' },
    { legacyUrl: 'myopathy.html', newRoute: '/specialities/myopathy', category: 'specialities', status: 'pending' },
    { legacyUrl: 'disc-spine-problems.html', newRoute: '/specialities/disc-spine-problems', category: 'specialities', status: 'pending' },
    { legacyUrl: 'sciatica.html', newRoute: '/specialities/sciatica', category: 'specialities', status: 'pending' },
    { legacyUrl: 'obesity.html', newRoute: '/specialities/obesity', category: 'specialities', status: 'pending' },
    { legacyUrl: 'post-covid-complications.html', newRoute: '/specialities/post-covid-complications', category: 'specialities', status: 'pending' },
    { legacyUrl: 'muscular-dystrophy.html', newRoute: '/specialities/muscular-dystrophy', category: 'specialities', status: 'pending' },
    { legacyUrl: 'osteoarthritis.html', newRoute: '/specialities/osteoarthritis', category: 'specialities', status: 'pending' },
    { legacyUrl: 'rheumatoid-arthritis.html', newRoute: '/specialities/rheumatoid-arthritis', category: 'specialities', status: 'pending' },
    { legacyUrl: 'developmental-delay.html', newRoute: '/specialities/developmental-delay', category: 'specialities', status: 'pending' },
    { legacyUrl: 'psychological-problems.html', newRoute: '/specialities/psychological-problems', category: 'specialities', status: 'pending' },
    { legacyUrl: 'autism.html', newRoute: '/specialities/autism', category: 'specialities', status: 'pending' },
    { legacyUrl: 'psychiatry.html', newRoute: '/specialities/psychiatry', category: 'specialities', status: 'pending' },

    // Departments
    { legacyUrl: 'ayurveda.html', newRoute: '/departments/ayurveda', category: 'departments', status: 'pending' },
    { legacyUrl: 'physiotherapy.html', newRoute: '/departments/physiotherapy', category: 'departments', status: 'pending' },
    { legacyUrl: 'robotic-rehab.html', newRoute: '/departments/robotic-rehab', category: 'departments', status: 'pending' },
    { legacyUrl: 'occupational-therapy.html', newRoute: '/departments/occupational-therapy', category: 'departments', status: 'pending' },
    { legacyUrl: 'speech-therapy.html', newRoute: '/departments/speech-therapy', category: 'departments', status: 'pending' },
    { legacyUrl: 'virtual-reality.html', newRoute: '/departments/virtual-reality', category: 'departments', status: 'pending' },
    { legacyUrl: 'yoga-meditation.html', newRoute: '/departments/yoga-meditation', category: 'departments', status: 'pending' },
    { legacyUrl: 'acupuncture.html', newRoute: '/departments/acupuncture', category: 'departments', status: 'pending' },
    { legacyUrl: 'reflexology.html', newRoute: '/departments/reflexology', category: 'departments', status: 'pending' },
    { legacyUrl: 'hydro-therapy.html', newRoute: '/departments/hydro-therapy', category: 'departments', status: 'pending' },
    { legacyUrl: 'pediatrics.html', newRoute: '/departments/pediatrics', category: 'departments', status: 'pending' },
    { legacyUrl: 'slimming-treatment.html', newRoute: '/departments/slimming-treatment', category: 'departments', status: 'pending' },
    { legacyUrl: 'pain-management.html', newRoute: '/departments/pain-management', category: 'departments', status: 'pending' },
    { legacyUrl: 'diet-nutrition.html', newRoute: '/departments/diet-nutrition', category: 'departments', status: 'pending' },
    { legacyUrl: 'counseling.html', newRoute: '/departments/counseling', category: 'departments', status: 'pending' },
    { legacyUrl: 'dentistry.html', newRoute: '/departments/dentistry', category: 'departments', status: 'pending' },
    { legacyUrl: 'modern-medicine.html', newRoute: '/departments/modern-medicine', category: 'departments', status: 'pending' },
    { legacyUrl: 'assistive-devices.html', newRoute: '/departments/assistive-devices', category: 'departments', status: 'pending' },

    // Modern Integrations
    { legacyUrl: 'neurology.html', newRoute: '/modern-integrations/neurology', category: 'modern-integrations', status: 'pending' },
    { legacyUrl: 'neurosurgery.html', newRoute: '/modern-integrations/neurosurgery', category: 'modern-integrations', status: 'pending' },
    { legacyUrl: 'orthopedic.html', newRoute: '/modern-integrations/orthopedic', category: 'modern-integrations', status: 'pending' },
    { legacyUrl: 'ent.html', newRoute: '/modern-integrations/ent', category: 'modern-integrations', status: 'pending' },
    { legacyUrl: 'general-medicine.html', newRoute: '/modern-integrations/general-medicine', category: 'modern-integrations', status: 'pending' },
    { legacyUrl: 'urology.html', newRoute: '/modern-integrations/urology', category: 'modern-integrations', status: 'pending' },
    { legacyUrl: 'cardiology.html', newRoute: '/modern-integrations/cardiology', category: 'modern-integrations', status: 'pending' },
    { legacyUrl: 'respiratory-therapy.html', newRoute: '/modern-integrations/respiratory-therapy', category: 'modern-integrations', status: 'pending' },
    { legacyUrl: 'neuro-psychology.html', newRoute: '/modern-integrations/neuro-psychology', category: 'modern-integrations', status: 'pending' },
];

export function getNewRoute(legacyUrl: string): string {
    const route = routeMapping.find(r => r.legacyUrl === legacyUrl);
    if (!route) return legacyUrl; // Keep original if not found
    return route.status === 'migrated' ? route.newRoute : legacyUrl;
}
