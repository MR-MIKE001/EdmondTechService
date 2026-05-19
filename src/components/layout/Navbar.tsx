import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useScrolled } from '@/hooks/useScrolled'
import { LOGO_B64 }   from '@/assets/logo_b64'
import { NAV_ITEMS, WHATSAPP_URL } from '@/utils/constants'
import WAIcon from '@/components/ui/WAIcon'

export default function Navbar() {
  const scrolled = useScrolled(48)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <>
      {/* ── Desktop / tablet bar ── */}
      <header
        className={`navbar ${scrolled ? 'navbar-scrolled py-3' : 'bg-navy-950/90 py-5'}`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" aria-label="Edmond Tech Services — go to homepage" className="flex-shrink-0">
            <img src={LOGO_B64} alt="Edmond Tech Services logo" className="logo-inv h-9 w-auto"
              width={176} height={36} />
          </Link>

          {/* Nav links — desktop */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map(({ label, path }) => (
              <Link key={path} to={path}
                className={`relative px-4 py-2 text-sm font-semibold font-display tracking-wide rounded-lg transition-colors duration-200
                  ${pathname === path
                    ? 'text-white'
                    : 'text-white/55 hover:text-white hover:bg-white/[0.06]'
                  }`}
                aria-current={pathname === path ? 'page' : undefined}
              >
                {label}
                {pathname === path && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full"
                    style={{ background: 'linear-gradient(90deg,#C9A84C,#EDD07A)' }} />
                )}
              </Link>
            ))}
          </nav>

          {/* Actions — desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact" className="btn btn-outline btn-sm">Get in Touch</Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="btn btn-wa btn-sm" aria-label="Chat with us on WhatsApp">
              <WAIcon size={15} /> WhatsApp
            </a>
          </div>

          {/* Hamburger — mobile */}
          <button onClick={() => setOpen(true)}
            className="md:hidden text-white p-2.5 rounded-xl hover:bg-white/10 transition-colors"
            aria-label="Open navigation menu" aria-expanded={open} aria-controls="mobile-menu">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu"
        className={`fixed inset-0 z-[200] transition-opacity duration-300
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(4,12,24,0.98)', backdropFilter: 'blur(20px)' }}
      >
        {/* Gold top line */}
        <div className="absolute top-0 inset-x-0 divider-gold" />

        {/* Close */}
        <button onClick={() => setOpen(false)}
          className="absolute top-5 right-6 text-white/60 hover:text-white transition-colors"
          aria-label="Close navigation menu">
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Menu content */}
        <div className="flex flex-col items-center justify-center h-full gap-2 px-8">
          <img src={LOGO_B64} alt="Edmond Tech Services" className="logo-inv h-12 mb-10" />
          <nav aria-label="Mobile navigation">
            {NAV_ITEMS.map(({ label, path }) => (
              <Link key={path} to={path} onClick={() => setOpen(false)}
                className={`block text-center text-2xl font-bold font-display py-3 transition-colors
                  ${pathname === path ? 'text-white' : 'text-white/45 hover:text-white'}`}
                aria-current={pathname === path ? 'page' : undefined}>
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3 mt-10 w-64">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn btn-wa btn-lg justify-center">
              <WAIcon size={20} /> Chat on WhatsApp
            </a>
            <Link to="/contact" onClick={() => setOpen(false)}
              className="btn btn-outline btn-lg justify-center">
              Send a Message
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
