import Hero from './components/Hero'
import FeatureTiles from './components/FeatureTiles'
import DashboardShowcase from './components/DashboardShowcase'
import ProcessTimeline from './components/ProcessTimeline'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTAContact from './components/CTAContact'

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-800">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-teal-600" />
            <span className="text-sm font-semibold tracking-wide text-slate-900">NovaRCM</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#dashboards" className="hover:text-teal-700">Dashboards</a>
            <a href="#process" className="hover:text-teal-700">Process</a>
            <a href="#pricing" className="hover:text-teal-700">Pricing</a>
            <a href="#faq" className="hover:text-teal-700">FAQ</a>
            <a href="/test" className="rounded-md border border-slate-200 px-3 py-1.5 text-slate-700 hover:border-teal-300 hover:text-teal-700">System Check</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <FeatureTiles />
        <DashboardShowcase />
        <ProcessTimeline />
        <Pricing />
        <FAQ />
        <CTAContact />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row sm:px-10">
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} NovaRCM • Medical Billing Analytics</p>
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <a href="#" className="hover:text-teal-700">Security</a>
            <a href="#" className="hover:text-teal-700">Privacy</a>
            <a href="#contact" className="hover:text-teal-700">Get a demo</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
