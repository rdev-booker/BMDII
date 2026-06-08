import Link from 'next/link'
import { ArrowRight, Wind, Layers3, Settings2 } from 'lucide-react'

const industries = [
  {
    icon: Wind,
    title: 'HVAC & Mechanical',
    subtitle: 'Rooftop Units · Chillers · Air Handlers',
    description: 'Rooftop units, chillers, and air handlers — delivered when your crew is on-site and the crane is ready.',
    visual: 'HVAC',
  },
  {
    icon: Layers3,
    title: 'Steel & Metal Fabrication',
    subtitle: 'Structural Steel · Plate · Coils · Beams',
    description: 'Structural steel, plate, coils, and beams moved with the securement expertise your inventory demands.',
    visual: 'STEEL',
  },
  {
    icon: Settings2,
    title: 'Custom Manufacturing',
    subtitle: 'Machinery · Production Lines · One-Off Loads',
    description: "If it doesn't fit a standard trailer, that's exactly when to call BMD. One-off loads are our normal.",
    visual: 'MFG',
  },
]

export default function IndustriesSection() {
  return (
    <section
      className="bg-bmd-ivory-100 py-20 lg:py-28 relative overflow-hidden"
      id="industries"
      aria-label="Industries served"
    >
      <div className="container-xl relative">

        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2.5 mb-4">
            <span className="w-8 h-px bg-bmd-red-500" />
            <span className="text-label text-bmd-red-500 tracking-widest uppercase font-bold">
              Who We Serve
            </span>
          </div>
          <h2 className="h2-section mb-4">
            Built for{' '}
            <span className="text-bmd-red-500">Industrial Clients</span>{' '}
            Who Can&rsquo;t Afford Mistakes
          </h2>
          <div className="rule-red" />
          <p className="text-bmd-ink-500 leading-relaxed text-lg">
            Our clients operate in demanding industries where a missed delivery or damaged load
            means costly downtime. BMD is the carrier they trust when the stakes are high.
          </p>
        </div>

        {/* Industry cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group bg-white rounded-sm border border-bmd-ink-100
                         hover:border-bmd-red-500/30 transition-all duration-300
                         hover:shadow-card-hover hover:-translate-y-1 overflow-hidden"
            >
              {/* Visual header */}
              <div className="relative h-40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-bmd-slate-700
                                via-bmd-slate-800 to-bmd-ink-950" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <industry.icon className="w-10 h-10 text-bmd-red-400/70 mx-auto mb-2" />
                    <span className="text-[10px] font-mono text-neutral-500 tracking-widest uppercase">
                      {industry.visual} Photo
                    </span>
                  </div>
                </div>
                {/* Red bottom reveal on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-bmd-red-500
                                transform scale-x-0 group-hover:scale-x-100
                                transition-transform duration-300 origin-left" />
              </div>

              <div className="p-7">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-9 h-9 bg-bmd-red-500/8 rounded-sm flex items-center justify-center
                                  group-hover:bg-bmd-red-500/15 transition-colors duration-300">
                    <industry.icon className="w-5 h-5 text-bmd-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-bmd-ink-950">{industry.title}</h3>
                </div>
                <p className="text-xs font-semibold text-bmd-ink-400 uppercase tracking-wider mb-4 pl-12">
                  {industry.subtitle}
                </p>

                <p className="text-sm text-bmd-ink-500 leading-relaxed mb-7">
                  {industry.description}
                </p>

                <Link
                  href="/contact"
                  className="group/cta inline-flex items-center gap-1.5 text-sm font-semibold
                             text-bmd-red-500 hover:text-bmd-red-700 transition-colors duration-200"
                >
                  Ship With Us
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/cta:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-14 bg-white border border-bmd-ink-100 rounded-sm p-8
                        flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold text-bmd-red-500 uppercase tracking-[0.18em] mb-1">
              Not on this list?
            </p>
            <p className="text-bmd-ink-700 font-medium">
              If your freight is heavy, large, or complicated, we have probably moved it before.
            </p>
          </div>
          <Link href="/contact" className="btn-outline whitespace-nowrap">
            Discuss Your Freight
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
