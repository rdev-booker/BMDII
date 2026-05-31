import Link from 'next/link'
import { ArrowRight, Maximize2, Layers, Factory, Globe2 } from 'lucide-react'

const services = [
  {
    icon: Maximize2,
    tag: 'Our Specialty',
    title: 'Over-Dimensional Freight',
    description:
      "Wide loads, high loads, long loads — we move what standard carriers won't touch. Fully permitted, professionally escorted, and expertly routed across Ontario and beyond.",
    bullets: ['Pilot car coordination', 'MTO & DOT permits', 'Route surveys available'],
    cta: 'Learn More',
    href: '/services/over-dimensional',
    featured: true,
  },
  {
    icon: Layers,
    tag: 'Open Deck',
    title: 'Open Deck & Step Deck',
    description:
      "Flatbed, step deck, and RGN trailers for freight that won't fit in a box. Structural steel, machinery, equipment — loaded and secured to industry standards.",
    bullets: ['Flatbed, step deck, RGN', 'Tarping & securement', 'Complex load engineering'],
    cta: 'Learn More',
    href: '/services/open-deck',
    featured: false,
  },
  {
    icon: Factory,
    tag: 'Industrial',
    title: 'Industrial Full Truck Load',
    description:
      'Dedicated, direct FTL service for high-value industrial freight. Steel plate, coils, fabricated assemblies, and production equipment — moved with precision.',
    bullets: ['Dedicated truck & driver', 'Real-time load tracking', 'JIT delivery capability'],
    cta: 'Learn More',
    href: '/services/industrial-ftl',
    featured: false,
  },
  {
    icon: Globe2,
    tag: 'Cross-Border',
    title: 'Canada–U.S. Cross-Border',
    description:
      'Seamless freight movement between Canada and the United States. Full customs documentation, PAPS/PARS filing, and border-experienced drivers.',
    bullets: ['PAPS & PARS filing', 'C-TPAT awareness', 'Experienced border drivers'],
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
          <p className="section-label">
            <span className="w-8 h-px bg-bmd-red" />
            What We Move
          </p>
          <h2 className="section-heading mb-4">
            Specialized Services for{' '}
            <span className="text-bmd-red">Complex Freight</span>
          </h2>
          <div className="divider-red" />
          <p className="text-neutral-600 leading-relaxed text-lg">
            We don&rsquo;t chase every load. We pursue the loads that require real expertise &mdash; the
            heavy, the wide, the dimensional, and the critical. That&rsquo;s where BMD excels.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative flex flex-col rounded-sm border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                service.featured
                  ? 'bg-bmd-black border-bmd-red shadow-lg shadow-red-900/10'
                  : 'bg-white border-neutral-200 hover:border-bmd-red/40 hover:shadow-neutral-200/80'
              }`}
            >
              {/* Featured badge */}
              {service.featured && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-bmd-red text-white text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-sm shadow-md">
                    {service.tag}
                  </span>
                </div>
              )}

              <div className="p-7 flex flex-col flex-1">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-sm flex items-center justify-center mb-5 ${
                    service.featured ? 'bg-bmd-red/15' : 'bg-neutral-100 group-hover:bg-bmd-red/8'
                  } transition-colors duration-300`}
                >
                  <service.icon
                    className={`w-6 h-6 ${service.featured ? 'text-bmd-red' : 'text-neutral-600 group-hover:text-bmd-red'} transition-colors duration-300`}
                  />
                </div>

                {/* Tag (non-featured) */}
                {!service.featured && (
                  <span className="text-[10px] font-bold text-bmd-red uppercase tracking-[0.18em] mb-2">
                    {service.tag}
                  </span>
                )}

                {/* H3 */}
                <h3
                  className={`text-xl font-bold mb-3 leading-tight ${
                    service.featured ? 'text-white' : 'text-neutral-900'
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed mb-5 flex-1 ${
                    service.featured ? 'text-neutral-400' : 'text-neutral-600'
                  }`}
                >
                  {service.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-1.5 mb-7">
                  {service.bullets.map((b) => (
                    <li
                      key={b}
                      className={`flex items-center gap-2 text-xs font-medium ${
                        service.featured ? 'text-neutral-400' : 'text-neutral-500'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-bmd-red flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={service.href}
                  className={`group/cta inline-flex items-center gap-1.5 text-sm font-semibold tracking-wide transition-colors duration-200 ${
                    service.featured
                      ? 'text-bmd-red hover:text-red-400'
                      : 'text-bmd-red hover:text-bmd-red-dark'
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
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-neutral-100">
          <p className="text-neutral-500 text-sm">
            Not sure which service fits your freight? Talk to our dispatch team directly.
          </p>
          <Link href="#contact" className="btn-primary whitespace-nowrap">
            Speak to Dispatch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
