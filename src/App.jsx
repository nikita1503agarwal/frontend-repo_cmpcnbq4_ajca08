import Hero from './components/Hero'
import FeatureTiles from './components/FeatureTiles'
import DashboardShowcase from './components/DashboardShowcase'
import CTAContact from './components/CTAContact'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-teal-50">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-teal-300/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-teal-400" />
            <span className="text-sm font-semibold tracking-wide text-white">NovaRCM</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-teal-100/80 md:flex">
            <a href="#dashboards" className="hover:text-white">Dashboards</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="/test" className="rounded-md border border-teal-300/20 px-3 py-1.5 hover:border-teal-300/40">System Check</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <FeatureTiles />
        <DashboardShowcase />
        <CTAContact />
      </main>

      <footer className="border-t border-teal-300/10 bg-slate-950/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row sm:px-10">
          <p className="text-xs text-teal-200/70">© {new Date().getFullYear()} NovaRCM • Medical Billing Analytics</p>
          <div className="flex items-center gap-4 text-xs text-teal-200/70">
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#contact" className="hover:text-white">Get a demo</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
