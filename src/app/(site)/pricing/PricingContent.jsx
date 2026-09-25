'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { pricing, aOrAn } from '@/data/siteData';
import Button from '@/components/Button/Button';
import CreditMenu from './CreditMenu';
import CreditEstimator from './CreditEstimator';

const tally = { formId: 'kd5KV1', layout: 'modal', width: 676, autoClose: 2500 };

const formatters = {
  usd: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }),
  gbp: new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }),
};

const sections = [
  { id: 'pilot', label: 'Pilot' },
  { id: 'systems', label: 'Systems & Apps' },
  { id: 'packs', label: 'Credit Packs' },
  { id: 'monthly', label: 'Monthly Plans' },
  { id: 'faq', label: 'FAQ' },
];

const growth = pricing.plans.find((p) => p.popular);

// Highlights the mini-nav link for the section currently in view
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

const sectionIds = sections.map((s) => s.id);

export default function PricingContent() {
  const [currency, setCurrency] = useState('usd');
  const active = useActiveSection(sectionIds);
  const money = (price) => formatters[currency].format(price[currency]);
  // Growth's price per credit, used to cost the margin examples
  const growthRate = { usd: growth.price.usd / growth.credits, gbp: growth.price.gbp / growth.credits };

  const { pilot, systems, systemsIncluded, appCare, packs, packValidityDays, plans, dedicatedTeam } = pricing;

  return (
    <>
      <header className="pricing-hero">
        <div className="container">
          <h1 className="pricing-hero__title">White-Label Pricing for Agencies</h1>
          <p className="pricing-hero__lede">Design, development and marketing under your brand, for UK and US agencies.</p>
          <div className="pricing-currency" role="group" aria-label="Currency">
            {['usd', 'gbp'].map((c) => (
              <button
                key={c}
                type="button"
                className={currency === c ? 'is-active' : ''}
                aria-pressed={currency === c}
                onClick={() => setCurrency(c)}
              >
                {c.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      <nav className="pricing-subnav" aria-label="Pricing sections">
        <div className="container">
          <ul>
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className={active === s.id ? 'is-active' : ''} aria-current={active === s.id ? 'true' : undefined}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* 1. Pilot */}
      <section id="pilot" className="pricing-section pricing-section--dark">
        <div className="container">
          <div className="pricing-pilot">
            <div className="pricing-pilot__body">
              <span className="pricing-eyebrow pricing-eyebrow--light">Start here</span>
              <h2 className="pricing-pilot__title">Try us on one real project.</h2>
              <p className="pricing-pilot__text">
                {aOrAn(pilot.credits) === 'an' ? 'An' : 'A'} {pilot.credits}-credit pilot. <strong>No upfront payment.</strong> Only pay {money(pilot.price)} once
                you&apos;ve liked it.
              </p>
              <ul className="pricing-pilot__examples">
                {pilot.examples.map((e) => <li key={e}>{e}</li>)}
              </ul>
            </div>
            <div className="pricing-pilot__price">
              <span className="pricing-pilot__amount">{money(pilot.price)}</span>
              <span className="pricing-pilot__note">paid only after you approve</span>
              <Button variant="white" size="lg" tallyConfig={tally}>Start your pilot</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Systems & Apps */}
      <section id="systems" className="pricing-section">
        <div className="container">
          <div className="pricing-head">
            <span className="pricing-eyebrow">Fixed-price builds</span>
            <h2 className="pricing-head__title">Systems &amp; Apps</h2>
            <p className="pricing-head__text">
              Custom software your clients own. A fixed quote within 48 hours, billed in milestones.
            </p>
          </div>

          <div className="pricing-systems">
            {systems.map((s) => (
              <article key={s.id} className={`pricing-card ${s.popular ? 'pricing-card--popular' : ''}`}>
                {s.popular && <span className="pricing-badge">Most requested</span>}
                <h3 className="pricing-card__name">{s.name}</h3>
                <p className="pricing-card__price">
                  <small>from</small> {money(s.price)}
                </p>
                <p className="pricing-card__meta"><i className="fa-regular fa-clock" aria-hidden="true" /> {s.timeline}</p>
                <p className="pricing-card__text">{s.description}</p>
                {s.example ? (
                  <Link href={s.example.href} className="pricing-example">
                    <Image src={s.example.image} alt="" width={56} height={40} className="pricing-example__img" />
                    <span>
                      <small>See it built</small>
                      {s.example.name}
                    </span>
                    <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                  </Link>
                ) : (
                  <p className="pricing-example pricing-example--plain">Works as a pilot for bigger builds</p>
                )}
                <Button variant={s.popular ? 'primary' : 'secondary'} size="md" tallyConfig={tally} className="pricing-card__cta">
                  Get a fixed quote
                </Button>
              </article>
            ))}
          </div>

          <div className="pricing-systems__footer">
            <p><strong>Every build includes:</strong> {systemsIncluded.join(' · ')}</p>
            <p>
              <strong>After launch:</strong> App Care from {money(appCare.price)}/month for hosting, updates, fixes and
              small features.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Credit packs */}
      <section id="packs" className="pricing-section pricing-section--alt">
        <div className="container">
          <div className="pricing-head">
            <span className="pricing-eyebrow">Pay as you go</span>
            <h2 className="pricing-head__title">Credit Packs</h2>
            <p className="pricing-head__text">
              For design and development tasks. No subscription. Credits stay valid for {packValidityDays} days.
            </p>
          </div>

          <div className="pricing-packs">
            {packs.map((p) => (
              <article key={p.credits} className="pricing-card pricing-card--pack">
                <h3 className="pricing-card__name">{p.credits} credits</h3>
                <p className="pricing-card__price">{money(p.price)}</p>
                <p className="pricing-card__meta">{formatters[currency].format(p.price[currency] / p.credits)} per credit</p>
                <Button variant="secondary" size="md" tallyConfig={tally} className="pricing-card__cta">
                  Buy {p.credits} credits
                </Button>
              </article>
            ))}
          </div>

          <CreditMenu />
        </div>
      </section>

      {/* 4. Monthly plans */}
      <section id="monthly" className="pricing-section">
        <div className="container">
          <div className="pricing-head">
            <span className="pricing-eyebrow">Best value</span>
            <h2 className="pricing-head__title">Monthly Plans</h2>
            <p className="pricing-head__text">
              The lowest price per credit, a team that knows your accounts, and no lock-in.
            </p>
          </div>

          <div className="pricing-plans">
            {plans.map((p) => (
              <article key={p.id} className={`pricing-card ${p.popular ? 'pricing-card--popular' : ''}`}>
                {p.popular && <span className="pricing-badge">Most popular</span>}
                <h3 className="pricing-card__name">{p.name}</h3>
                <p className="pricing-card__price">
                  {money(p.price)} <small>/ month</small>
                </p>
                <p className="pricing-card__credits">
                  <strong>{p.credits} credits</strong>
                  <span>{formatters[currency].format(p.price[currency] / p.credits)} per credit</span>
                </p>
                <ul className="pricing-card__features">
                  <li>Up to {p.rollover} credits roll over</li>
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <Button variant={p.popular ? 'primary' : 'secondary'} size="md" tallyConfig={tally} className="pricing-card__cta">
                  Get {p.name}
                </Button>
              </article>
            ))}
          </div>

          <div className="pricing-dedicated">
            <div>
              <h3>Dedicated Team</h3>
              <p>Full-time designers, developers, QA and PMs working only on your accounts.</p>
            </div>
            <p className="pricing-dedicated__price">
              from {money(dedicatedTeam.perPerson)} <small>/ person / month</small>
            </p>
            <Button variant="secondary" size="md" tallyConfig={tally}>Talk to us</Button>
          </div>

          <CreditEstimator plans={plans} packs={packs} money={money} />

          <p className="pricing-note">Month to month. Pause or cancel anytime. Commit to 3 months and save 10%.</p>
        </div>
      </section>

      {/* 5. Margin */}
      <section className="pricing-section pricing-section--alt">
        <div className="container">
          <div className="pricing-head">
            <span className="pricing-eyebrow">Your margin</span>
            <h2 className="pricing-head__title">You set the price. You keep the difference.</h2>
          </div>
          <div className="pricing-margin">
            {pricing.margin.map((m) => {
              const costValue = m.systemId
                ? systems.find((s) => s.id === m.systemId).price[currency]
                : Math.round(m.credits * growthRate[currency]);
              const keep = m.sell[currency] - costValue;
              return (
                <article key={m.label} className="pricing-margin__card">
                  <h3>{m.label}</h3>
                  <dl>
                    <div><dt>You sell it for</dt><dd>{money(m.sell)}</dd></div>
                    <div>
                      <dt>It costs you with Groflex{m.credits ? ` (${m.credits} credits)` : ''}</dt>
                      <dd>{formatters[currency].format(costValue)}</dd>
                    </div>
                    <div className="pricing-margin__keep"><dt>You keep</dt><dd>{formatters[currency].format(keep)}</dd></div>
                  </dl>
                </article>
              );
            })}
          </div>
          <p className="pricing-note">Credit costs use the Growth plan rate. Resale prices are typical UK/US agency rates.</p>
        </div>
      </section>

      {/* 6. Included */}
      <section className="pricing-section">
        <div className="container">
          <div className="pricing-head">
            <h2 className="pricing-head__title">Included with everything</h2>
          </div>
          <div className="pricing-included">
            {pricing.included.map((item) => (
              <div key={item.title} className="pricing-included__item">
                <i className={item.icon} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. How it works */}
      <section className="pricing-section pricing-section--alt">
        <div className="container">
          <div className="pricing-head">
            <h2 className="pricing-head__title">How it works</h2>
          </div>
          <ol className="pricing-steps">
            {pricing.steps.map((s, i) => (
              <li key={s.title}>
                <span className="pricing-steps__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 8. FAQ */}
      <section id="faq" className="pricing-section">
        <div className="container pricing-faq">
          <div className="pricing-head">
            <h2 className="pricing-head__title">Questions</h2>
          </div>
          {pricing.faq.map((item) => (
            <details key={item.q} className="pricing-faq__item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="pricing-section pricing-section--dark pricing-final">
        <div className="container">
          <h2>Start with a pilot. Pay only if you like it.</h2>
          <div className="pricing-final__ctas">
            <Button variant="white" size="lg" tallyConfig={tally}>Start your pilot</Button>
            <Button variant="ghost" size="lg" tallyConfig={tally} className="pricing-final__call">Book a call</Button>
          </div>
        </div>
      </section>
    </>
  );
}
