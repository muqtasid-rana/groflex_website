import { whyChooseUs } from '@/data/siteData';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import Link from 'next/link';
import team from '@/assets/team.webp';
import client from '@/assets/client.webp';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
    // Split features into two groups for left/right cards
    const topFeatures = whyChooseUs.slice(0, 2);
    const stats = [
        { number: '120+', label: 'Clients' },
        { number: '110+', label: 'Reviews' },
        { number: '5+', label: 'Years of Experience' },
    ];

    return (
        <section className="section why-choose">
            <div className="container">
                <SectionHeading
                    tag="Why Choose Us"
                    title="Why People Trust Groflex"
                    subtitle="We don't just build products, we build partnerships that drive lasting impact."
                    align="center"
                />
                {/* ---- Block 1: Image left + Text & Feature cards right ---- */}
                <div className="why-choose__block why-choose__block--top">
                    <div className="why-choose__image-col">
                        <div className="why-choose__image">
                            <img src={team.src} alt="team" />
                        </div>
                    </div>
                    <div className="why-choose__content-col">
                        <h2 className="why-choose__heading">
                            Collaborate with Our<br />
                            <span className="why-choose__heading-accent">Creative Team</span>
                        </h2>
                        <p className="why-choose__desc">
                            Through each collaboration, we build unique solutions,
                            explore the full potential of each concept.
                        </p>

                        <div className="why-choose__features">
                            {topFeatures.map((item) => (
                                <div key={item.id} className="why-choose__feature">
                                    <div className="why-choose__feature-icon">
                                        <i className={item.icon}></i>
                                    </div>
                                    <div>
                                        <h4 className="why-choose__feature-title">{item.title}</h4>
                                        <p className="why-choose__feature-desc">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ---- Block 2: Text & Stats left + Image right ---- */}
                <div className="why-choose__block why-choose__block--bottom">
                    <div className="why-choose__content-col">
                        <h2 className="why-choose__heading">
                            We are Ready to Provide<br />
                            <span className="why-choose__heading-accent">the Best Service</span>
                        </h2>
                        <p className="why-choose__desc">
                            Our commitment to excellence drives us to go above
                            and beyond, ensuring every interaction with us is a
                            seamless journey.
                        </p>

                        <Link href="/gameplan" className="btn btn--primary btn--md why-choose__cta">
                            Get your free gameplan
                        </Link>


                    </div>
                    <div className="why-choose__image-col">
                        <div className="why-choose__image">
                            <img src={client.src} alt="client" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
