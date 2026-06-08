import Link from 'next/link'
import { ArrowRight, Maximize2, Layers, Factory, Globe2 } from 'lucide-react'

const services = [
  {
    icon: Maximize2,
    tag: 'Our Specialty',
    title: 'Over-Dimensional Freight',
    description: "Wide, high, and long loads — fully permitted, piloted, and routed. We move what standard carriers won't quote.",
    cta: 'Learn More',
    href: '/services/over-dimensional',
    featured: true,
  },
  {
    icon: Layers,
    tag: 'Open Deck',
    title: 'Open Deck & Step Deck',
    description: "Flatbed, step deck, and RGN trailers for freight that won't fit in a box — steel, machinery, and equipment secured to the letter.",
    cta: 'Learn More',
    href: '/services/open-deck',
    featured: false,
  },
  {
    icon: Factory,
    tag: 'Industrial',
    title: 'Industrial Full Truck Load',
    description: 'Dedicated truck, direct route, real-time tracking. For high-value industrial freight that cannot share space.',
    cta: 'Learn More',
    href: '/services/industrial-ftl',
    featured: false,
  },
  {
    icon: Globe2,
    tag: 'Cross-Border',
    title: 'Canada–U.S. Cross-Border',
    description: 'Freight across the Canada–U.S. border with full customs documentation and border-experienced drivers. No surprises at the line.',
    cta: 'Learn More',
    href: '/services/over-dimensional#capabilities',
    featured: false,
  },
]

export default function ServicesGrid() {
  return (
    <section className="bg-white py-20 lg:py-28" id="services" aria-label="Specialized services">
      <div className="container-xl">

        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2.5 mb-4">
            <span className="w-8 h-px bg-bmd-red-500" />
            <span className="text-label text-bmd-red-500 tracking-widest uppercase font-bold">
              What We Move
            </span>
          </div>
          <h2 className="h2-section mb-4">
            Specialized Services for{' '}
            <span className="text-bmd-red-500">Complex Freight</span>
          </h2>
          <div className="rule-red" />
          <p className="text-bmd-ink-500 leading-relaxed text-lg">
            We don&rsquo;t chase every load. We pursue the loads that require real expertise:
            the heavy, the wide, the dimensional, and the critical. That&rsquo;s where BMD excels.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative flex flex-col rounded-sm border transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
                service.featured
                  ? 'bg-bmd-ink-950 border-bmd-red-500/30 shadow-card-dark'
                  : 'bg-white border-bmd-ink-100 hover:border-bmd-red-500/30'
              }`}
            >
              {service.featured && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-bmd-red-500 text-white text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-sm shadow-red-glow-sm">
                    {service.tag}
                  </span>
                </div>
              )}

              <div className="p-7 flex flex-col flex-1">
                <div
                  className={`w-12 h-12 rounded-sm flex items-center justify-center mb-5 ${
                    service.featured
                      ? 'bg-bmd-red-500/15'
                      : 'bg-bmd-ivory-100 group-hover:bg-bmd-red-500/8'
                  } transition-colors duration-300`}
                >
                  <service.icon
                    className={`w-6 h-6 ${
                      service.featured
                        ? 'text-bmd-red-400'
                        : 'text-bmd-ink-500 group-hover:text-bmd-red-500'
                    } transition-colors duration-300`}
                  />
                </div>

                {!service.featured && (
                  <span className="text-[10px] font-bold text-bmd-red-500 uppercase tracking-[0.18em] mb-2">
                    {service.tag}
                  </span>
                )}

                <h3
                  className={`text-xl font-bold mb-3 leading-tight ${
                    service.featured ? 'text-white' : 'text-bmd-ink-950'
                  }`}
                >
                  {service.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed mb-7 flex-1 ${
                    service.featured ? 'text-neutral-400' : 'text-bmd-ink-500'
                  }`}
                >
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className={`group/cta inline-flex items-center gap-1.5 text-sm font-semibold tracking-wide transition-colors duration-200 ${
                    service.featured
                      ? 'text-bmd-red-400 hover:text-bmd-red-300'
                      : 'text-bmd-red-500 hover:text-bmd-red-700'
                  }`}
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/cta:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA row */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6
                        pt-10 border-t border-bmd-ink-100">
          <p className="text-bmd-ink-500 text-sm">
            Not sure which service fits your freight? Talk to our dispatch team directly.
          </p>
          <Link href="/contact" className="btn-primary whitespace-nowrap">
            Speak to Dispatch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
