'use client'

import Link from 'next/link'
import { CustomQuotePageForm } from '@/components/custom-quote-page-form'

function PortalAccessSection() {
  return (
    <section className="flex w-full justify-center bg-hero-yellow px-6 py-3">
      <div className="flex w-full max-w-[1200px] justify-center py-px">
        <div className="flex w-full max-w-[461px] flex-col items-center gap-2.5 px-4 text-center lg:max-w-[40%]">
          <h2 className="font-archivo text-[56px] font-bold leading-[1.1] text-primary-black">
            Access your portal
          </h2>
          <p className="max-w-[461px] font-inter text-base leading-[1.3] tracking-[-0.01em] text-primary-black">
            Already a Builtric user? Log In instead.
          </p>
          <Link
            href="http://app.builtric.com"
            className="inline-flex h-9 w-[148px] items-center justify-center rounded-[4px] bg-primary-black font-inter text-sm font-semibold text-white no-underline transition-colors hover:bg-[rgb(54,62,71)]"
          >
            Log In
          </Link>
        </div>
      </div>
    </section>
  )
}

export function CustomQuotePageContent() {
  return (
    <>
      <section className="flex w-full justify-center bg-primary-white px-9 py-[132px]">
        <div className="flex w-full max-w-[1200px] flex-col gap-7 px-9 py-6 lg:flex-row lg:items-start">
          <div className="flex w-full max-w-[461px] flex-1 flex-col gap-2.5">
            <p className="font-inter text-xs leading-[1.6] tracking-[-0.02em] text-primary-black">
              Custom Package
            </p>
            <h1 className="font-archivo text-[56px] font-bold leading-none text-primary-black">
              Get a
              <br />
              customised quote
            </h1>
            <p className="font-inter text-base leading-[1.3] tracking-[-0.01em] text-primary-black">
              Fill out the form and our sales team will be in touch shortly with a customised quote,
              thoughtfully tailored to suit your business, objectives, and specific requirements.
            </p>
          </div>

          <div className="w-full flex-1">
            <CustomQuotePageForm />
          </div>
        </div>
      </section>

      <PortalAccessSection />
    </>
  )
}
