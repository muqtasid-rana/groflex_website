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
                        We Build <span className="hero__title-accent">Digital</span><br />
                        Experiences<br />
                        That Matter
                    </h1>

                    <p className="hero__subtitle animate-in animate-in-delay-2">
                        From concept to launch, Groflex delivers premium software solutions
                        and design systems for ambitious brands ready to make their mark.
                    </p>

                    <div className="hero__ctas animate-in animate-in-delay-3">
                        <Button variant="primary" size="lg" href="#contact" className="hero__cta-btn">
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
