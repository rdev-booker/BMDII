import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ShieldCheck, Award, MapPin, Globe } from 'lucide-react'

const trustPillars = [
  { icon: Award,       label: 'Approaching 40 Yrs', sub: 'In Operation'    },
  { icon: MapPin,      label: 'Eastern Ontario',     sub: 'Based & Operated' },
  { icon: Globe,       label: 'Cross-Border',        sub: 'Canada & U.S.'  },
  { icon: ShieldCheck, label: 'Licensed & Insured',  sub: 'Fully Compliant' },
]

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-bmd-ink-950"
      aria-label="Hero"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Red left bar */}
      <div className="absolute left-0 top-0 w-1 h-full bg-bmd-red-500 hidden lg:block" />

      {/* Radial glow — top right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-bmd-red-500/5
                      rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="relative container-xl pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: copy ──────────────────────────────────────────────── */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 bg-bmd-red-500/10
                            border border-bmd-red-500/25 rounded-sm px-4 py-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-bmd-red-500 animate-pulse-slow flex-shrink-0" />
              <span className="text-label text-bmd-red-500 tracking-widest uppercase font-semibold">
                Specialized Freight &mdash; Eastern Ontario
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-display-xl lg:text-display-2xl font-extrabold text-white
                           tracking-tightest leading-tight mb-6">
              When the Load{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-bmd-red-500">Demands</span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px]
                                 bg-bmd-red-500/40 rounded-full" />
              </span>
              <br />
              Experience.
            </h1>

            {/* Subheadline */}
            <p className="text-body-lg text-neutral-400 leading-relaxed mb-10 max-w-xl">
              Approaching 40 years moving the freight others turn away. Eastern Ontario&rsquo;s
              premier partner for over-dimensional, open deck, and industrial cargo &mdash;
              delivered on time, across Canada and the U.S.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-14">
              <Link href="#contact" className="btn-primary px-8 py-4">
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#services" className="btn-ghost px-8 py-4">
                Our Services
              </Link>
            </div>

            {/* Trust pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10">
              {trustPillars.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex flex-col gap-1">
                  <Icon className="w-5 h-5 text-bmd-red-500 mb-1" />
                  <span className="text-sm font-bold text-white leading-tight">{label}</span>
                  <span className="text-xs text-neutral-500">{sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: truck image ──────────────────────────────────────── */}
          <div className="relative hidden lg:block">

            {/* Image container */}
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden
                            border border-white/10 shadow-card-dark">

              {/* BMD truck photo */}
              <Image
                src="/images/bmd.webp"
                alt="BMD Transportation specialized freight truck — Eastern Ontario"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1280px) 50vw, 640px"
              />

              {/* Bottom gradient — fades photo into the stats bar */}
              <div className="absolute inset-0 bg-gradient-to-t
                              from-bmd-ink-950 via-bmd-ink-950/40 to-transparent" />

              {/* Stats bar */}
              <div className="absolute bottom-0 left-0 right-0
                              bg-bmd-ink-950/85 backdrop-blur-sm
                              border-t border-white/10 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-extrabold text-white tracking-tight">~40</p>
                    <p className="text-label-sm text-neutral-500 uppercase tracking-widest">
                      Years Experience
                    </p>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div>
                    <p className="text-2xl font-extrabold text-white tracking-tight">100%</p>
                    <p className="text-label-sm text-neutral-500 uppercase tracking-widest">
                      Licensed &amp; Compliant
                    </p>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div>
                    <p className="text-2xl font-extrabold text-bmd-red-500 tracking-tight">OD</p>
                    <p className="text-label-sm text-neutral-500 uppercase tracking-widest">
                      Certified Capable
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent card */}
            <div className="absolute -top-4 -right-4 bg-bmd-red-500 px-4 py-3
                            rounded-sm shadow-red-glow">
              <p className="text-label font-bold text-white uppercase tracking-wider">Est. 1987</p>
              <p className="text-label-sm text-red-200 uppercase tracking-widest">Eastern Ontario</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2
                      flex flex-col items-center gap-2 opacity-40">
        <span className="text-label-sm text-white uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  )
}
