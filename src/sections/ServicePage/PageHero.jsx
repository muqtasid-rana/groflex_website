import Button from '@/components/Button/Button';
import WhatsAppButton from '@/components/Button/WhatsAppButton';
import ClientLogos from '@/sections/Agency/ClientLogos';
import { pricing, money } from '@/data/siteData';

const tally = { formId: 'kd5KV1', layout: 'modal', width: 676, autoClose: 2500 };

// The home hero's layout for the service, market and about pages. Here the big
// headline is the H1 itself, since it carries the page's search term.
// `title` is [plain, pink]. `cta` and `note` ([bold, plain]) replace the pilot
// offer on pages that don't sell it, and `ctaHref` (a WhatsApp chat) replaces
// the Tally form.
export default function PageHero({ eyebrow, title, lede, currency = 'usd', cta = 'Start your pilot', ctaHref, note }) {
  const { pilot } = pricing;

  return (
    <header className="ah-hero">
      <div className="container">
        <p className="ah-eyebrow">{eyebrow}</p>
        <h1 className="ah-hero__title">
          {title[0]} <em>{title[1]}</em>
        </h1>
        {lede && <p className="ah-hero__lede">{lede}</p>}

        <div className="ah-hero__cta">
          {ctaHref ? (
            <WhatsAppButton size="lg" href={ctaHref}>{cta}</WhatsAppButton>
          ) : (
            <Button variant="brand" size="lg" tallyConfig={tally}>{cta}</Button>
          )}
          <p className="ah-hero__note">
            {note ? (
              <><strong>{note[0]}</strong> {note[1]}</>
            ) : (
              <><strong>{currency === 'gbp' ? '£0' : '$0'} upfront.</strong> Pay {money(pilot.price, currency)} only when you like the work.</>
            )}
          </p>
        </div>

        <ClientLogos />
      </div>
    </header>
  );
}
