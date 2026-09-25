// Four numbered points in two columns, each under a pink rule, set in the
// type of the home page's process steps. `title` is [plain, pink].
export default function ServicePoints({ eyebrow = 'Working together', title, points }) {
  return (
    <section className="ah-section ah-points-section">
      <div className="container">
        <header className="ah-head" data-reveal="up">
          <p className="ah-eyebrow">{eyebrow}</p>
          <h2 className="ah-head__title">{title[0]} <em>{title[1]}</em></h2>
        </header>

        <ol className="ah-points">
          {points.map((p, i) => (
            <li key={p.title} className="ah-point" data-reveal="up" style={{ '--d': `${(i % 2) * 120}ms` }}>
              <span className="ah-step__num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="ah-point__title">{p.title}</h3>
              <p className="ah-step__desc">{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
