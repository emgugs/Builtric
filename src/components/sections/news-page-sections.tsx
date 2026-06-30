'use client'

import Image from 'next/image'
import { BuiltricButton } from '@/components/builtric-button'
import { DemoRibbonSection } from '@/components/sections/framer-sections'

const HERO_IMAGE = 'https://framerusercontent.com/images/ic0LJJJs3EVPM2Ebxg074jv3vc.jpg'

function NewsHeroSection() {
  return (
    <>
      <section className="w-full overflow-hidden px-site pb-9 pt-page-hero">
        <div className="site-container flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-1 flex-col gap-2.5">
            <h1 className="page-hero-title text-primary-black">
              The latest from Builtric
            </h1>
            <div className="py-3">
              <BuiltricButton label="Try Now" href="/builtric-demo" variant="cta" />
            </div>
          </div>
          <p className="page-hero-lead flex-1 text-primary-black">
            Explore product updates, company news, partnerships, and the latest from the Builtric
            team.
          </p>
        </div>
      </section>

      <section className="relative h-[400px] w-full overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Construction workes during sunset"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </section>
    </>
  )
}

export function NewsPageContent() {
  return (
    <>
      <NewsHeroSection />
      <DemoRibbonSection />
    </>
  )
}
