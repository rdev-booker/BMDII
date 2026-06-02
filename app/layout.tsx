import type { Metadata } from 'next'
import { Inter, Barlow } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const barlow = Barlow({
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
  weight: ['600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: {
    default: 'BMD Transportation | Specialized Freight | Eastern Ontario',
    template: '%s | BMD Transportation',
  },
  description:
    'Nearly 40 years of specialized freight expertise in Eastern Ontario. Over-dimensional, open deck, industrial FTL, and cross-border shipping. Your trusted heavy freight partner.',
  keywords: [
    'specialized freight Eastern Ontario',
    'over-dimensional freight Ontario',
    'open deck transport Ontario',
    'industrial freight carrier',
    'heavy haul trucking Ontario',
    'cross-border freight Canada USA',
    'FTL trucking Eastern Ontario',
    'BMD Transportation',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: 'BMD Transportation',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${inter.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  )
}
