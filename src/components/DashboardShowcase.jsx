function DashboardShowcase() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_left,rgba(13,148,136,0.12),transparent_55%)]" />
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Interactive RCM dashboards</h2>
            <p className="mt-3 max-w-2xl text-slate-600">Minimal, clinical visuals with rich drilldowns. Designed for operators and executives alike.</p>
          </div>
          <a href="#contact" className="hidden rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-teal-700 transition hover:border-teal-300 md:block">Get a live demo</a>
        </div>

        {/* Image rail */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Large board */}
          <div className="col-span-2 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-lg bg-gradient-to-br from-slate-100 to-slate-200">
              <img src="https://images.unsplash.com/photo-1695846031198-d2ae80c9a70c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSQ00lMjBEYXNoYm9hcmR8ZW58MHwwfHx8MTc2MzY4Mjc5NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="RCM Dashboard" className="h-full w-full object-cover opacity-90" />
            </div>
            <div className="mt-3 text-sm text-slate-600">End-to-end revenue view across volumes, denials, AR days, and collections.</div>
          </div>
          {/* Side cards */}
          <div className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-gradient-to-br from-slate-100 to-slate-200">
                <img src="https://images.unsplash.com/photo-1551281044-8d8eef54e3d2?q=80&w=1200&auto=format&fit=crop" alt="Denials" className="h-full w-full object-cover opacity-90" />
              </div>
              <div className="mt-3 text-sm text-slate-600">Denials heatmaps by payer, reason code, and site of service.</div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-gradient-to-br from-slate-100 to-slate-200">
                <img src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop" alt="Cash Flow" className="h-full w-full object-cover opacity-90" />
              </div>
              <div className="mt-3 text-sm text-slate-600">Cash collections forecast with variance tracking.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DashboardShowcase
