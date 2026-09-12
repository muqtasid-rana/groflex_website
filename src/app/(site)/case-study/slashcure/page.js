import SlashcureCaseStudy from './SlashcureCaseStudy';
import heroImg from '@/assets/slashcure/hero.jpg';

const title = 'Slashcure — Groflex Case Study';
const description =
  'How Groflex built Slashcure: a lifetime patient record, verified doctor profiles and live hospital pages on one secure platform for Pakistan.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/case-study/slashcure' },
  openGraph: {
    title,
    description,
    images: [{ url: heroImg.src, width: heroImg.width, height: heroImg.height, alt: 'The Slashcure homepage' }],
  },
};

export default function SlashcureRoute() {
  return <SlashcureCaseStudy />;
}
