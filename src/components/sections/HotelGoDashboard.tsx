// Realistic HotelGo PMS dashboard mockup
export default function HotelGoDashboard() {
  return (
    <div className="db-window" role="img" aria-label="HotelGo PMS dashboard preview">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-5 py-3.5 border-b"
        style={{ background: 'rgba(0,0,0,.25)', borderColor: 'rgba(255,255,255,.06)' }}>
        <span className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#FFBD2E' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
        <span className="ml-4 text-white/35 text-xs" style={{ fontFamily: 'monospace' }}>
          HotelGo PMS — Dashboard
        </span>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-green-400 font-semibold">Live</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 space-y-4">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Occupied Rooms', value: '42 / 60', sub: '70% occupancy', green: true  },
            { label: "Today's Revenue",  value: '₦284k',   sub: '+12% vs yesterday', green: true  },
            { label: 'Check-ins Today',  value: '8',        sub: '3 pending',          green: false },
          ].map(s => (
            <div key={s.label} className="rounded-xl p-3.5"
              style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.07)' }}>
              <p className="text-white/35 text-xs mb-1.5">{s.label}</p>
              <p className="text-white font-bold text-xl mb-1 font-display">{s.value}</p>
              <p className="text-xs font-semibold"
                style={{ color: s.green ? '#25D366' : '#C9A84C' }}>
                {s.green ? '↑ ' : '● '}{s.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Check-in list */}
        <div className="rounded-xl p-4"
          style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.06)' }}>
          <p className="text-white/40 text-xs font-bold tracking-[.14em] uppercase mb-3.5">
            Today's Check-ins
          </p>
          <div className="space-y-3">
            {[
              { room: '101', guest: 'Alhaji Musa Abdullahi', status: 'Checked In',  bg: 'rgba(37,211,102,.12)',  color: '#25D366' },
              { room: '204', guest: 'Mrs Fatima Usman',      status: 'Arriving 3pm', bg: 'rgba(201,168,76,.12)', color: '#C9A84C' },
              { room: '315', guest: 'Mr Emeka Okafor',       status: 'Confirmed',    bg: 'rgba(46,106,184,.12)', color: '#2E6AB8' },
            ].map(r => (
              <div key={r.room} className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-bold px-2 py-0.5 rounded font-display"
                    style={{ background: 'rgba(255,255,255,.07)', color: 'rgba(255,255,255,.5)' }}>
                    {r.room}
                  </span>
                  <span className="text-white/65 text-sm">{r.guest}</span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                  style={{ background: r.bg, color: r.color }}>
                  {r.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className="rounded-xl p-4"
          style={{ background: 'rgba(201,168,76,.07)', border: '1px solid rgba(201,168,76,.16)' }}>
          <p className="text-xs font-bold tracking-[.14em] uppercase mb-3" style={{ color: '#C9A84C' }}>
            ⚡ Quick Actions
          </p>
          <div className="grid grid-cols-4 gap-2">
            {['Check-in', 'Billing', 'Reports', 'Housekeeping'].map(a => (
              <div key={a} className="text-center text-xs py-2 rounded-lg"
                style={{ background: 'rgba(255,255,255,.05)', color: 'rgba(255,255,255,.45)' }}>
                {a}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
