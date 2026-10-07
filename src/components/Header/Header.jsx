import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/boomacloud-logo.png';
import './Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand Logo - Original source of truth */}
        <a href="#top" className="header-brand" aria-label="Boomacloud Home">
          <img
            src={logoImg}
            alt="Boomacloud — Cloud Services"
            className="header-logo"
            width="240"
            height="80"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="header-nav desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            <li>
              <a href="#services" className="nav-link">
                Services
              </a>
            </li>
            <li>
              <a href="#approach" className="nav-link">
                How We Work
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="nav-link">
                Process
              </a>
            </li>
            <li>
              <a href="#estimator" className="nav-link">
                Assessment
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Header Action Button */}
        <div className="header-actions">
          <a href="#contact" className="btn btn-primary header-cta">
            <span>Let's Talk</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>

          {/* Accessible Mobile Menu Toggle Button */}
          <button
            type="button"
            className={`mobile-toggle-btn ${mobileMenuOpen ? 'is-active' : ''}`}
            onClick={toggleMenu}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span className="hamburger-box">
              <span className="hamburger-line top"></span>
              <span className="hamburger-line middle"></span>
              <span className="hamburger-line bottom"></span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation with backdrop */}
      <div
        id="mobile-navigation"
        className={`mobile-drawer ${mobileMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-backdrop" onClick={closeMenu}></div>
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-header">
            <img
              src={logoImg}
              alt="Boomacloud"
              className="mobile-drawer-logo"
            />
            <button
              type="button"
              className="drawer-close-btn"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <nav className="mobile-nav-links" aria-label="Mobile Navigation Links">
            <ul>
              <li>
                <a href="#services" onClick={closeMenu}>
                  Services
                </a>
              </li>
              <li>
                <a href="#approach" onClick={closeMenu}>
                  How We Work
                </a>
              </li>
              <li>
                <a href="#how-it-works" onClick={closeMenu}>
                  Process
                </a>
              </li>
              <li>
                <a href="#estimator" onClick={closeMenu}>
                  Assessment
                </a>
              </li>
              <li>
                <a href="#contact" onClick={closeMenu}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="mobile-drawer-footer">
            <a href="#contact" className="btn btn-primary btn-lg" onClick={closeMenu}>
              Talk to an Engineer
            </a>
            <div className="mobile-support-hint">
              <span>Direct Inquiries:</span>
              <a href="mailto:hello@boomacloud.com">hello@boomacloud.com</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
