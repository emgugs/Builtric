'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { BuiltricButton } from '@/components/builtric-button'

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
  },
  {
    key: 'enterprise',
    name: 'Enterprise',
    description: 'Large portfolios requiring ERP integration and dedicated support',
    highlighted: true,
    enterprise: true,
  },
]

const comparisonMatrix: MatrixCategory[] = [
  {
    title: 'Procurement management',
    rows: [
      {
        label: 'Contract & BQQ configuration',
        included: { standard: true, professional: true, enterprise: true },
      },
    ],
  },
  {
    title: 'Financial management',
    rows: [
      {
        label: 'End-to-end IPC and advanced handling',
        included: { standard: true, professional: true, enterprise: true },
      },
    ],
  },
  {
    title: 'Project management',
    rows: [
      {
        label: 'Project plans',
        included: { standard: true, professional: true, enterprise: true },
      },
      {
        label: 'Quality inspection & progress verification',
        included: { standard: true, professional: true, enterprise: true },
      },
    ],
  },
  {
    title: 'Master data management',
    rows: [
      {
        label: 'Centralised Item master',
        included: { standard: true, professional: true, enterprise: true },
      },
      {
        label: 'User & contract management',
        included: { standard: true, professional: true, enterprise: true },
      },
    ],
  },
  {
    title: 'Dashboard & reporting',
    rows: [
      {
        label: 'Project progress',
        included: { standard: true, professional: true, enterprise: true },
      },
      {
        label: 'Financials & contract health',
        included: { standard: true, professional: true, enterprise: true },
      },
    ],
  },
  {
    title: 'APIs for ERP integration',
    rows: [
      {
        label: 'Integration with external ERP systems',
        included: { standard: false, professional: true, enterprise: true },
      },
    ],
  },
  {
    title: 'Project cost estimation',
    rows: [
      {
        label: 'Estimation setup and configuration',
        included: { standard: false, professional: true, enterprise: true },
      },
    ],
  },
  {
    title: 'Dedicated success manager',
    rows: [
      {
        label: 'Implementation support & optimisation',
        included: { standard: false, professional: false, enterprise: true },
      },
      {
        label: 'Priority issue resolution',
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
      className="w-full max-w-[1224px] overflow-hidden rounded-[20px] bg-white"
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
                <span className="font-inter text-xs leading-[1.6] tracking-[-0.02em] text-primary-black/70">
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
                    <h2 className="font-archivo text-xl font-bold leading-none tracking-[-0.02em] text-primary-black sm:text-2xl">
                      {plan.name}
                    </h2>
                    <p className="font-inter text-xs leading-[1.4] tracking-[-0.01em] text-primary-black sm:text-sm sm:leading-[1.3]">
                      {plan.description}
                    </p>
                    <BuiltricButton
                      label="Book a demo"
                      href="/builtric-demo"
                      className="mt-1 h-[38px] w-full max-w-[160px] justify-center sm:h-[42px]"
                    />
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
                    <p className="font-inter text-base font-bold leading-[1.3] text-primary-black">
                      {category.title}
                    </p>
                  </th>
                </tr>
                {category.rows.map((row) => (
                  <tr key={`${category.title}-${row.label}`}>
                    <th
                      scope="row"
                      className="sticky left-0 z-10 border-b border-black/8 bg-white px-4 py-3 text-left font-normal sm:px-6 sm:py-3.5"
                    >
                      <p className="font-inter text-sm leading-[1.5] text-primary-black sm:text-base sm:leading-[1.3]">
                        {row.label}
                      </p>
                      {row.details?.map((detail) => (
                        <p
                          key={detail}
                          className="mt-1 font-inter text-xs leading-[1.6] tracking-[-0.02em] text-primary-black/70"
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

function CustomQuoteSection() {
  return (
    <section className="flex w-full justify-center bg-hero-yellow px-6 py-3">
      <div className="flex w-full max-w-[1200px] justify-center py-px">
        <div className="flex w-full max-w-[461px] flex-col items-center gap-2.5 px-4 text-center lg:max-w-[40%]">
          <h2 className="font-archivo text-[56px] font-bold leading-[1.1] text-primary-black">
            Get a custom quote
          </h2>
          <p className="max-w-[461px] font-inter text-base leading-[1.3] tracking-[-0.01em] text-primary-black">
            Fill out the form and our sales team will be in touch shortly with a customised quote
          </p>
          <Link
            href="/builtric-custom-quote"
            className="inline-flex h-9 w-[148px] items-center justify-center rounded-[4px] bg-primary-black font-inter text-sm font-semibold text-white no-underline transition-colors hover:bg-[rgb(54,62,71)]"
          >
            Fill form
          </Link>
        </div>
      </div>
    </section>
  )
}

export function PackagesPageContent() {
  return (
    <>
      <section className="flex w-full justify-center bg-primary-white px-9 py-[135px]">
        <div className="flex w-full max-w-[1200px] flex-col gap-[30px] px-9 py-6">
          <div className="flex flex-col gap-4">
            <p className="font-inter text-xs leading-[1.6] tracking-[-0.02em] text-primary-black">
              Packages
            </p>
            <h1 className="font-archivo text-[56px] font-bold leading-none text-primary-black">
              Solutions tailored to your scale
            </h1>
            <p className="mt-0 max-w-[631px] font-archivo text-[36px] leading-[1.3] text-primary-black">
              Flexible packages designed around how construction teams actually work
            </p>
          </div>

          <PackagesComparisonMatrix />
        </div>
      </section>

      <CustomQuoteSection />
    </>
  )
}
