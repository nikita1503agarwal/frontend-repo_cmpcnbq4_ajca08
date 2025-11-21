import { useState } from 'react'

function CTAContact() {
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      // Placeholder UX only. Connect to backend later if needed.
      await new Promise((r) => setTimeout(r, 700))
      setStatus('Thanks — we will reach out shortly!')
    } catch {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Let’s tailor a dashboard to your specialties</h3>
              <p className="mt-3 text-slate-600">Tell us about your payers, volumes, and goals. We’ll prep a guided walkthrough with your data in mind.</p>

              <ul className="mt-6 space-y-3 text-slate-600">
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-teal-600"></span>14-day pilot, no commitment</li>
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-teal-600"></span>Custom payer adapters</li>
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-teal-600"></span>Secure, HIPAA-ready environment</li>
              </ul>
            </div>

            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Name</label>
                <input required className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:border-teal-400 focus:outline-none" placeholder="Jane from Ocean Health" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Work email</label>
                <input type="email" required className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:border-teal-400 focus:outline-none" placeholder="jane@oceanhealth.org" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">What are you hoping to improve?</label>
                <textarea rows={4} className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:border-teal-400 focus:outline-none" placeholder="Denials by payer, AR days, point-of-service collections..." />
              </div>
              <button type="submit" className="w-full rounded-lg bg-teal-600 px-5 py-3 font-semibold text-white shadow-lg shadow-teal-500/20 transition hover:bg-teal-500">Request a walkthrough</button>
              {status && <p className="text-sm text-teal-700">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTAContact
