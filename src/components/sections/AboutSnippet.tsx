import { Link } from 'react-router-dom'
import Reveal  from '@/components/ui/Reveal'
import Eyebrow from '@/components/ui/Eyebrow'

export default function AboutSnippet() {
  return (
    <section className="py-28 bg-steel-50 relative overflow-hidden" aria-labelledby="about-snip-h">
      <div className="absolute inset-0 grid-light opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Text */}
          <div>
            <Reveal>
              <Eyebrow>Who We Are</Eyebrow>
              <h2 id="about-snip-h"
                className="text-4xl md:text-5xl font-bold leading-tight mb-7 font-display text-navy-900">
                Kano's dedicated SWAD Digital Solutions representative.
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="text-slate-500 leading-relaxed mb-5">
                Edmond Tech Services was established with one purpose: to bring world-class digital solutions to
                businesses across Kano State. As the exclusive authorised Channel Partner of SWAD Digital
                Solutions in this territory, we give local businesses access to enterprise technology that was
                previously out of reach.
              </p>
              <p className="text-slate-500 leading-relaxed mb-10">
                We are not a distant software company. We are here — in Kano — ready to sit across from you,
                understand your business, and show you exactly how our solutions can move it forward.
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"
                  viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </Reveal>
          </div>

          {/* Visual card */}
          <Reveal delay={2}>
            <div className="relative rounded-3xl overflow-hidden h-[400px]"
              style={{ background: 'linear-gradient(150deg,#091830,#1F5499)' }}>
              <div className="absolute inset-0 grid-pattern pointer-events-none" />
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 70% 30%,rgba(201,168,76,.15),transparent 55%)' }} />
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-10 text-center gap-5">
                <div className="text-7xl mb-2" aria-hidden="true">🏙️</div>
                <div>
                  <p className="text-white font-bold text-xl font-display mb-1">Kano State</p>
                  <p className="text-sm font-semibold tracking-wide" style={{ color: '#C9A84C' }}>
                    Commercial Capital of Northern Nigeria
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 w-full mt-4">
                  {[{ n: '15M+', l: 'Population' }, { n: 'Sole', l: 'SWAD Partner' }].map(s => (
                    <div key={s.l} className="rounded-xl p-5 text-center"
                      style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.09)' }}>
                      <div className="text-2xl font-bold text-white font-display mb-0.5">{s.n}</div>
                      <div className="text-xs text-white/40">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
