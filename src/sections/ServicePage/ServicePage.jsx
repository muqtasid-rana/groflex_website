import PageHero from './PageHero';
import ServicePoints from './ServicePoints';
import ServicePricing from './ServicePricing';
import RelatedServices from './RelatedServices';
import AgencyFor from '@/sections/Agency/AgencyFor';
import AgencyServices from '@/sections/Agency/AgencyServices';
import HowItWorks from '@/sections/Agency/HowItWorks';
import AgencyWork from '@/sections/Agency/AgencyWork';
import AgencyFaq from '@/sections/Agency/AgencyFaq';
import RevealObserver from '@/sections/Agency/RevealObserver';
import JsonLd from '@/components/JsonLd/JsonLd';
import { pricing } from '@/data/siteData';
import { serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from '@/lib/seo';
import '@/sections/Agency/agency.css';

// A white-label service page (/white-label-…), built from the home page's
// sections in the same order and style. The copy is in data/servicePages.js.
export default function ServicePage({ page }) {
  const path = `/${page.slug}`;
  const offers = [
    { name: `Pilot (${pricing.pilot.credits} credits)`, price: pricing.pilot.price },
    ...page.systems.map((id) => pricing.systems.find((s) => s.id === id)),
  ];

  return (
    <div className="ah">
      <PageHero eyebrow={page.eyebrow} title={page.h1} lede={page.lede} />
      <AgencyFor statement={page.statement} sub={page.sub} />
      <AgencyServices
        id="included"
        groups={page.groups}
        eyebrow="What’s included"
        title={['Everything included,', 'under your brand']}
      />
      <ServicePoints title={page.pointsTitle} points={page.points} />
      <HowItWorks />
      <AgencyWork />
      <ServicePricing page={page} />
      <RelatedServices slugs={page.related} />
      <AgencyFaq items={page.faq} title={[page.name, 'questions']} />
      <RevealObserver />

      <JsonLd
        data={serviceJsonLd({
          name: page.h1.join(' '),
          serviceType: page.serviceType,
          description: page.description,
          path,
          offers,
        })}
      />
      <JsonLd data={faqJsonLd(page.faq)} />
      <JsonLd data={breadcrumbJsonLd([{ name: page.serviceType, path }])} />
    </div>
  );
}
