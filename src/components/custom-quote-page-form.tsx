'use client'

import { useState } from 'react'
import {
  fieldClassName,
  formContainerClassName,
  phoneInputClassName,
  phoneSelectClassName,
} from '@/components/form-styles'

const COUNTRY_CODES = [
  { code: 'US', label: 'US +1' },
  { code: 'GB', label: 'UK +44' },
  { code: 'AE', label: 'UAE +971' },
  { code: 'SA', label: 'SA +966' },
  { code: 'PK', label: 'PK +92' },
  { code: 'IN', label: 'IN +91' },
  { code: 'AU', label: 'AU +61' },
  { code: 'CA', label: 'CA +1' },
] as const

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-inter text-sm font-medium text-[rgb(136,136,136)]">{children}</span>
  )
}

function FormField({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="flex w-full flex-col gap-2.5">
      <FieldLabel>{label}</FieldLabel>
      {children}
    </label>
  )
}

function SelectField({
  label,
  name,
  options,
  required = true,
  disabled = false,
}: {
  label: string
  name: string
  options: string[]
  required?: boolean
  disabled?: boolean
}) {
  return (
    <FormField label={label}>
      <select
        name={name}
        required={required}
        disabled={disabled}
        defaultValue=""
        className={`${fieldClassName} text-[#999999] [&:valid]:text-primary-black disabled:cursor-not-allowed disabled:opacity-60`}
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="text-primary-black">
            {option}
          </option>
        ))}
      </select>
    </FormField>
  )
}

export function CustomQuotePageForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const form = event.currentTarget
    const formData = new FormData(form)

    const payload = {
      constructionWork: String(formData.get('constructionWork') ?? ''),
      projectsPerYear: String(formData.get('projectsPerYear') ?? ''),
      projectSize: String(formData.get('projectSize') ?? ''),
      teamMembers: String(formData.get('teamMembers') ?? ''),
      mobileApp: String(formData.get('mobileApp') ?? ''),
      integrations: String(formData.get('integrations') ?? ''),
      startTimeline: String(formData.get('startTimeline') ?? ''),
      fullName: String(formData.get('fullName') ?? ''),
      companyName: String(formData.get('companyName') ?? ''),
      email: String(formData.get('email') ?? ''),
      countryCode: String(formData.get('countryCode') ?? ''),
      phone: String(formData.get('phone') ?? ''),
    }

    try {
      const response = await fetch('/api/custom-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = (await response.json()) as { error?: string }

      if (!response.ok) {
        throw new Error(data.error ?? 'Something went wrong. Please try again.')
      }

      setStatus('success')
      form.reset()
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className={`${formContainerClassName} text-center`}>
        <h2 className="t-title text-primary-black">Thank you!</h2>
        <p className="t-body text-primary-black">
          Your quote request has been submitted. Our sales team will be in touch shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="h-10 w-full rounded-md bg-primary-black font-inter text-sm font-semibold text-white transition-colors hover:bg-[rgb(47,53,61)]"
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form className={formContainerClassName} onSubmit={handleSubmit}>
      <SelectField
        label="What kind of construction work do you primarily undertake?"
        name="constructionWork"
        options={['Residential', 'Commercial', 'Industrial', 'Infrastructre', 'Mixed']}
        disabled={status === 'loading'}
      />
      <SelectField
        label="How many projects do you manage per year?"
        name="projectsPerYear"
        options={['1-5', '6-20', '21-50', '50+']}
        disabled={status === 'loading'}
      />
      <SelectField
        label="What is your average project size (budget)?"
        name="projectSize"
        options={['Under $100k', '$100k-$500k', '$500k-$2M', '$2M+']}
        disabled={status === 'loading'}
      />
      <SelectField
        label="How many team members need access to the software?"
        name="teamMembers"
        options={['1-5', '6-20', '21-50', '50+']}
        disabled={status === 'loading'}
      />
      <SelectField
        label="Do you require mobile app support for field teams?"
        name="mobileApp"
        options={['Yes', 'No', 'Nice to have']}
        disabled={status === 'loading'}
      />
      <SelectField
        label="Do you need integrations?"
        name="integrations"
        options={['Accounting systems', 'BIM', 'ERP', 'Cloud storage', 'Other']}
        disabled={status === 'loading'}
      />
      <SelectField
        label="When do you plan to start using the software?"
        name="startTimeline"
        options={['Immediately', '1-3 months', '3-6 months', 'Just exploring']}
        disabled={status === 'loading'}
      />

      <FormField label="Full name">
        <input
          name="fullName"
          type="text"
          required
          disabled={status === 'loading'}
          placeholder="Jane Smith"
          className={fieldClassName}
        />
      </FormField>

      <FormField label="Company name">
        <input
          name="companyName"
          type="text"
          required
          disabled={status === 'loading'}
          placeholder="Company"
          className={fieldClassName}
        />
      </FormField>

      <FormField label="Email">
        <input
          name="email"
          type="email"
          required
          disabled={status === 'loading'}
          placeholder="john.doe@company.com"
          className={fieldClassName}
        />
      </FormField>

      <FormField label="Phone(optional)">
        <div className="flex w-full gap-2.5">
          <select
            name="countryCode"
            defaultValue="US"
            disabled={status === 'loading'}
            aria-label="Country code selector"
            className={phoneSelectClassName}
          >
            {COUNTRY_CODES.map((country) => (
              <option key={country.code} value={country.code}>
                {country.label}
              </option>
            ))}
          </select>
          <input
            name="phone"
            type="tel"
            disabled={status === 'loading'}
            placeholder="Phone number"
            aria-label="Phone number input"
            className={phoneInputClassName}
          />
        </div>
      </FormField>

      {status === 'error' ? (
        <p className="rounded-md bg-red-50 px-3 py-2 font-inter text-sm text-red-700" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="h-10 w-full rounded-md bg-primary-black font-inter text-sm font-semibold text-white transition-colors hover:bg-[rgb(47,53,61)] active:bg-[rgb(26,29,33)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : 'Send Request'}
      </button>

      <p className="font-inter text-xs leading-[1.3] text-[rgb(99,99,99)]">
        By clicking this button, you agree to our{' '}
        <a href="/builtric-legal" className="underline">
          Privacy Notice
        </a>{' '}
        and{' '}
        <a href="/builtric-legal" className="underline">
          Terms of Service
        </a>
        .
      </p>
    </form>
  )
}
