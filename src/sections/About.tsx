import { Lightbulb, RefreshCw, Users, TrendingUp } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { useReveal } from '../hooks'

const TRAITS = [
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    body: 'Traces incidents to root cause across the stack instead of patching symptoms.',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Learner',
    body: 'Picks up new tooling fast and applies it to real production problems.',
  },
  {
    icon: Users,
    title: 'Team Player',
    body: 'Writes runbooks and handover docs so infrastructure knowledge isn\u2019t a bottleneck.',
  },
  {
    icon: TrendingUp,
    title: 'Build & Improve',
    body: 'Treats every pipeline and cluster as something to keep measuring and refining.',
  },
]

export default function About() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="about" className="py-20 md:py-28 border-b border-line">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading number="01" title="ABOUT ME" subtitle="/ more than code" accent="red" />

        <div ref={ref} className="about-layout reveal grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-start">
          <p className="about-story text-muted max-w-xl">
            I spend my time close to production &mdash; containerizing services, wiring up
            Kubernetes delivery, and writing the Terraform and Ansible that stands infrastructure
            up the same way every time. GitOps and CI/CD keep releases boring on purpose, and
            Prometheus and Grafana tell me when they stop being boring. The common thread across
            client work and my day job is platform engineering: making the systems underneath an
            application easier to reason about, not harder.
          </p>

          <div className="about-traits grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TRAITS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="about-trait p-5 transition-colors">
                <Icon size={20} className="text-red mb-3" aria-hidden="true" />
                <h3 className="font-display text-lg tracking-wide text-ink">{title}</h3>
                <p className="mt-1.5 text-sm text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
