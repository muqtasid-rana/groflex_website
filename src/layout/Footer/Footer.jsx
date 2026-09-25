import Link from 'next/link';
import Image from 'next/image';
import logoLight from '@/assets/brand/logo-light.webp';
import { socialLinks } from '@/data/siteData';
import { servicePages, marketPages } from '@/data/servicePages';
import SocialIcon from '@/components/SocialIcon/SocialIcon';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <Link href="/" className="footer__logo">
                            <Image src={logoLight} alt="Groflex" className="footer__logo-img" />
                        </Link>
                        <p className="footer__desc">
                            A white-label design, development and marketing team for UK and US agencies. Your brand, our team.
                        </p>
                        <div className="footer__socials">
                            {socialLinks.map((link) => (
                                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label={link.label}>
                                    <SocialIcon icon={link.icon} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer__column">
                        <h4 className="footer__heading">Services</h4>
                        <ul className="footer__links">
                            {servicePages.map((p) => (
                                <li key={p.slug}><Link href={`/${p.slug}`}>{p.name}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer__column">
                        <h4 className="footer__heading">Company</h4>
                        <ul className="footer__links">
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/work">Our Work</Link></li>
                            <li><Link href="/pricing">Pricing</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            {marketPages.map((p) => (
                                <li key={p.slug}><Link href={`/${p.slug}`}>{p.name}</Link></li>
                            ))}
                            <li><a href="/#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer__column">
                        <h4 className="footer__heading">Get in Touch</h4>
                        <ul className="footer__links footer__links--contact">
                            <li>
                                <i className="fa-solid fa-envelope"></i>
                                <a href="mailto:muqtasid@groflex.co">muqtasid@groflex.co</a>
                            </li>
                            <li>
                                <i className="fa-solid fa-phone"></i>
                                <a href="tel:+923359528776">+92 335 9528776</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        &copy; {new Date().getFullYear()} Groflex. All rights reserved.
                    </p>
                    <div className="footer__bottom-links">
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/terms">Terms &amp; Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
