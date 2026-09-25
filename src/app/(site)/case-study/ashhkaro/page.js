import AshhkaroCaseStudy from './AshhkaroCaseStudy';
import JsonLd from '@/components/JsonLd/JsonLd';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import heroImg from '@/assets/case-studies/ashhkaro/hero.webp';

const title = 'Ashhkaro — Groflex Case Study';
const description =
  'How Groflex took Ashhkaro, an all-in-one platform for Pakistan, from product vision to a live Android app on Google Play.';

export const metadata = pageMetadata({
  title,
  description,
  path: '/case-study/ashhkaro',
  images: [{ url: heroImg.src, width: heroImg.width, height: heroImg.height, alt: 'Ashhkaro app' }],
});

export default function AshhkaroRoute() {
  return (
    <>
      <AshhkaroCaseStudy />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Our Work', path: '/work' },
          { name: 'Ashhkaro', path: '/case-study/ashhkaro' },
        ])}
      />
    </>
  );
}
