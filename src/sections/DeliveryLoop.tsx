import { useReveal } from '../hooks'
import { Activity, ArrowRight, Code2, FlaskConical, PackageCheck, RefreshCw, Rocket } from 'lucide-react'

const STEPS = [
  { label: 'CODE', Icon: Code2 },
  { label: 'BUILD', Icon: PackageCheck },
  { label: 'TEST', Icon: FlaskConical },
  { label: 'SHIP', Icon: Rocket },
  { label: 'OBSERVE', Icon: Activity },
  { label: 'IMPROVE', Icon: RefreshCw },
]

export default function DeliveryLoop() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="delivery-section py-20 md:py-28 border-b border-line">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-mono text-xs text-blue mb-3">/ how I think about delivery</p>
          <h2 className="delivery-heading font-display text-3xl md:text-5xl text-ink">
            DEPLOYMENT ISN&apos;T THE FINISH LINE.
          </h2>
          <p className="delivery-feedback font-hand">production feedback is.</p>
        </div>

        <div ref={ref} className="reveal relative">
          <ol className="delivery-steps">
            {STEPS.map(({ label, Icon }, i) => (
              <li key={label} className="delivery-step">
                <div className="flex flex-col items-center gap-2">
                  <div className="delivery-icon">
                    <Icon size={30} strokeWidth={1.6} aria-hidden="true" />
                    <span className="delivery-step-number">0{i + 1}</span>
                  </div>
                  <span className="font-display text-base md:text-lg tracking-wide text-ink text-center">
                    {label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <ArrowRight className="delivery-step-arrow" size={25} strokeWidth={1.3} aria-hidden="true" />
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
