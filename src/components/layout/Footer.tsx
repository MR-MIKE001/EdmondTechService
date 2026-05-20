import { Link } from 'react-router-dom'
import { LOGO_B64 } from '@/assets/logo_b64'
import { NAV_ITEMS, WHATSAPP_URL, COMPANY_NAME, TAGLINE,
         PHONE_NUMBER, EMAIL_ADDRESS, OFFICE_ADDRESS } from '@/utils/constants'
import WAIcon from '@/components/ui/WAIcon'

export default function Footer() {
  return (
    <footer style={{ background: '#040C18' }} role="contentinfo">
      <div className="divider-gold" />
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <img src={LOGO_B64} alt={COMPANY_NAME} className="logo-inv h-10 mb-6"
              width={200} height={40} />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-8">{TAGLINE}.<br />
              Enterprise technology, delivered locally in Northern Nigeria.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="btn btn-wa btn-sm" aria-label="WhatsApp Edmond Tech Services">
              <WAIcon size={15} /> WhatsApp Us
            </a>
          </div>

          {/* Pages */}
          <div className="md:col-span-3">
            <h2 className="text-white text-xs font-bold tracking-[.18em] uppercase font-display mb-6">
              Pages
            </h2>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {NAV_ITEMS.map(({ label, path }) => (
                  <li key={path}>
                    <Link to={path}
                      className="text-white/40 hover:text-white/85 text-sm transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h2 className="text-white text-xs font-bold tracking-[.18em] uppercase font-display mb-6">
              Contact
            </h2>
            <address className="not-italic space-y-3">
              {[PHONE_NUMBER, EMAIL_ADDRESS, OFFICE_ADDRESS].map((v, i) => (
                <p key={i} className="text-white/40 text-sm leading-relaxed">{v}</p>
              ))}
            </address>
          </div>
        </div>

        <div className="divider-subtle" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-8">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} {COMPANY_NAME}. Authorised Channel Partner of SWAD Digital Solutions Ltd.
          </p>
          <p className="text-white/15 text-xs">Powered by SWAD Digital Solution Ltd.</p>
        </div>
      </div>
    </footer>
  )
}
