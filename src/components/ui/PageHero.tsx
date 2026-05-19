import type { ReactNode } from 'react'
import Eyebrow from './Eyebrow'

interface Props { label: string; headline: ReactNode; sub: string }

export default function PageHero({ label, headline, sub }: Props) {
  return (
    <section className="page-hero" aria-label={`${label} — hero`}>
      {/* layers */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 65% 40%, rgba(27,70,119,.5) 0%, transparent 60%)' }} />
      {/* ring */}
      <div className="absolute right-[-14%] top-[-8%] w-[680px] h-[680px] rounded-full border pointer-events-none anim-pulse"
        style={{ borderColor: 'rgba(201,168,76,.08)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <Eyebrow light>{label}</Eyebrow>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl leading-[1.02] font-display">
          {headline}
        </h1>
        <p className="text-xl text-white/55 max-w-2xl leading-relaxed">{sub}</p>
      </div>

      {/* wave */}
      <svg className="absolute bottom-0 inset-x-0 w-full" viewBox="0 0 1440 80"
        preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 80L1440 0V80H0Z" fill="white" />
      </svg>
    </section>
  )
}
