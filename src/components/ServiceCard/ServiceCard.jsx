'use client';

import { useRef, useEffect, useState } from 'react';
import './ServiceCard.css';

export default function ServiceCard({ icon, title, description, index = 0 }) {
    const cardRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.15 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={cardRef}
            className={`service-card ${visible ? 'service-card--visible' : ''}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
        >
            <div className="service-card__illustration">
                <div className="service-card__icon-wrapper">
                    <i className={`${icon} service-card__icon`}></i>
                </div>
            </div>
            <h4 className="service-card__title">{title}</h4>
            <p className="service-card__desc">{description}</p>
        </div>
    );
}
