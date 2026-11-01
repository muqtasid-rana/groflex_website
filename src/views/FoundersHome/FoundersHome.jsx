import Navbar from '@/layout/Navbar/Navbar';
import Footer from '@/layout/Footer/Footer';
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
import { clientLogos, featuredWork, liveFeaturedWork, navCustomers, withoutAshhkaro } from '@/data/siteData';
import { statement, statementSub, steps, serviceGroups, faq, whatsappChat, heroGallery, liveHeroGallery } from '@/data/foundersPage';
import '@/sections/Agency/agency.css';
import '@/sections/Founders/founders.css';

// The founders page, for people building an app, SaaS or website. It sits outside
// the agency pages' layout so its footer can talk to founders instead of agencies.
// Served at / without Ashhkaro (`hideAshhkaro`) and at /home with everything.
export default async function FoundersHome({ home = '/', hideAshhkaro = false }) {
  const blogs = await getAllBlogs().catch(() => []);

  return (
    <>
      <Navbar home={home} customers={hideAshhkaro ? withoutAshhkaro(navCustomers) : navCustomers} />
      <main>
        <div className="ah fd-page">
          <FoundersHero
            gallery={hideAshhkaro ? liveHeroGallery : heroGallery}
            clients={hideAshhkaro ? withoutAshhkaro(clientLogos) : clientLogos}
          />
          <AgencyFor statement={statement} sub={statementSub} />
          <HowItWorks steps={steps} title={['How we build', 'your product']} />
          <AgencyWork projects={hideAshhkaro ? liveFeaturedWork : featuredWork} />
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
      </main>
      <Footer variant="founders" home={home} hideLink={hideAshhkaro ? 'Ashhkaro' : undefined} />
    </>
  );
}
