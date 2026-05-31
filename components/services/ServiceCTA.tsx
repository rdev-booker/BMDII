'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2, Phone, Mail } from 'lucide-react'
import type { ServiceData } from '@/data/services'

// Only plain-serializable fields — LucideIcon functions in ServiceData
// cannot cross the Server → Client component boundary.
interface Props {
  name: ServiceData['name']
  slug: ServiceData['slug']
  cta:  ServiceData['cta']
}

const SERVICE_OPTIONS = [
  'Over-Dimensional Freight',
  'Open Deck / Step Deck',
  'Industrial Full Truck Load',
  'Cross-Border Shipping',
  'Multiple Services / Not Sure',
]

export default function ServiceCTA({ name, slug, cta }: Props) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Wire to your email service (Resend, SendGrid, etc.) or form handler here
    setSubmitted(true)
  }

  return (
    <section
      id={`${slug}-quote`}
      className="relative bg-bmd-ink-950 section-pad overflow-hidden"
      aria-label="Request a quote"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-hero-gradient opacity-70" />
      <div className="absolute left-0 top-0 w-1 h-full bg-bmd-red-500 hidden lg:block" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '44px 44px',
        }}
      />
      {/* Red radial — bottom left */}
      <div className="absolute bottom-0 left-0 w-[700px] h-[500px] rounded-full
                      bg-bmd-red-500/10 blur-[120px] pointer-events-none
                      -translate-x-1/3 translate-y-1/2" />

      <div className="container-xl relative">
        <div className="grid lg:grid-cols-[1fr_580px] xl:grid-cols-[1fr_620px] gap-14 lg:gap-16 items-start">

          {/* ── Left: copy ─────────────────────────────────────────────────── */}
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow eyebrow-line mb-5">{name}</p>

            <h2 className="h2-section-light mb-5 max-w-[18ch]">
              {cta.headline}
            </h2>
            <div className="rule-red" />

            <p className="text-body-lg text-neutral-400 leading-relaxed mb-10">
              {cta.subheadline}
            </p>

            {/* Checkpoints */}
            <ul className="space-y-3.5 mb-10">
              {cta.checkpoints.map(point => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-bmd-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-body-sm text-neutral-400 leading-snug">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Direct contact options */}
            <div className="space-y-3 border-t border-white/6 pt-8">
              <p className="text-label text-neutral-600 uppercase tracking-widest font-bold mb-4">
                Prefer to call or email?
              </p>
              <a
                href="tel:+16135551234"
                className="group flex items-center gap-3
                           bg-white/5 hover:bg-white/10 border border-white/8 hover:border-white/15
                           rounded-sm px-5 py-4 transition-all duration-200"
              >
                <div className="w-9 h-9 bg-bmd-red-500/15 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-bmd-red-400" />
                </div>
                <div>
                  <p className="text-label-sm text-neutral-600 uppercase tracking-widest">
                    Call dispatch direct
                  </p>
                  <p className="text-white font-bold text-lg leading-tight">
                    (613) 555-1234
                  </p>
                </div>
              </a>

              <a
                href="mailto:dispatch@bmdtransportation.ca"
                className="group flex items-center gap-3
                           bg-white/5 hover:bg-white/10 border border-white/8 hover:border-white/15
                           rounded-sm px-5 py-4 transition-all duration-200"
              >
                <div className="w-9 h-9 bg-bmd-red-500/15 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-bmd-red-400" />
                </div>
                <div>
                  <p className="text-label-sm text-neutral-600 uppercase tracking-widest">
                    Email dispatch
                  </p>
                  <p className="text-white font-semibold text-body-sm leading-tight">
                    dispatch@bmdtransportation.ca
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* ── Right: quote form ─────────────────────────────────────────── */}
          <div className="bg-white rounded-sm shadow-2xl shadow-black/60 overflow-hidden">

            {/* Form header */}
            <div className="bg-bmd-ivory-100 border-b border-bmd-ink-100 px-8 py-5">
              <p className="text-label text-bmd-red-500 uppercase tracking-widest font-bold mb-0.5">
                {name}
              </p>
              <h3 className="text-display-sm font-extrabold text-bmd-ink-950 tracking-tight">
                Request a Quote
              </h3>
              <p className="text-body-xs text-bmd-ink-400 mt-1">
                Our dispatch team responds within one business day.
              </p>
            </div>

            {submitted ? (
              /* Success state */
              <div className="px-8 py-16 flex flex-col items-center text-center gap-5">
                <div className="w-16 h-16 bg-bmd-red-500/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-bmd-red-500" />
                </div>
                <div>
                  <h4 className="text-display-sm font-extrabold text-bmd-ink-950 mb-2">
                    Request Received
                  </h4>
                  <p className="text-body-sm text-bmd-ink-500 leading-relaxed max-w-xs">
                    Our dispatch team will review your freight details and reach out within one business day.
                    For urgent loads, call <a href="tel:+16135551234" className="text-bmd-red-500 font-semibold">(613) 555-1234</a> directly.
                  </p>
                </div>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="px-8 py-8 space-y-5" noValidate>

                {/* Row 1: Name + Company */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="field-label" htmlFor="cta-name">
                      Name <span className="text-bmd-red-500">*</span>
                    </label>
                    <input
                      id="cta-name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="field"
                    />
                  </div>
                  <div>
                    <label className="field-label" htmlFor="cta-company">
                      Company
                    </label>
                    <input
                      id="cta-company"
                      type="text"
                      placeholder="Company name"
                      className="field"
                    />
                  </div>
                </div>

                {/* Row 2: Phone + Service */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="field-label" htmlFor="cta-phone">
                      Phone <span className="text-bmd-red-500">*</span>
                    </label>
                    <input
                      id="cta-phone"
                      type="tel"
                      required
                      placeholder="(613) 000-0000"
                      className="field"
                    />
                  </div>
                  <div>
                    <label className="field-label" htmlFor="cta-service">
                      Service Required
                    </label>
                    <select id="cta-service" className="field-select" defaultValue="">
                      <option value="" disabled>Select service</option>
                      {SERVICE_OPTIONS.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 3: Origin + Destination */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="field-label" htmlFor="cta-origin">
                      Pickup Location <span className="text-bmd-red-500">*</span>
                    </label>
                    <input
                      id="cta-origin"
                      type="text"
                      required
                      placeholder="City, Province / State"
                      className="field"
                    />
                  </div>
                  <div>
                    <label className="field-label" htmlFor="cta-dest">
                      Delivery Location <span className="text-bmd-red-500">*</span>
                    </label>
                    <input
                      id="cta-dest"
                      type="text"
                      required
                      placeholder="City, Province / State"
                      className="field"
                    />
                  </div>
                </div>

                {/* Row 4: Dimensions + Weight */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="field-label" htmlFor="cta-dims">
                      Load Dimensions
                    </label>
                    <input
                      id="cta-dims"
                      type="text"
                      placeholder="L × W × H (e.g. 40'×12'×13')"
                      className="field"
                    />
                  </div>
                  <div>
                    <label className="field-label" htmlFor="cta-weight">
                      Estimated Weight
                    </label>
                    <input
                      id="cta-weight"
                      type="text"
                      placeholder="e.g. 48,000 lbs"
                      className="field"
                    />
                  </div>
                </div>

                {/* Row 5: Required delivery date */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="field-label" htmlFor="cta-date">
                      Required By (Date)
                    </label>
                    <input
                      id="cta-date"
                      type="date"
                      className="field"
                    />
                  </div>
                  <div>
                    <label className="field-label" htmlFor="cta-email">
                      Email Address
                    </label>
                    <input
                      id="cta-email"
                      type="email"
                      placeholder="you@company.com"
                      className="field"
                    />
                  </div>
                </div>

                {/* Row 6: Freight details */}
                <div>
                  <label className="field-label" htmlFor="cta-details">
                    Freight Description & Special Requirements
                  </label>
                  <textarea
                    id="cta-details"
                    rows={4}
                    placeholder="Describe your load — commodity, packaging, special handling, cross-border needs, escort requirements, or anything else we should know."
                    className="field-textarea"
                  />
                </div>

                {/* Submit */}
                <button type="submit" className="btn-primary w-full py-4 text-body-sm">
                  Send Quote Request
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-center text-label-sm text-bmd-ink-400 uppercase tracking-widest">
                  Or call us at{' '}
                  <a
                    href="tel:+16135551234"
                    className="text-bmd-red-500 font-bold hover:text-bmd-red-700 transition-colors duration-200"
                  >
                    (613) 555-1234
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
