import Link from 'next/link';
import LineIcon, { serviceIcons } from '@/components/LineIcon/LineIcon';
import { services } from '@/data/siteData';

// One-line versions for agency buyers; the longer descriptions in siteData
// still serve the founders page and the footer.
const shortLines = {
  d1: 'Interfaces your clients’ users enjoy.',
  d2: 'Logos, brand systems and guidelines.',
  d3: 'Social, print and campaign assets.',
  d4: 'Web and app screens, ready to build.',
  v1: 'Fast sites in WordPress or Next.js.',
  v2: 'iOS and Android from one codebase.',
  v3: 'MVPs with login, billing and admin.',
  v4: 'Custom systems, dashboards and tools.',
  g1: 'Content calendars, posts and paid ads.',
  g2: 'Technical fixes and content that ranks.',
  g3: 'Workflows in Zapier, Make and n8n.',
  g4: 'One PM who keeps every job on time.',
};

// The home page's three columns, each service linking to its own page
const homeGroups = [
  { key: 'design', title: 'Design' },
  { key: 'development', title: 'Development' },
  { key: 'growth', title: 'Marketing & Growth' },
].map((g) => ({
  title: g.title,
  items: services[g.key].map((s) => ({ icon: serviceIcons[s.id], title: s.title, text: shortLines[s.id], href: s.href })),
}));

function ServiceRow({ item, delay }) {
  const body = (
    <>
      <span className="ah-service__icon">
        <LineIcon name={item.icon} size={24} />
      </span>
      <div>
        <h4 className="ah-service__title">{item.title}</h4>
        <p className="ah-service__desc">{item.text}</p>
      </div>
    </>
  );
  // In from the left, one after another, fast
  const props = { className: 'ah-service', 'data-reveal': 'left', style: { '--d': `${delay}ms` } };
  return item.href ? <Link href={item.href} {...props}>{body}</Link> : <div {...props}>{body}</div>;
}

// Three columns of four. The service pages pass their own `groups`;
// `title` is [plain, pink].
export default function AgencyServices({
  groups = homeGroups,
  eyebrow = 'White-label services',
  title = ['Everything your clients ask for,', 'under your brand'],
  id = 'services',
}) {
  return (
    <section id={id} className="ah-section ah-section--raised ah-services">
      <div className="container">
        <header className="ah-head" data-reveal="up">
          <p className="ah-eyebrow">{eyebrow}</p>
          <h2 className="ah-head__title">{title[0]} <em>{title[1]}</em></h2>
        </header>

        {/* One grid for all three columns, filled column by column, so each
            row lines up across the groups */}
        <div className="ah-services__grid">
          {groups.map((g, gi) => [
            <h3 key={g.title} className="ah-services__group-title" data-reveal="up">{g.title}</h3>,
            ...g.items.map((item, si) => (
              <ServiceRow key={item.title} item={item} delay={(gi * 4 + si) * 50} />
            )),
          ])}
        </div>
      </div>
    </section>
  );
}
