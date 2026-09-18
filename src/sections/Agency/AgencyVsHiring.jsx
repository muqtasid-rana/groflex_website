import { pricing } from '@/data/siteData';

// What each in-house hire costs a US agency, and how much of the month they're busy
const roles = [
  { title: 'Senior designer', salary: '~$85,000', loaded: '~$105,000', busy: 'about half the month' },
  { title: 'Full-stack developer', salary: '~$115,000', loaded: '~$140,000', busy: 'about half the month' },
  { title: 'QA', salary: '~$70,000', loaded: '~$87,000', busy: 'a few days a month' },
];

const rows = [
  { key: 'salary', label: 'US salary' },
  { key: 'loaded', label: 'With tax and benefits' },
  { key: 'busy', label: 'Actually busy', highlight: true },
];

const usd = (n) => `$${n.toLocaleString('en-US')}`;

export default function AgencyVsHiring() {
  const monthly = pricing.plans[0].price.usd;

  return (
    <section className="ah-section ah-hire">
      <div className="container">
        <header className="ah-head">
          <h2 className="ah-head__title">
            The three hires you <em>don&apos;t have to make.</em>
          </h2>
        </header>

        {/* Desktop: one table, roles across the top */}
        <table className="ah-hire__table">
          <thead>
            <tr>
              <td />
              {roles.map((r) => <th key={r.title} scope="col">{r.title}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.key} className={row.highlight ? 'is-highlight' : ''}>
                <th scope="row">{row.label}</th>
                {roles.map((r) => <td key={r.title}>{r[row.key]}</td>)}
              </tr>
            ))}
          </tbody>
        </table>

        {/* Phones: one card per role */}
        <ul className="ah-hire__cards">
          {roles.map((r) => (
            <li key={r.title} className="ah-hire__card">
              <h3>{r.title}</h3>
              <dl>
                {rows.map((row) => (
                  <div key={row.key} className={row.highlight ? 'is-highlight' : ''}>
                    <dt>{row.label}</dt>
                    <dd>{r[row.key]}</dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>

        <p className="ah-hire__close">
          That&apos;s roughly <strong>$330,000 a year</strong> in fixed cost for three people you can only keep busy
          half the time. Groflex starts at <em>{usd(monthly)} a month</em>, {usd(monthly * 12)} a year, and in a quiet
          month you scale down instead of making payroll.
        </p>
      </div>
    </section>
  );
}
