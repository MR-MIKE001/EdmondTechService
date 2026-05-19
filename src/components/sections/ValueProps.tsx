import Reveal from '@/components/ui/Reveal'

const PROPS = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    title: 'Locally Based',
    body: 'We are a Kano State business. We understand your market, your clients, and your operating environment from the inside.',
    dark: false,
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Enterprise Solutions',
    body: 'Professional-grade digital tools from SWAD Digital Solutions — built specifically for Nigerian businesses at scale.',
    dark: true,
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'End-to-End Support',
    body: 'From first demo to full onboarding, our team is with you every step of the way — before, during, and after go-live.',
    dark: false,
  },
]

export default function ValueProps() {
  return (
    <section className="py-28 bg-white" aria-labelledby="vp-heading">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-20">
          <h2 id="vp-heading"
            className="text-4xl md:text-5xl font-bold leading-tight font-display text-navy-900">
            Technology that works for your business.
            <br />
            <span className="text-navy-grad">Backed by people in your city.</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {PROPS.map((p, i) => (
            <Reveal key={p.title} delay={(i + 1) as 1 | 2 | 3}>
              <article
                className={`lift rounded-2xl p-9 h-full flex flex-col ${
                  p.dark
                    ? 'bg-mid border border-white/[0.06]'
                    : 'bg-steel-50 border border-steel-100'
                }`}
              >
                <div className={`icon-box mb-7 ${p.dark ? 'ib-gold' : 'ib-dark'}`}>
                  {p.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 font-display ${p.dark ? 'text-white' : 'text-navy-900'}`}>
                  {p.title}
                </h3>
                <p className={`text-sm leading-relaxed ${p.dark ? 'text-white/55' : 'text-slate-500'}`}>
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
