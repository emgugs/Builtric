type ContactFormProps = {
  title?: string
  submitLabel?: string
}

export function ContactForm({ title = 'Get in touch', submitLabel = 'Submit' }: ContactFormProps) {
  return (
    <form className="mx-auto flex w-full max-w-xl flex-col gap-4 rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
      <h2 className="t-title text-primary-black">{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          className="rounded-lg border border-black/15 px-4 py-3 text-sm outline-none focus:border-primary-black"
          placeholder="First name"
          name="firstName"
          required
        />
        <input
          className="rounded-lg border border-black/15 px-4 py-3 text-sm outline-none focus:border-primary-black"
          placeholder="Last name"
          name="lastName"
          required
        />
      </div>
      <input
        className="rounded-lg border border-black/15 px-4 py-3 text-sm outline-none focus:border-primary-black"
        placeholder="Work email"
        type="email"
        name="email"
        required
      />
      <input
        className="rounded-lg border border-black/15 px-4 py-3 text-sm outline-none focus:border-primary-black"
        placeholder="Company"
        name="company"
      />
      <input
        className="rounded-lg border border-black/15 px-4 py-3 text-sm outline-none focus:border-primary-black"
        placeholder="Phone"
        name="phone"
      />
      <textarea
        className="min-h-[120px] rounded-lg border border-black/15 px-4 py-3 text-sm outline-none focus:border-primary-black"
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
