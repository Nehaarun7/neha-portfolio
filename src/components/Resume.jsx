import React from 'react'
import { personalInfo } from '../data/portfolioData'
import './Resume.css'

export default function Resume() {
  return (
    <section className="section resume-cta" id="resume" aria-labelledby="resume-heading">
      <div className="container">
        <div className="resume-cta__inner reveal">
          {/* Background decoration */}
          <div className="resume-cta__orb resume-cta__orb--1" aria-hidden="true" />
          <div className="resume-cta__orb resume-cta__orb--2" aria-hidden="true" />

          <div className="resume-cta__content">
            <div className="section-tag">Opportunities</div>
            <h2 className="resume-cta__heading" id="resume-heading">
              Let's Build Something <span>Meaningful</span>
            </h2>
            <p className="resume-cta__desc">
              I'm currently looking for opportunities where I can learn, contribute and grow at the intersection of technology and digital marketing.
            </p>

            <div className="resume-cta__actions">
              <a
                href={personalInfo.resumePath}
                className="btn btn-primary"
                download
                aria-label="Download Neha Arun's Resume PDF"
              >
                <DownloadIcon />
                Download Resume
              </a>
              <a href="#contact" className="btn btn-outline">
                <MailIcon />
                Contact Me
              </a>
            </div>

            <div className="resume-cta__note">
              <span className="resume-cta__note-icon" aria-hidden="true">💼</span>
              Open to internships, learning opportunities and fresher roles in digital marketing, web development and technology.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
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
