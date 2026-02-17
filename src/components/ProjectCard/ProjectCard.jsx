import './ProjectCard.css';

export default function ProjectCard({ title, category, description, caseStudy, color, image }) {
    return (
        <div className="project-card">
            <div className="project-card__image" style={{ backgroundColor: color }}>
                {image ? (
                    <img src={image} alt={title} className="project-card__img-cover" />
                ) : null}
                <div className="project-card__overlay">
                    <span className="project-card__view-btn">View Case Study</span>
                </div>
            </div>
            <div className="project-card__content">
                <span className="project-card__category">{category}</span>
                <h4 className="project-card__title">{title}</h4>
                <p className="project-card__desc">{description}</p>
                {caseStudy && (
                    <div className="project-card__case-study">
                        <div className="project-card__cs-item">
                            <span className="project-card__cs-label">Problem:</span>
                            <span className="project-card__cs-text">{caseStudy.problem}</span>
                        </div>
                        <div className="project-card__cs-item">
                            <span className="project-card__cs-label">Solution:</span>
                            <span className="project-card__cs-text">{caseStudy.solution}</span>
                        </div>
                        <div className="project-card__cs-item">
                            <span className="project-card__cs-label project-card__cs-label--impact">Impact:</span>
                            <span className="project-card__cs-text project-card__cs-text--impact">{caseStudy.impact}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
