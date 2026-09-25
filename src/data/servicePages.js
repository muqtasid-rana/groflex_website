// ============================================================
// Service and market landing pages (/white-label-…)
// Copy for each page lives here; the templates are in src/sections/ServicePage.
// Every price comes from `pricing`, so the pages never disagree with /pricing.
// ============================================================

import { pricing, money } from '@/data/siteData';

const creditItems = Object.values(pricing.creditMenu).flat();

// A credit-menu item by its exact label. Throws at build time if the label
// changes in siteData, instead of silently dropping the price from a page.
export function creditItem(label) {
  const item = creditItems.find((m) => m.label === label);
  if (!item) throw new Error(`servicePages: no credit-menu item "${label}"`);
  return item;
}

export { money };

// Cheapest and dearest price of one credit across packs and monthly plans
export function creditRange(currency = 'usd') {
  const rates = [...pricing.packs, ...pricing.plans].map((p) => p.price[currency] / p.credits);
  const sym = currency === 'gbp' ? '£' : '$';
  return { low: `${sym}${Math.round(Math.min(...rates))}`, high: `${sym}${Math.round(Math.max(...rates))}` };
}

const system = (id) => pricing.systems.find((s) => s.id === id);
const cr = (label) => creditItem(label).credits;
const range = creditRange();
const { pilot, plans } = pricing;

const clientsNeverKnow = {
  q: 'Will our client know you did the work?',
  a: 'No. There is no Groflex branding anywhere in the work, we sign an NDA before you share any client details, and we never contact your client unless you ask us to.',
};

// ---- Service pages ----
// `h1` is [plain, pink]. `groups` must hold exactly four items each: the grid
// lines them up row by row, as on the home page.
export const servicePages = [
  {
    slug: 'white-label-web-development',
    kind: 'service',
    name: 'Web development',
    serviceType: 'White-label web development',
    icon: 'code',
    summary: 'Websites, web apps and Shopify stores, built under your brand.',
    title: 'White-Label Web Development for Agencies — Groflex',
    description:
      'White-label web development for UK and US agencies: websites, web apps and Shopify stores built under your brand and NDA. Start with a pilot, $0 upfront.',
    eyebrow: 'White-label development',
    h1: ['White-label web development', 'for agencies'],
    lede: 'Websites, web apps and online stores for your clients, built by our developers and delivered as your work.',
    statement: ['You sell the website. We build it, test it and hand it over', 'under your name.'],
    sub: 'Our developers work from your designs or ours, inside your Slack and your Git, on your deadlines. Your client only ever talks to you.',
    groups: [
      {
        title: 'What we build',
        items: [
          { icon: 'code', title: 'Marketing websites', text: 'Fast, responsive sites in WordPress or Next.js.' },
          { icon: 'cloud', title: 'Web apps', text: 'Dashboards, portals and SaaS products with login and billing.' },
          { icon: 'cart', title: 'E-commerce', text: 'Shopify store setup and custom storefronts.' },
          { icon: 'chip', title: 'Custom systems', text: 'CRMs, booking and inventory tools with admin panels.' },
        ],
      },
      {
        title: 'How we build',
        items: [
          { icon: 'layout', title: 'From your designs', text: 'Figma to a pixel-accurate, responsive build.' },
          { icon: 'gauge', title: 'Built for speed', text: 'Clean code and optimised images from the first commit.' },
          { icon: 'search', title: 'SEO-ready', text: 'Semantic markup, meta tags and sitemaps as standard.' },
          { icon: 'shield', title: 'Tested before handover', text: 'QA across browsers and devices on every build.' },
        ],
      },
      {
        title: 'What you get',
        items: [
          { icon: 'git', title: 'Your repo, your hosting', text: 'We commit to your Git and deploy where your client hosts.' },
          { icon: 'file', title: 'Documentation', text: 'Handover notes your team or the client can follow.' },
          { icon: 'wrench', title: '30 days of fixes', text: 'Post-launch support on every fixed-price build.' },
          { icon: 'refresh', title: 'Ongoing care', text: 'Updates and small tasks from 1 credit each.' },
        ],
      },
    ],
    pointsTitle: ['How we run development', 'for your agency'],
    points: [
      {
        title: 'Briefed in your channel',
        text: 'Drop the brief, the designs and the deadline in your Slack or project tool. We confirm the scope and the credit cost before any code is written.',
      },
      {
        title: 'Staging links you control',
        text: 'You review every build on a staging link before your client sees it, so you decide what goes out and when.',
      },
      {
        title: 'Two revision rounds',
        text: 'Every deliverable includes two rounds of changes. Anything outside the original brief is quoted in credits first, never billed as a surprise.',
      },
      {
        title: 'A clean handover',
        text: 'Source code, logins and documentation are yours on delivery. Nothing stays locked to Groflex.',
      },
    ],
    credits: [
      'Dev task or bug fix',
      'Web page build (WordPress or Next.js)',
      'Email template, designed and built',
      'Landing page, designed and built',
      '5-page website, designed and built',
      'Shopify store setup',
    ],
    systems: ['system', 'saas', 'platform'],
    faq: [
      {
        q: 'Can you build from our designs?',
        a: 'Yes. Send the Figma file and we build it responsive and pixel-accurate. If there is no design yet, our designers can create one first.',
      },
      {
        q: 'Which platforms do you build on?',
        a: 'WordPress and Next.js for websites, Shopify for stores, and React-based stacks for web apps. If your client is on another platform, tell us on the call and we will say honestly whether it is a fit.',
      },
      {
        q: 'How much does white-label web development cost?',
        a: `A page build is ${cr('Web page build (WordPress or Next.js)')} credits, a landing page designed and built is ${cr('Landing page, designed and built')} credits and a 5-page website is ${cr('5-page website, designed and built')}. Credits cost ${range.low}–${range.high} each depending on your plan. Custom systems start at ${money(system('system').price)} and web apps at ${money(system('saas').price)}, both fixed-price.`,
      },
      {
        q: 'How fast can you deliver?',
        a: `Small tasks land in 24–48 hours. Fixed-price builds run on the timeline in their quote: ${system('system').timeline} for a business system, ${system('saas').timeline} for a web app MVP.`,
      },
      {
        q: 'Who owns the code?',
        a: 'Your agency does, or your client if you pass it on. We commit to your repository and hand over every login on delivery.',
      },
      clientsNeverKnow,
    ],
    related: ['white-label-wordpress-development', 'white-label-web-design', 'white-label-app-development', 'white-label-seo'],
  },

  {
    slug: 'white-label-web-design',
    kind: 'service',
    name: 'Web design',
    serviceType: 'White-label web and UI/UX design',
    icon: 'layout',
    summary: 'Website and app design in Figma, presented as your own.',
    title: 'White-Label Web Design & UI/UX for Agencies — Groflex',
    description:
      'White-label web design and UI/UX for UK and US agencies: website pages, app screens and prototypes in Figma, delivered under your brand. Pilot: $0 upfront.',
    eyebrow: 'White-label design',
    h1: ['White-label web design', 'for agencies'],
    lede: 'Website and app design your clients sign off, created by our designers and delivered as your work.',
    statement: ['Your clients see your agency’s design.', 'Our designers make it.'],
    sub: 'UI/UX and web design in Figma, handed over with source files and ready for your developers, or ours, to build.',
    groups: [
      {
        title: 'What we design',
        items: [
          { icon: 'layout', title: 'Website pages', text: 'Home, landing and inner pages, desktop and mobile.' },
          { icon: 'devices', title: 'App screens', text: 'iOS, Android and web app interfaces.' },
          { icon: 'cursor', title: 'Clickable prototypes', text: 'Flows your client can click through before the build.' },
          { icon: 'grid', title: 'Design systems', text: 'Components and styles that keep every page consistent.' },
        ],
      },
      {
        title: 'How we design',
        items: [
          { icon: 'search', title: 'Research first', text: 'We start from the client’s audience, goals and competitors.' },
          { icon: 'pen', title: 'Structure, then style', text: 'Layout agreed before we polish the visuals.' },
          { icon: 'users', title: 'UX that converts', text: 'Clear hierarchy, strong calls to action, easy reading.' },
          { icon: 'badge', title: 'On brand', text: 'Built on the client’s guidelines, or a new identity first.' },
        ],
      },
      {
        title: 'What you get',
        items: [
          { icon: 'file', title: 'Figma source files', text: 'Organised, named layers that you own on delivery.' },
          { icon: 'code', title: 'Dev-ready handover', text: 'Specs and assets your developers can build from.' },
          { icon: 'refresh', title: 'Two revision rounds', text: 'Included on every deliverable.' },
          { icon: 'flow', title: 'Design to build', text: 'Hand it straight to our developers if you want it built.' },
        ],
      },
    ],
    pointsTitle: ['How design works', 'with Groflex'],
    points: [
      {
        title: 'Briefed like a team member',
        text: 'Share the brief, the brand files and references in your channel. We confirm the scope and the credit cost before we start.',
      },
      {
        title: 'Direction before detail',
        text: 'You approve the structure and a first direction before we design every screen, so feedback lands early and revisions stay small.',
      },
      {
        title: 'Ready to present',
        text: 'You get designs you can present to your client as your own, with no Groflex branding anywhere in the file.',
      },
      {
        title: 'Ready to build',
        text: 'Responsive layouts, components and exported assets come with every design, so the build goes smoothly whoever does it.',
      },
    ],
    credits: ['App screen design', 'Web page design', 'Landing page, designed and built', '5-page website, designed and built'],
    systems: ['prototype'],
    faq: [
      {
        q: 'What do you design in?',
        a: 'Figma. You get the source file with organised layers and components, and we can work inside your agency’s own Figma team.',
      },
      {
        q: 'Can you work with our client’s brand guidelines?',
        a: 'Yes. Send the guidelines, fonts and assets and we design within them. If the client has no brand yet, our graphic designers can create one first.',
      },
      {
        q: 'How much does white-label web design cost?',
        a: `A web page design is ${cr('Web page design')} credits, an app screen is ${cr('App screen design')} and a landing page designed and built is ${cr('Landing page, designed and built')}. A clickable prototype of up to 15 screens is a fixed ${money(system('prototype').price)}.`,
      },
      {
        q: 'How many revisions are included?',
        a: 'Two revision rounds on every deliverable. Changes to the original brief are quoted in credits before we make them.',
      },
      {
        q: 'Do you build what you design?',
        a: 'Yes. Our developers build in WordPress, Next.js or Shopify, so one team can take a page from design to launch.',
      },
      clientsNeverKnow,
    ],
    related: ['white-label-web-development', 'white-label-graphic-design', 'white-label-app-development', 'white-label-wordpress-development'],
  },

  {
    slug: 'white-label-graphic-design',
    kind: 'service',
    name: 'Graphic design & branding',
    serviceType: 'White-label graphic design and branding',
    icon: 'badge',
    summary: 'Logos, brand kits, social creatives and decks.',
    title: 'White-Label Graphic Design & Branding for Agencies — Groflex',
    description:
      'White-label graphic design and branding for agencies: logos, brand identity kits, social posts, ads and pitch decks, designed under your brand. Priced per credit.',
    eyebrow: 'White-label design',
    h1: ['White-label graphic design', 'and branding'],
    lede: 'Logos, brand kits, social creatives and decks for your clients, designed by our team under your name.',
    statement: ['Every asset your clients ask for,', 'without another designer on payroll.'],
    sub: 'From a one-off logo to a steady stream of social posts: we design it, you present it, and the client never knows we exist.',
    groups: [
      {
        title: 'Brand',
        items: [
          { icon: 'badge', title: 'Logo design', text: 'Three concepts, refined into a final mark.' },
          { icon: 'palette', title: 'Brand identity kits', text: 'Colours, type, logo versions and usage rules.' },
          { icon: 'type', title: 'Brand guidelines', text: 'A clear guide the client’s team can follow.' },
          { icon: 'layout', title: 'Pitch decks', text: '15-slide decks for sales and investors.' },
        ],
      },
      {
        title: 'Marketing',
        items: [
          { icon: 'image', title: 'Social posts and ads', text: 'Sets in three sizes for every platform.' },
          { icon: 'grid', title: 'Carousels', text: 'Up to 10 slides that tell one story.' },
          { icon: 'megaphone', title: 'Campaign assets', text: 'Banners, display ads and print pieces.' },
          { icon: 'mail', title: 'Email templates', text: 'Designed and built to work in every inbox.' },
        ],
      },
      {
        title: 'How it works',
        items: [
          { icon: 'file', title: 'Source files', text: 'Editable files and every export you need.' },
          { icon: 'clock', title: 'Fast turnaround', text: 'Small design tasks in 24–48 hours.' },
          { icon: 'refresh', title: 'Two revision rounds', text: 'On every deliverable, logos included.' },
          { icon: 'shield', title: 'NDA first', text: 'Signed before you share any client details.' },
        ],
      },
    ],
    pointsTitle: ['Design on demand', 'for busy agencies'],
    points: [
      {
        title: 'One channel for every request',
        text: 'Post requests in your Slack or project tool as they come in. Each has a set credit cost, so you know the price before we start.',
      },
      {
        title: 'One-off or monthly',
        text: 'Use a credit pack for occasional jobs, or a monthly plan if your clients need a steady flow of creative. Unused credits roll over.',
      },
      {
        title: 'Consistent for every client',
        text: 'We keep each client’s brand files and templates together, so the fiftieth post looks like it came from the same team as the first.',
      },
      {
        title: 'Presented as yours',
        text: 'No watermarks, no credits, no Groflex anywhere. You present the work and keep the client relationship.',
      },
    ],
    credits: [
      'Social post or ad set (3 sizes)',
      'Carousel (up to 10 slides)',
      'Email template, designed and built',
      'Logo (3 concepts)',
      'Pitch deck (15 slides)',
      'Brand identity kit',
    ],
    systems: [],
    faq: [
      {
        q: 'How much does white-label graphic design cost?',
        a: `A social post or ad set in three sizes is ${cr('Social post or ad set (3 sizes)')} credit, a carousel is ${cr('Carousel (up to 10 slides)')}, a logo with three concepts is ${cr('Logo (3 concepts)')} and a full brand identity kit is ${cr('Brand identity kit')}. Credits cost ${range.low}–${range.high} each depending on your plan.`,
      },
      {
        q: 'Can you handle ongoing design for our clients?',
        a: 'Yes. Most agencies put regular creative work on a monthly plan, with a set number of credits each month and unused credits rolling over up to the plan’s limit.',
      },
      {
        q: 'How many logo concepts do we get?',
        a: 'Three concepts, then two revision rounds on the one your client picks.',
      },
      {
        q: 'Do we get the source files?',
        a: 'Yes. Editable source files and exports in the formats your client needs come with every deliverable, and they belong to your agency.',
      },
      {
        q: 'How fast is the turnaround?',
        a: 'Small tasks such as social posts land in 24–48 hours. Rush delivery in under 24 hours costs 1.5× the normal credits.',
      },
      clientsNeverKnow,
    ],
    related: ['white-label-social-media-marketing', 'white-label-web-design', 'white-label-web-development', 'white-label-seo'],
  },

  {
    slug: 'white-label-app-development',
    kind: 'service',
    name: 'App development',
    serviceType: 'White-label mobile and web app development',
    icon: 'mobile',
    summary: 'iOS and Android apps, SaaS MVPs and full platforms.',
    title: 'White-Label App Development for Agencies — Groflex',
    description:
      'White-label app development for agencies: iOS and Android apps, SaaS MVPs and full platforms, built under your brand. Fixed quotes in 48 hours, from $2,500.',
    eyebrow: 'White-label development',
    h1: ['White-label app development', 'for agencies'],
    lede: 'iOS and Android apps, SaaS products and web platforms for your clients, built by our team under your brand.',
    statement: ['Say yes to the app project.', 'We’ll build it.'],
    sub: 'Fixed quotes within 48 hours, milestone billing, and a team that has shipped HR, healthcare and all-in-one consumer platforms.',
    groups: [
      {
        title: 'What we build',
        items: [
          { icon: 'mobile', title: 'Mobile apps', text: 'One cross-platform app for iOS and Android.' },
          { icon: 'cloud', title: 'SaaS MVPs', text: 'Sign-up, core features, billing and an admin panel.' },
          { icon: 'chip', title: 'Business systems', text: 'Internal tools with user roles and admin panels.' },
          { icon: 'devices', title: 'Full platforms', text: 'Web app, mobile app and admin working as one.' },
        ],
      },
      {
        title: 'How we build',
        items: [
          { icon: 'cursor', title: 'Prototype first', text: 'A clickable prototype to agree the product before code.' },
          { icon: 'code', title: 'One codebase', text: 'Flutter for iOS and Android, Next.js for the web.' },
          { icon: 'database', title: 'Backend included', text: 'APIs, database and authentication, set up for you.' },
          { icon: 'shield', title: 'QA testing', text: 'Every build is tested before it reaches your client.' },
        ],
      },
      {
        title: 'What you get',
        items: [
          { icon: 'store', title: 'Store submission', text: 'We handle App Store and Google Play submission.' },
          { icon: 'git', title: 'Full source code', text: 'Your agency owns the code and the accounts.' },
          { icon: 'file', title: 'Documentation', text: 'So any developer can pick the project up later.' },
          { icon: 'wrench', title: 'App care', text: `Maintenance from ${money(pricing.appCare.price)} a month after launch.` },
        ],
      },
    ],
    pointsTitle: ['How app projects run', 'with Groflex'],
    points: [
      {
        title: 'A fixed quote in 48 hours',
        text: 'Send the brief and we come back within 48 hours with the scope, the timeline and a fixed price you can mark up.',
      },
      {
        title: 'Billed by milestone',
        text: 'Pay 40% to start, 30% at the midpoint and 30% on delivery. Agencies on a monthly plan can also pay in credits at their plan rate.',
      },
      {
        title: 'Progress you can present',
        text: 'You see working builds at every milestone and decide what goes to your client, so you stay in control of the relationship.',
      },
      {
        title: 'Launch and after',
        text: 'Thirty days of post-launch support are included. After that, App Care keeps the app updated and fixed.',
      },
    ],
    credits: ['App screen design', 'Dev task or bug fix'],
    systems: ['prototype', 'system', 'saas', 'mobile', 'platform'],
    faq: [
      {
        q: 'How much does white-label app development cost?',
        a: `Fixed prices start at ${money(system('prototype').price)} for a clickable prototype, ${money(system('saas').price)} for a SaaS MVP and ${money(system('mobile').price)} for a cross-platform mobile app. A full platform with web, mobile and admin starts at ${money(system('platform').price)}.`,
      },
      {
        q: 'How long does it take to build an app?',
        a: `A mobile app takes ${system('mobile').timeline}, a SaaS MVP ${system('saas').timeline} and a full platform ${system('platform').timeline}. Your quote sets the exact timeline before we start.`,
      },
      {
        q: 'Do you build native or cross-platform apps?',
        a: 'Cross-platform, with one Flutter codebase for iOS and Android. For most client projects it is faster and cheaper than two native apps.',
      },
      {
        q: 'Do you publish to the App Store and Google Play?',
        a: 'Yes. Store submission is included in the mobile app price.',
      },
      {
        q: 'Who owns the app and the code?',
        a: 'Your agency, or your client if you transfer it. Source code and accounts are handed over on delivery.',
      },
      {
        q: 'What happens after launch?',
        a: `Thirty days of support are included. After that, App Care covers updates, fixes and small changes from ${money(pricing.appCare.price)} a month.`,
      },
    ],
    related: ['white-label-web-development', 'white-label-web-design', 'white-label-automation', 'white-label-graphic-design'],
  },

  {
    slug: 'white-label-wordpress-development',
    kind: 'service',
    name: 'WordPress development',
    serviceType: 'White-label WordPress development',
    icon: 'code',
    summary: 'WordPress sites, page builds, fixes and care.',
    title: 'White-Label WordPress Development for Agencies — Groflex',
    description:
      'White-label WordPress development for agencies: custom sites, page builds, speed fixes and maintenance under your brand. Page builds from 3 credits.',
    eyebrow: 'White-label development',
    h1: ['White-label WordPress', 'development'],
    lede: 'WordPress sites, page builds and fixes for your clients, delivered by our developers under your brand.',
    statement: ['Your WordPress backlog, cleared by a team that works', 'under your name.'],
    sub: 'New sites, new pages, speed fixes and updates, briefed in your channel and priced in credits before we start.',
    groups: [
      {
        title: 'What we build',
        items: [
          { icon: 'code', title: 'WordPress websites', text: 'Built from your designs, responsive and fast.' },
          { icon: 'layout', title: 'Page builds', text: 'New pages for existing client sites.' },
          { icon: 'megaphone', title: 'Landing pages', text: 'Campaign pages, designed and built.' },
          { icon: 'pen', title: 'Theme changes', text: 'Edits to existing themes that survive updates.' },
        ],
      },
      {
        title: 'Care and fixes',
        items: [
          { icon: 'wrench', title: 'Bug fixes', text: 'From 1 credit per task.' },
          { icon: 'gauge', title: 'Speed optimisation', text: 'Faster pages and better Core Web Vitals.' },
          { icon: 'refresh', title: 'Updates', text: 'Core, theme and plugin updates, tested first.' },
          { icon: 'plug', title: 'Plugin setup', text: 'Forms, SEO, caching and integrations.' },
        ],
      },
      {
        title: 'Always included',
        items: [
          { icon: 'search', title: 'SEO basics', text: 'Clean markup, meta tags and sitemaps.' },
          { icon: 'devices', title: 'Responsive', text: 'Checked on phones, tablets and desktops.' },
          { icon: 'shield', title: 'Staging first', text: 'Changes tested before they go live.' },
          { icon: 'file', title: 'Handover', text: 'Logins and a short guide for your client.' },
        ],
      },
    ],
    pointsTitle: ['How WordPress work runs', 'with Groflex'],
    points: [
      {
        title: 'Priced before we start',
        text: `Every request gets a credit cost first: a page build is ${cr('Web page build (WordPress or Next.js)')} credits and a small fix is ${cr('Dev task or bug fix')}.`,
      },
      {
        title: 'Staging, not the live site',
        text: 'Where the host allows it, we work on a staging copy, so your client’s live site is never the test bed.',
      },
      {
        title: 'Two revision rounds',
        text: 'Every deliverable includes two rounds of changes. Anything outside the brief is quoted in credits first.',
      },
      {
        title: 'Resell it as a care plan',
        text: 'Put your clients’ WordPress maintenance on a monthly plan and sell it as your own care package, at your own price.',
      },
    ],
    credits: [
      'Dev task or bug fix',
      'Web page design',
      'Web page build (WordPress or Next.js)',
      'Landing page, designed and built',
      '5-page website, designed and built',
    ],
    systems: [],
    faq: [
      {
        q: 'How much does white-label WordPress development cost?',
        a: `A page build is ${cr('Web page build (WordPress or Next.js)')} credits, a landing page designed and built is ${cr('Landing page, designed and built')}, a 5-page website is ${cr('5-page website, designed and built')} and small fixes are ${cr('Dev task or bug fix')} credit. Credits cost ${range.low}–${range.high} each depending on your plan.`,
      },
      {
        q: 'Can you work on our clients’ existing WordPress sites?',
        a: 'Yes. We build from your designs and work within the client’s existing setup. Tell us on the call which theme or page builder the site uses and we will confirm it is a fit before you commit.',
      },
      {
        q: 'Can you take over maintenance for our clients?',
        a: 'Yes. Updates, fixes and small changes run on credits, so you can bundle them into your own monthly care plans.',
      },
      {
        q: 'Can you speed up a slow WordPress site?',
        a: 'Yes. We look at hosting, images, caching and plugins, fix what is slowing the site down and show you the before and after.',
      },
      {
        q: 'What access do you need?',
        a: 'Only enough to do the job, ideally on a staging copy. Share it through your usual password manager and remove it when we are done.',
      },
      clientsNeverKnow,
    ],
    related: ['white-label-web-development', 'white-label-web-design', 'white-label-seo', 'white-label-automation'],
  },

  {
    slug: 'white-label-seo',
    kind: 'service',
    name: 'SEO',
    serviceType: 'White-label SEO',
    icon: 'search',
    summary: 'Technical audits, fixes and content, reported under your brand.',
    title: 'White-Label SEO for Agencies — Groflex',
    description:
      'White-label SEO for agencies: technical audits, the fixes built by our developers, schema and content, reported under your brand. Audits from 6 credits.',
    eyebrow: 'White-label marketing',
    h1: ['White-label SEO', 'for agencies'],
    lede: 'Technical audits, fixes and content your clients can see in their rankings, delivered under your brand.',
    statement: ['Add SEO to every retainer', 'without hiring an SEO team.'],
    sub: 'We audit, fix and report. You present the results and keep the client.',
    groups: [
      {
        title: 'Audit',
        items: [
          { icon: 'search', title: 'Technical SEO audit', text: 'Crawling, indexing, speed and structured data.' },
          { icon: 'gauge', title: 'Core Web Vitals', text: 'The speed and layout issues search engines measure.' },
          { icon: 'checklist', title: 'On-page review', text: 'Titles, headings, internal links and content gaps.' },
          { icon: 'chart', title: 'Competitor gaps', text: 'Where competitors rank and your client doesn’t.' },
        ],
      },
      {
        title: 'Fix',
        items: [
          { icon: 'code', title: 'Technical fixes', text: 'Our developers implement what the audit finds.' },
          { icon: 'link', title: 'Internal linking', text: 'A structure that lifts the pages that matter.' },
          { icon: 'file', title: 'Schema markup', text: 'Structured data for rich results and AI answers.' },
          { icon: 'pen', title: 'SEO content', text: 'Pages and posts written around real searches.' },
        ],
      },
      {
        title: 'Report and grow',
        items: [
          { icon: 'layout', title: 'White-label reports', text: 'Under your agency’s name, ready to send.' },
          { icon: 'globe', title: 'AI search visibility', text: 'Structure and content AI assistants can cite.' },
          { icon: 'refresh', title: 'Monthly retainers', text: 'Ongoing SEO on a monthly credit plan.' },
          { icon: 'users', title: 'Talking points', text: 'Plain-English summaries for client meetings.' },
        ],
      },
    ],
    pointsTitle: ['How white-label SEO works', 'with Groflex'],
    points: [
      {
        title: 'Start with an audit',
        text: `A technical SEO audit is ${cr('Technical SEO audit')} credits. You get a prioritised list of issues with the effort to fix each one, ready to present as your own.`,
      },
      {
        title: 'Fix what matters first',
        text: 'Our developers can make the fixes directly, so the audit turns into results instead of a PDF nobody acts on.',
      },
      {
        title: 'Report under your brand',
        text: 'Progress reports go out in your format and under your name, with no Groflex branding.',
      },
      {
        title: 'Grow it into a retainer',
        text: 'Move ongoing SEO onto a monthly plan and resell it to your clients at your own price.',
      },
    ],
    credits: ['Dev task or bug fix', 'Web page design', 'Web page build (WordPress or Next.js)', 'Technical SEO audit'],
    systems: [],
    faq: [
      {
        q: 'What is included in a white-label SEO audit?',
        a: 'Crawling and indexing, site speed and Core Web Vitals, titles and headings, internal links, structured data and content gaps, with every issue ranked by impact and effort.',
      },
      {
        q: 'Do you make the fixes too?',
        a: 'Yes. Our developers make the technical changes, priced in credits like any other task. That is the main difference from SEO providers that only hand over a report.',
      },
      {
        q: 'How much does white-label SEO cost?',
        a: `A technical SEO audit is ${cr('Technical SEO audit')} credits. Fixes and content are priced per task in credits, or run on a monthly plan from ${money(plans[0].price)}.`,
      },
      {
        q: 'Do you guarantee rankings?',
        a: 'No, and nobody honestly can. We guarantee the work: a clear audit, fixes done properly and reporting you can show your client.',
      },
      {
        q: 'Can you help clients show up in AI answers?',
        a: 'Yes. The same foundations help with ChatGPT, Perplexity and Google’s AI answers: clear structure, schema markup, fast pages and content that answers real questions. We can include AI visibility in the audit.',
      },
      clientsNeverKnow,
    ],
    related: ['white-label-web-development', 'white-label-wordpress-development', 'white-label-social-media-marketing', 'white-label-automation'],
  },

  {
    slug: 'white-label-automation',
    kind: 'service',
    name: 'Automation',
    serviceType: 'White-label workflow automation',
    icon: 'flow',
    summary: 'Zapier, Make and n8n workflows with AI steps.',
    title: 'White-Label Automation (Zapier, Make, n8n) for Agencies — Groflex',
    description:
      'White-label automation for agencies: Zapier, Make and n8n workflows with AI steps, built under your brand and documented for handover. From 6 credits a workflow.',
    eyebrow: 'White-label automation',
    h1: ['White-label automation', 'for agencies'],
    lede: 'Zapier, Make and n8n workflows that take repetitive work off your clients’ teams, built under your brand.',
    statement: ['Sell automation to your clients.', 'We build the workflows.'],
    sub: 'Lead follow-ups, reporting, CRM syncs and AI steps, built in the tools your clients already pay for.',
    groups: [
      {
        title: 'What we automate',
        items: [
          { icon: 'flow', title: 'Lead handling', text: 'Capture, qualify and route leads to the right person.' },
          { icon: 'mail', title: 'Follow-ups', text: 'Emails and messages that go out on time, every time.' },
          { icon: 'chart', title: 'Reporting', text: 'Weekly reports built and sent automatically.' },
          { icon: 'database', title: 'CRM and data syncs', text: 'Tools kept in step without copy and paste.' },
        ],
      },
      {
        title: 'Tools we use',
        items: [
          { icon: 'plug', title: 'Zapier', text: 'Quick, reliable workflows across common apps.' },
          { icon: 'refresh', title: 'Make', text: 'Multi-step scenarios with branching logic.' },
          { icon: 'chip', title: 'n8n', text: 'Self-hosted workflows for data-sensitive clients.' },
          { icon: 'cloud', title: 'AI steps', text: 'Summaries, sorting and drafts inside workflows.' },
        ],
      },
      {
        title: 'Always included',
        items: [
          { icon: 'file', title: 'Documentation', text: 'Every workflow explained for your team.' },
          { icon: 'shield', title: 'Error alerts', text: 'You hear when something fails, not silence.' },
          { icon: 'git', title: 'Your accounts', text: 'Built in your agency’s or your client’s account.' },
          { icon: 'wrench', title: 'Changes and fixes', text: 'Small tasks from 1 credit each.' },
        ],
      },
    ],
    pointsTitle: ['How automation projects run', 'with Groflex'],
    points: [
      {
        title: 'Map the process',
        text: 'You share how the task is done today. We map the steps, the tools involved and what should happen when something goes wrong.',
      },
      {
        title: 'A known cost',
        text: `A typical workflow is ${cr('Automation workflow (Zapier, Make, n8n)')} credits, agreed before we start. Bigger systems get a fixed quote within 48 hours.`,
      },
      {
        title: 'Built in your accounts',
        text: 'Workflows live in your agency’s or your client’s Zapier, Make or n8n account, so nothing depends on Groflex.',
      },
      {
        title: 'A documented handover',
        text: 'Each workflow comes with notes on what it does, what it connects to and how to change it.',
      },
    ],
    credits: ['Dev task or bug fix', 'Automation workflow (Zapier, Make, n8n)'],
    systems: ['system', 'saas'],
    faq: [
      {
        q: 'Which automation tools do you use?',
        a: 'Zapier, Make and n8n. We pick the one that fits your client’s budget, data rules and existing tools, or work in the one they already use.',
      },
      {
        q: 'How much does white-label automation cost?',
        a: `A typical workflow is ${cr('Automation workflow (Zapier, Make, n8n)')} credits. Larger systems with dashboards and user roles are fixed-price from ${money(system('system').price)}.`,
      },
      {
        q: 'Can you add AI to our clients’ workflows?',
        a: 'Yes. We add AI steps that summarise, sort, draft replies and pull data out of documents, inside the same workflow.',
      },
      {
        q: 'Who owns the workflows?',
        a: 'Your agency or your client. Workflows are built in your accounts and documented at handover.',
      },
      {
        q: 'What if a workflow breaks?',
        a: 'We build in error alerts, and fixes are small credit tasks. On a monthly plan they are handled in your normal queue.',
      },
      clientsNeverKnow,
    ],
    related: ['white-label-app-development', 'white-label-web-development', 'white-label-seo', 'white-label-social-media-marketing'],
  },

  {
    slug: 'white-label-social-media-marketing',
    kind: 'service',
    name: 'Social media marketing',
    serviceType: 'White-label social media content',
    icon: 'megaphone',
    summary: 'Content calendars, posts, carousels and ad creative.',
    title: 'White-Label Social Media Marketing for Agencies — Groflex',
    description:
      'White-label social media for agencies: content calendars, posts, carousels, captions and ad creative, delivered under your brand. From 1 credit per post.',
    eyebrow: 'White-label marketing',
    h1: ['White-label social media', 'marketing'],
    lede: 'Content calendars, posts, carousels and ad creative for your clients, delivered under your brand.',
    statement: ['Keep every client’s feed full', 'without adding to your team.'],
    sub: 'We plan, design and write the content. You approve it and stay the face of the account.',
    groups: [
      {
        title: 'Plan',
        items: [
          { icon: 'calendar', title: 'Content calendars', text: 'A month of posts planned around the client’s goals.' },
          { icon: 'pen', title: 'Captions and copy', text: 'Written for each platform in the client’s voice.' },
          { icon: 'search', title: 'Research', text: 'What competitors post and what their audience likes.' },
          { icon: 'chart', title: 'Monthly reporting', text: 'What worked, in your agency’s format.' },
        ],
      },
      {
        title: 'Create',
        items: [
          { icon: 'image', title: 'Posts', text: 'Static posts sized for every platform.' },
          { icon: 'grid', title: 'Carousels', text: 'Up to 10 slides per carousel.' },
          { icon: 'megaphone', title: 'Ad creative', text: 'Sets in three sizes for paid campaigns.' },
          { icon: 'badge', title: 'Brand templates', text: 'Reusable templates for faster turnaround.' },
        ],
      },
      {
        title: 'How it works',
        items: [
          { icon: 'refresh', title: 'Monthly plans', text: 'A set number of credits, unused ones roll over.' },
          { icon: 'clock', title: 'Fast turnaround', text: 'Posts in 24–48 hours once briefed.' },
          { icon: 'shield', title: 'NDA first', text: 'Signed before you share any client details.' },
          { icon: 'file', title: 'Source files', text: 'Editable files for every post, yours to keep.' },
        ],
      },
    ],
    pointsTitle: ['How social content works', 'with Groflex'],
    points: [
      {
        title: 'One calendar per client',
        text: 'We plan the month ahead and share it for approval before anything is designed.',
      },
      {
        title: 'Priced per post',
        text: `A post or ad set is ${cr('Social post or ad set (3 sizes)')} credit and a carousel is ${cr('Carousel (up to 10 slides)')}, so a month of content has a known cost you can mark up.`,
      },
      {
        title: 'On brand, every time',
        text: 'We work from each client’s brand kit and build templates, so every post looks like it came from the same team.',
      },
      {
        title: 'You stay the face',
        text: 'Everything goes out under your agency’s name. We never contact your client.',
      },
    ],
    credits: ['Social post or ad set (3 sizes)', 'Carousel (up to 10 slides)', 'Brand identity kit'],
    systems: [],
    faq: [
      {
        q: 'How much does white-label social media content cost?',
        a: `A post or ad set in three sizes is ${cr('Social post or ad set (3 sizes)')} credit and a carousel is ${cr('Carousel (up to 10 slides)')}. For example, 12 posts and 4 carousels a month is ${12 * cr('Social post or ad set (3 sizes)') + 4 * cr('Carousel (up to 10 slides)')} credits, the size of our ${plans[0].name} plan at ${money(plans[0].price)} a month.`,
      },
      {
        q: 'Do you write the captions too?',
        a: 'Yes. Captions and copy are written with the content, in each client’s tone of voice.',
      },
      {
        q: 'Which platforms do you create for?',
        a: 'Instagram, Facebook, LinkedIn and X, in the sizes each one needs.',
      },
      {
        q: 'Can we approve content before it goes out?',
        a: 'Always. You see the calendar first and every post before delivery, with two revision rounds included.',
      },
      {
        q: 'Is there a minimum commitment?',
        a: 'No. Use a credit pack for a one-off month, or a monthly plan you can pause or cancel before the next billing date.',
      },
      clientsNeverKnow,
    ],
    related: ['white-label-graphic-design', 'white-label-seo', 'white-label-automation', 'white-label-web-design'],
  },
];

// ---- Market pages ----
export const marketPages = [
  {
    slug: 'white-label-agency-uk',
    kind: 'market',
    currency: 'gbp',
    name: 'For UK agencies',
    title: 'White-Label Agency Partner for UK Agencies — Groflex',
    description: `A white-label design, development and marketing team for UK agencies. Priced in pounds, same-day replies in UK hours, under your brand and NDA. Pilot: pay ${money(pilot.price, 'gbp')} only if you like it.`,
    eyebrow: 'For UK agencies',
    h1: ['White-label agency partner', 'for UK agencies'],
    lede: 'Design, development and marketing for your clients, priced in pounds and delivered in your working day.',
    statement: ['A UK agency’s extra team,', 'without UK salaries.'],
    sub: 'Brief us in the morning, get replies the same day and send the work out under your agency’s name.',
    pointsTitle: ['Built for', 'UK agencies'],
    points: [
      {
        title: 'Priced in pounds',
        text: `Every plan, pack and build has a set GBP price, not a converted one. The pilot is ${money(pilot.price, 'gbp')} and monthly plans start at ${money(plans[0].price, 'gbp')}.`,
      },
      {
        title: 'Your working day',
        text: 'Our team overlaps at least four working hours with the UK, so briefs and feedback get same-day replies.',
      },
      {
        title: 'Simple payment',
        text: 'Pay by card or bank transfer. Plans and packs are paid upfront, and the pilot only after you approve the work.',
      },
      {
        title: 'NDA before details',
        text: 'We sign your NDA before you share a single client detail, and we never contact your clients.',
      },
    ],
    faq: [
      {
        q: 'Can we pay in pounds?',
        a: `Yes. Every plan, pack and build has a set GBP price. The pilot is ${money(pilot.price, 'gbp')}, credit packs start at ${money(pricing.packs[0].price, 'gbp')} and monthly plans at ${money(plans[0].price, 'gbp')}.`,
      },
      {
        q: 'Do you work UK hours?',
        a: 'Our team overlaps at least four working hours with the UK working day, so you get same-day replies on briefs and feedback.',
      },
      {
        q: 'How does the pilot work?',
        a: `We deliver ${pilot.credits} credits of real client work, such as a landing page or a brand kit. You pay ${money(pilot.price, 'gbp')} only if you like it, and the fee can count towards a plan.`,
      },
      {
        q: 'Can you work inside our tools?',
        a: 'Yes. We work in your Slack, ClickUp, Jira or Asana, so the work shows up where your team already looks.',
      },
      {
        q: 'How does it compare with hiring?',
        a: `A monthly plan starts at ${money(plans[0].price, 'gbp')} with no recruitment, notice periods or employer costs, and you can pause it in a quiet month.`,
      },
      clientsNeverKnow,
    ],
  },
  {
    slug: 'white-label-agency-usa',
    kind: 'market',
    currency: 'usd',
    name: 'For US agencies',
    title: 'White-Label Agency Partner for US Agencies — Groflex',
    description: `A white-label design, development and marketing team for US agencies. Same-day replies in US Eastern hours, under your brand and NDA. Pilot: pay ${money(pilot.price)} only if you like it.`,
    eyebrow: 'For US agencies',
    h1: ['White-label agency partner', 'for US agencies'],
    lede: 'Design, development and marketing for your clients, delivered under your brand for a fraction of a US hire.',
    statement: ['Your agency’s extra team,', 'at a fraction of a US hire.'],
    sub: 'Brief us in your morning, get replies the same day and send the work out under your agency’s name.',
    pointsTitle: ['Built for', 'US agencies'],
    points: [
      {
        title: 'Priced in dollars',
        text: `Clear USD prices for everything. The pilot is ${money(pilot.price)} and monthly plans start at ${money(plans[0].price)}, month to month.`,
      },
      {
        title: 'US Eastern overlap',
        text: 'Our team overlaps at least four working hours with US Eastern time, so briefs and feedback get same-day replies.',
      },
      {
        title: 'Simple payment',
        text: 'Pay by card or bank transfer. Plans and packs are paid upfront, and the pilot only after you approve the work.',
      },
      {
        title: 'NDA before details',
        text: 'We sign your NDA before you share a single client detail, and we never contact your clients.',
      },
    ],
    showHiring: true,
    faq: [
      {
        q: 'Which US time zones do you cover?',
        a: 'Our team overlaps at least four working hours with US Eastern time, so briefs and feedback get same-day replies.',
      },
      {
        q: 'How does the pilot work?',
        a: `We deliver ${pilot.credits} credits of real client work, such as a landing page or a brand kit. You pay ${money(pilot.price)} only if you like it, and the fee can count towards a plan.`,
      },
      {
        q: 'How much cheaper is it than hiring?',
        a: `A senior designer, a developer and QA cost a US agency around $330,000 a year with benefits. Our monthly plans start at ${money(plans[0].price)} a month, with no recruitment and no payroll in a quiet month.`,
      },
      {
        q: 'Can you work inside our tools?',
        a: 'Yes. We work in your Slack, ClickUp, Jira or Asana, so the work shows up where your team already looks.',
      },
      {
        q: 'How do we pay?',
        a: 'By card or bank transfer, in US dollars. Plans and packs are paid upfront, and the pilot only after you approve the work.',
      },
      clientsNeverKnow,
    ],
  },
];

export const landingPages = [...servicePages, ...marketPages];

export const findLandingPage = (slug) => landingPages.find((p) => p.slug === slug);
