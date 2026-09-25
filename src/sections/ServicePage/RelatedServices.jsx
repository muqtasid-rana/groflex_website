import Link from 'next/link';
import LineIcon from '@/components/LineIcon/LineIcon';
import { servicePages } from '@/data/servicePages';

// Links to other service pages, in the home page's service-row style
export default function RelatedServices({ slugs, eyebrow = 'More services', title = ['Other white-label', 'services'] }) {
  const pages = slugs.map((slug) => servicePages.find((p) => p.slug === slug));

  return (
    <section className="ah-section ah-related-section">
      <div className="container">
        <header className="ah-head ah-head--split" data-reveal="up">
          <div>
            <p className="ah-eyebrow">{eyebrow}</p>
            <h2 className="ah-head__title">{title[0]} <em>{title[1]}</em></h2>
          </div>
          <Link href="/#services" className="ah-link">
            All services <LineIcon name="arrowRight" size={18} />
          </Link>
        </header>

        <ul className="ah-related">
          {pages.map((p, i) => (
            <li key={p.slug}>
              <Link href={`/${p.slug}`} className="ah-service" data-reveal="left" style={{ '--d': `${i * 60}ms` }}>
                <span className="ah-service__icon">
                  <LineIcon name={p.icon} size={24} />
                </span>
                <div>
                  <h3 className="ah-service__title">{p.serviceType}</h3>
                  <p className="ah-service__desc">{p.summary}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
