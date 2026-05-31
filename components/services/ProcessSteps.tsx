import type { ServiceData } from '@/data/services'

interface Props {
  service: ServiceData
}

export default function ProcessSteps({ service }: Props) {
  const { process } = service
  const totalSteps = process.steps.length

  return (
    <section
      className="bg-bmd-ink-900 section-pad relative overflow-hidden"
      aria-label="Our process"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />
      {/* Subtle red glow — bottom left */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px]
                      bg-bmd-red-500/8 rounded-full blur-[100px] pointer-events-none
                      -translate-x-1/3 translate-y-1/2" />

      <div className="container-xl relative">

        {/* ── Section header ─────────────────────────────────────────────── */}
        <div className="max-w-xl mb-16 lg:mb-20">
          <p className="eyebrow eyebrow-line">{`${totalSteps}-Step Process`}</p>
          <h2 className="h2-section-light mb-4">{process.headline}</h2>
          <div className="rule-red" />
          <p className="text-body-lg text-neutral-500 leading-relaxed">
            {process.subheadline}
          </p>
        </div>

        {/* ── Steps — desktop: horizontal timeline ───────────────────────── */}
        <div className="hidden lg:block">
          {/* Connector line */}
          <div className="relative flex items-start gap-0 mb-0">
            {/* Background track */}
            <div className="absolute top-[28px] left-[56px] right-[56px] h-px
                            bg-white/8 pointer-events-none" />
            {/* Filled portion — red */}
            <div className="absolute top-[28px] left-[56px] w-[calc(100%-112px)] h-px
                            bg-gradient-to-r from-bmd-red-500 to-bmd-red-500/20
                            pointer-events-none" />

            {process.steps.map(({ number, title, description }, index) => (
              <div
                key={number}
                className="flex-1 flex flex-col items-center text-center px-4 lg:px-6"
              >
                {/* Step circle */}
                <div
                  className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center
                              text-display-sm font-extrabold tracking-tighter mb-6
                              ring-4 ring-bmd-ink-900
                              ${index === 0
                                ? 'bg-bmd-red-500 text-white'
                                : 'bg-bmd-ink-800 border border-white/10 text-neutral-600'
                              }`}
                >
                  {number}
                </div>

                {/* Title */}
                <h3 className="text-body-md font-bold text-white mb-3 leading-snug">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-body-sm text-neutral-600 leading-relaxed max-w-[22ch]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Steps — mobile: vertical stack ─────────────────────────────── */}
        <div className="lg:hidden space-y-0">
          {process.steps.map(({ number, title, description }, index) => (
            <div key={number} className="flex gap-6">
              {/* Left: number + connector */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center
                              font-extrabold text-lg flex-shrink-0
                              ${index === 0
                                ? 'bg-bmd-red-500 text-white'
                                : 'bg-bmd-ink-800 border border-white/10 text-neutral-600'
                              }`}
                >
                  {number}
                </div>
                {index < totalSteps - 1 && (
                  <div className="w-px flex-1 bg-white/8 my-2 min-h-[40px]" />
                )}
              </div>

              {/* Right: content */}
              <div className={`pb-${index < totalSteps - 1 ? '10' : '0'}`}>
                <h3 className="text-body-md font-bold text-white mb-2 leading-snug mt-2.5">
                  {title}
                </h3>
                <p className="text-body-sm text-neutral-600 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom strip — authority note ──────────────────────────────── */}
        <div className="mt-16 pt-8 border-t border-white/6
                        flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-body-sm text-neutral-600 text-center sm:text-left max-w-lg">
            This process has been refined over nearly four decades of specialized freight operations.
            Every step exists because we learned, the hard way, what it takes to move complex loads reliably.
          </p>
          <div className="badge-red flex-shrink-0">
            Est. 1987 — Refined Ever Since
          </div>
        </div>
      </div>
    </section>
  )
}
