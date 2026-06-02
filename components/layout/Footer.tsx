import Link from 'next/link'
import {
  Phone, Mail, MapPin, ArrowRight, ArrowUpRight,
  Shield, Clock, Globe2, Award,
} from 'lucide-react'

const services = [
  { label: 'Over-Dimensional Freight', href: '/services/over-dimensional' },
  { label: 'Open Deck / Step Deck',    href: '/services/open-deck'        },
  { label: 'Industrial FTL',           href: '/services/industrial-ftl'   },
  { label: 'Cross-Border Shipping',    href: '/services/over-dimensional'  },
]

const company = [
  { label: 'About BMD',          href: '/about'   },
  { label: 'Industries Served',  href: '/#industries' },
  { label: 'Careers',            href: '/careers' },
  { label: 'Contact Us',         href: '/contact' },
]

const credentials = [
  { icon: Shield, label: 'CVOR Certified'  },
  { icon: Globe2, label: 'DOT Registered' },
  { icon: Award,  label: 'Fully Insured'  },
  { icon: Clock,  label: 'Est. 1987'      },
]

function PreFooter() {
  return (
    <div className="bg-bmd-red-500 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 24px, rgba(0,0,0,0.15) 24px, rgba(0,0,0,0.15) 25px)',
        }}
      />

      <div className="container-xl relative py-10 lg:py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <p className="text-label uppercase tracking-widest text-red-200 font-bold mb-2">
              Ready to ship?
            </p>
            <h2 className="text-display-sm text-white font-extrabold tracking-tight leading-tight">
              Eastern Ontario&rsquo;s Freight Authority.
              <br className="hidden sm:block" />
              <span className="text-red-200">Talk to dispatch today.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
            <a
              href="tel:+16135551234"
              className="inline-flex items-center gap-3 bg-white/15 hover:bg-white/25
                         border border-white/30 text-white font-bold
                         px-7 py-3.5 rounded-sm transition-all duration-200
                         text-body-sm whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              (613) 555-1234
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-bmd-red-600
                         hover:bg-red-50 font-bold px-7 py-3.5 rounded-sm
                         transition-all duration-200 shadow-lg shadow-red-900/30
                         text-body-sm whitespace-nowrap"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-bmd-ink-950 text-white" id="contact">
      <PreFooter />

      <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="container-xl pt-16 pb-10 lg:pt-20 lg:pb-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 lg:gap-10">

          {/* Brand column */}
          <div>
            <div className="flex flex-col leading-none mb-5">
              <span className="text-[32px] font-extrabold text-white tracking-tightest"
                    style={{ fontFamily: 'var(--font-barlow), var(--font-inter)' }}>
                BMD
              </span>
              <span className="text-label-sm text-neutral-500 tracking-ultra-wide uppercase mt-0.5">
                Transportation
              </span>
            </div>

            <p className="text-body-sm text-neutral-400 leading-relaxed mb-6 max-w-[280px]">
              Eastern Ontario&rsquo;s specialized freight authority. Nearly 40 years of
              precision freight movement for industrial, commercial, and cross-border clients.
            </p>

            <div className="badge-red mb-6 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-bmd-red-500 animate-pulse-slow" />
              Est. 1987 · Eastern Ontario
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {credentials.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5 text-bmd-red-500 flex-shrink-0" />
                  <span className="text-label-sm text-neutral-500 uppercase tracking-widest">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-label uppercase tracking-widest text-neutral-600 font-bold mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-1.5
                               text-body-sm text-neutral-400 hover:text-white
                               transition-colors duration-200"
                  >
                    <ArrowUpRight
                      className="w-3.5 h-3.5 text-bmd-red-500 flex-shrink-0
                                 opacity-0 -translate-x-1 group-hover:opacity-100
                                 group-hover:translate-x-0 transition-all duration-200"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-label uppercase tracking-widest text-neutral-600 font-bold mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-1.5
                               text-body-sm text-neutral-400 hover:text-white
                               transition-colors duration-200"
                  >
                    <ArrowUpRight
                      className="w-3.5 h-3.5 text-bmd-red-500 flex-shrink-0
                                 opacity-0 -translate-x-1 group-hover:opacity-100
                                 group-hover:translate-x-0 transition-all duration-200"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-label uppercase tracking-widest text-neutral-600 font-bold mb-5">
              Get in Touch
            </h3>

            <ul className="space-y-5">
              <li>
                <p className="text-label-sm text-neutral-600 uppercase tracking-widest mb-1.5">
                  Dispatch
                </p>
                <a
                  href="tel:+16135551234"
                  className="flex items-center gap-3 text-white font-bold text-lg
                             hover:text-bmd-red-400 transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 rounded-sm bg-bmd-red-500/10 flex items-center justify-center
                                  group-hover:bg-bmd-red-500/20 transition-colors duration-200 flex-shrink-0">
                    <Phone className="w-4 h-4 text-bmd-red-500" />
                  </div>
                  (613) 555-1234
                </a>
                <p className="text-label-sm text-neutral-600 ml-11 mt-1 uppercase tracking-widest">
                  Mon-Fri · 7am-6pm EST
                </p>
              </li>

              <li>
                <p className="text-label-sm text-neutral-600 uppercase tracking-widest mb-1.5">
                  Email
                </p>
                <a
                  href="mailto:dispatch@bmdtransportation.ca"
                  className="flex items-start gap-3 text-body-sm text-neutral-400
                             hover:text-white transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 rounded-sm bg-bmd-red-500/10 flex items-center justify-center
                                  group-hover:bg-bmd-red-500/20 transition-colors duration-200 flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-bmd-red-500" />
                  </div>
                  dispatch@bmdtransportation.ca
                </a>
              </li>

              <li>
                <p className="text-label-sm text-neutral-600 uppercase tracking-widest mb-1.5">
                  Location
                </p>
                <div className="flex items-start gap-3 text-body-sm text-neutral-400">
                  <div className="w-8 h-8 rounded-sm bg-bmd-red-500/10 flex items-center justify-center
                                  flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-bmd-red-500" />
                  </div>
                  <span>Eastern Ontario, Canada<br />Cross-border to U.S.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/6 flex flex-col sm:flex-row
                        items-center justify-between gap-4">
          <p className="text-label-sm text-neutral-700 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} BMD Transportation Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-label-sm text-neutral-700 hover:text-neutral-400
                         uppercase tracking-widest transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-label-sm text-neutral-700 hover:text-neutral-400
                         uppercase tracking-widest transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
