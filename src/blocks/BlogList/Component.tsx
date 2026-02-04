import React from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { theme } from '@/utilities/theme'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'
import Link from 'next/link'
import type { BlogListBlock } from '@/payload-types'

export const BlogList = async (props: BlogListBlock) => {
  const { title, description, limit = 6 } = props

  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit,
    sort: '-publishedAt',
  })

  return (
    <section className="relative px-6 py-24 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[20%] right-[5%] h-125 w-125 rounded-full bg-purple-50/40 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[5%] h-125 w-125 rounded-full bg-blue-50/40 blur-[120px]" />
      </div>

      <div className="relative mx-auto container z-10">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className={`text-xs uppercase tracking-[0.35em] ${theme.inkSoft} mb-4`}>
            Blog & Actualités
          </p>
          <div className="text-4xl font-(--font-marcellus) text-[#0F172A] leading-tight mb-6">
            {title && <RichText data={title} enableGutter={false} />}
          </div>
          <div className={`text-lg ${theme.inkMuted}`}>
            {description && <RichText data={description} enableGutter={false} />}
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.docs.map((post) => {
            const { slug, title, meta, publishedAt, tags } = post
            const href = `/posts/${slug}`

            return (
              <Link href={href} key={post.id} className="group block h-full">
                <article className="flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    {meta?.image && typeof meta.image !== 'string' && (
                      <Media
                        resource={meta.image}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-8">
                    {/* Date & Category (if any) */}
                    {/* Date & Tags */}
                    <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500 mb-4 uppercase tracking-wider">
                      {publishedAt && (
                        <time dateTime={publishedAt} className="shrink-0">
                          {new Date(publishedAt).toLocaleDateString('fr-FR', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          })}
                        </time>
                      )}

                      {tags && Array.isArray(tags) && tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {tags.map((tag) => {
                            if (typeof tag === 'object' && tag !== null && 'name' in tag) {
                              return (
                                <span
                                  key={tag.id}
                                  className="bg-primary/5 text-primary px-2 py-1 rounded-md text-[10px] font-bold"
                                >
                                  {tag.name}
                                </span>
                              )
                            }
                            return null
                          })}
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-[#0F172A] mb-3 leading-snug group-hover:text-primary transition-colors font-(--font-marcellus)">
                      {title}
                    </h3>

                    <p className="text-slate-600 line-clamp-3 mb-6 flex-1 text-sm leading-relaxed">
                      {meta?.description}
                    </p>

                    <div className="flex items-center gap-3 pt-6 border-t border-slate-100 mt-auto">
                      <div className="text-xs font-semibold text-[#0F172A] uppercase tracking-wide">
                        Lire l&apos;article
                      </div>
                      <div className="w-8 h-[1px] bg-primary/50 group-hover:w-12 transition-all" />
                    </div>
                  </div>
                </article>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BlogList
