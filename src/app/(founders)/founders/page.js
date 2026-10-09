import FoundersHero from '@/sections/Founders/FoundersHero';
import FoundersCompare from '@/sections/Founders/FoundersCompare';
import FoundersQuotes from '@/sections/Founders/FoundersQuotes';
import AgencyFor from '@/sections/Agency/AgencyFor';
import HowItWorks from '@/sections/Agency/HowItWorks';
import AgencyWork from '@/sections/Agency/AgencyWork';
import AgencyServices from '@/sections/Agency/AgencyServices';
import AgencyBlog from '@/sections/Agency/AgencyBlog';
import AgencyFaq from '@/sections/Agency/AgencyFaq';
import RevealObserver from '@/sections/Agency/RevealObserver';
import WhatsAppFab from '@/sections/ServicePage/WhatsAppFab';
import { getAllBlogs } from '@/lib/blogs';
import { pageMetadata } from '@/lib/seo';
import { statement, statementSub, steps, serviceGroups, faq, whatsappChat } from '@/data/foundersPage';
import '@/sections/Agency/agency.css';
import '@/sections/Founders/founders.css';

// Re-rendered at most every 5 minutes, so new blog posts show up without a redeploy
export const revalidate = 300;

// The founder-facing page, in the agency home's design. Noindexed so it
// doesn't compete with the agency home or blur what Groflex is in search.
export const metadata = pageMetadata({
  title: 'Groflex for Founders — Apps, SaaS and Websites at a Fixed Price',
  description:
    'Design, web and app development for founders. A fixed quote in 48 hours, a fixed timeline, and you own all the code.',
  path: '/founders',
  noindex: true,
});

export default async function FoundersPage() {
  const blogs = await getAllBlogs().catch(() => []);

  return (
    <div className="ah fd-page">
      <FoundersHero />
      <AgencyFor statement={statement} sub={statementSub} />
      <HowItWorks steps={steps} title={['How we build', 'your product']} />
      <AgencyWork />
      <AgencyServices
        groups={serviceGroups}
        eyebrow="What we build"
        title={['Everything you need to', 'launch and grow']}
      />
      <FoundersCompare />
      <FoundersQuotes />
      <AgencyBlog blogs={blogs} />
      <AgencyFaq items={faq} title={['Questions founders', 'ask us']} />
      <RevealObserver />
      <WhatsAppFab href={whatsappChat} />
    </div>
  );
}
