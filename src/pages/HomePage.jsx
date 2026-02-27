import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SiteHeader from '../components/layout/SiteHeader'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import ServicesSection from '../components/sections/ServicesSection'
import ContactSection from '../components/sections/ContactSection'
import SiteFooter from '../components/layout/SiteFooter'

function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      return
    }

    const id = location.hash.replace('#', '')
    const section = document.getElementById(id)
    if (!section) {
      return
    }

    requestAnimationFrame(() => {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [location.hash])

  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}

export default HomePage
