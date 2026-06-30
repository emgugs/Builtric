'use client'

import { SiteShell } from '@/components/site-shell'
import {
  AboutPreviewSection,
  EmpowersSection,
  HeroSection,
  PlatformSection,
  TechPartnersSection,
} from '@/components/sections/home-sections'
import { ProductFeaturesSection } from '@/components/sections/product-features-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'

export default function HomePage() {
  return (
    <SiteShell>
      <HeroSection />
      <PlatformSection />
      <TechPartnersSection />
      <ProductFeaturesSection />
      <AboutPreviewSection />
      <EmpowersSection />
      <TestimonialsSection includeDemoRibbon />
    </SiteShell>
  )
}
