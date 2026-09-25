import Image from 'next/image';
import Link from 'next/link';
import { clientLogos } from '@/data/siteData';

// One logo, linked when it has an href: case studies stay on the site, client
// sites open in a new tab. `decorative` copies (the marquee repeats) are skipped
// by screen readers and the keyboard.
function ClientLogo({ client, decorative }) {
  const img = client.Svg ? (
    <client.Svg className="ah-logos__img" />
  ) : (
    <Image src={client.logo} alt={decorative ? '' : client.name} className="ah-logos__img" sizes="200px" />
  );

  if (!client.href) return <span className="ah-logos__item">{img}</span>;

  const focus = decorative ? { tabIndex: -1 } : {};
  if (client.href.startsWith('/')) {
    return <Link href={client.href} className="ah-logos__item" {...focus}>{img}</Link>;
  }
  return (
    <a href={client.href} className="ah-logos__item" target="_blank" rel="noopener noreferrer" {...focus}>
      {img}
    </a>
  );
}

// The sliding row of client logos under a hero: on the home page and every service page
export default function ClientLogos() {
  return (
    <div className="ah-logos">
      <p className="ah-logos__caption">Trusted by teams building real products</p>
      {/* The same row four times, sliding right by one row's width and looping.
          Only the first copy is announced to screen readers. */}
      <div className="ah-logos__viewport">
        <div className="ah-logos__track">
          {Array.from({ length: 4 }, (_, copy) => (
            <ul key={copy} className="ah-logos__list" aria-hidden={copy > 0 ? 'true' : undefined}>
              {clientLogos.map((c) => (
                <li key={c.name} style={{ '--scale': c.scale ?? 1 }}>
                  <ClientLogo client={c} decorative={copy > 0} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
