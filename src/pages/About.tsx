import SEOHead  from '@/components/ui/SEOHead'
import PageHero  from '@/components/ui/PageHero'
import CTAStrip  from '@/components/ui/CTAStrip'
import Eyebrow   from '@/components/ui/Eyebrow'
import Reveal    from '@/components/ui/Reveal'
import { DIRECTOR_NAME, OFFICE_ADDRESS } from '@/utils/constants'

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us — Built for Kano, Backed by the Best"
        description="Edmond Tech Services is Kano State's exclusive SWAD Digital Solutions partner. Our story, mission, vision, and commitment to Northern Nigeria businesses."
        canonical="/about"
      />

      <PageHero
        label="About Us"
        headline={<>Built for Kano.<br className="hidden md:block" /> Backed by the best.</>}
        sub="We are a technology solutions company on a mission to make enterprise-grade digital tools accessible to every serious business in Kano State."
      />

      {/* ── Our Story ── */}
      <section className="py-28 bg-white" aria-labelledby="story-h">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <Reveal>
                <Eyebrow>Our Story</Eyebrow>
                <h2 id="story-h" className="text-4xl md:text-5xl font-bold leading-tight mb-7 font-display text-navy-900">
                  Founded with a focused mandate.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <div className="space-y-5 text-slate-500 leading-relaxed">
                  <p>
                    Edmond Tech Services was founded by {DIRECTOR_NAME}, a business leader with a background
                    spanning the pharmaceutical industry and multiple investment sectors across Kano State.
                  </p>
                  <p>
                    The company was established with a focused mandate: to serve as the exclusive technology
                    solutions representative for SWAD Digital Solutions in Kano State — and to ensure that
                    businesses here have direct, personal access to digital tools that actually work in the
                    Nigerian context.
                  </p>
                  <p>
                    We are not resellers operating from a distance. We are a Kano company, with a Kano team,
                    serving Kano businesses. That local commitment is what makes us different.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={2}>
              <div className="relative rounded-3xl overflow-hidden h-[400px]"
                style={{ background: 'linear-gradient(150deg,#091830,#1F5499)' }}>
                <div className="absolute inset-0 grid-pattern pointer-events-none" />
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at 70% 30%,rgba(201,168,76,.15),transparent 55%)' }} />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-10 gap-4">
                  <svg width="56" height="56" fill="none" stroke="rgba(201,168,76,.5)" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
                  </svg>
                  <p className="text-white font-bold text-xl font-display mt-2">Local Team. Local Commitment.</p>
                  <p className="text-white/45 text-sm">Serving businesses across Kano State</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-28 bg-steel-50" aria-labelledby="mv-h">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 id="mv-h" className="text-4xl font-bold font-display text-navy-900">Mission &amp; Vision</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={1}>
              <article className="rounded-2xl p-10 h-full border border-white/[.06]"
                style={{ background: 'linear-gradient(150deg,#091830,#163659)' }}>
                <div className="icon-box ib-gold mb-7">
                  <svg width="22" height="22" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-display">Our Mission</h3>
                <p className="text-white/55 leading-relaxed">
                  To deliver enterprise technology solutions that help businesses across Kano State operate
                  more efficiently, serve their clients better, and grow with confidence.
                </p>
              </article>
            </Reveal>
            <Reveal delay={2}>
              <article className="rounded-2xl p-10 h-full border border-steel-200 bg-white">
                <div className="icon-box ib-dark mb-7">
                  <svg width="22" height="22" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-display">Our Vision</h3>
                <p className="text-slate-500 leading-relaxed">
                  To be the most trusted technology partner for businesses in Northern Nigeria — a company
                  known for local presence, honest advice, and solutions that deliver results.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Kano Territory ── */}
      <section className="py-28 bg-white" aria-labelledby="kano-h">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <Reveal>
              <div className="rounded-2xl h-80 flex flex-col items-center justify-center"
                style={{ background: 'var(--s50)', border: '2px solid var(--s200)' }}
                role="img" aria-label="Map of Kano State, Nigeria">
                <div className="text-6xl mb-5" aria-hidden="true">🗺️</div>
                <p className="font-bold text-xl font-display text-navy-900 mb-2">Kano State, Nigeria</p>
                <p className="text-slate-400 text-xs text-center px-12">
                  Replace this placeholder with a Google Maps embed for production.
                </p>
              </div>
            </Reveal>

            <div>
              <Reveal delay={1}>
                <Eyebrow>Our Territory</Eyebrow>
                <h2 id="kano-h" className="text-4xl font-bold mb-7 font-display text-navy-900">
                  Our Territory — Kano State
                </h2>
                <p className="text-slate-500 leading-relaxed mb-5">
                  Kano State is the commercial capital of Northern Nigeria — a city of over 15 million people,
                  a thriving manufacturing base, established trade networks, and a growing hospitality sector
                  driven by business activity from across the country and beyond.
                </p>
                <p className="text-slate-500 leading-relaxed mb-10">
                  As the exclusive SWAD Digital Solutions partner in this territory, Edmond Tech Services
                  operates with a long-term commitment to Kano. We are not passing through. We are here to
                  build, to serve, and to grow alongside the businesses in this market.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <div className="grid grid-cols-3 gap-4">
                  {[{ n: '15M+', l: 'Population' }, { n: '#1', l: 'Northern Hub' }, { n: 'Sole', l: 'SWAD Partner' }].map(s => (
                    <div key={s.l} className="text-center p-5 rounded-xl bg-steel-50 border border-steel-100">
                      <div className="text-2xl font-bold mb-1 font-display text-navy-900">{s.n}</div>
                      <div className="text-xs text-slate-400">{s.l}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── SWAD Partnership ── */}
      <section className="py-28 bg-mid relative overflow-hidden" aria-labelledby="partner-h">
        <div className="absolute inset-0 dot-pattern pointer-events-none opacity-60" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 60% 50%,rgba(27,70,119,.35) 0%,transparent 60%)' }} />
        <Reveal className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Eyebrow light>Powered by SWAD Digital Solutions</Eyebrow>
          <h2 id="partner-h" className="text-4xl md:text-5xl font-bold text-white mb-7 font-display">
            World-class technology. Local delivery.
          </h2>
          <p className="text-white/50 leading-relaxed text-lg max-w-3xl mx-auto">
            Edmond Tech Services is the authorised exclusive Channel Partner of SWAD Digital Solutions Ltd —
            a subsidiary of SWAD Holdings Ltd, a Nigerian multinational conglomerate with operations across
            Africa, the United Kingdom, and the UAE. This partnership means our clients in Kano State get
            access to solutions developed and supported by a national organisation with serious infrastructure —
            delivered through a team physically present in their city.
          </p>
        </Reveal>
      </section>

      {/* ── Leadership ── */}
      <section className="py-28 bg-white" aria-labelledby="leadership-h">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 id="leadership-h" className="text-4xl font-bold font-display text-navy-900">Leadership</h2>
          </Reveal>
          <div className="max-w-sm mx-auto">
            <Reveal>
              <article className="lift rounded-2xl overflow-hidden border border-steel-200 bg-white">
                {/* Photo placeholder */}
                <div className="h-60 flex flex-col items-center justify-center relative"
                  style={{ background: 'linear-gradient(150deg,#091830,#1F5499)' }}>
                  <svg width="72" height="72" fill="none" stroke="rgba(201,168,76,.4)" strokeWidth="1"
                    viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
                  </svg>
                 
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-1 font-display text-navy-900">{DIRECTOR_NAME}</h3>
                  <p className="text-sm font-semibold mb-5" style={{ color: '#C9A84C' }}>
                    Director &amp; CEO, Edmond Tech Services
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {DIRECTOR_NAME} is a Kano-based entrepreneur with an established track record in the
                    pharmaceutical industry and a portfolio of business investments across multiple sectors.
                    He founded Edmond Tech Services to build a serious, locally grounded technology business
                    in Kano State — anchored by the SWAD Digital Solutions partnership.
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <CTAStrip headline="Have questions? Our team is one message away." cta="Reach Us on WhatsApp" />
    </>
  )
}
