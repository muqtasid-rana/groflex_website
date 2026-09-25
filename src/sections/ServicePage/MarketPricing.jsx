import Link from 'next/link';
import Button from '@/components/Button/Button';
import LineIcon from '@/components/LineIcon/LineIcon';
import { pricing, aOrAn, money } from '@/data/siteData';

const tally = { formId: 'kd5KV1', layout: 'modal', width: 676, autoClose: 2500 };

// The pilot and the monthly plans in the market's own currency
export default function MarketPricing({ currency }) {
  const { pilot, packs, plans, systems } = pricing;
  const zero = currency === 'gbp' ? '£0' : '$0';
  const perCredit = (p) => money({ usd: Math.round(p.price.usd / p.credits), gbp: Math.round(p.price.gbp / p.credits) }, currency);

  return (
    <section id="pricing" className="ah-section ah-pricing">
      <div className="container">
        <header className="ah-head" data-reveal="up">
          <p className="ah-eyebrow">Pricing</p>
          <h2 className="ah-head__title">
            Prices in <em>{currency === 'gbp' ? 'pounds' : 'dollars'}</em>
          </h2>
        </header>

        <div className="ah-pilot" data-reveal="up">
          <div>
            <h3 className="ah-pilot__title">
              Start with {aOrAn(pilot.credits)} {pilot.credits}-credit pilot. <em>{zero} upfront.</em>
            </h3>
            <p>Pay {money(pilot.price, currency)} only once you&apos;ve seen the work and liked it.</p>
          </div>
          <Button variant="brand" size="lg" tallyConfig={tally}>Start your pilot</Button>
        </div>

        <div className="ah-panel ah-panel--solo" data-reveal="up" style={{ '--d': '120ms' }}>
          <ul className="ah-plans">
            {plans.map((p) => (
              <li key={p.id} className={p.popular ? 'is-popular' : ''}>
                {p.popular && <span className="ah-plans__badge">Most popular</span>}
                <h4>{p.name}</h4>
                <p className="ah-rows__price">{money(p.price, currency)} <small>/ month</small></p>
                <p className="ah-plans__credits">
                  {p.credits} credits · {perCredit(p)} per credit
                </p>
                <ul className="ah-checks">
                  <li>Up to {p.rollover} credits roll over</li>
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
              </li>
            ))}
          </ul>
          <div className="ah-panel__foot">
            <p>
              Month to month. Credit packs from {money(packs[0].price, currency)}, fixed-price builds from{' '}
              {money(systems[0].price, currency)}.
            </p>
            <Button variant="brand" size="md" tallyConfig={tally}>Choose a plan</Button>
          </div>
        </div>

        <Link href="/pricing" className="ah-link ah-pricing__more">
          See full pricing <LineIcon name="arrowRight" size={18} />
        </Link>
      </div>
    </section>
  );
}
