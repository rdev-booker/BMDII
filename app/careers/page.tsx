import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import {
  ArrowRight, Phone, Mail, CheckCircle2,
  Truck, MapPin, Shield, DollarSign, Clock, Users,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers at BMD Transportation | Drive With Us | Eastern Ontario',
  description:
    'Drive with BMD Transportation. We are hiring company drivers and owner-operators for specialized freight in Eastern Ontario. Stable routes, professional team, nearly 40 years strong.',
}

const benefits = [
  {
    icon: DollarSign,
    title: 'Competitive Compensation',
    desc: 'Mileage and hourly rates that reflect the skill specialized freight requires. No games.',
  },
  {
    icon: MapPin,
    title: 'Consistent Regional Runs',
    desc: 'Eastern Ontario routes with defined home time. You know where you are going and when you are back.',
  },
  {
    icon: Truck,
    title: 'Well-Maintained Equipment',
    desc: 'Late-model trucks and trailers maintained to the standard we expect from every load we move.',
  },
  {
    icon: Shield,
    title: 'Full Compliance Support',
    desc: 'We handle permitting, CVOR, and paperwork so you can focus on driving safely.',
  },
  {
    icon: Users,
    title: 'Experienced Dispatch Team',
    desc: 'Dispatchers who know the freight and respect your time. No micromanaging, no runarounds.',
  },
  {
    icon: Clock,
    title: 'Established Operation',
    desc: 'Nearly 40 years in business means stable work, not fly-by-night promises.',
  },
]

const positions = [
  {
    title: 'Company Driver - Flatbed / Open Deck',
    type: 'Full-Time',
    location: 'Eastern Ontario',
    requirements: [
      'AZ licence in good standing',
      'Minimum 3 years flatbed or open deck experience',
      'Clean driver abstract',
      'Experience with load securement and tarping',
      'Knowledge of Ontario road network',
    ],
    preferred: [
      'Over-dimensional or specialized load experience',
      'Cross-border driving experience',
      'WHMIS / transportation safety training',
    ],
  },
  {
    title: 'Owner-Operator - Specialized Freight',
    type: 'Contractor',
    location: 'Eastern Ontario + Cross-Border',
    requirements: [
      'AZ licence with clean abstract',
      'Own flatbed, step deck, or RGN trailer',
      'CVOR in good standing',
      'Adequate cargo and liability insurance',
      'Proven specialized freight experience',
    ],
    preferred: [
      'Established relationship with MTO for OD permits',
      'FAST card / NEXUS for cross-border runs',
      'Pilot car coordination experience',
    ],
  },
]

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section
          className="relative bg-white pt-[72px] overflow-hidden"
          aria-label="Careers hero"
        >
          <div className="absolute left-0 top-0 w-1.5 h-full bg-bmd-red-500 hidden lg:block" />

          <div className="container-xl py-16 lg:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2.5 mb-6">
                <span className="w-8 h-px bg-bmd-red-500" />
                <span className="text-label text-bmd-red-500 tracking-widest uppercase font-bold">
                  Join the Team
                </span>
              </div>
              <h1 className="text-display-xl lg:text-display-2xl font-extrabold text-bmd-ink-950
                             tracking-tightest leading-tight mb-6">
                Drive With BMD Transportation
              </h1>
              <p className="text-body-lg text-bmd-ink-500 leading-relaxed mb-8 max-w-2xl">
                We are a specialized carrier, which means we need specialized drivers. If you
                have the experience to handle the freight others turn away, we want to talk.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="tel:+16135551234" className="btn-primary px-8 py-4">
                  Call to Apply
                  <Phone className="w-4 h-4" />
                </a>
                <a href="mailto:dispatch@bmdtransportation.ca?subject=Driver%20Application"
                   className="btn-outline px-8 py-4">
                  Email Your Resume
                </a>
              </div>
            </div>
          </div>

          <div className="h-px bg-bmd-ink-100" />
        </section>

        {/* ── Why drive with BMD ────────────────────────────────────────────── */}
        <section
          className="bg-bmd-ivory-50 border-b border-bmd-ink-100 py-20 lg:py-24"
          aria-label="Why drive for BMD"
        >
          <div className="container-xl">
            <div className="max-w-2xl mb-14">
              <div className="inline-flex items-center gap-2.5 mb-4">
                <span className="w-8 h-px bg-bmd-red-500" />
                <span className="text-label text-bmd-red-500 tracking-widest uppercase font-bold">
                  Why BMD
                </span>
              </div>
              <h2 className="h2-section mb-4">
                What We Offer Our Drivers
              </h2>
              <div className="rule-red" />
              <p className="text-bmd-ink-500 leading-relaxed">
                Nearly 40 years in business is a track record. Here is what it means for
                the drivers who work with us.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white rounded-sm border border-bmd-ink-100 p-7
                             hover:border-bmd-red-500/30 hover:shadow-card-hover
                             hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-bmd-red-500/8 rounded-sm flex items-center
                                  justify-center mb-5">
                    <Icon className="w-5 h-5 text-bmd-red-500" />
                  </div>
                  <h3 className="text-base font-bold text-bmd-ink-950 mb-2">{title}</h3>
                  <p className="text-sm text-bmd-ink-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Open positions ────────────────────────────────────────────────── */}
        <section
          className="bg-white py-20 lg:py-28"
          aria-label="Open positions"
        >
          <div className="container-xl">
            <div className="max-w-2xl mb-14">
              <div className="inline-flex items-center gap-2.5 mb-4">
                <span className="w-8 h-px bg-bmd-red-500" />
                <span className="text-label text-bmd-red-500 tracking-widest uppercase font-bold">
                  Open Positions
                </span>
              </div>
              <h2 className="h2-section mb-4">Current Opportunities</h2>
              <div className="rule-red" />
              <p className="text-bmd-ink-500 leading-relaxed">
                We hire for character and skill. If you run a professional operation and
                take pride in your work, you will fit in here.
              </p>
            </div>

            <div className="space-y-8">
              {positions.map(({ title, type, location, requirements, preferred }) => (
                <div
                  key={title}
                  className="rounded-sm border border-bmd-ink-100 overflow-hidden"
                >
                  {/* Header */}
                  <div className="bg-bmd-ink-950 px-8 py-6 flex flex-col sm:flex-row
                                  sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="badge-red">{type}</span>
                        <span className="flex items-center gap-1.5 text-label-sm text-neutral-400
                                         uppercase tracking-widest">
                          <MapPin className="w-3 h-3 text-bmd-red-500" />
                          {location}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                      <a
                        href="tel:+16135551234"
                        className="inline-flex items-center gap-2 bg-white/8 hover:bg-white/15
                                   border border-white/15 text-white font-semibold
                                   text-label-lg uppercase px-5 py-2.5 rounded-sm
                                   transition-all duration-200 whitespace-nowrap"
                      >
                        <Phone className="w-4 h-4" />
                        Call Us
                      </a>
                      <a
                        href="mailto:dispatch@bmdtransportation.ca?subject=Application: Driver Position"
                        className="btn-primary whitespace-nowrap"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="p-8 grid sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-label font-bold text-bmd-ink-950 uppercase
                                     tracking-widest mb-4">
                        Requirements
                      </h4>
                      <ul className="space-y-3">
                        {requirements.map((req) => (
                          <li key={req} className="flex items-start gap-3 text-sm text-bmd-ink-600">
                            <CheckCircle2 className="w-4 h-4 text-bmd-red-500 flex-shrink-0 mt-0.5" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-label font-bold text-bmd-ink-950 uppercase
                                     tracking-widest mb-4">
                        Preferred
                      </h4>
                      <ul className="space-y-3">
                        {preferred.map((pref) => (
                          <li key={pref} className="flex items-start gap-3 text-sm text-bmd-ink-500">
                            <div className="w-4 h-4 flex-shrink-0 mt-0.5 flex items-center justify-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-bmd-red-500" />
                            </div>
                            {pref}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How to apply ─────────────────────────────────────────────────── */}
        <section
          className="bg-bmd-ink-950 py-16 lg:py-20 relative overflow-hidden"
          aria-label="How to apply"
        >
          <div className="absolute left-0 top-0 w-1.5 h-full bg-bmd-red-500" />
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2.5 mb-4">
                  <span className="w-8 h-px bg-bmd-red-500" />
                  <span className="text-label text-bmd-red-500 tracking-widest uppercase font-bold">
                    Apply Today
                  </span>
                </div>
                <h2 className="h2-section-light mb-4">
                  How to Get Started
                </h2>
                <div className="w-12 h-[3px] bg-bmd-red-500 rounded-full mb-8" />
                <p className="text-neutral-400 leading-relaxed mb-8">
                  We keep the application process straightforward. Call us or email your
                  resume and driving abstract. If your experience fits what we are looking for,
                  we will set up a conversation quickly.
                </p>

                <div className="space-y-4">
                  {[
                    { step: '1', text: 'Call or email with your name and years of experience' },
                    { step: '2', text: 'Provide your driver abstract and applicable certifications' },
                    { step: '3', text: 'Brief conversation with our operations team' },
                    { step: '4', text: 'If it is a good fit, we get you onboarded and working' },
                  ].map(({ step, text }) => (
                    <div key={step} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-sm bg-bmd-red-500 flex items-center
                                      justify-center flex-shrink-0 text-white text-sm font-bold">
                        {step}
                      </div>
                      <p className="text-neutral-300 pt-1">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:+16135551234"
                  className="group flex items-center gap-5 bg-white/5 hover:bg-white/10
                             border border-white/10 hover:border-white/20
                             rounded-sm px-7 py-5 transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-bmd-red-500/15 rounded-sm flex items-center
                                  justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-bmd-red-400" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold mb-1">
                      Call to Discuss
                    </p>
                    <p className="text-white font-bold text-xl">(613) 555-1234</p>
                    <p className="text-xs text-neutral-500 mt-0.5">Mon-Fri · 7am-6pm EST</p>
                  </div>
                </a>

                <a
                  href="mailto:dispatch@bmdtransportation.ca?subject=Driver%20Application"
                  className="group flex items-center gap-5 bg-white/5 hover:bg-white/10
                             border border-white/10 hover:border-white/20
                             rounded-sm px-7 py-5 transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-bmd-red-500/15 rounded-sm flex items-center
                                  justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-bmd-red-400" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold mb-1">
                      Email Resume
                    </p>
                    <p className="text-white font-semibold">dispatch@bmdtransportation.ca</p>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Subject: Driver Application
                    </p>
                  </div>
                </a>

                <div className="mt-6 p-5 rounded-sm border border-bmd-red-500/20 bg-bmd-red-500/5">
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    <span className="font-bold text-white">Note:</span> We are a specialized carrier.
                    We look for drivers who take pride in their work and understand that our
                    freight demands more than average. Attitude and professionalism matter as much
                    as the licence class.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
