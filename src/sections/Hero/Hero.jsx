'use client';

import bannerImg from '@/assets/home/hero.webp';
import Image from 'next/image';
import Link from 'next/link';
import { socialLinks } from '@/data/siteData';
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
                <Image src={bannerImg} fill sizes="100vw" alt="" className="hero__bg-img" priority />
            </div>

            <div className="container hero__container">
                <div className="hero__text">
                    <br />

                    <h1 className="hero__title">
                        We're Building Pakistan's Biggest App
                        <span className="hero__title-sub">And we want to build something equally ambitious for you.</span>
                    </h1>
                    {/* 
                    <p className="hero__subtitle animate-in animate-in-delay-2">
                        We combine elite design thinking with AI-powered workflows to build
                        high-performance websites and apps faster and more efficiently than traditional agencies.
                    </p> */}

                    <div className="hero__ctas animate-in animate-in-delay-3">
                        <Link href="/case-study/ashhkaro" className="btn btn--primary btn--lg hero__cta-btn">
                            View Case Study
                        </Link>
                        <p className="hero__cta-subline">


                           Take a chance, Brutally honest diagnosis of your stage and a 90-day plan, delivered instantly.
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
