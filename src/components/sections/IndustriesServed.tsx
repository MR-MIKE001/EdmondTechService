// src/components/sections/IndustriesServed.tsx

import Reveal  from '@/components/ui/Reveal'
import Eyebrow from '@/components/ui/Eyebrow'
import WAIcon  from '@/components/ui/WAIcon'
import { WHATSAPP_URL } from '@/utils/constants'

const INDUSTRIES = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Healthcare',
    description:
      'Clinics, hospitals, pharmacies, and diagnostic centres across Kano rely on digital tools to manage patient records, appointments, staff rosters, and billing from one place. Our solutions reduce manual errors, speed up patient flow, and give administrators a clear view of daily operations — so your team spends more time on care and less time on paperwork.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422A12.083 12.083 0 0122 21H2a12.083 12.083 0 013.84-10.422L12 14z" />
      </svg>
    ),
    title: 'Education',
    description:
      'Schools, colleges, and training institutions use our platforms to handle student enrolment, fee collection, timetable management, exam records, and parent communications — all without spreadsheets. Whether you run a primary school in Kano or a professional training centre, our systems bring structure and visibility to your entire academic operation.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 5v3h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: 'Logistics',
    description:
      'Freight companies, courier services, and distribution businesses operate in a fast-moving environment where delays cost money. Our logistics tools give you real-time visibility over shipments, driver assignments, delivery confirmations, and client invoicing — so you can resolve issues before they escalate and keep your fleet and your customers on the same page.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
    title: 'SMEs',
    description:
      'Small and medium-sized businesses are the backbone of the Kano economy — and they deserve tools built for their scale, not stripped-down versions of enterprise software. Our SME solutions cover stock management, point-of-sale, staff records, sales tracking, and financial reporting, giving business owners a real-time picture of performance from any device, anywhere.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18 8h1a4 4 0 010 8h-1" />
        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    title: 'Restaurants',
    description:
      'From fast food outlets to full-service restaurants and suya spots, food businesses in Kano need systems that work as fast as their kitchen. Our restaurant tools handle table orders, menu management, kitchen display, supplier tracking, staff shifts, and end-of-day revenue reports — helping you serve customers faster, reduce waste, and stay on top of your numbers.',
  },
]

export default function IndustriesServed() {
  return (
    <section className="py-28 bg-steel-50 relative overflow-hidden" aria-labelledby="industries-heading">
      <div className="absolute inset-0 grid-light opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <Reveal className="text-center mb-16 max-w-3xl mx-auto">
          <Eyebrow>Who We Serve</Eyebrow>
          <h2
            id="industries-heading"
            className="text-4xl md:text-5xl font-bold font-display text-navy-900 leading-tight"
          >
            We offer solutions for businesses in{' '}
            <span className="text-gold">every major sector.</span>
          </h2>
          <p className="mt-5 text-slate-500 text-lg leading-relaxed">
            From healthcare to hospitality, our enterprise tools are built for the real
            operating conditions of businesses across Kano State.
          </p>
        </Reveal>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {INDUSTRIES.map((industry, i) => (
            <Reveal key={industry.title} delay={((i % 3) as 0 | 1 | 2)}>
              <article className="lift h-full rounded-2xl bg-white border border-steel-200 p-8 flex flex-col">
                <div className="icon-box ib-dark mb-5 flex-shrink-0">
                  {industry.icon}
                </div>
                <div
                  className="w-8 h-0.5 rounded-full mb-5 flex-shrink-0"
                  style={{ background: 'linear-gradient(90deg,#C9A84C,#EDD07A)' }}
                />
                <h3 className="text-xl font-bold mb-3 font-display text-navy-900">
                  {industry.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">
                  {industry.description}
                </p>
              </article>
            </Reveal>
          ))}

          {/* 6th dark CTA card */}
          <Reveal delay={2}>
            <div
              className="h-full rounded-2xl p-8 flex flex-col justify-between"
              style={{
                background: 'linear-gradient(150deg,#091830,#1F5499)',
                border: '1px solid rgba(255,255,255,.06)',
              }}
            >
              <div
                className="w-8 h-0.5 rounded-full mb-5"
                style={{ background: 'linear-gradient(90deg,#C9A84C,#EDD07A)' }}
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3 font-display">
                  Not sure if we cover your sector?
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  If SWAD Digital Solutions has a platform for your industry, we can
                  deliver it right here in Kano. Talk to our team — no pressure,
                  no jargon, just an honest conversation about what you need.
                </p>
              </div>
              
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa btn-sm mt-8 self-start"
                aria-label="Ask us about your industry on WhatsApp"
              >
                <WAIcon size={15} />
                Ask Us on WhatsApp
              </a>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}