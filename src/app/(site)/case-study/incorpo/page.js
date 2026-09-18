import IncorpoCaseStudy from './IncorpoCaseStudy';
import heroImg from '@/assets/case-studies/incorpo/hero.webp';

const title = 'Incorpo — Groflex Case Study';
const description =
  'How Groflex designed and built Incorpo: AI hiring, employees, attendance, payroll, performance and training on one employee record.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/case-study/incorpo' },
  openGraph: {
    title,
    description,
    images: [{ url: heroImg.src, width: heroImg.width, height: heroImg.height, alt: 'Incorpo on a laptop and a phone' }],
  },
};

export default function IncorpoRoute() {
  return <IncorpoCaseStudy />;
}
