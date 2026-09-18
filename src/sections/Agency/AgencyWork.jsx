import Link from 'next/link';
import FeaturedWork from '@/components/FeaturedWork/FeaturedWork';
import LineIcon from '@/components/LineIcon/LineIcon';
import { featuredWork } from '@/data/siteData';

export default function AgencyWork() {
  return (
    <section id="work" className="ah-section ah-work">
      <div className="container">
        <header className="ah-head ah-head--split" data-reveal="up">
          <div>
            <p className="ah-eyebrow">Case studies</p>
            <h2 className="ah-head__title">Work we&apos;ve <em>shipped</em></h2>
          </div>
          <Link href="/work" className="ah-link">
            See all work <LineIcon name="arrowRight" size={18} />
          </Link>
        </header>
        <div data-reveal="up" style={{ '--d': '120ms' }}>
          <FeaturedWork projects={featuredWork} />
        </div>
      </div>
    </section>
  );
}
