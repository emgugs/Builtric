'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BuiltricButton } from '@/components/builtric-button'
import { DemoRibbonSection } from '@/components/sections/framer-sections'
import { newsArticles } from '@/data/news'

const HERO_IMAGE = 'https://framerusercontent.com/images/ic0LJJJs3EVPM2Ebxg074jv3vc.jpg'

function NewsHeroSection() {
  return (
    <>
      <section className="w-full overflow-hidden px-site pb-9 pt-page-hero">
        <div className="site-container flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-1 flex-col gap-2.5">
            <h1 className="page-hero-title text-primary-black">
              The latest from Builtric
            </h1>
            <div className="py-3">
              <BuiltricButton label="Try Now" href="/builtric-demo" variant="cta" />
            </div>
          </div>
          <p className="page-hero-lead flex-1 text-primary-black">
            Explore product updates, company news, partnerships, and the latest from the Builtric
            team.
          </p>
        </div>
      </section>

      <section className="relative h-[400px] w-full overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Construction workers during sunset"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </section>
    </>
  )
}

function NewsArticlesSection() {
  return (
    <section className="w-full bg-primary-white px-site py-14">
      <div className="site-container flex flex-col gap-8">
        <h2 className="t-heading text-primary-black">Latest articles</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {newsArticles.map((article) => (
            <article
              key={article.slug}
              className="flex flex-col gap-3 rounded-[20px] border border-black/10 bg-white p-6 shadow-sm"
            >
              <h3 className="t-title text-primary-black">
                <Link
                  href={`/builtric-news/${article.slug}`}
                  className="text-primary-black no-underline transition-colors hover:text-dark-grey"
                >
                  {article.title}
                </Link>
              </h3>
              <p className="t-body text-dark-grey">{article.excerpt}</p>
              <Link
                href={`/builtric-news/${article.slug}`}
                className="t-small font-medium text-primary-black no-underline hover:underline"
              >
                Read article
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function NewsPageContent() {
  return (
    <>
      <NewsHeroSection />
      <NewsArticlesSection />
      <DemoRibbonSection />
    </>
  )
}
