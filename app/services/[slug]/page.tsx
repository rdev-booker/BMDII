import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ServiceHero from '@/components/services/ServiceHero'
import CapabilitiesGrid from '@/components/services/CapabilitiesGrid'
import ProcessSteps from '@/components/services/ProcessSteps'
import IndustrialProof from '@/components/services/IndustrialProof'
import ServiceCTA from '@/components/services/ServiceCTA'
import RelatedServices from '@/components/services/RelatedServices'
import {
  getServiceBySlug,
  getAllServiceSlugs,
  getRelatedServices,
} from '@/data/services'

// ─── Static generation ─────────────────────────────────────────────────────────

export function generateStaticParams() {
  return getAllServiceSlugs().map(slug => ({ slug }))
}

// ─── Per-page SEO metadata ─────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      type: 'website',
      locale: 'en_CA',
    },
  }
}

// ─── Page component ────────────────────────────────────────────────────────────

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) notFound()

  const relatedServices = getRelatedServices(service.relatedSlugs)

  return (
    <>
      <Navbar />
      <main>
        <ServiceHero service={service} />
        <CapabilitiesGrid service={service} />
        <ProcessSteps service={service} />
        <IndustrialProof service={service} />
        <ServiceCTA name={service.name} slug={service.slug} cta={service.cta} />
        <RelatedServices services={relatedServices} />
      </main>
      <Footer />
    </>
  )
}
