import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navLinks } from '../../data/siteData';
import Button from '../../components/Button/Button';
import './Navbar.css';
import logo from '../../assets/logo.png';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

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

    // Handle nav link clicks: if on a sub-page, navigate home first then scroll
    const handleNavClick = useCallback((e, href) => {
        // "Home" link with just '#'
        if (href === '#') {
            if (location.pathname !== '/') {
                e.preventDefault();
                navigate('/');
            }
            return;
        }

        // Hash link like '#services'
        if (href.startsWith('#')) {
            const hash = href;
            if (location.pathname !== '/') {
                // We're on a sub-page — navigate home, then scroll to section
                e.preventDefault();
                navigate('/');
                // Wait for home page to render, then scroll to the section
                setTimeout(() => {
                    const el = document.querySelector(hash);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
            // If already on home, let the browser handle the hash scroll naturally
        }
    }, [location.pathname, navigate]);

    return (
        <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="container navbar__container">
                <Link to="/">
                    <img className='navbar__logo' src={logo} alt="" />
                </Link>
                <nav className="navbar__nav">
                    <ul className="navbar__list">
                        {navLinks.map((link) => (
                            <li key={link.label} className="navbar__item">
                                <a
                                    href={link.href}
                                    className="navbar__link"
                                    onClick={(e) => handleNavClick(e, link.href)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="navbar__actions">
                    <Button variant="primary" size="sm" href="https://form.typeform.com/to/eh6mbf1u" target="_blank" rel="noopener noreferrer">
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
                                onClick={(e) => {
                                    handleNavClick(e, link.href);
                                    setMobileMenuOpen(false);
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                        <Button variant="primary" size="md" href="https://form.typeform.com/to/eh6mbf1u" onClick={() => setMobileMenuOpen(false)} target="_blank" rel="noopener noreferrer">
                            Let's Talk
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    );
}
