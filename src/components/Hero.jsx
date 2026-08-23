import React from 'react'
import { personalInfo } from '../data/portfolioData'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Introduction">
      {/* Background orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />
      <div className="hero__orb hero__orb--3" aria-hidden="true" />

      <div className="container hero__inner">
        {/* Left: Text */}
        <div className="hero__content">
          <div className="hero__tag animate-fade-in-up">
            <span className="hero__tag-dot" aria-hidden="true" />
            Available for Internships
          </div>

          <h1 className="hero__heading animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Hi, I'm <span className="hero__name">Neha Arun</span>
          </h1>

          <p className="hero__subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Computer Science Engineering Student <span className="hero__separator" aria-hidden="true">|</span> Aspiring Digital Marketer
          </p>

          <p className="hero__description animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            I'm a Computer Science Engineering student exploring digital marketing while building my technical and creative skills. I enjoy learning how technology, content and digital platforms can come together to create meaningful experiences.
          </p>

          <div className="hero__actions animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a href="#project" className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              View My Project
            </a>
            <a
              href={personalInfo.resumePath}
              className="btn btn-outline"
              download
              aria-label="Download Neha Arun's Resume"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download Resume
            </a>
            <a href="#contact" className="btn btn-ghost">
              Let's Connect
            </a>
          </div>

          {/* Social links */}
          <div className="hero__socials animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="Neha Arun on LinkedIn"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="Neha Arun on GitHub"
            >
              <GitHubIcon />
              GitHub
            </a>
            <a
              href={personalInfo.emailHref}
              className="hero__social-link"
              aria-label="Email Neha Arun"
            >
              <EmailIcon />
              Email
            </a>
          </div>
        </div>

        {/* Right: Illustration */}
        <div className="hero__visual animate-fade-in-up" style={{ animationDelay: '0.25s' }} aria-hidden="true">
          <HeroIllustration />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}

function HeroIllustration() {
  return (
    <div className="hero-illus">
      {/* Main card */}
      <div className="hero-illus__card hero-illus__card--main">
        <div className="hero-illus__screen">
          {/* Browser bar */}
          <div className="hero-illus__browser-bar">
            <span className="hero-illus__dot" style={{ background: '#ff5f56' }} />
            <span className="hero-illus__dot" style={{ background: '#ffbd2e' }} />
            <span className="hero-illus__dot" style={{ background: '#27c93f' }} />
            <div className="hero-illus__url-bar">🔒 portfolio.dev</div>
          </div>
          {/* Code lines */}
          <div className="hero-illus__code">
            <div className="hero-illus__code-line">
              <span style={{ color: '#6C63FF' }}>const</span>
              <span style={{ color: '#F1F0FF' }}> developer </span>
              <span style={{ color: '#EC4899' }}>=</span>
              <span style={{ color: '#10B981' }}> "Neha"</span>
            </div>
            <div className="hero-illus__code-line">
              <span style={{ color: '#6C63FF' }}>const</span>
              <span style={{ color: '#F1F0FF' }}> focus </span>
              <span style={{ color: '#EC4899' }}>=</span>
              <span style={{ color: '#F59E0B' }}> "Digital Marketing"</span>
            </div>
            <div className="hero-illus__code-line">
              <span style={{ color: '#6C63FF' }}>const</span>
              <span style={{ color: '#F1F0FF' }}> status </span>
              <span style={{ color: '#EC4899' }}>=</span>
              <span style={{ color: '#10B981' }}> "Learning 🚀"</span>
            </div>
          </div>
          {/* Mini chart */}
          <div className="hero-illus__chart">
            <div className="hero-illus__chart-label">Learning Progress</div>
            <div className="hero-illus__bars">
              <div className="hero-illus__bar-wrap">
                <div className="hero-illus__bar" style={{ height: '60%', background: '#6C63FF' }} />
                <span>HTML</span>
              </div>
              <div className="hero-illus__bar-wrap">
                <div className="hero-illus__bar" style={{ height: '75%', background: '#EC4899' }} />
                <span>CSS</span>
              </div>
              <div className="hero-illus__bar-wrap">
                <div className="hero-illus__bar" style={{ height: '50%', background: '#F59E0B' }} />
                <span>JS</span>
              </div>
              <div className="hero-illus__bar-wrap">
                <div className="hero-illus__bar" style={{ height: '80%', background: '#10B981' }} />
                <span>Py</span>
              </div>
              <div className="hero-illus__bar-wrap">
                <div className="hero-illus__bar" style={{ height: '35%', background: '#3B82F6' }} />
                <span>SEO</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating mini cards */}
      <div className="hero-illus__mini hero-illus__mini--1">
        <span className="hero-illus__mini-icon">🔍</span>
        <div>
          <div className="hero-illus__mini-title">SEO</div>
          <div className="hero-illus__mini-sub">Learning</div>
        </div>
      </div>

      <div className="hero-illus__mini hero-illus__mini--2">
        <span className="hero-illus__mini-icon">📱</span>
        <div>
          <div className="hero-illus__mini-title">Social Media</div>
          <div className="hero-illus__mini-sub">Exploring</div>
        </div>
      </div>

      <div className="hero-illus__mini hero-illus__mini--3">
        <span className="hero-illus__mini-icon">⚛️</span>
        <div>
          <div className="hero-illus__mini-title">React</div>
          <div className="hero-illus__mini-sub">Building</div>
        </div>
      </div>

      <div className="hero-illus__mini hero-illus__mini--4">
        <span className="hero-illus__mini-icon">✍️</span>
        <div>
          <div className="hero-illus__mini-title">Content</div>
          <div className="hero-illus__mini-sub">Creating</div>
        </div>
      </div>
    </div>
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

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}
