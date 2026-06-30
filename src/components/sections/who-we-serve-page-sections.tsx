'use client'

import Image from 'next/image'
import { BuiltricButton, BuiltricButtonGroup } from '@/components/builtric-button'
import { TestimonialsSection } from '@/components/sections/testimonials-section'

const HERO_IMAGE = 'https://framerusercontent.com/images/cpyIsgI7j4HkQtlvijSFu4xQSgo.png'

type RoleSection = {
  title: string
  subtitle: string
  image: string
  imagePosition: 'left' | 'right'
  background?: 'white' | 'muted'
  benefits: { title: string; description: string }[]
}

const developersSection: RoleSection = {
  title: 'Developers',
  subtitle:
    'Builtric gives developers the real-time insight needed to manage capital, resources, and risk across multiple construction projects, without the guesswork.',
  image: 'https://framerusercontent.com/images/Ii3npJ5eaLfC6Pr8x9R2KG5TPX4.jpg',
  imagePosition: 'left',
  background: 'white',
  benefits: [
    {
      title: 'Portfolio-wide visibility',
      description:
        'See financial health, schedule performance, and risk indicators across all active builds in one unified view.',
    },
    {
      title: 'Strategic decision support',
      description:
        'Data-driven dashboards that help you assess progress, forecast cost impact, and govern timelines more effectively.',
    },
    {
      title: 'Standardized delivery',
      description:
        'Drive repeatable excellence by aligning teams on common data, workflows, and performance indicators.',
    },
    {
      title: 'Real-time financial insight',
      description:
        'Move beyond retrospective reporting and gain forward-looking visibility into costs, variations, and cash flow.',
    },
  ],
}

const contractorsSection: RoleSection = {
  title: 'Contractors',
  subtitle:
    'Builtric offers tools that track work and empower teams to coordinate in real time, reduce waste, and deliver set outcomes.',
  image: 'https://framerusercontent.com/images/NTTPoIQfoTbJqs0LM3XZw4aG8.jpg',
  imagePosition: 'right',
  background: 'muted',
  benefits: [
    {
      title: 'Operational control',
      description:
        'Connect site and office teams through a single source of truth, eliminating delays caused by disconnected processes.',
    },
    {
      title: 'Productivity you can measure',
      description:
        'Boost labor and equipment efficiency with insights into progress, productivity bottlenecks, and schedule risks.',
    },
    {
      title: 'Cost and risk management',
      description:
        'Understand real cost drivers, manage change orders, and protect profit margins with live financial tracking and variation control.',
    },
    {
      title: 'Scalable workflows',
      description:
        'Standardize processes across projects, from tender and execution to handover, so teams can operate consistently at scale.',
    },
  ],
}

const projectManagersSection: RoleSection = {
  title: 'Project Managers',
  subtitle:
    'Builtric gives owners the real-time insight needed to manage capital, resources, and risk across multiple construction projects, without the guesswork.',
  image: 'https://framerusercontent.com/images/U2K6Lg4SXEQs90FjbyeS1gYePSs.jpg',
  imagePosition: 'left',
  background: 'white',
  benefits: [
    {
      title: 'Unified project view',
      description:
        'Real-time dashboards that show progress, task status, issues, and risks, eliminating guesswork from execution.',
    },
    {
      title: 'Structured collaboration',
      description:
        'Keep teams aligned with shared documentation, approvals, RFIs, and meeting records, all in one place.',
    },
    {
      title: 'Actionable alerts',
      description:
        'Identify schedule slippage, budget deviations, and quality issues early so corrective actions can be taken before they escalate.',
    },
    {
      title: 'Execution excellence',
      description:
        'Standardise approaches across phases, enforce accountability, and coordinate cross-functional teams with clarity.',
    },
  ],
}

const coreBenefits = [
  {
    title: 'One version of truth',
    description: 'Single source aligns every team and decision',
    image: 'https://framerusercontent.com/images/fYVUc369pALYqcEl5Imz97DKLVg.png',
  },
  {
    title: 'Real-time visibility',
    description: 'Project visibility and live insights you can rely on',
    image: 'https://framerusercontent.com/images/GUXU58dIe90c6NrGhuKKlxLZuk.png',
  },
  {
    title: 'Better coordination',
    description: 'Seamless collaboration between office and site',
    image: 'https://framerusercontent.com/images/uMsCbFyrTRYwT0UMyEx96aquYj4.png',
  },
  {
    title: 'Faster decision making',
    description: 'Act swiftly with complete project clarity',
    image: 'https://framerusercontent.com/images/buEASZtsNWtfx7pSNqVI9ulqRJs.png',
  },
]

function WhoWeServeHero() {
  return (
    <>
      <section className="w-full overflow-hidden px-site pb-9 pt-page-hero">
        <div className="site-container flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-1 flex-col gap-2.5">
            <h1 className="page-hero-title text-primary-black">
              The right tools for every role
            </h1>
            <BuiltricButtonGroup className="py-3">
              <BuiltricButton label="Product Features" href="/builtric-features" />
              <BuiltricButton label="Try Now" href="/builtric-demo" variant="cta" />
            </BuiltricButtonGroup>
          </div>
          <p className="page-hero-lead flex-1 text-primary-black">
            Builtric delivers powerful construction management tools for every key player, keeping
            the entire project aligned around a single, reliable source of truth.
          </p>
        </div>
      </section>

      <section className="relative h-[400px] w-full overflow-hidden">
        <Image src={HERO_IMAGE} alt="" fill className="object-cover" sizes="100vw" priority />
      </section>
    </>
  )
}

function BenefitText({ title, description }: { title: string; description: string }) {
  return (
    <p className="t-body text-primary-black">
      <span className="font-bold">{title}</span>
      {description}
    </p>
  )
}

function RoleSectionBlock({ section, id }: { section: RoleSection; id?: string }) {
  const imageEl = (
    <div className="relative h-[420px] w-full shrink-0 overflow-hidden rounded-xl lg:w-[420px]">
      <Image src={section.image} alt="" fill className="object-cover" sizes="420px" />
    </div>
  )

  const textEl = (
    <div className="flex flex-1 flex-col gap-6">
      <div className="flex flex-col gap-2.5">
        <h2 className="t-heading text-primary-black">
          {section.title}
        </h2>
        <p className="t-section-lead text-primary-black">{section.subtitle}</p>
      </div>
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {section.benefits.slice(0, 2).map((item) => (
            <BenefitText key={item.title} {...item} />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {section.benefits.slice(2, 4).map((item) => (
            <BenefitText key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <section
      id={id}
      className={`w-full px-site py-14 ${
        section.background === 'muted' ? 'bg-primary-white' : 'bg-white'
      }`}
    >
      <div className="site-container flex flex-col items-start gap-7 lg:flex-row">
        {section.imagePosition === 'left' ? (
          <>
            {imageEl}
            {textEl}
          </>
        ) : (
          <>
            {textEl}
            {imageEl}
          </>
        )}
      </div>
    </section>
  )
}

function CoreBenefitsSection() {
  return (
    <section className="w-full overflow-hidden px-site py-[78px]">
      <div className="site-container flex flex-col items-center gap-11">
        <div className="max-w-3xl text-center">
          <h2 className="t-heading text-primary-black">
            Core benefits for every role
          </h2>
          <p className="t-section-lead mx-auto mt-2.5 max-w-md text-primary-black">
            Builtric eliminates silos and connects every stakeholder to a single source of truth.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {coreBenefits.map((item) => (
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

export function WhoWeServePageContent() {
  return (
    <>
      <WhoWeServeHero />
      <RoleSectionBlock id="project-managers" section={projectManagersSection} />
      <RoleSectionBlock id="contractors" section={contractorsSection} />
      <RoleSectionBlock id="developers" section={developersSection} />
      <CoreBenefitsSection />
      <TestimonialsSection includeDemoRibbon />
    </>
  )
}
