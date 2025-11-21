function ProcessTimeline() {
  const steps = [
    {
      title: 'Discovery & Data Review',
      desc: 'We align on goals, data sources, payer mix, and specialties. Then we validate extracts for completeness and PHI handling.',
      tip: '1–2 days',
    },
    {
      title: 'Secure Ingest & Normalization',
      desc: 'We connect EHR, clearinghouse, and bank files. Data is normalized into a clean RCM model with payer and reason-code maps.',
      tip: '3–5 days',
    },
    {
      title: 'Dashboard Drafts & QA',
      desc: 'Denials, AR, and collections boards are assembled with field-level checks and sampling for accuracy.',
      tip: '2–3 days',
    },
    {
      title: 'Role-Based Rollout',
      desc: 'Operators, billers, and execs get tailored views. Alerts, exports, and automations are tuned to your workflows.',
      tip: '1–2 days',
    },
  ]

  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">A clear path from data to decisions</h2>
          <p className="mt-3 text-slate-600">A fast, secure implementation with measurable outcomes in days, not months.</p>
        </div>

        <ol className="relative border-l border-slate-200 pl-6">
          {steps.map((s, i) => (
            <li key={s.title} className="mb-10 ml-4">
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-teal-500" />
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">{i + 1}. {s.title}</h3>
                  <span className="text-xs font-medium text-teal-700">{s.tip}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default ProcessTimeline
