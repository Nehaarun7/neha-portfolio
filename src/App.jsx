import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Internships from './components/Internships'
import FeaturedProject from './components/FeaturedProject'
import Projects from './components/Projects'
import MarketingJourney from './components/MarketingJourney'
import MarketingInterests from './components/MarketingInterests'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Volunteering from './components/Volunteering'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )
    const els = document.querySelectorAll('.reveal')
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Internships />
        <FeaturedProject />
        <Projects />
        <MarketingJourney />
        <MarketingInterests />
        <Education />
        <Certifications />
        <Volunteering />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
