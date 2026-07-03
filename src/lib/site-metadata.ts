import type { Metadata } from 'next'
import { newsArticles } from '@/data/news'

export const SITE_URL = 'https://builtric.com'
export const SITE_NAME = 'Builtric'
export const DEFAULT_OG_IMAGE = '/images/hero.webp'

export const DEFAULT_DESCRIPTION =
  'Get total control of your construction projects to protect your margins, schedules, and mission-critical risks.'

export const SOCIAL_PROFILES = [
  'https://www.linkedin.com/company/builtric/',
  'https://www.instagram.com/builtric.official/',
] as const

type PageMetaInput = {
  title: string
  description: string
  path: string
  openGraphType?: 'website' | 'article'
}

export function pageMetadata({
  title,
  description,
  path,
  openGraphType = 'website',
}: PageMetaInput): Metadata {
  const canonicalPath = path.startsWith('/') ? path : `/${path}`

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      siteName: SITE_NAME,
      type: openGraphType,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} construction management software`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  }
}

export const pageSeo = {
  about: pageMetadata({
    title: 'About Builtric — Construction Intelligence Platform',
    description:
      'Learn how Builtric helps construction teams unify project data, improve decisions, and deliver projects with greater transparency and control.',
    path: '/builtric-about',
  }),
  contact: pageMetadata({
    title: 'Contact Builtric — Talk to Our Team',
    description:
      'Have a question about Builtric, pricing, implementation, or partnerships? Share your details and our team will get back to you.',
    path: '/builtric-contact',
  }),
  customQuote: pageMetadata({
    title: 'Custom Construction Software Quote',
    description:
      'Request a customised Builtric quote tailored to your construction workflows, team size, integrations, and delivery goals.',
    path: '/builtric-custom-quote',
  }),
  demo: pageMetadata({
    title: 'Book a Builtric Demo',
    description:
      'Book a personalised Builtric demo and see how construction teams unify procurement, finance, and project delivery in one platform.',
    path: '/builtric-demo',
  }),
  features: pageMetadata({
    title: 'Construction Management Software Features',
    description:
      'Explore Builtric features for procurement, finance, project management, dashboards, and secure construction data in one platform.',
    path: '/builtric-features',
  }),
  legal: pageMetadata({
    title: 'Privacy Policy & Terms of Service',
    description:
      'Read the Builtric privacy policy and terms of service covering data handling, platform use, billing, and support.',
    path: '/builtric-legal',
  }),
  news: pageMetadata({
    title: 'Builtric News & Product Updates',
    description:
      'Explore Builtric product updates, company news, partnerships, and insights for construction project teams.',
    path: '/builtric-news',
  }),
  packages: pageMetadata({
    title: 'Construction Software Packages & Pricing',
    description:
      'Compare Builtric Standard, Professional, and Enterprise packages designed for how construction teams actually work.',
    path: '/builtric-packages',
  }),
  whoWeServe: pageMetadata({
    title: 'Construction Software for Every Role',
    description:
      'See how Builtric supports contractors, project managers, developers, and consultants with role-specific construction tools.',
    path: '/builtric-who-we-serve',
  }),
} as const

export function newsArticleMetadata(slug: string): Metadata {
  const article = newsArticles.find((item) => item.slug === slug)

  if (!article) {
    return pageSeo.news
  }

  return pageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/builtric-news/${slug}`,
    openGraphType: 'article',
  })
}

export const staticRoutes = [
  '/',
  '/builtric-about',
  '/builtric-contact',
  '/builtric-custom-quote',
  '/builtric-demo',
  '/builtric-features',
  '/builtric-legal',
  '/builtric-news',
  '/builtric-packages',
  '/builtric-who-we-serve',
] as const
