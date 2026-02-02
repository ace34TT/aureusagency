'use client'
import React from 'react'
import Marquee from 'react-fast-marquee'

export const TechnoMarquee = () => {
  const expertise = [
    { name: 'Next.js 15' },
    { name: 'Payload CMS' },
    { name: 'UI/UX Design' },
    { name: 'Tailwind CSS' },
    { name: 'TypeScript' },
    { name: 'SEO Strategy' },
    { name: 'Performance' },
    { name: 'Ultra Fast' },
  ]

  return (
    <section className="relative py-20 overflow-hidden bg-white">
      <div
        className="relative w-full"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        }}
      >
        <Marquee gradient={false} speed={50} pauseOnHover={true} play={true}>
          {[...expertise, ...expertise].map((item, index) => (
            <div key={index} className="mx-10 flex items-center">
              {/* Par défaut : Gris neutre / Au survol : Bleu vibrant */}
              <span className="cursor-default text-4xl md:text-6xl font-black tracking-tighter text-gray-400 transition-all duration-300 hover:text-primary hover:scale-105">
                {item.name}
              </span>

              {/* Séparateur gris très discret */}
              <span className="ml-20 text-3xl text-gray-200 font-light">/</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
