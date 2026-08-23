import React from 'react'
import { volunteeringData, positionsOfResponsibility, nonTechnicalSkills, hobbies } from '../data/portfolioData'
import './Volunteering.css'

export default function Volunteering() {
  return (
    <section className="section volunteering" id="volunteering" aria-labelledby="vol-heading">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Beyond Academics</div>
          <h2 className="section-title" id="vol-heading">Involvement & <span>Leadership</span></h2>
          <div className="divider" />
        </div>

        <div className="vol__grid">
          {/* Positions of Responsibility */}
          <div className="vol__block reveal reveal-delay-1">
            <h3 className="vol__block-title">
              <span aria-hidden="true">🏆</span> Positions of Responsibility
            </h3>
            <div className="vol__pos-list">
              {positionsOfResponsibility.map((pos, i) => (
                <article key={i} className="vol__pos-card card">
                  <div className="vol__pos-header">
                    <span className="vol__pos-icon" aria-hidden="true">{pos.icon}</span>
                    <div>
                      <div className="vol__pos-role">{pos.position}</div>
                      <div className="vol__pos-org">{pos.organization}</div>
                    </div>
                  </div>
                  <ul className="vol__pos-points" aria-label={`Responsibilities as ${pos.position}`}>
                    {pos.responsibilities.map((r, j) => (
                      <li key={j} className="vol__pos-point">
                        <span className="vol__dot" aria-hidden="true" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="vol__right">
            {/* Volunteering */}
            <div className="vol__block reveal reveal-delay-2">
              <h3 className="vol__block-title">
                <span aria-hidden="true">🤝</span> Volunteering Experience
              </h3>
              <div className="vol__table card">
                <div className="vol__table-head">
                  <span>Event / Organisation</span>
                  <span>Role</span>
                </div>
                {volunteeringData.map((v, i) => (
                  <div key={i} className="vol__table-row">
                    <span className="vol__table-event">{v.event}</span>
                    <span className="vol__table-role">{v.role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Non-technical skills */}
            <div className="vol__block reveal reveal-delay-3">
              <h3 className="vol__block-title">
                <span aria-hidden="true">💡</span> Non-Technical Skills
              </h3>
              <div className="vol__soft-skills">
                {nonTechnicalSkills.map((s) => (
                  <div key={s.name} className="vol__soft-pill">
                    <span aria-hidden="true">{s.icon}</span> {s.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div className="vol__block reveal reveal-delay-3">
              <h3 className="vol__block-title">
                <span aria-hidden="true">🌟</span> Interests & Hobbies
              </h3>
              <div className="vol__hobbies">
                {hobbies.map((h) => (
                  <span key={h} className="vol__hobby-pill">{h}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
