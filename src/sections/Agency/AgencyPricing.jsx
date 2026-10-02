'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import Button from '@/components/Button/Button';
import LineIcon from '@/components/LineIcon/LineIcon';
import { pricing, aOrAn } from '@/data/siteData';

const tally = { formId: 'kd5KV1', layout: 'modal', width: 676, autoClose: 2500 };
const usd = (price) => `$${price.usd.toLocaleString('en-US')}`;

const tabs = [
  { id: 'systems', label: 'Systems & Apps', sub: 'from $2,500' },
  { id: 'packs', label: 'Credit Packs', sub: 'from $1,300' },
  { id: 'monthly', label: 'Monthly Plans', sub: 'from $2,400/mo' },
];

function SystemsPanel() {
  return (
    <>
      <ul className="ah-rows">
        {pricing.systems.map((s) => (
          <li key={s.id}>
            <div>
              <h4>{s.name}</h4>
              <p>{s.description}</p>
            </div>
            <span className="ah-rows__meta">{s.timeline} · {s.credits} cr</span>
            <span className="ah-rows__price"><small>from</small> {usd(s.price)}</span>
          </li>
        ))}
      </ul>
      <div className="ah-panel__foot">
        <p>Fixed quote within 48 hours. Billed 40 / 30 / 30, or paid with plan credits.</p>
        <Button variant="brand" size="md" tallyConfig={tally}>Get a fixed quote</Button>
      </div>
    </>
  );
}

// A short mix of design and dev work, from small tasks up to full builds
const pick = (list, labels) => labels.map((l) => list.find((m) => m.label === l));
const systemItem = (id) => {
  const s = pricing.systems.find((x) => x.id === id);
  // App scope varies a lot, so builds show a starting figure, not a fixed one
  return { label: s.name, credits: s.credits, from: true };
};
const creditExamples = [
  {
    title: 'Design',
    items: pick(pricing.creditMenu.Design, [
      'Social post or ad set (3 sizes)',
      'App screen design',
      'Web page design',
      'Brand identity kit',
    ]),
  },
  {
    title: 'Development',
    items: [
      ...pick(pricing.creditMenu.Development, ['Landing page, designed and built', '5-page website, designed and built']),
      systemItem('saas'),
      systemItem('mobile'),
    ],
  },
];

function PacksPanel() {
  return (
    <div className="ah-panel__split">
      <div>
        <ul className="ah-packs">
          {pricing.packs.map((p) => (
            <li key={p.credits}>
              <strong>{p.credits} credits</strong>
              <span className="ah-rows__price">{usd(p.price)}</span>
              <small>${Math.round(p.price.usd / p.credits)} per credit</small>
            </li>
          ))}
        </ul>
        <p className="ah-panel__note">No subscription. Credits stay valid for {pricing.packValidityDays} days.</p>
        <Button variant="brand" size="md" tallyConfig={tally}>Buy credits</Button>
      </div>
      <div>
        <p className="ah-panel__label">What a credit buys</p>
        {creditExamples.map((group) => (
          <div key={group.title} className="ah-menu__group">
            <p className="ah-menu__title">{group.title}</p>
            <ul className="ah-menu">
              {group.items.map((m) => (
                <li key={m.label}>
                  <span>{m.label}</span>
                  <strong>{m.from && <small>from</small>} {m.credits} cr</strong>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <p className="ah-panel__note">
          Apps are scoped first. You get a fixed credit quote within 48 hours, before any work starts.
        </p>
      </div>
    </div>
  );
}

function MonthlyPanel() {
  return (
    <>
      <ul className="ah-plans">
        {pricing.plans.map((p) => (
          <li key={p.id} className={p.popular ? 'is-popular' : ''}>
            {p.popular && <span className="ah-plans__badge">Most popular</span>}
            <h4>{p.name}</h4>
            <p className="ah-rows__price">{usd(p.price)} <small>/ month</small></p>
            <p className="ah-plans__credits">
              {p.credits} credits · ${Math.round(p.price.usd / p.credits)} per credit
            </p>
            <ul className="ah-checks">
              <li>Up to {p.rollover} credits roll over</li>
              {p.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </li>
        ))}
      </ul>
      <div className="ah-panel__foot">
        <p>Month to month. Pause or cancel anytime.</p>
        <Button variant="brand" size="md" tallyConfig={tally}>Choose a plan</Button>
      </div>
    </>
  );
}

const panels = { systems: SystemsPanel, packs: PacksPanel, monthly: MonthlyPanel };

export default function AgencyPricing() {
  const [active, setActive] = useState('systems');
  const tabRefs = useRef([]);
  const Panel = panels[active];
  const { pilot } = pricing;

  // Arrow keys move between tabs, per the WAI-ARIA tabs pattern
  const onKey = (e, i) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const next = (i + step + tabs.length) % tabs.length;
    setActive(tabs[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="pricing" className="ah-section ah-pricing">
      <div className="container">
        <header className="ah-head" data-reveal="up">
          <p className="ah-eyebrow">Pricing</p>
          <h2 className="ah-head__title">White-label <em>pricing</em></h2>
        </header>

        <div className="ah-pilot" data-reveal="up">
          <div>
            <h3 className="ah-pilot__title">
              Start with {aOrAn(pilot.credits)} {pilot.credits}-credit pilot. <em>$0 upfront.</em>
            </h3>
            <p>Pay {usd(pilot.price)} only once you&apos;ve seen the work and liked it.</p>
          </div>
          <Button variant="brand" size="lg" tallyConfig={tally}>Start your pilot</Button>
        </div>

        <div className="ah-tabs" data-reveal="up" style={{ '--d': '100ms' }} role="tablist" aria-label="Ways to work with us">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              ref={(el) => { tabRefs.current[i] = el; }}
              type="button"
              role="tab"
              id={`ah-tab-${t.id}`}
              aria-selected={active === t.id}
              aria-controls="ah-panel"
              tabIndex={active === t.id ? 0 : -1}
              className={`ah-tab ${active === t.id ? 'is-active' : ''}`}
              onClick={() => setActive(t.id)}
              onKeyDown={(e) => onKey(e, i)}
            >
              <span className="ah-tab__label">{t.label}</span>
              <span className="ah-tab__sub">{t.sub}</span>
            </button>
          ))}
        </div>
        <div className="ah-panel" data-reveal="up" style={{ '--d': '160ms' }} role="tabpanel" id="ah-panel" aria-labelledby={`ah-tab-${active}`}>
          <Panel />
        </div>

        <Link href="/pricing" className="ah-link ah-pricing__more">
          See full pricing <LineIcon name="arrowRight" size={18} />
        </Link>
      </div>
    </section>
  );
}
