import { useReveal } from '../hooks'

const STEPS = ['CODE', 'BUILD', 'TEST', 'SHIP', 'OBSERVE', 'IMPROVE']

export default function DeliveryLoop() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="py-20 md:py-28 border-b border-line grid-bg">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-mono text-xs text-blue mb-3">/ how I think about delivery</p>
          <h2 className="font-display text-3xl md:text-5xl tracking-wide text-ink">
            DEPLOYMENT ISN&apos;T THE FINISH LINE.
          </h2>
          <p className="font-hand text-3xl text-yellow mt-2 -rotate-1">production feedback is.</p>
        </div>

        <div ref={ref} className="reveal relative">
          <ol className="flex flex-wrap items-center justify-center gap-x-2 gap-y-8">
            {STEPS.map((step, i) => (
              <li key={step} className="flex items-center">
                <div className="flex flex-col items-center gap-2 w-24 md:w-28">
                  <div className="flex h-14 w-14 items-center justify-center border-2 border-line bg-bg-1 font-mono text-xs text-muted">
                    0{i + 1}
                  </div>
                  <span className="font-display text-base md:text-lg tracking-wide text-ink text-center">
                    {step}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <svg width="36" height="16" viewBox="0 0 36 16" className="text-muted mx-1 hidden sm:block" aria-hidden="true">
                    <line x1="0" y1="8" x2="28" y2="8" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M24 3 L30 8 L24 13" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                )}
              </li>
            ))}
          </ol>

          <div className="flex items-center justify-center mt-10 gap-3">
            <svg width="64" height="24" viewBox="0 0 64 24" className="text-red" aria-hidden="true">
              <path
                d="M60 4 C 60 18, 4 18, 4 6"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <path d="M9 2 L4 6 L10 10" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
            <span className="font-hand text-2xl text-red rotate-1">back to CODE, better informed</span>
          </div>
        </div>
      </div>
    </section>
  )
}
