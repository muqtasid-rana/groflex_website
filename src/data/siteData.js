// ============================================================
// Site Data — Groflex Agency
// ============================================================

import incorp from '../assets/incorp.png';
import hybrid from '../assets/hybrid.jpeg';
import inayat from '../assets/inayat.png';
import pocketwatcher from '../assets/pocketwatcher finance.jpeg';
import rpmm from '../assets/rpmm.png';
import testolz from '../assets/testolz.jpeg';

export const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const services = {
  design: [
    {
      id: 'd1',
      icon: 'fa-solid fa-palette',
      title: 'UI/UX Design',
      description: 'Creating intuitive, user-centered interfaces that elevate your digital products and deliver exceptional experiences.',
    },
    {
      id: 'd2',
      icon: 'fa-solid fa-bezier-curve',
      title: 'Brand Identity',
      description: 'Crafting visual identities and assets that define your brand and make it unforgettable in a crowded marketplace.',
    },
    {
      id: 'd3',
      icon: 'fa-solid fa-pen-nib',
      title: 'Graphic Design',
      description: 'Designing compelling visuals from marketing materials to social media assets that captivate your audience.',
    },
    {
      id: 'd4',
      icon: 'fa-solid fa-mobile-screen-button',
      title: 'App Design',
      description: 'Designing mobile experiences that are intuitive, beautiful, and aligned with platform-specific guidelines.',
    },
  ],
  development: [
    {
      id: 'v1',
      icon: 'fa-solid fa-code',
      title: 'Web Development',
      description: 'Building fast, scalable web applications using modern frameworks and best practices.',
    },
    {
      id: 'v2',
      icon: 'fa-solid fa-mobile-screen',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps that deliver seamless performance on every device.',
    },
    {
      id: 'v3',
      icon: 'fa-solid fa-server',
      title: 'Backend & APIs',
      description: 'Robust backend architectures and RESTful APIs that power your applications at scale.',
    },
    {
      id: 'v4',
      icon: 'fa-solid fa-cloud',
      title: 'Cloud & DevOps',
      description: 'Cloud infrastructure, CI/CD pipelines, and deployment automation for enterprise reliability.',
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
    title: 'Incorpo - Recruitment SaaS Product',
    category: 'HR Tech',
    description: 'A comprehensive SaaS platform streamlining the recruitment process for modern HR teams.',
    caseStudy: {
      overview: 'Incorpo needed a modern recruitment platform that could handle end-to-end hiring workflows — from job posting to onboarding — while reducing manual overhead for HR teams managing hundreds of applicants daily.',
      challenge: 'The client\'s existing hiring process was entirely manual. Recruiters spent 60% of their time on repetitive tasks like resume screening, scheduling interviews, and sending status updates. This led to slow hiring cycles, missed candidates, and a poor employer brand experience.',
      approach: 'We conducted stakeholder interviews with 12 HR managers to map every friction point. Then we designed an AI-assisted pipeline that automates screening, scoring, and scheduling while keeping humans in the loop for final decisions.',
      solution: 'We built a full-stack SaaS platform with smart candidate scoring powered by NLP, automated interview scheduling with calendar integration, a real-time collaboration dashboard for hiring teams, and a branded career portal builder for each client.',
      results: [
        { value: '40%', label: 'Reduction in time-to-hire' },
        { value: '$50K', label: 'Annual cost savings per client' },
        { value: '3x', label: 'More candidates processed' },
        { value: '92%', label: 'User satisfaction score' },
      ],
      testimonial: {
        quote: 'Groflex transformed our hiring process. What used to take weeks now happens in days. The platform is intuitive and our HR team loves it.',
        author: 'Sarah Mitchell',
        role: 'VP of People, Incorpo',
      },
      timeline: '6 weeks',
    },
    color: '#1e3a5f',
    image: incorp,
  },
  {
    id: 2,
    title: 'Hybrid MediaWorks Website',
    category: 'Digital Media',
    description: 'A dynamic corporate website showcasing media services with high-impact visuals.',
    caseStudy: {
      overview: 'Hybrid MediaWorks, a leading digital media production house, needed a website that matched the energy and creativity of their work — immersive, fast, and visually stunning.',
      challenge: 'Their existing website was outdated, slow, and failed to showcase their portfolio effectively. Bounce rates were high at 78%, and client inquiries had dropped 40% over the previous year. The site didn\'t reflect the premium quality of their video and media production services.',
      approach: 'We started with competitive analysis of top media agencies worldwide, then designed a video-first experience with cinematic transitions. Performance was a priority — we used lazy loading, optimized media delivery, and edge caching.',
      solution: 'We delivered a fully responsive website featuring full-screen video backgrounds with smooth parallax scrolling, an interactive portfolio gallery with category filtering and lightbox previews, a dynamic testimonials carousel, and a streamlined contact flow that reduced friction by 60%.',
      results: [
        { value: '65%', label: 'Increase in client inquiries' },
        { value: '45%', label: 'Lower bounce rate' },
        { value: '2.5x', label: 'Longer avg. session duration' },
        { value: '12', label: 'New enterprise clients in 3 months' },
      ],
      testimonial: {
        quote: 'Our new website finally does justice to our creative work. The team at Groflex understood our vision from day one and delivered beyond expectations.',
        author: 'James Rodriguez',
        role: 'Creative Director, Hybrid MediaWorks',
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
        quote: 'Before Groflex, we were running our business on spreadsheets and guesswork. Now everything is in one place and we can actually plan ahead.',
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
    description: 'A personal finance tracker helping users manage budgets and investments on the go.',
    caseStudy: {
      overview: 'Pocket Watcher aimed to become the go-to personal finance app for millennials and Gen Z — simple enough for daily use, yet powerful enough to provide real financial insights and help users build better money habits.',
      challenge: 'Existing finance apps were either too complex (intimidating dashboards, jargon-heavy) or too simple (no real insights). The target audience wanted something that felt as easy as social media but actually helped them save money and track spending patterns.',
      approach: 'We ran user research with 200+ potential users aged 18-35, identifying that speed of entry and visual feedback were the top priorities. We designed a "3-tap expense log" flow and gamified savings goals to drive engagement and retention.',
      solution: 'We developed a cross-platform mobile app with a one-swipe expense logging with smart category detection, visual spending breakdowns with weekly spending "stories" (inspired by social media), gamified savings challenges with streak tracking, and bank integration for automatic transaction categorization.',
      results: [
        { value: '10K+', label: 'Active users in month one' },
        { value: '4.8', label: 'App Store rating' },
        { value: '73%', label: 'Monthly user retention' },
        { value: '40%', label: 'Users report saving more' },
      ],
      testimonial: {
        quote: 'Pocket Watcher made managing money actually fun. I check it more than my social media now. The Groflex team nailed the UX.',
        author: 'Aisha Khan',
        role: 'Early Adopter & Beta Tester',
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
        quote: 'Our online sales exploded after the redesign. The mobile experience is now our strongest channel. Groflex delivered exactly what we needed.',
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
  { label: 'Instagram', href: 'https://instagram.com/groflex_co', icon: 'fa-brands fa-instagram' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'fa-brands fa-linkedin-in' },
  { label: 'Facebook', href: 'https://facebook.com', icon: 'fa-brands fa-facebook-f' },
  { label: 'WhatsApp', href: 'https://wa.me/+923359528776', icon: 'fa-brands fa-whatsapp' },
];
