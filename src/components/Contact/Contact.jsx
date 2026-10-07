import React, { useState } from 'react';
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import './Contact.css';

export default function Contact({ prefilledService, prefilledNotes }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    serviceInterest: 'Cloud Strategy & Architecture',
    projectScope: 'Under $50k',
    message: '',
  });

  const [prevService, setPrevService] = useState(prefilledService);
  const [prevNotes, setPrevNotes] = useState(prefilledNotes);

  if (prefilledService !== prevService) {
    setPrevService(prefilledService);
    if (prefilledService) {
      setFormData((prev) => ({
        ...prev,
        serviceInterest: prefilledService,
      }));
    }
  }

  if (prefilledNotes !== prevNotes) {
    setPrevNotes(prefilledNotes);
    if (prefilledNotes) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message
          ? `${prev.message}\n\n[Assessment Context: ${prefilledNotes}]`
          : `[Assessment Context: ${prefilledNotes}]`,
      }));
    }
  }

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionState, setSubmissionState] = useState(null); // null | 'validated'
  const [copied, setCopied] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Please enter your full name.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters.';
        return '';
      case 'email':
        if (!value.trim()) return 'Please enter your work email.';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) return 'Please enter a valid email address.';
        return '';
      case 'message':
        if (!value.trim()) return 'Please share a brief note about your project.';
        if (value.trim().length < 10) return 'Message must be at least 10 characters.';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time clearance of error
    if (errors[name]) {
      const fieldError = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: fieldError }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const fieldError = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all required fields
    const newErrors = {};
    ['fullName', 'email', 'message'].forEach((field) => {
      const err = validateField(field, formData[field]);
      if (err) newErrors[field] = err;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Focus first error field
      const firstErrorField = Object.keys(newErrors)[0];
      const el = document.getElementById(firstErrorField);
      if (el) el.focus();
      return;
    }

    setIsSubmitting(true);
    // Simulate frontend validation check
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionState('validated');
    }, 400);
  };

  // Generate mailto link with encoded content
  const mailtoSubject = encodeURIComponent(`Boomacloud Inquiry: ${formData.serviceInterest} - ${formData.fullName}`);
  const mailtoBody = encodeURIComponent(
    `Name: ${formData.fullName}\nWork Email: ${formData.email}\nCompany: ${formData.company || 'N/A'}\nService Needed: ${formData.serviceInterest}\nProject Scope: ${formData.projectScope}\n\nProject Details:\n${formData.message}`
  );
  const mailtoUrl = `mailto:info@boomacloud.com?subject=${mailtoSubject}&body=${mailtoBody}`;

  const handleCopy = () => {
    const textToCopy = `Name: ${formData.fullName}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\nService: ${formData.serviceInterest}\nMessage: ${formData.message}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const resetForm = () => {
    setSubmissionState(null);
    setFormData({
      fullName: '',
      email: '',
      company: '',
      serviceInterest: 'Cloud Strategy & Architecture',
      projectScope: 'Under $50k',
      message: '',
    });
    setErrors({});
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal className="section-header" yOffset={28}>
          <span className="badge badge-orange">Get in touch</span>
          <h2 className="section-title">Tell Us What You're Building</h2>
          <p className="section-subtitle">
            No aggressive sales scripts or generic pitch decks. Share what's working, what's breaking,
            or what you're planning, and an experienced cloud engineer will get back to you within one business day.
          </p>
        </ScrollReveal>

        <div className="contact-layout">
          {/* Left Column: Direct Company Details & Placeholders */}
          <ScrollReveal yOffset={32} style={{ height: '100%' }}>
            <div className="contact-info-panel" style={{ height: '100%' }}>
              <div className="info-block-header">
                <h3>Direct Contacts & Office</h3>
                <p>
                  Prefer to write directly or give us a call? Feel free to reach out using the details below.
                </p>
              </div>

              <div className="contact-details-list">
                <div className="contact-detail-item">
                  <div className="detail-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="detail-label">Email</span>
                    <a href="mailto:info@boomacloud.com" className="detail-value">
                      info@boomacloud.com
                    </a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="detail-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <span className="detail-label">Phone</span>
                    <a href="tel:+353899811736" className="detail-value">
                      +353 89 981 1736
                    </a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="detail-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <span className="detail-label">Address</span>
                    <p className="detail-value-text">
                      #6 Fern road, Sandyford,<br />
                      Dublin 18
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Contact Form */}
          <ScrollReveal yOffset={32} staggerDelay={0.12} style={{ height: '100%' }}>
            <div className="contact-form-panel card" style={{ height: '100%' }}>
            {submissionState === 'validated' ? (
              <div className="submission-outcome-box">
                <div className="outcome-icon" aria-hidden="true">✓</div>
                <h3 className="outcome-title">Your Inquiry Is Ready</h3>
                <p className="outcome-desc">
                  Thanks for getting in touch. Your message details have been validated and formatted.
                </p>

                {/* Clear Transparency on Backend Readiness */}
                <div className="backend-readiness-notice">
                  <strong>Backend Endpoint Notice:</strong>
                  <p>
                    This form is connected to a client-side validation handler and ready for your production API
                    (AWS API Gateway, Formspree, or SendGrid). In the meantime, you can send this note right now
                    using your email app:
                  </p>
                </div>

                <div className="outcome-actions">
                  <a
                    href={mailtoUrl}
                    className="btn btn-primary btn-lg outcome-email-btn"
                  >
                    <span>Send via Email Client</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </a>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCopy}
                  >
                    {copied ? '✓ Copied to Clipboard!' : 'Copy Form Details'}
                  </button>

                  <button
                    type="button"
                    className="outcome-reset-link"
                    onClick={resetForm}
                  >
                    ← Edit or Submit Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="consultation-form">
                <div className="form-header-note">
                  <h3>Start a Technical Conversation</h3>
                  <p>Tell us a bit about your current stack, and an engineer will reply within one business day.</p>
                </div>

                {/* Row 1: Full Name & Email */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">
                      Full Name <span className="req-star" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`form-input ${errors.fullName ? 'has-error' : ''}`}
                      placeholder="e.g. Sarah Jenkins"
                      aria-required="true"
                      aria-invalid={errors.fullName ? 'true' : 'false'}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    />
                    {errors.fullName && (
                      <span id="fullName-error" className="error-msg" role="alert">
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Work Email <span className="req-star" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`form-input ${errors.email ? 'has-error' : ''}`}
                      placeholder="sarah@company.com"
                      aria-required="true"
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <span id="email-error" className="error-msg" role="alert">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Row 2: Company & Service */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company" className="form-label">
                      Company Name <span className="optional-tag">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="e.g. Acme Technologies"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="serviceInterest" className="form-label">
                      Primary Cloud Need
                    </label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="Cloud Strategy & Architecture">Cloud Strategy & Architecture</option>
                      <option value="Cloud Migration">Cloud Migration</option>
                      <option value="Managed Cloud & Optimization">Managed Cloud & Optimization</option>
                      <option value="Cloud Security & Resilience">Cloud Security & Resilience</option>
                      <option value="Full Infrastructure Review">Comprehensive Overhaul</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Project Details & Scope <span className="req-star" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-textarea ${errors.message ? 'has-error' : ''}`}
                    placeholder="Describe your current cloud footprint, goals, and any upcoming migration or optimization timelines..."
                    aria-required="true"
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  ></textarea>
                  {errors.message && (
                    <span id="message-error" className="error-msg" role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>

                <div className="form-submit-row">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg form-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Validating Details...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </>
                    )}
                  </button>

                  <span className="submit-disclaimer">
                    Configurable mail link & endpoint integration
                  </span>
                </div>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);
}
