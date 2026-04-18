import { getAllBlogs } from '@/lib/blogs';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://groflex.co';

export const dynamic = 'force-dynamic';

export default async function sitemap() {
  // Static pages
  const staticPages = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ];

  // Case study pages
  const caseStudyPages = [1, 2, 3, 4, 5, 6].map((id) => ({
    url: `${SITE_URL}/case-study/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Blog pages from Firestore
  let blogPages = [];
  try {
    const blogs = await getAllBlogs();
    blogPages = blogs.map((blog) => ({
      url: `${SITE_URL}/blog/${blog.slug}`,
      lastModified: blog.updatedAt ? new Date(blog.updatedAt) : new Date(blog.date || Date.now()),
      changeFrequency: 'weekly',
      priority: 0.8,
    }));
  } catch (e) {
    console.error('Sitemap: failed to fetch blogs', e);
  }

  return [...staticPages, ...caseStudyPages, ...blogPages];
}
