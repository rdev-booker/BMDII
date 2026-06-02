'use client'

import Link from 'next/link'
import { Phone, Mail, ArrowRight, CheckCircle2 } from 'lucide-react'

const reasons = [
  'Nearly 40 years of specialized freight expertise',
  'Eastern Ontario based, deeply familiar with regional routes',
  'Over-dimensional and open deck certified',
  'Cross-border capable with full customs compliance',
  'Responsive dispatch: real people, not automated systems',
]

export default function CTASection() {
  return (
    <section
      className="relative bg-bmd-ink-950 py-20 lg:py-28 overflow-hidden"
      aria-label="Call to action"
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 w-1.5 h-full bg-bmd-red-500" />

      {/* Subtle diagonal accent */}
      <div className="absolute -left-20 bottom-0 w-[35%] h-full bg-bmd-red-500/4
                      transform skew-x-[-6deg] hidden lg:block" />

      {/* Radial glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-bmd-red-500/8
                      rounded-full blur-[120px] pointer-events-none
                      -translate-x-1/2 translate-y-1/2" />

      <div className="container-xl relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: messaging */}
          <div>
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="w-8 h-px bg-bmd-red-500" />
              <span className="text-label text-bmd-red-500 tracking-widest uppercase font-bold">
                Ready to Move
              </span>
            </div>

            <h2 className="h2-section-light mb-6">
              Let&rsquo;s Talk About{' '}
              <span className="text-bmd-red-400">Your Freight</span>
            </h2>
            <div className="w-12 h-[3px] bg-bmd-red-500 rounded-full mb-8" />

            <p className="text-neutral-400 text-lg leading-relaxed mb-10">
              Whether you need a quote on a one-time over-dimensional move or want to discuss
              an ongoing freight partnership, BMD&rsquo;s dispatch team is ready to help.
              No call centres. No runarounds.
            </p>

            <ul className="space-y-3 mb-10">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3 text-sm text-neutral-400">
                  <CheckCircle2 className="w-5 h-5 text-bmd-red-500 flex-shrink-0 mt-0.5" />
                  {reason}
                </li>
              ))}
            </ul>

            {/* Contact methods */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+16135551234"
                className="group flex items-center gap-3 bg-white/5 hover:bg-white/10
                           border border-white/10 hover:border-white/20
                           rounded-sm px-5 py-4 transition-all duration-200"
              >
                <div className="w-10 h-10 bg-bmd-red-500/15 rounded-sm flex items-center
                                justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-bmd-red-400" />
                </div>
                <div>
                  <p className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">
                    Call Dispatch
                  </p>
                  <p className="text-white font-bold text-lg">(613) 555-1234</p>
                </div>
              </a>

              <a
                href="mailto:dispatch@bmdtransportation.ca"
                className="group flex items-center gap-3 bg-white/5 hover:bg-white/10
                           border border-white/10 hover:border-white/20
                           rounded-sm px-5 py-4 transition-all duration-200"
              >
                <div className="w-10 h-10 bg-bmd-red-500/15 rounded-sm flex items-center
                                justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-bmd-red-400" />
                </div>
                <div>
                  <p className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">
                    Email Dispatch
                  </p>
                  <p className="text-white font-semibold text-sm">
                    dispatch@bmdtransportation.ca
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: quote form on white card */}
          <div className="bg-white rounded-sm p-8 shadow-2xl shadow-black/40">
            <h3 className="text-2xl font-bold text-bmd-ink-950 mb-1">Request a Quote</h3>
            <p className="text-bmd-ink-500 text-sm mb-7">
              Tell us about your freight. We&rsquo;ll respond within one business day.
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="field-label">Name *</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="field"
                  />
                </div>
                <div>
                  <label className="field-label">Company</label>
                  <input
                    type="text"
                    placeholder="Company name"
                    className="field"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="field-label">Phone *</label>
                  <input
                    type="tel"
                    placeholder="(613) 000-0000"
                    className="field"
                  />
                </div>
                <div>
                  <label className="field-label">Service Needed</label>
                  <select className="field-select">
                    <option value="">Select a service</option>
                    <option value="over-dimensional">Over-Dimensional</option>
                    <option value="open-deck">Open Deck / Step Deck</option>
                    <option value="industrial-ftl">Industrial FTL</option>
                    <option value="cross-border">Cross-Border</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="field-label">Freight Details</label>
                <textarea
                  rows={4}
                  placeholder="Describe your load: dimensions, weight, origin, destination, timeline..."
                  className="field-textarea"
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                Send Quote Request
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center text-xs text-bmd-ink-400">
                Or call us directly at{' '}
                <a
                  href="tel:+16135551234"
                  className="text-bmd-red-500 font-semibold hover:text-bmd-red-700
                             transition-colors duration-200"
                >
                  (613) 555-1234
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
