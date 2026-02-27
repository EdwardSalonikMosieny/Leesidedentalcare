import { Mail, MapPin, Phone } from 'lucide-react'

const contactCards = [
  {
    title: 'Visit Us',
    icon: MapPin,
    description:
      'Visit our Nanyuki clinic for modern, gentle dental care for every generation.',
    detail: 'Nanyuki',
  },
  {
    title: 'Call Us',
    icon: Phone,
    description:
      'Call us for appointments, consultations, and urgent dental support.',
    detail: '0700590362',
    href: 'tel:0700590362',
  },
  {
    title: 'Contact Us',
    icon: Mail,
    description: 'Send us an email and we will respond as soon as possible.',
    detail: 'Leesidedentalcare25@gmail.com',
    href: 'mailto:Leesidedentalcare25@gmail.com',
  },
]

function ContactSection() {
  return (
    <section className="contact-shell" id="contact">
      <header className="contact-shell__head">
        <p className="contact-shell__eyebrow">Contact Us</p>
        <h2>Get In Touch</h2>
      </header>

      <div className="contact-strip">
        {contactCards.map((card) => {
          const Icon = card.icon

          return (
            <article className="contact-mini-card" key={card.title}>
              <span className="contact-mini-icon">
                <Icon aria-hidden="true" size={20} />
              </span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              {card.href ? (
                <a className="contact-mini-link" href={card.href}>
                  {card.detail}
                </a>
              ) : (
                <p className="contact-mini-link">{card.detail}</p>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default ContactSection
