import React from 'react';
import logoImg from '../../assets/boomacloud-logo.png';
import './Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ onOpenLegalModal }) {
  const currentYear = CURRENT_YEAR;

  const handleLegalClick = (title) => {
    if (onOpenLegalModal) {
      onOpenLegalModal(title);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-container">
        {/* Main Footer Grid */}
        <div className="footer-main-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <a href="#top" className="footer-logo-link" aria-label="Boomacloud Home">
              <img
                src={logoImg}
                alt="Boomacloud — Cloud Services"
                className="footer-logo"
                width="225"
                height="75"
              />
            </a>

            <p className="footer-brand-desc">
              Practical cloud architecture, zero-downtime database migrations,
              and hands-on DevOps engineering on AWS, Azure, and Google Cloud.
              Built directly inside your Git repositories with zero vendor lock-in.
            </p>

            <div className="footer-status-pill">
              <span className="footer-pulse-dot" aria-hidden="true"></span>
              <span>Production Engineering & On-Call DevOps</span>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#services">Services</a></li>
              <li><a href="#approach">How We Work</a></li>
              <li><a href="#how-it-works">Project Process</a></li>
              <li><a href="#estimator">Assessment Tool</a></li>
              <li><a href="#contact">Contact & Inquiries</a></li>
            </ul>
          </div>

          {/* Services Col */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Core Services</h4>
            <ul className="footer-links-list">
              <li><a href="#services">Architecture & Strategy</a></li>
              <li><a href="#services">Zero-Downtime Migration</a></li>
              <li><a href="#services">DevOps & Cost Optimization</a></li>
              <li><a href="#services">Security & Compliance</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Direct Inquiries</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="contact-type">Email:</span>
                <a href="mailto:info@boomacloud.com">info@boomacloud.com</a>
              </li>
              <li>
                <span className="contact-type">Phone:</span>
                <a href="tel:+353899811736">+353 89 981 1736</a>
              </li>
              <li>
                <span className="contact-type">HQ:</span>
                <span>#6 Fern road, Sandyford, Dublin 18</span>
              </li>
            </ul>

            <button
              type="button"
              className="footer-back-to-top"
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal Placeholders */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {currentYear} Boomacloud. All rights reserved. Built with React & Vite.
          </p>

          <div className="legal-links">
            <button
              type="button"
              className="legal-link-btn"
              onClick={() => handleLegalClick('Privacy Policy')}
            >
              Privacy Policy
            </button>
            <span className="legal-sep">•</span>
            <button
              type="button"
              className="legal-link-btn"
              onClick={() => handleLegalClick('Terms of Service')}
            >
              Terms of Service
            </button>
            <span className="legal-sep">•</span>
            <button
              type="button"
              className="legal-link-btn"
              onClick={() => handleLegalClick('Security & Compliance')}
            >
              Security Governance
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
