import { Mail, Download, ArrowUpRight, Cloud, Activity } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { SiKubernetes, SiDocker, SiTerraform, SiGitlab, SiLinux } from 'react-icons/si'
import Terminal from '../components/Terminal'
import { LinkedInIcon } from '../components/icons'
import { socials, mailtoHref } from '../data/socials'
import photo from '../assets/img/mohamed-photo.jpg'

const TECH_STRIP = [
  { label: 'AWS', Icon: Cloud },
  { label: 'Kubernetes', Icon: SiKubernetes },
  { label: 'Docker', Icon: SiDocker },
  { label: 'Terraform', Icon: SiTerraform },
  { label: 'GitLab CI/CD', Icon: SiGitlab },
  { label: 'Linux', Icon: SiLinux },
  { label: 'Monitoring', Icon: Activity },
]

const TERMINAL_LINES = [
  { command: 'whoami', output: 'Mohamed Zaghloula' },
  { command: 'role', output: 'DevOps Engineer' },
  { command: 'focus', output: 'Cloud / Kubernetes / Automation / SRE' },
  { command: 'status', output: 'Always learning ...' },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative grid-bg pt-32 pb-20 md:pt-40 md:pb-28 border-b border-line overflow-hidden"
    >
      {/* ambient background wash */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-red/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
          {/* Text column */}
          <div>
            <p className="font-mono text-sm text-red tracking-wide mb-4">
              <span className="text-muted">/</span> HELLO, I&apos;M
            </p>

            <h1 className="font-display leading-[0.92] tracking-wide text-[3.2rem] sm:text-6xl md:text-7xl xl:text-[5.5rem]">
              <span className="block text-ink">MOHAMED</span>
              <span className="block text-red">ZAGHLOULA</span>
            </h1>

            <p className="font-hand text-4xl md:text-5xl text-yellow mt-3 -rotate-1 inline-block relative">
              DevOps Engineer
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="10"
                viewBox="0 0 300 10"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M2 6 C 80 2, 220 9, 298 4" stroke="#FACC15" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </p>

            <p className="mt-7 max-w-xl text-base md:text-lg text-muted leading-relaxed">
              I build reliable infrastructure, automate delivery, and make production easier to
              understand.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 bg-red px-6 py-3 font-mono text-sm text-bg-0 font-medium hover:bg-red/90 transition-colors"
              >
                View My Work <ArrowUpRight size={16} />
              </button>
              <a
                href={socials.cvPath}
                download
                className="inline-flex items-center gap-2 border border-line px-6 py-3 font-mono text-sm text-ink hover:border-ink transition-colors"
              >
                Download CV <Download size={16} />
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in a new tab)"
                className="flex h-10 w-10 items-center justify-center border border-line text-muted hover:text-ink hover:border-ink transition-colors"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in a new tab)"
                className="flex h-10 w-10 items-center justify-center border border-line text-muted hover:text-ink hover:border-ink transition-colors"
              >
                <SiGithub size={18} />
              </a>
              <a
                href={mailtoHref}
                aria-label="Send an email"
                className="flex h-10 w-10 items-center justify-center border border-line text-muted hover:text-ink hover:border-ink transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>

            {/* tech strip */}
            <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-4">
              {TECH_STRIP.map(({ label, Icon }) => (
                <li key={label} className="flex items-center gap-2 text-muted">
                  <Icon size={18} aria-hidden="true" />
                  <span className="font-mono text-[11px] uppercase tracking-wide">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Photo column */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            {/* paint / technical shapes behind the photo — never over the face */}
            <div className="absolute -right-4 top-6 h-[85%] w-[70%] bg-blue/25 -rotate-2" aria-hidden="true" />
            <div className="absolute -left-6 bottom-8 h-[60%] w-[55%] bg-red/25 rotate-3" aria-hidden="true" />
            <div
              className="absolute inset-0 -z-10 border border-line/60"
              style={{ transform: 'translate(14px, 14px)' }}
              aria-hidden="true"
            />

            <p className="font-hand text-2xl text-ink/90 -rotate-2 absolute -left-2 top-2 z-20 hidden md:block max-w-[9rem] leading-tight">
              same person.
              <br />
              better systems.
            </p>

            <div className="relative z-10 border-2 border-line bg-bg-1 p-2">
              <img
                src={photo}
                alt="Mohamed Zaghloula"
                width={1100}
                height={1467}
                loading="eager"
                fetchPriority="high"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="absolute -right-3 -bottom-5 z-20 rotate-2 bg-yellow px-3 py-2 shadow-lg">
              <p className="font-hand text-lg leading-tight text-bg-0">
                SHIP
                <br />
                SCALE
                <br />
                MONITOR
              </p>
            </div>

            <p className="font-hand text-xl text-blue absolute -top-6 right-6 hidden lg:block rotate-2">
              build → deploy → observe → improve → repeat
            </p>
          </div>
        </div>

        {/* terminal panel */}
        <div className="mt-16 md:mt-20 max-w-xl">
          <Terminal lines={TERMINAL_LINES} />
        </div>
      </div>
    </section>
  )
}
