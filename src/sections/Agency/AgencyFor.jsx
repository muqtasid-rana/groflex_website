// The pink divider and a one-line statement under a hero. The service pages
// pass their own copy: `statement` is [plain, pink].
export default function AgencyFor({
  statement = ['Groflex is a white-label team for', 'design, development and marketing', 'agencies.'],
  sub = 'We work under your brand, inside your tools, for your clients. They never know we exist.',
}) {
  const [before, pink, after] = statement;

  return (
    <section className="ah-for">
      {/* A band that is thick at both edges and tapers to a hairline in the centre */}
      <svg className="ah-divider" viewBox="0 0 1440 20" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M0 0 C380 1 560 8.6 720 8.8 C880 8.6 1060 1 1440 0 L1440 20 C1060 19 880 11.4 720 11.2 C560 11.4 380 19 0 20 Z" />
      </svg>
      <div className="container">
        <p className="ah-for__statement" data-reveal="left">
          {before} <em>{pink}</em>{after && ` ${after}`}
        </p>
        <p className="ah-for__sub" data-reveal="left" style={{ '--d': '150ms' }}>
          {sub}
        </p>
      </div>
    </section>
  );
}
