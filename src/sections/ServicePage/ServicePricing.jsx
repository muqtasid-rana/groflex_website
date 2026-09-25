import Link from 'next/link';
import Button from '@/components/Button/Button';
import LineIcon from '@/components/LineIcon/LineIcon';
import { pricing, aOrAn, money } from '@/data/siteData';
import { creditItem, creditRange } from '@/data/servicePages';

const tally = { formId: 'kd5KV1', layout: 'modal', width: 676, autoClose: 2500 };

// This service's prices, in the home page's pricing panel: what it costs in
// credits on the left, fixed-price builds (or credit packs) on the right
export default function ServicePricing({ page }) {
  const { pilot, packs, packValidityDays, plans } = pricing;
  const items = page.credits.map(creditItem);
  const systems = page.systems.map((id) => pricing.systems.find((s) => s.id === id));
  const range = creditRange();

  return (
    <section id="pricing" className="ah-section ah-pricing">
      <div className="container">
        <header className="ah-head" data-reveal="up">
          <p className="ah-eyebrow">Pricing</p>
          <h2 className="ah-head__title">{page.name} <em>pricing</em></h2>
        </header>

        <div className="ah-pilot" data-reveal="up">
          <div>
            <h3 className="ah-pilot__title">
              Start with {aOrAn(pilot.credits)} {pilot.credits}-credit pilot. <em>$0 upfront.</em>
            </h3>
            <p>Pay {money(pilot.price)} only once you&apos;ve seen the work and liked it.</p>
          </div>
          <Button variant="brand" size="lg" tallyConfig={tally}>Start your pilot</Button>
        </div>

        <div className="ah-panel ah-panel--solo" data-reveal="up" style={{ '--d': '120ms' }}>
          <div className="ah-panel__split">
            <div>
              <p className="ah-panel__label">Priced in credits</p>
              <ul className="ah-menu">
                {items.map((m) => (
                  <li key={m.label}>
                    <span>{m.label}</span>
                    <strong>{m.credits} cr</strong>
                  </li>
                ))}
              </ul>
              <p className="ah-panel__note">
                One credit costs {range.low}–{range.high}, depending on the pack or plan you choose.
              </p>
            </div>

            {systems.length > 0 ? (
              <div>
                <p className="ah-panel__label">Fixed-price builds</p>
                <ul className="ah-rows">
                  {systems.map((s) => (
                    <li key={s.id}>
                      <div>
                        <h4>{s.name}</h4>
                        <p>{s.description}</p>
                      </div>
                      <span className="ah-rows__meta">{s.timeline}</span>
                      <span className="ah-rows__price"><small>from</small> {money(s.price)}</span>
                    </li>
                  ))}
                </ul>
                <p className="ah-panel__note">Fixed quote within 48 hours. Billed 40 / 30 / 30 by milestone.</p>
                <Button variant="brand" size="md" tallyConfig={tally}>Get a fixed quote</Button>
              </div>
            ) : (
              <div>
                <p className="ah-panel__label">Buy credits</p>
                <ul className="ah-packs">
                  {packs.map((p) => (
                    <li key={p.credits}>
                      <strong>{p.credits} credits</strong>
                      <span className="ah-rows__price">{money(p.price)}</span>
                      <small>${Math.round(p.price.usd / p.credits)} per credit</small>
                    </li>
                  ))}
                </ul>
                <p className="ah-panel__note">
                  No subscription, valid for {packValidityDays} days. Or take a monthly plan from{' '}
                  {money(plans[0].price)} for {plans[0].credits} credits a month.
                </p>
                <Button variant="brand" size="md" tallyConfig={tally}>Buy credits</Button>
              </div>
            )}
          </div>
        </div>

        <Link href="/pricing" className="ah-link ah-pricing__more">
          See full pricing <LineIcon name="arrowRight" size={18} />
        </Link>
      </div>
    </section>
  );
}
