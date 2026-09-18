import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button/Button';
import Browser from '@/components/CaseStudy/Browser';
import LoopVideo from '@/components/CaseStudy/LoopVideo';
import heroImg from '@/assets/case-studies/incorpo/hero.webp';
import jobImg from '@/assets/case-studies/incorpo/job.webp';
import collectImg from '@/assets/case-studies/incorpo/collect.webp';
import rankingsImg from '@/assets/case-studies/incorpo/rankings.webp';
import emailImg from '@/assets/case-studies/incorpo/email.webp';
import ownerDashboardImg from '@/assets/case-studies/incorpo/owner-dashboard.webp';
import stepWorkspaceImg from '@/assets/case-studies/incorpo/step-workspace.webp';
import stepAppointHrImg from '@/assets/case-studies/incorpo/step-appoint-hr.webp';
import stepDepartmentsImg from '@/assets/case-studies/incorpo/step-departments.webp';
import stepRunTheDayImg from '@/assets/case-studies/incorpo/step-run-the-day.webp';
// Built on the Ashhkaro case-study system; incorpo.css re-themes it in Incorpo's blue
import '../ashhkaro/ashhkaro.css';
import './incorpo.css';

const SITE_URL = 'https://incorpohrms.com';
const VIDEO_DIR = '/case-studies/incorpo';

/* ---------- Line icons (24px grid, stroke only) ---------- */
const ICONS = {
    arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
    arrowDown: <path d="M12 5v14M6 13l6 6 6-6" />,
    arrowLeft: <path d="M19 12H5M11 18l-6-6 6-6" />,
    external: <><path d="M14 4h6v6" /><path d="M20 4l-9 9" /><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></>,
    pen: <><path d="M4 20h4L19 9l-4-4L4 16v4Z" /><path d="m13.5 6.5 4 4" /></>,
    upload: <><path d="M12 15V4M7 9l5-5 5 5" /><path d="M5 15v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4" /></>,
    bars: <path d="M5 20V10M12 20V4M19 20v-7" />,
    mic: <><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" /></>,
    userPlus: <><circle cx="10" cy="8" r="3.5" /><path d="M3.5 20c.8-3.6 3.2-5.5 6.5-5.5 1.3 0 2.5.3 3.5.9" /><path d="M18 14v6M15 17h6" /></>,
    check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
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
    { label: "Groflex's role", value: 'Product · UX/UI · AI · Full-stack' },
    { label: 'Status', value: 'Live · early access', live: true },
    { label: 'Platform', value: 'Web · 6 modules' },
    { label: 'Market', value: 'Pakistan-first' },
];

const tools = ['Applicant tracking', 'Attendance sheets', 'Payroll software', 'Training LMS'];

const tensions = [
    { title: 'Depth vs simplicity', text: 'Payroll alone needs sixteen screens. The product still has to feel light on the first day.' },
    { title: 'Suite vs single module', text: 'Some buyers want everything, some want one tool. Both need the same workspace underneath.' },
    { title: 'Automation vs trust', text: 'AI can read and rank a whole pile of CVs, but a person has to understand every score and make the call.' },
];

const hiringFlow = [
    { icon: 'pen', title: 'Write the job', note: 'AI tightens the description' },
    { icon: 'upload', title: 'Collect CVs', note: 'Upload a batch or share a link' },
    { icon: 'bars', title: 'Rank', note: 'Every CV scored against the job' },
    { icon: 'mic', title: 'Interview', note: 'An AI voice call in the browser' },
    { icon: 'userPlus', title: 'Hire', note: 'Offer letter, then add to company' },
];

const hiringShots = [
    { img: jobImg, url: 'incorpohrms.com/job-description', caption: 'Write the job, with AI to sharpen it' },
    { img: collectImg, url: 'incorpohrms.com/org/recruitment', caption: 'Upload the CVs, or share a link and collect them' },
    { img: rankingsImg, url: 'incorpohrms.com/job/results', caption: 'Every candidate ranked against the job' },
    { img: emailImg, url: 'incorpohrms.com/job/results', caption: 'Invite, reject or follow up from templates' },
];

const modules = [
    { file: 'recruitment', name: 'Recruitment', note: 'Jobs, CVs and AI rankings', path: 'org/recruitment' },
    { file: 'employees', name: 'Employees & Departments', note: 'Users, roles and the org chart', path: 'org/employees' },
    { file: 'attendance', name: 'Attendance', note: 'The daily register, leave and corrections', path: 'org/attendance' },
    { file: 'payroll', name: 'Payroll', note: 'Salaries, monthly runs and payslips', path: 'org/payroll' },
    { file: 'training', name: 'Training', note: 'Courses, learning paths and skill gaps', path: 'org/training' },
    { file: 'performance', name: 'Performance', note: 'Review cycles and KPI scores', path: 'org/performance' },
];

const setupSteps = [
    { img: stepWorkspaceImg, num: '01', title: 'Set up the company', text: 'One workspace for hiring, attendance, performance and payroll.' },
    { img: stepAppointHrImg, num: '02', title: 'Appoint HR', text: 'Invite the people who will run the company day to day.' },
    { img: stepDepartmentsImg, num: '03', title: 'Build departments', text: 'Engineering, Sales, Operations, each with a head who manages it.' },
    { img: stepRunTheDayImg, num: '04', title: 'Run the day', text: 'Attendance, approvals and payroll from a single dashboard.' },
];

const details = [
    { num: '01', title: 'Interviews that just work', text: 'Phone calls to Pakistani numbers were carrier-blocked, so the phone leg was cut entirely. Candidates click a link and talk to the AI in their browser. Nothing to book, nothing to dial.' },
    { num: '02', title: 'An assistant that can’t oversell', text: 'The chat on the landing page may only claim features on a written list, and it is rate-limited so it can never become a stranger’s free AI key.' },
    { num: '03', title: 'Sent means sent', text: 'The email provider reports refusals quietly. Every refusal is now loud, so a recruiter is never told an email went out when it didn’t.' },
    { num: '04', title: 'Your brand, still readable', text: 'A company can lift its colours straight off its logo. If white text stops being readable on that colour, the buttons switch to dark ink on their own.' },
    { num: '05', title: 'A company of one', text: 'Someone who buys a single module gets the same workspace a full company does, so growing into the suite needs no migration.' },
    { num: '06', title: 'Everyone sees their slice', text: 'Seven roles, from owner to employee. A payroll manager can run payroll without also getting people, documents or performance.' },
];

const stack = [
    { layer: 'Web', cells: [{ title: 'Next.js 16', sub: 'Static export on Firebase Hosting' }] },
    {
        layer: 'Modules',
        grid: true,
        cells: [
            { title: 'Recruitment', sub: 'AI hiring', accent: true },
            { title: 'People', sub: 'Roles · org chart', accent: true },
            { title: 'Attendance', sub: 'Register · leave', accent: true },
            { title: 'Payroll', sub: 'Runs · payslips', accent: true },
            { title: 'Performance', sub: 'Review cycles', accent: true },
            { title: 'Training', sub: 'Courses · skills', accent: true },
        ],
    },
    {
        layer: 'Backend',
        cells: [
            { title: 'Cloud Functions', sub: '80 functions · Node 22' },
            { title: 'Firestore', sub: 'Locked by security rules' },
            { title: 'Firebase Auth', sub: 'Seven roles' },
        ],
    },
    {
        layer: 'AI',
        cells: [
            { title: 'Gemini 2.5 Flash', sub: 'Reads and scores CVs' },
            { title: 'Retell', sub: 'Voice interviews' },
        ],
    },
    {
        layer: 'Services',
        cells: [
            { title: 'Resend', sub: 'Email' },
            { title: 'Lemon Squeezy', sub: 'Billing' },
        ],
    },
];

const stats = [
    { value: '110k', label: 'Lines of code' },
    { value: '102', label: 'Routes' },
    { value: '80', label: 'Cloud functions' },
    { value: '6', label: 'Modules, one record', accent: true },
];

const scope = {
    product: ['Product strategy', 'UX/UI design', 'Design system & per-company branding'],
    engineering: ['AI CV ranking & voice interviews', 'Full-stack development', 'Billing, admin & deployment'],
};

/* ---------- Diagrams ---------- */
function ConvergeDiagram() {
    const rows = [45, 115, 185, 255];
    const target = { x: 382, y: 150 };
    return (
        <svg className="ak-converge" viewBox="0 0 560 300" role="img" aria-label="Applicant tracking, attendance sheets, payroll software and a training LMS converge into one product: Incorpo.">
            {rows.map((y) => (
                <path key={y} d={`M200 ${y} C 290 ${y}, 290 ${target.y}, ${target.x} ${target.y}`} className="ak-converge__path" />
            ))}
            {tools.map((label, i) => (
                <g key={label}>
                    <rect x="1" y={rows[i] - 21} width="199" height="42" rx="21" className="ak-converge__pill" />
                    <text x="100" y={rows[i] + 5} textAnchor="middle" className="ak-converge__pill-text">{label}</text>
                </g>
            ))}
            <circle cx={target.x} cy={target.y} r="4" className="ak-converge__joint" />
            <rect x={target.x + 8} y={target.y - 42} width="168" height="84" rx="18" className="ak-converge__app" />
            <text x={target.x + 92} y={target.y - 4} textAnchor="middle" className="ak-converge__app-title">Incorpo</text>
            <text x={target.x + 92} y={target.y + 18} textAnchor="middle" className="ak-converge__app-sub">One record, one login</text>
        </svg>
    );
}

const spineCenter = { x: 280, y: 225 };
const spineNodes = [
    { label: 'Recruitment', sub: 'AI ranking · interviews', angle: -90 },
    { label: 'Employees', sub: 'Roles · org chart', angle: -30 },
    { label: 'Attendance', sub: 'Register · leave', angle: 30 },
    { label: 'Payroll', sub: 'Runs · payslips', angle: 90 },
    { label: 'Performance', sub: 'Reviews · KPIs', angle: 150 },
    { label: 'Training', sub: 'Courses · skills', angle: 210 },
].map((n) => {
    const rad = (n.angle * Math.PI) / 180;
    return { ...n, x: Math.round(spineCenter.x + 200 * Math.cos(rad)), y: Math.round(spineCenter.y + 165 * Math.sin(rad)), above: Math.sin(rad) < 0 };
});

function SpineDiagram() {
    return (
        <svg className="ak-eco" viewBox="0 0 560 450" role="img" aria-label="Incorpo: recruitment, employees, attendance, payroll, performance and training, all connected to one employee record.">
            <ellipse cx={spineCenter.x} cy={spineCenter.y} rx="200" ry="165" className="ak-eco__orbit" />
            {spineNodes.map((n) => (
                <line key={`l-${n.label}`} x1={spineCenter.x} y1={spineCenter.y} x2={n.x} y2={n.y} className="ak-eco__link ak-eco__link--live" />
            ))}
            {spineNodes.map((n) => (
                <g key={n.label}>
                    <circle cx={n.x} cy={n.y} r="12" className="ak-eco__halo" />
                    <circle cx={n.x} cy={n.y} r="6" className="ak-eco__dot ak-eco__dot--live" />
                    <text x={n.x} y={n.above ? n.y - 38 : n.y + 32} textAnchor="middle" className="ak-eco__label ak-eco__label--live">{n.label}</text>
                    <text x={n.x} y={n.above ? n.y - 21 : n.y + 49} textAnchor="middle" className="ak-eco__sub">{n.sub}</text>
                </g>
            ))}
            <rect x={spineCenter.x - 92} y={spineCenter.y - 32} width="184" height="64" rx="16" className="ak-eco__core" />
            <text x={spineCenter.x} y={spineCenter.y - 3} textAnchor="middle" className="ak-eco__core-title">Incorpo</text>
            <text x={spineCenter.x} y={spineCenter.y + 17} textAnchor="middle" className="ak-eco__core-sub">One employee record</text>
        </svg>
    );
}

// The training ↔ performance loop, clockwise from the top
const loop = { cx: 320, cy: 230, r: 140 };
const loopSteps = ['A review scores a skill', 'Gap found', 'Course assigned', 'Completed & assessed', 'Skill updated'].map((label, i) => {
    const angle = -90 + i * 72;
    const rad = (angle * Math.PI) / 180;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    return {
        label,
        x: loop.cx + loop.r * cos,
        y: loop.cy + loop.r * sin,
        lx: loop.cx + (loop.r + 26) * cos,
        ly: loop.cy + (loop.r + 26) * sin + (sin > 0.5 ? 14 : sin < -0.5 ? -4 : 5),
        anchor: cos > 0.3 ? 'start' : cos < -0.3 ? 'end' : 'middle',
    };
});
const loopArrows = loopSteps.map((_, i) => {
    const angle = -90 + i * 72 + 36;
    const rad = (angle * Math.PI) / 180;
    return { x: loop.cx + loop.r * Math.cos(rad), y: loop.cy + loop.r * Math.sin(rad), rotate: angle + 90 };
});

function LoopDiagram() {
    return (
        <svg className="inc-loop" viewBox="0 0 640 460" role="img" aria-label="The training loop: a review scores a skill, a gap is found, a course is assigned, it is completed and assessed, the skill is updated, and the next review scores it again.">
            <circle cx={loop.cx} cy={loop.cy} r={loop.r} className="inc-loop__ring" />
            {loopArrows.map((a, i) => (
                <path key={i} d="M-5 -5 L3 0 L-5 5" transform={`translate(${a.x} ${a.y}) rotate(${a.rotate})`} className="inc-loop__arrow" />
            ))}
            {loopSteps.map((s) => (
                <g key={s.label}>
                    <circle cx={s.x} cy={s.y} r="12" className="ak-eco__halo" />
                    <circle cx={s.x} cy={s.y} r="6" className="ak-eco__dot ak-eco__dot--live" />
                    <text x={s.lx} y={s.ly} textAnchor={s.anchor} className="inc-loop__label">{s.label}</text>
                </g>
            ))}
            <text x={loop.cx} y={loop.cy - 4} textAnchor="middle" className="inc-loop__core-title">One skill vocabulary</text>
            <text x={loop.cx} y={loop.cy + 18} textAnchor="middle" className="inc-loop__core-sub">shared by Training and Performance</text>
        </svg>
    );
}

/* ---------- Page ---------- */
export default function IncorpoCaseStudy() {
    return (
        <article className="ak inc">
            {/* 01 — HERO */}
            <header className="ak-hero inc-hero">
                <div className="ak-hero__media">
                    <Image src={heroImg} alt="The Incorpo landing page: stop paying four systems, hire, manage, train and track your whole team from one place" fill priority placeholder="blur" sizes="100vw" className="ak-hero__img" />
                </div>
                <div className="container ak-hero__inner">
                    <Link href="/" className="ak-back">
                        <Icon name="arrowLeft" size={16} /> Back to home
                    </Link>
                    <p className="ak-hero__kicker">Case study · HR platform</p>
                    <h1 className="ak-hero__title">Incorpo</h1>
                    <p className="ak-hero__lede">Stop paying four systems.</p>
                    <p className="ak-hero__desc">
                        Hiring, employees, attendance, payroll, performance and training on one employee record.
                        Groflex designed and engineered the platform, from the AI that reads every CV to the payslip
                        at the end of the month.
                    </p>
                    <div className="ak-hero__actions">
                        <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="ak-btn ak-btn--red">
                            Visit incorpohrms.com <Icon name="external" size={16} />
                        </a>
                        <a href="#problem" className="ak-btn ak-btn--ghost">
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

            {/* 02 — THE PROBLEM */}
            <section id="problem" className="ak-band ak-band--light">
                <div className="container">
                    <div className="ak-split ak-split--top">
                        <div className="ak-split__text">
                            <Eyebrow num="02">The problem</Eyebrow>
                            <h2 className="ak-h2">Four systems for one employee.</h2>
                            <p className="ak-body">
                                A growing company hires in one tool, tracks attendance in a spreadsheet, runs payroll in
                                another system and trains people in a fourth. Every new hire is typed in four times, and
                                none of the four agree.
                            </p>
                        </div>
                        <div className="ak-split__visual">
                            <ConvergeDiagram />
                        </div>
                    </div>

                    <p className="ak-statement">
                        The job wasn&apos;t to build four more tools. It was this: <em>how do you make six modules feel like one product?</em>
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

            {/* 03 — THE SPINE */}
            <section className="ak-band ak-band--dark">
                <div className="container ak-split">
                    <div className="ak-split__text">
                        <Eyebrow num="03">The idea</Eyebrow>
                        <h2 className="ak-h2">One record under everything.</h2>
                        <p className="ak-body">
                            Every module reads the same employees, departments and roles. Add a person once and every
                            part of the product knows them.
                        </p>
                        <p className="ak-body">
                            A company can buy the full suite or a single module. Either way it gets the same workspace
                            underneath, so growing into more tools never means a migration.
                        </p>
                        <blockquote className="ak-quote">
                            Hire someone on Monday and they&apos;re on the payroll, the attendance sheet and in training
                            by Tuesday, without anyone opening a second system.
                        </blockquote>
                    </div>
                    <div className="ak-split__visual">
                        <SpineDiagram />
                    </div>
                </div>
            </section>

            {/* 04 — HIRING */}
            <section className="ak-band ak-band--light">
                <div className="container">
                    <div className="ak-intro">
                        <Eyebrow num="04">Hiring</Eyebrow>
                        <h2 className="ak-h2">From a pile of CVs to a new hire.</h2>
                        <p className="ak-body">
                            Hiring was the first module and it is still the deepest. AI does the reading and the first
                            conversation. People make every decision, with the reasoning in front of them.
                        </p>
                    </div>

                    <div className="ak-flows">
                        <div className="ak-flow">
                            <h3 className="ak-flow__name">One role, start to finish</h3>
                            <ol className="ak-flow__steps">
                                {hiringFlow.map((s) => (
                                    <li key={s.title} className="ak-flow__step">
                                        <span className="ak-flow__icon"><Icon name={s.icon} size={24} /></span>
                                        <span className="ak-flow__title">{s.title}</span>
                                        <span className="ak-flow__note">{s.note}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    <div className="inc-shots">
                        {hiringShots.map((s) => (
                            <figure key={s.caption} className="inc-shot">
                                <Browser url={s.url}>
                                    <Image src={s.img} alt={s.caption} placeholder="blur" sizes="(max-width: 760px) 100vw, 50vw" />
                                </Browser>
                                <figcaption className="inc-caption">{s.caption}</figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            {/* 05 — MODULES */}
            <section className="ak-band ak-band--dark ak-product">
                <div className="container">
                    <div className="ak-intro">
                        <Eyebrow num="05">The product</Eyebrow>
                        <h2 className="ak-h2">Six modules. One place.</h2>
                        <p className="ak-body">
                            Short, silent recordings from the product itself. Each module has its own screens and
                            permissions, and every one of them reads the same employee record.
                        </p>
                    </div>

                    <div className="inc-modules">
                        {modules.map((m) => (
                            <figure key={m.file} className="inc-module">
                                <Browser url={`incorpohrms.com/${m.path}`}>
                                    <LoopVideo
                                        src={`${VIDEO_DIR}/${m.file}.mp4`}
                                        poster={`${VIDEO_DIR}/${m.file}.jpg`}
                                        label={`${m.name}: ${m.note}`}
                                        width={1280}
                                        height={608}
                                    />
                                </Browser>
                                <figcaption>
                                    <strong>{m.name}</strong>
                                    <span>{m.note}</span>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            {/* 06 — THE OWNER */}
            <section className="ak-band ak-band--light">
                <div className="container">
                    <div className="ak-split">
                        <div className="ak-split__text">
                            <Eyebrow num="06">The owner</Eyebrow>
                            <h2 className="ak-h2">Full transparency, one screen.</h2>
                            <p className="ak-body">
                                The owner sees the whole company at a glance: headcount, attendance, leave, payroll and
                                whatever needs a decision today. Everyone else sees only their part of it.
                            </p>
                        </div>
                        <div className="ak-split__visual">
                            <Browser url="incorpohrms.com/org">
                                <Image src={ownerDashboardImg} alt="The Incorpo owner dashboard: employees, attendance, leave, payroll and what needs attention" placeholder="blur" sizes="(max-width: 900px) 100vw, 55vw" />
                            </Browser>
                        </div>
                    </div>

                    <ol className="inc-steps">
                        {setupSteps.map((s) => (
                            <li key={s.num} className="inc-step">
                                <div className="inc-step__thumb">
                                    <Image src={s.img} alt="" fill sizes="(max-width: 760px) 100vw, 25vw" />
                                </div>
                                <span className="ak-columns__num">{s.num}</span>
                                <h3 className="ak-h4">{s.title}</h3>
                                <p className="ak-small">{s.text}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* 07 — THE LOOP */}
            <section className="ak-band ak-band--dark">
                <div className="container ak-split">
                    <div className="ak-split__text">
                        <Eyebrow num="07">The loop</Eyebrow>
                        <h2 className="ak-h2">Training that moves the score.</h2>
                        <p className="ak-body">
                            Most training tools stop at a completion rate. In Incorpo, Training and Performance share one
                            skill vocabulary, so the skill a review scores is the same skill a course improves.
                        </p>
                        <p className="ak-body">
                            A gap in a review becomes an assignment. The course is completed and assessed, the skill
                            updates, and the next review scores it again. That loop only closes because every module
                            shares the same people.
                        </p>
                    </div>
                    <div className="ak-split__visual">
                        <LoopDiagram />
                    </div>
                </div>
            </section>

            {/* 08 — THE DETAILS */}
            <section className="ak-band ak-band--light">
                <div className="container">
                    <div className="ak-intro">
                        <Eyebrow num="08">The details</Eyebrow>
                        <h2 className="ak-h2">The details are the product.</h2>
                        <p className="ak-body">
                            An HR platform earns trust in small decisions nobody notices until they go wrong. A few we
                            made along the way.
                        </p>
                    </div>

                    <ul className="ak-columns ak-columns--numbered inc-details">
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

            {/* 09 — ENGINEERING */}
            <section className="ak-band ak-band--graphite">
                <div className="container">
                    <div className="ak-split ak-split--top">
                        <div className="ak-split__text ak-sticky">
                            <Eyebrow num="09">Engineering</Eyebrow>
                            <h2 className="ak-h2">Four layers, one rule.</h2>
                            <p className="ak-body">
                                Every module is a folder with a single public entrance, and the build fails if anything
                                imports the wrong way. That is what let a sixth module arrive without touching the
                                other five.
                            </p>
                            <p className="ak-body">
                                Every AI call is metered. Interview costs are read back from the voice provider, so the
                                admin panel shows what the business actually spends, not an estimate.
                            </p>
                        </div>
                        <div className="ak-stack" role="img" aria-label="Architecture: a Next.js web app on Firebase Hosting, six modules (recruitment, people, attendance, payroll, performance, training), a backend of Cloud Functions, Firestore and Firebase Auth, AI from Gemini and Retell, and Resend and Lemon Squeezy for email and billing.">
                            {stack.map((row) => (
                                <div key={row.layer} className="ak-stack__row">
                                    <span className="ak-stack__layer">{row.layer}</span>
                                    <div className={`ak-stack__cells${row.grid ? ' inc-stack-grid' : ''}`}>
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

            {/* 10 — GROFLEX */}
            <section className="ak-band ak-band--graphite ak-closing">
                <div className="container">
                    <div className="ak-split ak-split--top">
                        <div className="ak-split__text">
                            <Eyebrow num="10">Groflex</Eyebrow>
                            <h2 className="ak-h2">We build products people run their day on.</h2>
                            <p className="ak-body">
                                Incorpo needed more than a hiring tool. It needed a team that could make six modules feel
                                like one, put AI where it saves real hours, and keep the product honest about what it
                                costs to run. That&apos;s the work we do.
                            </p>
                        </div>
                        <div className="ak-scope">
                            <div>
                                <h3 className="ak-scope__title">Product & design</h3>
                                <ul>
                                    {scope.product.map((s) => (
                                        <li key={s}><Icon name="check" size={18} />{s}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="ak-scope__title">Engineering</h3>
                                <ul>
                                    {scope.engineering.map((s) => (
                                        <li key={s}><Icon name="check" size={18} />{s}</li>
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
