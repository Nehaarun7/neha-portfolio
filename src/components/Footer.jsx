import React, { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolioData'
import './Footer.css'

const navLinks = [
  { label: 'Home',      href: '#home' },
  { label: 'About',     href: '#about' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Project',   href: '#project' },
  { label: 'Learning',  href: '#learning' },
  { label: 'Education', href: '#education' },
  { label: 'Contact',   href: '#contact' },
]

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__inner">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-mark" aria-hidden="true">N</span>
              <span className="footer__logo-text">{personalInfo.name}</span>
            </div>
            <p className="footer__tagline">{personalInfo.profile}</p>
            <p className="footer__brand-text">
              A Computer Science Engineering student exploring the intersection of technology and digital marketing.
            </p>
            <div className="footer__socials">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-btn"
                aria-label="Neha Arun on LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-btn"
                aria-label="Neha Arun on GitHub"
              >
                <GitHubIcon />
              </a>
              <a
                href={personalInfo.emailHref}
                className="footer__social-btn"
                aria-label="Email Neha Arun"
              >
                <MailIcon />
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div className="footer__nav">
            <div className="footer__nav-title">Navigation</div>
            <nav aria-label="Footer navigation">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="footer__nav-link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="footer__contact">
            <div className="footer__nav-title">Contact</div>
            <a href={personalInfo.emailHref} className="footer__contact-item" aria-label="Email Neha Arun">
              <MailIcon /> {personalInfo.email}
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__contact-item"
              aria-label="Neha Arun on LinkedIn"
            >
              <LinkedInIcon /> {personalInfo.linkedinLabel}
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__contact-item"
              aria-label="Neha Arun on GitHub"
            >
              <GitHubIcon /> {personalInfo.githubLabel}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <span>© 2026 {personalInfo.name}. All rights reserved.</span>
          <span className="footer__bottom-dot" aria-hidden="true" />
          <span>Made with ❤️ and lots of learning</span>
        </div>
      </div>

      {/* Back to top */}
      <button
        className={`back-to-top${showTop ? ' back-to-top--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="18 15 12 9 6 15"/>
        </svg>
      </button>
    </footer>
  )
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}
