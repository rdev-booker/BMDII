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
    description: 'Wide, high and long load specialists',
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
    label: 'Licensed and Insured',
    description: 'CVOR and DOT certified operations',
  },
]

export default function AuthorityBar() {
  return (
    <section
      className="bg-bmd-ivory-50 border-y border-bmd-ink-100"
      aria-label="Authority highlights"
    >
      <div className="container-xl py-12 lg:py-14">

        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-bmd-red-500" />
            <span className="text-label uppercase tracking-widest text-bmd-red-500 font-bold">
              Why BMD
            </span>
            <span className="w-8 h-px bg-bmd-red-500" />
          </div>
          <h2 className="text-display-sm font-bold text-bmd-ink-950">
            Nearly 40 Years of Unbroken Reliability
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-bmd-ink-100 rounded-sm overflow-hidden">
          {pillars.map(({ icon: Icon, value, unit, label, description }) => (
            <div
              key={label}
              className="group bg-white hover:bg-bmd-ivory-50 transition-colors duration-300
                         p-6 lg:p-8 flex flex-col items-center text-center"
            >
              <div className="w-10 h-10 rounded-sm bg-bmd-red-500/8 flex items-center justify-center
                              mb-4 group-hover:bg-bmd-red-500/15 transition-colors duration-300">
                <Icon className="w-5 h-5 text-bmd-red-500" />
              </div>
              <div className="flex items-baseline gap-1 mb-0.5">
                <span className="text-2xl lg:text-3xl font-extrabold text-bmd-ink-950 tracking-tight">
                  {value}
                </span>
                <span className="text-xs font-bold text-bmd-red-500 uppercase tracking-wider">
                  {unit}
                </span>
              </div>
              <p className="text-xs font-bold text-bmd-ink-700 uppercase tracking-wider mb-1.5">
                {label}
              </p>
              <p className="text-xs text-bmd-ink-400 leading-snug hidden sm:block">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
