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
                        <Button variant="white" size="lg" href="https://calendly.com/mmuqtasidrana/30min" className="cta__main-btn" target="_blank" rel="noopener noreferrer">
                            Book a free consultation call
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
}
