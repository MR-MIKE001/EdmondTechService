import { WHATSAPP_URL } from '@/utils/constants'
import WAIcon from './WAIcon'

interface Props { headline: string; sub?: string; cta: string }

export default function CTAStrip({ headline, sub, cta }: Props) {
  return (
    <section className="cta-section py-24">
      <div className="absolute top-0 inset-x-0 divider-gold" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight font-display">
          {headline}
        </h2>
        {sub && <p className="text-white/55 text-lg mb-10 max-w-xl mx-auto">{sub}</p>}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
          className="btn btn-wa btn-lg" aria-label={cta}>
          <WAIcon size={20} /> {cta}
        </a>
      </div>
    </section>
  )
}
