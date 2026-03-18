'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { navLinks } from '@/data/siteData';
import Button from '@/components/Button/Button';
import './Navbar.css';
import logo from '@/assets/logo.png';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

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

    const handleNavClick = useCallback((e, href) => {
        if (href === '#') {
            if (pathname !== '/') {
                e.preventDefault();
                router.push('/');
            }
            return;
        }

        if (href.startsWith('#')) {
            const hash = href;
            if (pathname !== '/') {
                e.preventDefault();
                router.push('/');
                setTimeout(() => {
                    const el = document.querySelector(hash);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [pathname, router]);

    const isBlogPage = pathname.startsWith('/blog');
    const isScrolledState = scrolled || isBlogPage;

    return (
        <header className={`navbar ${isScrolledState ? 'navbar--scrolled' : ''} ${mobileMenuOpen ? 'navbar--menu-open' : ''}`}>
            <div className="container navbar__container">
                <Link href="/" onClick={(e) => {
                    if (pathname === '/') {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                }}>
                    <img className='navbar__logo' src={logo.src} alt="Groflex" />
                </Link>
                <nav className="navbar__nav">
                    <ul className="navbar__list">
                        {navLinks.map((link) => (
                            <li key={link.label} className="navbar__item">
                                {link.href.startsWith('/') ? (
                                    <Link href={link.href} className="navbar__link">
                                        {link.label}
                                    </Link>
                                ) : (
                                    <a
                                        href={link.href}
                                        className="navbar__link"
                                        onClick={(e) => handleNavClick(e, link.href)}
                                    >
                                        {link.label}
                                    </a>
                                )}
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
                            link.href.startsWith('/') ? (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="navbar__mobile-link"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ) : (
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
                            )
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
