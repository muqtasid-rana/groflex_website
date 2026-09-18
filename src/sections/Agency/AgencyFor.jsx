export default function AgencyFor() {
  return (
    <section className="ah-for">
      {/* A band that is thick at both edges and tapers to a hairline in the centre */}
      <svg className="ah-divider" viewBox="0 0 1440 20" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M0 1 C400 2 560 8 720 8.2 C880 8 1040 2 1440 1 L1440 19 C1040 18 880 12 720 11.8 C560 12 400 18 0 19 Z" />
      </svg>
      <div className="container">
        <p className="ah-eyebrow">Who it&apos;s for</p>
        <p className="ah-for__statement">
          Groflex is a white-label team for <em>design, development and marketing</em> agencies.
        </p>
        <p className="ah-for__sub">
          We work under your brand, inside your tools, for your clients. They never know we exist.
        </p>
      </div>
    </section>
  );
}
