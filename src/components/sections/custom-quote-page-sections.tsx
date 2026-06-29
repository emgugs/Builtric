'use client'

import Link from 'next/link'
import { CustomQuotePageForm } from '@/components/custom-quote-page-form'

function PortalAccessSection() {
  return (
    <section className="flex w-full justify-center bg-hero-yellow px-site py-cta-band">
      <div className="flex w-full max-w-[1200px] justify-center">
        <div className="flex w-full max-w-[461px] flex-col items-center gap-4 px-4 text-center lg:max-w-[40%]">
          <h2 className="t-heading text-primary-black">
            Access your portal
          </h2>
          <p className="t-body max-w-[461px] text-primary-black">
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
      <section className="flex w-full justify-center bg-primary-white px-site py-[132px]">
        <div className="flex w-full max-w-[1200px] flex-col gap-7 py-6 min-[810px]:px-9 lg:flex-row lg:items-start">
          <div className="flex w-full max-w-[461px] flex-1 flex-col gap-2.5">
            <p className="t-eyebrow text-primary-black">
              Custom Package
            </p>
            <h1 className="t-display text-primary-black">
              Get a
              <br />
              customised quote
            </h1>
            <p className="t-body text-primary-black">
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
