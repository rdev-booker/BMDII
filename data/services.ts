import type { LucideIcon } from 'lucide-react'
import {
  FileCheck, Car, Map, Anchor, ShieldAlert, Radio,
  Truck, Layers, Minimize2, Link2, Umbrella, Package,
  Users, Navigation, Locate, Clock3, CalendarDays, Globe2,
  Wind, Factory, Cog,
  BarChart3, Maximize2,
} from 'lucide-react'

// ─── Shared types ──────────────────────────────────────────────────────────────

export interface ServiceStat {
  value: string
  label: string
  note?: string
}

export interface Capability {
  icon: LucideIcon
  title: string         // H3
  spec: string          // Bold callout (e.g. "Up to 18'0"")
  description: string
  featured?: boolean    // Renders wider/highlighted
}

export interface LoadSpec {
  label: string
  value: string
  sub?: string
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export interface IndustryApplication {
  icon: LucideIcon
  industry: string      // H3
  headline: string
  description: string
  examples: string[]
}

export interface ServiceData {
  slug: string
  name: string           // Short name for cards, breadcrumbs
  category: string       // Eyebrow / pre-heading
  seo: {
    title: string
    description: string
    keywords: string[]
  }
  hero: {
    eyebrow: string
    headline: string     // H1 — SEO-optimised, includes location
    subheadline: string
    stats: ServiceStat[]
    imagePlaceholder: string
    complianceBadges: string[]
  }
  capabilities: {
    headline: string     // H2
    subheadline: string
    items: Capability[]
    loadSpecs: {
      label: string
      specs: LoadSpec[]
        }
  }
  process: {
    headline: string     // H2
    subheadline: string
    steps: ProcessStep[]
  }
  industrialProof: {
    headline: string     // H2
    subheadline: string
    applications: IndustryApplication[]
    proofStats: ServiceStat[]
  }
  cta: {
    headline: string     // H2
    subheadline: string
    checkpoints: string[]
  }
  relatedSlugs: string[]
}

// ─── Service definitions ───────────────────────────────────────────────────────

const overDimensional: ServiceData = {
  slug: 'over-dimensional',
  name: 'Over-Dimensional Freight',
  category: 'Specialized Freight',
  seo: {
    title: 'Over-Dimensional & Wide Load Freight | Eastern Ontario | BMD Transportation',
    description:
      'Approaching 40 years moving over-dimensional freight in Eastern Ontario. Wide loads, high loads, long loads — fully permitted, escorted, and delivered. Cross-border capable.',
    keywords: [
      'over-dimensional freight Ontario',
      'wide load transport Eastern Ontario',
      'heavy haul trucking Ontario',
      'oversized freight carrier Ontario',
      'wide load permits Ontario',
      'superload transport Eastern Ontario',
      'over-dimensional cross-border',
    ],
  },
  hero: {
    eyebrow: 'Specialized Freight · Eastern Ontario',
    headline: 'Over-Dimensional & Wide Load Freight in Eastern Ontario',
    subheadline:
      'Approaching 40 years moving the loads others turn away. Wide, high, and long freight — fully permitted, expertly escorted, and delivered on schedule across Ontario and the U.S. border.',
    stats: [
      { value: 'Up to 18\'', label: 'Max Width', note: 'Wider with surveys' },
      { value: '250,000+', label: 'Lbs Superload', note: 'Certified capability' },
      { value: '~40 Yrs', label: 'OD Experience', note: 'Est. 1987' },
    ],
    imagePlaceholder: 'Wide load flatbed with escort vehicle on Ontario highway',
    complianceBadges: ['MTO Licensed', 'DOT Registered', 'CVOR Certified', 'Fully Insured'],
  },
  capabilities: {
    headline: 'Over-Dimensional Capabilities & Equipment',
    subheadline:
      'Every wide load move demands specific expertise. Here is what BMD brings to every over-dimensional shipment.',
    items: [
      {
        icon: FileCheck,
        title: 'MTO & DOT Permit Coordination',
        spec: 'All provinces & U.S. states',
        description:
          'We handle every permit application — Ontario MTO, U.S. state-by-state routing, and federal superload designations. No permit task is left to the shipper.',
        featured: true,
      },
      {
        icon: Car,
        title: 'Pilot Car Escort Service',
        spec: 'Single & multi-escort',
        description:
          'Licensed and experienced escort vehicle operators coordinated by our dispatch team. Proper flagging, communication, and highway control for every move.',
      },
      {
        icon: Map,
        title: 'Pre-Move Route Survey',
        spec: 'Bridge & clearance analysis',
        description:
          'Comprehensive route surveys identifying bridge weight limits, overhead obstructions, turning radius restrictions, and optimal timing windows.',
      },
      {
        icon: Anchor,
        title: 'Custom Load Engineering',
        spec: 'DOT-compliant securement',
        description:
          'Custom blocking, cribbing, and tie-down plans engineered specifically for your load profile. Every securement point documented and verified.',
      },
      {
        icon: ShieldAlert,
        title: 'Superload Capability',
        spec: 'Up to 250,000+ lbs',
        description:
          'Loads exceeding standard oversize thresholds handled with specialized heavy-haul equipment, enhanced permit processes, and structural analysis.',
      },
      {
        icon: Radio,
        title: '24/7 Dispatch Communication',
        spec: 'Direct line — no call centres',
        description:
          'Real-time load tracking and direct contact with your driver throughout every move. Our dispatch team is reachable around the clock.',
      },
    ],
    loadSpecs: {
      label: 'Maximum Load Specifications',
      specs: [
        { label: 'Max Width',  value: "18'0\"",    sub: 'Wider with enhanced surveys' },
        { label: 'Max Height', value: "16'6\"",    sub: 'Standard corridor routes'   },
        { label: 'Max Length', value: '120 ft+',   sub: 'Configuration-dependent'   },
        { label: 'Max Weight', value: '250,000 lbs', sub: 'Superload classification' },
      ],
    },
  },
  process: {
    headline: 'How We Handle Every Over-Dimensional Move',
    subheadline:
      'A proven process refined over nearly four decades. No surprises — only precision.',
    steps: [
      {
        number: '01',
        title: 'Consult & Quote',
        description:
          'Submit your load dimensions, origin, destination, and timeline. We assess feasibility and deliver a firm quote within 24 hours.',
      },
      {
        number: '02',
        title: 'Permits & Route Plan',
        description:
          'Our team handles all permit applications, route surveys, and pilot car coordination. You receive a complete move plan before we touch your freight.',
      },
      {
        number: '03',
        title: 'Equipment & Crew',
        description:
          'The correct trailer, tie-down configuration, and experienced driver are matched to your specific load profile. Nothing is improvised.',
      },
      {
        number: '04',
        title: 'Execution & Delivery',
        description:
          'Real-time updates throughout the move. Delivery confirmed, documented, and followed up by dispatch. Every time.',
      },
    ],
  },
  industrialProof: {
    headline: 'Who We Move Over-Dimensional Freight For',
    subheadline:
      'Industrial clients across Eastern Ontario trust BMD for the loads that require the most experience.',
    applications: [
      {
        icon: Wind,
        industry: 'HVAC & Mechanical',
        headline: 'Rooftop Units, Chillers & Air Handlers',
        description:
          'Commercial HVAC equipment is frequently over-dimensional. We coordinate delivery timing with crane schedules and job site access windows — because a late rooftop unit costs you far more than freight.',
        examples: [
          'Commercial rooftop unit delivery & crane staging',
          'Chiller transport to high-rise mechanical rooms',
          'Large-format air handler relocation',
          'Cooling tower component transport',
        ],
      },
      {
        icon: Factory,
        industry: 'Steel & Structural',
        headline: 'Trusses, Beams & Fabricated Assemblies',
        description:
          'Structural steel frequently exceeds standard freight dimensions. We handle long-span trusses, wide fabricated frames, and custom assemblies that require specialized routing and escort.',
        examples: [
          'Bridge and building truss transport',
          'Wide fabricated steel frame delivery',
          'Structural steel to construction sites',
          'Custom fabricated assembly relocation',
        ],
      },
      {
        icon: Cog,
        industry: 'Custom Manufacturing & OEM',
        headline: 'Industrial Equipment & One-Off Loads',
        description:
          'Purpose-built machinery, industrial vessels, and production equipment rarely fits standard trailers. We specialize in the unusual load — the ones that require custom engineering and expertise.',
        examples: [
          'Industrial pressure vessel & tank transport',
          'CNC machine and production line relocation',
          'Custom OEM equipment delivery',
          'Mining and processing equipment moves',
        ],
      },
    ],
    proofStats: [
      { value: '~40', label: 'Years OD Experience', note: 'Est. 1987' },
      { value: '100%', label: 'Permit Compliance', note: 'Zero violations' },
      { value: 'ON + US', label: 'Operating Territory', note: 'Cross-border capable' },
      { value: 'Direct', label: 'Dispatch Access', note: 'No call centres' },
    ],
  },
  cta: {
    headline: 'Ready to Move Your Over-Dimensional Load?',
    subheadline:
      'Tell us your dimensions, origin, and destination. Our dispatch team will review your load and respond with a firm quote within one business day.',
    checkpoints: [
      'All MTO & DOT permits handled by our team',
      'Pilot car escort coordinated from dispatch',
      'Pre-move route survey available',
      'Cross-border capability — Canada & U.S.',
      'Approaching 40 years of wide load expertise',
      'Direct dispatch access — no automated systems',
    ],
  },
  relatedSlugs: ['open-deck', 'industrial-ftl'],
}

// ─── Open Deck / Step Deck ────────────────────────────────────────────────────

const openDeck: ServiceData = {
  slug: 'open-deck',
  name: 'Open Deck / Step Deck',
  category: 'Open Deck Freight',
  seo: {
    title: 'Open Deck & Step Deck Freight | Eastern Ontario | BMD Transportation',
    description:
      'Flatbed, step deck, and RGN trailers for Eastern Ontario. Structural steel, HVAC equipment, precast, and open cargo — professionally secured and delivered.',
    keywords: [
      'open deck freight Ontario',
      'flatbed trucking Eastern Ontario',
      'step deck transport Ontario',
      'RGN lowboy trailer Ontario',
      'flatbed carrier Eastern Ontario',
      'open deck cross-border',
      'steel flatbed transport Ontario',
    ],
  },
  hero: {
    eyebrow: 'Open Deck Freight · Eastern Ontario',
    headline: 'Open Deck & Step Deck Freight Solutions in Eastern Ontario',
    subheadline:
      'From structural steel to HVAC equipment — if it doesn\'t fit in a box, it goes on a deck. Flatbed, step deck, and RGN trailers operated by experienced freight handlers with nearly four decades of open cargo expertise.',
    stats: [
      { value: '48–53ft', label: 'Deck Lengths',  note: 'Standard & extended' },
      { value: '48,000', label: 'Lbs Capacity',  note: 'Standard flatbed' },
      { value: 'RGN', label: 'Lowboy Available', note: '18" deck height' },
    ],
    imagePlaceholder: 'Step deck trailer loaded with steel and HVAC equipment',
    complianceBadges: ['DOT Compliant', 'Fully Insured', 'CVOR Certified', 'Est. 1987'],
  },
  capabilities: {
    headline: 'Open Deck Equipment & Capabilities',
    subheadline:
      'Multiple trailer configurations to match any open cargo profile — from standard flatbed to specialized RGN.',
    items: [
      {
        icon: Truck,
        title: 'Standard Flatbed (48ft & 53ft)',
        spec: 'Up to 48,000 lbs payload',
        description:
          'Our primary platform for structural steel, precast concrete, machinery, and standard open cargo. 48-foot and 53-foot configurations available.',
        featured: true,
      },
      {
        icon: Layers,
        title: 'Step Deck Trailers',
        spec: '10" lower than standard flatbed',
        description:
          'Two-level deck provides a lower cargo height for taller equipment, reducing the need for oversize permits and simplifying routing.',
      },
      {
        icon: Minimize2,
        title: 'RGN / Lowboy Trailers',
        spec: 'Deck as low as 18"',
        description:
          'Removable gooseneck trailers for the heaviest and tallest equipment. Drive-on loading available. Ideal for construction equipment, generators, and large machinery.',
      },
      {
        icon: Link2,
        title: 'Professional Load Securement',
        spec: 'DOT-compliant every load',
        description:
          'Chains, straps, binders, edge protection, and custom blocking engineered to your cargo. Every load is secured, audited, and documented before it moves.',
      },
      {
        icon: Umbrella,
        title: 'Tarping & Weather Protection',
        spec: 'Full coverage available',
        description:
          'Professional tarping for equipment, bundled steel, and sensitive cargo requiring protection from road spray, rain, and UV exposure.',
      },
      {
        icon: Package,
        title: 'Coil Racks & Specialty Fixtures',
        spec: 'Steel coil certified',
        description:
          'Coil racks, pipe stakes, and specialty fixtures for steel coils, tube, structural pipe, and other round material that requires specialized support.',
      },
    ],
    loadSpecs: {
      label: 'Platform Specifications',
      specs: [
        { label: 'Flatbed Length',   value: '48–53ft', sub: 'Standard configuration' },
        { label: 'Deck Width',       value: "8'6\"",   sub: 'Legal width'            },
        { label: 'Payload Capacity', value: '48,000 lbs', sub: 'Standard flatbed'   },
        { label: 'RGN Deck Height',  value: '18"',     sub: 'Lowboy configuration'   },
      ],
    },
  },
  process: {
    headline: 'How We Handle Your Open Deck Shipment',
    subheadline:
      'Open deck freight demands specific knowledge. This is our standard process for every load.',
    steps: [
      {
        number: '01',
        title: 'Load Assessment',
        description:
          'You provide dimensions, weight, and commodity. We select the right platform and identify any permit requirements before quoting.',
      },
      {
        number: '02',
        title: 'Securement Plan',
        description:
          'A custom securement method is determined for your cargo — chains, straps, blocking, or specialty fixtures. DOT compliance verified before dispatch.',
      },
      {
        number: '03',
        title: 'Pickup & Loading',
        description:
          'Experienced driver arrives with the correct equipment. Load is placed, secured, and inspected before departure. You get confirmation.',
      },
      {
        number: '04',
        title: 'Delivery & Documentation',
        description:
          'Direct delivery to your site. Signed proof of delivery, securement documentation, and driver notes provided upon request.',
      },
    ],
  },
  industrialProof: {
    headline: 'Open Deck Freight for Eastern Ontario Industry',
    subheadline:
      'The industries that rely on open deck freight are the same ones that can\'t afford delays. We understand that.',
    applications: [
      {
        icon: Factory,
        industry: 'Steel & Metal Fabrication',
        headline: 'Coils, Plate, Beams & Structural Shapes',
        description:
          'Steel fabricators and service centres run on tight production schedules. Our flatbed and coil rack equipment is set up to move steel products safely and on time.',
        examples: [
          'Steel coil delivery to fabrication shops',
          'Structural steel to construction projects',
          'Plate and sheet metal transport',
          'Pipe and tube — stake & rack equipped',
        ],
      },
      {
        icon: Wind,
        industry: 'HVAC & Mechanical',
        headline: 'Rooftop Units, Cooling Towers & Mechanical Systems',
        description:
          'HVAC equipment is heavy, dimensional, and must arrive on schedule. Our open deck solutions bridge the gap between the warehouse and the job site crane.',
        examples: [
          'Rooftop unit delivery to job site',
          'Cooling tower component transport',
          'Mechanical room equipment staging',
          'HVAC distribution centre runs',
        ],
      },
      {
        icon: Cog,
        industry: 'Construction & Precast',
        headline: 'Precast Panels, Structural Components & Modular Units',
        description:
          'Precast concrete and modular construction rely on precise delivery sequencing. Our flatbed fleet supports just-in-time delivery to active construction sites.',
        examples: [
          'Precast panel delivery',
          'Modular building component transport',
          'Construction equipment delivery',
          'Crane mat and forming equipment',
        ],
      },
    ],
    proofStats: [
      { value: '~40', label: 'Years on Deck',   note: 'Est. 1987'        },
      { value: '3+',  label: 'Trailer Types',   note: 'Flat, step, RGN'  },
      { value: '100%', label: 'DOT Compliant',  note: 'Every load'       },
      { value: 'ON + US', label: 'Cross-Border', note: 'Canada & U.S.'  },
    ],
  },
  cta: {
    headline: 'Get a Quote for Your Open Deck Shipment',
    subheadline:
      'Provide your load dimensions and route. We\'ll match the right platform and send a firm quote within 24 hours.',
    checkpoints: [
      'Flatbed, step deck & RGN trailers available',
      'DOT-compliant securement on every load',
      'Tarping and specialty fixtures available',
      'Cross-border — Canada & U.S. routes',
      'Approaching 40 years of open deck experience',
      'Direct dispatch — your load gets personal attention',
    ],
  },
  relatedSlugs: ['over-dimensional', 'industrial-ftl'],
}

// ─── Industrial Full Truck Load ───────────────────────────────────────────────

const industrialFTL: ServiceData = {
  slug: 'industrial-ftl',
  name: 'Industrial Full Truck Load',
  category: 'Industrial Freight',
  seo: {
    title: 'Industrial Full Truck Load Freight | Eastern Ontario | BMD Transportation',
    description:
      'Dedicated FTL service for industrial freight in Eastern Ontario. Steel, HVAC equipment, manufacturing components — direct routes, no transfers, cross-border capable.',
    keywords: [
      'industrial FTL Eastern Ontario',
      'full truck load freight Ontario',
      'dedicated truck Ontario',
      'industrial freight carrier Ontario',
      'FTL cross-border Canada US',
      'heavy industrial freight Ontario',
      'JIT freight Eastern Ontario',
    ],
  },
  hero: {
    eyebrow: 'Industrial Freight · Eastern Ontario',
    headline: 'Industrial Full Truck Load Freight in Eastern Ontario',
    subheadline:
      'Dedicated trucks, direct routes, zero transfers. Industrial freight for HVAC contractors, steel distributors, and custom manufacturers who need their cargo to arrive exactly when and where it\'s needed.',
    stats: [
      { value: '45,000', label: 'Lbs Payload',    note: 'Standard capacity'   },
      { value: 'Direct', label: 'Point-to-Point', note: 'No hub transfers'    },
      { value: 'JIT',    label: 'Scheduling',     note: 'Production-aligned'  },
    ],
    imagePlaceholder: 'Dedicated dry van truck at industrial loading dock',
    complianceBadges: ['CVOR Certified', 'DOT Registered', 'Fully Insured', 'Est. 1987'],
  },
  capabilities: {
    headline: 'Industrial FTL Capabilities & Equipment',
    subheadline:
      'Dedicated trucks, experienced drivers, and direct routes — built for the demands of Eastern Ontario\'s industrial sector.',
    items: [
      {
        icon: Truck,
        title: 'Dedicated Truck & Driver',
        spec: '100% dedicated — no sharing',
        description:
          'Your freight occupies the entire trailer. No co-loading, no stops for other clients, no risk of damage or delay from other cargo.',
        featured: true,
      },
      {
        icon: Navigation,
        title: 'Direct Point-to-Point Routes',
        spec: 'Zero transfers',
        description:
          'Your cargo moves from pickup to delivery without touching a terminal or cross-dock. The most direct route, the lowest risk, the fastest transit time.',
      },
      {
        icon: Locate,
        title: 'Real-Time GPS Tracking',
        spec: 'Live load visibility',
        description:
          'Know where your freight is at every moment. Our dispatch team provides proactive status updates and can answer load-specific questions in real time.',
      },
      {
        icon: BarChart3,
        title: 'High-Capacity Payload',
        spec: 'Up to 45,000 lbs',
        description:
          'Standard 53-foot trailers with full payload capacity for steel, equipment, and industrial bulk freight. Heavier specialized configurations available.',
      },
      {
        icon: Clock3,
        title: 'Just-In-Time Delivery',
        spec: 'Production-schedule aligned',
        description:
          'Delivery windows aligned to your production schedule or job site timeline. Lean manufacturing operations and JIT inventory systems supported.',
      },
      {
        icon: Globe2,
        title: 'Cross-Border Capable',
        spec: 'Canada & U.S.',
        description:
          'Full cross-border FTL service with PAPS/PARS filing, customs documentation, and border-experienced drivers. Seamless Canada–U.S. industrial freight.',
      },
    ],
    loadSpecs: {
      label: 'Full Truck Load Specifications',
      specs: [
        { label: 'Max Payload',     value: '45,000 lbs', sub: 'Standard capacity'    },
        { label: 'Trailer Length',  value: '53 ft',      sub: 'Standard configuration'},
        { label: 'Transit',         value: 'Direct',     sub: 'No hub stops'          },
        { label: 'Cross-Border',    value: 'CA & U.S.',  sub: 'PAPS/PARS compliant'   },
      ],
    },
  },
  process: {
    headline: 'How Your Industrial FTL Shipment Works',
    subheadline:
      'Simple, transparent, and built around your production timeline.',
    steps: [
      {
        number: '01',
        title: 'Quote & Schedule',
        description:
          'Provide your commodity, weight, origin, destination, and delivery window. We confirm availability and provide a firm rate within hours.',
      },
      {
        number: '02',
        title: 'Dispatch & Pickup',
        description:
          'A dedicated driver and trailer are assigned to your load. Pickup is confirmed with your facility. Freight is loaded and secured per your specs.',
      },
      {
        number: '03',
        title: 'Direct Transit',
        description:
          'Your load moves directly. No terminals. No transfers. Our dispatch team tracks the load in real time and proactively updates you.',
      },
      {
        number: '04',
        title: 'Confirmed Delivery',
        description:
          'Delivery is made to your specified location and contact. Signed proof of delivery, time-stamped, and shared with your team.',
      },
    ],
  },
  industrialProof: {
    headline: 'Industrial FTL for Eastern Ontario\'s Demanding Sectors',
    subheadline:
      'We serve the industries where a missed delivery window means production downtime.',
    applications: [
      {
        icon: Wind,
        industry: 'HVAC Contractors & Distributors',
        headline: 'Equipment Deliveries Built Around Your Job Site',
        description:
          'HVAC contractors and equipment distributors need freight to arrive when the crane is booked and the crew is on site. BMD\'s FTL service aligns delivery to your exact window.',
        examples: [
          'Equipment delivery aligned to crane schedules',
          'Distributor-to-contractor direct runs',
          'Time-sensitive job site deliveries',
          'Warranty equipment and replacement units',
        ],
      },
      {
        icon: Factory,
        industry: 'Steel Distributors & Service Centres',
        headline: 'From Service Centre to Fabrication Shop — Direct',
        description:
          'Steel service centres and distributors run on high-volume, time-sensitive routes. Our FTL network handles the service centre-to-fabricator lane with consistency and reliability.',
        examples: [
          'Steel coil and plate distributor runs',
          'Service centre to fabrication shop delivery',
          'Cross-border steel import freight',
          'Just-in-time production material delivery',
        ],
      },
      {
        icon: Cog,
        industry: 'Custom Manufacturers',
        headline: 'Production Materials & Finished Goods — On Schedule',
        description:
          'Custom manufacturers depend on precise inbound material delivery to keep production running. We align FTL pickups and deliveries to your production calendar.',
        examples: [
          'Inbound raw material delivery',
          'Finished goods outbound to customers',
          'Production line component delivery',
          'Inter-facility production transfers',
        ],
      },
    ],
    proofStats: [
      { value: '~40',   label: 'Years in Service', note: 'Est. 1987'          },
      { value: '100%',  label: 'Dedicated Loads',  note: 'No co-loading ever' },
      { value: 'JIT',   label: 'Delivery Capable', note: 'Precision scheduling'},
      { value: 'ON+US', label: 'Cross-Border',     note: 'Canada & U.S. routes'},
    ],
  },
  cta: {
    headline: 'Request a Dedicated FTL Quote',
    subheadline:
      'Tell us your load, your timeline, and your delivery requirements. Direct response from our dispatch team within one business day.',
    checkpoints: [
      'Dedicated truck — your load, your trailer',
      'Direct route with zero terminal transfers',
      'Real-time GPS tracking throughout transit',
      'JIT delivery windows supported',
      'Cross-border Canada–U.S. capability',
      'Approaching 40 years of industrial freight experience',
    ],
  },
  relatedSlugs: ['over-dimensional', 'open-deck'],
}

// ─── Registry ─────────────────────────────────────────────────────────────────

export const ALL_SERVICES: ServiceData[] = [overDimensional, openDeck, industrialFTL]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return ALL_SERVICES.find(s => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return ALL_SERVICES.map(s => s.slug)
}

export function getRelatedServices(slugs: string[]): ServiceData[] {
  return slugs
    .map(slug => getServiceBySlug(slug))
    .filter((s): s is ServiceData => s !== undefined)
}
