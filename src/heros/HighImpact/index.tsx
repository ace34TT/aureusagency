'use client'
import React from 'react'

import type { Page } from '@/payload-types'
import Link from 'next/link'
import { theme } from '@/utilities/theme'
import Image from 'next/image'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, title, description }) => {
  return (
    <section
      className={`relative min-h-screen overflow-hidden px-6 pb-24 pt-28 flex items-center justify-center bg-linear-to-b from-[#f9f2ff] to-white`}
    >
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden pointer-events-none">
        {/* Large Soft Yellow (The 'Aureus' touch) - Top Right */}
        <div className="absolute top-[-10%] right-[-5%] h-150 w-150 rounded-full bg-yellow-100/40 blur-[120px]" />

        {/* Large Blue Glow - Center Left */}
        <div className="absolute top-[10%] left-[-10%] h-200 w-200 rounded-full bg-blue-200/30 blur-[150px]" />

        {/* Purple/Indigo Glow - Bottom Center to bridge the two */}
        <div className="absolute bottom-[-10%] left-[20%] h-175 w-225 rounded-full bg-purple-200/30 blur-[130px]" />
      </div>

      <div className="relative mx-auto container z-40">
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
            <div>
              <Image
                src={'/undraw_day-dreaming_2mlz.svg'}
                className={'mx-auto'}
                width={500}
                height={500}
                alt={''}
              />
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
