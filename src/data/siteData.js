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
    title: 'Incorpo - Recruitement SaaS Product',
    category: 'HR Tech',
    description: 'A comprehensive SaaS platform streamlining the recruitment process for modern HR teams.',
    caseStudy: {
      problem: 'Manual hiring processes were slow and error-prone.',
      solution: 'Automated candidate screening and interview scheduling.',
      impact: 'Reduced time-to-hire by 40%, saving $50k/year.',
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
      problem: 'Outdated website failed to capture brand energy.',
      solution: 'Created an immersive, video-first digital experience.',
      impact: 'Increased client inquiries by 65% in 3 months.',
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
      problem: 'Inventory tracking was disorganized and paper-based.',
      solution: 'Built a centralized digital dashboard for real-time tracking.',
      impact: 'Prevented stockouts and increased sales volume by 25%.',
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
      problem: 'Users struggled to track daily micro-expenses.',
      solution: 'Developed a mobile-first expense logger with smart categories.',
      impact: 'Grew active user base to 10k+ within first month.',
    },
    color: '#7b341e',
    image: pocketwatcher,
  },
  {
    id: 5,
    title: 'RPM Dynamics - Bike shop website',
    category: 'E-Commerce',
    description: 'An online store and brand showcase for high-performance bike parts and accessories.',
    caseStudy: {
      problem: 'Low conversion rate on mobile devices.',
      solution: 'Optimized mobile checkout and product visualization.',
      impact: 'Boosted mobile conversion rate by 150%.',
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
      problem: 'Difficulty in showcasing complex service offerings.',
      solution: 'Designed interactive service maps and case study layouts.',
      impact: 'Secured 3 major enterprise contracts post-launch.',
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
