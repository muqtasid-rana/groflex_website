import { useState, useEffect } from 'react';
import { navLinks } from '../../data/siteData';
import Button from '../../components/Button/Button';
import './Navbar.css';
import logo from '../../assets/logo.png';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileMenuOpen]);

    return (
        <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="container navbar__container">
                <img className='navbar__logo' src={logo} alt="" />
                <nav className="navbar__nav">
                    <ul className="navbar__list">
                        {navLinks.map((link) => (
                            <li key={link.label} className="navbar__item">
                                <a href={link.href} className="navbar__link">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="navbar__actions">
                    <Button variant="primary" size="sm" href="https://calendly.com/mmuqtasidrana/30min" target="_blank" rel="noopener noreferrer">
                        Let's Talk
                    </Button>

                    <button
                        className={`navbar__toggle ${mobileMenuOpen ? 'active' : ''}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="navbar__toggle-bar" />
                        <span className="navbar__toggle-bar" />
                        <span className="navbar__toggle-bar" />
                    </button>
                </div>

                <div className={`navbar__mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                    <nav className="navbar__mobile-nav">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="navbar__mobile-link"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <Button variant="primary" size="md" href="https://calendly.com/mmuqtasidrana/30min" onClick={() => setMobileMenuOpen(false)} target="_blank" rel="noopener noreferrer">
                            Let's Talk
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    );
}
