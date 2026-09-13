import SectionHeading from '../components/SectionHeading'
import { experience } from '../data/experience'
import { useReveal } from '../hooks'

export default function Experience() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="experience" className="py-20 md:py-28 border-b border-line bg-bg-1/40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading number="02" title="EXPERIENCE" subtitle="/ turning ideas into production" accent="blue" />

        <div ref={ref} className="reveal">
          <ol className="experience-list">
            {experience.map((entry) => (
              <li key={entry.company} className="experience-entry" data-accent={entry.accent}>
                <div className="experience-summary">
                  <span className="experience-period">{entry.period}</span>
                  <h3>{entry.company}</h3>
                  <p className="experience-role">{entry.role}</p>
                  {entry.type && <p className="experience-type">{entry.type}</p>}
                </div>
                <ul className="experience-details space-y-3">
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
