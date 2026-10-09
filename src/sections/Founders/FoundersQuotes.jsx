import Link from 'next/link';
import { quotes } from '@/data/foundersPage';

// Three quotes under pink rules, in the type of the service pages' points
export default function FoundersQuotes() {
  return (
    <section className="ah-section fd-quotes">
      <div className="container">
        <header className="ah-head" data-reveal="up">
          <p className="ah-eyebrow">What founders say</p>
          <h2 className="ah-head__title">Founders who <em>shipped with us</em></h2>
        </header>

        <ul className="fd-quotes__grid">
          {quotes.map((q, i) => (
            <li key={q.role} data-reveal="up" style={{ '--d': `${i * 120}ms` }}>
              <figure className="fd-quote">
                <blockquote>
                  <p>&ldquo;{q.quote}&rdquo;</p>
                </blockquote>
                <figcaption>
                  <Link href={q.href} className="ah-link">{q.role}</Link>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
