'use client'

import DashboardFramerComponent from '@/framer/dashboard'
import LinksProductFramerComponent from '@/framer/links-product'
import { BuiltricButton } from '@/components/builtric-button'
import { FramerButton, FramerProcurementTile } from '@/components/framer-wrappers'

/** Full features grid — used on /builtric-features only */
export function FeaturesShowcaseSection() {
  return (
    <section className="w-full px-site py-20">
      <div className="site-container flex flex-col gap-10">
      <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex max-w-lg flex-col gap-4">
          <p className="t-eyebrow text-primary-black">Product Features</p>
          <h2 className="t-heading text-primary-black">
            Built for the complexity of modern construction
          </h2>
          <p className="t-section-lead text-dark-grey">
            Builtric brings multiple stakeholders, data sources, and decision points into one
            unified intelligence platform.
          </p>
          <div className="flex flex-wrap gap-2.5 py-3">
            <FramerButton label="Product Features" href="/builtric-features" />
            <FramerButton label="Try Now" href="/builtric-demo" variant="Try Yellow" />
          </div>
        </div>
        <LinksProductFramerComponent.Responsive />
      </div>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <FramerProcurementTile variant="Procurement" />
        <FramerProcurementTile variant="Finance" />
        <FramerProcurementTile variant="Management" />
        <FramerProcurementTile variant="HSE" />
        <FramerProcurementTile variant="Data" />
      </div>
      </div>
    </section>
  )
}

export function DashboardSection() {
  return (
    <section className="w-full px-site py-10">
      <div className="site-container">
        <DashboardFramerComponent.Responsive />
      </div>
    </section>
  )
}

export function DemoRibbonCard({
  className = '',
  variant = 'white',
}: {
  className?: string
  variant?: 'white' | 'yellow'
}) {
  const bgClass = variant === 'yellow' ? 'bg-hero-yellow' : 'bg-white'

  return (
    <div
      className={`flex flex-col items-center gap-6 rounded-[20px] ${bgClass} px-6 py-8 min-[1200px]:flex-row min-[1200px]:items-center min-[1200px]:justify-between min-[1200px]:gap-8 min-[1200px]:px-10 min-[1200px]:py-9 ${className}`}
      style={{
        boxShadow:
          '0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)',
      }}
    >
      <h3 className="t-heading text-center text-primary-black min-[1200px]:flex-1 min-[1200px]:text-left">
        Ready to bring intelligence to your construction project?
      </h3>
      <BuiltricButton
        label="Try Now"
        href="/builtric-demo"
        variant="try-black"
        className="h-[42px] w-full max-w-[212px] shrink-0 justify-center"
      />
    </div>
  )
}

export function DemoRibbonSection({
  variant = 'white',
}: {
  variant?: 'white' | 'yellow'
}) {
  return (
    <section className="relative z-20 w-full px-site pb-0 pt-8" aria-label="Book a demo">
      <div className="site-container">
        <DemoRibbonCard className="translate-y-[10%]" variant={variant} />
      </div>
    </section>
  )
}
