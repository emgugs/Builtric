'use client'

const COMPANY_TYPES = [
  'Main Contractor',
  'Subcontractor',
  'Owner/Developer',
  'Government',
  'Other',
  'Project Manager',
  'Become a Reseller',
] as const

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

const fieldClassName =
  'h-10 w-full rounded-[10px] border border-[rgba(136,136,136,0.1)] bg-white px-3 font-inter text-sm leading-[1.2] text-primary-black outline-none transition-colors placeholder:text-[#999999] focus:border-[#0099ff] focus:ring-1 focus:ring-[#0099ff]'

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

export function ContactPageForm() {
  return (
    <form
      className="flex w-full flex-col gap-5 p-5"
      onSubmit={(event) => {
        event.preventDefault()
      }}
    >
      <FormField label="Type of Company">
        <select
          name="companyType"
          required
          defaultValue=""
          className={`${fieldClassName} text-[#999999] [&:valid]:text-primary-black`}
        >
          <option value="" disabled>
            Select…
          </option>
          {COMPANY_TYPES.map((type) => (
            <option key={type} value={type} className="text-primary-black">
              {type}
            </option>
          ))}
        </select>
      </FormField>

      <FormField label="Name">
        <input
          name="name"
          type="text"
          required
          placeholder="Jane Smith"
          className={fieldClassName}
        />
      </FormField>

      <FormField label="Email">
        <input
          name="email"
          type="email"
          required
          placeholder="john.doe@company.com"
          className={fieldClassName}
        />
      </FormField>

      <FormField label="Phone">
        <div className="flex w-full gap-2.5">
          <select
            name="countryCode"
            defaultValue="US"
            aria-label="Country code selector"
            className="h-10 shrink-0 rounded-lg border border-[rgb(238,238,238)] bg-white px-4 font-inter text-sm text-primary-black outline-none focus:border-[#0099ff] focus:bg-[rgb(245,245,245)]"
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
            placeholder="Phone number"
            aria-label="Phone number input"
            className="h-10 min-w-0 flex-1 rounded-lg border border-[rgb(238,238,238)] bg-white px-4 font-inter text-sm text-primary-black outline-none placeholder:text-[#999999] focus:border-[#0099ff] focus:bg-[rgb(245,245,245)]"
          />
        </div>
      </FormField>

      <button
        type="submit"
        className="h-10 w-full rounded-md bg-primary-black font-inter text-sm font-semibold text-white transition-colors hover:bg-[rgb(47,53,61)] active:bg-[rgb(26,29,33)]"
      >
        Send Request
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
