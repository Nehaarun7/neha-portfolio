import React, { useState } from 'react'
import { personalInfo } from '../data/portfolioData'
import './Contact.css'

// ─── Formspree Setup (5 minutes) ─────────────────────────────────
// 1. Go to https://formspree.io and sign up FREE
// 2. Click "New Form" → name it "Portfolio Contact"
// 3. Copy the form ID from the endpoint URL (the part after /f/)
//    e.g. https://formspree.io/f/xbjvkpzr  →  FORM_ID = "xbjvkpzr"
// 4. Replace YOUR_FORM_ID below with your actual ID
const FORMSPREE_ID = 'YOUR_FORM_ID'
// ─────────────────────────────────────────────────────────────────

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required.'
    if (!form.email.trim()) {
      errs.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!form.subject.trim()) errs.subject = 'Subject is required.'
    if (!form.message.trim()) errs.message = 'Message is required.'
    else if (form.message.trim().length < 10) errs.message = 'Message must be at least 10 characters.'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    if (FORMSPREE_ID === 'YOUR_FORM_ID') {
      alert('Contact form not configured yet.\n\nPlease email directly: nehaarun2005@gmail.com')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name:    form.name,
          email:   form.email,
          subject: form.subject,
          message: form.message,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const contactItems = [
    { icon: <MailIcon />,     label: 'Email',    value: personalInfo.email,        href: personalInfo.emailHref, external: false },
    { icon: <LinkedInIcon />, label: 'LinkedIn', value: personalInfo.linkedinLabel, href: personalInfo.linkedin,  external: true  },
    { icon: <GitHubIcon />,   label: 'GitHub',   value: personalInfo.githubLabel,   href: personalInfo.github,    external: true  },
  ]

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Get in Touch</div>
          <h2 className="section-title" id="contact-heading">Let's <span>Connect</span></h2>
          <div className="divider" />
          <p className="section-subtitle">
            I'm always open to learning opportunities, internships, projects and meaningful conversations.
          </p>
        </div>

        <div className="contact__inner">
          {/* Left */}
          <div className="contact__info reveal reveal-delay-1">
            <h3 className="contact__info-title">Reach Out</h3>
            <p className="contact__info-text">
              Whether you have an internship opportunity, a project idea or just want to connect — feel free to reach out. I'd love to hear from you!
            </p>

            <div className="contact__items">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="contact__item"
                  {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  aria-label={`${item.label}: ${item.value}`}
                >
                  <div className="contact__item-icon">{item.icon}</div>
                  <div>
                    <div className="contact__item-label">{item.label}</div>
                    <div className="contact__item-value">{item.value}</div>
                  </div>
                  <ArrowIcon />
                </a>
              ))}
            </div>

            <div className="contact__avail">
              <div className="contact__avail-dot" aria-hidden="true" />
              <span>Available for internships and fresher opportunities</span>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact__form-wrap card reveal reveal-delay-2">
            {status === 'success' ? (
              <div className="contact__success" role="alert">
                <div className="contact__success-icon" aria-hidden="true">🎉</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
                <button className="btn btn-outline" onClick={() => setStatus('idle')}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate aria-label="Contact form">

                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="contact-name" className="contact__label">Name <span aria-hidden="true">*</span></label>
                    <input
                      id="contact-name" name="name" type="text"
                      className={`contact__input${errors.name ? ' contact__input--error' : ''}`}
                      placeholder="Your name" value={form.name} onChange={handleChange}
                      autoComplete="name" aria-required="true"
                    />
                    {errors.name && <span className="contact__error" role="alert">{errors.name}</span>}
                  </div>

                  <div className="contact__field">
                    <label htmlFor="contact-email" className="contact__label">Email <span aria-hidden="true">*</span></label>
                    <input
                      id="contact-email" name="email" type="email"
                      className={`contact__input${errors.email ? ' contact__input--error' : ''}`}
                      placeholder="your@email.com" value={form.email} onChange={handleChange}
                      autoComplete="email" aria-required="true"
                    />
                    {errors.email && <span className="contact__error" role="alert">{errors.email}</span>}
                  </div>
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-subject" className="contact__label">Subject <span aria-hidden="true">*</span></label>
                  <input
                    id="contact-subject" name="subject" type="text"
                    className={`contact__input${errors.subject ? ' contact__input--error' : ''}`}
                    placeholder="What's this about?" value={form.subject} onChange={handleChange}
                    aria-required="true"
                  />
                  {errors.subject && <span className="contact__error" role="alert">{errors.subject}</span>}
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-message" className="contact__label">Message <span aria-hidden="true">*</span></label>
                  <textarea
                    id="contact-message" name="message" rows={5}
                    className={`contact__input contact__textarea${errors.message ? ' contact__input--error' : ''}`}
                    placeholder="Your message..." value={form.message} onChange={handleChange}
                    aria-required="true"
                  />
                  {errors.message && <span className="contact__error" role="alert">{errors.message}</span>}
                </div>

                {status === 'error' && (
                  <div className="contact__send-error" role="alert">
                    ⚠️ Something went wrong. Email directly at{' '}
                    <a href={personalInfo.emailHref}>{personalInfo.email}</a>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary contact__submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? <><SpinnerIcon /> Sending...</> : <><SendIcon /> Send Message</>}
                </button>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function MailIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
}
function LinkedInIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
}
function GitHubIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
}
function ArrowIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact__item-arrow" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
}
function SendIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
}
function SpinnerIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true" style={{ animation: 'spin-slow 0.8s linear infinite' }}><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
}
