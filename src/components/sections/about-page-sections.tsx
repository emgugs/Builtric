'use client'

import Image from 'next/image'
import { BuiltricButton, BuiltricButtonGroup } from '@/components/builtric-button'
import { DemoRibbonSection } from '@/components/sections/framer-sections'

const HERO_IMAGE = 'https://framerusercontent.com/images/hcvlUsMeEgiTnJSXFYwkBGl6Q.jpg'
const MISSION_IMAGE = 'https://framerusercontent.com/images/RZ1pwYaMGB7FLe8WB8ztHwBMlc.jpg'
const STORY_IMAGE = 'https://framerusercontent.com/images/4mpTeSy0hiW3nPbHKHgXssIjsc.jpg'

const STORY_BODY =
  'Builtric was founded on a simple, powerful idea: construction projects fail not from a lack of effort, but from a lack of visibility. We saw leaders making billion-dollar decisions with fragmented data and delayed reports, often forced to rely on intuition rather than real-time insight. This disconnect creates inefficiencies, cost overruns, and missed opportunities that ripple across entire projects. Born from a deep understanding of regional complexities and global best practices, Builtric is designed to be the single source of truth the industry can rely on. It brings clarity to complexity by unifying data, streamlining communication, and enabling faster, more informed decision-making at every level. By bridging gaps between teams, stakeholders, and systems, Builtric empowers organizations to move with confidence and precision. Ultimately, it transforms how projects are managed—shifting from reactive problem-solving to proactive, data-driven execution.'

function AboutHeroSection() {
  return (
    <>
      <section className="w-full overflow-hidden px-site pb-9 pt-page-hero">
        <div className="site-container flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-1 flex-col gap-2.5">
            <h1 className="page-hero-title text-primary-black">
              The 360° construction intelligence platform
            </h1>
            <BuiltricButtonGroup className="py-3">
              <BuiltricButton label="Product Features" href="/builtric-features" />
              <BuiltricButton label="Try Now" href="/builtric-demo" variant="cta" />
            </BuiltricButtonGroup>
          </div>
          <p className="page-hero-lead flex-1 text-primary-black">
            Builtric helps you make data-driven decisions by unifying all project metrics into a
            single platform.
          </p>
        </div>
      </section>

      <section className="relative h-[400px] w-full overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </section>
    </>
  )
}

function AboutMissionSection() {
  return (
    <section className="w-full px-site py-14">
      <div className="site-container flex flex-col items-start gap-14 lg:flex-row lg:gap-14">
        <div className="flex flex-1 flex-col gap-8 py-6">
          <h2 className="t-heading text-primary-black">
            Our mission is to transform how construction decisions are made
          </h2>
          <p className="t-section-lead text-primary-black">
            By delivering real-time unified project data, eliminating uncertainty before it becomes
            costly, and empowering teams to build smarter.
          </p>
        </div>
        <div className="relative h-[420px] w-full shrink-0 overflow-hidden rounded-xl lg:w-[420px]">
          <Image
            src={MISSION_IMAGE}
            alt=""
            fill
            className="object-cover"
            sizes="420px"
          />
        </div>
      </div>
    </section>
  )
}

function AboutStorySection() {
  return (
    <section className="w-full px-site py-14">
      <div className="site-container flex flex-col items-start gap-14 py-6 lg:flex-row lg:gap-14">
        <div className="relative h-[420px] w-full shrink-0 overflow-hidden rounded-xl lg:w-[420px]">
          <Image
            src={STORY_IMAGE}
            alt=""
            fill
            className="object-cover"
            sizes="420px"
          />
        </div>
        <div className="flex flex-1 flex-col gap-8">
          <h2 className="t-heading text-primary-black">
            Story
          </h2>
          <p className="t-body text-primary-black">
            {STORY_BODY}
          </p>
        </div>
      </div>
    </section>
  )
}

export function AboutPageContent() {
  return (
    <>
      <AboutHeroSection />
      <AboutMissionSection />
      <AboutStorySection />
      <DemoRibbonSection />
    </>
  )
}
