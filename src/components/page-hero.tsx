type PageHeroProps = {
  eyebrow?: string
  title: string
  description?: string
  children?: React.ReactNode
}

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="w-full bg-primary-white px-site pb-16 pt-page-hero text-center">
      <div className="site-container flex flex-col items-center">
        {eyebrow ? (
          <p className="t-eyebrow t-eyebrow-pill-white mb-3 text-primary-black">{eyebrow}</p>
        ) : null}
        <h1 className="page-hero-title text-primary-black">{title}</h1>
        {description ? (
          <p className="page-hero-lead mx-auto mt-5 text-dark-grey">{description}</p>
        ) : null}
        {children}
      </div>
    </section>
  )
}
