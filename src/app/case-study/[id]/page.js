import { projects } from '@/data/siteData';
import CaseStudyPage from '@/pages/CaseStudyPage/CaseStudyPage';

export function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => String(p.id) === id);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} — Groflex Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Groflex Case Study`,
      description: project.description,
    },
  };
}

export default async function CaseStudyRoute({ params }) {
  const { id } = await params;
  return <CaseStudyPage id={id} />;
}
