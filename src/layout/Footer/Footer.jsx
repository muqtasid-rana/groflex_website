import { Link } from 'react-router-dom';
import { socialLinks, services } from '../../data/siteData';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <Link to="/" className="footer__logo">Groflex</Link>
                        <p className="footer__desc">
                            A premium software and design agency building world-class digital products for ambitious brands.
                        </p>
                        <div className="footer__socials">
                            {socialLinks.map((link) => (
                                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label={link.label}>
                                    <i className={link.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer__column">
                        <h4 className="footer__heading">Services</h4>
                        <ul className="footer__links">
                            {services.design.slice(0, 3).map((s) => (
                                <li key={s.id}><a href="/#services">{s.title}</a></li>
                            ))}
                            {services.development.slice(0, 2).map((s) => (
                                <li key={s.id}><a href="/#services">{s.title}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer__column">
                        <h4 className="footer__heading">Company</h4>
                        <ul className="footer__links">
                            <li><a href="/#about">About Us</a></li>
                            <li><a href="/#work">Our Work</a></li>
                            <li><a href="/#process">Process</a></li>
                            <li><a href="/#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer__column">
                        <h4 className="footer__heading">Get in Touch</h4>
                        <ul className="footer__links footer__links--contact">
                            <li>
                                <i className="fa-solid fa-envelope"></i>
                                <a href="mailto:groflex.co@gmail.com">groflex.co@gmail.com</a>
                            </li>
                            <li>
                                <i className="fa-solid fa-phone"></i>
                                <a href="tel:+1234567890">+92 335 9528776</a>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        &copy; {new Date().getFullYear()} Groflex. All rights reserved.
                    </p>
                    <div className="footer__bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
