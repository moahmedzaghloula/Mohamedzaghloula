import SectionHeading from '../components/SectionHeading'
import { skillCategories } from '../data/skills'
import { useReveal } from '../hooks'

export default function Toolbox() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-line">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading number="03" title="MY TOOLBOX" subtitle="/ tools I work with" accent="yellow" />

        <div ref={ref} className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat) => (
            <div key={cat.label} className="border border-line bg-bg-1 p-5">
              <p className="font-mono text-[11px] text-yellow mb-1">{cat.command}</p>
              <h3 className="font-display text-xl tracking-wide text-ink mb-3">{cat.label}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="border border-line px-2.5 py-1 text-[12px] font-mono text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
