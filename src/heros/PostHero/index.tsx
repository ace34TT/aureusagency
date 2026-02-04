import { formatDateTime } from 'src/utilities/formatDateTime'
import React from 'react'
import Link from 'next/link'

import type { Post } from '@/payload-types'
import { formatAuthors } from '@/utilities/formatAuthors'
import { Media } from '@/components/Media'
import { MdArrowBackIos } from 'react-icons/md'

export const PostHero: React.FC<{
  post: Post
}> = ({ post }) => {
  const { categories, heroImage, populatedAuthors, publishedAt, title } = post

  const hasAuthors =
    populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== ''

  return (
    <div className="relative min-h-125 flex items-center justify-center">
      {/* Content Card */}
      <div className="container relative z-10 flex justify-center rounded-2xl overflow-hidden ">
        {heroImage && typeof heroImage !== 'string' && (
          <Media fill priority imgClassName="object-cover" resource={heroImage} />
        )}
        <div className="backdrop-blur-xs shadow-2xl rounded-3xl p-8 md:p-12 w-full mx-auto">
          <Link
            href="/posts"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-primary transition-colors mb-8"
            title="Retour aux articles"
          >
            <MdArrowBackIos className={'-mr-1.5'} />
          </Link>

          <div className="uppercase text-sm mb-4 text-primary font-bold tracking-wider">
            {categories?.map((category, index) => {
              if (typeof category === 'object' && category !== null) {
                const { title: categoryTitle } = category

                const titleToUse = categoryTitle || 'Untitled category'

                const isLast = index === categories.length - 1

                return (
                  <React.Fragment key={index}>
                    {titleToUse}
                    {!isLast && <React.Fragment>, &nbsp;</React.Fragment>}
                  </React.Fragment>
                )
              }
              return null
            })}
          </div>

          <h1 className="mb-8 text-3xl md:text-5xl font-bold text-white leading-tight">{title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-slate-600 border-t border-slate-100 pt-6">
            {hasAuthors && (
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold uppercase tracking-wide">Par</span>
                <span className="text-slate-900 font-medium">
                  {formatAuthors(populatedAuthors)}
                </span>
              </div>
            )}
            {publishedAt && (
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
                <time dateTime={publishedAt} className="text-white font-medium">
                  {formatDateTime(publishedAt)}
                </time>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
