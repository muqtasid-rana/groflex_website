import SectionHeading from '../../components/SectionHeading/SectionHeading';
import './Testimonial.css';

const testimonials = [
    {
        id: 1,
        quote: 'Groflex completely transformed our brand. Their attention to detail and design sensibility is unmatched. We saw a 40% increase in engagement within the first month.',
        name: 'Sarah Mitchell',
        role: 'CEO, Finova Technologies',
        initials: 'SM',
    },
    {
        id: 2,
        quote: 'Working with Groflex felt like having an in-house team. They understood our vision from day one and delivered a product that exceeded every expectation.',
        name: 'James Rodriguez',
        role: 'Founder, HealthSync',
        initials: 'JR',
    },
    {
        id: 3,
        quote: 'The team at Groflex doesn\'t just build software — they build solutions. Their strategic thinking and technical expertise made all the difference for our platform.',
        name: 'Priya Sharma',
        role: 'CTO, EduLearn',
        initials: 'PS',
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
