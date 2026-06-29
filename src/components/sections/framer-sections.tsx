'use client'

import DashboardFramerComponent from '@/framer/dashboard'
import LinksProductFramerComponent from '@/framer/links-product'
import { BuiltricButton } from '@/components/builtric-button'
import { FramerButton, FramerProcurementTile } from '@/components/framer-wrappers'

/** Full features grid — used on /builtric-features only */
export function FeaturesShowcaseSection() {
  return (
    <section className="flex w-full flex-col items-center gap-10 px-9 py-20">
      <div className="flex w-full max-w-6xl flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex max-w-lg flex-col gap-4">
          <p className="text-xs">Product Features</p>
          <h2 className="font-archivo text-4xl font-bold md:text-5xl">
            Built for the complexity of modern construction
          </h2>
          <p className="text-base text-dark-grey">
            Builtric brings multiple stakeholders, data sources, and decision points into one
            unified intelligence platform
          </p>
          <div className="flex flex-wrap gap-2.5 py-3">
            <FramerButton label="Product Features" href="/builtric-features" />
            <FramerButton label="Try Now" href="/builtric-demo" variant="Try Yellow" />
          </div>
        </div>
        <LinksProductFramerComponent.Responsive />
      </div>
      <div className="grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <FramerProcurementTile variant="Procurement" />
        <FramerProcurementTile variant="Finance" />
        <FramerProcurementTile variant="Management" />
        <FramerProcurementTile variant="HSE" />
        <FramerProcurementTile variant="Data" />
      </div>
    </section>
  )
}

export function DashboardSection() {
  return (
    <section className="flex w-full justify-center px-4 py-10">
      <DashboardFramerComponent.Responsive />
    </section>
  )
}

export function DemoRibbonSection() {
  return (
    <section className="w-full bg-hero-yellow px-9 py-9">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center gap-11 min-[1200px]:flex-row min-[1200px]:items-center min-[1200px]:gap-6">
        <h3 className="w-full text-center font-archivo text-lg font-bold leading-none tracking-[-0.02em] text-primary-black min-[1200px]:flex-1 min-[1200px]:text-left min-[1200px]:text-2xl">
          Ready to bring intelligence to your construction project?
        </h3>
        <BuiltricButton
          label="Try Now"
          href="/builtric-demo"
          variant="try-black"
          className="h-[42px] w-full max-w-[212px] shrink-0 justify-center"
        />
      </div>
    </section>
  )
}
