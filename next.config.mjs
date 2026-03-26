/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable compression (gzip + brotli)
  compress: true,

  images: {
    // Allow Next.js to optimize images
    unoptimized: false,
    // Serve modern formats automatically
    formats: ['image/avif', 'image/webp'],
    // Responsive image breakpoints
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // Cache headers for static assets
  async headers() {
    return [
      {
        // Immutable cache for hashed static assets (JS, CSS, images)
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Long cache for optimized images
        source: '/_next/image/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
      {
        // Cache for public static files (favicon, etc.)
        source: '/:path(favicon\\.png|robots\\.txt|sitemap\\.xml)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
