import { PROCESS_STEPS } from '@/utils/constants'
import Reveal from '@/components/ui/Reveal'
import type { ReactNode } from 'react'

const ICONS: ReactNode[] = [
  <svg key="1" width="22" height="22" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>,
  <svg key="2" width="22" height="22" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>,
  <svg key="3" width="22" height="22" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22,4 12,14.01 9,11.01" /></svg>,
  <svg key="4" width="22" height="22" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24"><path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
]

export default function ProcessSteps() {
  return (
    <section className="py-28 bg-white" aria-labelledby="process-h">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-20">
          <h2 id="process-h" className="text-4xl md:text-5xl font-bold font-display text-navy-900">
            Getting started is simple.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector */}
          <div className="hidden md:block absolute top-9 left-[13%] right-[13%] h-px"
            style={{ background: 'linear-gradient(90deg,#C9A84C 0%,rgba(201,168,76,.08) 100%)' }} />

          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.number} delay={(i as 0 | 1 | 2 | 3)}>
              <article className="text-center relative z-10">
                <div className="flex justify-center mb-5">
                  <div className="icon-box ib-dark w-[72px] h-[72px] rounded-2xl"
                    style={{ border: '1px solid rgba(201,168,76,.18)' }}>
                    {ICONS[i]}
                  </div>
                </div>
                <div className="num mb-3">{step.number}</div>
                <h3 className="font-bold mb-2 font-display text-navy-900">{step.heading}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
