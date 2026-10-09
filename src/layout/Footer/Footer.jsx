import Link from 'next/link';
import Image from 'next/image';
import logoLight from '@/assets/brand/logo-light.webp';
import { socialLinks } from '@/data/siteData';
import { servicePages, marketPages } from '@/data/servicePages';
import SocialIcon from '@/components/SocialIcon/SocialIcon';
import './Footer.css';

// What the brand blurb and link columns say. The agency pages get the white-label
// pitch; /founders gets its own, pointing at sections on that page.
const variants = {
    agency: {
        desc: 'A white-label design, development and marketing team for UK and US agencies. Your brand, our team.',
        columns: [
            { title: 'Services', links: servicePages.map((p) => ({ label: p.name, href: `/${p.slug}` })) },
            {
                title: 'Company',
                links: [
                    { label: 'About Us', href: '/about' },
                    { label: 'Our Work', href: '/work' },
                    { label: 'Pricing', href: '/pricing' },
                    { label: 'Blog', href: '/blog' },
                    ...marketPages.map((p) => ({ label: p.name, href: `/${p.slug}` })),
                    { label: 'Contact', href: '/#contact' },
                ],
            },
        ],
    },
    founders: {
        desc: 'Design, web and app development for founders. From idea to a live product, at a fixed price and on a fixed timeline.',
        columns: [
            {
                title: 'Case Studies',
                links: [
                    { label: 'Incorpo', href: '/case-study/incorpo' },
                    { label: 'Ashhkaro', href: '/case-study/ashhkaro' },
                    { label: 'Slashcure', href: '/case-study/slashcure' },
                    { label: 'Inayat Motors', href: '/case-study/3' },
                    { label: 'All work', href: '/work' },
                ],
            },
            {
                title: 'Explore',
                links: [
                    { label: 'How we work', href: '#process' },
                    { label: 'What we build', href: '#services' },
                    { label: 'Blog', href: '/blog' },
                    { label: 'Contact', href: '#contact' },
                ],
            },
        ],
    },
};

// Pages use next/link; hashes and the home page's #contact are plain anchors
const FooterLink = ({ href, label }) => (
    href.includes('#') ? <a href={href}>{label}</a> : <Link href={href}>{label}</Link>
);

export default function Footer({ variant = 'agency' }) {
    const { desc, columns } = variants[variant];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <Link href="/" className="footer__logo">
                            <Image src={logoLight} alt="Groflex" className="footer__logo-img" />
                        </Link>
                        <p className="footer__desc">{desc}</p>
                        <div className="footer__socials">
                            {socialLinks.map((link) => (
                                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label={link.label}>
                                    <SocialIcon icon={link.icon} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {columns.map((col) => (
                        <div key={col.title} className="footer__column">
                            <h4 className="footer__heading">{col.title}</h4>
                            <ul className="footer__links">
                                {col.links.map((l) => <li key={l.label}><FooterLink {...l} /></li>)}
                            </ul>
                        </div>
                    ))}

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
