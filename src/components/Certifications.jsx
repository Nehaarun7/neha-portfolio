import React from 'react'
import { certifications } from '../data/portfolioData'
import './Certifications.css'

const statusConfig = {
  'completed': { class: 'cert-card__status--completed', icon: '✅' },
  'coming-soon': { class: 'cert-card__status--coming', icon: '⏳' },
  'learning':    { class: 'cert-card__status--learning', icon: '📚' },
}

export default function Certifications() {
  return (
    <section className="section certs" aria-labelledby="certs-heading">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Achievements</div>
          <h2 className="section-title" id="certs-heading">Certifications & <span>Achievements</span></h2>
          <div className="divider" />
          <p className="section-subtitle">
            Workshops, certifications and recognitions earned through learning and participation.
          </p>
        </div>

        <div className="certs__grid">
          {certifications.map((cert, i) => {
            const config = statusConfig[cert.statusType] || statusConfig['completed']
            return (
              <article key={i} className="cert-card card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="cert-card__icon" aria-hidden="true">{cert.icon}</div>
                <h3 className="cert-card__title">{cert.title}</h3>
                <div className="cert-card__provider">{cert.provider}</div>
                {cert.year && <div className="cert-card__year">{cert.year}</div>}
                <div className={`cert-card__status ${config.class}`}>
                  <span aria-hidden="true">{config.icon}</span>
                  {cert.status}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
