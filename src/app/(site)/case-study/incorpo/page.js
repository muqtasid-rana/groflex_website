import IncorpoCaseStudy from './IncorpoCaseStudy';
import JsonLd from '@/components/JsonLd/JsonLd';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import heroImg from '@/assets/case-studies/incorpo/hero.webp';

const title = 'Incorpo — Groflex Case Study';
const description =
  'How Groflex designed and built Incorpo: AI hiring, employees, attendance, payroll, performance and training on one employee record.';

export const metadata = pageMetadata({
  title,
  description,
  path: '/case-study/incorpo',
  images: [{ url: heroImg.src, width: heroImg.width, height: heroImg.height, alt: 'Incorpo on a laptop and a phone' }],
});

export default function IncorpoRoute() {
  return (
    <>
      <IncorpoCaseStudy />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Our Work', path: '/work' },
          { name: 'Incorpo', path: '/case-study/incorpo' },
        ])}
      />
    </>
  );
}
