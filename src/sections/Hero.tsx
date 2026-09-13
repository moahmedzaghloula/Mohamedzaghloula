import { ArrowUpRight, ChartNoAxesColumnIncreasing, Cloud, Download } from 'lucide-react'
import { FaEnvelope, FaGithub, FaLinkedin, FaLinux } from 'react-icons/fa6'
import { SiDocker, SiGitlab, SiKubernetes, SiTerraform } from 'react-icons/si'
import { socials, mailtoHref } from '../data/socials'
import heroArtwork from '../assets/hero-artwork.png'
import '../styles/hero.css'

const TECHNOLOGIES = [
  { label: 'AWS', Icon: Cloud, color: 'cloud' },
  { label: 'Kubernetes', Icon: SiKubernetes, color: 'kubernetes' },
  { label: 'Docker', Icon: SiDocker, color: 'docker' },
  { label: 'Terraform', Icon: SiTerraform, color: 'terraform' },
  { label: 'CI/CD', Icon: SiGitlab, color: 'gitlab' },
  { label: 'Linux', Icon: FaLinux, color: 'linux' },
  { label: 'Monitoring', Icon: ChartNoAxesColumnIncreasing, color: 'monitoring' },
]

const TERMINAL_LINES = [
  { command: 'whoami', output: 'Mohamed Zaghloula' },
  { command: 'role', output: 'DevOps Engineer' },
  { command: 'focus', output: 'Cloud / Kubernetes / Automation / SRE' },
  { command: 'status', output: 'Always learning ...' },
]

function SketchArrow({ className = '' }: { className?: string }) {
  return (
    <svg className={`hero-sketch-arrow ${className}`} viewBox="0 0 64 44" fill="none" aria-hidden="true">
      <path d="M5 5C13 30 32 37 56 29M46 25L57 29L51 39" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="home" className="portfolio-hero" aria-labelledby="hero-name">
      <div className="hero-stage">
        <div className="hero-artwork">
          <img src={heroArtwork} alt="Mohamed Zaghloula in sunglasses, a white shirt and a gray sweater" width={2172} height={724} fetchPriority="high" loading="eager" />
        </div>
        <div className="hero-copy">
          <p className="hero-greeting">HELLO, I&apos;M</p>
          <h1 id="hero-name" className="hero-name"><span>MOHAMED</span><span>ZAGHLOULA</span></h1>
          <p className="hero-role">DEVOPS ENGINEER</p>
          <p className="hero-intro">I build reliable infrastructure, automate delivery, and make production easier to understand.</p>
          <div className="hero-actions">
            <a href="#projects" className="hero-button hero-button-primary">View My Work <ArrowUpRight aria-hidden="true" /></a>
            <a href={socials.cvPath} download className="hero-button hero-button-secondary">Download CV <Download aria-hidden="true" /></a>
          </div>
          <div className="hero-socials">
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in a new tab)" title="LinkedIn"><FaLinkedin aria-hidden="true" /></a>
            <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in a new tab)" title="GitHub"><FaGithub aria-hidden="true" /></a>
            <a href={mailtoHref} aria-label="Send an email" title="Email"><FaEnvelope aria-hidden="true" /></a>
          </div>
        </div>
        <div className="hero-person-note hero-handwriting" aria-hidden="true">
          SAME<br />PERSON.<br />BETTER<br />SYSTEMS<SketchArrow />
        </div>
        <div className="hero-shipping-note hero-handwriting" aria-hidden="true"><span>SHIP<br />SCALE<br />MONITOR</span></div>
        <ul className="hero-technologies" aria-label="Core technologies">
          {TECHNOLOGIES.map(({ label, Icon, color }) => (
            <li key={label} className={`hero-technology hero-technology-${color}`}><Icon aria-hidden="true" /><span>{label}</span></li>
          ))}
        </ul>
        <div className="hero-loop-note hero-handwriting" aria-hidden="true">
          BUILD<br />DEPLOY<br />OBSERVE<br />IMPROVE<br />REPEAT<SketchArrow />
        </div>
        <div className="hero-terminal" aria-label="About Mohamed, terminal profile">
          <div className="hero-terminal-controls" aria-hidden="true"><i /><i /><i /></div>
          <dl>
            {TERMINAL_LINES.map(({ command, output }, index) => (
              <div key={command} className="hero-terminal-line">
                <dt><span>mohamed@portfolio:~$</span> {command}</dt>
                <dd>&gt; {output}{index === TERMINAL_LINES.length - 1 && <span className="hero-cursor" aria-hidden="true" />}</dd>
              </div>
            ))}
          </dl>
        </div>
        <blockquote className="hero-quote"><span className="hero-quote-mark" aria-hidden="true">&ldquo;</span><p className="hero-handwriting">Good systems<br />create freedom.</p></blockquote>
        <div className="hero-automate-note hero-handwriting" aria-hidden="true">
          AUTOMATE<br />THE<br />BORING<br /><span>STUFF</span><SketchArrow />
        </div>
        <div className="hero-cluster" aria-hidden="true">
          <div className="hero-globe"><i /><i /><i /><i /><i /></div>
          <p className="hero-handwriting">WORKS<br />ON MY<br /><span>CLUSTER.</span></p>
        </div>
      </div>
    </section>
  )
}
