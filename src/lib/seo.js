import { pricing, socialLinks } from '@/data/siteData';

// The one canonical origin. Hard-coded rather than read from NEXT_PUBLIC_SITE_URL,
// which pointed the sitemap at the apex domain (a redirect) instead of www.
export const SITE_URL = 'https://www.groflex.co';
export const SITE_NAME = 'Groflex';

// The same sentence goes on every profile (LinkedIn, Clutch, directories), so
// search engines and AI models see one consistent description of the company.
export const ENTITY_DESCRIPTION =
  'Groflex is a white-label design, development and marketing team for UK and US agencies. ' +
  'We work under the agency’s brand and NDA, inside its tools, and never contact its clients.';

export const DEFAULT_OG_IMAGE = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'Groflex: white-label design, development and marketing team for UK and US agencies',
};

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const absoluteUrl = (path = '/') => new URL(path, SITE_URL).toString();

/**
 * Page metadata with a self-referencing canonical and complete Open Graph and
 * Twitter tags. A page's `openGraph` replaces the layout's rather than merging
 * with it, so every page has to carry its own image, url and site name.
 */
export function pageMetadata({ title, description, path, images, type = 'website', noindex = false }) {
  const ogImages = images?.length ? images : [DEFAULT_OG_IMAGE];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: SITE_NAME, type, images: ogImages },
    twitter: { card: 'summary_large_image', title, description, images: ogImages.map((i) => i.url) },
    ...(noindex && { robots: { index: false, follow: true } }),
  };
}

// ---- JSON-LD ----

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: SITE_NAME,
        url: SITE_URL,
        logo: { '@type': 'ImageObject', url: absoluteUrl('/favicon.png'), width: 500, height: 500 },
        image: absoluteUrl(DEFAULT_OG_IMAGE.url),
        description: ENTITY_DESCRIPTION,
        disambiguatingDescription:
          'Groflex at groflex.co is a white-label agency partner. It is not related to the grofleX invoicing software or to other companies named Groflex.',
        slogan: 'Your white-label design and development team.',
        founder: {
          '@type': 'Person',
          '@id': `${SITE_URL}/#founder`,
          name: 'Muqtasid Rana',
          jobTitle: 'Founder',
          worksFor: { '@id': ORG_ID },
        },
        email: 'muqtasid@groflex.co',
        telephone: '+923359528776',
        address: { '@type': 'PostalAddress', addressCountry: 'PK' },
        areaServed: [
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Country', name: 'United States' },
        ],
        knowsAbout: [
          'White-label web design',
          'White-label web development',
          'White-label app development',
          'White-label UI/UX design',
          'White-label branding',
          'White-label SEO',
          'Marketing automation',
          'WordPress development',
          'Next.js development',
          'Flutter app development',
          'SaaS MVP development',
        ],
        // Profiles only; the WhatsApp chat link isn't one
        sameAs: socialLinks.filter((l) => !l.href.includes('wa.me')).map((l) => l.href),
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        description: ENTITY_DESCRIPTION,
        publisher: { '@id': ORG_ID },
        inLanguage: 'en',
      },
    ],
  };
}

export function faqJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

// crumbs: [{ name, path }], starting after Home
export function breadcrumbJsonLd(crumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...crumbs].map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function articleJsonLd({ title, description, path, image, datePublished, dateModified }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url: absoluteUrl(path),
    mainEntityOfPage: absoluteUrl(path),
    image: image ? [image] : [absoluteUrl(DEFAULT_OG_IMAGE.url)],
    ...(datePublished && { datePublished }),
    ...((dateModified || datePublished) && { dateModified: dateModified || datePublished }),
    author: { '@type': 'Organization', '@id': ORG_ID, name: SITE_NAME, url: SITE_URL },
    publisher: { '@id': ORG_ID },
    inLanguage: 'en',
  };
}

// Every published price as an Offer, so search engines and AI answers can quote real numbers
export function pricingJsonLd() {
  const offer = (name, usd, description) => ({
    '@type': 'Offer',
    name,
    ...(description && { description }),
    price: usd,
    priceCurrency: 'USD',
    url: absoluteUrl('/pricing'),
  });
  const monthly = (name, usd, description) => ({
    ...offer(name, usd, description),
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: usd,
      priceCurrency: 'USD',
      unitCode: 'MON',
      referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' },
    },
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'White-label design and development for agencies',
    serviceType: 'White-label agency services',
    description:
      'Design, development and marketing work delivered under the agency’s brand. Start with a pilot, buy credit packs, subscribe monthly or order a fixed-price build.',
    provider: { '@id': ORG_ID },
    areaServed: [
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'United States' },
    ],
    audience: { '@type': 'BusinessAudience', audienceType: 'Design, development and marketing agencies' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Groflex pricing',
      itemListElement: [
        offer(
          `Pilot (${pricing.pilot.credits} credits)`,
          pricing.pilot.price.usd,
          'One real project with no upfront payment. Pay only once you like the work.'
        ),
        ...pricing.systems.map((s) => offer(s.name, s.price.usd, `${s.description} Starting price, ${s.timeline}.`)),
        ...pricing.packs.map((p) =>
          offer(`${p.credits}-credit pack`, p.price.usd, `Valid for ${pricing.packValidityDays} days, no subscription.`)
        ),
        ...pricing.plans.map((p) =>
          monthly(`${p.name} monthly plan`, p.price.usd, `${p.credits} credits a month, up to ${p.rollover} roll over.`)
        ),
      ],
    },
  };
}
