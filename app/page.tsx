import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import AuthorityBar from '@/components/home/AuthorityBar'
import ServicesGrid from '@/components/home/ServicesGrid'
import IndustriesSection from '@/components/home/IndustriesSection'
import CTASection from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AuthorityBar />
        <ServicesGrid />
        <IndustriesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
