'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'
import Link from 'next/link'
import { theme } from '@/utilities/theme'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, title, description }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    // <section className={'container mx-auto py-24'}>
    //   <div className="max-w-146 md:text-center mx-auto ">
    //     {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
    //     {Array.isArray(links) && links.length > 0 && (
    //       <ul className="flex md:justify-center gap-4">
    //         {links.map(({ link }, i) => {
    //           return (
    //             <li key={i}>
    //               <CMSLink {...link} />
    //             </li>
    //           )
    //         })}
    //       </ul>
    //     )}
    //   </div>
    //   {/*<div className="min-h-[80vh] select-none">*/}
    //   {/*  {media && typeof media === 'object' && (*/}
    //   {/*    <Media fill imgClassName="-z-10 object-cover" priority resource={media} />*/}
    //   {/*  )}*/}
    //   {/*</div>*/}
    // </section>
    <section
      className={`relative min-h-screen overflow-hidden px-6 pb-24 pt-28 flex items-center justify-center bg-[#F5F2EB]`}
    >
      <div className="relative mx-auto container">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-[#0F172A]/15 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#0F172A]/70">
              <span className="h-2 w-2 rounded-full bg-[#0F172A]" />
              Nouvelle ere digitale
            </div>

            <h1
              className={
                'mt-6 text-4xl font-(--font-marcellus) leading-tight text-[#0F172A] md:text-6xl'
              }
            >
              Des experiences web qui ressemblent a votre marque, pas a un template.
            </h1>

            <p className={'mt-6 max-w-xl text-lg text-[#0F172A]/70 md:text-xl'}>
              Nous concevons des interfaces sur mesure, avec un rythme visuel fort et des parcours
              nets, pour transformer vos visiteurs en clients decis.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-8">
              <Link
                href="/contact"
                className={`inline-flex items-center justify-center ${theme.button}`}
              >
                Demarrer un projet
              </Link>
              <Link href="/realisations" className={theme.buttonGhost}>
                Voir les etudes
                <span className="text-lg">→</span>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-4xl border border-[#0F172A]/10 bg-white/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.2)] backdrop-blur">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[#0F172A]/60">
                <span>Pulse</span>
                <span>04 / 09</span>
              </div>
              <div className="mt-10 space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#0F172A]/50">Conversion</p>
                  <div className="mt-3 h-2 rounded-full bg-[#0F172A]/10">
                    <div className="h-2 w-[78%] rounded-full bg-[#0F172A]" />
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#0F172A]/50">
                    Performance
                  </p>
                  <div className="mt-3 h-2 rounded-full bg-[#0F172A]/10">
                    <div className="h-2 w-[92%] rounded-full bg-[#1B9AAA]" />
                  </div>
                </div>
                <div className="rounded-2xl border border-[#0F172A]/10 bg-[#F5F2EB] p-5">
                  <p className="text-sm font-semibold text-[#0F172A]">Stack express</p>
                  <p className="mt-2 text-sm text-[#0F172A]/70">
                    Next.js, Strapi, design system maison. Vous gardez la main.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -left-6 -rotate-6 rounded-2xl border border-[#0F172A]/10 bg-white px-6 py-4 shadow-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-[#0F172A]/60">Impact</p>
              <p className="mt-2 text-2xl font-(--font-marcellus) text-[#0F172A]">+43%</p>
              <p className="text-xs text-[#0F172A]/60">taux de demande</p>
            </div>

            <div className="absolute -top-8 right-0 rotate-[5deg] rounded-2xl border border-[#0F172A]/10 bg-[#0F172A] px-5 py-4 text-[#F5F2EB] shadow-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-[#F5F2EB]/70">Timeline</p>
              <p className="mt-2 text-lg font-semibold">Sprint 2/4</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.3em] text-[#0F172A]/60">
          <span>Audit express</span>
          <span>Design narratif</span>
          <span>UX sans friction</span>
          <span>Build ultra rapide</span>
        </div>
      </div>
    </section>
  )
}
