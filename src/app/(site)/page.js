import AgencyHero from '@/sections/Agency/AgencyHero';
import AgencyFor from '@/sections/Agency/AgencyFor';
import HowItWorks from '@/sections/Agency/HowItWorks';
import AgencyWork from '@/sections/Agency/AgencyWork';
import AgencyServices from '@/sections/Agency/AgencyServices';
import AgencyVsFreelancers from '@/sections/Agency/AgencyVsFreelancers';
import AgencyPricing from '@/sections/Agency/AgencyPricing';
import AgencyBlog from '@/sections/Agency/AgencyBlog';
import AgencyFaq from '@/sections/Agency/AgencyFaq';
import { getAllBlogs } from '@/lib/blogs';
import '@/sections/Agency/agency.css';

// Re-rendered at most every 5 minutes, so new blog posts show up without a redeploy
export const revalidate = 300;

const title = 'Groflex — White-Label Design & Development Team for Agencies';
const description =
  'Groflex is a white-label design, development and marketing team for agencies. Start with a pilot: $0 upfront, pay only if you like the work.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/' },
  openGraph: { title, description },
};

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
      <AgencyVsFreelancers />
      {/* Team section (AgencyTeam) is hidden until real photos are ready */}
      <AgencyPricing />
      <AgencyBlog blogs={blogs} />
      <AgencyFaq />
    </div>
  );
}
