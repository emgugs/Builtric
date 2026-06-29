'use client'

import { ContactPageForm } from '@/components/contact-page-form'

export function ContactPageContent() {
  return (
    <section className="flex w-full justify-center bg-primary-white px-site py-[135px]">
      <div className="flex w-full max-w-[1200px] flex-col gap-7 py-6 min-[810px]:px-9 lg:flex-row lg:items-start">
        <div className="flex w-full max-w-[461px] flex-1 flex-col gap-4">
          <p className="t-eyebrow text-primary-black">
            Contact Us
          </p>
          <h1 className="t-display text-primary-black">
            Connect with our technology experts!
          </h1>
          <p className="t-body text-primary-black">
            Whether you&apos;re onboarding your first project or managing a complex portfolio, the
            Builtric Support team is ready to assist you.
          </p>
        </div>

        <div className="w-full flex-1">
          <ContactPageForm />
        </div>
      </div>
    </section>
  )
}
