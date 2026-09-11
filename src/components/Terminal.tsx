interface Line {
  command?: string
  output: string
}

interface Props {
  title?: string
  lines: Line[]
  className?: string
}

export default function Terminal({ title = 'mohamed@portfolio: ~', lines, className = '' }: Props) {
  return (
    <div
      className={`rounded-md border border-line bg-bg-1 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.7)] overflow-hidden ${className}`}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-bg-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green/80" />
        <span className="ml-3 font-mono text-[11px] text-muted">{title}</span>
      </div>
      <div className="p-4 md:p-5 font-mono text-[12.5px] md:text-[13px] leading-relaxed">
        {lines.map((line, i) => (
          <div key={i} className="mb-2 last:mb-0">
            {line.command && (
              <div className="text-muted">
                <span className="text-green">mohamed@portfolio</span>
                <span className="text-muted">:~$ </span>
                <span className="text-ink">{line.command}</span>
              </div>
            )}
            <div className="text-blue">
              {'> '}
              {line.output}
              {i === lines.length - 1 && <span className="cursor-blink text-ink">▍</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
