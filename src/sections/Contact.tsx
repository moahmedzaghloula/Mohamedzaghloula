import { Mail, MapPin, ArrowUpRight } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import SectionHeading from '../components/SectionHeading'
import { LinkedInIcon } from '../components/icons'
import { socials, mailtoHref } from '../data/socials'
import { useReveal } from '../hooks'

const ITEMS = [
  { icon: Mail, label: socials.email, href: mailtoHref, external: false },
  { icon: LinkedInIcon, label: socials.linkedinDisplay, href: socials.linkedin, external: true },
  { icon: SiGithub, label: socials.githubDisplay, href: socials.github, external: true },
]

export default function Contact() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading number="05" title="LET'S CONNECT" subtitle="/ open for opportunities" accent="blue" />

        <div ref={ref} className="reveal grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-14 items-center">
          <div>
            <ul className="space-y-4">
              {ITEMS.map(({ icon: Icon, label, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 border-b border-line py-3 text-ink hover:text-red transition-colors"
                  >
                    <Icon size={20} className="text-muted group-hover:text-red transition-colors" />
                    <span className="font-mono text-sm md:text-base">{label}</span>
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-4 py-3 text-muted">
                <MapPin size={20} />
                <span className="font-mono text-sm md:text-base">{socials.location}</span>
              </li>
            </ul>

            <a
              href={mailtoHref}
              className="mt-9 inline-flex items-center gap-2 bg-red px-7 py-3.5 font-mono text-sm text-bg-0 font-medium hover:bg-red/90 transition-colors"
            >
              Let&apos;s Talk <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -right-4 text-blue" aria-hidden="true">
              <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
                <path d="M8 40 C 20 10, 45 5, 55 22" stroke="currentColor" strokeWidth="1.5" />
                <path d="M48 18 L 56 23 L 50 30" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
            <p className="font-hand text-3xl text-blue rotate-1 text-right">
              let&apos;s build something
              <br />
              reliable together.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
