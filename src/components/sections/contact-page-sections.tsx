'use client'

import { ContactPageForm } from '@/components/contact-page-form'

export function ContactPageContent() {
  return (
    <section className="w-full bg-primary-white px-site pb-20 pt-page-hero min-[810px]:pb-24">
      <div className="site-container flex flex-col gap-7 py-6 lg:flex-row lg:items-start">
        <div className="flex w-full max-w-[461px] flex-1 flex-col gap-2.5 lg:max-w-[40%]">
          <p className="t-eyebrow t-eyebrow-pill-white w-fit text-primary-black">
            Contact Us
          </p>
          <h1 className="page-hero-title text-primary-black">
            Talk to the Builtric team
          </h1>
          <p className="page-hero-lead text-primary-black">
            Have a question about Builtric, pricing, implementation, or partnerships? Share your
            details and our team will get back to you.
          </p>
        </div>

        <div className="w-full flex-1">
          <ContactPageForm />
        </div>
      </div>
    </section>
  )
}
