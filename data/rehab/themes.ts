// Per-page dark liquid-glass theme palette
// Used by RehabConditions & RehabTechnologies to set CSS custom properties
// so each of the 48 pages gets a unique, rich dark colour scheme.

export interface PageTheme {
  /** Main dark radial gradient for the section background */
  gradient: string;
  /** Ambient orb 1 colour (top-left) */
  orb1: string;
  /** Ambient orb 2 colour (bottom-right) */
  orb2: string;
  /** Ambient orb 3 colour (mid-right) */
  orb3: string;
  /** Accent colour for labels & icon highlights */
  accent: string;
}

// Helper: build a theme from a base RGB colour
function mk(r: number, g: number, b: number, a1 = 0.55, a2 = 0.40, a3 = 0.28): PageTheme {
  const d1r = Math.round(r * 0.28), d1g = Math.round(g * 0.28), d1b = Math.round(b * 0.28);
  const d2r = Math.round(r * 0.10), d2g = Math.round(g * 0.10), d2b = Math.round(b * 0.10);
  const o2r = Math.round(r * 0.6), o2g = Math.round(g * 0.6), o2b = Math.min(Math.round(b * 1.3), 255);
  const o3r = Math.min(Math.round(r * 1.2), 255);
  return {
    gradient: `radial-gradient(ellipse at 18% 55%, rgba(${d1r},${d1g},${d1b},0.96) 0%, rgba(${d2r},${d2g},${d2b},0.98) 58%, rgba(2,3,8,1) 100%)`,
    orb1: `rgba(${r},${g},${b},${a1})`,
    orb2: `rgba(${o2r},${o2g},${o2b},${a2})`,
    orb3: `rgba(${o3r},${g},${b},${a3})`,
    accent: `rgb(${r},${g},${b})`,
  };
}

export const PAGE_THEMES: Record<string, PageTheme> = {
  // ── Ayurveda / Natural ─────────────────────────────────────────────
  'ayurveda':                    mk(43,  196, 109),   // emerald green
  'yoga-meditation':             mk(234, 179,   8),   // golden saffron
  'acupuncture':                 mk(251, 113, 133),   // rose coral
  'reflexology':                 mk(217, 119,   6),   // warm terracotta
  'diet-nutrition':              mk(110, 231, 183),   // sage mint
  'slimming-treatment':          mk(163, 230,  53),   // chartreuse lime

  // ── Physical Therapy ────────────────────────────────────────────────
  'physiotherapy':               mk(251, 146,  60),   // amber orange
  'hydro-therapy':               mk(56,  189, 248),   // ocean sky blue
  'occupational-therapy':        mk(167, 139, 250),   // soft violet
  'robotic-rehab':               mk(34,  211, 238),   // electric cyan
  'virtual-reality':             mk(129, 140, 248),   // electric indigo
  'speech-therapy':              mk(96,  165, 250),   // cornflower blue

  // ── Neuro & Ortho Conditions ────────────────────────────────────────
  'stroke-rehab':                mk(239,  68,  68),   // scarlet red
  'spinal-cord-injury':          mk(59,  130, 246),   // cobalt blue
  'traumatic-brain-injury':      mk(245, 158,  11),   // burnt amber
  'hemiplegia':                  mk(52,  211, 153),   // seafoam teal
  'quadriplegia-paraplegia':     mk(99,  102, 241),   // midnight indigo
  'post-surgical-complications': mk(132, 204,  22),   // olive-lime
  'motor-neuron-diseases':       mk(236,  72, 153),   // fuchsia rose
  'cerebral-palsy':              mk(147, 197, 253),   // periwinkle sky
  'parkinsons-disease':          mk(234, 179,   8),   // gold mustard
  'myopathy':                    mk(217, 119,   6),   // chestnut warm
  'disc-spine-problems':         mk(100, 116, 139),   // slate steel
  'sciatica':                    mk(185,  28,  28),   // burgundy crimson
  'obesity':                     mk(163, 230,  53),   // bright lime
  'post-covid-complications':    mk(245, 158,  11),   // golden amber
  'muscular-dystrophy':          mk(124,  58, 237),   // deep violet
  'osteoarthritis':              mk(234,  88,  12),   // rust orange
  'rheumatoid-arthritis':        mk(220,  38,  38),   // deep coral-red
  'developmental-delay':         mk(196, 132, 252),   // lilac lavender
  'psychological-problems':      mk(16,  185, 129),   // jade teal
  'autism':                      mk(129, 140, 248),   // soft periwinkle
  'psychiatry':                  mk(147,  51, 234),   // amethyst purple

  // ── Modern Medicine / Specialist ────────────────────────────────────
  'neurology':                   mk(37,   99, 235),   // electric blue
  'neurosurgery':                mk(71,   85, 105),   // silver steel
  'neuro-psychology':            mk(124,  58, 237),   // amethyst violet
  'orthopedic':                  mk(202, 138,   4),   // warm gold
  'cardiology':                  mk(220,  38,  38),   // deep crimson
  'urology':                     mk(29,   78, 216),   // deep ocean blue
  'ent':                         mk(249, 115,  22),   // salmon coral
  'general-medicine':            mk(16,  185, 129),   // healing jade
  'respiratory-therapy':         mk(14,  165, 233),   // cerulean sky

  'assistive-devices':           mk(148, 163, 184),   // warm slate

  // ── Wellness & Rehab Support ─────────────────────────────────────────
  'pain-management':             mk(239,  68,  68),   // ruby crimson
  'counseling':                  mk(192, 132, 252),   // lavender purple
  'dentistry':                   mk(94,  234, 212),   // mint aqua
  'pediatrics':                  mk(244, 114, 182),   // pink magenta
};

/** Fallback theme for any slug not in the map */
export const DEFAULT_THEME: PageTheme = {
  gradient: 'radial-gradient(ellipse at 20% 50%, rgba(10,20,60,0.92) 0%, rgba(2,8,28,0.97) 60%, rgba(0,2,8,1) 100%)',
  orb1: 'rgba(43,196,109,0.5)',
  orb2: 'rgba(99,102,241,0.4)',
  orb3: 'rgba(59,130,246,0.3)',
  accent: '#60A5FA',
};

export function getTheme(slug: string): PageTheme {
  return PAGE_THEMES[slug] ?? DEFAULT_THEME;
}
