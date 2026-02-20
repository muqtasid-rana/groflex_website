import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Button from '../../components/Button/Button';
import './AgencyComparison.css';

const comparisonRows = [
    {
        label: 'Project Cost',
        icon: 'fa-solid fa-money-bill-wave',
        others: '$2,000 – $50,000+',
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

const highlights = [
    {
        value: '1/3',
        label: 'The Cost',
        description: 'Pay a fraction of what traditional agencies charge',
        icon: 'fa-solid fa-piggy-bank',
    },
    {
        value: '10×',
        label: 'Faster',
        description: 'AI-powered workflows deliver results in days, not months',
        icon: 'fa-solid fa-bolt',
    },
    {
        value: '100%',
        label: 'Quality',
        description: 'Same premium quality with modern tools and expert team',
        icon: 'fa-solid fa-gem',
    },
];

export default function AgencyComparison() {
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
                <div className="agency-compare__table">
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
                            style={{ animationDelay: `${i * 0.08}s` }}
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

                {/* Highlight Cards */}
                <div className="agency-compare__highlights">
                    {highlights.map((h, i) => (
                        <div
                            className="agency-compare__highlight-card"
                            key={h.label}
                            style={{ animationDelay: `${0.2 + i * 0.12}s` }}
                        >
                            <div className="agency-compare__highlight-icon">
                                <i className={h.icon}></i>
                            </div>
                            <div className="agency-compare__highlight-value">
                                {h.value} <span>{h.label}</span>
                            </div>
                            <p className="agency-compare__highlight-desc">{h.description}</p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="agency-compare__cta">
                    <p className="agency-compare__cta-text">
                        Stop overpaying for slow results. Get premium quality at startup-friendly pricing.
                    </p>
                    <Button
                        variant="primary"
                        size="lg"
                        href="https://form.typeform.com/to/eh6mbf1u"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Get a Free Quote
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Button>
                </div>
            </div>
        </section>
    );
}
