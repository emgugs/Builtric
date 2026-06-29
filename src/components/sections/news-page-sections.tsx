'use client'

import Image from 'next/image'
import { BuiltricButton } from '@/components/builtric-button'
import { DemoRibbonSection } from '@/components/sections/framer-sections'

const HERO_IMAGE = 'https://framerusercontent.com/images/ic0LJJJs3EVPM2Ebxg074jv3vc.jpg'

function NewsHeroSection() {
  return (
    <>
      <section className="flex w-full justify-center overflow-hidden px-site pb-9 pt-[108px]">
        <div className="flex w-full max-w-[1600px] flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex max-w-[83%] flex-1 flex-col gap-2.5 lg:max-w-none">
            <h1 className="t-display max-w-[83%] text-primary-black">
              The latest from Builtric
            </h1>
            <div className="py-3">
              <BuiltricButton label="Try Now" href="/builtric-demo" variant="cta" />
            </div>
          </div>
          <p className="t-subheading max-w-xl flex-1 text-primary-black">
            Explore product updates, company news, partnerships, and the latest from the Builtric
            team
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
