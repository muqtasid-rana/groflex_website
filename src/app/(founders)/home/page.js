import FoundersHome from '@/views/FoundersHome/FoundersHome';
import { pageMetadata } from '@/lib/seo';

// Re-rendered at most every 5 minutes, so new blog posts show up without a redeploy
export const revalidate = 300;

// The founders page with Ashhkaro still in it. Noindexed and left out of the
// sitemap, so it doesn't compete with / in search as a near-duplicate.
export const metadata = pageMetadata({
  title: 'Groflex — Apps, SaaS and Websites for Founders at a Fixed Price',
  description:
    'Design, web and app development for founders. A fixed quote in 48 hours, a fixed timeline, and you own all the code.',
  path: '/home',
  noindex: true,
});

export default function FullHomePage() {
  return <FoundersHome home="/home" />;
}
