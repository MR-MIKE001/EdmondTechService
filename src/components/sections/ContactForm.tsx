import { useState } from 'react'

interface F { name: string; phone: string; bizType: string; message: string }
type Errors = Partial<Record<keyof F, string>>

export default function ContactForm() {
  const [form, setForm] = useState<F>({ name: '', phone: '', bizType: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [done, setDone]   = useState(false)

  const validate = (): boolean => {
    const e: Errors = {}
    if (!form.name.trim())    e.name    = 'Full name is required.'
    if (!form.phone.trim())   e.phone   = 'Phone number is required.'
    if (!form.message.trim()) e.message = 'Message is required.'
    setErrors(e)
    return !Object.keys(e).length
  }

  const set = (k: keyof F) =>
    (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm(p => ({ ...p, [k]: ev.target.value }))
      if (errors[k]) setErrors(p => ({ ...p, [k]: undefined }))
    }

  if (done) return (
    <div className="text-center py-14 rounded-2xl"
      style={{ background: 'rgba(37,211,102,.06)', border: '1px solid rgba(37,211,102,.22)' }}
      role="alert" aria-live="polite">
      <div className="text-5xl mb-4" aria-hidden="true">✅</div>
      <h3 className="text-xl font-bold mb-2 font-display text-navy-900">Message received!</h3>
      <p className="text-slate-500 text-sm">
        Thank you. We have received your message and will contact you within one business day.
      </p>
    </div>
  )

  return (
    <form onSubmit={e => { e.preventDefault(); if (validate()) setDone(true) }}
      noValidate aria-label="Contact form">
      <div className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="cf-name" className="block text-sm font-semibold mb-2 font-display text-navy-800">
            Full Name <span className="text-red-400" aria-hidden="true">*</span>
          </label>
          <input id="cf-name" type="text" autoComplete="name" placeholder="Your full name"
            className="form-input" value={form.name} onChange={set('name')}
            aria-required="true" aria-describedby={errors.name ? 'cf-name-err' : undefined} />
          {errors.name && <p id="cf-name-err" role="alert" className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="cf-phone" className="block text-sm font-semibold mb-2 font-display text-navy-800">
            Phone Number <span className="text-red-400" aria-hidden="true">*</span>
          </label>
          <input id="cf-phone" type="tel" autoComplete="tel" placeholder="+234…"
            className="form-input" value={form.phone} onChange={set('phone')}
            aria-required="true" aria-describedby={errors.phone ? 'cf-phone-err' : undefined} />
          {errors.phone && <p id="cf-phone-err" role="alert" className="text-red-500 text-xs mt-1.5">{errors.phone}</p>}
        </div>

        {/* Business type */}
        <div>
          <label htmlFor="cf-biz" className="block text-sm font-semibold mb-2 font-display text-navy-800">
            Business Type
          </label>
          <select id="cf-biz" className="form-input" value={form.bizType} onChange={set('bizType')}>
            <option value="">Select type (optional)</option>
            {['Hotel', 'Retail', 'Services', 'Other'].map(o => <option key={o}>{o}</option>)}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="cf-msg" className="block text-sm font-semibold mb-2 font-display text-navy-800">
            Message <span className="text-red-400" aria-hidden="true">*</span>
          </label>
          <textarea id="cf-msg" rows={4} placeholder="Tell us about your business and what you need…"
            className="form-input resize-none" value={form.message} onChange={set('message')}
            aria-required="true" aria-describedby={errors.message ? 'cf-msg-err' : undefined} />
          {errors.message && <p id="cf-msg-err" role="alert" className="text-red-500 text-xs mt-1.5">{errors.message}</p>}
        </div>

        <button type="submit" className="btn btn-primary w-full justify-center btn-lg mt-2">
          Send Message
        </button>
      </div>
    </form>
  )
}
