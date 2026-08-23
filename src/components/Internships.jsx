import React from 'react'
import { internships } from '../data/portfolioData'
import './Internships.css'

export default function Internships() {
  return (
    <section className="section internships" id="internships" aria-labelledby="internships-heading">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Experience</div>
          <h2 className="section-title" id="internships-heading">Internship <span>Experience</span></h2>
          <div className="divider" />
          <p className="section-subtitle">
            Practical experience gained through internships across front-end development, IVR and industry training.
          </p>
        </div>

        <div className="internships__list">
          {internships.map((item, i) => (
            <article
              key={i}
              className="intern-card card reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Left accent bar */}
              <div
                className="intern-card__bar"
                style={{ background: item.color }}
                aria-hidden="true"
              />

              <div className="intern-card__body">
                {/* Header */}
                <div className="intern-card__header">
                  <div className="intern-card__icon-wrap" style={{ background: `${item.color}18`, border: `1.5px solid ${item.color}35` }} aria-hidden="true">
                    <span>{item.icon}</span>
                  </div>
                  <div className="intern-card__meta">
                    <h3 className="intern-card__role">{item.role}</h3>
                    <div className="intern-card__company">{item.company}</div>
                  </div>
                  <span className="intern-card__duration badge badge-purple">
                    📅 {item.duration}
                  </span>
                </div>

                {/* Points */}
                <ul className="intern-card__points" aria-label={`Responsibilities at ${item.company}`}>
                  {item.points.map((point, j) => (
                    <li key={j} className="intern-card__point">
                      <span
                        className="intern-card__dot"
                        style={{ background: item.color }}
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
