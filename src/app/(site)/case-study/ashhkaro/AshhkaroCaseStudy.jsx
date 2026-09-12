import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button/Button';
import heroImg from '@/assets/ashhkaro4.webp';
import launchImg from '@/assets/ashhkaro.webp';
import './ashhkaro.css';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.ashhkaro.ashhkaro';

/* ---------- Line icons (24px grid, stroke only) ---------- */
const ICONS = {
    arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
    arrowDown: <path d="M12 5v14M6 13l6 6 6-6" />,
    arrowLeft: <path d="M19 12H5M11 18l-6-6 6-6" />,
    play: <path d="M6 4.2v15.6a.6.6 0 0 0 .9.52l13.2-7.8a.6.6 0 0 0 0-1.04L6.9 3.68A.6.6 0 0 0 6 4.2Z" />,
    home: <><path d="M3.5 10.5 12 3.5l8.5 7" /><path d="M5.5 9v11h13V9" /><path d="M10 20v-5.5h4V20" /></>,
    grid: <><rect x="4" y="4" width="6.5" height="6.5" rx="1.5" /><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5" /><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5" /><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5" /></>,
    search: <><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" /></>,
    store: <><path d="M4 9.5h16L18.5 4h-13L4 9.5Z" /><path d="M5.5 9.5V20h13V9.5" /><path d="M10 20v-5h4v5" /></>,
    calendar: <><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 10h16M9 3v4M15 3v4" /><path d="m9.5 15 2 2 3.5-3.5" /></>,
    building: <><path d="M5 20V9l7-5 7 5v11" /><path d="M3 20h18M10 20v-5h4v5" /><path d="M9.5 10.5h.01M14.5 10.5h.01" /></>,
    sliders: <><path d="M4 7h9M17 7h3M4 17h3M11 17h9" /><circle cx="15" cy="7" r="2" /><circle cx="9" cy="17" r="2" /></>,
    file: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h3" /></>,
    message: <path d="M5 5h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8l-4 3v-3H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />,
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
    { label: "Groflex's role", value: 'Product · UX/UI · Development · Deployment' },
    { label: 'Status', value: 'Phase 01 + 02 live', live: true },
    { label: 'Platform', value: 'Android' },
    { label: 'Market', value: 'Pakistan' },
];

const tensions = [
    { title: 'Breadth vs clarity', text: 'Many verticals under one roof, but the home screen can’t feel like a directory.' },
    { title: 'Buyers vs sellers', text: 'The same app serves people looking for things and the businesses listing them.' },
    { title: 'Now vs later', text: 'Two verticals are live and more are coming. The product has to feel complete today and ready to grow.' },
];

const phases = [
    { status: 'done', statusLabel: 'Built', num: 'Foundation', title: 'Shared core', text: 'Accounts, seller mode, search, listings, bookings and a design system every vertical plugs into.' },
    { status: 'live', statusLabel: 'Live', num: 'Phase 01', title: 'Business Discovery', text: 'Find local businesses and services, view their details, then book or get in touch.' },
    { status: 'live', statusLabel: 'Live', num: 'Phase 02', title: 'Properties', text: 'Buy, rent or book a place, with filters, detailed listings and direct contact.' },
    { status: 'dev', statusLabel: 'In development', num: 'Phase 03+', title: 'More verticals', text: 'Ride & Drive, Food & Groceries, Shop & Retail and more, all on the same core.' },
    { status: 'next', statusLabel: 'Next', num: 'Launch', title: 'Market launch', text: 'Marketing, user acquisition and expansion across Pakistan.' },
];

const flows = [
    {
        name: 'Finding a business',
        steps: [
            { icon: 'home', title: 'Home', note: 'Open the app' },
            { icon: 'grid', title: 'Browse', note: 'Pick a category' },
            { icon: 'search', title: 'Search', note: 'Narrow it down' },
            { icon: 'store', title: 'Business', note: 'See the details' },
            { icon: 'calendar', title: 'Book or call', note: 'Take action' },
        ],
    },
    {
        name: 'Finding a property',
        steps: [
            { icon: 'home', title: 'Home', note: 'Open the app' },
            { icon: 'building', title: 'Properties', note: 'Buy, rent or book' },
            { icon: 'sliders', title: 'Filter', note: 'Area, price, type' },
            { icon: 'file', title: 'Listing', note: 'Photos and details' },
            { icon: 'message', title: 'Contact', note: 'Reach the owner' },
        ],
    },
];

const principles = [
    { num: '01', title: 'One home, many doors', text: 'Every vertical starts from the same home screen, so a new vertical never means new navigation to learn.' },
    { num: '02', title: 'One pattern everywhere', text: 'Browse, details, action. Learn it once for businesses and properties already feel familiar.' },
    { num: '03', title: 'Show what’s coming', text: 'Upcoming verticals are visible but clearly marked “Live soon”, so people know what’s next without the clutter.' },
];

// Add screenshots by importing them and setting `src`, e.g.
// import bizHome from '@/assets/ashhkaro/business-home.webp';  →  { label: 'Home', src: bizHome }
const screenGroups = [
    {
        name: 'Business Discovery',
        phase: 'Phase 01 · Live',
        screens: [
            { label: 'Home', src: null },
            { label: 'Browse', src: null },
            { label: 'Business details', src: null },
            { label: 'Booking', src: null },
        ],
    },
    {
        name: 'Properties',
        phase: 'Phase 02 · Live',
        screens: [
            { label: 'Properties', src: null },
            { label: 'Filters', src: null },
            { label: 'Listing details', src: null },
            { label: 'Contact', src: null },
        ],
    },
];

const stack = [
    { layer: 'App', cells: [{ title: 'React Native', sub: 'Android app · buyer and seller modes' }] },
    {
        layer: 'Verticals',
        cells: [
            { title: 'Business Discovery', sub: 'Live', accent: true },
            { title: 'Properties', sub: 'Live', accent: true },
            { title: 'Next verticals', sub: 'In development', dashed: true },
        ],
    },
    { layer: 'Shared core', cells: [{ title: 'Accounts · Seller mode · Search · Listings · Bookings', sub: 'Built once, reused by every vertical' }] },
    {
        layer: 'Backend',
        cells: [
            { title: 'APIs', sub: 'Integrations' },
            { title: 'Supabase', sub: 'Auth · Database · Storage' },
            { title: 'Cloud', sub: 'Infrastructure' },
        ],
    },
    { layer: 'Delivery', cells: [{ title: 'Google Play', sub: 'Production release' }] },
];

const launchStats = [
    { value: '02', label: 'Product phases shipped' },
    { value: '08', label: 'Verticals planned' },
    { value: '01', label: 'Production Android app' },
    { value: 'Live', label: 'On Google Play', accent: true },
];

const roadmap = [
    { status: 'live', label: 'Live now', items: ['Business discovery', 'Properties'] },
    { status: 'dev', label: 'In development', items: ['Additional verticals', 'New features on the shared core'] },
    { status: 'next', label: 'Next', items: ['Marketing and user acquisition', 'Full market launch'] },
];

const scope = {
    ours: ['Product strategy', 'UX/UI design', 'Mobile development', 'Backend & APIs', 'Deployment'],
    theirs: ['Branding', 'Marketing & growth'],
};

/* ---------- Diagrams ---------- */
const ecoCenter = { x: 280, y: 236 };
const ecoNodes = [
    { label: 'Businesses', sub: 'Live · Phase 01', x: 200, y: 74, live: true, above: true },
    { label: 'Properties', sub: 'Live · Phase 02', x: 360, y: 74, live: true, above: true },
    { label: 'Shipping & Logistics', x: 474, y: 169, above: true },
    { label: 'Global Trade', x: 474, y: 303 },
    { label: 'Vehicle Marketplace', x: 360, y: 398 },
    { label: 'Shop & Retail', x: 200, y: 398 },
    { label: 'Food & Groceries', x: 86, y: 303 },
    { label: 'Ride & Drive', x: 86, y: 169, above: true },
];

function EcosystemDiagram() {
    return (
        <svg className="ak-eco" viewBox="0 0 560 450" role="img" aria-label="Ashhkaro ecosystem: Businesses and Properties are live; six more verticals are coming next, all connected to one shared core.">
            <ellipse cx={ecoCenter.x} cy={ecoCenter.y} rx="210" ry="175" className="ak-eco__orbit" />
            {ecoNodes.map((n) => (
                <line key={`l-${n.label}`} x1={ecoCenter.x} y1={ecoCenter.y} x2={n.x} y2={n.y} className={n.live ? 'ak-eco__link ak-eco__link--live' : 'ak-eco__link'} />
            ))}
            {ecoNodes.map((n) => (
                <g key={n.label}>
                    {n.live && <circle cx={n.x} cy={n.y} r="12" className="ak-eco__halo" />}
                    <circle cx={n.x} cy={n.y} r={n.live ? 6 : 4.5} className={n.live ? 'ak-eco__dot ak-eco__dot--live' : 'ak-eco__dot'} />
                    <text x={n.x} y={n.above ? n.y - (n.sub ? 38 : 20) : n.y + 30} textAnchor="middle" className={n.live ? 'ak-eco__label ak-eco__label--live' : 'ak-eco__label'}>
                        {n.label}
                    </text>
                    {n.sub && (
                        <text x={n.x} y={n.y - 21} textAnchor="middle" className="ak-eco__sub">{n.sub}</text>
                    )}
                </g>
            ))}
            <rect x={ecoCenter.x - 78} y={ecoCenter.y - 30} width="156" height="60" rx="16" className="ak-eco__core" />
            <text x={ecoCenter.x} y={ecoCenter.y - 3} textAnchor="middle" className="ak-eco__core-title">Ashhkaro</text>
            <text x={ecoCenter.x} y={ecoCenter.y + 16} textAnchor="middle" className="ak-eco__core-sub">One shared core</text>
        </svg>
    );
}

const fragments = ['Business directories', 'Property portals', 'Service apps', 'Marketplaces'];

function ConvergeDiagram() {
    const rows = [45, 115, 185, 255];
    const target = { x: 382, y: 150 };
    return (
        <svg className="ak-converge" viewBox="0 0 560 300" role="img" aria-label="Business directories, property portals, service apps and marketplaces converge into one app: Ashhkaro.">
            {rows.map((y) => (
                <path key={y} d={`M200 ${y} C 290 ${y}, 290 ${target.y}, ${target.x} ${target.y}`} className="ak-converge__path" />
            ))}
            {fragments.map((label, i) => (
                <g key={label}>
                    <rect x="1" y={rows[i] - 21} width="199" height="42" rx="21" className="ak-converge__pill" />
                    <text x="100" y={rows[i] + 5} textAnchor="middle" className="ak-converge__pill-text">{label}</text>
                </g>
            ))}
            <circle cx={target.x} cy={target.y} r="4" className="ak-converge__joint" />
            <rect x={target.x + 8} y={target.y - 42} width="168" height="84" rx="18" className="ak-converge__app" />
            <text x={target.x + 92} y={target.y - 4} textAnchor="middle" className="ak-converge__app-title">Ashhkaro</text>
            <text x={target.x + 92} y={target.y + 18} textAnchor="middle" className="ak-converge__app-sub">One app, one account</text>
        </svg>
    );
}

function Phone({ label, src }) {
    return (
        <figure className="ak-phone-fig">
            <div className="ak-phone">
                <div className="ak-phone__screen">
                    {src ? (
                        <Image src={src} alt={`Ashhkaro ${label} screen`} fill sizes="(max-width: 700px) 64vw, 280px" className="ak-phone__img" />
                    ) : (
                        <div className="ak-phone__placeholder">
                            <span>Screenshot</span>
                            <strong>{label}</strong>
                        </div>
                    )}
                    <span className="ak-phone__island" />
                </div>
            </div>
            <figcaption className="ak-phone-fig__caption">{label}</figcaption>
        </figure>
    );
}

/* ---------- Page ---------- */
export default function AshhkaroCaseStudy() {
    return (
        <article className="ak">
            {/* 01 — HERO */}
            <header className="ak-hero">
                <div className="ak-hero__media">
                    <Image src={heroImg} alt="The Ashhkaro app on an iPhone, lit in red" fill priority placeholder="blur" sizes="100vw" className="ak-hero__img" />
                </div>
                <div className="container ak-hero__inner">
                    <Link href="/" className="ak-back">
                        <Icon name="arrowLeft" size={16} /> Back to home
                    </Link>
                    <p className="ak-hero__kicker">Case study · Mobile product</p>
                    <h1 className="ak-hero__title">Ashhkaro</h1>
                    <p className="ak-hero__lede">Building the foundation of an all-in-one platform for Pakistan.</p>
                    <p className="ak-hero__desc">
                        One app for finding businesses, properties, services and, over time, much more. Groflex took
                        Ashhkaro from an ambitious idea to a working product: product thinking, UX, engineering and a
                        live release on Google Play.
                    </p>
                    <div className="ak-hero__actions">
                        <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="ak-btn ak-btn--red">
                            <Icon name="play" size={18} /> View on Google Play
                        </a>
                        <a href="#vision" className="ak-btn ak-btn--ghost">
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

            {/* 02 — VISION */}
            <section id="vision" className="ak-band ak-band--dark">
                <div className="container ak-split">
                    <div className="ak-split__text">
                        <Eyebrow num="02">The vision</Eyebrow>
                        <h2 className="ak-h2">The idea was bigger than an app.</h2>
                        <p className="ak-body">
                            Ashhkaro started with a simple, ambitious question: what if finding a business, renting a
                            home, booking a service, buying and selling all lived in one connected app?
                        </p>
                        <p className="ak-body">
                            The goal was never a single-purpose app. It was an ecosystem: many verticals, one account,
                            one familiar experience.
                        </p>
                        <blockquote className="ak-quote">
                            A more connected Pakistan, where everything you need is a few taps away.
                        </blockquote>
                    </div>
                    <div className="ak-split__visual">
                        <EcosystemDiagram />
                        <div className="ak-legend">
                            <span><i className="ak-legend__solid" /> Live now</span>
                            <span><i className="ak-legend__dashed" /> Coming next</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 03 — CHALLENGE */}
            <section className="ak-band ak-band--light">
                <div className="container">
                    <div className="ak-split ak-split--top">
                        <div className="ak-split__text">
                            <Eyebrow num="03">The challenge</Eyebrow>
                            <h2 className="ak-h2">One ecosystem. Many experiences.</h2>
                            <p className="ak-body">
                                Today, people move between business directories, property portals, service apps and
                                marketplaces, each with its own login, layout and habits. Ashhkaro set out to replace
                                all of that with a single app.
                            </p>
                        </div>
                        <div className="ak-split__visual">
                            <ConvergeDiagram />
                        </div>
                    </div>

                    <p className="ak-statement">
                        The real problem wasn&apos;t building features. It was this: <em>how do you make a platform this broad feel simple?</em>
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

            {/* 04 — APPROACH */}
            <section className="ak-band ak-band--light ak-band--flush-top">
                <div className="container">
                    <div className="ak-intro">
                        <Eyebrow num="04">Our approach</Eyebrow>
                        <h2 className="ak-h2">Build the foundation first.</h2>
                        <p className="ak-body">
                            Launching every vertical at once would have meant a thin version of everything. Instead, we
                            built a shared core with the parts every vertical needs, then shipped verticals on top of
                            it, one phase at a time. Each phase delivers real value, earns real feedback and makes the
                            next one faster to build.
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

            {/* 05 — UX */}
            <section className="ak-band ak-band--light ak-band--ruled">
                <div className="container">
                    <div className="ak-intro">
                        <Eyebrow num="05">UX</Eyebrow>
                        <h2 className="ak-h2">Designing complexity out.</h2>
                        <p className="ak-body">
                            We mapped the journeys people actually take and removed every step that didn&apos;t help them
                            decide. Both live verticals follow the same shape, so learning one teaches you the other.
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
                        <h2 className="ak-h2">Real screens. Real product.</h2>
                        <p className="ak-body">A closer look at the two experiences live in the Android app today.</p>
                    </div>

                    {screenGroups.map((group) => (
                        <div key={group.name} className="ak-gallery">
                            <div className="ak-gallery__head">
                                <h3 className="ak-h3">{group.name}</h3>
                                <span className="ak-gallery__phase"><span className="ak-live-dot" />{group.phase}</span>
                            </div>
                            <div className="ak-gallery__row">
                                {group.screens.map((s) => (
                                    <Phone key={s.label} label={s.label} src={s.src} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 07 — ENGINEERING */}
            <section className="ak-band ak-band--graphite">
                <div className="container ak-split ak-split--top">
                    <div className="ak-split__text ak-sticky">
                        <Eyebrow num="07">Engineering</Eyebrow>
                        <h2 className="ak-h2">From interface to production.</h2>
                        <p className="ak-body">
                            Groflex handled the full build: mobile app, backend, integrations and release.
                        </p>
                        <p className="ak-body">
                            The architecture mirrors the product strategy: verticals are modules on a shared core, so
                            each new one is an extension rather than a rebuild.
                        </p>
                    </div>
                    <div className="ak-stack" role="img" aria-label="Architecture: React Native Android app, built on live and upcoming verticals, a shared core, a backend of APIs, Supabase and cloud, delivered through Google Play.">
                        {stack.map((row) => (
                            <div key={row.layer} className="ak-stack__row">
                                <span className="ak-stack__layer">{row.layer}</span>
                                <div className="ak-stack__cells">
                                    {row.cells.map((c) => (
                                        <div key={c.title} className={`ak-stack__cell${c.accent ? ' is-accent' : ''}${c.dashed ? ' is-dashed' : ''}`}>
                                            <strong>{c.title}</strong>
                                            <span>{c.sub}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 08 — LAUNCH */}
            <section className="ak-launch">
                <div className="ak-launch__media">
                    <Image src={launchImg} alt="Ashhkaro home screen on a phone standing on a lit plinth" fill placeholder="blur" sizes="100vw" className="ak-launch__img" />
                </div>
                <div className="container ak-launch__inner">
                    <div className="ak-launch__text">
                        <Eyebrow num="08">Launch</Eyebrow>
                        <h2 className="ak-h2">From concept to Google Play.</h2>
                        <p className="ak-body">
                            The first two phases are live. People can find businesses and properties today, and the
                            foundation is in place for everything that comes next.
                        </p>
                        <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="ak-btn ak-btn--red">
                            <Icon name="play" size={18} /> View on Google Play
                        </a>
                    </div>
                    <dl className="ak-stats">
                        {launchStats.map((s) => (
                            <div key={s.label} className={s.accent ? 'is-accent' : undefined}>
                                <dt>{s.label}</dt>
                                <dd>{s.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            {/* 09 — WHERE WE ARE */}
            <section className="ak-band ak-band--light">
                <div className="container ak-split ak-split--top">
                    <div className="ak-split__text">
                        <Eyebrow num="09">Where we are</Eyebrow>
                        <h2 className="ak-h2">The product is live. The vision continues.</h2>
                        <p className="ak-body">
                            Ashhkaro&apos;s journey has just begun. With the foundation built and two verticals shipped,
                            the next phases expand the platform, followed by a full market launch.
                        </p>
                    </div>
                    <ol className="ak-roadmap">
                        {roadmap.map((r) => (
                            <li key={r.label} className={`ak-roadmap__col is-${r.status}`}>
                                <span className="ak-roadmap__label"><span className="ak-track__marker" />{r.label}</span>
                                <ul>
                                    {r.items.map((item) => <li key={item}>{item}</li>)}
                                </ul>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* 10 — GROFLEX */}
            <section className="ak-band ak-band--graphite ak-closing">
                <div className="container">
                    <div className="ak-split ak-split--top">
                        <div className="ak-split__text">
                            <Eyebrow num="10">Groflex</Eyebrow>
                            <h2 className="ak-h2">We build ambitious products.</h2>
                            <p className="ak-body">
                                Ashhkaro needed more than good-looking screens. It needed a team to take a broad idea,
                                give it structure, design it, engineer it and ship it. That&apos;s the work we do.
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
                                <h3 className="ak-scope__title">Handled by Ashhkaro</h3>
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
