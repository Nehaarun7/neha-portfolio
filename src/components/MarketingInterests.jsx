import React from 'react'
import { marketingInterests } from '../data/portfolioData'
import './MarketingInterests.css'

export default function MarketingInterests() {
  return (
    <section className="section mi" aria-labelledby="mi-heading">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Areas of Interest</div>
          <h2 className="section-title" id="mi-heading">Marketing <span>Interests</span></h2>
          <div className="divider" />
          <p className="section-subtitle">
            These are areas I find fascinating and am actively exploring as a digital marketing beginner.
          </p>
        </div>

        <div className="mi__grid">
          {marketingInterests.map((item, i) => (
            <article
              key={i}
              className="mi__card card reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div
                className="mi__card-icon"
                style={{ background: `${item.color}15`, border: `1.5px solid ${item.color}30` }}
                aria-hidden="true"
              >
                <span>{item.icon}</span>
              </div>
              <h3 className="mi__card-title" style={{ color: item.color }}>{item.title}</h3>
              <p className="mi__card-desc">{item.description}</p>
              <div className="mi__card-footer">
                <span className="mi__interest-tag">Exploring</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mi__note reveal">
          <span aria-hidden="true">ℹ️</span>
          These represent areas of genuine interest and curiosity, not professional services or expertise.
        </div>
      </div>
    </section>
  )
}
