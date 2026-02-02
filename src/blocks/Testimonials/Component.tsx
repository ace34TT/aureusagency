'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Quote } from 'lucide-react'
import { theme } from '@/utilities/theme'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const testimonials = [
  {
    name: 'Jean Dupont',
    role: 'CEO @ TechFlow',
    content:
      "L'expertise technique de Tafinasoa a permis de transformer notre vision en une plateforme web ultra-performante. Un vrai professionnel.",
  },
  {
    name: 'Sarah Rakoto',
    role: 'Fondatrice @ Studio Mada',
    content:
      'Une collaboration fluide et un résultat qui dépasse nos attentes. Le passage à Next.js a boosté notre SEO de manière impressionnante.',
  },
  {
    name: 'Marc Lefebvre',
    role: 'Product Manager',
    content:
      'Réactif, compétent et force de proposition. Il ne se contente pas de coder, il comprend les enjeux business.',
  },
]

export const Testimonials = () => {
  return (
    <section className="relative px-6 py-24 overflow-hidden bg-white">
      {/* Masque de transition pour éviter le rude cut et fondre les bulles */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        }}
      />

      {/* Cercles en arrière-plan (Coherents avec Process et Hero) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] -left-[5%] h-125 w-125 rounded-full bg-purple-50/50 blur-[120px]" />
        <div className="absolute bottom-[10%] -right-[5%] h-125 w-125 rounded-full bg-blue-50/40 blur-[120px]" />
      </div>

      <div className="relative mx-auto container z-30">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge identique au Process */}
          <p className={`text-xs uppercase tracking-[0.35em] ${theme.inkSoft}`}>Témoignages</p>

          {/* Titre identique au Process (Marcellus) */}
          <h2 className="mt-4 text-4xl font-(--font-marcellus) text-[#0F172A] leading-tight md:text-5xl">
            Ils nous font confiance.
          </h2>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="testimonial-swiper pb-20!"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center cursor-grab">
                  {/* Icône Quote stylisée comme tes étapes Process */}
                  <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl text-primary/40">
                    <Quote size={32} />
                  </div>

                  {/* Contenu - Taille cohérente avec le Hero/Process */}
                  <p className="font-(--font-marcellus) text-2xl md:text-4xl leading-tight text-[#0F172A]">
                    "{t.content}"
                  </p>

                  <div className="mt-10">
                    <h4 className="text-lg font-semibold text-[#0F172A] tracking-tight">
                      {t.name}
                    </h4>
                    <p className={`mt-2 text-xs uppercase tracking-[0.2em] font-bold text-primary`}>
                      {t.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Style pour la pagination customisée aux couleurs du thème */}
      <style jsx global>{`
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #6c63ff !important;
          width: 20px !important;
          border-radius: 4px !important;
        }

        .testimonial-swiper .swiper-pagination-bullet {
          background: #0f172a;
        }
      `}</style>
    </section>
  )
}

export default Testimonials
