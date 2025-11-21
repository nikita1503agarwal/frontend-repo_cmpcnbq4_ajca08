import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-white">
      {/* 3D Heart Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Light overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/75 to-white/95" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(13,148,136,0.10),transparent_55%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pb-20 pt-24 sm:px-10 md:pt-28 lg:pt-32">
        <span className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium tracking-wide text-teal-700">
          Healthcare Revenue Intelligence
        </span>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          Beautiful, actionable billing dashboards for modern medical teams
        </h1>
        <p className="max-w-2xl text-base text-slate-600 sm:text-lg">
          See denials, reimbursements, and cash flow in real time. We turn complex RCM data into clear, interactive views your team can act on.
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          <a href="#contact" className="rounded-lg bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/20 transition hover:bg-teal-500">
            Book a walkthrough
          </a>
          <a href="#dashboards" className="rounded-lg border border-teal-200 bg-white px-5 py-3 text-sm font-semibold text-teal-700 transition hover:border-teal-300">
            Explore dashboards
          </a>
        </div>
        <div className="mt-10 flex flex-wrap gap-6 text-slate-700">
          <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-teal-500"></span><p>HIPAA-ready workflows</p></div>
          <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-teal-500"></span><p>Real-time denials tracking</p></div>
          <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-teal-500"></span><p>Automated payer insights</p></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
