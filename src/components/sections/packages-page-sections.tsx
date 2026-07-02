'use client'

import { Fragment } from 'react'
import { BuiltricButton } from '@/components/builtric-button'
import { CtaRibbonCard } from '@/components/sections/framer-sections'

const CARD_SHADOW =
  '0px 0.6021873017743928px 1.5656869846134214px -0.8333333333333333px rgba(0, 0, 0, 0.12), 0px 2.288533303243457px 5.950186588432988px -1.6666666666666665px rgba(0, 0, 0, 0.12), 0px 10px 26px -2.5px rgba(0, 0, 0, 0.12)'

type PlanKey = 'standard' | 'professional' | 'enterprise'

type Plan = {
  key: PlanKey
  name: string
  description: string
  highlighted?: boolean
  enterprise?: boolean
}

type MatrixRow = {
  label: string
  details?: string[]
  included: Record<PlanKey, boolean>
}

type MatrixCategory = {
  title: string
  rows: MatrixRow[]
}

const plans: Plan[] = [
  {
    key: 'standard',
    name: 'Standard',
    description: 'Ideal for single-project teams getting started',
  },
  {
    key: 'professional',
    name: 'Professional',
    description: 'Best for growing teams managing multiple active projects',
    highlighted: true,
    enterprise: true,
  },
  {
    key: 'enterprise',
    name: 'Enterprise',
    description: 'Large portfolios requiring ERP integration and dedicated support',
    highlighted: true,
  },
]

const comparisonMatrix: MatrixCategory[] = [
  {
    title: 'Procurement Management',
    rows: [
      {
        label: 'Contract & BQQ Configuration',
        included: { standard: true, professional: true, enterprise: true },
      },
    ],
  },
  {
    title: 'Financial Management',
    rows: [
      {
        label: 'End-to-End IPC and Advanced Handling',
        included: { standard: true, professional: true, enterprise: true },
      },
    ],
  },
  {
    title: 'Project Management',
    rows: [
      {
        label: 'Project Plans',
        included: { standard: true, professional: true, enterprise: true },
      },
      {
        label: 'Quality Inspection & Progress Verification',
        included: { standard: true, professional: true, enterprise: true },
      },
    ],
  },
  {
    title: 'Master Data Management',
    rows: [
      {
        label: 'Centralised Item Master',
        included: { standard: true, professional: true, enterprise: true },
      },
      {
        label: 'User & Contract Management',
        included: { standard: true, professional: true, enterprise: true },
      },
    ],
  },
  {
    title: 'Dashboard & Reporting',
    rows: [
      {
        label: 'Project Progress',
        included: { standard: true, professional: true, enterprise: true },
      },
      {
        label: 'Financials & Contract Health',
        included: { standard: true, professional: true, enterprise: true },
      },
    ],
  },
  {
    title: 'APIs for ERP Integration',
    rows: [
      {
        label: 'Integration with External ERP Systems',
        included: { standard: false, professional: true, enterprise: true },
      },
    ],
  },
  {
    title: 'Project Cost Estimation',
    rows: [
      {
        label: 'Estimation Setup and Configuration',
        included: { standard: false, professional: true, enterprise: true },
      },
    ],
  },
  {
    title: 'Dedicated Success Manager',
    rows: [
      {
        label: 'Implementation Support & Optimisation',
        included: { standard: false, professional: false, enterprise: true },
      },
      {
        label: 'Priority Issue Resolution',
        included: { standard: false, professional: false, enterprise: true },
      },
    ],
  },
]

function TickIcon({ className = '' }: { className?: string }) {
  return (
    <span
      className={`relative inline-flex h-[23px] w-[23px] shrink-0 items-center justify-center rounded-[13px] ${className}`}
      style={{
        background: 'linear-gradient(326deg, #27a825 -34%, rgb(125, 255, 122) 100%)',
      }}
      aria-hidden
    >
      <svg
        width="13"
        height="9"
        viewBox="0 0 13 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mt-px"
      >
        <path
          d="M0 5.4 3.714 9 13 0"
          stroke="white"
          strokeWidth="2"
          fill="transparent"
        />
      </svg>
    </span>
  )
}

function PlanCell({ included, highlighted }: { included: boolean; highlighted?: boolean }) {
  return (
    <td
      className={`border-b border-black/8 px-3 py-3 text-center align-middle sm:px-4 sm:py-3.5 ${
        highlighted ? 'border-x border-hero-yellow/60 bg-hero-yellow/5' : ''
      }`}
    >
      {included ? (
        <TickIcon className="mx-auto" />
      ) : (
        <span className="inline-block h-[23px] w-[23px] text-lg leading-[23px] text-black/20" aria-hidden>
          —
        </span>
      )}
    </td>
  )
}

function PackagesComparisonMatrix() {
  return (
    <div
      className="hidden w-full overflow-hidden rounded-[20px] bg-white min-[810px]:block"
      style={{ boxShadow: CARD_SHADOW }}
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead>
            <tr>
              <th
                scope="col"
                className="sticky left-0 z-20 min-w-[200px] border-b border-black/10 bg-white px-4 py-5 text-left align-bottom sm:min-w-[260px] sm:px-6"
              >
                <span className="t-small text-primary-black/70">
                  Compare plans
                </span>
              </th>
              {plans.map((plan) => (
                <th
                  key={plan.key}
                  scope="col"
                  className={`min-w-[160px] border-b border-black/10 px-3 py-5 align-bottom sm:min-w-[200px] sm:px-4 ${
                    plan.highlighted ? 'border-x border-hero-yellow bg-hero-yellow/10' : 'bg-white'
                  } ${plan.enterprise ? 'bg-gradient-to-b from-white via-hero-yellow/15 to-white' : ''}`}
                >
                  <div className="flex flex-col items-center gap-2 text-center">
                    <h2 className="t-title text-primary-black">
                      {plan.name}
                    </h2>
                    <p className="t-small text-primary-black">
                      {plan.description}
                    </p>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonMatrix.map((category) => (
              <Fragment key={category.title}>
                <tr className="bg-black/[0.03]">
                  <th
                    scope="rowgroup"
                    colSpan={4}
                    className="sticky left-0 border-b border-black/8 px-4 py-3 text-left sm:px-6"
                  >
                    <p className="t-body font-bold text-primary-black">
                      {category.title}
                    </p>
                  </th>
                </tr>
                {category.rows.map((row) => (
                  <tr key={`${category.title}-${row.label}`}>
                    <th
                      scope="row"
                      className="sticky left-0 z-10 border-b border-black/8 bg-white py-3 pl-8 pr-4 text-left font-normal sm:py-3.5 sm:pl-10 sm:pr-6"
                    >
                      <p className="t-small text-primary-black">
                        – {row.label}
                      </p>
                      {row.details?.map((detail) => (
                        <p
                          key={detail}
                          className="t-small mt-1 text-primary-black/70"
                        >
                          {detail}
                        </p>
                      ))}
                    </th>
                    {plans.map((plan) => (
                      <PlanCell
                        key={plan.key}
                        included={row.included[plan.key]}
                        highlighted={plan.highlighted}
                      />
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function PackagesMobilePlans() {
  return (
    <div className="flex w-full flex-col gap-6 min-[810px]:hidden">
      {plans.map((plan) => (
        <article
          key={plan.key}
          className={`flex flex-col gap-5 overflow-hidden rounded-[20px] bg-white p-5 ${
            plan.highlighted ? 'ring-2 ring-inset ring-hero-yellow' : ''
          } ${plan.enterprise ? 'bg-gradient-to-b from-white via-hero-yellow/10 to-white' : ''}`}
          style={{ boxShadow: CARD_SHADOW }}
        >
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="t-title text-primary-black">
              {plan.name}
            </h2>
            <p className="t-small text-primary-black">
              {plan.description}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {comparisonMatrix.map((category) => (
              <div key={category.title} className="overflow-hidden rounded-xl bg-black/[0.03]">
                <p className="t-body px-4 py-3 font-bold text-primary-black">
                  {category.title}
                </p>
                <ul className="divide-y divide-black/8 bg-white">
                  {category.rows.map((row) => (
                    <li
                      key={`${plan.key}-${category.title}-${row.label}`}
                      className="flex items-center justify-between gap-3 py-3 pl-8 pr-4"
                    >
                      <p className="t-small min-w-0 flex-1 text-primary-black">
                        – {row.label}
                      </p>
                      {row.included[plan.key] ? (
                        <TickIcon />
                      ) : (
                        <span
                          className="inline-flex h-[23px] w-[23px] shrink-0 items-center justify-center text-lg leading-none text-black/20"
                          aria-hidden
                        >
                          —
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  )
}

function CustomQuoteSection() {
  return (
    <section
      className="relative z-20 w-full bg-primary-white px-site pb-16 pt-8 min-[810px]:pb-20"
      aria-label="Request a custom quote"
    >
      <div className="site-container">
        <CtaRibbonCard
          variant="yellow"
          title="Get your custom quote"
          description="Share your requirements and our sales team will get back to you with a custom quote."
          buttonLabel="Request a quote"
          buttonHref="/builtric-custom-quote"
        />
      </div>
    </section>
  )
}

export function PackagesPageContent() {
  return (
    <>
      <section className="w-full overflow-hidden bg-primary-white px-site pb-9 pt-page-hero">
        <div className="site-container flex flex-col gap-8">
          <p className="t-eyebrow t-eyebrow-pill-white w-fit text-primary-black">
            Packages
          </p>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-1 flex-col gap-2.5">
              <h1 className="page-hero-title text-primary-black">
                Solutions tailored to your scale
              </h1>
            </div>
            <p className="page-hero-lead flex-1 text-primary-black">
              Flexible packages designed around how construction teams actually work.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-primary-white px-site pb-16 min-[810px]:pb-20">
        <div className="site-container flex flex-col gap-6 py-4 min-[810px]:gap-[30px] min-[810px]:py-6">
          <PackagesMobilePlans />
          <PackagesComparisonMatrix />

          <div className="flex justify-center pt-2 min-[810px]:pt-4">
            <BuiltricButton
              label="Book a demo"
              href="/builtric-demo"
              className="h-[42px] w-full max-w-[212px] justify-center"
            />
          </div>
        </div>
      </section>

      <CustomQuoteSection />
    </>
  )
}
