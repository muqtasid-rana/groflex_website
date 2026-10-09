import { compareRows } from '@/data/foundersPage';

const columns = [
  { key: 'them', label: 'A typical agency' },
  { key: 'us', label: 'Groflex' },
];

// The home page's hiring table, turned into a two-column comparison.
// Groflex's column is the one in pink.
export default function FoundersCompare() {
  return (
    <section className="ah-section ah-hire fd-compare">
      <div className="container">
        <header className="ah-head" data-reveal="up">
          <p className="ah-eyebrow">Why founders choose us</p>
          <h2 className="ah-head__title">
            Agency quality, <em>without agency overhead.</em>
          </h2>
        </header>

        {/* Desktop: one table */}
        <table className="ah-hire__table" data-reveal="up" style={{ '--d': '120ms' }}>
          <thead>
            <tr>
              <td />
              {columns.map((c) => (
                <th key={c.key} scope="col" className={c.key === 'us' ? 'is-us' : ''}>{c.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {compareRows.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                {columns.map((c) => (
                  <td key={c.key} className={c.key === 'us' ? 'is-us' : 'is-them'}>{row[c.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {/* Phones: one card per row */}
        <ul className="ah-hire__cards">
          {compareRows.map((row, i) => (
            <li key={row.label} className="ah-hire__card" data-reveal="up" style={{ '--d': `${Math.min(i, 3) * 90}ms` }}>
              <h3>{row.label}</h3>
              <dl>
                {columns.map((c) => (
                  <div key={c.key} className={c.key === 'us' ? 'is-highlight' : ''}>
                    <dt>{c.label}</dt>
                    <dd>{row[c.key]}</dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>

        <p className="ah-hire__close" data-reveal="up">
          Every build comes with <strong>a fixed quote, a fixed timeline</strong> and <em>full ownership of the code</em>.
        </p>
      </div>
    </section>
  );
}
