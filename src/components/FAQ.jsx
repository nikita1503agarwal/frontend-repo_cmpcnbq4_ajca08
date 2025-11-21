function FAQ() {
  const faqs = [
    {
      q: 'How long does implementation take?',
      a: 'Most teams are live with core dashboards within 10–14 days. Complex payer feeds or custom models may add time.'
    },
    {
      q: 'Do you handle PHI securely?',
      a: 'Yes. We follow HIPAA best practices with encryption in transit and at rest, access controls, and audit trails.'
    },
    {
      q: 'Can you connect to our EHR and clearinghouse?',
      a: 'We support common EHRs and clearinghouses, plus SFTP and API-based data ingest.'
    },
    {
      q: 'Do you offer custom dashboards?',
      a: 'Absolutely. We tailor views to your payer mix, specialties, and operational workflows.'
    }
  ]

  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-3 text-slate-600">If you don’t see your question here, just reach out — we’re happy to help.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-base font-semibold text-slate-900">{f.q}</div>
              <p className="mt-2 text-sm text-slate-600">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
