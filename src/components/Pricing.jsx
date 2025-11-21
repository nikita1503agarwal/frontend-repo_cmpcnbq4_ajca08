function Pricing() {
  const plans = [
    { name: 'Starter', price: '$1,500', period: '/mo', highlights: ['Up to 2 specialties', 'Email support', 'Standard dashboards'] },
    { name: 'Growth', price: '$3,500', period: '/mo', highlights: ['Up to 6 specialties', 'Priority support', 'Custom payer adapters', 'Automations'] },
    { name: 'Enterprise', price: 'Let’s talk', period: '', highlights: ['Unlimited specialties', 'SLA & SSO', 'Dedicated CSM', 'Custom models'] },
  ]

  return (
    <section className="relative bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Start with a 14-day pilot. Switch plans anytime as you grow.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-2 text-sm font-medium text-teal-700">{p.name}</div>
              <div className="mb-4 flex items-end gap-1">
                <div className="text-3xl font-bold text-slate-900">{p.price}</div>
                <div className="pb-1 text-slate-500">{p.period}</div>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-teal-500"></span>{h}</li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-block w-full rounded-lg bg-teal-600 px-4 py-2.5 text-center font-semibold text-white transition hover:bg-teal-500">Choose {p.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
