import { Milestone, MapPin, Globe2, ShieldCheck, Truck } from 'lucide-react'

const pillars = [
  {
    icon: Milestone,
    value: '~40',
    unit: 'Years',
    label: 'In Business',
    description: 'Serving Eastern Ontario since 1987',
  },
  {
    icon: Truck,
    value: 'OD',
    unit: 'Certified',
    label: 'Over-Dimensional',
    description: 'Wide, high & long load specialists',
  },
  {
    icon: Globe2,
    value: 'CA / US',
    unit: 'Routes',
    label: 'Cross-Border',
    description: 'Full customs compliance',
  },
  {
    icon: MapPin,
    value: '#1',
    unit: 'Region',
    label: 'Eastern Ontario',
    description: 'Proudly local, regionally dominant',
  },
  {
    icon: ShieldCheck,
    value: '100%',
    unit: 'Compliant',
    label: 'Licensed & Insured',
    description: 'CVOR & DOT certified operations',
  },
]

export default function AuthorityBar() {
  return (
    <section className="bg-bmd-charcoal border-y border-white/5" aria-label="Authority highlights">
      <div className="container-xl py-12 lg:py-14">
        {/* Section intro */}
        <div className="text-center mb-10">
          <p className="section-label justify-center">
            <span className="w-8 h-px bg-bmd-red" />
            Why BMD
            <span className="w-8 h-px bg-bmd-red" />
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Approaching 40 Years of Unbroken Reliability
          </h2>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/5 rounded-sm overflow-hidden">
          {pillars.map(({ icon: Icon, value, unit, label, description }) => (
            <div
              key={label}
              className="group bg-bmd-charcoal hover:bg-bmd-steel transition-colors duration-300 p-6 lg:p-8 flex flex-col items-center text-center"
            >
              <div className="w-10 h-10 rounded-full bg-bmd-red/10 flex items-center justify-center mb-4 group-hover:bg-bmd-red/20 transition-colors duration-300">
                <Icon className="w-5 h-5 text-bmd-red" />
              </div>
              <div className="flex items-baseline gap-1 mb-0.5">
                <span className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                  {value}
                </span>
                <span className="text-xs font-bold text-bmd-red uppercase tracking-wider">
                  {unit}
                </span>
              </div>
              <p className="text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                {label}
              </p>
              <p className="text-xs text-neutral-600 leading-snug hidden sm:block">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
