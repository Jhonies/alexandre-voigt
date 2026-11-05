const isDev = process.env.NODE_ENV !== 'production';

// Google Analytics, Tag Manager e Google Ads (conversões disparadas pelo GTM).
// Sem estes domínios o navegador bloqueia as tags do layout.
const GOOGLE_SCRIPT = 'https://*.googletagmanager.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.google.com';
const GOOGLE_IMG = 'https://*.google-analytics.com https://*.googletagmanager.com https://*.g.doubleclick.net https://www.google.com https://www.google.com.br';
const GOOGLE_CONNECT = 'https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.g.doubleclick.net https://www.google.com https://www.googleadservices.com https://pagead2.googlesyndication.com';
const GOOGLE_FRAME = 'https://www.googletagmanager.com https://td.doubleclick.net https://bid.g.doubleclick.net';

const cspDirectives = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' ${GOOGLE_SCRIPT}${isDev ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  `img-src 'self' data: blob: ${GOOGLE_IMG}`,
  `connect-src 'self' ${GOOGLE_CONNECT}${isDev ? ' ws: http://localhost:* https://localhost:*' : ''}`,
  `frame-src ${GOOGLE_FRAME}`,
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
];

const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Content-Security-Policy', value: cspDirectives.join('; ') },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
