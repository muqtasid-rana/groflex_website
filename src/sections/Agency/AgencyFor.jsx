export default function AgencyFor() {
  return (
    <section className="ah-for">
      {/* A band that is thick at both edges and tapers to a hairline in the centre */}
      <svg className="ah-divider" viewBox="0 0 1440 20" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M0 0 C380 1 560 8.6 720 8.8 C880 8.6 1060 1 1440 0 L1440 20 C1060 19 880 11.4 720 11.2 C560 11.4 380 19 0 20 Z" />
      </svg>
      <div className="container">
        <p className="ah-for__statement" data-reveal="left">
          Groflex is a white-label team for <em>design, development and marketing</em> agencies.
        </p>
        <p className="ah-for__sub" data-reveal="left" style={{ '--d': '150ms' }}>
          We work under your brand, inside your tools, for your clients. They never know we exist.
        </p>
      </div>
    </section>
  );
}
