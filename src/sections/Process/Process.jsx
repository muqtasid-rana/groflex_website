'use client';

import { useEffect, useRef } from 'react';
import { processSteps } from '@/data/siteData';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import './Process.css';

function useScrollReveal() {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('process--visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return ref;
}

export default function Process() {
    const sectionRef = useScrollReveal();

    return (
        <section id="process" className="section process" ref={sectionRef}>
            {/* SVG curved connector lines */}
            <svg className="process__connectors" viewBox="0 0 1200 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M150 100 C250 100 250 30 350 30 C450 30 450 170 550 170 C650 170 650 60 750 60 C850 60 850 140 1050 140" stroke="rgba(255,255,255,0.12)" strokeWidth="2" strokeDasharray="8 4" fill="none" />
                <path d="M0 180 C200 180 200 20 400 20 C600 20 600 160 800 160 C1000 160 1000 80 1200 80" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" fill="none" />
            </svg>

            <div className="container">
                <div className="process__heading-wrap">
                    <SectionHeading
                        tag="Our Process"
                        title="From Idea to Impact"
                        subtitle="A proven four-step methodology that delivers consistent, outstanding results."
                        light
                        align="center"
                    />
                </div>

                <div className="process__steps">
                    {processSteps.map((step, index) => (
                        <div
                            key={step.id}
                            className="process__step"
                            style={{ '--step-index': index }}
                        >
                            <div className="process__step-connector">
                                <div className="process__step-number">{step.step}</div>
                                {index < processSteps.length - 1 && (
                                    <div className="process__step-line" />
                                )}
                            </div>
                            <h3 className="process__step-title">{step.title}</h3>
                            <p className="process__step-desc">{step.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
