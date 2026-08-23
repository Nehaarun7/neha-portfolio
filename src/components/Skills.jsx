import React from 'react'
import { technicalSkills, learningAreas } from '../data/portfolioData'
import './Skills.css'

export default function Skills() {
  return (
    <section className="section skills" id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">What I Know & Learn</div>
          <h2 className="section-title" id="skills-heading">Skills & What I'm <span>Learning</span></h2>
          <div className="divider" />
          <p className="section-subtitle">
            A mix of technical skills I've built through projects and digital marketing areas I'm actively exploring.
          </p>
        </div>

        <div className="skills__grid">
          {/* Technical Skills */}
          <div className="skills__block card reveal reveal-delay-1">
            <div className="skills__block-header">
              <div className="skills__block-icon" aria-hidden="true">💻</div>
              <div>
                <h3 className="skills__block-title">Technical Skills</h3>
                <p className="skills__block-sub">Built through academic projects</p>
              </div>
            </div>
            <div className="skills__pills">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="skill-pill">
                  <span className="skill-pill__icon" aria-hidden="true">{skill.icon}</span>
                  <span className="skill-pill__name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Areas */}
          <div className="skills__block card reveal reveal-delay-2">
            <div className="skills__block-header">
              <div className="skills__block-icon skills__block-icon--pink" aria-hidden="true">📈</div>
              <div>
                <h3 className="skills__block-title">Digital Marketing</h3>
                <p className="skills__block-sub">Areas I'm actively learning</p>
              </div>
              <span className="badge badge-pink skills__learning-badge">
                <span aria-hidden="true">✨</span> Currently Learning
              </span>
            </div>

            <div className="skills__note">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              These are learning areas, not claimed professional expertise.
            </div>

            <div className="skills__pills">
              {learningAreas.map((area) => (
                <div key={area.name} className="skill-pill skill-pill--learning">
                  <span className="skill-pill__icon" aria-hidden="true">{area.icon}</span>
                  <span className="skill-pill__name">{area.name}</span>
                  <span className="skill-pill__dot" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="skills__footer reveal">
          <div className="skills__footer-card">
            <span className="skills__footer-icon" aria-hidden="true">🚀</span>
            <div>
              <div className="skills__footer-title">Always Learning</div>
              <div className="skills__footer-text">
                I'm a Computer Science student who is beginning to explore digital marketing. Every day is a new learning opportunity.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
