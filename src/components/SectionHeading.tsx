interface Props {
  number: string
  title: string
  subtitle: string
  accent?: 'red' | 'blue' | 'yellow'
}

const accentText: Record<string, string> = {
  red: 'text-red',
  blue: 'text-blue',
  yellow: 'text-yellow',
}

export default function SectionHeading({ number, title, subtitle, accent = 'red' }: Props) {
  return (
    <div className="flex items-baseline gap-4 mb-10 md:mb-14">
      <span className={`font-display text-3xl md:text-4xl ${accentText[accent]}`}>{number}.</span>
      <h2 className="font-display text-3xl md:text-5xl tracking-wide text-ink">{title}</h2>
      <span className="hidden sm:block flex-1 h-px bg-line" />
      <span className="font-mono text-xs md:text-sm text-muted whitespace-nowrap">{subtitle}</span>
    </div>
  )
}
