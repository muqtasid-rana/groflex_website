import AgencyHero from '@/sections/Agency/AgencyHero';
import AgencyFor from '@/sections/Agency/AgencyFor';
import HowItWorks from '@/sections/Agency/HowItWorks';
import AgencyWork from '@/sections/Agency/AgencyWork';
import AgencyServices from '@/sections/Agency/AgencyServices';
import AgencyVsFreelancers from '@/sections/Agency/AgencyVsFreelancers';
import AgencyTeam from '@/sections/Agency/AgencyTeam';
import AgencyPricing from '@/sections/Agency/AgencyPricing';
import AgencyFaq from '@/sections/Agency/AgencyFaq';
import '@/sections/Agency/agency.css';

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
export default function HomePage() {
  return (
    <div className="ah">
      <AgencyHero />
      <AgencyFor />
      <HowItWorks />
      <AgencyWork />
      <AgencyServices />
      <AgencyVsFreelancers />
      <AgencyTeam />
      <AgencyPricing />
      <AgencyFaq />
    </div>
  );
}
