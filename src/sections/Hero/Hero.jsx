import bannerImg from '../../assets/banner.png';
import Button from '../../components/Button/Button';
import { socialLinks } from '../../data/siteData';
import './Hero.css';

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero__bg">
                <img src={bannerImg} alt="" className="hero__bg-img" />
            </div>
            <div className="hero__bg-overlay" />

            <div className="container hero__container">
                <div className="hero__text">
                    <br />

                    <h1 className="hero__title animate-in animate-in-delay-1">
                        AI-Accelerated Design & Development
                        <span className="hero__title-sub">60% Faster & No Traditional Agency Costs!</span>
                    </h1>

                    <p className="hero__subtitle animate-in animate-in-delay-2">
                        We combine elite design thinking with AI-powered workflows to build
                        high-performance websites and apps faster and more efficiently than traditional agencies.
                    </p>

                    <div className="hero__ctas animate-in animate-in-delay-3">
                        <Button variant="primary" size="lg" href="https://form.typeform.com/to/eh6mbf1u" className="hero__cta-btn" target="_blank" rel="noopener noreferrer">
                            <i className="fa-solid fa-calendar-check"></i>
                            Book a Free Consultation Call
                        </Button>
                    </div>

                    <div className="hero__socials animate-in animate-in-delay-4">
                        <span className="hero__socials-label">Connect with us</span>
                        <div className="hero__socials-links">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hero__social-icon"
                                    aria-label={link.label}
                                >
                                    <i className={link.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
