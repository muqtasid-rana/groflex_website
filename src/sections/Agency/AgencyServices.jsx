import LineIcon, { serviceIcons } from '@/components/LineIcon/LineIcon';
import { services } from '@/data/siteData';

const groups = [
  { key: 'design', title: 'Design' },
  { key: 'development', title: 'Development' },
  { key: 'growth', title: 'Marketing & Growth' },
];

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

export default function AgencyServices() {
  return (
    <section id="services" className="ah-section ah-section--raised ah-services">
      <div className="container">
        <header className="ah-head" data-reveal="up">
          <p className="ah-eyebrow">White-label services</p>
          <h2 className="ah-head__title">Everything your clients ask for, <em>under your brand</em></h2>
        </header>

        {/* One grid for all three columns, filled column by column, so each
            row lines up across the groups */}
        <div className="ah-services__grid">
          {groups.map((g, gi) => [
            <h3 key={g.key} className="ah-services__group-title" data-reveal="up">{g.title}</h3>,
            ...services[g.key].map((s, si) => (
              // In from the left, one after another, fast
              <div key={s.id} className="ah-service" data-reveal="left" style={{ '--d': `${(gi * 4 + si) * 50}ms` }}>
                <span className="ah-service__icon">
                  <LineIcon name={serviceIcons[s.id]} size={24} />
                </span>
                <div>
                  <h4 className="ah-service__title">{s.title}</h4>
                  <p className="ah-service__desc">{shortLines[s.id]}</p>
                </div>
              </div>
            )),
          ])}
        </div>
      </div>
    </section>
  );
}
