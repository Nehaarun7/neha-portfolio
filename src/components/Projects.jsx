import React from 'react'
import { otherProjects } from '../data/portfolioData'
import './Projects.css'

export default function Projects() {
  return (
    <section className="section projects" id="other-projects" aria-labelledby="projects-heading">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">More Work</div>
          <h2 className="section-title" id="projects-heading">Other Technical <span>Projects</span></h2>
          <div className="divider" />
          <p className="section-subtitle">
            More projects will be added here as I build and learn.
          </p>
        </div>

        <div className="projects__grid">
          {otherProjects.length > 0 ? (
            otherProjects.map((project, i) => (
              <article key={i} className="project-card card reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="project-card__header">
                  <span className="project-card__folder" aria-hidden="true">📁</span>
                  <div className="project-card__links">
                    {project.github && project.github !== '#' && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__link" aria-label={`GitHub for ${project.title}`}>
                        <GitHubIcon />
                      </a>
                    )}
                    {project.liveDemo && project.liveDemo !== '#' && (
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-card__link" aria-label={`Live demo for ${project.title}`}>
                        <ExternalIcon />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>
                <div className="project-card__tech">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </article>
            ))
          ) : (
            // Placeholder cards
            [1, 2, 3].map((n) => (
              <div key={n} className="project-card project-card--placeholder card reveal">
                <div className="project-card__placeholder-icon" aria-hidden="true">🚧</div>
                <div className="project-card__placeholder-title">Project Coming Soon</div>
                <p className="project-card__placeholder-text">
                  New projects will be added here. Check back soon or visit my GitHub profile.
                </p>
                <a
                  href="https://github.com/Nehaarun7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost project-card__placeholder-btn"
                  aria-label="Visit Neha Arun's GitHub profile"
                >
                  <GitHubIcon /> Visit GitHub
                </a>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}
