import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Button from '../../components/Button/Button';
import './Contact.css';

const EMAILJS_SERVICE_ID = 'service_hnb5hs6';
const EMAILJS_TEMPLATE_ID = 'template_9q8nfdx';
const EMAILJS_PUBLIC_KEY = 'uvpyAU7zlrphbVVGE';

export default function Contact() {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('idle'); // idle | sending | sent | error

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            );
            setStatus('sent');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 4000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
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
                                        <a href="mailto:groflex.co@gmail.com" className="contact__detail-value">groflex.co@gmail.com</a>
                                    </div>
                                </div>
                                <div className="contact__detail-item">
                                    <div className="contact__detail-icon"><i className="fa-solid fa-phone"></i></div>
                                    <div>
                                        <span className="contact__detail-label">Call Us</span>
                                        <span className="contact__detail-value">+923359528776</span>
                                    </div>
                                </div>
                                <div className="contact__detail-item">

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact__form-wrapper">
                        <form ref={formRef} className="contact__form" onSubmit={handleSubmit}>
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

                            <Button type="submit" variant="primary" size="lg" className="contact__btn" disabled={status === 'sending'}>
                                {status === 'sending' ? (<><i className="fa-solid fa-spinner fa-spin"></i> Sending...</>) : status === 'sent' ? (<><i className="fa-solid fa-check"></i> Message Sent!</>) : status === 'error' ? (<><i className="fa-solid fa-exclamation-triangle"></i> Failed — Try Again</>) : (<><i className="fa-solid fa-paper-plane"></i> Send Message</>)}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
