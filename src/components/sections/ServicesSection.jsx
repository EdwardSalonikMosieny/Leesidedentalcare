import {
  AlignHorizontalSpaceBetween,
  Ambulance,
  Baby,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react'

const services = [
  {
    title: 'Preventive Dentistry',
    image: '/images/services/preventive.jpg',
    icon: ShieldCheck,
    items: [
      'Routine checkups and consultations',
      'Professional teeth cleaning',
      'Dental sealants and hygiene education',
    ],
  },
  {
    title: 'Restorative Dentistry',
    image: '/images/services/restorative.jpg',
    icon: Wrench,
    items: [
      'Tooth-coloured fillings',
      'Crowns, bridges, and dentures',
      'Root canal therapy',
    ],
  },
  {
    title: 'Cosmetic Dentistry',
    image: '/images/services/cosmetic.jpg',
    icon: Sparkles,
    items: ['Teeth whitening', 'Veneers', 'Smile enhancement options'],
  },
  {
    title: 'Orthodontic Treatment',
    image: '/images/services/orthodontic.jpg',
    icon: AlignHorizontalSpaceBetween,
    items: [
      'Removable orthodontic treatment',
      'Braces and clear aligners',
      'Retainers',
    ],
  },
  {
    title: 'Pediatric Dentistry',
    image: '/images/services/pediatric.jpg',
    icon: Baby,
    items: [
      'Child-friendly examinations',
      'Preventive treatment for kids',
      'Early orthodontic guidance',
    ],
  },
  {
    title: 'Emergency Dental Care',
    image: '/images/services/emergency.jpg',
    icon: Ambulance,
    items: [
      'Tooth pain and infection treatment',
      'Repair of broken or chipped teeth',
      'Dental trauma and temporary restoration',
    ],
  },
]

function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <header className="services-section__header">
        <h2>Our Services</h2>
        <p>Complete care for a confident smile in every stage of life.</p>
      </header>

      <div className="services-grid">
        {services.map((service) => {
          const Icon = service.icon

          return (
            <article className="service-card" key={service.title}>
              <div className="service-card__image-wrap">
                <img alt={service.title} loading="lazy" src={service.image} />
              </div>

              <div className="service-card__icon-badge">
                <Icon aria-hidden="true" size={18} />
              </div>

              <div className="service-card__body">
                <h3>{service.title}</h3>
                <ul role="list">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default ServicesSection
