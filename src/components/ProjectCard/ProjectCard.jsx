import { Link } from 'react-router-dom';
import './ProjectCard.css';

export default function ProjectCard({ id, title, category, description, color, image }) {
    return (
        <div className="project-card">
            <div className="project-card__image" style={{ backgroundColor: color }}>
                {image ? (
                    <img src={image} alt={title} className="project-card__img-cover" />
                ) : null}
                <div className="project-card__overlay">
                    <Link to={`/case-study/${id}`} className="project-card__view-btn">
                        View Case Study
                    </Link>
                </div>
            </div>
            <div className="project-card__content">
                <span className="project-card__category">{category}</span>
                <h4 className="project-card__title">{title}</h4>
                <p className="project-card__desc">{description}</p>
                <Link to={`/case-study/${id}`} className="project-card__cta-btn">
                    View Case Study
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
