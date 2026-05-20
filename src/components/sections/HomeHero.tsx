import { Link } from 'react-router-dom'
import { WHATSAPP_URL } from '@/utils/constants'
import WAIcon from '@/components/ui/WAIcon'

export default function HomeHero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg,#040C18 0%,#0D2245 55%,#091830 100%)' }}
      aria-label="Hero — Kano's Exclusive Technology Solutions Partner"
    >
      {/* Atmosphere layers */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 72% 25%,rgba(27,70,119,.52) 0%,transparent 55%)' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 10% 85%,rgba(201,168,76,.07) 0%,transparent 45%)' }} />

      {/* Decorative rings */}
      <div className="absolute right-[-15%] top-[6%] w-[780px] h-[780px] rounded-full border pointer-events-none anim-pulse"
        style={{ borderColor: 'rgba(201,168,76,.07)' }} />
      <div className="absolute right-[-9%] top-[12%] w-[540px] h-[540px] rounded-full border pointer-events-none"
        style={{ borderColor: 'rgba(201,168,76,.05)' }} />

      {/* Floating stat orb — large screens */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden xl:flex items-center justify-center pointer-events-none anim-float">
        <div className="w-72 h-72 rounded-full flex flex-col items-center justify-center gap-5 text-center"
          style={{
            background: 'radial-gradient(circle,rgba(30,70,120,.28) 0%,rgba(4,12,24,.75) 100%)',
            border: '1px solid rgba(201,168,76,.15)',
          }}>
          <div>
            <div className="text-5xl font-bold text-white font-display">15M+</div>
            <div className="text-xs mt-1 font-semibold tracking-widest uppercase"
              style={{ color: '#C9A84C' }}>Kano's Population</div>
          </div>
          <div className="w-10 h-px" style={{ background: 'rgba(201,168,76,.3)' }} />
          <div>
            <div className="text-3xl font-bold text-white font-display">#1</div>
            <div className="text-xs text-white/40 leading-snug">Exclusive SWAD<br />Partner in Kano</div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-36">
        <div className="max-w-[680px]">
          {/* Partnership badge */}
          <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full text-xs font-bold tracking-[.17em] uppercase font-display"
            style={{
              background: 'rgba(201,168,76,.09)',
              border: '1px solid rgba(201,168,76,.22)',
              color: '#DDB95C',
            }}>
            <span className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#C9A84C', boxShadow: '0 0 6px #C9A84C' }} />
            Kano State's Exclusive SWAD Partner
          </div>

          {/* H1 */}
          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.02] mb-7 tracking-tight font-display">
            Kano's Exclusive{' '}
            <span className="text-gold">Technology Solutions</span>{' '}
            Partner.
          </h1>

          <p className="text-xl text-white/55 mb-12 leading-relaxed max-w-lg">
            Edmond Tech Services connects businesses across Kano State to enterprise-grade digital solutions —
            built for Africa, backed by SWAD Digital Solution LTD, delivered locally.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="btn btn-wa btn-lg" aria-label="Talk to us on WhatsApp">
              <WAIcon size={20} /> Talk to Us on WhatsApp
            </a>
            <Link to="/solutions" className="btn btn-outline btn-lg">
              Explore Solutions
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"
                viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap gap-7 mt-14 pt-10 border-t"
            style={{ borderColor: 'rgba(255,255,255,.07)' }}>
            {[
              { name: 'SWAD Digital Solutions', sub: 'Official Channel Partner' },
              { name: 'Kano State',             sub: 'Exclusive Territory'      },
            ].map(t => (
              <div key={t.name} className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: '#C9A84C' }} />
                <div>
                  <p className="text-xs font-bold text-white/70 font-display">{t.name}</p>
                  <p className="text-xs text-white/30">{t.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <svg className="absolute bottom-0 inset-x-0 w-full" viewBox="0 0 1440 90"
        preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 90L60 72C120 54 240 18 360 13.5C480 9 600 22.5 720 27C840 31.5 960 27 1080 24.8C1200 22.5 1320 22.5 1380 22.5L1440 22.5V90H0Z"
          fill="white" />
      </svg>
    </section>
  )
}
