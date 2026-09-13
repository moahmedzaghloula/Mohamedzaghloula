import { ArrowRight, ArrowUpRight, Boxes } from 'lucide-react'
import { SiKubernetes, SiPrometheus, SiTerraform, SiGitlab, SiDocker, SiFastapi, SiFlask, SiAnsible, SiLaravel, SiGrafana, SiArgo, SiPostgresql } from 'react-icons/si'
import type { IconType } from 'react-icons'
import type { Project } from '../data/projects'

const STACK_ICONS: Record<string, IconType> = {
  Kubernetes: SiKubernetes, K3s: SiKubernetes, FastAPI: SiFastapi,
  Prometheus: SiPrometheus, Grafana: SiGrafana, Terraform: SiTerraform,
  'GitLab CI/CD': SiGitlab, 'Docker Compose': SiDocker, Flask: SiFlask,
  Ansible: SiAnsible, Laravel: SiLaravel, 'Argo CD': SiArgo, PostgreSQL: SiPostgresql,
}

const accentClasses: Record<Project['accent'], { border: string; text: string; chip: string }> = {
  red: { border: 'hover:border-red', text: 'text-red', chip: 'border-red/30 text-red' },
  blue: { border: 'hover:border-blue', text: 'text-blue', chip: 'border-blue/30 text-blue' },
  yellow: { border: 'hover:border-yellow', text: 'text-yellow', chip: 'border-yellow/30 text-yellow' },
}

export default function ProjectCard({ title, tagline, description, technologies, metrics, accent, githubUrl }: Project) {
  const hasRepo = Boolean(githubUrl)
  const accentCls = accentClasses[accent]

  const cardInner = (
    <div
      data-accent={accent}
      className={`project-card group relative flex h-full flex-col border border-line bg-bg-1 p-6 transition-all duration-300 ${
        hasRepo ? `cursor-pointer hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-25px_rgba(0,0,0,0.8)] ${accentCls.border}` : 'opacity-80'
      }`}
    >
      <div className="project-stack" aria-hidden="true">
        {technologies.slice(0, 3).map((technology, index) => {
          const Icon = STACK_ICONS[technology] ?? Boxes
          return <div key={technology} className="project-stack-item"><Icon size={27} /><span>{technology}</span>{index < 2 && <ArrowRight className="project-stack-arrow" size={16} />}</div>
        })}
      </div>
      <div className="project-card-heading flex items-start justify-between gap-3">
        <div>
          <h3 className={`font-display text-2xl tracking-wide text-ink`}>{title}</h3>
          <p className="project-tagline text-muted mt-1">{tagline}</p>
        </div>
        <ArrowUpRight
          size={20}
          className={`shrink-0 mt-1 ${accentCls.text} transition-transform duration-300 ${
            hasRepo ? 'group-hover:translate-x-1 group-hover:-translate-y-1' : 'opacity-30'
          }`}
        />
      </div>

      <p className="text-sm text-muted mt-4 leading-relaxed">{description}</p>

      {metrics && metrics.length > 0 && (
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5">
          {metrics.map((m) => (
            <li key={m} className="font-mono text-[11px] text-ink/80 before:content-['//_'] before:text-muted">
              {m}
            </li>
          ))}
        </ul>
      )}

      <div className="project-tags mt-5 flex flex-wrap gap-2">
        {technologies.map((t) => (
          <span key={t} className={`border px-2 py-0.5 text-[11px] font-mono ${accentCls.chip}`}>
            {t}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-6">
        {hasRepo ? (
          <span className={`inline-flex items-center gap-1.5 text-[13px] font-mono ${accentCls.text}`}>
            View Project
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-[13px] font-mono text-muted">
            Repository link pending
          </span>
        )}
      </div>
    </div>
  )

  if (!hasRepo) {
    return (
      <div aria-label={`${title}: repository link not yet configured`} className="h-full">
        {cardInner}
      </div>
    )
  }

  return (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${title} on GitHub (opens in a new tab)`}
      className="block h-full focus-visible:outline-2 focus-visible:outline-yellow"
    >
      {cardInner}
    </a>
  )
}
