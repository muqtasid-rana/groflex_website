import './ProjectCard.css';

export default function ProjectCard({ title, category, description, color, image, onViewCaseStudy }) {
    return (
        <div className="project-card">
            <div className="project-card__image" style={{ backgroundColor: color }}>
                {image ? (
                    <img src={image} alt={title} className="project-card__img-cover" />
                ) : null}
                <div className="project-card__overlay">
                    <button className="project-card__view-btn" onClick={onViewCaseStudy}>
                        View Case Study
                    </button>
                </div>
            </div>
            <div className="project-card__content">
                <span className="project-card__category">{category}</span>
                <h4 className="project-card__title">{title}</h4>
                <p className="project-card__desc">{description}</p>
                <button className="project-card__cta-btn" onClick={onViewCaseStudy}>
                    View Case Study
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
