import { notFound } from 'next/navigation';
import ServicePage from '@/sections/ServicePage/ServicePage';
import MarketPage from '@/sections/ServicePage/MarketPage';
import { landingPages, findLandingPage } from '@/data/servicePages';
import { pageMetadata } from '@/lib/seo';

// The white-label service and country pages, e.g. /white-label-web-development.
// Only the slugs in data/servicePages.js exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return landingPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = findLandingPage(slug);
  if (!page) return {};
  return pageMetadata({ title: page.title, description: page.description, path: `/${page.slug}` });
}

export default async function LandingRoute({ params }) {
  const { slug } = await params;
  const page = findLandingPage(slug);
  if (!page) notFound();

  return page.kind === 'market' ? <MarketPage page={page} /> : <ServicePage page={page} />;
}
