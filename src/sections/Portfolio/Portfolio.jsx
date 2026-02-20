import { Link } from 'react-router-dom';
import { projects } from '../../data/siteData';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './Portfolio.css';

export default function Portfolio() {
    return (
        <section id="work" className="section portfolio">
            <div className="container">
                <SectionHeading
                    tag="Case Studies"
                    title="Projects That Speak for Themselves"
                    subtitle="A selection of recent work showcasing our craft across industries and platforms."
                />
                <div className="portfolio__grid">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            {...project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
