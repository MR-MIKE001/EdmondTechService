import { Link } from 'react-router-dom'
import Reveal from '@/components/ui/Reveal'

const CARDS = [
  {
    eyebrow: 'Flagship Product',
    eyebrowColor: '#C9A84C',
    barStyle: { background: 'linear-gradient(90deg,#C9A84C,#EDD07A)' },
    icon: (
      <svg width="22" height="22" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
    title: 'HotelGo — Hotel Management System',
    body: 'A complete property management system for independent hotels in Kano. Manage bookings, front desk, billing, and reporting from one platform.',
    link: '/solutions',
    linkText: 'Learn More',
  },
  {
    eyebrow: 'Business Suite',
    eyebrowColor: '#2E6AB8',
    barStyle: { background: 'linear-gradient(90deg,#1F5499,#163659)' },
    icon: (
      <svg width="22" height="22" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" />
      </svg>
    ),
    title: 'Business Digital Solutions',
    body: 'A full suite of enterprise-grade software for retail, services, and hospitality businesses across Kano State.',
    link: '/solutions',
    linkText: 'View All Solutions',
  },
]

export default function SolutionsOverview() {
  return (
    <section className="py-28 bg-white" aria-labelledby="sol-overview-h">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <h2 id="sol-overview-h"
            className="text-4xl md:text-5xl font-bold font-display text-navy-900">
            Solutions We Deliver
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-7">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={(i + 1) as 1 | 2}>
              <article className="lift flex flex-col h-full rounded-2xl overflow-hidden border border-steel-200 bg-white">
                {/* Colour accent bar */}
                <div className="h-1.5" style={c.barStyle} />
                <div className="p-9 flex flex-col flex-1">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="icon-box ib-dark flex-shrink-0">{c.icon}</div>
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase font-display mb-1"
                        style={{ color: c.eyebrowColor }}>
                        {c.eyebrow}
                      </p>
                      <h3 className="text-lg font-bold leading-snug font-display text-navy-900">
                        {c.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-7">{c.body}</p>
                  <Link to={c.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold font-display group text-navy-600"
                    aria-label={`${c.linkText} — ${c.title}`}>
                    {c.linkText}
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"
                      viewBox="0 0 24 24" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
