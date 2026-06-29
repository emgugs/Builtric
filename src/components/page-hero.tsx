type PageHeroProps = {
  eyebrow?: string
  title: string
  description?: string
  children?: React.ReactNode
}

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="flex w-full flex-col items-center bg-primary-white px-6 py-24 text-center">
      {eyebrow ? <p className="mb-3 text-xs uppercase tracking-wide text-dark-grey">{eyebrow}</p> : null}
      <h1 className="max-w-4xl font-archivo text-4xl font-bold leading-tight md:text-6xl">{title}</h1>
      {description ? (
        <p className="mt-5 max-w-2xl text-lg text-dark-grey">{description}</p>
      ) : null}
      {children}
    </section>
  )
}
