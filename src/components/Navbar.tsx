import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useScrollSpy } from '../hooks'
import { mailtoHref } from '../data/socials'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const active = useScrollSpy(NAV_ITEMS.map((n) => n.id))
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors ${
        scrolled ? 'bg-[#07111B]/92 backdrop-blur border-line' : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 md:px-8 h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={handleNavClick('home')}
          className="font-display text-2xl text-ink tracking-wide"
          aria-label="MZ home"
        >
          MZ<span className="text-red">/</span>&gt;
        </a>

        <ul className="hidden md:flex items-center gap-7 font-mono text-[13px] uppercase tracking-wide">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={handleNavClick(item.id)}
                aria-current={active === item.id ? 'true' : undefined}
                className={`relative py-1 transition-colors ${
                  active === item.id ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {item.label}
                {active === item.id && (
                  <span className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-red" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-5">
          <span className="flex items-center gap-2 font-mono text-[11px] tracking-wide text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
            </span>
            AVAILABLE FOR OPPORTUNITIES
          </span>
          <a
            href={mailtoHref}
            className="inline-flex items-center gap-1.5 border border-red px-4 py-2 text-[13px] font-mono text-ink hover:bg-red hover:text-bg-0 transition-colors"
          >
            Let's Talk <ArrowUpRight size={14} />
          </a>
        </div>

        <button
          className="md:hidden text-ink"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line bg-bg-0 px-5 pb-6 pt-2">
          <ul className="flex flex-col gap-1 font-mono text-sm uppercase tracking-wide">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={handleNavClick(item.id)}
                  className={`block py-3 border-b border-line/60 ${
                    active === item.id ? 'text-red' : 'text-muted'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between">
            <span className="flex items-center gap-2 font-mono text-[11px] text-muted">
              <span className="h-2 w-2 rounded-full bg-green" />
              AVAILABLE
            </span>
            <a
              href={mailtoHref}
              className="inline-flex items-center gap-1.5 border border-red px-4 py-2 text-[13px] font-mono text-ink"
            >
              Let's Talk <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
