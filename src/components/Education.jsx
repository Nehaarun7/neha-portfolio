import React from 'react'
import { education } from '../data/portfolioData'
import './Education.css'

export default function Education() {
  return (
    <section className="section edu" id="education" aria-labelledby="edu-heading">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Academic Background</div>
          <h2 className="section-title" id="edu-heading">My <span>Education</span></h2>
          <div className="divider" />
        </div>

        <div className="edu__wrapper">
          {education.map((edu, i) => (
            <article key={i} className="edu__card card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="edu__card-left">
                <div className="edu__icon-wrap" aria-hidden="true">
                  <span>{edu.icon}</span>
                </div>
                {i < education.length - 1 && (
                  <div className="edu__timeline-line" aria-hidden="true" />
                )}
              </div>

              <div className="edu__card-body">
                <div className="edu__header">
                  <span className="badge badge-purple">
                    <span aria-hidden="true">📅</span> {edu.year}
                  </span>
                  <span className={`edu__status ${edu.status === 'Currently Pursuing' ? 'edu__status--active' : ''}`}>
                    {edu.status}
                  </span>
                </div>

                <h3 className="edu__degree">{edu.degree}</h3>
                {edu.field && <div className="edu__field">{edu.field}</div>}

                <div className="edu__institution">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                  {edu.institution}
                </div>

                {/* Score */}
                {(edu.cgpa || edu.percentage) && (
                  <div className="edu__score">
                    {edu.cgpa && (
                      <span className="edu__score-pill edu__score-pill--cgpa">
                        🎯 CGPA: {edu.cgpa}
                      </span>
                    )}
                    {edu.percentage && (
                      <span className="edu__score-pill edu__score-pill--pct">
                        📊 {edu.percentage}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}

          {/* Focus card */}
          <div className="edu__focus-card reveal">
            <div className="edu__focus-grid">
              <div className="edu__focus-item">
                <div className="edu__focus-icon" aria-hidden="true">💡</div>
                <div>
                  <div className="edu__focus-label">Current Exploration</div>
                  <div className="edu__focus-value">Digital Marketing & Content</div>
                </div>
              </div>
              <div className="edu__focus-item">
                <div className="edu__focus-icon" aria-hidden="true">🎯</div>
                <div>
                  <div className="edu__focus-label">Career Goal</div>
                  <div className="edu__focus-value">Technology + Marketing</div>
                </div>
              </div>
              <div className="edu__focus-item">
                <div className="edu__focus-icon" aria-hidden="true">🌱</div>
                <div>
                  <div className="edu__focus-label">Internships Done</div>
                  <div className="edu__focus-value">3 Industry Internships</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
