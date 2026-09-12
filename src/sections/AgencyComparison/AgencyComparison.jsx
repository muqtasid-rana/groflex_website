'use client';

import { useRef, useEffect, useState } from 'react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import './AgencyComparison.css';

const comparisonRows = [
    {
        label: 'Project Cost',
        icon: 'fa-solid fa-money-bill-wave',
        others: '$30,000 – $50,000+',
        groflex: '1/3 the cost',
    },
    {
        label: 'Delivery Time',
        icon: 'fa-solid fa-clock',
        others: '3 – 6 months',
        groflex: '1 – 4 weeks',
    },
    {
        label: 'Technology',
        icon: 'fa-solid fa-microchip',
        others: 'Manual processes only',
        groflex: 'AI-accelerated development',
    },
    {
        label: 'Communication',
        icon: 'fa-solid fa-comments',
        others: 'Weekly updates, slow replies',
        groflex: 'Daily updates, instant responses',
    },
    {
        label: 'Revisions',
        icon: 'fa-solid fa-pen-ruler',
        others: 'Extra charges per revision',
        groflex: 'Unlimited revisions included',
    },
    {
        label: 'Post-Launch Support',
        icon: 'fa-solid fa-headset',
        others: 'Paid hourly support',
        groflex: 'Free 30-day support included',
    },
];

function useScrollVisible(threshold = 0.15) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);
    return [ref, visible];
}

export default function AgencyComparison() {
    const [tableRef, tableVisible] = useScrollVisible(0.1);

    return (
        <section id="why-us" className="section agency-compare">
            <div className="agency-compare__bg-glow" />
            <div className="container">
                <SectionHeading
                    tag="The Groflex Advantage"
                    title="Why Groflex"
                    subtitle="We use AI-powered workflows to deliver premium results at a fraction of the time and cost. Here's how we compare."
                />

                {/* Comparison Table */}
                <div ref={tableRef} className={`agency-compare__table agency-compare__slide ${tableVisible ? 'agency-compare__slide--visible' : ''}`}>
                    {/* Table Header */}
                    <div className="agency-compare__table-header">
                        <div className="agency-compare__th agency-compare__th--feature" />
                        <div className="agency-compare__th agency-compare__th--others">
                            <div className="agency-compare__th-icon agency-compare__th-icon--others">
                                <i className="fa-solid fa-building"></i>
                            </div>
                            <span>Other Agencies</span>
                        </div>
                        <div className="agency-compare__th agency-compare__th--groflex">
                            <div className="agency-compare__th-icon agency-compare__th-icon--groflex">
                                <i className="fa-solid fa-rocket"></i>
                            </div>
                            <span>Groflex</span>
                        </div>
                    </div>

                    {/* Table Rows */}
                    {comparisonRows.map((row, i) => (
                        <div
                            className="agency-compare__row"
                            key={row.label}
                            style={{ transitionDelay: tableVisible ? `${i * 0.06}s` : '0s' }}
                        >
                            <div className="agency-compare__cell agency-compare__cell--feature">
                                <span className="agency-compare__row-icon">
                                    <i className={row.icon}></i>
                                </span>
                                <span className="agency-compare__row-label">{row.label}</span>
                            </div>
                            <div className="agency-compare__cell agency-compare__cell--others">
                                <span className="agency-compare__cell-indicator agency-compare__cell-indicator--bad">
                                    <i className="fa-solid fa-xmark"></i>
                                </span>
                                <span>{row.others}</span>
                            </div>
                            <div className="agency-compare__cell agency-compare__cell--groflex">
                                <span className="agency-compare__cell-indicator agency-compare__cell-indicator--good">
                                    <i className="fa-solid fa-check"></i>
                                </span>
                                <span>{row.groflex}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
