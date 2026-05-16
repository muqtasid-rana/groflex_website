import Link from 'next/link';
import './CTA.css';

function getDailySpotsLeft() {
    const today = new Date();
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    return (seed % 4) + 1; // 1-4
}

export default function CTA() {
    const spotsLeft = getDailySpotsLeft();

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
                        <Link href="/gameplan" className="btn btn--white btn--lg cta__main-btn">
                            Get Your Free GAMEPLAN
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <p className="cta__subline">
                            A 60-second quiz that gives you a brutally honest 90-day roadmap for your business.
                        </p>
                        <span className="cta__urgency">
                            Built for founders · {spotsLeft} free reports left today
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
}
