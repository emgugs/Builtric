'use client'

import { ContactPageForm } from '@/components/contact-page-form'

export function ContactPageContent() {
  return (
    <>
      <section className="w-full overflow-hidden bg-primary-white px-site pb-9 pt-page-hero">
        <div className="site-container flex flex-col gap-2.5">
          <p className="t-eyebrow t-eyebrow-pill-white w-fit text-primary-black">
            Contact Us
          </p>
          <h1 className="page-hero-title text-primary-black">
            Connect with our technology experts!
          </h1>
          <p className="page-hero-lead text-primary-black">
            Whether you&apos;re onboarding your first project or managing a complex portfolio, the
            Builtric Support team is ready to assist you.
          </p>
        </div>
      </section>

      <section className="w-full bg-primary-white px-site pb-20 min-[810px]:pb-24">
        <div className="site-container py-6 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          <div className="hidden lg:block" aria-hidden />
          <ContactPageForm />
        </div>
      </section>
    </>
  )
}
