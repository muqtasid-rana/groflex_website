// ============================================================
// /founders — the page for founders building an app, SaaS or website.
// Same sections and style as the agency home; this is the founder copy.
// ============================================================

import { services, pricing } from '@/data/siteData';
import { serviceIcons } from '@/components/LineIcon/LineIcon';
import { whatsappLink } from '@/data/partnerChats';

import incorpoLanding from '@/assets/case-studies/incorpo/landing-mockup.webp';
import incorpoLaptop from '@/assets/case-studies/incorpo/laptop-mockup.webp';
import ashhkaroLaunch from '@/assets/case-studies/ashhkaro/launch.webp';
import ashhkaroHome from '@/assets/case-studies/ashhkaro/screens/home.webp';
import ashhkaroBrowse from '@/assets/case-studies/ashhkaro/screens/browse.webp';
import ashhkaroProperties from '@/assets/case-studies/ashhkaro/screens/properties.webp';
import ashhkaroSell from '@/assets/case-studies/ashhkaro/screens/sell.webp';
import slashcureLanding from '@/assets/case-studies/slashcure/landing-mockup.webp';
import slashcureDoctors from '@/assets/case-studies/slashcure/find-doctors.webp';
import inayat from '@/assets/projects/inayat-motors.webp';
import pocketWatcher from '@/assets/projects/pocket-watcher.webp';
import testolz from '@/assets/projects/testolz.webp';
import hybrid from '@/assets/projects/hybrid-mediaworks.webp';

// ---- WhatsApp button: the main number from the footer ----
export const whatsappChat = whatsappLink(
  '923359528776',
  'Hi Groflex, I saw your page for founders and I’d like to talk about my product.',
);

// ---- Hero gallery ----
// Two columns that scroll in opposite directions (rows on phones). `ratio` is
// the card's shape: most use the picture's own, phone screens are cut to 3:4
// from the top. `pos` is the crop focus when a picture is cut.
const phone = { ratio: '3 / 4', pos: '50% 0%' };

export const heroGallery = [
  [
    { image: incorpoLanding, alt: 'Incorpo HR platform landing page', name: 'Incorpo', href: '/case-study/incorpo', ratio: '1440 / 1024' },
    { image: ashhkaroHome, alt: 'Ashhkaro app home screen', name: 'Ashhkaro', href: '/case-study/ashhkaro', ...phone },
    { image: inayat, alt: 'Inayat Motors management system on laptop, tablet and phone', name: 'Inayat Motors', href: '/case-study/3', ratio: '4 / 3' },
    { image: slashcureDoctors, alt: 'Slashcure find-a-doctor page', name: 'Slashcure', href: '/case-study/slashcure', ratio: '999 / 650', pos: '0% 0%' },
    { image: ashhkaroProperties, alt: 'Ashhkaro property search screen', name: 'Ashhkaro', href: '/case-study/ashhkaro', ...phone },
    { image: pocketWatcher, alt: 'Pocket Watcher personal finance website', name: 'Pocket Watcher', href: '/case-study/4', ratio: '1080 / 881' },
  ],
  [
    { image: ashhkaroLaunch, alt: 'Ashhkaro app launch visual', name: 'Ashhkaro', href: '/case-study/ashhkaro', ratio: '3 / 2' },
    { image: incorpoLaptop, alt: 'Incorpo dashboard on a laptop and phone', name: 'Incorpo', href: '/case-study/incorpo', ratio: '1378 / 868' },
    { image: ashhkaroBrowse, alt: 'Ashhkaro business browsing screen', name: 'Ashhkaro', href: '/case-study/ashhkaro', ...phone },
    { image: slashcureLanding, alt: 'Slashcure healthcare platform landing page', name: 'Slashcure', href: '/case-study/slashcure', ratio: '1440 / 1024' },
    { image: testolz, alt: 'Testolz website on desktop and mobile', name: 'Testolz', href: '/case-study/6', ratio: '900 / 878' },
    { image: ashhkaroSell, alt: 'Ashhkaro start-selling screen', name: 'Ashhkaro', href: '/case-study/ashhkaro', ...phone },
    { image: hybrid, alt: 'Hybrid MediaWorks website', name: 'Hybrid MediaWorks', href: '/case-study/2', ratio: '1080 / 955' },
  ],
];

// ---- Statement under the hero: [plain, pink, plain] ----
export const statement = ['Groflex designs and builds', 'apps, SaaS products and websites', 'for founders.'];
export const statementSub =
  'One team for design, development and launch. You talk to the people building your product, not a sales layer.';

// ---- Process (same four drawings as the home page) ----
export const steps = [
  {
    drawing: 'phone',
    title: 'Book a free call',
    text: 'Thirty minutes on your idea, your users and your budget. You leave with honest advice, even if we’re not the right fit.',
    cta: { label: 'Book a call' },
  },
  {
    drawing: 'plane',
    title: 'Get a fixed quote in 48 hours',
    text: 'We scope the product screen by screen, then send a fixed price and a fixed timeline. No hourly billing and no surprises later.',
  },
  {
    drawing: 'coin',
    title: 'Pay in three milestones',
    text: '40% to start, 30% at the midpoint and 30% on delivery. You see working software before every payment.',
  },
  {
    drawing: 'growth',
    title: 'Launch and keep growing',
    text: 'You get the source code, the design files and 30 days of support after launch. Stay on for new features whenever you’re ready.',
  },
];

// ---- Services: the home page's three columns, in founder terms ----
const lines = {
  d1: 'Interfaces your users get on first use.',
  d2: 'Logo, brand system and guidelines.',
  d3: 'Pitch decks, social and launch assets.',
  d4: 'Every screen designed before we build.',
  v1: 'Fast sites in WordPress or Next.js.',
  v2: 'iOS and Android from one codebase.',
  v3: 'MVPs with login, billing and admin.',
  v4: 'Internal tools, dashboards and systems.',
  g1: 'Content and paid ads after launch.',
  g2: 'Technical fixes and content that ranks.',
  g3: 'Workflows in Zapier, Make and n8n.',
  g4: 'One PM and a daily update. No chasing.',
};

// No links: the service pages are written for agencies
export const serviceGroups = [
  { key: 'design', title: 'Design' },
  { key: 'development', title: 'Development' },
  { key: 'growth', title: 'Launch & Growth' },
].map((g) => ({
  title: g.title,
  items: services[g.key].map((s) => ({ icon: serviceIcons[s.id], title: s.title, text: lines[s.id] })),
}));

// ---- A typical agency vs Groflex ----
const build = (id) => pricing.systems.find((s) => s.id === id);

export const compareRows = [
  { label: 'Time to launch', them: '3–6 months', us: `${build('saas').timeline} for an MVP` },
  { label: 'Pricing', them: 'Hourly, open-ended', us: 'Fixed quote in 48 hours' },
  { label: 'Updates', them: 'Weekly, if you ask', us: 'Daily, in a shared channel' },
  { label: 'After launch', them: 'Paid hourly support', us: '30 days of support included' },
  { label: 'The code', them: 'Depends on the contract', us: 'Yours, with full source' },
];

// ---- Testimonials (attributed by role) ----
export const quotes = [
  {
    quote: 'The best thing about working with Groflex has been that their work was always transparent. We were continuously updated about the progress of the project.',
    role: 'Founder, Inayat Motors',
    href: '/case-study/3',
  },
  {
    quote: 'They delivered exactly the aesthetic I had in mind for my bikes. I couldn’t be happier. They delivered the project way before the deadline.',
    role: 'Founder, RPM Dynamics',
    href: '/case-study/5',
  },
  {
    quote: 'Groflex made the best design for our website. They are very professional and delivered the project on time.',
    role: 'CEO, Pocket Watcher',
    href: '/case-study/4',
  },
];

// ---- FAQ ----
export const faq = [
  { q: 'Do I own the code and the designs?', a: 'Yes. The source code, Figma files and documentation are handed over on delivery. Nothing is locked to us, so you can take the product to any team.' },
  { q: 'How much does an app or MVP cost?', a: 'It depends on what you’re building, so every product is quoted on its own. After a free call you get a fixed price within 48 hours, and it only changes if the scope does.' },
  { q: 'How long does it take?', a: `A prototype takes ${build('prototype').timeline}, an MVP ${build('saas').timeline} and a full platform ${build('platform').timeline}. The timeline is fixed in your quote.` },
  { q: 'How do payments work?', a: 'Each build is billed in three milestones: 40% to start, 30% at the midpoint and 30% on delivery. You see working software before every payment.' },
  { q: 'I’m not technical. Is that a problem?', a: 'No. Most founders we work with aren’t. We recommend the stack, explain every decision in plain language and keep you updated daily, so you can focus on users and sales.' },
  { q: 'What if I only have an idea?', a: 'Start with a clickable prototype. You can test it with users or show it to investors before you spend on a full build.' },
  { q: 'How many revisions are included?', a: 'Two revision rounds on every deliverable. A change to the agreed scope is quoted before any work starts, so the price never moves without you knowing.' },
  { q: 'Will you sign an NDA?', a: 'Yes, before you share any details of your idea.' },
  { q: 'What happens after launch?', a: 'You get 30 days of support included. After that we can keep building features with you, or hand everything over to your own team.' },
  { q: 'Which time zones do you cover?', a: 'Our team overlaps at least four working hours with the UK and US Eastern time, so you get same-day replies.' },
];
