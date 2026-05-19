import { WHY_ITEMS } from '@/utils/constants'
import Reveal from '@/components/ui/Reveal'

export default function WhyEdmond() {
  return (
    <section className="py-28 bg-deep relative overflow-hidden" aria-labelledby="why-h">
      <div className="absolute inset-0 dot-pattern pointer-events-none opacity-60" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 75% 50%,rgba(27,70,119,.3) 0%,transparent 55%)' }} />
      <div className="absolute top-0 inset-x-0 divider-gold opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <h2 id="why-h" className="text-4xl md:text-5xl font-bold text-white font-display">
            Why businesses in Kano choose us
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {WHY_ITEMS.map((item, i) => (
            <Reveal key={item.number} delay={((i % 2) + 1) as 1 | 2}>
              <article className="rounded-2xl p-9 hover:border-white/20 transition-colors duration-300"
                style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.07)' }}>
                <div className="num mb-4">{item.number}</div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">{item.heading}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
