import LineIcon from '@/components/LineIcon/LineIcon';

const rows = [
  { them: 'Disappear halfway through a project', us: 'A dedicated PM who replies the same day' },
  { them: 'Quality changes from gig to gig', us: 'A senior team with QA on every deliverable' },
  { them: 'Miss the deadline you promised your client', us: 'Fixed turnaround you can promise with confidence' },
  { them: 'No NDA, and your client can find them', us: 'NDA signed, white-label, always under your brand' },
  { them: 'Pay upfront and hope for the best', us: 'Start with a pilot and pay only if you like it' },
];

export default function AgencyVsFreelancers() {
  return (
    <section className="ah-section ah-vs">
      <div className="container">
        <header className="ah-head">
          <h2 className="ah-head__title ah-vs__title">
            No more unreliable Fiverr and Upwork freelancers. <em>The Groflex team is here.</em>
          </h2>
        </header>

        {/* A tangled line that straightens out into a tick */}
        <figure className="ah-vs__art">
          <svg viewBox="0 0 800 200" fill="none" aria-hidden="true" focusable="false">
            <path
              pathLength="1"
              d="M40 100 C70 40 110 160 140 90 C160 40 90 60 120 120 C150 180 200 30 230 100 C250 150 190 150 210 90 C230 30 290 170 320 90 C335 50 300 70 330 110 C350 140 370 100 400 100 L700 100 A28 28 0 1 1 756 100 A28 28 0 1 1 700 100 L716 100 L726 110 L742 90"
            />
          </svg>
          <figcaption>
            <span>Freelancers</span>
            <span>Groflex</span>
          </figcaption>
        </figure>

        <div className="ah-vs__table" role="table" aria-label="Freelancers compared with Groflex">
          <div className="ah-vs__row ah-vs__row--head" role="row">
            <span role="columnheader">Freelancers</span>
            <span role="columnheader">Groflex team</span>
          </div>
          {rows.map((r) => (
            <div key={r.us} className="ah-vs__row" role="row">
              <span role="cell" className="ah-vs__them">
                <LineIcon name="close" size={18} strokeWidth={2} />
                {r.them}
              </span>
              <span role="cell" className="ah-vs__us">
                <LineIcon name="check" size={18} strokeWidth={2} />
                {r.us}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
