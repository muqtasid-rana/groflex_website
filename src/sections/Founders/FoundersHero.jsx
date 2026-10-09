import Button from '@/components/Button/Button';
import ClientLogos from '@/sections/Agency/ClientLogos';
import FoundersGallery from './FoundersGallery';
import { heroGallery } from '@/data/foundersPage';

const tally = { formId: 'kd5KV1', layout: 'modal', width: 676, autoClose: 2500 };

// The home hero's type and buttons, split in two: the pitch on the left and our
// work scrolling on the right. On phones the work runs in rows under the text.
export default function FoundersHero() {
  return (
    <header className="ah-hero fh-hero">
      <div className="container">
        <div className="fh-hero__grid">
          <div className="fh-hero__text">
            <p className="ah-eyebrow">For founders and startups</p>
            <h1 className="ah-hero__title">
              From idea to a live product, <em>without hiring a team</em>.
            </h1>
            <p className="ah-hero__lede">
              Design, web and app development for founders. A fixed price, a fixed timeline, and you own every
              line of code.
            </p>

            <div className="ah-hero__cta">
              <Button variant="brand" size="lg" tallyConfig={tally}>Book a free call</Button>
              <p className="ah-hero__note">
                <strong>Fixed quote in 48 hours.</strong> No hourly billing.
              </p>
            </div>
          </div>

          <FoundersGallery columns={heroGallery} />
        </div>

        <ClientLogos />
      </div>
    </header>
  );
}
