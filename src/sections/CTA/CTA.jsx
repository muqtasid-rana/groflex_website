import Button from '../../components/Button/Button';
import './CTA.css';

export default function CTA() {
    return (
        <section className="section cta">
            <div className="cta__bg-shapes">
                <div className="cta__shape cta__shape--1" />
                <div className="cta__shape cta__shape--2" />
            </div>
            <div className="container">
                <div className="cta__content">
                    <span className="cta__tag">Ready to Start?</span>
                    <h2 className="cta__title">
                        Ready to Build Something<br />
                        Extraordinary?
                    </h2>
                    <p className="cta__subtitle">
                        Transform your vision into a digital reality. Partner with a team that cares about your success as much as you do.
                    </p>
                    <div className="cta__actions">
                        <Button variant="white" size="lg" href="#contact" className="cta__main-btn">
                            Start a Project
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Button>
                    </div>

                    <div className="cta__socials">
                        <span className="cta__socials-label">Follow Us</span>
                        <div className="cta__socials-links">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="cta__social-icon" aria-label="Instagram">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="cta__social-icon" aria-label="LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="cta__social-icon" aria-label="Facebook">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="cta__social-icon" aria-label="WhatsApp">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
