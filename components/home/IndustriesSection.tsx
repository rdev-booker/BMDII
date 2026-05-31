import Link from 'next/link'
import { ArrowRight, Wind, Layers3, Settings2 } from 'lucide-react'

const industries = [
  {
    icon: Wind,
    title: 'HVAC & Mechanical',
    subtitle: 'Rooftop Units · Chillers · Air Handlers',
    description:
      'We understand job site timing. Whether it&rsquo;s a rooftop unit crane lift or a commercial chiller delivery, BMD coordinates specialized equipment transport to arrive exactly when your crew is ready.',
    highlights: [
      'Rooftop unit staging & delivery',
      'Commercial chiller transport',
      'Large-format air handler moves',
      'Time-sensitive job site delivery',
    ],
    visual: 'HVAC',
  },
  {
    icon: Layers3,
    title: 'Steel & Metal Fabrication',
    subtitle: 'Structural Steel · Plate · Coils · Beams',
    description:
      'From structural steel for construction projects to coiled metal for fabrication shops, we move raw and finished steel with the securement expertise that protects your investment.',
    highlights: [
      'Structural steel & beams',
      'Steel plate & coil transport',
      'Fabricated assembly delivery',
      'Steel service centre routes',
    ],
    visual: 'STEEL',
  },
  {
    icon: Settings2,
    title: 'Custom Manufacturing',
    subtitle: 'Machinery · Production Lines · One-Off Loads',
    description:
      'Custom-built equipment doesn&rsquo;t follow standard dimensions. Neither does our thinking. BMD specializes in the unusual loads &mdash; the one-offs, the prototypes, and the mission-critical production line moves.',
    highlights: [
      'CNC & production machinery',
      'Oversized custom equipment',
      'Production line relocation',
      'Trade show & prototype freight',
    ],
    visual: 'MFG',
  },
]

export default function IndustriesSection() {
  return (
    <section
      className="bg-neutral-50 py-20 lg:py-28 relative overflow-hidden"
      id="industries"
      aria-label="Industries served"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bmd-red/3 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

      <div className="container-xl relative">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="section-label">
            <span className="w-8 h-px bg-bmd-red" />
            Who We Serve
          </p>
          <h2 className="section-heading mb-4">
            Built for{' '}
            <span className="text-bmd-red">Industrial Clients</span>{' '}
            Who Can&rsquo;t Afford Mistakes
          </h2>
          <div className="divider-red" />
          <p className="text-neutral-600 leading-relaxed text-lg">
            Our clients operate in demanding industries where a missed delivery or damaged load
            means costly downtime. BMD is the carrier they trust when the stakes are high.
          </p>
        </div>

        {/* Industry cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group bg-white rounded-sm border border-neutral-200 hover:border-bmd-red/30 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-200 hover:-translate-y-1 overflow-hidden"
            >
              {/* Visual header */}
              <div className="relative h-40 bg-bmd-steel overflow-hidden">
                {/* Placeholder — replace with Image when assets ready */}
                <div className="absolute inset-0 bg-gradient-to-br from-bmd-charcoal via-bmd-steel to-neutral-800" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <industry.icon className="w-10 h-10 text-bmd-red/60 mx-auto mb-2" />
                    <span className="text-[10px] font-mono text-neutral-600 tracking-widest uppercase">
                      {industry.visual} Photo
                    </span>
                  </div>
                </div>
                {/* Red bottom border reveal */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-bmd-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>

              <div className="p-7">
                {/* Icon + title */}
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-9 h-9 bg-bmd-red/8 rounded-sm flex items-center justify-center group-hover:bg-bmd-red/15 transition-colors duration-300">
                    <industry.icon className="w-5 h-5 text-bmd-red" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900">{industry.title}</h3>
                </div>
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-4 pl-12">
                  {industry.subtitle}
                </p>

                <p
                  className="text-sm text-neutral-600 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ __html: industry.description }}
                />

                {/* Highlight bullets */}
                <ul className="space-y-2 mb-6">
                  {industry.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 text-xs text-neutral-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-bmd-red flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact"
                  className="group/cta inline-flex items-center gap-1.5 text-sm font-semibold text-bmd-red hover:text-bmd-red-dark transition-colors duration-200"
                >
                  Ship With Us
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/cta:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-14 bg-white border border-neutral-200 rounded-sm p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold text-bmd-red uppercase tracking-[0.18em] mb-1">
              Not on this list?
            </p>
            <p className="text-neutral-700 font-medium">
              If your freight is heavy, large, or complicated &mdash; we&rsquo;ve probably moved it before.
            </p>
          </div>
          <Link href="#contact" className="btn-outline-dark whitespace-nowrap">
            Discuss Your Freight
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
