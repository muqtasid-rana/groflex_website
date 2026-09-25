import { SITE_URL } from '@/lib/seo';

// Search and AI crawlers are all welcome; only the admin panel and API are off limits
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
