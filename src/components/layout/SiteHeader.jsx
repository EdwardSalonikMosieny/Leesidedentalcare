import * as Dialog from '@radix-ui/react-dialog'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'

const sectionLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About Us', id: 'about-us' },
  { label: 'Our Services', id: 'services' },
  { label: 'Contact Us', id: 'contact' },
]

function SiteHeader() {
  const location = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const goToSection = (id) => {
    if (location.pathname === '/') {
      const section = document.getElementById(id)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
        window.history.replaceState(null, '', `/#${id}`)
      }
    } else {
      navigate(`/#${id}`)
    }

    setOpen(false)
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-logo" to="/">
          <img
            alt="Lee Side Dental Care logo"
            className="site-logo__full"
            src="/images/logo-full.png"
          />
        </Link>

        <nav aria-label="Main navigation" className="desktop-nav">
          <ul className="nav-list">
            {sectionLinks.map((link) => (
              <li key={link.id}>
                <button
                  className="nav-link"
                  onClick={() => goToSection(link.id)}
                  type="button"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="desktop-nav-actions">
          <Button
            className="cta-button"
            onClick={() => goToSection('contact')}
            size="md"
            type="button"
          >
            Let&apos;s talk
          </Button>
        </div>

        <Dialog.Root onOpenChange={setOpen} open={open}>
          <Dialog.Trigger asChild>
            <Button
              aria-label="Open menu"
              className="mobile-menu-trigger"
              size="icon"
              variant="ghost"
            >
              <Menu size={22} />
            </Button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="mobile-menu-overlay" />
            <Dialog.Content className="mobile-menu-content">
              <div className="mobile-menu-header">
                <Dialog.Title>Menu</Dialog.Title>
                <Dialog.Close asChild>
                  <Button aria-label="Close menu" size="icon" variant="ghost">
                    <X size={20} />
                  </Button>
                </Dialog.Close>
              </div>

              <nav aria-label="Mobile navigation" className="mobile-menu-links">
                {sectionLinks.map((link) => (
                  <button
                    className="mobile-nav-link"
                    key={link.id}
                    onClick={() => goToSection(link.id)}
                    type="button"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>

              <Button
                className="mobile-nav-cta cta-button"
                onClick={() => goToSection('contact')}
                size="md"
                type="button"
              >
                Let&apos;s talk
              </Button>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  )
}

export default SiteHeader
