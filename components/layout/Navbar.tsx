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

// ─── Data ─────────────────────────────────────────────────────────────────────

const megaServices = [
  {
    icon: Maximize2,
    title: 'Over-Dimensional Freight',
    desc: 'Wide, high & long loads. Fully permitted with pilot car coordination and MTO routing.',
    tag: 'Our Specialty',
    href: '#services',
  },
  {
    icon: Layers,
    title: 'Open Deck / Step Deck',
    desc: 'Flatbed, step deck, and RGN trailers for exposed freight of all dimensions.',
    tag: null,
    href: '#services',
  },
  {
    icon: Factory,
    title: 'Industrial Full Truck Load',
    desc: 'Dedicated FTL for steel, equipment, machinery, and high-value production freight.',
    tag: null,
    href: '#services',
  },
  {
    icon: Globe2,
    title: 'Cross-Border Shipping',
    desc: 'Seamless Canada–U.S. freight with PAPS/PARS filing and border-experienced drivers.',
    tag: null,
    href: '#services',
  },
]

const topNav = [
  { label: 'Industries', href: '#industries' },
  { label: 'About', href: '#about' },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled,      setScrolled]     = useState(false)
  const [mobileOpen,    setMobileOpen]   = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const [megaOpen,      setMegaOpen]     = useState(false)

  const megaRef   = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLElement>(null)

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mega-menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Close mega-menu on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMegaOpen(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  // Lock body scroll when mobile menu is open
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
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled || mobileOpen || megaOpen
          ? 'bg-bmd-ink-950/96 backdrop-blur-xl border-b border-white/6 shadow-nav'
          : 'bg-gradient-to-b from-black/40 to-transparent'
      )}
    >
      <div className="container-xl">
        <div className="flex items-center justify-between h-[72px]">

          {/* ── Logo ─────────────────────────────────────────────────────── */}
          <Link
            href="/"
            onClick={closeMobile}
            className="flex items-center gap-3 group flex-shrink-0"
            aria-label="BMD Transportation — Home"
          >
            {/* Wordmark */}
            <div className="flex flex-col leading-none">
              <span className="text-[26px] font-extrabold text-white tracking-tightest
                               group-hover:text-bmd-red-400 transition-colors duration-200">
                BMD
              </span>
              <span className="text-label-sm text-neutral-500 tracking-ultra-wide uppercase">
                Transportation
              </span>
            </div>

            {/* Separator */}
            <div className="w-px h-9 bg-bmd-red-500/50 mx-0.5 hidden sm:block" />

            {/* Est. badge */}
            <div className="flex-col leading-snug hidden sm:flex">
              <span className="text-label-sm text-neutral-600 tracking-widest uppercase">
                Est. 1987
              </span>
              <span className="text-label-sm text-neutral-600 tracking-widest uppercase">
                Eastern Ontario
              </span>
            </div>
          </Link>

          {/* ── Desktop navigation ───────────────────────────────────────── */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >

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
                    ? 'text-white bg-white/6'
                    : 'text-neutral-300 hover:text-white hover:bg-white/4'
                )}
              >
                Services
                <ChevronDown
                  className={clsx(
                    'w-3.5 h-3.5 text-neutral-500 transition-transform duration-200',
                    megaOpen && 'rotate-180 text-bmd-red-400'
                  )}
                />
              </button>

              {/* ── Mega-menu panel ─────────────────────────────────────── */}
              {megaOpen && (
                <div
                  className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2
                             w-[780px] xl:w-[860px]
                             bg-bmd-ink-950/98 backdrop-blur-xl
                             border border-white/8 rounded-sm
                             shadow-mega
                             animate-slide-down"
                  role="menu"
                >
                  {/* Panel header */}
                  <div className="px-6 pt-5 pb-4 border-b border-white/6 flex items-center justify-between">
                    <div>
                      <p className="text-label uppercase tracking-widest text-bmd-red-500 font-semibold">
                        Specialized Services
                      </p>
                      <p className="text-body-xs text-neutral-600 mt-0.5">
                        Eastern Ontario&rsquo;s premier freight capabilities
                      </p>
                    </div>
                    <Link
                      href="#services"
                      onClick={() => setMegaOpen(false)}
                      className="btn-text text-label"
                    >
                      View all
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  {/* Service cards + CTA sidebar */}
                  <div className="grid grid-cols-[1fr_220px] divide-x divide-white/6">

                    {/* Left: 2×2 service grid */}
                    <div className="grid grid-cols-2 gap-px bg-white/4 p-px">
                      {megaServices.map(({ icon: Icon, title, desc, tag, href }) => (
                        <Link
                          key={title}
                          href={href}
                          role="menuitem"
                          onClick={() => setMegaOpen(false)}
                          className="group flex gap-4 p-5 bg-bmd-ink-950
                                     hover:bg-bmd-slate-800/60
                                     transition-colors duration-200"
                        >
                          {/* Icon */}
                          <div className="w-10 h-10 flex-shrink-0 rounded-sm
                                          bg-bmd-red-500/10 group-hover:bg-bmd-red-500/20
                                          flex items-center justify-center
                                          transition-colors duration-200 mt-0.5">
                            <Icon className="w-5 h-5 text-bmd-red-400" />
                          </div>

                          {/* Copy */}
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <p className="text-body-sm font-bold text-white leading-tight">
                                {title}
                              </p>
                              {tag && (
                                <span className="flex-shrink-0 text-label-sm text-bmd-red-400
                                                 bg-bmd-red-500/10 border border-bmd-red-500/20
                                                 px-1.5 py-0.5 rounded-sm uppercase tracking-widest">
                                  {tag}
                                </span>
                              )}
                            </div>
                            <p className="text-body-xs text-neutral-500 leading-relaxed">
                              {desc}
                            </p>
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
                    <div className="flex flex-col p-6 gap-5">
                      <div>
                        <p className="text-label uppercase tracking-widest text-neutral-600 font-bold mb-3">
                          Quick Contact
                        </p>
                        <p className="text-body-xs text-neutral-500 leading-relaxed mb-4">
                          Have a specialized load? Speak directly to our dispatch team.
                        </p>
                        <a
                          href="tel:+16135551234"
                          className="flex items-center gap-2 text-white font-bold text-lg
                                     hover:text-bmd-red-400 transition-colors duration-200 mb-1"
                        >
                          <Phone className="w-4 h-4 text-bmd-red-500 flex-shrink-0" />
                          (613) 555-1234
                        </a>
                        <p className="text-label-sm text-neutral-600 uppercase tracking-widest">
                          Mon–Fri · 7am–6pm EST
                        </p>
                      </div>

                      <div className="border-t border-white/6 pt-5 mt-auto">
                        <div className="flex items-center gap-2 mb-3">
                          <ShieldCheck className="w-4 h-4 text-bmd-red-500 flex-shrink-0" />
                          <p className="text-body-xs text-neutral-500">
                            Licensed, insured &amp; CVOR certified
                          </p>
                        </div>
                        <Link
                          href="#contact"
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

            {/* Standard nav links */}
            {topNav.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="nav-link px-4 py-2 rounded-sm hover:bg-white/4"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* ── Desktop right actions ─────────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+16135551234"
              className="flex items-center gap-2 text-neutral-400 hover:text-white
                         transition-colors duration-200 group"
            >
              <Phone className="w-4 h-4 text-bmd-red-500 group-hover:text-bmd-red-400 transition-colors" />
              <span className="text-body-sm font-semibold">(613) 555-1234</span>
            </a>

            <div className="w-px h-5 bg-white/10" />

            <Link href="#contact" className="btn-primary py-2.5 px-5 text-label">
              Request a Quote
            </Link>
          </div>

          {/* ── Mobile hamburger ──────────────────────────────────────────── */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="lg:hidden p-2 -mr-2 text-white hover:text-bmd-red-400 transition-colors duration-200"
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
          'bg-bmd-ink-950/98 border-t border-white/6',
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
                         text-neutral-200 hover:text-white font-semibold
                         border-b border-white/6 transition-colors duration-200"
            >
              Services
              <ChevronDown
                className={clsx(
                  'w-4 h-4 text-neutral-500 transition-transform duration-200',
                  mobileServices && 'rotate-180 text-bmd-red-400'
                )}
              />
            </button>

            {/* Mobile services list */}
            <div
              className={clsx(
                'overflow-hidden transition-all duration-300',
                mobileServices ? 'max-h-96' : 'max-h-0'
              )}
            >
              <div className="py-2 pl-4 border-b border-white/6 space-y-1">
                {megaServices.map(({ icon: Icon, title, href }) => (
                  <Link
                    key={title}
                    href={href}
                    onClick={closeMobile}
                    className="flex items-center gap-3 py-3 px-2
                               text-neutral-400 hover:text-white
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

          {/* Other nav links */}
          {topNav.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMobile}
              className="block py-3.5 px-2 text-neutral-300 hover:text-white
                         font-semibold border-b border-white/6 last:border-0
                         transition-colors duration-200"
            >
              {label}
            </Link>
          ))}

          {/* Mobile footer actions */}
          <div className="pt-5 pb-4 flex flex-col gap-3">
            <a
              href="tel:+16135551234"
              className="flex items-center gap-3 py-2 text-neutral-400"
            >
              <Phone className="w-4 h-4 text-bmd-red-500" />
              <span className="font-semibold">(613) 555-1234</span>
            </a>
            <Link href="#contact" onClick={closeMobile} className="btn-primary">
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
