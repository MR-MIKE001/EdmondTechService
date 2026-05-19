import SEOHead         from '@/components/ui/SEOHead'
import CTAStrip        from '@/components/ui/CTAStrip'
import HomeHero        from '@/components/sections/HomeHero'
import ValueProps      from '@/components/sections/ValueProps'
import AboutSnippet    from '@/components/sections/AboutSnippet'
import SolutionsOverview from '@/components/sections/SolutionsOverview'
import WhyEdmond       from '@/components/sections/WhyEdmond'

export default function Home() {
  return (
    <>
      <SEOHead
        
        description="Edmond Tech Services delivers enterprise-grade digital solutions to businesses across Kano State, Nigeria. Exclusive SWAD Digital Solutions partner. HotelGo PMS, business software, local support."
        canonical="/"
      />
      <HomeHero />
      <ValueProps />
      <AboutSnippet />
      <SolutionsOverview />
      <WhyEdmond />
      <CTAStrip
        headline="Ready to see what the right technology can do for your business?"
        sub="Talk to our team today. No pressure, no jargon — just a straight conversation about what you need."
        cta="Chat With Us on WhatsApp"
      />
    </>
  )
}
