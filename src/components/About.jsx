import React from 'react'
import { aboutDescription, aboutCards } from '../data/portfolioData'
import './About.css'

export default function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Who I Am</div>
          <h2 className="section-title" id="about-heading">About <span>Me</span></h2>
          <div className="divider" />
        </div>

        <div className="about__inner">
          {/* Left: Text */}
          <div className="about__text reveal reveal-delay-1">
            <div className="about__badge">
              <span>👋</span> Computer Science Engineering Student
            </div>
            {aboutDescription.map((para, i) => (
              <p key={i} className="about__para">{para}</p>
            ))}

            <div className="about__tags">
              {[
                'Computer Science Engineering','React JS','Web Development',
                'Python','Problem Solving','Digital Marketing',
                'Creativity','Communication','Teamwork','Continuous Learning'
              ].map(tag => (
                <span key={tag} className="about__tag-pill">{tag}</span>
              ))}
            </div>
          </div>

          {/* Right: Cards */}
          <div className="about__cards reveal reveal-delay-2">
            {aboutCards.map((card, i) => (
              <div key={i} className="about__card card">
                <div className="about__card-icon" aria-hidden="true">{card.icon}</div>
                <div>
                  <div className="about__card-label">{card.label}</div>
                  <div className="about__card-value">{card.value}</div>
                </div>
              </div>
            ))}

            {/* Decorative element */}
            <div className="about__deco" aria-hidden="true">
              <div className="about__deco-ring" />
              <div className="about__deco-dot" />
              <span className="about__deco-text">Aspiring Digital Marketer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
