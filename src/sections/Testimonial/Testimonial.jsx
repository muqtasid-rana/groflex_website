import SectionHeading from '../../components/SectionHeading/SectionHeading';
import './Testimonial.css';

const testimonials = [

    {
        id: 1,
        quote: 'The best thing about working with Groflex has been that their work was always transparent, we were continuously updated about the progress of the project.',
        name: 'Inayat Khan',
        role: 'Founder, Inayat Motors',
        initials: 'IK',
    },
    {
        id: 3,
        quote: 'They delivered exactly the aesthetic I had in mind for my bikes. I couldn’t be happier. They delivered the project way before the deadline. Love it. ',
        name: 'James Rodriguez',
        role: 'Founder, RPM Dynamics',
        initials: 'JR',
    },
    {
        id: 2,
        quote: 'Groflex team made the best design for our website. They are very professional and delivered the project on time.',
        name: 'Neo Smith',
        role: 'CEO, Pocket Watcher',
        initials: 'NS',
    },

];

export default function Testimonial() {
    return (
        <section className="section section--dark testimonial">
            <div className="testimonial__glow testimonial__glow--1" />
            <div className="testimonial__glow testimonial__glow--2" />
            <div className="container">
                <SectionHeading
                    tag="Client Testimonials"
                    title="What Our Clients Say"
                    subtitle="Don't just take our word for it — hear from the brands we've partnered with."
                    align="center"
                    light
                />

                <div className="testimonial__grid">
                    {testimonials.map((t) => (
                        <div key={t.id} className="testimonial__card">
                            <div className="testimonial__stars">
                                {[...Array(5)].map((_, i) => (
                                    <i key={i} className="fa-solid fa-star"></i>
                                ))}
                            </div>
                            <blockquote className="testimonial__quote">
                                &ldquo;{t.quote}&rdquo;
                            </blockquote>
                            <div className="testimonial__author">
                                <div className="testimonial__avatar">{t.initials}</div>
                                <div className="testimonial__info">
                                    <cite className="testimonial__name">{t.name}</cite>
                                    <span className="testimonial__role">{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
