'use client';

import { Fragment, useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { navLinks, navCustomers, services } from '@/data/siteData';
import Button from '@/components/Button/Button';
import './Navbar.css';
import logo from '@/assets/brand/logo.webp';
import logoLight from '@/assets/brand/logo-light.webp';

const serviceItems = [...services.design, ...services.development, ...services.growth];

const mobileDropdownItems = {
    services: serviceItems.map((s) => ({ key: s.id, href: '#services', label: s.title, icon: s.icon })),
    customers: navCustomers.map((c) => ({ key: c.id, href: c.href, label: c.name })),
};

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [mobileExpanded, setMobileExpanded] = useState(null);
    const closeTimer = useRef(null);
    const navRef = useRef(null);
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

    const openMenu = useCallback((name) => {
        clearTimeout(closeTimer.current);
        setOpenDropdown(name);
    }, []);

    const closeMenu = useCallback(() => {
        clearTimeout(closeTimer.current);
        setOpenDropdown(null);
    }, []);

    // Short delay so the pointer can cross from the trigger down into the panel
    const scheduleClose = useCallback(() => {
        clearTimeout(closeTimer.current);
        closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
    }, []);

    useEffect(() => () => clearTimeout(closeTimer.current), []);

    useEffect(() => {
        if (!openDropdown) return;
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeMenu();
        };
        const handlePointerDown = (e) => {
            if (!navRef.current?.contains(e.target)) closeMenu();
        };
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('pointerdown', handlePointerDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('pointerdown', handlePointerDown);
        };
    }, [openDropdown, closeMenu]);

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

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        setMobileExpanded(null);
    };

    // Routes use next/link, hashes scroll on the home page, anything else opens in a new tab
    const renderLink = (href, className, children, onAfterClick) => {
        if (href.startsWith('/')) {
            return (
                <Link href={href} className={className} onClick={onAfterClick}>
                    {children}
                </Link>
            );
        }
        const isExternal = !href.startsWith('#');
        return (
            <a
                href={href}
                className={className}
                {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                onClick={(e) => {
                    if (!isExternal) handleNavClick(e, href);
                    onAfterClick?.();
                }}
            >
                {children}
            </a>
        );
    };

    const renderServicesPanel = () => (
        <ul className="navbar__services-grid">
            {serviceItems.map((s) => (
                <li key={s.id}>
                    {renderLink('#services', 'navbar__service', (
                        <>
                            <i className={`${s.icon} navbar__service-icon`} aria-hidden="true" />
                            <span>{s.title}</span>
                        </>
                    ), closeMenu)}
                </li>
            ))}
        </ul>
    );

    const renderCustomersPanel = () => (
        <ul className="navbar__customers-grid">
            {navCustomers.map((c) => (
                <li key={c.id}>
                    {renderLink(c.href, 'navbar__customer', (
                        <>
                            <span className="navbar__customer-thumb">
                                {c.image ? (
                                    <Image src={c.image} alt="" fill sizes="72px" />
                                ) : (
                                    <span className="navbar__customer-thumb-fallback" aria-hidden="true">
                                        {c.name.charAt(0)}
                                    </span>
                                )}
                            </span>
                            <span className="navbar__customer-body">
                                {c.logo ? (
                                    <Image src={c.logo} alt={c.name} className="navbar__customer-logo" />
                                ) : (
                                    <span className="navbar__customer-name">{c.name}</span>
                                )}
                                <span className="navbar__customer-desc">{c.description}</span>
                            </span>
                        </>
                    ), closeMenu)}
                </li>
            ))}
        </ul>
    );

    const isBlogPage = pathname.startsWith('/blog');
    const isScrolledState = scrolled || isBlogPage;
    const headerClassName = [
        'navbar',
        isScrolledState && 'navbar--scrolled',
        mobileMenuOpen && 'navbar--menu-open',
        openDropdown && 'navbar--dropdown-open',
    ].filter(Boolean).join(' ');

    return (
        <header className={headerClassName}>
            <div className="container navbar__container">
                <Link href="/" onClick={(e) => {
                    if (pathname === '/') {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                }}>
                    {/* White-text logo on dark bars; the original shows once the bar turns white */}
                    <Image className='navbar__logo navbar__logo--light' src={logoLight} alt="Groflex" priority />
                    <Image className='navbar__logo navbar__logo--dark' src={logo} width={80} height={80} alt="" aria-hidden="true" />
                </Link>
                <nav className="navbar__nav" ref={navRef}>
                    <ul className="navbar__list">
                        {navLinks.map((link) => {
                            if (!link.dropdown) {
                                return (
                                    <li key={link.label} className="navbar__item">
                                        {renderLink(link.href, 'navbar__link', link.label)}
                                    </li>
                                );
                            }

                            const isOpen = openDropdown === link.dropdown;
                            const panelId = `navbar-dropdown-${link.dropdown}`;
                            return (
                                <li
                                    key={link.label}
                                    className="navbar__item"
                                    onMouseEnter={() => openMenu(link.dropdown)}
                                    onMouseLeave={scheduleClose}
                                    onBlur={(e) => {
                                        if (e.relatedTarget && !e.currentTarget.contains(e.relatedTarget)) closeMenu();
                                    }}
                                >
                                    <button
                                        type="button"
                                        className={`navbar__link navbar__trigger ${isOpen ? 'is-open' : ''}`}
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                        onClick={() => openMenu(link.dropdown)}
                                    >
                                        {link.label}
                                        <i className="fa-solid fa-chevron-down navbar__chevron" aria-hidden="true" />
                                    </button>
                                    <div id={panelId} className={`navbar__dropdown ${isOpen ? 'open' : ''}`}>
                                        <div className="container">
                                            {link.dropdown === 'services' ? renderServicesPanel() : renderCustomersPanel()}
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="navbar__actions">
                    <Button variant="primary" size="sm" tallyConfig={{ formId: 'kd5KV1', layout: 'modal', width: 676, autoClose: 2500 }}>
                        Book Call
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
                        {navLinks.map((link) => {
                            if (!link.dropdown) {
                                return (
                                    <Fragment key={link.label}>
                                        {renderLink(link.href, 'navbar__mobile-link', link.label, closeMobileMenu)}
                                    </Fragment>
                                );
                            }

                            const isExpanded = mobileExpanded === link.dropdown;
                            return (
                                <div key={link.label} className="navbar__mobile-group">
                                    <button
                                        type="button"
                                        className={`navbar__mobile-link navbar__mobile-trigger ${isExpanded ? 'is-open' : ''}`}
                                        aria-expanded={isExpanded}
                                        onClick={() => setMobileExpanded(isExpanded ? null : link.dropdown)}
                                    >
                                        {link.label}
                                        <i className="fa-solid fa-chevron-down navbar__chevron" aria-hidden="true" />
                                    </button>
                                    {isExpanded && (
                                        <ul className="navbar__mobile-sublist">
                                            {mobileDropdownItems[link.dropdown].map((item) => (
                                                <li key={item.key}>
                                                    {renderLink(item.href, 'navbar__mobile-sublink', (
                                                        <>
                                                            {item.icon && <i className={item.icon} aria-hidden="true" />}
                                                            {item.label}
                                                        </>
                                                    ), closeMobileMenu)}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            );
                        })}
                        <Button variant="primary" size="md" tallyConfig={{ formId: 'kd5KV1', layout: 'modal', width: 676, autoClose: 2500 }} onClick={() => setMobileMenuOpen(false)}>
                            Book Call
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    );
}
