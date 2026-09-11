import SectionHeading from '../components/SectionHeading'
import { experience } from '../data/experience'
import { useReveal } from '../hooks'

const dotColor: Record<string, string> = { red: 'bg-red', blue: 'bg-blue' }
const lineColor: Record<string, string> = { red: 'border-red/40', blue: 'border-blue/40' }

export default function Experience() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="experience" className="py-20 md:py-28 border-b border-line bg-bg-1/40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading number="02" title="EXPERIENCE" subtitle="/ turning ideas into production" accent="blue" />

        <div ref={ref} className="reveal relative max-w-3xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" aria-hidden="true" />

          <ol className="space-y-12">
            {experience.map((entry) => (
              <li key={entry.company} className="relative pl-9">
                <span
                  className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 ${lineColor[entry.accent]} ${dotColor[entry.accent]}`}
                  aria-hidden="true"
                />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-2xl tracking-wide text-ink">{entry.company}</h3>
                  <span className="font-mono text-xs text-muted">{entry.period}</span>
                </div>
                <p className={`font-mono text-sm mt-0.5 ${entry.accent === 'red' ? 'text-red' : 'text-blue'}`}>
                  {entry.role}
                  {entry.type ? ` \u00b7 ${entry.type}` : ''}
                </p>

                <ul className="mt-4 space-y-2">
                  {entry.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm text-muted leading-relaxed">
                      <span className="text-muted/60 mt-[2px]">&gt;</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
