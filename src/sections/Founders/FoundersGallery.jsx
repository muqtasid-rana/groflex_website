import Image from 'next/image';
import Link from 'next/link';

// One picture of our work, linked to its case study. `decorative` copies (the
// loop repeats each list) are skipped by screen readers and the keyboard.
// Every picture loads straight away: lazy ones would sit blank as the moving
// track brings them in. Copies share a file, so each downloads once; all but
// the first few wait behind the rest of the page.
function Card({ item, decorative, first }) {
  return (
    <li>
      <Link
        href={item.href}
        className="fh-card"
        style={{ '--ratio': item.ratio, '--pos': item.pos ?? '50% 50%' }}
        tabIndex={decorative ? -1 : undefined}
      >
        <Image
          src={item.image}
          alt={decorative ? '' : item.alt}
          fill
          sizes="(max-width: 900px) 260px, 340px"
          loading="eager"
          fetchPriority={first ? 'auto' : 'low'}
        />
        <span className="fh-card__label" aria-hidden="true">{item.name}</span>
      </Link>
    </li>
  );
}

// Two columns of work scrolling in opposite directions; on phones they turn
// into two rows. Each column holds its list twice and moves by one list's
// length, so the loop is seamless. Hovering or focusing a card pauses it.
export default function FoundersGallery({ columns }) {
  return (
    <div className="fh-gallery">
      <div className="fh-gallery__viewport">
        {columns.map((items, ci) => (
          <div key={ci} className={`fh-col fh-col--${ci % 2 ? 'down' : 'up'}`}>
            <div className="fh-track">
              {[0, 1].map((copy) => (
                <ul key={copy} className="fh-list" aria-hidden={copy ? 'true' : undefined}>
                  {items.map((item, i) => (
                    <Card key={i} item={item} decorative={copy > 0} first={!copy && i < 3} />
                  ))}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
