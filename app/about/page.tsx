import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import {
  ArrowRight, ShieldCheck, Award, Truck,
  Globe2, Users, Clock, Phone,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About BMD Transportation | Eastern Ontario Since 1987',
  description:
    'Nearly 40 years of specialized freight expertise in Eastern Ontario. Learn about BMD Transportation\'s history, fleet, and commitment to safe, reliable freight movement.',
}

const stats = [
  { value: '~40', label: 'Years in Operation', sub: 'Founded 1987' },
  { value: 'OD',  label: 'Over-Dimensional',   sub: 'Fully Permitted' },
  { value: 'CA + US', label: 'Service Territory', sub: 'Cross-Border Capable' },
  { value: '100%', label: 'CVOR Compliant',    sub: 'Licensed and Insured' },
]

const milestones = [
  { year: '1987', event: 'BMD Transportation founded in Eastern Ontario' },
  { year: '1990s', event: 'Expanded fleet to include specialized open deck and step deck trailers' },
  { year: '2000s', event: 'Obtained full over-dimensional permitting and pilot car certification' },
  { year: '2010s', event: 'Launched cross-border Canada-U.S. freight services' },
  { year: 'Today', event: 'Eastern Ontario\'s trusted carrier for complex, high-value industrial freight' },
]

const fleet = [
  {
    type: 'Flatbed Trailers',
    specs: '48 ft and 53 ft, up to 48,000 lbs',
    use: 'Steel, lumber, machinery, construction materials',
  },
  {
    type: 'Step Deck Trailers',
    specs: '48 ft and 53 ft, up to 46,000 lbs',
    use: 'Equipment, vehicles, and freight exceeding standard height',
  },
  {
    type: 'RGN / Lowboy',
    specs: '35 ft well, heavy haul configurations',
    use: 'Construction equipment, industrial machinery, transformers',
  },
  {
    type: 'Over-Dimensional Rigs',
    specs: 'Width to 20 ft, height to 18 ft, length to 120 ft',
    use: 'Modular structures, wide-load industrial components',
  },
]

const compliance = [
  { icon: ShieldCheck, title: 'CVOR Certified',         desc: 'Ontario Commercial Vehicle Operator\'s Registration in good standing' },
  { icon: Globe2,       title: 'DOT Registered',         desc: 'U.S. Department of Transportation registration for cross-border operations' },
  { icon: Award,        title: 'Fully Insured',          desc: 'Comprehensive cargo, liability, and fleet coverage well above minimums' },
  { icon: Users,        title: 'Experienced Drivers',    desc: 'Vetted, trained operators with clean abstracts and dimensional load experience' },
  { icon: Clock,        title: 'Permitting In-House',    desc: 'We handle MTO, Ministry, and DOT permitting directly, not through brokers' },
  { icon: Truck,        title: 'Pilot Car Coordination', desc: 'Full escort coordination for oversize moves across Ontario and into the U.S.' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section
          className="relative bg-white pt-[72px] overflow-hidden"
          aria-label="About hero"
        >
          <div className="absolute left-0 top-0 w-1.5 h-full bg-bmd-red-500 hidden lg:block" />

          <div className="container-xl py-16 lg:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2.5 mb-6">
                <span className="w-8 h-px bg-bmd-red-500" />
                <span className="text-label text-bmd-red-500 tracking-widest uppercase font-bold">
                  Eastern Ontario Since 1987
                </span>
              </div>

              <h1 className="text-display-xl lg:text-display-2xl font-extrabold text-bmd-ink-950
                             tracking-tightest leading-tight mb-6">
                About BMD Transportation
              </h1>

              <p className="text-body-lg text-bmd-ink-500 leading-relaxed mb-8 max-w-2xl">
                Nearly four decades ago, BMD Transportation was built on a simple idea: some freight
                requires specialists, not generalists. Today, that same commitment drives every load
                we move across Eastern Ontario and beyond.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary px-8 py-4">
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services/over-dimensional" className="btn-outline px-8 py-4">
                  View Services
                </Link>
              </div>
            </div>
          </div>

          <div className="h-px bg-bmd-ink-100" />
        </section>

        {/* ── Stats bar ─────────────────────────────────────────────────────── */}
        <section className="bg-bmd-ivory-50 border-b border-bmd-ink-100" aria-label="Key stats">
          <div className="container-xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-bmd-ink-100">
              {stats.map(({ value, label, sub }) => (
                <div key={label} className="px-8 py-10 text-center">
                  <p className="text-3xl lg:text-4xl font-extrabold text-bmd-ink-950 tracking-tight mb-1">
                    {value}
                  </p>
                  <p className="text-sm font-bold text-bmd-ink-700 uppercase tracking-wider mb-0.5">
                    {label}
                  </p>
                  <p className="text-xs text-bmd-ink-400">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Company story ─────────────────────────────────────────────────── */}
        <section
          className="bg-white py-20 lg:py-28"
          aria-label="Company history"
        >
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              <div>
                <div className="inline-flex items-center gap-2.5 mb-4">
                  <span className="w-8 h-px bg-bmd-red-500" />
                  <span className="text-label text-bmd-red-500 tracking-widest uppercase font-bold">
                    Our Story
                  </span>
                </div>
                <h2 className="h2-section mb-5">
                  Nearly Four Decades Moving What Others Won&rsquo;t
                </h2>
                <div className="rule-red" />

                <div className="space-y-5 text-bmd-ink-500 leading-relaxed">
                  <p>
                    BMD Transportation was established in Eastern Ontario in 1987. From day one,
                    the focus was clear: take on the freight that demands real expertise. Over-dimensional
                    loads, industrial cargo, and specialized hauls that other carriers decline.
                  </p>
                  <p>
                    Through nearly four decades of operation, we have built deep knowledge of Ontario
                    road networks, permit requirements, and the specific demands of industrial clients
                    across manufacturing, steel, HVAC, and construction sectors.
                  </p>
                  <p>
                    We are not a high-volume, commoditized freight carrier. We are a specialized
                    partner for clients who need it done right the first time, with no surprises,
                    no excuses, and no damage claims.
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h3 className="text-display-sm font-bold text-bmd-ink-950 mb-8">Key Milestones</h3>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-px bg-bmd-ink-100" />
                  <div className="space-y-8">
                    {milestones.map(({ year, event }) => (
                      <div key={year} className="relative flex gap-6 pl-12">
                        <div className="absolute left-0 w-8 h-8 rounded-sm bg-bmd-red-500/8
                                        border border-bmd-red-500/20 flex items-center justify-center
                                        flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-bmd-red-500" />
                        </div>
                        <div>
                          <p className="text-label font-bold text-bmd-red-500 uppercase
                                        tracking-widest mb-1">
                            {year}
                          </p>
                          <p className="text-bmd-ink-700 font-medium">{event}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Fleet and equipment ───────────────────────────────────────────── */}
        <section
          className="bg-bmd-ivory-100 py-20 lg:py-28"
          aria-label="Fleet and equipment"
        >
          <div className="container-xl">
            <div className="max-w-2xl mb-14">
              <div className="inline-flex items-center gap-2.5 mb-4">
                <span className="w-8 h-px bg-bmd-red-500" />
                <span className="text-label text-bmd-red-500 tracking-widest uppercase font-bold">
                  Our Equipment
                </span>
              </div>
              <h2 className="h2-section mb-4">Fleet and Trailer Capabilities</h2>
              <div className="rule-red" />
              <p className="text-bmd-ink-500 leading-relaxed">
                Our fleet is built for one purpose: moving the loads that require the right equipment,
                not just the next available truck.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {fleet.map(({ type, specs, use }) => (
                <div
                  key={type}
                  className="bg-white rounded-sm border border-bmd-ink-100 p-7
                             hover:border-bmd-red-500/30 hover:shadow-card-hover
                             hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-bmd-red-500/8 rounded-sm flex items-center
                                  justify-center mb-5">
                    <Truck className="w-5 h-5 text-bmd-red-500" />
                  </div>
                  <h3 className="text-base font-bold text-bmd-ink-950 mb-2">{type}</h3>
                  <p className="text-xs font-semibold text-bmd-red-500 uppercase tracking-wider mb-3">
                    {specs}
                  </p>
                  <p className="text-sm text-bmd-ink-500 leading-relaxed">{use}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Safety and compliance ─────────────────────────────────────────── */}
        <section
          className="bg-white py-20 lg:py-28"
          aria-label="Safety and compliance"
        >
          <div className="container-xl">
            <div className="max-w-2xl mb-14">
              <div className="inline-flex items-center gap-2.5 mb-4">
                <span className="w-8 h-px bg-bmd-red-500" />
                <span className="text-label text-bmd-red-500 tracking-widest uppercase font-bold">
                  Compliance
                </span>
              </div>
              <h2 className="h2-section mb-4">Safety Is Not a Checkbox</h2>
              <div className="rule-red" />
              <p className="text-bmd-ink-500 leading-relaxed">
                Every load BMD moves is compliant, insured, and executed by drivers who know
                what they are doing. Our record reflects it.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {compliance.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-5 p-7 rounded-sm border border-bmd-ink-100 bg-white
                             hover:border-bmd-red-500/30 transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-bmd-red-500/8 rounded-sm flex items-center
                                  justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-bmd-red-500" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-bmd-ink-950 mb-2">{title}</h3>
                    <p className="text-sm text-bmd-ink-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA strip ─────────────────────────────────────────────────────── */}
        <section
          className="bg-bmd-ink-950 py-16 lg:py-20 relative overflow-hidden"
          aria-label="Contact CTA"
        >
          <div className="absolute left-0 top-0 w-1.5 h-full bg-bmd-red-500" />
          <div className="container-xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <p className="text-label uppercase tracking-widest text-bmd-red-400 font-bold mb-2">
                  Work With Us
                </p>
                <h2 className="text-display-sm text-white font-extrabold tracking-tight">
                  Ready to discuss your freight needs?
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
                <a
                  href="tel:+16135551234"
                  className="inline-flex items-center gap-3 bg-white/8 hover:bg-white/15
                             border border-white/15 text-white font-bold
                             px-7 py-3.5 rounded-sm transition-all duration-200 whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 text-bmd-red-400" />
                  (613) 555-1234
                </a>
                <Link href="/contact" className="btn-primary whitespace-nowrap">
                  Request a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

