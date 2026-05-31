import type { ServiceData } from '@/data/services'

interface Props {
  service: ServiceData
}

export default function IndustrialProof({ service }: Props) {
  const { industrialProof, name } = service

  return (
    <section
      className="bg-white section-pad"
      id="applications"
      aria-label={`${name} industry applications`}
    >
      <div className="container-xl">

        {/* ── Section header ─────────────────────────────────────────────── */}
        <div className="max-w-2xl mb-14">
          <p className="eyebrow eyebrow-line">Who We Serve</p>
          <h2 className="h2-section mb-4">{industrialProof.headline}</h2>
          <div className="rule-red" />
          <p className="text-body-lg text-bmd-ink-500 leading-relaxed">
            {industrialProof.subheadline}
          </p>
        </div>

        {/* ── Application cards ──────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {industrialProof.applications.map(
            ({ icon: Icon, industry, headline, description, examples }, index) => (
              <article
                key={industry}
                className={`group relative rounded-sm border overflow-hidden
                            transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover
                            ${index === 0
                              ? 'border-bmd-red-500/30 shadow-card-md'
                              : 'border-bmd-ink-100 shadow-card'
                            }`}
              >
                {/* Visual header — image placeholder */}
                <div className="relative h-44 bg-bmd-slate-800 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br
                                  from-bmd-slate-700 via-bmd-slate-800 to-bmd-ink-950" />

                  {/* Placeholder visual */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="w-12 h-12 text-bmd-red-500/30" />
                  </div>

                  {/* Industry badge */}
                  <div className="absolute top-4 left-4">
                    <span className="badge-dark text-label-sm">
                      {industry}
                    </span>
                  </div>

                  {/* Photo placeholder label */}
                  <div className="absolute bottom-4 right-4">
                    <span className="text-label-sm font-mono text-neutral-700">
                      Industry photo — swap via public/images/
                    </span>
                  </div>

                  {/* Red bottom reveal */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-bmd-red-500
                                  scale-x-0 group-hover:scale-x-100
                                  transition-transform duration-300 origin-left" />
                </div>

                {/* Content */}
                <div className="p-7 bg-white">
                  {/* Icon + title */}
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-9 h-9 bg-bmd-ivory-200 rounded-sm
                                    flex items-center justify-center flex-shrink-0
                                    group-hover:bg-bmd-red-500/10 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-bmd-red-500" />
                    </div>
                    <h3 className="text-body-sm font-extrabold text-bmd-ink-950 leading-tight">
                      {industry}
                    </h3>
                  </div>

                  {/* Application headline */}
                  <p className="text-body-xs font-bold text-bmd-red-500 uppercase
                                tracking-wide mb-4 pl-12">
                    {headline}
                  </p>

                  {/* Description */}
                  <p className="text-body-sm text-bmd-ink-500 leading-relaxed mb-5">
                    {description}
                  </p>

                  {/* Example bullets */}
                  <ul className="space-y-2">
                    {examples.map(ex => (
                      <li key={ex} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-bmd-red-500
                                         flex-shrink-0 mt-1.5" />
                        <span className="text-body-xs text-bmd-ink-500 leading-relaxed">
                          {ex}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          )}
        </div>

        {/* ── Proof stats strip ──────────────────────────────────────────── */}
        <div className="bg-bmd-ink-950 rounded-sm border border-white/6 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/5">
            {industrialProof.proofStats.map(({ value, label, note }) => (
              <div
                key={label}
                className="group px-8 py-7 text-center hover:bg-white/3 transition-colors duration-200"
              >
                <p className="text-display-lg font-extrabold text-white
                              tracking-tighter leading-none mb-1.5">
                  {value}
                </p>
                <p className="text-label text-bmd-red-500 uppercase tracking-widest
                              font-bold mb-1">
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
    </section>
  )
}
