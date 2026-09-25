import { projects } from '@/data/siteData';
import CaseStudyPage from '@/views/CaseStudyPage/CaseStudyPage';
import { pageMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => String(p.id) === id);
  if (!project) return { title: 'Project Not Found' };
  // Short, older write-ups: kept out of the index until they're rewritten for agencies
  return pageMetadata({
    title: `${project.title} — Groflex Case Study`,
    description: project.description,
    path: `/case-study/${id}`,
    noindex: true,
  });
}

export default async function CaseStudyRoute({ params }) {
  const { id } = await params;
  return <CaseStudyPage id={id} />;
}
