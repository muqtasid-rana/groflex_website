import { useState } from 'react';
import { projects } from '../../data/siteData';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import CaseStudyModal from '../../components/CaseStudyModal/CaseStudyModal';
import './Portfolio.css';

export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="work" className="section portfolio">
            <div className="container">
                <SectionHeading
                    tag="Our Work"
                    title="Projects That Speak for Themselves"
                    subtitle="A selection of recent work showcasing our craft across industries and platforms."
                />
                <div className="portfolio__grid">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            {...project}
                            onViewCaseStudy={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </div>

            {selectedProject && (
                <CaseStudyModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
}
