'use client'

import { BuiltricButton, BuiltricButtonGroup } from '@/components/builtric-button'
import {
  DataIcon,
  FinanceIcon,
  HseIcon,
  ProcurementIcon,
  ProjectManagementIcon,
} from '@/components/feature-timeline-icons'
import { ScrollReveal } from '@/components/scroll-reveal'
import type { ComponentType } from 'react'

const features: {
  title: string
  description: string
  Icon: ComponentType<{ className?: string }>
  iconClassName: string
}[] = [
  {
    title: 'Procurement',
    description:
      'Create, manage and track purchase orders, contracts and associated documents.',
    Icon: ProcurementIcon,
    iconClassName: 'h-[34px] w-[34px]',
  },
  {
    title: 'Finance',
    description:
      'Track finances, generate certificates and manage cashflow in real time.',
    Icon: FinanceIcon,
    iconClassName: 'h-[34px] w-[34px]',
  },
  {
    title: 'Project Management',
    description:
      'Track work completion and submit inspection requests instantly.',
    Icon: ProjectManagementIcon,
    iconClassName: 'h-[34px] w-[34px]',
  },
  {
    title: 'HSE Management',
    description:
      'Manage health and environmental safety. Conduct inspections, record findings and generate reports.',
    Icon: HseIcon,
    iconClassName: 'h-[34px] w-[31px]',
  },
  {
    title: 'Data Management',
    description:
      'Store and organise project files and records with consistent version control and data integrity.',
    Icon: DataIcon,
    iconClassName: 'h-[31px] w-[29px]',
  },
]

function FeatureTimeline() {
  return (
    <div className="flex shrink-0 flex-col items-center self-stretch py-1">
      {features.map((feature, index) => (
        <div key={feature.title} className="flex flex-1 flex-col items-center">
          <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-[46px] bg-hero-yellow text-primary-black">
            <feature.Icon className={feature.iconClassName} />
          </div>
          {index < features.length - 1 ? (
            <div className="w-1 flex-1 bg-hero-yellow" />
          ) : null}
        </div>
      ))}
    </div>
  )
}

export function ProductFeaturesSection() {
  return (
    <ScrollReveal as="section" className="w-full px-site py-[84px]">
      <div className="site-container flex flex-col items-start justify-between gap-9 lg:flex-row lg:gap-[35px]">
        <ScrollReveal delay={80} className="flex w-full flex-col gap-2.5 lg:w-[40%]">
          <div className="flex flex-col gap-3">
            <p className="t-eyebrow t-eyebrow-pill-yellow text-primary-black">
              Product Features
            </p>
            <h2 className="t-heading text-primary-black">
              Built for the complexity of modern construction
            </h2>
          </div>
          <p className="t-body text-primary-black">
            Builtric brings multiple stakeholders, data sources, and decision points into one
            unified intelligence platform.
          </p>
          <BuiltricButtonGroup className="py-3">
            <BuiltricButton label="Product Features" href="/builtric-features" />
            <BuiltricButton label="Try Now" href="/builtric-demo" variant="cta" />
          </BuiltricButtonGroup>
        </ScrollReveal>

        <ScrollReveal delay={160} className="flex w-full shrink-0 flex-row items-start gap-2.5 lg:w-auto">
          <FeatureTimeline />
          <div className="flex max-w-[329px] flex-col gap-11">
            {features.map((feature) => (
              <article key={feature.title} className="flex flex-col gap-0.5">
                <h3 className="t-title text-primary-black">
                  {feature.title}
                </h3>
                <p className="t-body text-primary-black">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </ScrollReveal>
  )
}
