import WorkCard from '@/components/WorkCard/WorkCard';
import './FeaturedWork.css';

// One large tile on the left, two stacked on the right, inside a fixed-height block.
// Hovering a stacked tile opens its details by borrowing height from its neighbour.
export default function FeaturedWork({ projects, priority = false }) {
    const [main, ...side] = projects;

    return (
        <div className="work-featured">
            <WorkCard
                {...main}
                className="work-featured__main"
                sizes="(max-width: 960px) 100vw, 760px"
                priority={priority}
            />
            <div className="work-featured__stack">
                {side.map((project) => (
                    <WorkCard
                        key={project.id}
                        {...project}
                        className="work-featured__side"
                        sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 360px"
                    />
                ))}
            </div>
        </div>
    );
}
