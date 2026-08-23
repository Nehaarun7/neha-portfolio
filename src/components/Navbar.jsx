import React, { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolioData'
import './Navbar.css'

const navLinks = [
  { label: 'Home',        href: '#home' },
  { label: 'About',       href: '#about' },
  { label: 'Skills',      href: '#skills' },
  { label: 'Experience',  href: '#internships' },
  { label: 'Project',     href: '#project' },
  { label: 'Learning',    href: '#learning' },
  { label: 'Education',   href: '#education' },
  { label: 'Contact',     href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNav = (href) => {
    setActiveLink(href)
    setMenuOpen(false)
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
      <div className="navbar__inner container">
        {/* Logo */}
        <a href="#home" className="navbar__logo" aria-label="Neha Arun - Home">
          <span className="navbar__logo-mark">N</span>
          <span className="navbar__logo-text">{personalInfo.name}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__link${activeLink === link.href ? ' navbar__link--active' : ''}`}
              onClick={() => handleNav(link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="btn btn-primary navbar__cta"
          onClick={() => handleNav('#contact')}
        >
          Let's Connect
        </a>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__mobile-link"
              onClick={() => handleNav(link.href)}
              tabIndex={menuOpen ? 0 : -1}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary navbar__mobile-cta"
            onClick={() => handleNav('#contact')}
            tabIndex={menuOpen ? 0 : -1}
          >
            Let's Connect
          </a>
        </nav>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="navbar__backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  )
}
