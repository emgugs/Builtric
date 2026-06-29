import Image from 'next/image'
import { BuiltricButton, BuiltricButtonGroup } from '@/components/builtric-button'
import { BrandIcon, VisibilityIcon, WorkflowIcon } from '@/components/platform-section-icons'

const HERO_IMAGE =
  'https://framerusercontent.com/images/aTaKgy1tAPVRGrJduMGUl8hre8.png'

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen w-full items-start bg-cover bg-center px-9 pb-9 pt-[120px]"
      style={{ backgroundImage: `url(${HERO_IMAGE})` }}
    >
      <div className="relative z-10 flex max-w-[680px] flex-col gap-3">
        <p className="font-inter text-xs tracking-tight text-primary-white">
          Construction Management Software
        </p>
        <h1 className="font-archivo text-5xl font-bold leading-none text-primary-white md:text-6xl">
          Build with Intelligence
        </h1>
        <p className="max-w-md font-archivo text-3xl leading-snug text-primary-white">
          Get total control of your construction projects to protect your margins, schedules, and
          mission-critical risks
        </p>
          <BuiltricButtonGroup className="py-3">
            <BuiltricButton label="Product Features" href="/builtric-features" />
            <BuiltricButton label="Try Now" href="/builtric-demo" variant="cta" />
          </BuiltricButtonGroup>
      </div>
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
    <section
      className="flex w-full flex-col items-center justify-center gap-0 overflow-hidden p-3 min-[810px]:gap-[23px] min-[810px]:px-9 min-[810px]:pb-[87px] min-[810px]:pt-9 min-[1200px]:flex-row min-[1200px]:items-start min-[1200px]:gap-10 min-[1200px]:pt-[62px]"
      style={{ background: PLATFORM_GRADIENT }}
    >
      <div className="z-[2] w-full min-[1200px]:w-[38%]">
        <Image
          src={PLATFORM_IMAGE}
          alt="The Builtric dashboard"
          width={673}
          height={537}
          className="h-auto w-full rounded-[24px]"
        />
      </div>

      <div className="z-[2] flex w-full flex-col gap-2.5 min-[1200px]:w-[50%]">
        <div className="flex flex-col gap-3 py-[7px]">
          <p className="font-inter text-xs leading-[1.6] tracking-[-0.02em] text-primary-black">
            Your site, always within sight
          </p>
          <h2 className="font-archivo text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-primary-black min-[810px]:text-[56px]">
            One platform,{' '}
            <span className="text-dark-grey">One version of truth</span>
          </h2>
        </div>

        <div className="flex flex-col gap-2.5">
          <p className="font-archivo text-2xl leading-[1.1] tracking-[-0.02em] text-primary-black min-[810px]:text-[32px]">
            Real-time insight across cost, schedule, risk, and performance, from planning to
            handover
          </p>

          <ul className="flex flex-col gap-2.5">
            {platformFeatures.map(({ label, Icon }) => (
              <li key={label} className="flex items-center gap-[5px]">
                <Icon className="h-4 w-4 shrink-0 text-primary-black" />
                <span className="font-inter text-base leading-[1.3] tracking-[-0.01em] text-primary-black">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
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
    <section className="flex w-full flex-col items-center gap-11 bg-white px-8 py-[105px] text-center">
      <h2 className="font-archivo text-4xl font-bold md:text-5xl">Our technology partners</h2>
      <div className="flex flex-wrap items-center justify-center gap-[18px]">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex h-[79px] w-[173px] items-center justify-center rounded-lg bg-white"
          >
            <Image
              src={partner.src}
              alt={`${partner.name} logo`}
              width={partner.width}
              height={partner.height}
              className="h-auto w-auto max-h-[44px] max-w-[123px] opacity-70"
            />
          </div>
        ))}
      </div>
      <p className="max-w-2xl text-base text-dark-grey">
        Powered by the platforms construction teams rely on. Our technology partners bring
        enterprise-grade security, performance, and scalability to every project you manage in
        Builtric
      </p>
    </section>
  )
}

const ABOUT_PREVIEW_IMAGE =
  'https://framerusercontent.com/images/U2K6Lg4SXEQs90FjbyeS1gYePSs.jpg'

const ABOUT_PREVIEW_GRADIENT =
  'linear-gradient(210deg, rgb(255, 219, 52) 7%, rgb(245, 245, 245) 103%)'

export function AboutPreviewSection() {
  return (
    <section className="flex w-full flex-col md:flex-row md:items-stretch">
      <div className="relative h-[388px] w-full md:h-auto md:min-h-[646px] md:flex-[1_1_60%]">
        <Image
          src={ABOUT_PREVIEW_IMAGE}
          alt="Project manager using Builtric on a tablet"
          fill
          className="object-cover"
          sizes="(max-width: 809px) 100vw, 60vw"
        />
      </div>

      <div
        className="flex w-full flex-col justify-center px-8 py-6 md:w-[40%] md:min-h-[719px] md:px-8 md:py-[160px]"
        style={{ background: ABOUT_PREVIEW_GRADIENT }}
      >
        <div className="flex w-full flex-col gap-[21px] p-6 md:max-w-none">
          <div className="flex flex-col gap-3 py-[7px] md:items-start">
            <p className="font-inter text-xs leading-[1.6] tracking-[-0.02em] text-primary-black">
              About Us
            </p>
            <h2 className="font-archivo text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-primary-black md:text-[56px]">
              Powering construction with data and intelligence
            </h2>
          </div>

          <div className="flex flex-col gap-4 font-inter text-base leading-[1.3] tracking-[-0.01em] text-primary-black">
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
            label="Find Out More"
            href="/builtric-about"
            className="h-[42px] w-[156px] justify-center"
          />
        </div>
      </div>
    </section>
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
    <section className="flex w-full flex-col items-center gap-11 bg-primary-white px-8 py-40">
      <div className="max-w-3xl text-center">
        <h2 className="font-archivo text-4xl font-bold md:text-5xl">Builtric empowers you</h2>
        <p className="mt-3 text-base text-dark-grey">
          Builtric eliminates silos and connects every stakeholder to a single source of truth
        </p>
      </div>
      <div className="grid w-full max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {empowers.map((item) => (
          <div key={item.title} className="flex flex-col items-center gap-4 text-center">
            <Image src={item.image} alt="" width={100} height={100} />
            <h3 className="font-archivo text-xl font-bold">{item.title}</h3>
            <p className="text-sm text-dark-grey">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
