import AshhkaroCaseStudy from './AshhkaroCaseStudy';
import heroImg from '@/assets/case-studies/ashhkaro/hero.webp';

const title = 'Ashhkaro — Groflex Case Study';
const description =
  'How Groflex took Ashhkaro, an all-in-one platform for Pakistan, from product vision to a live Android app on Google Play.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/case-study/ashhkaro' },
  openGraph: {
    title,
    description,
    images: [{ url: heroImg.src, width: heroImg.width, height: heroImg.height, alt: 'Ashhkaro app' }],
  },
};

export default function AshhkaroRoute() {
  return <AshhkaroCaseStudy />;
}
