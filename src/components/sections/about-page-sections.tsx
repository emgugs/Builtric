'use client'

import Image from 'next/image'
import { BuiltricButton, BuiltricButtonGroup } from '@/components/builtric-button'
import { DemoRibbonSection } from '@/components/sections/framer-sections'

const HERO_IMAGE = 'https://framerusercontent.com/images/hcvlUsMeEgiTnJSXFYwkBGl6Q.jpg'
const MISSION_IMAGE = 'https://framerusercontent.com/images/RZ1pwYaMGB7FLe8WB8ztHwBMlc.jpg'
const STORY_IMAGE = 'https://framerusercontent.com/images/4mpTeSy0hiW3nPbHKHgXssIjsc.jpg'

const STORY_PARAGRAPHS = [
  'Construction projects do not fail because people stop working hard. They fail when leaders cannot see what is happening soon enough to act. Across large-scale projects, critical decisions are often made with fragmented data, delayed reports, and disconnected communication. The result is cost overrun, slower execution, missed deadlines, and risk that could have been avoided.',
  'Builtric was created to change that. The platform gives teams one clear view of project performance by connecting data, communication, reporting, and decision-making in a single source of truth. Issues become easier to spot, teams stay better aligned, and leaders can make faster decisions with greater confidence.',
  'Built by LMKR, a premier digital transformation partner with over 30 years of experience across technology, energy, and infrastructure, Builtric brings proven cross-industry expertise into construction project management. The result is a smarter way to plan, track, and deliver projects, with greater transparency, efficiency, and control from start to finish.',
] as const

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

function AboutStatsStrip() {
  return (
    <section className="w-full bg-primary-black px-site py-12 min-[810px]:py-16">
      <div className="site-container">
        <div className="flex flex-col gap-10 min-[810px]:flex-row min-[810px]:items-stretch min-[810px]:gap-14">
          <div className="flex flex-1 flex-col gap-3">
            <p className="font-archivo text-[clamp(2.5rem,2rem+2vw,3.5rem)] font-bold leading-none tracking-[-0.02em] text-hero-yellow">
              971
            </p>
            <p className="t-body text-primary-white/90">
              contracts managed across Local Development Program and PRMSC initiatives
            </p>
          </div>

          <div
            className="hidden w-px shrink-0 self-stretch bg-white/15 min-[810px]:block"
            aria-hidden
          />

          <div className="flex flex-1 flex-col gap-3">
            <p className="font-archivo text-[clamp(2rem,1.5rem+1.5vw,3rem)] font-bold leading-none tracking-[-0.02em] text-hero-yellow">
              PKR 147 billion
            </p>
            <p className="t-body text-primary-white/90">in project value handled digitally</p>
          </div>
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
          <div className="flex flex-col gap-5">
            {STORY_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="t-body text-primary-black">
                {paragraph}
              </p>
            ))}
          </div>
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
      <AboutStatsStrip />
      <DemoRibbonSection variant="yellow" />
    </>
  )
}
