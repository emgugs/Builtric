'use client'

import { useState } from 'react'
import {
  fieldClassName,
  formContainerClassName,
  phoneInputClassName,
  phoneSelectClassName,
  textareaClassName,
} from '@/components/form-styles'

const COMPANY_TYPES = [
  'Main Contractor',
  'Subcontractor',
  'Owner/Developer',
  'Government',
  'Project Manager',
  'Become a Reseller',
  'Other',
] as const

const REQUEST_TYPES = [
  'Demo Request',
  'General Information',
  'Sales Inquiry',
  'Technical Support',
  'Partnership',
  'Other',
] as const

const PACKAGE_TYPES = ['Standard', 'Professional', 'Enterprise'] as const

const COUNTRY_CODES = [
  { code: 'US', dial: '+1', label: 'US +1' },
  { code: 'GB', dial: '+44', label: 'UK +44' },
  { code: 'AE', dial: '+971', label: 'UAE +971' },
  { code: 'SA', dial: '+966', label: 'SA +966' },
  { code: 'PK', dial: '+92', label: 'PK +92' },
  { code: 'IN', dial: '+91', label: 'IN +91' },
  { code: 'AU', dial: '+61', label: 'AU +61' },
  { code: 'CA', dial: '+1', label: 'CA +1' },
] as const

type RequestType = (typeof REQUEST_TYPES)[number]

const fieldLabelClassName = 'font-inter text-sm font-medium text-[rgb(136,136,136)]'

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className={fieldLabelClassName}>{children}</span>
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

function SelectInput({
  name,
  value,
  onChange,
  placeholder,
  options,
  required = true,
  disabled = false,
}: {
  name: string
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  options: readonly string[]
  required?: boolean
  disabled?: boolean
}) {
  const sharedProps = {
    name,
    required,
    disabled,
    className: `${fieldClassName} text-[#999999] [&:valid]:text-primary-black disabled:cursor-not-allowed disabled:opacity-60`,
    children: (
      <>
        <option value="" disabled>
          {placeholder ?? 'Select…'}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="text-primary-black">
            {option}
          </option>
        ))}
      </>
    ),
  }

  if (onChange) {
    return (
      <select {...sharedProps} value={value ?? ''} onChange={(event) => onChange(event.target.value)}>
        {sharedProps.children}
      </select>
    )
  }

  return (
    <select {...sharedProps} defaultValue="">
      {sharedProps.children}
    </select>
  )
}

export function ContactPageForm() {
  const [requestType, setRequestType] = useState<RequestType | ''>('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const isDemoRequest = requestType === 'Demo Request'

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const form = event.currentTarget
    const formData = new FormData(form)

    const payload = {
      requestType: String(formData.get('requestType') ?? ''),
      companyType: String(formData.get('companyType') ?? ''),
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      countryCode: String(formData.get('countryCode') ?? ''),
      phone: String(formData.get('phone') ?? ''),
      message: String(formData.get('message') ?? ''),
      demoPackage: isDemoRequest ? String(formData.get('demoPackage') ?? '') : undefined,
      demoDate: isDemoRequest ? String(formData.get('demoDate') ?? '') : undefined,
      demoTime: isDemoRequest ? String(formData.get('demoTime') ?? '') : undefined,
    }

    try {
      const response = await fetch('/api/contact', {
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
      setRequestType('')
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
          Your request has been submitted. Our team will be in touch shortly.
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
      <FormField label="Type of Request">
        <SelectInput
          name="requestType"
          value={requestType}
          onChange={(value) => setRequestType(value as RequestType | '')}
          options={REQUEST_TYPES}
          disabled={status === 'loading'}
        />
      </FormField>

      {isDemoRequest ? (
        <>
          <FormField label="Package for demo">
            <SelectInput
              name="demoPackage"
              options={PACKAGE_TYPES}
              disabled={status === 'loading'}
            />
          </FormField>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <FormField label="Preferred demo date">
              <input
                name="demoDate"
                type="date"
                required
                disabled={status === 'loading'}
                min={new Date().toISOString().split('T')[0]}
                className={fieldClassName}
              />
            </FormField>

            <FormField label="Preferred demo time">
              <input
                name="demoTime"
                type="time"
                required
                disabled={status === 'loading'}
                className={fieldClassName}
              />
            </FormField>
          </div>
        </>
      ) : null}

      <FormField label="Type of Company">
        <SelectInput name="companyType" options={COMPANY_TYPES} disabled={status === 'loading'} />
      </FormField>

      <FormField label="Name">
        <input
          name="name"
          type="text"
          required
          disabled={status === 'loading'}
          placeholder="Jane Smith"
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

      <FormField label="Phone">
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

      <FormField label="Message">
        <textarea
          name="message"
          required={!isDemoRequest}
          disabled={status === 'loading'}
          placeholder={
            isDemoRequest
              ? 'Share any goals or questions for your demo (optional)'
              : 'How can we help you?'
          }
          className={textareaClassName}
        />
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
        {status === 'loading' ? 'Sending…' : 'Submit Request'}
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
