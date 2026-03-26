'use client';

import bannerImg from '@/assets/banner.webp';
import Button from '@/components/Button/Button';
import { socialLinks, tallyFormConfig } from '@/data/siteData';
import './Hero.css';

function getDailySpotsLeft() {
    const today = new Date();
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    return (seed % 4) + 1; // 1-4
}

export default function Hero() {
    const spotsLeft = getDailySpotsLeft();

    return (
        <section className="hero">
            <div className="hero__bg">
                <img src={bannerImg.src} alt="" className="hero__bg-img" />
            </div>
            <div className="hero__bg-overlay" />

            <div className="container hero__container">
                <div className="hero__text">
                    <br />

                    <h1 className="hero__title animate-in animate-in-delay-1">
                        AI-Accelerated Design & Development
                        <span className="hero__title-sub">Reduce 60% time & cost in design & development with AI</span>
                    </h1>
                    {/* 
                    <p className="hero__subtitle animate-in animate-in-delay-2">
                        We combine elite design thinking with AI-powered workflows to build
                        high-performance websites and apps faster and more efficiently than traditional agencies.
                    </p> */}

                    <div className="hero__ctas animate-in animate-in-delay-3">
                        <Button variant="primary" size="lg" tallyConfig={tallyFormConfig} className="hero__cta-btn">
                            Claim Your Free Website Audit
                            <p className="hero__cta-btn-urgency">(Only 5 audits per week - {spotsLeft} left)</p>
                        </Button>
                        <p className="hero__cta-subline">


                            We'll show you exactly what's killing your conversions, personal video by team delivered in 48hrs
                        </p>

                    </div>

                    {/* <div className="hero__socials animate-in animate-in-delay-4">
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
                    </div> */}
                </div>
            </div>
        </section>
    );
}
