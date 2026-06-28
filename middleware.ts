import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  if (pathname === '/index.html') {
    return NextResponse.redirect(new URL('/', request.url), 302);
  }
  
  if (pathname === '/rehab-village.html') {
    return NextResponse.redirect(new URL('/rehab-village', request.url), 302);
  }
  
  // Fallback for unmigrated routes to recover from cached browser 301 redirects
  const isMigratedRoute = pathname === '/' || pathname === '/rehab-village';
  const hasExtension = pathname.includes('.');
  const isNextInternal = pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname === '/favicon.ico';
  
  if (!isMigratedRoute && !hasExtension && !isNextInternal) {
    return NextResponse.redirect(new URL(`${pathname}.html`, request.url), 302);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|Assets|robots.txt|sitemap.xml).*)',
  ],
};
