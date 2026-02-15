import { useState } from 'react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Button from '../../components/Button/Button';
import './Contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="section section--alt contact">
            <div className="container">
                <SectionHeading
                    tag="Contact Us"
                    title="Let's Start a Conversation"
                    subtitle="Have a project in mind? We'd love to hear from you. Send us a message and we'll get back within 24 hours."
                />

                <div className="contact__grid">
                    <div className="contact__info">
                        <div className="contact__info-card">
                            <h3 className="contact__info-header">Get in Touch</h3>
                            <p className="contact__info-desc">
                                We are always looking for new challenges and interesting partners.
                                Also, we love coffee.
                            </p>

                            <div className="contact__details">
                                <div className="contact__detail-item">
                                    <div className="contact__detail-icon"><i className="fa-solid fa-envelope"></i></div>
                                    <div>
                                        <span className="contact__detail-label">Email Us</span>
                                        <a href="mailto:hello@groflex.io" className="contact__detail-value">hello@groflex.io</a>
                                    </div>
                                </div>
                                <div className="contact__detail-item">
                                    <div className="contact__detail-icon"><i className="fa-solid fa-phone"></i></div>
                                    <div>
                                        <span className="contact__detail-label">Call Us</span>
                                        <span className="contact__detail-value">+1 (555) 123-4567</span>
                                    </div>
                                </div>
                                <div className="contact__detail-item">
                                    <div className="contact__detail-icon"><i className="fa-solid fa-location-dot"></i></div>
                                    <div>
                                        <span className="contact__detail-label">Visit Us</span>
                                        <span className="contact__detail-value">San Francisco, CA 94102</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact__form-wrapper">
                        <form className="contact__form" onSubmit={handleSubmit}>
                            <h3 className="contact__form-title">Send a Message</h3>

                            <div className="contact__field">
                                <label htmlFor="contact-name" className="contact__label">Full Name</label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    name="name"
                                    className="contact__input"
                                    placeholder="John Carter"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="contact__field">
                                <label htmlFor="contact-email" className="contact__label">Email Address</label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    name="email"
                                    className="contact__input"
                                    placeholder="john@company.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="contact__field">
                                <label htmlFor="contact-message" className="contact__label">Your Message</label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    className="contact__input contact__textarea"
                                    placeholder="Tell us about your project..."
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <Button type="submit" variant="primary" size="lg" className="contact__btn">
                                {submitted ? (<><i className="fa-solid fa-check"></i> Message Sent</>) : (<><i className="fa-solid fa-paper-plane"></i> Send Message</>)}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
