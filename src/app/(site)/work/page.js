import { work } from '@/data/siteData';
import FeaturedWork from '@/components/FeaturedWork/FeaturedWork';
import WorkCard from '@/components/WorkCard/WorkCard';
import CTA from '@/sections/CTA/CTA';
import { pageMetadata } from '@/lib/seo';
import './work.css';

export const metadata = pageMetadata({
  title: 'Our Work — Groflex Case Studies',
  description:
    'Case studies from Groflex: SaaS platforms, mobile apps and websites we have designed, built and shipped, the same work we deliver white-label for agencies.',
  path: '/work',
  images: [{ url: work[0].image.src, width: work[0].image.width, height: work[0].image.height, alt: work[0].name }],
});

export default function WorkPage() {
  const featured = work.slice(0, 3);
  const more = work.slice(3);

  return (
    <>
      <header className="work-hero">
        <div className="container">
          <span className="work-hero__tag">Our Work</span>
          <h1 className="work-hero__title">Products we&apos;ve designed, built and shipped.</h1>
          <p className="work-hero__lede">
            From recruitment SaaS to healthcare platforms and mobile apps: a selection of the projects we&apos;ve
            taken from idea to launch.
          </p>
        </div>
      </header>

      <section className="work-page">
        <div className="container">
          <FeaturedWork projects={featured} priority />

          {more.length > 0 && (
            <>
              <h2 className="work-page__subhead">More projects</h2>
              <div className="work-page__grid">
                {more.map((project) => (
                  <WorkCard
                    key={project.id}
                    {...project}
                    sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 360px"
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}
