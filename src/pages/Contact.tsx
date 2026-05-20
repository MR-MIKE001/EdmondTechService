import SEOHead     from '@/components/ui/SEOHead'
import PageHero     from '@/components/ui/PageHero'
import CTAStrip     from '@/components/ui/CTAStrip'
import Eyebrow      from '@/components/ui/Eyebrow'
import Reveal       from '@/components/ui/Reveal'
import WAIcon       from '@/components/ui/WAIcon'
import ContactForm  from '@/components/sections/ContactForm'
import { WHATSAPP_URL, CONTACT_DETAILS } from '@/utils/constants'

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact Us — We Are in Kano, Come and Find Us"
        description="Contact Edmond Tech Services in Kano State, Nigeria. Chat on WhatsApp for fast responses. Book a free demo of HotelGo or business solutions today."
        canonical="/contact"
      />

      <PageHero
        label="Contact Us"
        headline={<>We are in Kano.<br className="hidden md:block" /> Come and find us.</>}
        sub="Whether you have a question, want to book a demo, or just want to understand what we offer — our team is available and ready to talk."
      />

      {/* ── WhatsApp + contact details ── */}
      <section className="py-28 bg-white" aria-labelledby="contact-main-h">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* WhatsApp card */}
            <Reveal>
              <div className="rounded-2xl p-10"
                style={{ background: 'linear-gradient(135deg,#128C7E,#25D366)' }}>
                <WAIcon size={48} className="mb-6 opacity-90" />
                <h2 id="contact-main-h" className="text-3xl font-bold text-white mb-3 font-display">
                  The fastest way to reach us.
                </h2>
                <p className="text-white/85 leading-relaxed mb-8">
                  Message us directly on WhatsApp and we will respond within the hour during business hours.
                </p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-white font-bold py-4 px-6
                    rounded-full text-base font-display hover:bg-green-50 transition-colors"
                  style={{ color: '#128C7E' }}
                  aria-label="Chat with us on WhatsApp now">
                  <WAIcon size={22} /> Chat With Us on WhatsApp Now
                </a>
              </div>
            </Reveal>

            {/* Contact details */}
            <Reveal delay={1}>
              <Eyebrow>Contact Details</Eyebrow>
              <address className="not-italic space-y-7">
                {CONTACT_DETAILS.map(d => (
                  <div key={d.label} className="flex items-start gap-4">
                    <div className="icon-box ib-light flex-shrink-0 text-xl" aria-hidden="true">
                      {d.icon}
                    </div>
                    <div>
                      <p className="text-sm font-bold mb-1 font-display text-navy-900">{d.label}</p>
                      {d.href
                        ? <a href={d.href}
                            className="text-slate-500 text-sm hover:text-navy-600 transition-colors">
                            {d.value}
                          </a>
                        : <p className="text-slate-500 text-sm whitespace-pre-line leading-relaxed">
                            {d.value}
                          </p>
                      }
                    </div>
                  </div>
                ))}
              </address>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="py-0 bg-steel-50" aria-labelledby="map-h">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 id="map-h" className="text-2xl font-bold text-center mb-10 font-display text-navy-900">
            Find Us in Kano
          </h2>
          {/*
            PRODUCTION: Replace this div with a Google Maps embed:
            <iframe
              src="https://www.google.com/maps/embed?pb=YOUR_EMBED_PARAMS"
              width="100%" height="400" style={{ border: 0 }}
              allowFullScreen loading="lazy"
              title="Edmond Tech Services — office location in Kano"
            />
          */}
          <div className="rounded-2xl flex flex-col items-center justify-center min-h-[360px]"
            style={{ background: 'var(--s100)', border: '2px solid var(--s200)' }}
            role="region" aria-label="Map placeholder — replace with Google Maps embed">
            <div className="text-6xl mb-5" aria-hidden="true">📍</div>
            <p className="font-bold text-xl font-display text-navy-900">Kano State, Nigeria</p>
            <p className="text-slate-400 text-xs mt-3 text-center px-10">
              Replace this block with a Google Maps embed in production.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact form ── */}
      <section className="py-28 bg-white" aria-labelledby="form-h">
        <div className="max-w-2xl mx-auto px-6">
          <Reveal className="text-center mb-12">
            <h2 id="form-h" className="text-4xl font-bold mb-2 font-display text-navy-900">
              Or send us a message.
            </h2>
            <p className="text-slate-400 text-sm">We'll reply within one business day.</p>
          </Reveal>
          <Reveal delay={1}>
            <div className="rounded-2xl p-10 bg-steel-50 border border-steel-200">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <CTAStrip
        headline="Let's have a conversation."
        sub="We are based in Kano and serve Kano businesses. Whatever you need, we are here."
        cta="Message Us on WhatsApp"
      />
    </>
  )
}
