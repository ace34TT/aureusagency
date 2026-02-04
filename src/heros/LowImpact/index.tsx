import React from 'react'

import type { Page } from '@/payload-types'

import RichText from '@/components/RichText'

type LowImpactHeroType =
  | {
      children?: React.ReactNode
      description?: never
      title?: never
    }
  | (Omit<Page['hero'], 'description' | 'title'> & {
      children?: never
      description?: Page['hero']['description']
      title?: Page['hero']['title']
    })

export const LowImpactHero: React.FC<LowImpactHeroType> = ({ children, description, title }) => {
  return (
    <div className="relative pt-32 pb-24 overflow-hidden bg-linear-to-b from-[#f9f2ff] to-white">
      {/* Background Atmosphere (Purple/Blue Blurs) */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden z-0"
        style={{
          maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
        }}
      >
        <div className="absolute top-[10%] left-1/2 -translate-x-[60%] h-[500px] w-[500px] rounded-full bg-purple-100/80 blur-[100px]" />
        <div className="absolute top-[20%] left-1/2 translate-x-[10%] h-[400px] w-[400px] rounded-full bg-blue-100/60 blur-[100px]" />
      </div>

      <div className="container mx-auto relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {children || (
            <>
              {title && (
                <div className="mb-6 text-5xl md:text-6xl font-(--font-marcellus) text-[#0F172A] leading-tight">
                  <RichText data={title} enableGutter={false} />
                </div>
              )}
              {description && (
                <div className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                  <RichText data={description} enableGutter={false} />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
