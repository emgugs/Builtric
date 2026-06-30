'use client'

import { DemoRibbonCard } from '@/components/sections/framer-sections'
import { FramerTestimonial } from '@/components/framer-wrappers'
import { ScrollReveal } from '@/components/scroll-reveal'

const TESTIMONIALS_GRADIENT =
  'linear-gradient(181deg, rgb(245, 245, 245) 3%, rgb(255, 219, 52) 85%, rgb(245, 245, 245) 114%)'

const testimonials = [
  {
    quote:
      'The Platform provided the clarity we needed to optimize both financial and physical progress across civil works in over 200 villages. By unifying our data into a single, reliable view, we significantly reduced billing timelines and ensured seamless operations across the region.',
    name: 'Ali Raza Rao',
    role: 'COO, PRMSC',
  },
  {
    quote:
      'This tool was a game-changer for our 100+ local development projects. It provided the real-time visibility required to identify delay-prone areas early, allowing our management to resolve bottlenecks proactively before they impacted our project margins.',
    name: 'Mudassar Nawaz',
    role: 'ADC, Lahore',
  },
  {
    quote:
      'The platform delivers the sophisticated analysis needed to maintain strict budget control. By tracking spend-variations against our projections, the platform ensures total financial accountability and keeps our high-value projects aligned with their fiscal goals.',
    name: 'MCL',
    role: 'Metropolitan Corporation Lahore',
  },
]

export function TestimonialsSection({
  includeDemoRibbon = false,
}: {
  includeDemoRibbon?: boolean
}) {
  return (
    <ScrollReveal
      as="section"
      className={`relative z-20 w-full overflow-hidden px-site py-12 md:py-16 ${
        includeDemoRibbon ? 'pb-32 md:pb-44' : 'pb-12'
      }`}
      style={{ background: TESTIMONIALS_GRADIENT }}
      aria-label={includeDemoRibbon ? 'Testimonials and demo' : undefined}
    >
      <div className="site-container flex flex-col items-center gap-11 md:gap-14">
        <h2 className="t-heading text-center text-primary-black">
          See how companies build with Builtric
        </h2>
        <div className="w-full overflow-x-auto py-[22px] min-[810px]:overflow-visible">
          <div className="flex w-max min-w-full justify-center gap-5 min-[810px]:w-full min-[810px]:flex-wrap">
            {testimonials.map((item, index) => (
              <ScrollReveal key={item.name} delay={index * 100}>
                <FramerTestimonial
                  quote={item.quote}
                  name={item.name}
                  role={item.role}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
        {includeDemoRibbon ? (
          <ScrollReveal delay={200} className="w-full pt-4 md:pt-8">
            <DemoRibbonCard className="translate-y-[10%]" />
          </ScrollReveal>
        ) : null}
      </div>
    </ScrollReveal>
  )
}
