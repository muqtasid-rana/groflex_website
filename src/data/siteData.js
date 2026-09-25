// ============================================================
// Site Data — Groflex Agency
// ============================================================

import incorp from '@/assets/projects/incorpo.webp';
import hybrid from '@/assets/projects/hybrid-mediaworks.webp';
import inayat from '@/assets/projects/inayat-motors.webp';
import pocketwatcher from '@/assets/projects/pocket-watcher.webp';
import rpmm from '@/assets/projects/rpm-dynamics.webp';
import testolz from '@/assets/projects/testolz.webp';
import ashhkaro from '@/assets/case-studies/ashhkaro/hero.webp';
import ashhkaroIcon from '@/assets/case-studies/ashhkaro/icon.webp';
import slashcure from '@/assets/case-studies/slashcure/landing.webp';
import incorpoShowcase from '@/assets/case-studies/incorpo/laptop-mockup.webp';
import incorpoLanding from '@/assets/case-studies/incorpo/landing-mockup.webp';
import slashcureShowcase from '@/assets/case-studies/slashcure/hero.webp';
import slashcureLanding from '@/assets/case-studies/slashcure/landing-mockup.webp';
import ashhkaroLogo from '@/assets/logos/ashhkaro.webp';
import incorpoLogo from '@/assets/logos/incorpo.webp';
import slashcureLogo from '@/assets/logos/slashcure.webp';
import himavonLogo from '@/assets/logos/himavon.webp';
import agenstackLogo from '@/assets/logos/agenstack.webp';
import atlenoLogo from '@/assets/logos/atleno.webp';
import PlateLogo from '@/sections/Agency/logos/PlateLogo';

// Client logos in the home page hero. Use trimmed logos on a transparent
// background (`logo`), or a vector component (`Svg`); the page turns them all
// into one flat grey. `scale` evens out logos that look too heavy or too light
// at the shared height. `href` makes a logo clickable: a /path for our case
// studies, a full URL for the client's own site (opens in a new tab).
export const clientLogos = [
  { name: 'Ashhkaro', logo: ashhkaroLogo, href: '/case-study/ashhkaro' },
  { name: 'Incorpo', logo: incorpoLogo, scale: 0.8, href: '/case-study/incorpo' },
  { name: 'Slashcure', logo: slashcureLogo, scale: 1.25, href: '/case-study/slashcure' },
  { name: 'Plate', Svg: PlateLogo, href: 'https://play.google.com/store/apps/details?id=com.plateapp.plate' },
  { name: 'Himavon', logo: himavonLogo, scale: 1.4 },
  { name: 'Agenstack', logo: agenstackLogo, scale: 0.85 },
  { name: 'Atleno', logo: atlenoLogo, scale: 1.3, href: 'https://atleno.com' },
];

// Links with `dropdown` open a mega-menu panel instead of navigating
export const navLinks = [
  { label: 'Services', dropdown: 'services' },
  { label: 'Customers', dropdown: 'customers' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '#contact' },
];

// Customers shown in the navbar dropdown. Set `logo` to an imported image
// to replace the text wordmark; set `image` for the thumbnail.
export const navCustomers = [
  {
    id: 'ashhkaro',
    name: 'Ashhkaro',
    logo: null,
    image: ashhkaro,
    description: 'Taking an all-in-one platform for Pakistan from vision to a live Android app.',
    href: '/case-study/ashhkaro',
  },
  {
    id: 'slashcure',
    name: 'Slashcure',
    logo: null,
    image: slashcure,
    description: 'Patient records, doctors and hospitals on one secure platform.',
    href: '/case-study/slashcure',
  },
  {
    id: 'incorpo',
    name: 'Incorpo',
    logo: null,
    image: incorp,
    description: 'Hiring, payroll, attendance and training on one HR platform.',
    href: '/case-study/incorpo',
  },
  {
    id: 'brainix',
    name: 'Brainix',
    logo: null,
    image: null,
    description: 'Case study coming soon.',
    href: '#work',
  },
];

// `href` is the service's own page (Project Management has none, so it points at the process)
export const services = {
  design: [
    {
      id: 'd1',
      href: '/white-label-web-design',
      icon: 'fa-solid fa-palette',
      title: 'UI/UX Design',
      description: 'Creating intuitive, user-centered interfaces that elevate your digital products and deliver exceptional experiences.',
    },
    {
      id: 'd2',
      href: '/white-label-graphic-design',
      icon: 'fa-solid fa-bezier-curve',
      title: 'Brand Identity',
      description: 'Crafting visual identities and assets that define your brand and make it unforgettable in a crowded marketplace.',
    },
    {
      id: 'd3',
      href: '/white-label-graphic-design',
      icon: 'fa-solid fa-pen-nib',
      title: 'Graphic Design',
      description: 'Designing compelling visuals from marketing materials to social media assets that captivate your audience.',
    },
    {
      id: 'd4',
      href: '/white-label-web-design',
      icon: 'fa-solid fa-mobile-screen-button',
      title: 'App/Web Design',
      description: 'Designing mobile and web experiences that are intuitive, beautiful, and aligned with platform-specific guidelines.',
    },
  ],
  development: [
    {
      id: 'v1',
      href: '/white-label-web-development',
      icon: 'fa-solid fa-code',
      title: 'Web Development',
      description: 'Building fast, scalable web applications using modern frameworks and best practices.',
    },
    {
      id: 'v2',
      href: '/white-label-app-development',
      icon: 'fa-solid fa-mobile-screen',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps that deliver seamless performance on every device.',
    },
    {
      id: 'v3',
      href: '/white-label-app-development',
      icon: 'fa-solid fa-layer-group',
      title: 'SaaS Application',
      description: 'Custom SaaS platforms that scale with your business, featuring secure authentication, subscription management, and automated workflows.',
    },
    {
      id: 'v4',
      href: '/white-label-web-development',
      icon: 'fa-solid fa-gears',
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs, with clean code, scalable architecture, and long-term support.',
    },
  ],
  growth: [
    {
      id: 'g1',
      href: '/white-label-social-media-marketing',
      icon: 'fa-solid fa-bullhorn',
      title: 'Social Media Marketing',
      description: 'Growing your audience with content calendars, paid campaigns and community management, measured against the numbers that matter to your business.',
    },
    {
      id: 'g2',
      href: '/white-label-seo',
      icon: 'fa-solid fa-magnifying-glass-chart',
      title: 'SEO',
      description: 'Getting you found on Google, with technical fixes, content that ranks and reporting on the searches that bring customers in.',
    },
    {
      id: 'g3',
      href: '/white-label-automation',
      icon: 'fa-solid fa-diagram-project',
      title: 'Automation',
      description: 'Taking repetitive work off your team, from lead follow-ups and reports to workflows that connect the tools you already use.',
    },
    {
      id: 'g4',
      href: '/#process',
      icon: 'fa-solid fa-list-check',
      title: 'Project Management',
      description: 'A dedicated manager who plans the work, runs the timeline and keeps you updated, so every project ships on time without you chasing it.',
    },
  ],
};

export const whyChooseUs = [
  {
    id: 1,
    icon: 'fa-solid fa-users-gear',
    title: 'Team of Experts',
    description: 'Our expert team members includes senior designers, engineers, and strategists with years of industry experience.',
  },
  {
    id: 2,
    icon: 'fa-solid fa-handshake',
    title: 'Transparent Work',
    description: 'Full visibility into every phase of your project. Regular updates, shared timelines, and open communication channels.',
  },
  {
    id: 3,
    icon: 'fa-solid fa-rocket',
    title: 'Fast Delivery',
    description: 'Agile methodology ensures rapid iteration and on-time delivery without sacrificing quality or attention to detail.',
  },
  {
    id: 4,
    icon: 'fa-solid fa-shield-halved',
    title: 'Quality Guaranteed',
    description: 'Rigorous code reviews, automated testing, and quality assurance processes that ensure rock-solid products.',
  },
  {
    id: 5,
    icon: 'fa-solid fa-headset',
    title: '24/7 Support',
    description: 'Dedicated support team available around the clock. We don\'t disappear after launch — we grow with you.',
  },
  {
    id: 6,
    icon: 'fa-solid fa-chart-line',
    title: 'Data-Driven',
    description: 'Every design and development decision is backed by analytics, user research, and measurable business outcomes.',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Incorpo - HR Platform',
    category: 'HR Tech',
    description: 'An HR platform that runs hiring, people, attendance, payroll, performance and training on one employee record.',
    caseStudy: {
      overview: 'A client approached us with the vision to build a recruitment SaaS product for the open market — a platform any company could use to streamline their hiring process from job posting to onboarding, without the overhead of building their own tools.',
      challenge: 'Most existing recruitment tools were either expensive enterprise solutions or basic job boards with no workflow automation. There was a clear gap in the market for an affordable, full-featured hiring platform that small and mid-sized companies could adopt instantly.',
      approach: 'We worked closely with the client to define the product vision, then conducted stakeholder interviews with HR managers across industries to map common pain points. We designed an AI-assisted pipeline that automates screening, scoring, and scheduling while keeping humans in the loop for final decisions.',
      solution: 'We built a full-stack SaaS platform with smart candidate scoring powered by NLP, automated interview scheduling with calendar integration, a real-time collaboration dashboard for hiring teams, and a branded career portal builder that any company can customize for their brand.',
      results: [
        { value: '40%', label: 'Reduction in time-to-hire' },
        { value: '$50K', label: 'Annual cost savings per client' },
        { value: '3x', label: 'More candidates processed' },
        { value: '92%', label: 'User satisfaction score' },
      ],
      testimonial: {
        quote: 'Groflex took my idea and turned it into a real product that companies are now using daily. Their execution was flawless and they kept me updated every step of the way.',
        author: 'Product Owner',
        role: 'Founder, Incorpo',
      },
      timeline: '6 weeks',
    },
    color: '#1e3a5f',
    image: incorp,
  },
  {
    id: 2,
    title: 'Hybrid MediaWorks Website',
    category: 'Software Development',
    description: 'A modern corporate website for a software development company, showcasing their services and portfolio.',
    caseStudy: {
      overview: 'Hybrid MediaWorks, a software development company, needed a website that reflected their technical expertise and the quality of their development work — clean, professional, and high-performing.',
      challenge: 'Their existing website was outdated, slow, and failed to showcase their projects effectively. Bounce rates were high at 78%, and client inquiries had dropped 40% over the previous year. The site didn\'t represent the caliber of software solutions they deliver.',
      approach: 'We started with competitive analysis of top software companies worldwide, then designed a portfolio-driven experience with smooth transitions. Performance was a priority — we used lazy loading, optimized assets, and edge caching.',
      solution: 'We delivered a fully responsive website featuring a polished portfolio gallery with category filtering and project previews, a services breakdown that clearly communicates their capabilities, a dynamic testimonials carousel, and a streamlined contact flow that reduced friction by 60%.',
      results: [
        { value: '55%', label: 'Increase in client inquiries' },
        { value: '45%', label: 'Lower bounce rate' },
        { value: '2.5x', label: 'Longer avg. session duration' },
        { value: '12', label: 'New enterprise clients in 3 months' },
      ],
      testimonial: {
        quote: 'Our new website finally does justice to our work. The team at Groflex understood our vision and delivered beyond expectations.',
        author: 'James Rodriguez',
        role: 'CEO, Hybrid MediaWorks',
      },
      timeline: '3 weeks',
    },
    color: '#1a4731',
    image: hybrid,
  },
  {
    id: 3,
    title: 'Inayat Motors - Bike Shop Management System',
    category: 'Inventory System',
    description: 'A custom management system for tracking inventory, sales, and customer data.',
    caseStudy: {
      overview: 'Inayat Motors, a growing motorcycle dealership, needed to replace their paper-based inventory and sales tracking with a digital solution that could scale with their multi-location expansion.',
      challenge: 'The business was losing revenue due to inventory mismanagement — stockouts on popular models, overstock on slow movers, and no visibility into cross-location inventory. Sales records were kept in notebooks, making financial reporting a nightmare.',
      approach: 'We embedded with the team for a week to understand their daily workflows. We then designed a system that mirrors how they naturally work, with minimal training required. We used a progressive rollout strategy — starting with one location before expanding.',
      solution: 'We built a custom management system with real-time inventory tracking across all locations with barcode scanning, an automated purchase order system triggered by low-stock thresholds, a sales dashboard with daily/weekly/monthly analytics, and a customer CRM with service history and follow-up reminders.',
      results: [
        { value: '25%', label: 'Increase in sales volume' },
        { value: '0', label: 'Stockout incidents per month' },
        { value: '80%', label: 'Faster financial reporting' },
        { value: '3', label: 'Locations now managed centrally' },
      ],
      testimonial: {
        quote: 'Before Groflex, we were running our business on spreadsheets and guesswork. Now everything is in one place and we can actually plan ahead. Loved the way they keep us updated on the progress.',
        author: 'Inayat Ali',
        role: 'Owner, Inayat Motors',
      },
      timeline: '4 weeks',
    },
    color: '#44337a',
    image: inayat,
  },
  {
    id: 4,
    title: 'Pocket Watcher - Fintech',
    category: 'Fintech',
    description: 'A personal finance website designed to help users manage budgets and track spending effortlessly.',
    caseStudy: {
      overview: 'Pocket Watcher aimed to become a go-to personal finance platform for millennials and Gen Z — a beautifully designed website that makes tracking expenses and managing money feel simple and engaging.',
      challenge: 'Existing finance platforms were either too complex (intimidating dashboards, jargon-heavy) or too simple (no real insights). The client needed a clean, modern web design that felt approachable while still delivering powerful financial tracking features.',
      approach: 'We ran user research with 100+ potential users aged 18-35, identifying that visual clarity and ease of navigation were the top priorities. We designed intuitive expense logging flows and gamified savings goals to drive engagement.',
      solution: 'We designed a fully responsive fintech website featuring an intuitive expense logging interface with smart category detection, visual spending breakdowns with weekly spending summaries, gamified savings challenges with progress tracking, and a clean dashboard design that makes financial data easy to understand at a glance.',
      results: [
        { value: '10K+', label: 'Visitors in month one' },
        { value: '4.8', label: 'User satisfaction rating' },
        { value: '73%', label: 'Monthly returning visitors' },
        { value: '40%', label: 'Users report saving more' },
      ],
      testimonial: {
        quote: 'Pocket Watcher made managing money actually fun. The Groflex team nailed the design — it\'s clean, intuitive, and our users love it.',
        author: 'Aisha Khan',
        role: 'Founder, Pocket Watcher',
      },
      timeline: '5 weeks',
    },
    color: '#7b341e',
    image: pocketwatcher,
  },
  {
    id: 5,
    title: 'RPM Dynamics - Bike Shop Website',
    category: 'E-Commerce',
    description: 'An online store and brand showcase for high-performance bike parts and accessories.',
    caseStudy: {
      overview: 'RPM Dynamics wanted to transition from a local bike parts shop to a national e-commerce brand. They needed a website that could handle complex product catalogs, deliver a premium shopping experience, and convert mobile browsers into buyers.',
      challenge: 'Their mobile conversion rate was a dismal 0.8% — most users abandoned at checkout. The product pages lacked detail, images were low quality, and the checkout flow required 7 steps to complete. Desktop performed slightly better, but overall revenue from online sales was declining.',
      approach: 'We analyzed 3 months of analytics data and identified the top 5 drop-off points. Then we redesigned the entire purchase journey, focusing on reducing friction at each step. We also implemented A/B testing to iterate on product page layouts.',
      solution: 'We rebuilt the e-commerce experience with a streamlined 2-step checkout with Apple Pay and Google Pay integration, 360° product visualization with zoom and comparison features, a smart search with filters for bike model compatibility, and a mobile-first design with thumb-friendly navigation patterns.',
      results: [
        { value: '150%', label: 'Higher mobile conversion rate' },
        { value: '85%', label: 'Increase in average order value' },
        { value: '3x', label: 'More monthly online orders' },
        { value: '22%', label: 'Reduction in cart abandonment' },
      ],
      testimonial: {
        quote: 'Our online sales increased after the redesign. The mobile experience is now our strongest channel. Groflex delivered exactly what we needed.',
        author: 'Ahmad Raza',
        role: 'Founder, RPM Dynamics',
      },
      timeline: '4 weeks',
    },
    color: '#234e52',
    image: rpmm,
  },
  {
    id: 6,
    title: 'Testolz - Software Company Website',
    category: 'Corporate',
    description: 'A professional web presence for a software company highlighting services and portfolio.',
    caseStudy: {
      overview: 'Testolz, a B2B software testing company, needed a website that could clearly communicate their complex service offerings and position them as an enterprise-grade partner — ultimately driving qualified lead generation.',
      challenge: 'Despite having Fortune 500 clients, their website looked like it was built in 2010. Service descriptions were confusing, there was no social proof, and the contact form had a 2% conversion rate. They were losing deals to competitors with better online presence.',
      approach: 'We repositioned their messaging with a "clarity-first" approach — turning technical jargon into clear value propositions. We designed interactive elements that let prospects explore services at their own pace, building confidence before they reach out.',
      solution: 'We created a modern corporate website with interactive service maps that visualize testing workflows, animated case study cards with real client results, a resource center with whitepapers and ROI calculators, and an intelligent contact form with routing based on service interest.',
      results: [
        { value: '3', label: 'Major enterprise contracts post-launch' },
        { value: '180%', label: 'Increase in qualified leads' },
        { value: '45s', label: 'Avg. time to understand services' },
        { value: '8x', label: 'More whitepaper downloads' },
      ],
      testimonial: {
        quote: 'Groflex didn\'t just build us a website — they helped us rethink how we present ourselves to the market. The results speak for themselves.',
        author: 'David Chen',
        role: 'CEO, Testolz',
      },
      timeline: '3 weeks',
    },
    color: '#322659',
    image: testolz,
  },
];

// Work showcase. The home page features the first three (the first one gets
// the large tile); /work lists everything. `imagePosition` sets the crop focus;
// `homeImage` / `homeImagePosition` swap in a different picture on the home page only.
export const work = [
  {
    id: 'incorpo',
    name: 'Incorpo',
    category: 'HR Tech · SaaS',
    description: 'An HR platform that runs hiring, attendance, payroll, performance and training on one employee record.',
    image: incorpoShowcase,
    imagePosition: '45% 50%',
    homeImage: incorpoLanding,
    homeImagePosition: '0% 0%',
    href: '/case-study/incorpo',
    color: '#0b1030',
  },
  {
    id: 'ashhkaro',
    name: 'Ashhkaro',
    category: 'Mobile App',
    description: 'Taking an all-in-one platform for Pakistan from product vision to a live Android app.',
    image: ashhkaro,
    imagePosition: '75% 50%',
    homeImage: ashhkaroIcon,
    homeImagePosition: '50% 50%',
    href: '/case-study/ashhkaro',
    color: '#1a0303',
  },
  {
    id: 'slashcure',
    name: 'Slashcure',
    category: 'Healthcare',
    description: 'Patient records, verified doctors and live hospital pages on one secure platform.',
    image: slashcureShowcase,
    imagePosition: '75% 50%',
    homeImage: slashcureLanding,
    homeImagePosition: '0% 0%',
    href: '/case-study/slashcure',
    color: '#1e2a4a',
  },
  // Incorpo (id 1) is already featured above
  ...projects.filter((p) => p.id !== 1).map((p) => ({
    id: String(p.id),
    name: p.title.split(' - ')[0],
    category: p.category,
    description: p.description,
    image: p.image,
    imagePosition: '50% 0%',
    href: `/case-study/${p.id}`,
    color: p.color,
  })),
];

// The three featured case studies, with their home-page cover pictures swapped in
export const featuredWork = work.slice(0, 3).map((project) => (
  project.homeImage
    ? { ...project, image: project.homeImage, imagePosition: project.homeImagePosition }
    : project
));

export const stats = [
  { id: 1, number: 20, suffix: '+', label: 'Projects Delivered' },
  { id: 2, number: 98, suffix: '%', label: 'Client Satisfaction' },
  { id: 3, number: 5, suffix: '+', label: 'Years Experience' },
  { id: 4, number: 15, suffix: '+', label: 'Team Members' },
];

export const processSteps = [
  {
    id: 1,
    step: '01',
    icon: 'fa-solid fa-magnifying-glass',
    title: 'Discovery',
    description: 'We dive deep into understanding your business, audience, goals, and competitive landscape.',
  },
  {
    id: 2,
    step: '02',
    icon: 'fa-solid fa-compass-drafting',
    title: 'Design',
    description: 'Wireframes, prototypes, and pixel-perfect designs crafted to align with your brand identity.',
  },
  {
    id: 3,
    step: '03',
    icon: 'fa-solid fa-laptop-code',
    title: 'Develop',
    description: 'Clean, scalable code built with modern frameworks and best engineering practices.',
  },
  {
    id: 4,
    step: '04',
    icon: 'fa-solid fa-rocket',
    title: 'Launch',
    description: 'Thorough testing, seamless deployment, and ongoing optimization post-launch.',
  },
];

export const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/groflex.co', icon: 'fa-brands fa-instagram' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/groflex-co', icon: 'fa-brands fa-linkedin-in' },
  // { label: 'Facebook', href: 'https://facebook.com', icon: 'fa-brands fa-facebook-f' },
  { label: 'WhatsApp', href: 'https://wa.me/+923359528776', icon: 'fa-brands fa-whatsapp' },
];

// ---- Pricing (/pricing) ----
// Every price is kept in both currencies so the GBP figures stay round
// instead of converted. 1 credit ≈ 4 production hours.
// "a" or "an" before a number as spoken: an 8, an 11, an 18, an 80…; a 10, a 25
export const aOrAn = (n) => (/^(8|11|18)/.test(String(n)) ? 'an' : 'a');

// A { usd, gbp } price as text in one currency: $2,400 or £1,900
export const money = (price, currency = 'usd') =>
  currency === 'gbp' ? `£${price.gbp.toLocaleString('en-GB')}` : `$${price.usd.toLocaleString('en-US')}`;

export const pricing = {
  pilot: {
    credits: 8,
    price: { usd: 750, gbp: 595 },
    examples: ['A landing page, designed and built', 'A brand identity kit', '4 app screens'],
  },

  // Fixed-price builds. `example` links a tier to its case study.
  systems: [
    {
      id: 'prototype',
      name: 'Clickable Prototype',
      price: { usd: 2500, gbp: 1950 },
      timeline: '1–2 weeks',
      description: 'Up to 15 designed screens in a clickable flow, ready for investors or user testing.',
    },
    {
      id: 'system',
      name: 'Business System',
      price: { usd: 6000, gbp: 4700 },
      timeline: '3–5 weeks',
      description: 'Inventory, CRM, booking or reporting systems with user roles and an admin panel.',
      example: { name: 'Inayat Motors', href: '/case-study/3', image: inayat },
    },
    {
      id: 'saas',
      name: 'SaaS / Web App MVP',
      price: { usd: 9000, gbp: 7000 },
      timeline: '4–6 weeks',
      popular: true,
      description: 'Sign-up and login, your core features, subscription billing and an admin panel.',
      example: { name: 'Incorpo', href: '/case-study/incorpo', image: incorp },
    },
    {
      id: 'mobile',
      name: 'Mobile App',
      price: { usd: 12000, gbp: 9400 },
      timeline: '6–8 weeks',
      description: 'One cross-platform app for iOS and Android, with its backend and store submission.',
      example: { name: 'Ashhkaro', href: '/case-study/ashhkaro', image: ashhkaro },
    },
    {
      id: 'platform',
      name: 'Full Platform',
      price: { usd: 18000, gbp: 14000 },
      timeline: '8–12 weeks',
      description: 'Web app, mobile app and admin panel, with multiple user types and third-party integrations.',
      example: { name: 'Slashcure', href: '/case-study/slashcure', image: slashcure },
    },
  ],
  systemsIncluded: ['White-label handover', 'Full source code ownership', 'Documentation', 'QA testing', '30 days post-launch support'],
  appCare: { price: { usd: 500, gbp: 395 } },

  packs: [
    { credits: 10, price: { usd: 1300, gbp: 1000 } },
    { credits: 25, price: { usd: 3000, gbp: 2350 } },
  ],
  packValidityDays: 90,

  // What a credit buys. `credits` is the cost of one item; items marked
  // `estimator` also appear in the monthly estimator.
  creditMenu: {
    Design: [
      { label: 'Social post or ad set (3 sizes)', credits: 1, estimator: true },
      { label: 'Carousel (up to 10 slides)', credits: 2, estimator: true },
      { label: 'App screen design', credits: 2, estimator: true },
      { label: 'Web page design', credits: 3, estimator: true },
      { label: 'Pitch deck (15 slides)', credits: 6 },
      { label: 'Logo (3 concepts)', credits: 6, estimator: true },
      { label: 'Brand identity kit', credits: 15 },
    ],
    Development: [
      { label: 'Dev task or bug fix', credits: 1, estimator: true },
      { label: 'Email template, designed and built', credits: 2 },
      { label: 'Web page build (WordPress or Next.js)', credits: 3 },
      { label: 'Landing page, designed and built', credits: 8, estimator: true },
      { label: '5-page website, designed and built', credits: 20 },
      { label: 'Shopify store setup', credits: 25 },
    ],
    Growth: [
      { label: 'Automation workflow (Zapier, Make, n8n)', credits: 6, estimator: true },
      { label: 'Technical SEO audit', credits: 6 },
    ],
  },

  plans: [
    {
      id: 'studio',
      name: 'Studio',
      price: { usd: 2400, gbp: 1900 },
      credits: 20,
      rollover: 5,
      features: ['Shared design and dev team', '48-hour turnaround on small tasks', 'Slack and email support'],
    },
    {
      id: 'growth',
      name: 'Growth',
      price: { usd: 4950, gbp: 3900 },
      credits: 45,
      rollover: 10,
      popular: true,
      features: ['Dedicated designer and developer', 'Project manager', '24–48 hour turnaround, priority queue'],
    },
    {
      id: 'scale',
      name: 'Scale',
      price: { usd: 8900, gbp: 6900 },
      credits: 90,
      rollover: 20,
      features: ['Dedicated team: PM, 2 designers, 2 developers, QA', 'Weekly check-in call', 'Fastest turnaround'],
    },
  ],
  dedicatedTeam: { perPerson: { usd: 2200, gbp: 1750 } },

  // Resale examples. Credit items are costed at the Growth rate; `systemId`
  // items use that build's starting price.
  margin: [
    { label: 'Landing page', sell: { usd: 4000, gbp: 3200 }, credits: 8 },
    { label: 'Brand identity kit', sell: { usd: 5000, gbp: 4000 }, credits: 15 },
    { label: 'SaaS MVP', sell: { usd: 40000, gbp: 32000 }, systemId: 'saas' },
  ],

  included: [
    { icon: 'fa-solid fa-tag', title: 'White-label', text: 'No Groflex branding anywhere. The work goes out as yours.' },
    { icon: 'fa-solid fa-file-signature', title: 'NDA first', text: 'Signed before you share a single client detail.' },
    { icon: 'fa-brands fa-slack', title: 'Your tools', text: 'We work inside your Slack, ClickUp, Jira or Asana.' },
    { icon: 'fa-solid fa-folder-open', title: 'Source files', text: 'Figma files and code are yours on delivery.' },
    { icon: 'fa-solid fa-user-shield', title: 'Invisible to clients', text: 'We never contact your client unless you ask us to.' },
    { icon: 'fa-solid fa-rotate', title: 'Rollover and pause', text: 'Unused credits carry over. Pause a quiet month.' },
  ],

  steps: [
    { title: 'Start', text: 'Begin with a pilot, a pack, a plan or a build quote.' },
    { title: 'Brief', text: 'Drop the brief in your shared Slack channel.' },
    { title: 'Delivery', text: 'Small tasks land in 24–48 hours, builds on a fixed timeline.' },
    { title: 'Revise', text: 'Two revision rounds included on every deliverable.' },
  ],

  faq: [
    { q: 'What is a credit?', a: 'A credit is a fixed unit of work, roughly four hours of senior design or development time. Every deliverable has a set credit cost, so you know the price before we start.' },
    { q: 'What if we don’t like the pilot?', a: 'Then you don’t pay. There is no upfront payment for the pilot. You only pay once you’ve seen the work and liked it.' },
    { q: 'How many revisions are included?', a: 'Two revision rounds on every deliverable. A change to the original brief counts as new work and is quoted in credits first.' },
    { q: 'Can we get work faster?', a: 'Yes. Rush delivery in under 24 hours costs 1.5× the normal credits.' },
    { q: 'What happens to unused credits?', a: 'On a monthly plan, unused credits roll over up to your plan’s limit. Credits from a pack stay valid for 90 days.' },
    { q: 'Can we pause or cancel?', a: 'Plans are month to month. You can pause for a quiet month or cancel before your next billing date. Commit to three months and you get 10% off.' },
    { q: 'How are systems and apps billed?', a: 'Each build gets a fixed quote within 48 hours, billed in milestones: 40% to start, 30% at the midpoint and 30% on delivery. Agencies on a monthly plan can also pay with credits at their plan rate.' },
    { q: 'Will our clients know about Groflex?', a: 'No. We sign an NDA, deliver without our branding and never contact your clients unless you ask us to.' },
    { q: 'Which time zones do you cover?', a: 'Our team overlaps at least four working hours with the UK and US Eastern time, so you get same-day replies.' },
    { q: 'How do we pay?', a: 'By card or bank transfer. Plans and packs are paid upfront. The pilot is paid only after you approve the work.' },
  ],
};


// ---- Team (home page carousel) ----
// TODO: placeholders. Fill in real names and import a photo for `image`;
// cards without a photo show the role's initials instead.
export const team = [
  { name: '', role: 'Design Lead', image: null },
  { name: '', role: 'Engineering Lead', image: null },
  { name: '', role: 'Project Manager', image: null },
  { name: '', role: 'Mobile Developer', image: null },
  { name: '', role: 'QA Engineer', image: null },
  { name: '', role: 'Growth Lead', image: null },
];

// ---- Tally.so Form Config (single source of truth for all audit CTAs) ----
export const tallyFormConfig = {
  formId: '5BLG8d',
  layout: 'modal',
  width: 676,
  hideTitle: 1,
  autoClose: 2500,
};
