'use client'

import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import { SiteShell } from '@/components/site-shell'
import { newsArticles } from '@/data/news'

export default function NewsArticlePage() {
  const params = useParams<{ slug: string }>()
  const slug = params.slug
  const article = newsArticles.find((item) => item.slug === slug)

  if (!article) {
    notFound()
  }

  return (
    <SiteShell>
      <article className="w-full px-site pb-24 pt-page-hero">
        <div className="site-container mx-auto flex max-w-3xl flex-col gap-6">
        <Link href="/builtric-news" className="t-small font-medium text-dark-grey hover:underline">
          ← Back to news
        </Link>
        <h1 className="t-heading text-primary-black">{article.title}</h1>
        <p className="t-body-lg text-dark-grey">{article.excerpt}</p>
        <div className="t-body space-y-4 text-dark-grey">
          <p>
            This article is synced from the Builtric Framer CMS. Replace this placeholder body with
            CMS content when Payload is connected.
          </p>
          <p>
            Builtric helps construction teams unify procurement, finance, project delivery, and
            reporting into one intelligence platform—so leaders can act early and stay in control from
            planning to handover.
          </p>
        </div>
        </div>
      </article>
    </SiteShell>
  )
}
