import { ShieldCheck, Sparkles, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const trustItems = [
  { icon: ShieldCheck, label: 'Trusted Care' },
  { icon: Sparkles, label: 'Modern Equipment' },
  { icon: Users, label: 'Family-Friendly' },
]

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-section__content">
        <h1>
          <span className="hero-section__title-line">Welcome to Lee Dental</span>
          <span className="hero-section__title-line">Care Services,</span>
        </h1>
        <p className="hero-section__subtitle">
          where gentle care meets modern dentistry.
        </p>
        <p className="hero-section__description">
          Enjoy a comfortable visit and a healthy, confident, pain-free smile.
          Book today.
        </p>

        <div className="hero-section__actions">
          <Button asChild size="md">
            <Link to="/contact">Book Appointment</Link>
          </Button>
          <Button asChild className="hero-section__whatsapp" size="md" variant="outline">
            <a href="#contact">Call / WhatsApp</a>
          </Button>
        </div>

        <ul className="hero-section__trust" role="list">
          {trustItems.map((item) => {
            const Icon = item.icon

            return (
              <li className="hero-section__trust-item" key={item.label}>
                <Icon aria-hidden="true" size={16} />
                <span>{item.label}</span>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="hero-section__media">
        <img
          alt="Dental professional providing gentle modern dental care"
          loading="eager"
          src="/images/hero.jpg"
        />
      </div>
    </section>
  )
}

export default HeroSection
