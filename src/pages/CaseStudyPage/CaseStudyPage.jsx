import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { projects } from '../../data/siteData';
import './CaseStudyPage.css';

export default function CaseStudyPage() {
    const { id } = useParams();
    const project = projects.find((p) => String(p.id) === id);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [id]);

    if (!project) {
        return (
            <div className="cs-page">
                <div className="cs-page__band cs-page__band--light">
                    <div className="cs-page__container cs-page__container--center">
                        <h2>Project not found</h2>
                    </div>
                </div>
            </div>
        );
    }

    const { title, category, caseStudy, color, image } = project;
    const { overview, challenge, approach, solution, results, testimonial, timeline } = caseStudy;

    return (
        <div className="cs-page">
            {/* Hero Banner — Full Width */}
            <div className="cs-page__hero" style={{ backgroundColor: color }}>
                {image && <img src={image} alt={title} className="cs-page__hero-img" />}
                <div className="cs-page__hero-gradient" />
                <div className="cs-page__hero-content">
                    <span className="cs-page__hero-category">{category}</span>
                    <h1 className="cs-page__hero-title">{title}</h1>
                    {timeline && (
                        <div className="cs-page__hero-meta">
                            <div className="cs-page__hero-timeline">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                                Delivered in {timeline}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Overview — Light */}
            <div className="cs-page__band cs-page__band--light">
                <div className="cs-page__container">
                    <div className="cs-page__label">Overview</div>
                    <p className="cs-page__lead">{overview}</p>
                </div>
            </div>

            {/* Challenge — Dark */}
            <div className="cs-page__band cs-page__band--dark">
                <div className="cs-page__container">
                    <div className="cs-page__two-col">
                        <div className="cs-page__col-label">
                            <span className="cs-page__col-tag">The Problem</span>
                            <h2 className="cs-page__col-title cs-page__col-title--light">The Challenge</h2>
                        </div>
                        <div className="cs-page__col-text">
                            <p className="cs-page__text cs-page__text--light">{challenge}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Approach — Light */}
            <div className="cs-page__band cs-page__band--light">
                <div className="cs-page__container">
                    <div className="cs-page__two-col">
                        <div className="cs-page__col-label">
                            <span className="cs-page__col-tag">Our Strategy</span>
                            <h2 className="cs-page__col-title">Our Approach</h2>
                        </div>
                        <div className="cs-page__col-text">
                            <p className="cs-page__text">{approach}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Solution — Dark */}
            <div className="cs-page__band cs-page__band--dark">
                <div className="cs-page__container">
                    <div className="cs-page__two-col">
                        <div className="cs-page__col-label">
                            <span className="cs-page__col-tag cs-page__col-tag--accent">What We Built</span>
                            <h2 className="cs-page__col-title cs-page__col-title--light">The Solution</h2>
                        </div>
                        <div className="cs-page__col-text">
                            <p className="cs-page__text cs-page__text--light">{solution}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Results — Gradient */}
            {results && results.length > 0 && (
                <div className="cs-page__band cs-page__band--gradient">
                    <div className="cs-page__container cs-page__container--center">
                        <span className="cs-page__col-tag cs-page__col-tag--white">Measurable Impact</span>
                        <h2 className="cs-page__results-heading">The Results</h2>
                        <div className="cs-page__results-grid">
                            {results.map((r, i) => (
                                <div key={i} className="cs-page__result-card">
                                    <span className="cs-page__result-value">{r.value}</span>
                                    <span className="cs-page__result-label">{r.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Testimonial — Light */}
            {testimonial && (
                <div className="cs-page__band cs-page__band--light">
                    <div className="cs-page__container cs-page__container--narrow">
                        <div className="cs-page__testimonial">
                            <blockquote className="cs-page__quote">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                            <div className="cs-page__quote-author">
                                <strong>{testimonial.author}</strong>
                                <span>{testimonial.role}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* CTA — Dark */}
            <div className="cs-page__band cs-page__band--cta">
                <div className="cs-page__container cs-page__container--center">
                    <h3 className="cs-page__cta-title">Ready to Build Something Like This?</h3>
                    <p className="cs-page__cta-sub">Let&apos;s discuss how we can deliver similar results for your business — faster and at a fraction of the cost.</p>
                    <a
                        href="https://form.typeform.com/to/eh6mbf1u"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cs-page__cta-btn"
                    >
                        Book a Free Consultation
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
