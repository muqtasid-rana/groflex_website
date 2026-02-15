import { services } from '../../data/siteData';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import './Services.css';

export default function Services() {
    return (
        <section id="services" className="section section--alt services">
            <div className="container">
                <SectionHeading
                    tag="What We Do"
                    title="Services That Drive Results"
                    subtitle="End-to-end digital solutions from concept and design to development, launch, and growth."
                    align="center"
                    light
                />

                <div className="services__group">
                    <div className="services__group-header">
                        <h3 className="services__group-title">
                            <i className="fa-solid fa-paintbrush services__group-icon"></i>
                            Design
                        </h3>
                        <div className="services__group-line" />
                    </div>
                    <div className="services__grid">
                        {services.design.map((s) => (
                            <ServiceCard key={s.id} {...s} />
                        ))}
                    </div>
                </div>

                <div className="services__group">
                    <div className="services__group-header">
                        <h3 className="services__group-title">
                            <i className="fa-solid fa-code services__group-icon"></i>
                            Development
                        </h3>
                        <div className="services__group-line" />
                    </div>
                    <div className="services__grid">
                        {services.development.map((s) => (
                            <ServiceCard key={s.id} {...s} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
