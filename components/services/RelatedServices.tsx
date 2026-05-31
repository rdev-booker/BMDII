import Link from 'next/link'
import { ArrowRight, Maximize2, Layers, Factory } from 'lucide-react'
import type { ServiceData } from '@/data/services'

// Map slugs to icons (keeps data.ts free of component imports)
const SLUG_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'over-dimensional': Maximize2,
  'open-deck':        Layers,
  'industrial-ftl':   Factory,
}

interface Props {
  services: ServiceData[]
}

export default function RelatedServices({ services }: Props) {
  if (services.length === 0) return null

  return (
    <section
      className="bg-bmd-ivory-100 section-pad-sm"
      aria-label="Related services"
    >
      <div className="container-xl">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <p className="eyebrow eyebrow-line">More From BMD</p>
            <h2 className="h2-section">Related Services</h2>
          </div>
          <Link
            href="/#services"
            className="btn-text text-body-sm whitespace-nowrap self-start sm:self-auto"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map(service => {
            const Icon = SLUG_ICONS[service.slug] ?? Maximize2

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group card card-hover flex flex-col overflow-hidden"
              >
                {/* Visual header */}
                <div className="relative h-36 bg-bmd-slate-800 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br
                                  from-bmd-slate-700 via-bmd-slate-800 to-bmd-ink-950" />
                  <Icon className="absolute inset-0 m-auto w-14 h-14 text-bmd-red-500/20
                                   group-hover:text-bmd-red-500/40 transition-colors duration-300" />
                  {/* Red reveal */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-bmd-red-500
                                  scale-x-0 group-hover:scale-x-100
                                  transition-transform duration-300 origin-left" />
                </div>

                <div className="p-7 flex flex-col flex-1">
                  <span className="text-label text-bmd-red-500 uppercase tracking-widest
                                   font-bold mb-2">
                    {service.category}
                  </span>
                  <h3 className="text-body-lg font-extrabold text-bmd-ink-950
                                 mb-3 leading-tight">
                    {service.name}
                  </h3>
                  <p className="text-body-sm text-bmd-ink-500 leading-relaxed flex-1 mb-5">
                    {service.hero.subheadline.slice(0, 130)}…
                  </p>
                  <span className="btn-text">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform duration-200
                                           group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
