type PageHeroProps = {
  eyebrow?: string
  title: string
  description?: string
  children?: React.ReactNode
}

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="flex w-full flex-col items-center bg-primary-white px-site py-24 text-center">
      {eyebrow ? <p className="t-eyebrow mb-3 text-dark-grey">{eyebrow}</p> : null}
      <h1 className="t-display max-w-4xl text-primary-black">{title}</h1>
      {description ? (
        <p className="t-body-lg mt-5 max-w-2xl text-dark-grey">{description}</p>
      ) : null}
      {children}
    </section>
  )
}
