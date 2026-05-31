import type { ServiceData } from '@/data/services'

interface Props {
  service: ServiceData
}

export default function CapabilitiesGrid({ service }: Props) {
  const { capabilities, name } = service

  return (
    <section
      className="bg-bmd-ivory-50 section-pad"
      id="capabilities"
      aria-label={`${name} capabilities and equipment`}
    >
      <div className="container-xl">

        {/* ── Section header ─────────────────────────────────────────────── */}
        <div className="max-w-2xl mb-14">
          <p className="eyebrow eyebrow-line">{name}</p>
          <h2 className="h2-section mb-4">{capabilities.headline}</h2>
          <div className="rule-red" />
          <p className="text-body-lg text-bmd-ink-500 leading-relaxed">
            {capabilities.subheadline}
          </p>
        </div>

        {/* ── Capabilities grid ──────────────────────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {capabilities.items.map(
            ({ icon: Icon, title, spec, description, featured }) => (
              <div
                key={title}
                className={`group relative flex flex-col rounded-sm border
                            transition-all duration-300 hover:-translate-y-1
                            ${featured
                              ? 'bg-bmd-ink-950 border-bmd-red-500/40 shadow-card-dark lg:col-span-1 ring-1 ring-bmd-red-500/20'
                              : 'bg-white border-bmd-ink-100 hover:border-bmd-red-500/30 shadow-card hover:shadow-card-hover'
                            }`}
              >
                {/* Featured indicator */}
                {featured && (
                  <div className="absolute top-0 left-6 -translate-y-1/2">
                    <span className="text-label-sm bg-bmd-red-500 text-white
                                     px-3 py-1 rounded-sm uppercase tracking-widest font-bold
                                     shadow-red-glow-sm">
                      Primary Capability
                    </span>
                  </div>
                )}

                <div className="p-7 flex flex-col flex-1">
                  {/* Icon */}
                  <div
                    className={`w-11 h-11 rounded-sm flex items-center justify-center mb-5
                                ${featured
                                  ? 'bg-bmd-red-500/15 group-hover:bg-bmd-red-500/25'
                                  : 'bg-bmd-ivory-200 group-hover:bg-bmd-red-500/8'
                                } transition-colors duration-300`}
                  >
                    <Icon
                      className={`w-5 h-5 ${featured ? 'text-bmd-red-400' : 'text-bmd-ink-400 group-hover:text-bmd-red-500'} transition-colors duration-300`}
                    />
                  </div>

                  {/* Spec badge */}
                  <div className="mb-3">
                    <span
                      className={`inline-block text-label uppercase tracking-widest font-bold
                                  px-2.5 py-1 rounded-sm
                                  ${featured
                                    ? 'bg-bmd-red-500/15 text-bmd-red-400'
                                    : 'bg-bmd-ivory-200 text-bmd-red-500'
                                  }`}
                    >
                      {spec}
                    </span>
                  </div>

                  {/* H3 */}
                  <h3
                    className={`text-body-md font-bold mb-3 leading-snug
                                ${featured ? 'text-white' : 'text-bmd-ink-950'}`}
                  >
                    {title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-body-sm leading-relaxed flex-1
                                ${featured ? 'text-neutral-500' : 'text-bmd-ink-500'}`}
                  >
                    {description}
                  </p>
                </div>
              </div>
            )
          )}
        </div>

        {/* ── Maximum Load Spec callout ───────────────────────────────────── */}
        <div className="bg-bmd-ink-950 rounded-sm border border-white/6
                        overflow-hidden shadow-card-dark">
          {/* Header bar */}
          <div className="flex items-center gap-4 px-7 py-4 border-b border-white/6">
            <div className="w-1 h-8 bg-bmd-red-500 rounded-full flex-shrink-0" />
            <div>
              <p className="text-label text-bmd-red-400 uppercase tracking-widest font-bold">
                {capabilities.loadSpecs.label}
              </p>
              <p className="text-label-sm text-neutral-600 uppercase tracking-widest mt-0.5">
                Contact dispatch to confirm specs for your specific load
              </p>
            </div>
          </div>

          {/* Spec cells */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/5">
            {capabilities.loadSpecs.specs.map(({ label, value, sub }) => (
              <div
                key={label}
                className="group px-7 py-6 hover:bg-white/3 transition-colors duration-200"
              >
                <p className="text-display-md font-extrabold text-white
                              tracking-tighter leading-none mb-1.5">
                  {value}
                </p>
                <p className="text-label text-bmd-red-500 uppercase tracking-widest
                              font-bold mb-1">
                  {label}
                </p>
                {sub && (
                  <p className="text-label-sm text-neutral-600 uppercase tracking-widest">
                    {sub}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
