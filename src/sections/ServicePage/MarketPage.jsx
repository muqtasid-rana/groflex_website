import PageHero from './PageHero';
import ServicePoints from './ServicePoints';
import MarketPricing from './MarketPricing';
import AgencyFor from '@/sections/Agency/AgencyFor';
import AgencyServices from '@/sections/Agency/AgencyServices';
import HowItWorks from '@/sections/Agency/HowItWorks';
import AgencyWork from '@/sections/Agency/AgencyWork';
import AgencyVsHiring from '@/sections/Agency/AgencyVsHiring';
import AgencyFaq from '@/sections/Agency/AgencyFaq';
import RevealObserver from '@/sections/Agency/RevealObserver';
import JsonLd from '@/components/JsonLd/JsonLd';
import { pricing } from '@/data/siteData';
import { serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from '@/lib/seo';
import '@/sections/Agency/agency.css';

// A country page (/white-label-agency-uk, -usa): the home page's sections,
// with prices in the market's currency. The copy is in data/servicePages.js.
export default function MarketPage({ page }) {
  const path = `/${page.slug}`;
  const { currency } = page;
  const market = currency === 'gbp' ? 'UK' : 'US';

  return (
    <div className="ah">
      <PageHero eyebrow={page.eyebrow} title={page.h1} lede={page.lede} currency={currency} />
      <AgencyFor statement={page.statement} sub={page.sub} />
      <ServicePoints eyebrow="Why agencies choose us" title={page.pointsTitle} points={page.points} />
      <AgencyServices />
      <HowItWorks currency={currency} />
      <AgencyWork />
      {page.showHiring && <AgencyVsHiring />}
      <MarketPricing currency={currency} />
      <AgencyFaq items={page.faq} title={[`Questions ${market} agencies`, 'ask us']} />
      <RevealObserver />

      <JsonLd
        data={serviceJsonLd({
          name: page.h1.join(' '),
          serviceType: 'White-label design, development and marketing',
          description: page.description,
          path,
          currency,
          countries: [currency === 'gbp' ? 'gb' : 'us'],
          offers: [
            { name: `Pilot (${pricing.pilot.credits} credits)`, price: pricing.pilot.price },
            ...pricing.plans.map((p) => ({ name: `${p.name} monthly plan`, price: p.price })),
          ],
        })}
      />
      <JsonLd data={faqJsonLd(page.faq)} />
      <JsonLd data={breadcrumbJsonLd([{ name: page.name, path }])} />
    </div>
  );
}
