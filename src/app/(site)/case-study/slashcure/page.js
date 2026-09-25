import SlashcureCaseStudy from './SlashcureCaseStudy';
import JsonLd from '@/components/JsonLd/JsonLd';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import heroImg from '@/assets/case-studies/slashcure/hero.webp';

const title = 'Slashcure — Groflex Case Study';
const description =
  'How Groflex built Slashcure: a lifetime patient record, verified doctor profiles and live hospital pages on one secure platform for Pakistan.';

export const metadata = pageMetadata({
  title,
  description,
  path: '/case-study/slashcure',
  images: [{ url: heroImg.src, width: heroImg.width, height: heroImg.height, alt: 'The Slashcure homepage' }],
});

export default function SlashcureRoute() {
  return (
    <>
      <SlashcureCaseStudy />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Our Work', path: '/work' },
          { name: 'Slashcure', path: '/case-study/slashcure' },
        ])}
      />
    </>
  );
}
