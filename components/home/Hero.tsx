import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ShieldCheck, Award, MapPin, Globe } from 'lucide-react'

const trustPillars = [
  { icon: Award,       label: 'Nearly 40 Yrs',    sub: 'In Operation'     },
  { icon: MapPin,      label: 'Eastern Ontario',   sub: 'Based and Operated' },
  { icon: Globe,       label: 'Cross-Border',      sub: 'Canada and U.S.' },
  { icon: ShieldCheck, label: 'Licensed and Insured', sub: 'Fully Compliant' },
]

export default function Hero() {
  return (
    <section
      className="relative bg-white pt-[72px] min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Red left accent bar */}
      <div className="absolute left-0 top-0 w-1.5 h-full bg-bmd-red-500 hidden lg:block" />

      {/* Subtle dot grid on white */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(0,0,0,0.4) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative container-xl py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left: copy on white ─────────────────────────────────────── */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 mb-8">
              <div className="w-8 h-px bg-bmd-red-500" />
              <span className="text-label text-bmd-red-500 tracking-widest uppercase font-bold">
                Eastern Ontario Specialized Freight
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-display-xl lg:text-display-2xl font-extrabold text-bmd-ink-950
                           tracking-tightest leading-tight mb-6">
              When the Load{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-bmd-red-500">Demands</span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px]
                                 bg-bmd-red-500/30 rounded-full" />
              </span>
              <br />
              Experience.
            </h1>

            {/* Subheadline */}
            <p className="text-body-lg text-bmd-ink-500 leading-relaxed mb-10 max-w-xl">
              Nearly 40 years moving the freight others turn away. Eastern Ontario&rsquo;s
              premier carrier for over-dimensional, open deck, and industrial cargo
              across Canada and the United States.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-14">
              <Link href="/contact" className="btn-primary px-8 py-4">
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services/over-dimensional" className="btn-outline px-8 py-4">
                Our Services
              </Link>
            </div>

            {/* Trust pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-bmd-ink-100">
              {trustPillars.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex flex-col gap-1">
                  <Icon className="w-5 h-5 text-bmd-red-500 mb-1" />
                  <span className="text-sm font-bold text-bmd-ink-950 leading-tight">{label}</span>
                  <span className="text-xs text-bmd-ink-400">{sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: truck image ──────────────────────────────────────── */}
          <div className="relative hidden lg:block">

            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-card-md
                            border border-bmd-ink-100">
              <Image
                src="/images/bmd.webp"
                alt="BMD Transportation specialized freight truck - Eastern Ontario"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1280px) 50vw, 640px"
              />

              {/* Gradient for stats bar readability */}
              <div className="absolute inset-0 bg-gradient-to-t
                              from-bmd-ink-950 via-bmd-ink-950/30 to-transparent" />

              {/* Stats bar */}
              <div className="absolute bottom-0 left-0 right-0
                              bg-bmd-ink-950/90 backdrop-blur-sm
                              border-t border-white/10 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-extrabold text-white tracking-tight">~40</p>
                    <p className="text-label-sm text-neutral-400 uppercase tracking-widest">
                      Years Experience
                    </p>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div>
                    <p className="text-2xl font-extrabold text-white tracking-tight">100%</p>
                    <p className="text-label-sm text-neutral-400 uppercase tracking-widest">
                      Licensed &amp; Compliant
                    </p>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div>
                    <p className="text-2xl font-extrabold text-bmd-red-400 tracking-tight">OD</p>
                    <p className="text-label-sm text-neutral-400 uppercase tracking-widest">
                      Certified Capable
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-bmd-red-500 px-4 py-3
                            rounded-sm shadow-red-glow">
              <p className="text-label font-bold text-white uppercase tracking-wider">Est. 1987</p>
              <p className="text-label-sm text-red-200 uppercase tracking-widest">Eastern Ontario</p>
            </div>

            {/* Bottom-left accent — red rule */}
            <div className="absolute -bottom-4 -left-4 bg-white border border-bmd-ink-100
                            rounded-sm px-4 py-3 shadow-card-md">
              <p className="text-label-sm text-bmd-ink-400 uppercase tracking-widest mb-0.5">
                Dispatch Direct
              </p>
              <a href="tel:+16135551234"
                 className="text-bmd-ink-950 font-bold text-base hover:text-bmd-red-500
                            transition-colors duration-200">
                (613) 555-1234
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2
                      flex flex-col items-center gap-2 opacity-30">
        <span className="text-label-sm text-bmd-ink-500 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-bmd-ink-400 to-transparent" />
      </div>
    </section>
  )
}
