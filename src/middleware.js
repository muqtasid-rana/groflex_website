import { NextResponse } from 'next/server';

/**
 * Security headers middleware for groflex.co
 * Adds CSP, COOP, HSTS, and other security headers to all responses.
 *
 * CSP whitelist covers: Firebase Auth, Google Tag Manager, Tally.so,
 * FontAwesome CDN, Google Fonts, Vercel Analytics, and EmailJS.
 */

// Content Security Policy — permissive enough for all integrations
const CSP_DIRECTIVES = [
  "default-src 'self'",
  // Scripts: self + all third-party integrations
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://tally.so https://*.tally.so https://*.firebaseapp.com https://*.googleapis.com https://apis.google.com https://vercel.live https://va.vercel-scripts.com",
  // Styles: self + Google Fonts + FontAwesome CDN + inline (FA injects inline styles)
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com",
  // Images: self + data URIs + blob + Firebase Storage + any HTTPS
  "img-src 'self' data: blob: https: http:",
  // Fonts: self + Google Fonts + FontAwesome font files
  "font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com data:",
  // Connect: API calls to Firebase, GA, Tally, EmailJS, Vercel
  "connect-src 'self' https://*.googleapis.com https://*.google-analytics.com https://www.google-analytics.com https://analytics.google.com https://*.firebaseio.com https://*.firebaseapp.com https://firestore.googleapis.com https://tally.so https://*.tally.so https://api.emailjs.com https://va.vercel-scripts.com https://vercel.live wss://*.firebaseio.com",
  // Frames: Tally.so popups + Firebase Auth
  "frame-src 'self' https://tally.so https://*.tally.so https://*.firebaseapp.com https://accounts.google.com",
  // Workers
  "worker-src 'self' blob:",
  // Object/base
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://tally.so https://*.tally.so",
  // Upgrade insecure requests
  "upgrade-insecure-requests",
].join('; ');

export function middleware(request) {
  const response = NextResponse.next();

  // Content Security Policy
  response.headers.set('Content-Security-Policy', CSP_DIRECTIVES);

  // Cross-Origin Opener Policy
  // Using same-origin-allow-popups to not break Tally.so popup forms
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');

  // Strict Transport Security (HSTS)
  // 2 years, includeSubDomains, preload-ready
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload'
  );

  // Prevent MIME-type sniffing
  response.headers.set('X-Content-Type-Options', 'nosniff');

  // Prevent clickjacking
  response.headers.set('X-Frame-Options', 'DENY');

  // Referrer Policy
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Permissions Policy — disable unused browser features
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  );

  return response;
}

// Apply to all routes except static assets and Next.js internals
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.png|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)',
  ],
};
