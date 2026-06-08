import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react'
import type { ServiceData } from '@/data/services'

interface Props {
  service: ServiceData
}

export default function ServiceHero({ service }: Props) {
  const { hero, slug } = service

  return (
    <section
      className="relative min-h-[88vh] flex flex-col justify-end bg-bmd-ink-950 overflow-hidden pt-[72px]"
      aria-label={`${service.name} service hero`}
    >
      {/* ── Background layers ──────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Line grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '52px 52px',
        }}
      />

      {/* Red radial glow — top right */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full
                      bg-bmd-red-500/8 blur-[140px] pointer-events-none
                      translate-x-1/3 -translate-y-1/3" />

      {/* Red left bar */}
      <div className="absolute left-0 top-0 w-1 h-full bg-bmd-red-500 hidden lg:block" />

      {/* ── Main content ───────────────────────────────────────────────────── */}
      <div className="relative container-xl pb-0">
        <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-10 lg:gap-16 items-end">

          {/* Left column ─────────────────────────────────────────────────── */}
          <div className="pb-16 lg:pb-24">

            {/* Eyebrow */}
            <p className="eyebrow eyebrow-line mb-5">
              {hero.eyebrow}
            </p>

            {/* H1 */}
            <h1 className="text-display-xl lg:text-display-2xl font-extrabold text-white
                           tracking-tightest leading-tight mb-5 max-w-[16ch]">
              {hero.headline}
            </h1>

            {/* Red rule */}
            <div className="rule-red" />

            {/* Subheadline */}
            <p className="text-body-lg text-neutral-400 leading-relaxed mb-10 max-w-[52ch]">
              {hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href={`#${slug}-quote`} className="btn-primary-lg">
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+16135551234"
                className="btn-ghost-lg"
              >
                <Phone className="w-4 h-4" />
                Call Dispatch
              </a>
            </div>

            {/* Compliance badges */}
            <div className="flex flex-wrap gap-2">
              {hero.complianceBadges.map(badge => (
                <div key={badge} className="badge-dark gap-2">
                  <ShieldCheck className="w-3 h-3 text-bmd-red-500" />
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Right column — visual + stats card ─────────────────────────── */}
          <div className="hidden lg:flex flex-col self-end">

            {/* Service hero image */}
            <div className="relative aspect-[4/5] rounded-t-sm overflow-hidden
                            bg-bmd-slate-800 border border-white/6 border-b-0">
              <Image
                src="/images/BMD-Trucks.jpg"
                alt={hero.imagePlaceholder}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1280px) 40vw, 480px"
              />

              {/* Gradient overlay — bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-24
                              bg-gradient-to-t from-bmd-ink-950 to-transparent" />
            </div>

            {/* Stats card — overlaps image bottom */}
            <div className="bg-bmd-ink-950/95 backdrop-blur-sm
                            border border-white/8 border-t-bmd-red-500
                            border-t-2 p-5">
              <div className="grid grid-cols-3 gap-4">
                {hero.stats.map(({ value, label, note }) => (
                  <div key={label} className="text-center">
                    <p className="text-display-sm font-extrabold text-white
                                  tracking-tighter leading-tight mb-0.5">
                      {value}
                    </p>
                    <p className="text-label text-bmd-red-400 uppercase tracking-widest
                                  font-bold mb-0.5">
                      {label}
                    </p>
                    {note && (
                      <p className="text-label-sm text-neutral-600 uppercase tracking-widest">
                        {note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile stats strip ─────────────────────────────────────────────── */}
      <div className="lg:hidden relative border-t border-white/6 bg-bmd-ink-900/80">
        <div className="container-xl py-5">
          <div className="grid grid-cols-3 gap-4">
            {hero.stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-display-sm font-extrabold text-white
                              tracking-tighter leading-none mb-1">
                  {value}
                </p>
                <p className="text-label-sm text-bmd-red-400 uppercase tracking-widest">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
