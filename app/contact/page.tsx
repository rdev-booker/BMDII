'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'

const contactMethods = [
  {
    icon: Phone,
    label: 'Dispatch Line',
    value: '(613) 555-1234',
    sub: 'Mon-Fri · 7am-6pm EST',
    href: 'tel:+16135551234',
    cta: 'Call Now',
  },
  {
    icon: Mail,
    label: 'Email Dispatch',
    value: 'dispatch@bmdtransportation.ca',
    sub: 'Response within 1 business day',
    href: 'mailto:dispatch@bmdtransportation.ca',
    cta: 'Send Email',
  },
  {
    icon: MapPin,
    label: 'Service Area',
    value: 'Eastern Ontario, Canada',
    sub: 'Cross-border to the U.S.',
    href: null,
    cta: null,
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon-Fri 7am-6pm',
    sub: 'EST · After-hours for urgent loads',
    href: null,
    cta: null,
  },
]

const serviceOptions = [
  { value: '', label: 'Select a service' },
  { value: 'over-dimensional', label: 'Over-Dimensional Freight' },
  { value: 'open-deck', label: 'Open Deck / Step Deck' },
  { value: 'industrial-ftl', label: 'Industrial FTL' },
  { value: 'cross-border', label: 'Cross-Border (Canada-U.S.)' },
  { value: 'other', label: 'Other / Not Sure' },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section
          className="relative bg-white pt-[72px] overflow-hidden"
          aria-label="Contact hero"
        >
          <div className="absolute left-0 top-0 w-1.5 h-full bg-bmd-red-500 hidden lg:block" />

          <div className="container-xl py-16 lg:py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2.5 mb-6">
                <span className="w-8 h-px bg-bmd-red-500" />
                <span className="text-label text-bmd-red-500 tracking-widest uppercase font-bold">
                  Get in Touch
                </span>
              </div>
              <h1 className="text-display-xl lg:text-display-2xl font-extrabold text-bmd-ink-950
                             tracking-tightest leading-tight mb-5">
                Contact BMD Transportation
              </h1>
              <p className="text-body-lg text-bmd-ink-500 leading-relaxed">
                Ready to move your freight? Fill out the form below or call dispatch directly.
                We respond to every inquiry within one business day.
              </p>
            </div>
          </div>

          <div className="h-px bg-bmd-ink-100" />
        </section>

        {/* ── Contact method cards ──────────────────────────────────────────── */}
        <section className="bg-bmd-ivory-50 border-b border-bmd-ink-100" aria-label="Contact methods">
          <div className="container-xl py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map(({ icon: Icon, label, value, sub, href, cta }) => (
                <div
                  key={label}
                  className="bg-white rounded-sm border border-bmd-ink-100 p-6
                             hover:border-bmd-red-500/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-bmd-red-500/8 rounded-sm flex items-center
                                  justify-center mb-4">
                    <Icon className="w-5 h-5 text-bmd-red-500" />
                  </div>
                  <p className="text-label font-bold text-bmd-ink-400 uppercase tracking-widest mb-2">
                    {label}
                  </p>
                  <p className="text-base font-bold text-bmd-ink-950 leading-tight mb-1">
                    {value}
                  </p>
                  <p className="text-xs text-bmd-ink-400 mb-4">{sub}</p>
                  {href && cta && (
                    <a
                      href={href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold
                                 text-bmd-red-500 hover:text-bmd-red-700 transition-colors"
                    >
                      {cta}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Quote form ────────────────────────────────────────────────────── */}
        <section
          className="bg-white py-20 lg:py-28"
          aria-label="Quote request form"
        >
          <div className="container-xl">
            <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 items-start">

              {/* Left: context */}
              <div className="lg:sticky lg:top-24">
                <div className="inline-flex items-center gap-2.5 mb-4">
                  <span className="w-8 h-px bg-bmd-red-500" />
                  <span className="text-label text-bmd-red-500 tracking-widest uppercase font-bold">
                    Quote Request
                  </span>
                </div>
                <h2 className="h2-section mb-4">
                  Tell Us About Your Freight
                </h2>
                <div className="rule-red" />
                <p className="text-bmd-ink-500 leading-relaxed mb-8">
                  The more detail you provide about your load, the faster we can give you
                  an accurate quote. Not sure what to include? Just call us.
                </p>

                <div className="space-y-4">
                  {[
                    'Dimensions and weight of your freight',
                    'Origin and destination addresses',
                    'Preferred pickup and delivery dates',
                    'Any special requirements or constraints',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-bmd-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-bmd-ink-600">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-6 rounded-sm bg-bmd-ivory-50 border border-bmd-ink-100">
                  <p className="text-label font-bold text-bmd-ink-400 uppercase tracking-widest mb-3">
                    Prefer to Call?
                  </p>
                  <a
                    href="tel:+16135551234"
                    className="flex items-center gap-3 text-bmd-ink-950 font-bold text-xl
                               hover:text-bmd-red-500 transition-colors duration-200"
                  >
                    <Phone className="w-5 h-5 text-bmd-red-500 flex-shrink-0" />
                    (613) 555-1234
                  </a>
                  <p className="text-xs text-bmd-ink-400 mt-1 ml-8">Mon-Fri · 7am-6pm EST</p>
                </div>
              </div>

              {/* Right: form */}
              <div>
                {submitted ? (
                  <div className="rounded-sm border border-bmd-ink-100 p-10 text-center">
                    <div className="w-16 h-16 bg-bmd-red-500/8 rounded-sm flex items-center
                                    justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-bmd-red-500" />
                    </div>
                    <h3 className="text-display-sm font-bold text-bmd-ink-950 mb-3">
                      Quote Request Received
                    </h3>
                    <p className="text-bmd-ink-500 mb-8">
                      Thank you for reaching out. Our dispatch team will contact you within
                      one business day. For urgent loads, please call us directly.
                    </p>
                    <a href="tel:+16135551234" className="btn-primary inline-flex">
                      <Phone className="w-4 h-4" />
                      Call (613) 555-1234
                    </a>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="rounded-sm border border-bmd-ink-100 p-8 lg:p-10 space-y-6"
                  >
                    {/* Contact info */}
                    <div>
                      <h3 className="text-base font-bold text-bmd-ink-950 mb-5 pb-4
                                     border-b border-bmd-ink-100">
                        Your Contact Information
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="field-label">Full Name *</label>
                          <input type="text" required placeholder="Jane Smith" className="field" />
                        </div>
                        <div>
                          <label className="field-label">Company Name</label>
                          <input type="text" placeholder="Company Inc." className="field" />
                        </div>
                        <div>
                          <label className="field-label">Phone Number *</label>
                          <input type="tel" required placeholder="(613) 000-0000" className="field" />
                        </div>
                        <div>
                          <label className="field-label">Email Address</label>
                          <input type="email" placeholder="you@company.ca" className="field" />
                        </div>
                      </div>
                    </div>

                    {/* Freight details */}
                    <div>
                      <h3 className="text-base font-bold text-bmd-ink-950 mb-5 pb-4
                                     border-b border-bmd-ink-100">
                        Freight Details
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="field-label">Service Required</label>
                          <select className="field-select">
                            {serviceOptions.map(({ value, label }) => (
                              <option key={value} value={value}>{label}</option>
                            ))}
                          </select>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="field-label">Origin (City / Province)</label>
                            <input type="text" placeholder="Kingston, ON" className="field" />
                          </div>
                          <div>
                            <label className="field-label">Destination</label>
                            <input type="text" placeholder="Toronto, ON" className="field" />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-4">
                          <div>
                            <label className="field-label">Length</label>
                            <input type="text" placeholder='e.g. 48"' className="field" />
                          </div>
                          <div>
                            <label className="field-label">Width</label>
                            <input type="text" placeholder="e.g. 8ft 6in" className="field" />
                          </div>
                          <div>
                            <label className="field-label">Weight</label>
                            <input type="text" placeholder="e.g. 42,000 lbs" className="field" />
                          </div>
                        </div>

                        <div>
                          <label className="field-label">Additional Details</label>
                          <textarea
                            rows={4}
                            placeholder="Describe your freight, any special requirements, preferred dates, or other details that will help us quote accurately..."
                            className="field-textarea"
                          />
                        </div>
                      </div>
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center py-4 text-base">
                      Submit Quote Request
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <p className="text-center text-xs text-bmd-ink-400">
                      We respond within one business day. For urgent loads, call{' '}
                      <a href="tel:+16135551234"
                         className="text-bmd-red-500 font-semibold hover:text-bmd-red-700">
                        (613) 555-1234
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
