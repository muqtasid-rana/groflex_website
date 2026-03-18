import { projects } from '@/data/siteData';
import CaseStudyPage from '@/pages/CaseStudyPage/CaseStudyPage';

export function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }));
}

export function generateMetadata({ params }) {
  const project = projects.find((p) => String(p.id) === params.id);
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

export default function CaseStudyRoute({ params }) {
  return <CaseStudyPage id={params.id} />;
}
