import Button from '@/components/Button/Button';
import ClientLogos from './ClientLogos';
import { pricing } from '@/data/siteData';

const tally = { formId: 'kd5KV1', layout: 'modal', width: 676, autoClose: 2500 };

export default function AgencyHero() {
  const { pilot } = pricing;

  return (
    <header className="ah-hero">
      <div className="container">
        {/* The H1 carries the search terms; the big line below is the visual headline */}
        <h1 className="ah-eyebrow">White-label team for UK &amp; US agencies</h1>
        <p className="ah-hero__title">
          Your extension to quality work<br className="ah-hero__break" /> without <em>increasing headcount</em>.
        </p>

        <div className="ah-hero__cta">
          <Button variant="brand" size="lg" tallyConfig={tally}>Start your pilot</Button>
          <p className="ah-hero__note">
            <strong>$0 upfront.</strong> Pay ${pilot.price.usd} only when you like the work.
          </p>
        </div>

        <ClientLogos />
      </div>
    </header>
  );
}
