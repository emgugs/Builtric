'use client'

import { FramerTestimonial } from '@/components/framer-wrappers'

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

export function TestimonialsSection() {
  return (
    <section
      className="flex w-full flex-col items-center gap-11 overflow-hidden py-10"
      style={{ background: TESTIMONIALS_GRADIENT }}
    >
      <h2 className="max-w-3xl px-6 text-center font-archivo text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-primary-black min-[810px]:text-[56px]">
        See how companies build with Builtric
      </h2>
      <div className="w-full overflow-x-auto py-[22px]">
        <div className="mx-auto flex w-max min-w-full justify-center gap-5 px-[35px] min-[810px]:w-full min-[810px]:max-w-none min-[810px]:flex-wrap">
          {testimonials.map((item) => (
            <FramerTestimonial
              key={item.name}
              quote={item.quote}
              name={item.name}
              role={item.role}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
