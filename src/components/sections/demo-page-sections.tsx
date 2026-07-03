'use client'

import Link from 'next/link'
import { ContactPageForm } from '@/components/contact-page-form'

function PortalAccessSection() {
  return (
    <section className="w-full bg-hero-yellow px-site py-cta-band">
      <div className="site-container flex justify-center">
        <div className="flex w-full max-w-[461px] flex-col items-center gap-4 px-4 text-center lg:max-w-[40%]">
          <h2 className="t-heading text-primary-black">
            Access your portal.
          </h2>
          <p className="t-section-lead text-primary-black">
            Already a Builtric user? Log In instead.
          </p>
          <Link
            href="https://app.builtric.com"
            className="inline-flex h-9 w-[148px] items-center justify-center rounded-[4px] bg-primary-black font-inter text-sm font-semibold text-white no-underline transition-colors hover:bg-[rgb(54,62,71)]"
          >
            Log In
          </Link>
        </div>
      </div>
    </section>
  )
}

export function DemoPageContent() {
  return (
    <>
      <section className="w-full bg-primary-white px-site pb-20 pt-page-hero min-[810px]:pb-24">
        <div className="site-container flex flex-col gap-7 py-6 lg:flex-row lg:items-start">
          <div className="flex w-full max-w-[461px] flex-1 flex-col gap-2.5 lg:max-w-[40%]">
            <p className="t-eyebrow t-eyebrow-pill-white w-fit text-primary-black">
              Try Builtric
            </p>
            <h1 className="page-hero-title text-primary-black">
              Book your personalised demo
            </h1>
            <p className="t-section-lead text-primary-black">
              Care about finishing your construction project on time and on budget? Fill out the
              form and our team will be in touch to book a personalised demo so you can try
              Builtric.
            </p>
          </div>

          <div className="w-full flex-1">
            <ContactPageForm />
          </div>
        </div>
      </section>

      <PortalAccessSection />
    </>
  )
}
