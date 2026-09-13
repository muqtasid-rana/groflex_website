import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button/Button';
import Browser from '@/components/CaseStudy/Browser';
import heroImg from '@/assets/case-studies/slashcure/hero.jpg';
import findDoctorsImg from '@/assets/case-studies/slashcure/find-doctors.webp';
import doctorProfileImg from '@/assets/case-studies/slashcure/doctor-profile.webp';
import findHospitalsImg from '@/assets/case-studies/slashcure/find-hospitals.webp';
import hospitalPageImg from '@/assets/case-studies/slashcure/hospital-page.webp';
// Built on the Ashhkaro case-study system; slashcure.css re-themes it and adds the web-specific pieces
import '../ashhkaro/ashhkaro.css';
import './slashcure.css';

const SITE_URL = 'https://slashcure.com';

/* ---------- Line icons (24px grid, stroke only) ---------- */
const ICONS = {
    arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
    arrowDown: <path d="M12 5v14M6 13l6 6 6-6" />,
    arrowLeft: <path d="M19 12H5M11 18l-6-6 6-6" />,
    external: <><path d="M14 4h6v6" /><path d="M20 4l-9 9" /><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></>,
    qr: <><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><path d="M14 14h2v2h-2zM18 18h2v2h-2zM14 18v2M18 14h2" /></>,
    send: <><path d="M4 11.5 20 4l-6.5 16-2.5-6.5L4 11.5Z" /><path d="m11 13.5 3.5-3.5" /></>,
    key: <><circle cx="8" cy="15" r="4" /><path d="m11 12 8-8M16 7l2 2M14 9l2 2" /></>,
    clock: <><circle cx="12" cy="12" r="8" /><path d="M12 8v4.5l3 2" /></>,
    list: <><path d="M9 6h11M9 12h11M9 18h11" /><path d="M4.5 6h.01M4.5 12h.01M4.5 18h.01" /></>,
    user: <><circle cx="12" cy="8" r="3.5" /><path d="M5 20c.8-3.6 3.6-5.5 7-5.5s6.2 1.9 7 5.5" /></>,
    file: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h3" /></>,
    eye: <><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" /><circle cx="12" cy="12" r="3" /></>,
    check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
    minus: <path d="M6 12h12" />,
};

function Icon({ name, size = 20 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {ICONS[name]}
        </svg>
    );
}

function Eyebrow({ num, children }) {
    return (
        <p className="ak-eyebrow">
            <span className="ak-eyebrow__num">{num}</span>
            <span className="ak-eyebrow__rule" />
            {children}
        </p>
    );
}

/* ---------- Content ---------- */
const heroMeta = [
    { label: "Groflex's role", value: 'Product · UX/UI · Full-stack · Deployment' },
    { label: 'Status', value: 'Live at slashcure.com', live: true },
    { label: 'Platform', value: 'Web · 4 portals' },
    { label: 'Market', value: 'Pakistan' },
];

const tensions = [
    { title: 'Private vs findable', text: 'Medical records have to stay locked. Doctors and hospitals have to be easy to find. Same platform.' },
    { title: 'Live vs reliable', text: '“Is the doctor in today?” changes by the hour. A wrong answer sends a patient on a wasted trip.' },
    { title: 'Many roles, one truth', text: 'Patients, doctors, receptionists and admins look at the same schedule. It can never disagree with itself.' },
];

const phases = [
    { status: 'done', statusLabel: 'June', num: 'Phase 01', title: 'Health record', text: 'A lifetime patient record, a QR Health ID and consent-based doctor access.' },
    { status: 'done', statusLabel: 'July', num: 'Phase 02', title: 'Slashcure', text: 'The rebrand, verified doctor profiles, multi-clinic schedules and medico-legal certificates.' },
    { status: 'done', statusLabel: 'Early Aug', num: 'Phase 03', title: 'Public handles', text: 'Every doctor at slashcure.com/their-name, with branded QR posters for the clinic wall.' },
    { status: 'done', statusLabel: 'Mid Aug', num: 'Phase 04', title: 'Hospital portal', text: 'Live OPD status, departments, staff accounts and an Ask Receptionist line.' },
    { status: 'done', statusLabel: 'Late Aug', num: 'Phase 05', title: 'Doctor portal', text: '“I’m in clinic”, announcements, articles, reviews and analytics.' },
];

const flows = [
    {
        name: 'A doctor opens a record',
        steps: [
            { icon: 'qr', title: 'Scan', note: 'The patient’s QR' },
            { icon: 'send', title: 'Request', note: 'Ask for full access' },
            { icon: 'key', title: 'Approve', note: 'Patient shares a one-time code' },
            { icon: 'clock', title: 'Time-boxed', note: 'Access expires on its own' },
            { icon: 'list', title: 'Logged', note: 'Every view is recorded' },
        ],
    },
    {
        name: 'An emergency',
        steps: [
            { icon: 'qr', title: 'Scan', note: 'The emergency QR' },
            { icon: 'user', title: 'Identify', note: 'Name and role' },
            { icon: 'file', title: 'Reason', note: 'Why they need it' },
            { icon: 'eye', title: 'Essentials', note: 'Only the emergency summary' },
            { icon: 'list', title: 'Logged', note: 'Access is recorded' },
        ],
    },
];

const principles = [
    { num: '01', title: 'Locked by default', text: 'The database refuses every request from a browser. All data goes through one server that checks who is asking.' },
    { num: '02', title: 'The patient holds the key', text: 'Full access needs the patient’s one-time code, expires on its own and can be revoked instantly.' },
    { num: '03', title: 'Built for PDPB', text: 'Consent capture, data minimisation, immutable access logs and a PDF export of everything held, hosted in the nearest region.' },
];

const shotGroups = [
    {
        name: 'Finding a doctor',
        tag: 'Live · for patients',
        shots: [
            { img: findDoctorsImg, url: 'slashcure.com/doctors', caption: 'Find doctors, with who is in clinic today' },
            { img: doctorProfileImg, url: 'slashcure.com', caption: 'A verified doctor profile' },
        ],
    },
    {
        name: 'Finding a hospital',
        tag: 'Live · hospital portal',
        shots: [
            { img: findHospitalsImg, url: 'slashcure.com/hospitals', caption: 'Hospitals and clinics by city' },
            { img: hospitalPageImg, url: 'slashcure.com/alkhidmatmchcc', caption: 'A hospital page with live OPD updates' },
        ],
    },
];

const details = [
    { num: '01', title: 'A zero that doesn’t lie', text: 'Metrics we can’t count yet say “Not tracked yet”. A confident 0 would tell a doctor nobody wants them.' },
    { num: '02', title: 'QR codes that outlive a holiday', text: 'A doctor’s leave poster is a different sheet, never a different code. What’s printed on the wall keeps working.' },
    { num: '03', title: 'Presence that can’t go stale', text: '“I’m in clinic” expires the moment it’s read after the sitting ends, not when a background job gets round to it.' },
    { num: '04', title: 'Old links never die', text: 'Rename a handle and the old one forwards, so a printed code never lands on a different doctor.' },
    { num: '05', title: 'Reviews one side can’t erase', text: 'A doctor can ask to hide a review. Only an admin can approve it.' },
    { num: '06', title: 'One schedule, one answer', text: 'Every screen reads a doctor’s status from the same function, so a patient and a receptionist never see two different Tuesdays.' },
];

const stack = [
    { layer: 'Web', cells: [{ title: 'Server-rendered web app', sub: 'Fast on any phone, any connection' }] },
    {
        layer: 'Portals',
        cells: [
            { title: 'Patients', sub: 'Lifetime record', accent: true },
            { title: 'Doctors', sub: 'Profile · presence', accent: true },
            { title: 'Hospitals', sub: 'Live OPD', accent: true },
            { title: 'Super Admin', sub: 'Verification' },
        ],
    },
    { layer: 'Engine', cells: [{ title: 'Consent · QR · Timeline · Risk · PDF', sub: 'Built once, shared by every portal' }] },
    {
        layer: 'Data',
        cells: [
            { title: 'Firestore', sub: 'Server-only · Mumbai region' },
            { title: 'Cloudflare R2', sub: 'Private files' },
            { title: 'Firebase Auth', sub: 'Email · Google' },
        ],
    },
    { layer: 'Delivery', cells: [{ title: 'Vercel', sub: 'Production · slashcure.com' }] },
];

const stats = [
    { value: '44k', label: 'Lines of code' },
    { value: '335', label: 'Routes' },
    { value: '240', label: 'Automated tests' },
    { value: '12', label: 'Weeks, 194 commits', accent: true },
];

const scope = {
    ours: ['Product strategy', 'UX/UI design', 'Full-stack development', 'Security & compliance', 'Deployment & releases'],
    theirs: ['Brand & logo', 'Doctor & hospital onboarding', 'Marketing & growth'],
};

/* ---------- Diagram ---------- */
const netCenter = { x: 280, y: 225 };
const netNodes = [
    { label: 'Patients', sub: 'Lifetime record', x: 280, y: 62, above: true },
    { label: 'Doctors', sub: 'Profile · presence', x: 470, y: 225 },
    { label: 'Hospitals', sub: 'Live OPD', x: 280, y: 388 },
    { label: 'Super Admin', sub: 'Verifies doctors', x: 90, y: 225 },
];

function NetworkDiagram() {
    return (
        <svg className="ak-eco" viewBox="0 0 560 450" role="img" aria-label="Slashcure: patients, doctors, hospitals and the super admin all connected to one shared core, the patient's record and identity.">
            <ellipse cx={netCenter.x} cy={netCenter.y} rx="190" ry="163" className="ak-eco__orbit" />
            {netNodes.map((n) => (
                <line key={`l-${n.label}`} x1={netCenter.x} y1={netCenter.y} x2={n.x} y2={n.y} className="ak-eco__link ak-eco__link--live" />
            ))}
            {netNodes.map((n) => (
                <g key={n.label}>
                    <circle cx={n.x} cy={n.y} r="12" className="ak-eco__halo" />
                    <circle cx={n.x} cy={n.y} r="6" className="ak-eco__dot ak-eco__dot--live" />
                    <text x={n.x} y={n.above ? n.y - 38 : n.y + 32} textAnchor="middle" className="ak-eco__label ak-eco__label--live">{n.label}</text>
                    <text x={n.x} y={n.above ? n.y - 21 : n.y + 49} textAnchor="middle" className="ak-eco__sub">{n.sub}</text>
                </g>
            ))}
            <rect x={netCenter.x - 86} y={netCenter.y - 32} width="172" height="64" rx="16" className="ak-eco__core" />
            <text x={netCenter.x} y={netCenter.y - 3} textAnchor="middle" className="ak-eco__core-title">Slashcure</text>
            <text x={netCenter.x} y={netCenter.y + 17} textAnchor="middle" className="ak-eco__core-sub">One record · one identity</text>
        </svg>
    );
}

/* ---------- Page ---------- */
export default function SlashcureCaseStudy() {
    return (
        <article className="ak sc">
            {/* 01 — HERO */}
            <header className="ak-hero sc-hero">
                <div className="ak-hero__media">
                    <Image src={heroImg} alt="Slashcure open on a laptop: find verified doctors near you" fill priority placeholder="blur" sizes="100vw" className="ak-hero__img" />
                </div>
                <div className="container ak-hero__inner">
                    <Link href="/" className="ak-back">
                        <Icon name="arrowLeft" size={16} /> Back to home
                    </Link>
                    <p className="ak-hero__kicker">Case study · Healthcare platform</p>
                    <h1 className="ak-hero__title">Slashcure</h1>
                    <p className="ak-hero__lede">One platform for Pakistan&apos;s patients, doctors and hospitals.</p>
                    <p className="ak-hero__desc">
                        A lifetime health record that patients carry on a QR code, connected to verified doctors
                        and live hospital pages. Groflex designed, built and shipped the whole platform, and kept it
                        growing week after week.
                    </p>
                    <div className="ak-hero__actions">
                        <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="ak-btn ak-btn--red">
                            Visit slashcure.com <Icon name="external" size={16} />
                        </a>
                        <a href="#idea" className="ak-btn ak-btn--ghost">
                            Read the story <Icon name="arrowDown" size={16} />
                        </a>
                    </div>
                    <dl className="ak-hero__meta">
                        {heroMeta.map((m) => (
                            <div key={m.label}>
                                <dt>{m.label}</dt>
                                <dd>{m.live && <span className="ak-live-dot" />}{m.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </header>

            {/* 02 — THE IDEA */}
            <section id="idea" className="ak-band ak-band--dark">
                <div className="container ak-split">
                    <div className="ak-split__text">
                        <Eyebrow num="02">The idea</Eyebrow>
                        <h2 className="ak-h2">It started with the patient.</h2>
                        <p className="ak-body">
                            Slashcure began as a health record: a patient&apos;s history, organised once, kept for life
                            and carried on a QR code.
                        </p>
                        <p className="ak-body">
                            As it proved itself, the brief grew. Doctors got verified public profiles. Hospitals got
                            live OPD pages. The record became the core that connects them all.
                        </p>
                        <blockquote className="ak-quote">
                            Start with the patient. Everything else connects to that.
                        </blockquote>
                    </div>
                    <div className="ak-split__visual">
                        <NetworkDiagram />
                    </div>
                </div>
            </section>

            {/* 03 — CHALLENGE */}
            <section className="ak-band ak-band--light">
                <div className="container">
                    <div className="ak-intro">
                        <Eyebrow num="03">The challenge</Eyebrow>
                        <h2 className="ak-h2">Sensitive data. Live information.</h2>
                        <p className="ak-body">
                            A health platform holds the most private data a person has, and it also has to answer the
                            most practical question in healthcare: can I see this doctor today?
                        </p>
                    </div>

                    <p className="ak-statement sc-statement">
                        The hard part wasn&apos;t the features. It was this: <em>how do you make information this sensitive, and this live, something people can trust?</em>
                    </p>

                    <ul className="ak-columns">
                        {tensions.map((t) => (
                            <li key={t.title}>
                                <h3 className="ak-h4">{t.title}</h3>
                                <p className="ak-small">{t.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* 04 — HOW IT GREW */}
            <section className="ak-band ak-band--light ak-band--ruled">
                <div className="container">
                    <div className="ak-intro">
                        <Eyebrow num="04">How it grew</Eyebrow>
                        <h2 className="ak-h2">It grew with the client.</h2>
                        <p className="ak-body">
                            Slashcure was never specified once and handed over. Each phase went live, met real doctors
                            and patients, and shaped the next. Twelve weeks, 194 commits, one product that kept getting
                            bigger.
                        </p>
                    </div>

                    <ol className="ak-track">
                        {phases.map((p) => (
                            <li key={p.num} className={`ak-track__step is-${p.status}`}>
                                <span className="ak-track__marker" />
                                <span className="ak-track__status">{p.statusLabel}</span>
                                <span className="ak-track__num">{p.num}</span>
                                <h3 className="ak-h4">{p.title}</h3>
                                <p className="ak-small">{p.text}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* 05 — CONSENT */}
            <section className="ak-band ak-band--light ak-band--ruled">
                <div className="container">
                    <div className="ak-intro">
                        <Eyebrow num="05">Privacy</Eyebrow>
                        <h2 className="ak-h2">Private by default. Shared by consent.</h2>
                        <p className="ak-body">
                            We designed access around the patient. Nothing opens without their say, and nothing opens
                            without a record of who looked.
                        </p>
                    </div>

                    <div className="ak-flows">
                        {flows.map((flow) => (
                            <div key={flow.name} className="ak-flow">
                                <h3 className="ak-flow__name">{flow.name}</h3>
                                <ol className="ak-flow__steps">
                                    {flow.steps.map((s) => (
                                        <li key={s.title} className="ak-flow__step">
                                            <span className="ak-flow__icon"><Icon name={s.icon} size={24} /></span>
                                            <span className="ak-flow__title">{s.title}</span>
                                            <span className="ak-flow__note">{s.note}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        ))}
                    </div>

                    <ul className="ak-columns ak-columns--numbered">
                        {principles.map((p) => (
                            <li key={p.num}>
                                <span className="ak-columns__num">{p.num}</span>
                                <h3 className="ak-h4">{p.title}</h3>
                                <p className="ak-small">{p.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* 06 — PRODUCT */}
            <section className="ak-band ak-band--dark ak-product">
                <div className="container">
                    <div className="ak-intro">
                        <Eyebrow num="06">Product</Eyebrow>
                        <h2 className="ak-h2">Real screens. Live product.</h2>
                        <p className="ak-body">
                            The public side of slashcure.com, where patients find doctors and hospitals today. Doctor
                            photos are blurred for privacy.
                        </p>
                    </div>

                    {shotGroups.map((group) => (
                        <div key={group.name} className="ak-gallery">
                            <div className="ak-gallery__head">
                                <h3 className="ak-h3">{group.name}</h3>
                                <span className="ak-gallery__phase"><span className="ak-live-dot" />{group.tag}</span>
                            </div>
                            <div className="sc-shots">
                                {group.shots.map((s) => (
                                    <figure key={s.caption} className="sc-shot">
                                        <Browser url={s.url}>
                                            <Image src={s.img} alt={s.caption} placeholder="blur" sizes="(max-width: 760px) 100vw, 50vw" />
                                        </Browser>
                                        <figcaption className="ak-phone-fig__caption">{s.caption}</figcaption>
                                    </figure>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 07 — THE DETAILS */}
            <section className="ak-band ak-band--light">
                <div className="container">
                    <div className="ak-intro">
                        <Eyebrow num="07">The details</Eyebrow>
                        <h2 className="ak-h2">The details are the product.</h2>
                        <p className="ak-body">
                            Trust is built in small decisions nobody notices until they go wrong. A few we made along
                            the way.
                        </p>
                    </div>

                    <ul className="ak-columns ak-columns--numbered sc-details">
                        {details.map((d) => (
                            <li key={d.num}>
                                <span className="ak-columns__num">{d.num}</span>
                                <h3 className="ak-h4">{d.title}</h3>
                                <p className="ak-small">{d.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* 08 — ENGINEERING */}
            <section className="ak-band ak-band--graphite">
                <div className="container">
                    <div className="ak-split ak-split--top">
                        <div className="ak-split__text ak-sticky">
                            <Eyebrow num="08">Engineering</Eyebrow>
                            <h2 className="ak-h2">One gateway to the data.</h2>
                            <p className="ak-body">
                                Groflex built the whole platform: four portals, the consent engine, QR and PDF
                                generation, and the release pipeline.
                            </p>
                            <p className="ak-body">
                                The browser never talks to the database. Every request goes through one server that
                                checks who is asking, so a bug in a page can&apos;t become a leak.
                            </p>
                        </div>
                        <div className="ak-stack" role="img" aria-label="Architecture: a server-rendered web app serving four portals (patients, doctors, hospitals, super admin), built on a shared engine for consent, QR, timeline, risk and PDF, with data in server-only Firestore, Cloudflare R2 and Firebase Auth, deployed on Vercel.">
                            {stack.map((row) => (
                                <div key={row.layer} className="ak-stack__row">
                                    <span className="ak-stack__layer">{row.layer}</span>
                                    <div className={`ak-stack__cells${row.cells.length > 3 ? ' sc-stack-grid' : ''}`}>
                                        {row.cells.map((c) => (
                                            <div key={c.title} className={`ak-stack__cell${c.accent ? ' is-accent' : ''}`}>
                                                <strong>{c.title}</strong>
                                                <span>{c.sub}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <dl className="ak-stats">
                        {stats.map((s) => (
                            <div key={s.label} className={s.accent ? 'is-accent' : undefined}>
                                <dt>{s.label}</dt>
                                <dd>{s.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            {/* 09 — CLIENT */}
            <section className="ak-band ak-band--light">
                <div className="container">
                    <Eyebrow num="09">In their words</Eyebrow>
                    <figure className="sc-testimonial">
                        <blockquote className="sc-testimonial__quote">
                            <p>
                                &ldquo;Everything was built properly, exactly as discussed. We kept making changes along
                                the way, and every one was handled without a single issue. Way better than the
                                competitors.&rdquo;
                            </p>
                        </blockquote>
                        <figcaption className="sc-testimonial__author">
                            <strong>Faheem Kamboh</strong>
                            <span>Slashcure</span>
                        </figcaption>
                    </figure>
                </div>
            </section>

            {/* 10 — GROFLEX */}
            <section className="ak-band ak-band--graphite ak-closing">
                <div className="container">
                    <div className="ak-split ak-split--top">
                        <div className="ak-split__text">
                            <Eyebrow num="10">Groflex</Eyebrow>
                            <h2 className="ak-h2">We build products people trust.</h2>
                            <p className="ak-body">
                                Slashcure needed more than a website. It needed a team that could handle medical data
                                carefully, keep up with a vision that kept growing, and keep shipping without breaking
                                what was already live. That&apos;s the work we do.
                            </p>
                        </div>
                        <div className="ak-scope">
                            <div>
                                <h3 className="ak-scope__title">What we did</h3>
                                <ul>
                                    {scope.ours.map((s) => (
                                        <li key={s}><Icon name="check" size={18} />{s}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="ak-scope__theirs">
                                <h3 className="ak-scope__title">Handled by Slashcure</h3>
                                <ul>
                                    {scope.theirs.map((s) => (
                                        <li key={s}><Icon name="minus" size={18} />{s}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="ak-cta">
                        <h2 className="ak-cta__title">
                            Have an idea worth building?
                            <span>Let&apos;s build it.</span>
                        </h2>
                        <div className="ak-cta__actions">
                            <Button variant="primary" size="lg" tallyConfig={{ formId: 'kd5KV1', layout: 'modal', width: 676, autoClose: 2500 }}>
                                Book a call <Icon name="arrowRight" size={18} />
                            </Button>
                            <Link href="/gameplan" className="ak-btn ak-btn--ghost">
                                Get your free Gameplan
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
}
