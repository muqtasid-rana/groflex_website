import PricingContent from './PricingContent';
import JsonLd from '@/components/JsonLd/JsonLd';
import { pageMetadata, pricingJsonLd, breadcrumbJsonLd } from '@/lib/seo';
import './pricing.css';

export const metadata = pageMetadata({
  title: 'White-Label Agency Pricing — Groflex',
  description:
    'White-label design and development pricing for agencies: a $750 pilot you only pay for once you like it, fixed-price apps from $2,500, credit packs and monthly plans from $2,400.',
  path: '/pricing',
});

export default function PricingPage() {
  return (
    <div className="pricing">
      <PricingContent />
      <JsonLd data={pricingJsonLd()} />
      <JsonLd data={breadcrumbJsonLd([{ name: 'Pricing', path: '/pricing' }])} />
    </div>
  );
}
