import PricingContent from './PricingContent';
import './pricing.css';

const title = 'Pricing — Groflex';
const description =
  'White-label design and development for agencies: a pilot you only pay for once you like it, fixed-price systems and apps, credit packs and monthly plans.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/pricing' },
  openGraph: { title, description },
};

export default function PricingPage() {
  return (
    <div className="pricing">
      <PricingContent />
    </div>
  );
}
