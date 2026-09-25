import { getAllBlogs } from '@/lib/blogs';
import { SITE_URL } from '@/lib/seo';
import { servicePages, marketPages } from '@/data/servicePages';

export const dynamic = 'force-dynamic';

// Only pages we want ranked. /founders and the numbered case studies are
// noindexed, and /gameplan is a founder tool, so they're left out.
// Static pages carry no lastModified: stamping them with today's date on every
// request taught search engines to ignore the dates, including the blog's real ones.
const staticPages = [
  { path: '', changeFrequency: 'weekly', priority: 1 },
  ...servicePages.map((p) => ({ path: `/${p.slug}`, changeFrequency: 'monthly', priority: 0.9 })),
  ...marketPages.map((p) => ({ path: `/${p.slug}`, changeFrequency: 'monthly', priority: 0.9 })),
  { path: '/pricing', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/about', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/work', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/case-study/incorpo', changeFrequency: 'yearly', priority: 0.7 },
  { path: '/case-study/slashcure', changeFrequency: 'yearly', priority: 0.7 },
  { path: '/case-study/ashhkaro', changeFrequency: 'yearly', priority: 0.7 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.2 },
];

export default async function sitemap() {
  let blogPages = [];
  try {
    const blogs = await getAllBlogs();
    blogPages = blogs.map((blog) => {
      const changed = blog.updatedAt || blog.date || blog.createdAt;
      return {
        url: `${SITE_URL}/blog/${blog.slug}`,
        ...(changed && { lastModified: new Date(changed) }),
        changeFrequency: 'monthly',
        priority: 0.7,
      };
    });
  } catch (e) {
    console.error('Sitemap: failed to fetch blogs', e);
  }

  return [
    ...staticPages.map(({ path, ...rest }) => ({ url: `${SITE_URL}${path}`, ...rest })),
    ...blogPages,
  ];
}
