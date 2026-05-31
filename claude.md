# BMD Transportation — Project Guidelines

## Stack
- **Framework:** Next.js 15 (App Router, `async` params)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v3 + custom config (`tailwind.config.ts`)
- **Icons:** Lucide React (`LucideIcon` type)
- **Utilities:** `clsx` + `tailwind-merge` (`twMerge`)
- **Form styling:** `@tailwindcss/forms` (class strategy)
- **Rich text:** `@tailwindcss/typography`

## Brand Identity
- **Company:** BMD Transportation Ltd.
- **Est.:** ~1987 (approaching 40 years as of 2026)
- **Location:** Eastern Ontario, Canada
- **Positioning:** Premium specialized freight partner — NOT a generic local trucker

### Token reference (`tailwind.config.ts`)
| Token | Value | Use |
|---|---|---|
| `bmd-red-500` | `#C0202E` | Primary red — use sparingly |
| `bmd-red-700` | `#8C141D` | Hover state |
| `bmd-ink-950` | `#0D0B0B` | Near-black backgrounds |
| `bmd-ink-900` | `#201C1C` | Charcoal sections |
| `bmd-ink-500` | `#726464` | Body text on light |
| `bmd-ivory-50` | `#FDFCFA` | Page background |
| `bmd-ivory-100` | `#F6F4EF` | Section backgrounds |
| `bmd-slate-800` | `#1E2530` | Image placeholders |

### Typography scale (use class names, not raw sizes)
| Class | Role |
|---|---|
| `text-display-2xl` | Hero H1 |
| `text-display-xl` | Service page H1 |
| `text-display-lg` | Large section H2 |
| `text-display-md` | Standard H2 |
| `text-display-sm` | H3 / card headings |
| `text-body-lg` | Subheadlines |
| `text-body-md` | Card body |
| `text-body-sm` | Small body / nav |
| `text-label` | Eyebrows, badges, uppercase labels |
| `text-label-sm` | Fine print, compliance notes |

## Reusable CSS utilities (`app/globals.css`)
- **Layout:** `container-xl`, `section-pad`, `section-pad-sm`
- **Buttons:** `btn-primary`, `btn-primary-lg`, `btn-ghost`, `btn-ghost-lg`, `btn-outline`, `btn-text`
- **Section:** `eyebrow`, `eyebrow-line`, `h2-section`, `h2-section-light`, `rule-red`
- **Cards:** `card`, `card-hover`, `card-dark`
- **Badges:** `badge-red`, `badge-dark`
- **Forms:** `field`, `field-select`, `field-textarea`, `field-label`

## Core Messages
> "When the load demands experience."

- Approaching 40 years · Eastern Ontario · Over-dimensional specialists
- Target clients: HVAC contractors, steel fabricators, custom manufacturers

## Key Services (priority order)
1. Over-Dimensional Freight → `/services/over-dimensional`
2. Open Deck / Step Deck   → `/services/open-deck`
3. Industrial FTL          → `/services/industrial-ftl`
4. Cross-Border Canada–U.S. → (links to over-dimensional page for now)

## File Structure
```
data/
  services.ts              — All service content + TypeScript types
                             (ServiceData, Capability, IndustryApplication, etc.)

app/
  layout.tsx               — Root layout, Inter font (weights 400–900), en-CA metadata
  page.tsx                 — Homepage
  globals.css              — Tailwind + all component utilities
  services/
    [slug]/
      page.tsx             — Dynamic service page (generateStaticParams + generateMetadata)

components/
  layout/
    Navbar.tsx             — Fixed, scroll-aware, services MEGA-MENU (hover → 2×2 panel)
    Footer.tsx             — Pre-footer CTA strip + 4-column footer
  home/
    Hero.tsx               — Full-viewport dark hero, 2-col desktop
    AuthorityBar.tsx       — 5-pillar dark authority strip
    ServicesGrid.tsx       — 4-card grid (links to /services/* pages)
    IndustriesSection.tsx  — HVAC, Steel, Manufacturing cards
    CTASection.tsx         — Dark split section + quote form
  services/
    ServiceHero.tsx        — Dark hero, breadcrumb, H1, image+stats panel
    CapabilitiesGrid.tsx   — 3-col capability cards + load spec callout table
    ProcessSteps.tsx       — 4-step timeline (horizontal desktop, vertical mobile)
    IndustrialProof.tsx    — 3 industry application cards + proof stats strip
    ServiceCTA.tsx         — Dark section + targeted 8-field quote form (client component)
    RelatedServices.tsx    — 2-card related service links
```

## Design Conventions
- **Background rhythm (service pages):** Dark hero → Ivory capabilities → Dark process → White proof → Dark CTA → Ivory related
- **Section accent:** Every dark section gets `w-1 h-full bg-bmd-red-500` left bar
- **Image placeholders:** `bg-gradient-to-br from-bmd-slate-700 via-bmd-slate-800 to-bmd-ink-950` + `font-mono` label
- **Rounded-sm everywhere** — industrial precision, no rounded-lg softness
- **Hover cards:** Always `hover:-translate-y-1` + `hover:shadow-card-hover` + `hover:border-bmd-red-500/30`

## SEO Structure
- One `<h1>` per page — in hero section only
- `<h2>` — section headings (always the `capabilities.headline` / `process.headline` etc.)
- `<h3>` — individual card titles
- `aria-label` on every `<section>`
- `generateMetadata()` in every `app/**/page.tsx`
- Service pages: `generateStaticParams()` for SSG

## Contact Info (placeholder — update before launch)
- Phone: (613) 555-1234 → `tel:+16135551234`
- Email: dispatch@bmdtransportation.ca
- Location: Eastern Ontario, Canada
- Hours: Mon–Fri · 7am–6pm EST
