import React from 'react'
import { featuredProject } from '../data/portfolioData'
import './FeaturedProject.css'

export default function FeaturedProject() {
  return (
    <section className="section featured-project" id="project" aria-labelledby="featured-project-heading">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Featured Work</div>
          <h2 className="section-title" id="featured-project-heading">My <span>Project</span></h2>
          <div className="divider" />
        </div>

        <div className="fp__inner reveal">
          {/* Left: Info */}
          <div className="fp__info">
            <span className="badge badge-purple fp__badge">
              <span aria-hidden="true">🎓</span> {featuredProject.badge}
            </span>

            <h3 className="fp__title">{featuredProject.title}</h3>

            <p className="fp__desc">{featuredProject.description}</p>
            <p className="fp__desc">{featuredProject.additionalDescription}</p>

            {/* Tech stack */}
            <div className="fp__tech-section">
              <div className="fp__section-label">Tech Stack</div>
              <div className="fp__tech-list">
                {featuredProject.techStack.map((tech) => (
                  <span key={tech} className="tech-pill">{tech}</span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="fp__features-section">
              <div className="fp__section-label">Key Features</div>
              <ul className="fp__features" aria-label="Project features">
                {featuredProject.features.map((f) => (
                  <li key={f} className="fp__feature">
                    <span className="fp__feature-dot" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            <div className="fp__actions">
              <a
                href={featuredProject.github}
                className="btn btn-outline"
                aria-label="View source code for QR Based Hostel Leave Management System"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
                View Code
              </a>
              <a
                href={featuredProject.liveDemo}
                className="btn btn-primary"
                aria-label="View QR Based Hostel Leave Management System project"
              >
                <ExternalIcon />
                View Project
              </a>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="fp__visual" aria-label="QR Based Hostel Leave Management System workflow diagram">
            <QRWorkflowDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}

function QRWorkflowDiagram() {
  const steps = [
    { icon: '👩‍💻', label: 'Student', sub: 'Initiates request', color: '#6C63FF' },
    { icon: '📝', label: 'Apply for Leave', sub: 'Online application form', color: '#8B5CF6' },
    { icon: '📱', label: 'Generate QR Code', sub: 'Unique QR for each request', color: '#EC4899' },
    { icon: '🔍', label: 'Warden Scans QR', sub: 'Quick verification', color: '#F59E0B' },
    { icon: '✅', label: 'Approve / Verify', sub: 'Digital approval granted', color: '#10B981' },
  ]

  return (
    <div className="qr-diagram">
      <div className="qr-diagram__header">
        <span className="qr-diagram__title">🏨 Hostel Leave Management</span>
        <span className="badge badge-green">Digital Workflow</span>
      </div>

      <div className="qr-diagram__steps">
        {steps.map((step, i) => (
          <React.Fragment key={step.label}>
            <div className="qr-step">
              <div
                className="qr-step__icon"
                style={{
                  background: `${step.color}18`,
                  border: `1.5px solid ${step.color}40`,
                }}
                aria-hidden="true"
              >
                {step.icon}
              </div>
              <div className="qr-step__body">
                <div className="qr-step__label" style={{ color: step.color }}>{step.label}</div>
                <div className="qr-step__sub">{step.sub}</div>
              </div>
              <div
                className="qr-step__num"
                style={{ background: `${step.color}18`, color: step.color }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="qr-diagram__arrow" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B6899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="qr-diagram__footer">
        <div className="qr-diagram__benefit">
          <span aria-hidden="true">📄</span> Paperless Process
        </div>
        <div className="qr-diagram__benefit">
          <span aria-hidden="true">⚡</span> Fast Verification
        </div>
        <div className="qr-diagram__benefit">
          <span aria-hidden="true">🔒</span> Organized Records
        </div>
      </div>
    </div>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}
