import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { useReveal } from '../hooks'

export default function Projects() {
  const ref = useReveal<HTMLDivElement>()
  const featured = projects.filter((p) => p.featured)
  const optional = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-line bg-bg-1/40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading number="04" title="FEATURED PROJECTS" subtitle="/ real projects. real impact." accent="red" />

        <div ref={ref} className="reveal grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {featured.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>

        {optional.length > 0 && (
          <div className="mt-14">
            <p className="font-mono text-xs text-muted mb-5">/ additional work</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {optional.map((p) => (
                <ProjectCard key={p.title} {...p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
