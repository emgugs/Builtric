'use client'

import { ContactPageForm } from '@/components/contact-page-form'

export function ContactPageContent() {
  return (
    <section className="flex w-full justify-center bg-primary-white px-9 py-[135px]">
      <div className="flex w-full max-w-[1200px] flex-col gap-7 px-9 py-6 lg:flex-row lg:items-start">
        <div className="flex w-full max-w-[461px] flex-1 flex-col gap-4">
          <p className="font-inter text-xs leading-[1.6] tracking-[-0.02em] text-primary-black">
            Contact Us
          </p>
          <h1 className="font-archivo text-[56px] font-bold leading-none text-primary-black">
            Connect with our technology experts!
          </h1>
          <p className="font-inter text-base leading-[1.3] tracking-[-0.01em] text-primary-black">
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
