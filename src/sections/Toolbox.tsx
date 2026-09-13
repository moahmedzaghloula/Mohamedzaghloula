import SectionHeading from '../components/SectionHeading'
import { skillCategories } from '../data/skills'
import { useReveal } from '../hooks'
import { Cloud, Boxes, GitBranch, Activity, ShieldCheck, TerminalSquare } from 'lucide-react'

const CATEGORY_ICONS = [Cloud, Boxes, GitBranch, Activity, ShieldCheck, TerminalSquare]

export default function Toolbox() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-line">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading number="03" title="MY TOOLBOX" subtitle="/ tools I work with" accent="yellow" />

        <div ref={ref} className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, index) => {
            const Icon = CATEGORY_ICONS[index % CATEGORY_ICONS.length]
            return (
            <div key={cat.label} className="toolbox-category">
              <div className="toolbox-category-header">
                <Icon size={30} strokeWidth={1.5} aria-hidden="true" />
                <p className="font-mono text-[11px]">{cat.command}</p>
              </div>
              <h3 className="font-display text-xl text-ink mb-4">{cat.label}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="toolbox-skill"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  )
}
