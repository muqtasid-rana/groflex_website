import Link from 'next/link';
import { work } from '@/data/siteData';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import FeaturedWork from '@/components/FeaturedWork/FeaturedWork';
import './Portfolio.css';

const featured = work.slice(0, 3).map((project) => (
    project.homeImage
        ? { ...project, image: project.homeImage, imagePosition: project.homeImagePosition }
        : project
));

export default function Portfolio() {
    return (
        <section id="work" className="section portfolio">
            <div className="container">
                <div className="portfolio__header">
                    <SectionHeading
                        align="left"
                        tag="Case Studies"
                        title="Projects That Speak for Themselves"
                        subtitle="A selection of recent work showcasing our craft across industries and platforms."
                    />
                    <Link href="/work" className="portfolio__all">
                        View all work
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
                <FeaturedWork projects={featured} />
            </div>
        </section>
    );
}
