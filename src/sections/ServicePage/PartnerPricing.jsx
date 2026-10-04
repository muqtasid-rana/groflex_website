import Button from '@/components/Button/Button';
import WhatsAppButton from '@/components/Button/WhatsAppButton';

const tally = { formId: 'kd5KV1', layout: 'modal', width: 676, autoClose: 2500 };

// The partner pages' own pricing: two ways to earn, in the market page's plan
// cards. Not tied to the credit plans. A card's `note` is a line of text, or
// [plain, bold] for a worked example. `talkHref` is the WhatsApp chat
// behind "Let's talk".
export default function PartnerPricing({ options, foot, talkHref }) {
  return (
    <section id="pricing" className="ah-section ah-pricing">
      <div className="container">
        <header className="ah-head" data-reveal="up">
          <p className="ah-eyebrow">Two ways to earn</p>
          <h2 className="ah-head__title">
            Pick how you want to <em>grow</em>
          </h2>
        </header>

        <div className="ah-panel ah-panel--solo" data-reveal="up" style={{ '--d': '120ms' }}>
          <ul className="ah-plans ah-plans--two">
            {options.map((o) => (
              <li key={o.name} className={`ah-option ${o.popular ? 'is-popular' : ''}`}>
                <span className="ah-plans__badge">{o.badge}</span>
                <h4>{o.name}</h4>
                <p className="ah-rows__price">{o.price} <small>{o.per}</small></p>
                <p className="ah-plans__credits">{o.tagline}</p>
                <ul className="ah-checks">
                  {o.checks.map((c) => <li key={c}>{c}</li>)}
                </ul>
                <p className="ah-option__note">
                  {Array.isArray(o.note) ? <>{o.note[0]} <strong>{o.note[1]}</strong></> : o.note}
                </p>
                <Button variant="brand" size="md" tallyConfig={tally}>{o.cta}</Button>
              </li>
            ))}
          </ul>
          <div className="ah-panel__foot">
            <p>{foot}</p>
            <WhatsAppButton href={talkHref}>Let&apos;s talk</WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
