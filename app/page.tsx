'use client'

import { Navigation } from '@/app/components/Navigation'
import { HeroSection } from '@/app/components/HeroSection'
import { SocialProofBar } from '@/app/components/SocialProofBar'
import { FeaturesSection } from '@/app/components/FeaturesSection'
import { AppVortexSection } from '@/app/components/AppVortexSection'
import { HowItWorksSection } from '@/app/components/HowItWorksSection'
import { TrustPrivacySection } from '@/app/components/TrustPrivacySection'
import { FinalCTASection } from '@/app/components/FinalCTASection'
import { Footer } from '@/app/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F172A] font-['Inter',sans-serif] antialiased">
      <Navigation />
      <HeroSection />
      <SocialProofBar />
      <FeaturesSection />
      <AppVortexSection />
      <HowItWorksSection />
      <TrustPrivacySection />
      <FinalCTASection />
      <Footer />
    </div>
  )
}
