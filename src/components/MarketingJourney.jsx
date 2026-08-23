import React from 'react'
import { marketingJourney } from '../data/portfolioData'
import './MarketingJourney.css'

export default function MarketingJourney() {
  return (
    <section className="section mj" id="learning" aria-labelledby="mj-heading">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">My Path</div>
          <h2 className="section-title" id="mj-heading">My Digital Marketing <span>Journey</span></h2>
          <div className="divider" />
          <p className="section-subtitle">
            I'm currently at the beginning of my digital marketing journey and exploring the fundamentals step by step.
          </p>
        </div>

        <div className="mj__timeline" role="list">
          {marketingJourney.map((step, i) => (
            <div key={i} className="mj__item reveal" style={{ transitionDelay: `${i * 0.1}s` }} role="listitem">
              {/* Connector line */}
              {i < marketingJourney.length - 1 && (
                <div className="mj__connector" aria-hidden="true" />
              )}

              {/* Step icon */}
              <div
                className="mj__icon-wrap"
                style={{ background: `${step.color}18`, border: `2px solid ${step.color}40` }}
                aria-hidden="true"
              >
                <span className="mj__icon">{step.icon}</span>
              </div>

              {/* Content */}
              <div className="mj__content card">
                <div className="mj__content-header">
                  <div>
                    <div
                      className="mj__step-num"
                      style={{ color: step.color, background: `${step.color}15` }}
                    >
                      Step {step.step} — {step.status}
                    </div>
                    <h3 className="mj__step-title">{step.title}</h3>
                  </div>
                  {step.badge && (
                    <span className="badge badge-pink">{step.badge}</span>
                  )}
                </div>
                <p className="mj__step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mj__footer reveal">
          <span aria-hidden="true">🌱</span>
          <span>This journey is ongoing. Every day I learn something new about digital marketing, content and technology.</span>
        </div>
      </div>
    </section>
  )
}
