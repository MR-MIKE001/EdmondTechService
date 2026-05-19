import SEOHead          from '@/components/ui/SEOHead'
import PageHero          from '@/components/ui/PageHero'
import CTAStrip          from '@/components/ui/CTAStrip'
import Eyebrow           from '@/components/ui/Eyebrow'
import Reveal            from '@/components/ui/Reveal'
import WAIcon            from '@/components/ui/WAIcon'
import HotelGoDashboard  from '@/components/sections/HotelGoDashboard'
import ProcessSteps      from '@/components/sections/ProcessSteps'
import { WHATSAPP_URL, HOTELGO_FEATURES } from '@/utils/constants'

export default function Solutions() {
  return (
    <>
      <SEOHead
        title="Solutions — HotelGo PMS & Business Software for Kano"
        description="HotelGo hotel management system from $1,000/year. Business management software and custom digital solutions for Kano State businesses. Request a free demo today."
        canonical="/solutions"
      />

      <PageHero
        label="Our Solutions"
        headline={<>Solutions Built for<br className="hidden md:block" /> Nigerian Businesses.</>}
        sub="Enterprise-grade digital tools from SWAD Digital Solutions — with local support, local pricing, and people you can actually reach."
      />

      {/* ── HotelGo ── */}
      <section className="py-28 bg-white" aria-labelledby="hotelgo-h">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            {/* Text */}
            <div>
              <Reveal>
                <Eyebrow>Flagship Product</Eyebrow>
                <h2 id="hotelgo-h" className="text-4xl md:text-5xl font-bold leading-tight mb-4 font-display text-navy-900">
                  HotelGo — Hotel Property Management System
                </h2>
                <p className="text-xl font-semibold mb-6 font-display" style={{ color: '#C9A84C' }}>
                  Run your hotel from one platform. Stop managing it from five.
                </p>
                <p className="text-slate-500 leading-relaxed mb-10">
                  HotelGo is a fully integrated property management system designed specifically for independent
                  hotels across Nigeria. Whether you manage 10 rooms or 150, HotelGo brings your entire
                  operation into one clean, easy-to-use platform. No more spreadsheets. No more missed bookings.
                  No more disconnected systems.
                </p>
              </Reveal>

              <Reveal delay={1}>
                <h3 className="font-bold mb-5 font-display text-navy-900 text-lg">
                  What HotelGo does for your hotel:
                </h3>
                <ul className="space-y-3 mb-10" aria-label="HotelGo features">
                  {HOTELGO_FEATURES.map(f => (
                    <li key={f} className="flex items-start gap-3 text-slate-500 text-sm">
                      <svg className="flex-shrink-0 mt-0.5" width="18" height="18" fill="none"
                        stroke="#25D366" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                        <polyline points="20,6 9,17 4,12" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={2}>
                <div className="rounded-xl p-5 mb-8 bg-steel-50 border border-steel-100">
                  <p className="font-semibold text-navy-900">
                    💰 Starting from{' '}
                    <span className="text-gold font-bold text-xl">$1,000 per year</span>
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Local payment options available.</p>
                </div>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="btn btn-wa btn-lg"
                  aria-label="Request a free HotelGo demo on WhatsApp">
                  <WAIcon size={20} /> Request a Free Demo on WhatsApp
                </a>
              </Reveal>
            </div>

            {/* Dashboard — sticky on wide screens */}
            <Reveal delay={1} className="md:sticky md:top-28">
              <HotelGoDashboard />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── More Solutions ── */}
      <section className="py-28 bg-steel-50" aria-labelledby="more-sol-h">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-14">
            <h2 id="more-sol-h" className="text-4xl font-bold font-display text-navy-900 mb-4">
              More Solutions for Your Business
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed">
              As the authorised SWAD Digital Solutions partner in Kano State, we can provide you with access
              to the full SWAD product portfolio. Speak to our team about what your business needs.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: (
                  <svg width="22" height="22" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                  </svg>
                ),
                title: 'Business Management Software',
                body: 'Digital tools for managing operations, staff, inventory, and reporting across retail, services, and professional businesses.',
              },
              {
                icon: (
                  <svg width="22" height="22" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                  </svg>
                ),
                title: 'Custom Digital Solutions',
                body: 'Need something specific? Our team works with SWAD Digital Solutions to scope and deliver solutions tailored to your business requirements.',
              },
            ].map(c => (
              <Reveal key={c.title}>
                <article className="lift rounded-2xl p-9 bg-white border border-steel-200">
                  <div className="icon-box ib-dark mb-6">{c.icon}</div>
                  <h3 className="text-xl font-bold mb-3 font-display text-navy-900">{c.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-7">{c.body}</p>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold font-display"
                    style={{ color: '#128C7E' }} aria-label={`Enquire about ${c.title} on WhatsApp`}>
                    <WAIcon size={14} /> Enquire on WhatsApp →
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />

      <CTAStrip
        headline="Not sure which solution is right for you?"
        sub="Message us and we will walk you through everything. No technical jargon, no pressure — just honest advice for your business."
        cta="Chat With Us on WhatsApp"
      />
    </>
  )
}
