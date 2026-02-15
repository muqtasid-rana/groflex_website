import './ProjectCard.css';

export default function ProjectCard({ title, category, tags, color }) {
    return (
        <div className="project-card">
            <div className="project-card__image" style={{ backgroundColor: color }}>
                <div className="project-card__overlay">
                    <span className="project-card__view-btn">View Case Study</span>
                </div>
            </div>
            <div className="project-card__content">
                <span className="project-card__category">{category}</span>
                <h4 className="project-card__title">{title}</h4>
                <div className="project-card__tags">
                    {tags.map((tag) => (
                        <span key={tag} className="project-card__tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}
