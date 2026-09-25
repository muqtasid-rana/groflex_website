import Link from 'next/link';
import PageHero from '@/sections/ServicePage/PageHero';
import ServicePoints from '@/sections/ServicePage/ServicePoints';
import AgencyFor from '@/sections/Agency/AgencyFor';
import AgencyServices from '@/sections/Agency/AgencyServices';
import AgencyWork from '@/sections/Agency/AgencyWork';
import RevealObserver from '@/sections/Agency/RevealObserver';
import Button from '@/components/Button/Button';
import JsonLd from '@/components/JsonLd/JsonLd';
import { pricing, aOrAn, money } from '@/data/siteData';
import { marketPages } from '@/data/servicePages';
import { pageMetadata, aboutJsonLd, breadcrumbJsonLd } from '@/lib/seo';
import '@/sections/Agency/agency.css';

const tally = { formId: 'kd5KV1', layout: 'modal', width: 676, autoClose: 2500 };

export const metadata = pageMetadata({
  title: 'About Groflex — White-Label Team for UK & US Agencies',
  description:
    'Groflex is a white-label design, development and marketing team for UK and US agencies, founded by Muqtasid Rana. We work under your brand and NDA, inside your tools.',
  path: '/about',
});

const { pilot } = pricing;

// Plain facts, for visitors and for the search engines and AI assistants that
// describe Groflex to them
const facts = [
  { label: 'Founder', value: 'Muqtasid Rana' },
  { label: 'Based in', value: 'Pakistan' },
  {
    label: 'Works with',
    value: (
      <>
        Design, development and marketing agencies in the{' '}
        <Link href={`/${marketPages[0].slug}`}>UK</Link> and the <Link href={`/${marketPages[1].slug}`}>US</Link>
      </>
    ),
  },
  { label: 'Services', value: 'Web and app design, branding, web and app development, SEO, social media and automation' },
  { label: 'Hours', value: 'At least four working hours of overlap with the UK and US Eastern time' },
  { label: 'How we work', value: 'White-label, under NDA, inside your Slack, ClickUp, Jira or Asana' },
  { label: 'Start with', value: `${aOrAn(pilot.credits).replace(/^a/, 'A')} ${pilot.credits}-credit pilot: $0 upfront, ${money(pilot.price)} only if you like it` },
  { label: 'Website', value: 'groflex.co, not related to the grofleX invoicing software or other companies named Groflex' },
];

const principles = [
  {
    title: 'Your brand, never ours',
    text: 'Nothing we deliver carries the Groflex name. Your clients see your agency’s work, and we never contact them unless you ask us to.',
  },
  {
    title: 'The price before the work',
    text: 'Every task has a set credit cost and every build a fixed quote, agreed before we start. No hourly surprises.',
  },
  {
    title: 'Prove it first',
    text: 'Every agency can start with a pilot and pay only if they like the work. We would rather earn the relationship than lock you into one.',
  },
  {
    title: 'The same people every month',
    text: 'You work with the same designers and developers, who learn your standards, your tools and your clients.',
  },
];

export default function AboutPage() {
  return (
    <div className="ah">
      <PageHero
        eyebrow="About Groflex"
        title={['The white-label team', 'behind your agency']}
        lede="A design, development and marketing team that works for agencies, under their brand, for their clients."
      />
      <AgencyFor
        statement={['Founded by Muqtasid Rana, Groflex now works', 'only with agencies.']}
        sub="We started out building products for founders. Today every project we take on goes out under an agency’s name, to that agency’s clients."
      />

      <section className="ah-section ah-facts-section">
        <div className="container">
          <header className="ah-head" data-reveal="up">
            <p className="ah-eyebrow">At a glance</p>
            <h2 className="ah-head__title">Groflex <em>in short</em></h2>
          </header>
          <dl className="ah-facts" data-reveal="up" style={{ '--d': '120ms' }}>
            {facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ServicePoints eyebrow="What we believe" title={['How we', 'work']} points={principles} />
      <AgencyServices />
      <AgencyWork />

      <section className="ah-section ah-faq">
        <div className="container ah-faq__inner">
          <div id="contact" className="ah-faq__cta" data-reveal="up">
            <p>Want to see if we&apos;re a fit? Start with a pilot.</p>
            <Button variant="brand" size="md" tallyConfig={tally}>Start your pilot</Button>
          </div>
        </div>
      </section>
      <RevealObserver />

      <JsonLd data={aboutJsonLd()} />
      <JsonLd data={breadcrumbJsonLd([{ name: 'About', path: '/about' }])} />
    </div>
  );
}
