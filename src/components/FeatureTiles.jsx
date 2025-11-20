function FeatureTiles() {
  const features = [
    {
      title: 'Denials Intelligence',
      desc: 'Spot trends across CPTs, payers, and locations. Drill in and assign actions in one click.',
      kpi: '↓ 23% denials',
    },
    {
      title: 'Cash Flow Forecasts',
      desc: 'Predict reimbursements by payer and service line with ML-backed projections.',
      kpi: '$1.2M 30-day',
    },
    {
      title: 'Coder QA',
      desc: 'Automated checks surface coding risks before claims go out the door.',
      kpi: '98.4% clean',
    },
    {
      title: 'Payer Scorecards',
      desc: 'Compare payer performance, SLAs, and appeal outcomes with clear scorecards.',
      kpi: '+11% yield',
    },
  ]

  return (
    <section id="dashboards" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Built for revenue cycle teams</h2>
          <p className="mt-3 text-teal-100/80">From denial prevention to cash acceleration—every view is crafted for clarity and speed.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-teal-300/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-5 shadow-xl shadow-teal-500/5 transition hover:border-teal-300/20">
              <div className="mb-4 text-xs font-semibold tracking-wide text-teal-300/80">{f.kpi}</div>
              <h3 className="mb-2 text-lg font-semibold text-white">{f.title}</h3>
              <p className="text-sm text-teal-100/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureTiles
