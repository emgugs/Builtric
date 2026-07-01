import {
  fieldClassName,
  formContainerClassName,
  textareaClassName,
} from '@/components/form-styles'

type ContactFormProps = {
  title?: string
  submitLabel?: string
}

export function ContactForm({ title = 'Get in touch', submitLabel = 'Submit' }: ContactFormProps) {
  return (
    <form className={`${formContainerClassName} mx-auto max-w-xl gap-4 p-8`}>
      <h2 className="t-title text-primary-black">{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          className={fieldClassName}
          placeholder="First name"
          name="firstName"
          required
        />
        <input
          className={fieldClassName}
          placeholder="Last name"
          name="lastName"
          required
        />
      </div>
      <input
        className={fieldClassName}
        placeholder="Work email"
        type="email"
        name="email"
        required
      />
      <input
        className={fieldClassName}
        placeholder="Company"
        name="company"
      />
      <input
        className={fieldClassName}
        placeholder="Phone"
        name="phone"
      />
      <textarea
        className={textareaClassName}
        placeholder="How can we help?"
        name="message"
      />
      <button
        type="submit"
        className="rounded-full bg-primary-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
      >
        {submitLabel}
      </button>
    </form>
  )
}
