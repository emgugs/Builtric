import Image from 'next/image'
import { BuiltricButton, BuiltricButtonGroup } from '@/components/builtric-button'
import { BrandIcon, VisibilityIcon, WorkflowIcon } from '@/components/platform-section-icons'
import { ScrollReveal } from '@/components/scroll-reveal'

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full items-start justify-center px-site pb-9 pt-page-hero text-center min-[810px]:justify-start min-[810px]:text-left">
      <Image
        src="/images/hero.webp"
        alt="Construction site with workers and building structures"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <ScrollReveal immediate delay={100} className="hero-content relative z-10">
        <p className="t-eyebrow t-eyebrow-pill-white text-primary-black">
          Construction Management Software
        </p>
        <h1 className="hero-display text-primary-white">
          Build with
          <br />
          Intelligence
        </h1>
        <p className="hero-lead text-primary-white">
          Get total control of your construction projects to protect your margins, schedules, and
          mission-critical risks.
        </p>
        <BuiltricButtonGroup
          stackEqualWidth
          className="mx-auto w-full max-w-[240px] justify-center py-3 min-[810px]:mx-0 min-[810px]:max-w-none min-[810px]:justify-start"
        >
          <BuiltricButton label="Product Features" href="/builtric-features" onDark />
          <BuiltricButton label="Try Now" href="/builtric-demo" variant="cta" />
        </BuiltricButtonGroup>
      </ScrollReveal>
    </section>
  )
}

const PLATFORM_IMAGE =
  'https://framerusercontent.com/images/6hd1LgDoteYv4zGedrIZ5YWhAQ.png'

const PLATFORM_GRADIENT =
  'linear-gradient(176deg, rgb(255, 255, 255) 15%, rgb(255, 223, 79) 46%, rgb(255, 255, 255) 86%)'

const platformFeatures = [
  { label: 'Real-time project visibility', Icon: VisibilityIcon },
  { label: 'Tailored to your brand', Icon: BrandIcon },
  { label: 'Built for your workflow', Icon: WorkflowIcon },
] as const

export function PlatformSection() {
  return (
    <ScrollReveal
      as="section"
      className="w-full px-site py-10 min-[810px]:py-12 min-[810px]:pb-[87px] min-[1200px]:pt-[62px]"
      style={{ background: PLATFORM_GRADIENT }}
    >
      <div className="site-container flex min-w-0 flex-col-reverse items-stretch gap-8 min-[810px]:flex-row min-[810px]:items-start min-[810px]:gap-10">
        <ScrollReveal delay={80} className="z-[2] w-full min-w-0 min-[810px]:w-[45%]">
          <Image
            src={PLATFORM_IMAGE}
            alt="The Builtric dashboard"
            width={673}
            height={537}
            className="h-auto w-full max-w-full rounded-[24px]"
            sizes="(max-width: 809px) 100vw, 45vw"
          />
        </ScrollReveal>

        <ScrollReveal delay={160} className="z-[2] flex w-full min-w-0 flex-1 flex-col gap-2.5 text-left">
          <div className="flex flex-col gap-3 py-[7px]">
            <p className="t-eyebrow t-eyebrow-pill-white w-fit text-primary-black">
              Your site, always within sight
            </p>
            <h2 className="t-heading text-primary-black">
              One platform,{' '}
              <span className="text-dark-grey">One version of truth</span>
            </h2>
          </div>

          <div className="flex flex-col gap-2.5">
            <p className="t-section-lead text-primary-black">
              Real-time insight across cost, schedule, risk, and performance, from planning to
              handover.
            </p>

            <ul className="flex flex-col gap-2.5">
              {platformFeatures.map(({ label, Icon }) => (
                <li key={label} className="flex items-start gap-2">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary-black" />
                  <span className="t-body text-primary-black">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </ScrollReveal>
  )
}

export function TechPartnersSection() {
  const partners = [
    { name: 'Oracle', src: '/images/partners/oracle.svg', width: 123, height: 16 },
    { name: 'AWS', src: '/images/partners/aws.svg', width: 66, height: 39 },
    { name: 'Autodesk', src: '/images/partners/autodesk.svg', width: 79, height: 44 },
    { name: 'Microsoft', src: '/images/partners/microsoft.svg', width: 114, height: 24 },
  ] as const

  return (
    <ScrollReveal as="section" className="w-full bg-white px-site py-[105px]">
      <div className="site-container flex flex-col items-center gap-11 text-center">
        <h2 className="t-heading text-primary-black">Our technology partners</h2>
        <div className="flex flex-wrap items-center justify-center gap-[18px]">
          {partners.map((partner, index) => (
            <ScrollReveal
              key={partner.name}
              delay={index * 60}
              className="flex h-[79px] w-[173px] items-center justify-center rounded-lg bg-white"
            >
              <Image
                src={partner.src}
                alt={`${partner.name} logo`}
                width={partner.width}
                height={partner.height}
                className="h-auto w-auto max-h-[44px] max-w-[123px] opacity-70"
              />
            </ScrollReveal>
          ))}
        </div>
        <p className="t-section-lead mx-auto max-w-2xl text-dark-grey">
          Powered by the platforms construction teams rely on. Our technology partners bring
          enterprise-grade security, performance, and scalability to every project you manage in
          Builtric.
        </p>
      </div>
    </ScrollReveal>
  )
}

const ABOUT_PREVIEW_IMAGE =
  'https://framerusercontent.com/images/U2K6Lg4SXEQs90FjbyeS1gYePSs.jpg'

const ABOUT_PREVIEW_GRADIENT =
  'linear-gradient(210deg, rgb(255, 219, 52) 7%, rgb(245, 245, 245) 103%)'

export function AboutPreviewSection() {
  return (
    <ScrollReveal as="section" className="w-full px-site py-8 md:py-12">
      <div className="site-container flex flex-col overflow-hidden rounded-[20px] md:flex-row md:items-stretch">
        <div className="relative h-[388px] w-full shrink-0 md:aspect-[864/646] md:h-auto md:w-[52%]">
          <Image
            src={ABOUT_PREVIEW_IMAGE}
            alt="Project manager using Builtric on a tablet"
            fill
            className="object-cover"
            sizes="(max-width: 809px) 100vw, 624px"
          />
        </div>

        <div
          className="flex min-w-0 flex-1 flex-col justify-center px-6 py-8 md:px-8 md:py-12 lg:py-16"
          style={{ background: ABOUT_PREVIEW_GRADIENT }}
        >
          <div className="flex w-full flex-col gap-[21px]">
            <div className="flex flex-col gap-3 py-[7px] md:items-start">
              <p className="t-eyebrow t-eyebrow-pill-white text-primary-black">
                About Us
              </p>
              <h2 className="t-heading text-primary-black">
                Powering construction with data and intelligence
              </h2>
            </div>

            <div className="t-body flex flex-col gap-4 text-primary-black">
              <p>
                Builtric is a cloud-based construction intelligence platform designed for developers,
                owners, and operators managing complex, multi-stakeholder projects.
              </p>
              <p>
                We bring projects, people, data, and decisions into one unified system so leaders can
                see clearly, act early, and stay in control from planning to handover.
              </p>
            </div>

            <BuiltricButton
              label="See How It Works"
              href="/builtric-about"
              className="h-[42px] w-[156px] justify-center"
            />
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

const empowers = [
  {
    title: 'Clarity',
    description: 'One single source of project truth',
    image: 'https://framerusercontent.com/images/GUXU58dIe90c6NrGhuKKlxLZuk.png',
  },
  {
    title: 'Reliability',
    description: 'Enterprise-grade platform you can depend on',
    image: 'https://framerusercontent.com/images/uYioyWVjG4axS7ztvUVZM4ypEU.png',
  },
  {
    title: 'Control',
    description: 'Proactive insight into cost, schedule, and risk',
    image: 'https://framerusercontent.com/images/ifLhDmfotM16GJdicvPnpCzRjBI.png',
  },
  {
    title: 'Usability',
    description: 'Simple to adopt with fast onboarding',
    image: 'https://framerusercontent.com/images/s8zbMJ7crzfOhXFDoLn1cEsg6cs.png',
  },
]

export function EmpowersSection() {
  return (
    <ScrollReveal as="section" className="w-full bg-primary-white px-site py-40">
      <div className="site-container flex flex-col items-center gap-11">
        <div className="text-center">
          <h2 className="t-heading text-primary-black">Builtric empowers you</h2>
          <p className="t-section-lead mt-3 text-dark-grey">
            Builtric eliminates silos and connects every stakeholder to a single source of truth.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {empowers.map((item, index) => (
            <ScrollReveal
              key={item.title}
              delay={index * 80}
              className="flex flex-col items-center gap-4 text-center"
            >
              <Image src={item.image} alt={item.title} width={100} height={100} />
              <h3 className="t-title text-primary-black">{item.title}</h3>
              <p className="t-small text-dark-grey">{item.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </ScrollReveal>
  )
}
