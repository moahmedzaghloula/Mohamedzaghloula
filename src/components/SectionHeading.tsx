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
    <div className="section-heading" data-accent={accent}>
      <span className={`section-number ${accentText[accent]}`}>{number}.</span>
      <h2>{title}</h2>
      <span className="section-heading-rule" aria-hidden="true" />
      <span className="section-heading-note">{subtitle}</span>
    </div>
  )
}
