import { useEffect, useRef, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useScrollSpy } from '../hooks'
import { mailtoHref } from '../data/socials'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]
const NAV_IDS = NAV_ITEMS.map(({ id }) => id)

export default function Navbar() {
  const active = useScrollSpy(NAV_IDS)
  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const menuButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButton.current?.focus()
      }
    }
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setOpen(false)
    }
    const desktop = window.matchMedia('(min-width: 900px)')
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false) }
    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOutside)
    desktop.addEventListener('change', closeOnDesktop)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOutside)
      desktop.removeEventListener('change', closeOnDesktop)
    }
  }, [open])

  return (
    <header className="portfolio-header" ref={headerRef}>
      <nav className="portfolio-nav" aria-label="Primary navigation">
        <a href="#home" className="portfolio-logo" aria-label="Mohamed Zaghloula, home" onClick={() => setOpen(false)}><span>MZ</span><span>/&gt;</span></a>
        <div className="portfolio-nav-center">
          <ul className="portfolio-nav-links">
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}><a href={`#${id}`} aria-current={active === id ? 'location' : undefined}>{label}</a></li>
            ))}
          </ul>
          <a href={mailtoHref} className="portfolio-nav-talk">Let&apos;s Talk <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
        <span className="portfolio-availability"><i aria-hidden="true" />AVAILABLE FOR OPPORTUNITIES</span>
        <button ref={menuButton} className="portfolio-menu-button" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="portfolio-mobile-menu" onClick={() => setOpen(value => !value)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <nav id="portfolio-mobile-menu" className="portfolio-mobile-menu" aria-label="Mobile navigation">
          {NAV_ITEMS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={16} aria-hidden="true" /></a>
          ))}
          <a href={mailtoHref} onClick={() => setOpen(false)}>Let&apos;s Talk <ArrowUpRight size={16} aria-hidden="true" /></a>
          <span className="portfolio-availability"><i aria-hidden="true" />AVAILABLE FOR OPPORTUNITIES</span>
        </nav>
      )}
    </header>
  )
}
