import PageHero from './PageHero';
import ServicePoints from './ServicePoints';
import MarketPricing from './MarketPricing';
import PartnerPricing from './PartnerPricing';
import WhatsAppFab from './WhatsAppFab';
import AgencyFor from '@/sections/Agency/AgencyFor';
import AgencyServices from '@/sections/Agency/AgencyServices';
import HowItWorks from '@/sections/Agency/HowItWorks';
import AgencyWork from '@/sections/Agency/AgencyWork';
import AgencyVsHiring from '@/sections/Agency/AgencyVsHiring';
import AgencyFaq from '@/sections/Agency/AgencyFaq';
import RevealObserver from '@/sections/Agency/RevealObserver';
import JsonLd from '@/components/JsonLd/JsonLd';
import { pricing } from '@/data/siteData';
import { partnerChats } from '@/data/partnerChats';
import { serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from '@/lib/seo';
import '@/sections/Agency/agency.css';

// A country page (/white-label-agency-uk, -usa, -pakistan): the home page's
// sections, with prices in the market's currency. Partner pages (Pakistan)
// swap the pilot and credit plans for their own two options, can put the
// process before the services, and talk on WhatsApp. The copy is in
// data/servicePages.js.
export default function MarketPage({ page }) {
  const path = `/${page.slug}`;
  const { currency = 'usd', partner } = page;
  const market = currency === 'gbp' ? 'UK' : 'US';
  const chat = partnerChats[page.slug];
  // A step's `chat` button opens the WhatsApp chat
  const steps = page.steps?.map((s) => (s.cta?.chat ? { ...s, cta: { label: s.cta.label, href: chat, whatsapp: true } } : s));
  const process = <HowItWorks currency={currency} steps={steps} title={page.howTitle} />;

  return (
    <div className="ah">
      <PageHero eyebrow={page.eyebrow} title={page.h1} lede={page.lede} currency={currency} cta={page.cta} ctaHref={chat} note={page.note} />
      <AgencyFor statement={page.statement} sub={page.sub} />
      <ServicePoints eyebrow="Why agencies choose us" title={page.pointsTitle} points={page.points} />
      {page.processFirst && process}
      <AgencyServices />
      {!page.processFirst && process}
      <AgencyWork />
      {page.showHiring && <AgencyVsHiring />}
      {partner
        ? <PartnerPricing options={page.options} foot={page.optionsFoot} talkHref={chat} />
        : <MarketPricing currency={currency} />}
      <AgencyFaq items={page.faq} chat={chat} title={page.faqTitle ?? [`Questions ${market} agencies`, 'ask us']} />
      <RevealObserver />
      {chat && <WhatsAppFab href={chat} />}

      <JsonLd
        data={serviceJsonLd({
          name: page.h1.join(' '),
          serviceType: 'White-label design, development and marketing',
          description: page.description,
          path,
          currency,
          countries: [page.country ?? (currency === 'gbp' ? 'gb' : 'us')],
          offers: partner ? [] : [
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
