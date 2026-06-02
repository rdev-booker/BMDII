'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import {
  Menu, X, Phone, ChevronDown,
  Maximize2, Layers, Factory, Globe2,
  ArrowRight, ShieldCheck,
} from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

const megaServices = [
  {
    icon: Maximize2,
    title: 'Over-Dimensional Freight',
    desc: 'Wide, high and long loads. Fully permitted with pilot car coordination and MTO routing.',
    tag: 'Our Specialty',
    href: '/services/over-dimensional',
  },
  {
    icon: Layers,
    title: 'Open Deck / Step Deck',
    desc: 'Flatbed, step deck, and RGN trailers for exposed freight of all dimensions.',
    tag: null,
    href: '/services/open-deck',
  },
  {
    icon: Factory,
    title: 'Industrial Full Truck Load',
    desc: 'Dedicated FTL for steel, equipment, machinery, and high-value production freight.',
    tag: null,
    href: '/services/industrial-ftl',
  },
  {
    icon: Globe2,
    title: 'Cross-Border Shipping',
    desc: 'Seamless Canada-U.S. freight with PAPS/PARS filing and border-experienced drivers.',
    tag: null,
    href: '/services/over-dimensional',
  },
]

const topNav = [
  { label: 'About',    href: '/about'   },
  { label: 'Careers',  href: '/careers' },
  { label: 'Contact',  href: '/contact' },
]

export default function Navbar() {
  const [scrolled,       setScrolled]      = useState(false)
  const [mobileOpen,     setMobileOpen]    = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const [megaOpen,       setMegaOpen]      = useState(false)

  const megaRef   = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMegaOpen(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeMobile = useCallback(() => {
    setMobileOpen(false)
    setMobileServices(false)
  }, [])

  return (
    <header
      ref={headerRef}
      className={clsx(
        'fixed top-0 inset-x-0 z-50 bg-white transition-all duration-300',
        scrolled || megaOpen
          ? 'border-b border-bmd-ink-100 shadow-nav-scrolled'
          : 'border-b border-bmd-ink-100/60'
      )}
    >
      <div className="container-xl">
        <div className="flex items-center justify-between h-[72px]">

          {/* ── Logo ─────────────────────────────────────────────────────── */}
          <Link
            href="/"
            onClick={closeMobile}
            className="flex items-center gap-3 group flex-shrink-0"
            aria-label="BMD Transportation - Home"
          >
            <div className="flex items-center gap-2">
              <div className="w-1 h-9 bg-bmd-red-500 rounded-full flex-shrink-0" />
              <div className="flex flex-col leading-none">
                <span className="text-[26px] font-extrabold text-bmd-ink-950 tracking-tightest
                                 group-hover:text-bmd-red-500 transition-colors duration-200"
                      style={{ fontFamily: 'var(--font-barlow), var(--font-inter)' }}>
                  BMD
                </span>
                <span className="text-label-sm text-bmd-ink-400 tracking-wider uppercase">
                  Transportation
                </span>
              </div>
            </div>

            <div className="hidden sm:flex flex-col leading-snug pl-2 border-l border-bmd-ink-100">
              <span className="text-label-sm text-bmd-ink-400 tracking-widest uppercase">Est. 1987</span>
              <span className="text-label-sm text-bmd-ink-400 tracking-widest uppercase">Eastern Ontario</span>
            </div>
          </Link>

          {/* ── Desktop navigation ───────────────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">

            {/* Services mega-menu trigger */}
            <div ref={megaRef} className="relative">
              <button
                onClick={() => setMegaOpen(v => !v)}
                aria-expanded={megaOpen}
                aria-haspopup="true"
                className={twMerge(
                  'flex items-center gap-1.5 px-4 py-2 rounded-sm',
                  'text-body-sm font-semibold tracking-wide',
                  'transition-all duration-200',
                  megaOpen
                    ? 'text-bmd-ink-950 bg-bmd-ivory-100'
                    : 'text-bmd-ink-700 hover:text-bmd-ink-950 hover:bg-bmd-ivory-50'
                )}
              >
                Services
                <ChevronDown
                  className={clsx(
                    'w-3.5 h-3.5 text-bmd-ink-400 transition-transform duration-200',
                    megaOpen && 'rotate-180 text-bmd-red-500'
                  )}
                />
              </button>

              {/* ── Mega-menu panel ─────────────────────────────────────── */}
              {megaOpen && (
                <div
                  className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2
                             w-[760px] xl:w-[840px]
                             bg-white border border-bmd-ink-100 rounded-sm
                             shadow-mega animate-slide-down"
                  role="menu"
                >
                  {/* Panel header */}
                  <div className="px-6 pt-5 pb-4 border-b border-bmd-ink-100 flex items-center justify-between">
                    <div>
                      <p className="text-label uppercase tracking-widest text-bmd-red-500 font-bold">
                        Specialized Services
                      </p>
                      <p className="text-body-xs text-bmd-ink-400 mt-0.5">
                        Eastern Ontario&rsquo;s premier freight capabilities
                      </p>
                    </div>
                    <Link
                      href="/services/over-dimensional"
                      onClick={() => setMegaOpen(false)}
                      className="btn-text text-label"
                    >
                      View all
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  {/* Service cards + CTA sidebar */}
                  <div className="grid grid-cols-[1fr_210px] divide-x divide-bmd-ink-100">

                    {/* Left: 2x2 service grid */}
                    <div className="grid grid-cols-2 gap-px bg-bmd-ink-100 p-px">
                      {megaServices.map(({ icon: Icon, title, desc, tag, href }) => (
                        <Link
                          key={title}
                          href={href}
                          role="menuitem"
                          onClick={() => setMegaOpen(false)}
                          className="group flex gap-4 p-5 bg-white hover:bg-bmd-ivory-50
                                     transition-colors duration-200"
                        >
                          <div className="w-10 h-10 flex-shrink-0 rounded-sm
                                          bg-bmd-red-500/8 group-hover:bg-bmd-red-500/15
                                          flex items-center justify-center
                                          transition-colors duration-200 mt-0.5">
                            <Icon className="w-5 h-5 text-bmd-red-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <p className="text-body-sm font-bold text-bmd-ink-950 leading-tight">
                                {title}
                              </p>
                              {tag && (
                                <span className="flex-shrink-0 text-label-sm text-bmd-red-500
                                                 bg-bmd-red-500/8 border border-bmd-red-500/20
                                                 px-1.5 py-0.5 rounded-sm uppercase tracking-widest">
                                  {tag}
                                </span>
                              )}
                            </div>
                            <p className="text-body-xs text-bmd-ink-500 leading-relaxed">{desc}</p>
                            <span className="inline-flex items-center gap-1 mt-2
                                             text-label text-bmd-red-500 font-semibold
                                             opacity-0 group-hover:opacity-100
                                             transition-opacity duration-200">
                              Learn more
                              <ArrowRight className="w-3 h-3" />
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Right: Quick-contact sidebar */}
                    <div className="flex flex-col p-6 gap-5 bg-bmd-ivory-50">
                      <div>
                        <p className="text-label uppercase tracking-widest text-bmd-ink-400 font-bold mb-3">
                          Quick Contact
                        </p>
                        <p className="text-body-xs text-bmd-ink-500 leading-relaxed mb-4">
                          Have a specialized load? Speak directly to our dispatch team.
                        </p>
                        <a
                          href="tel:+16135551234"
                          className="flex items-center gap-2 text-bmd-ink-950 font-bold text-lg
                                     hover:text-bmd-red-500 transition-colors duration-200 mb-1"
                        >
                          <Phone className="w-4 h-4 text-bmd-red-500 flex-shrink-0" />
                          (613) 555-1234
                        </a>
                        <p className="text-label-sm text-bmd-ink-400 uppercase tracking-widest">
                          Mon-Fri · 7am-6pm EST
                        </p>
                      </div>

                      <div className="border-t border-bmd-ink-100 pt-5 mt-auto">
                        <div className="flex items-center gap-2 mb-3">
                          <ShieldCheck className="w-4 h-4 text-bmd-red-500 flex-shrink-0" />
                          <p className="text-body-xs text-bmd-ink-500">
                            Licensed, insured &amp; CVOR certified
                          </p>
                        </div>
                        <Link
                          href="/contact"
                          onClick={() => setMegaOpen(false)}
                          className="btn-primary w-full text-label"
                        >
                          Request a Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {topNav.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="nav-link px-4 py-2 rounded-sm hover:bg-bmd-ivory-50"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* ── Desktop right actions ─────────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+16135551234"
              className="flex items-center gap-2 text-bmd-ink-600 hover:text-bmd-ink-950
                         transition-colors duration-200 group"
            >
              <Phone className="w-4 h-4 text-bmd-red-500 group-hover:text-bmd-red-600 transition-colors" />
              <span className="text-body-sm font-semibold">(613) 555-1234</span>
            </a>

            <div className="w-px h-5 bg-bmd-ink-100" />

            <Link href="/contact" className="btn-primary py-2.5 px-5 text-label">
              Request a Quote
            </Link>
          </div>

          {/* ── Mobile hamburger ──────────────────────────────────────────── */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="lg:hidden p-2 -mr-2 text-bmd-ink-700 hover:text-bmd-red-500 transition-colors duration-200"
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen
              ? <X className="w-6 h-6" />
              : <Menu className="w-6 h-6" />
            }
          </button>
        </div>
      </div>

      {/* ── Mobile menu panel ──────────────────────────────────────────────── */}
      <div
        className={clsx(
          'lg:hidden overflow-y-auto transition-all duration-300',
          'bg-white border-t border-bmd-ink-100',
          mobileOpen ? 'max-h-[calc(100vh-72px)] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="container-xl py-5 space-y-1">

          {/* Services accordion */}
          <div>
            <button
              onClick={() => setMobileServices(v => !v)}
              className="w-full flex items-center justify-between
                         py-3.5 px-2 text-left
                         text-bmd-ink-800 hover:text-bmd-ink-950 font-semibold
                         border-b border-bmd-ink-100 transition-colors duration-200"
            >
              Services
              <ChevronDown
                className={clsx(
                  'w-4 h-4 text-bmd-ink-400 transition-transform duration-200',
                  mobileServices && 'rotate-180 text-bmd-red-500'
                )}
              />
            </button>

            <div
              className={clsx(
                'overflow-hidden transition-all duration-300',
                mobileServices ? 'max-h-96' : 'max-h-0'
              )}
            >
              <div className="py-2 pl-4 border-b border-bmd-ink-100 space-y-1">
                {megaServices.map(({ icon: Icon, title, href }) => (
                  <Link
                    key={title}
                    href={href}
                    onClick={closeMobile}
                    className="flex items-center gap-3 py-3 px-2
                               text-bmd-ink-600 hover:text-bmd-ink-950
                               text-body-sm font-medium
                               transition-colors duration-200"
                  >
                    <Icon className="w-4 h-4 text-bmd-red-500 flex-shrink-0" />
                    {title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {topNav.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMobile}
              className="block py-3.5 px-2 text-bmd-ink-700 hover:text-bmd-ink-950
                         font-semibold border-b border-bmd-ink-100 last:border-0
                         transition-colors duration-200"
            >
              {label}
            </Link>
          ))}

          <div className="pt-5 pb-4 flex flex-col gap-3">
            <a
              href="tel:+16135551234"
              className="flex items-center gap-3 py-2 text-bmd-ink-600"
            >
              <Phone className="w-4 h-4 text-bmd-red-500" />
              <span className="font-semibold">(613) 555-1234</span>
            </a>
            <Link href="/contact" onClick={closeMobile} className="btn-primary">
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
