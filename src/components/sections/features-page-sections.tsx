'use client'

import Image from 'next/image'
import { BuiltricButton } from '@/components/builtric-button'
import { ProductFeaturesSection } from '@/components/sections/product-features-section'
import { DemoRibbonSection } from '@/components/sections/framer-sections'

const HERO_IMAGE = 'https://framerusercontent.com/images/bYbOjDkrHkIrfPo3CTi63wOPw.jpg'

const connectedDataCards = [
  {
    title: 'Integrated data solutions',
    description: 'One single source of project truth',
    image: 'https://framerusercontent.com/images/ZvTixm9vMLkDk7ODycszoqo02SI.png',
  },
  {
    title: 'Unified dashboard',
    description: 'Proactive insight into cost, schedule, and risk',
    image: 'https://framerusercontent.com/images/fYVUc369pALYqcEl5Imz97DKLVg.png',
  },
  {
    title: 'Secure data',
    description: 'Enterprise-grade security you can depend on',
    image: 'https://framerusercontent.com/images/hp4D9bhEgdhoGAnTJk0itftf1Q.png',
  },
  {
    title: 'Real-time optimisation',
    description: 'Simple to adopt with fast onboarding',
    image: 'https://framerusercontent.com/images/tTyJxevRZYu0eQqJEhQTD3sI2i4.png',
  },
]

function FeaturesHero() {
  return (
    <>
      <section className="w-full overflow-hidden px-site pb-9 pt-page-hero">
        <div className="site-container flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-1 flex-col gap-2.5">
            <h1 className="page-hero-title text-primary-black">
              One platform
              <br />
              Total project intelligence
            </h1>
            <div className="py-3">
              <BuiltricButton label="Try Now" href="/builtric-demo" variant="cta" />
            </div>
          </div>
          <p className="page-hero-lead flex-1 text-primary-black">
            Unify your data, streamline operations, and gain the insights to finish on time and on
            budget.
          </p>
        </div>
      </section>

      <section className="relative h-[400px] w-full overflow-hidden">
        <Image src={HERO_IMAGE} alt="" fill className="object-cover" sizes="100vw" priority />
      </section>
    </>
  )
}

function ConnectedDataSection() {
  return (
    <section className="w-full bg-primary-white px-site py-[120px]">
      <div className="site-container flex flex-col items-center gap-11">
        <div className="max-w-3xl text-center">
          <h2 className="t-heading text-primary-black">
            Connected data. Better decisions
          </h2>
          <p className="t-section-lead mx-auto mt-2.5 max-w-md text-primary-black">
            Builtric connects every team and data source into one structured platform so your
            decisions are powered by insight, not guesswork.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {connectedDataCards.map((item) => (
            <article
              key={item.title}
              className="flex h-[320px] flex-col items-center justify-center gap-3 rounded-[20px] bg-white p-3 text-center"
            >
              <Image src={item.image} alt="" width={100} height={100} />
              <div className="flex flex-col gap-1.5 px-2">
                <h3 className="t-title text-primary-black">
                  {item.title}
                </h3>
                <p className="t-body text-primary-black">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FeaturesPageContent() {
  return (
    <>
      <FeaturesHero />
      <ConnectedDataSection />
      <ProductFeaturesSection />
      <DemoRibbonSection variant="yellow" />
    </>
  )
}
