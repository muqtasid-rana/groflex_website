import AgencyHero from '@/sections/Agency/AgencyHero';
import AgencyFor from '@/sections/Agency/AgencyFor';
import HowItWorks from '@/sections/Agency/HowItWorks';
import AgencyWork from '@/sections/Agency/AgencyWork';
import AgencyServices from '@/sections/Agency/AgencyServices';
import AgencyVsHiring from '@/sections/Agency/AgencyVsHiring';
import AgencyPricing from '@/sections/Agency/AgencyPricing';
import AgencyBlog from '@/sections/Agency/AgencyBlog';
import AgencyFaq from '@/sections/Agency/AgencyFaq';
import RevealObserver from '@/sections/Agency/RevealObserver';
import JsonLd from '@/components/JsonLd/JsonLd';
import { getAllBlogs } from '@/lib/blogs';
import { pageMetadata, faqJsonLd } from '@/lib/seo';
import { pricing } from '@/data/siteData';
import '@/sections/Agency/agency.css';

// Re-rendered at most every 5 minutes, so new blog posts show up without a redeploy
export const revalidate = 300;

export const metadata = pageMetadata({
  title: 'Groflex — White-Label Design & Development Team for UK & US Agencies',
  description:
    'White-label web design, development, app and marketing team for UK and US agencies. Your brand, NDA, your tools. Start with a pilot: $0 upfront, pay only if you like the work.',
  path: '/',
});

// The founder-facing landing page now lives at /founders
export default async function HomePage() {
  const blogs = await getAllBlogs().catch(() => []);

  return (
    <div className="ah">
      <AgencyHero />
      <AgencyFor />
      <HowItWorks />
      <AgencyWork />
      <AgencyServices />
      <AgencyVsHiring />
      {/* Team section (AgencyTeam) is hidden until real photos are ready */}
      <AgencyPricing />
      <AgencyBlog blogs={blogs} />
      <AgencyFaq />
      {/* Marked up here only; the same questions on /pricing stay plain */}
      <JsonLd data={faqJsonLd(pricing.faq)} />
      <RevealObserver />
    </div>
  );
}
