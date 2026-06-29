import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// All pages that have been migrated to native Next.js routes.
// Add each slug here as pages are migrated. The .html URL will redirect to the clean route.
const MIGRATED_PAGES: Record<string, string> = {
  '/index.html':                      '/',
  '/rehab-village.html':              '/rehab-village',
  '/stroke-rehab.html':               '/stroke-rehab',
  // --- Group 1: Rehabilitation Programs ---
  '/hemiplegia.html':                 '/hemiplegia',
  '/spinal-cord-injury.html':         '/spinal-cord-injury',
  '/traumatic-brain-injury.html':     '/traumatic-brain-injury',
  '/quadriplegia-paraplegia.html':    '/quadriplegia-paraplegia',
  '/post-surgical-complications.html':'/post-surgical-complications',
  '/motor-neuron-diseases.html':      '/motor-neuron-diseases',
  '/cerebral-palsy.html':             '/cerebral-palsy',
  '/parkinsons-disease.html':         '/parkinsons-disease',
  '/myopathy.html':                   '/myopathy',
  '/muscular-dystrophy.html':         '/muscular-dystrophy',
  '/disc-spine-problems.html':        '/disc-spine-problems',
  '/sciatica.html':                   '/sciatica',
  '/obesity.html':                    '/obesity',
  '/post-covid-complications.html':   '/post-covid-complications',
  '/osteoarthritis.html':             '/osteoarthritis',
  '/rheumatoid-arthritis.html':       '/rheumatoid-arthritis',
  '/developmental-delay.html':        '/developmental-delay',
  '/psychological-problems.html':     '/psychological-problems',
  '/autism.html':                     '/autism',
  '/psychiatry.html':                 '/psychiatry',
};

// Set of clean migrated routes (used to prevent redirect loops)
const MIGRATED_ROUTES = new Set(Object.values(MIGRATED_PAGES));

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect .html → clean route for all migrated pages
  if (MIGRATED_PAGES[pathname]) {
    return NextResponse.redirect(new URL(MIGRATED_PAGES[pathname], request.url), 302);
  }

  // For any non-migrated extensionless path (e.g. /neurology), fall back to legacy .html
  const isNextInternal = pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname === '/favicon.ico';
  const hasExtension = pathname.includes('.');

  if (!MIGRATED_ROUTES.has(pathname) && !hasExtension && !isNextInternal) {
    return NextResponse.redirect(new URL(`${pathname}.html`, request.url), 302);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|Assets|robots.txt|sitemap.xml).*)',
  ],
};
