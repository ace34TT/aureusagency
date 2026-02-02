'use client'
import React from 'react'
import Marquee from 'react-fast-marquee'
import { Code2, Cpu, Gauge, Globe, Layout, ShieldCheck, Sparkles, Zap } from 'lucide-react'

export const TechnoMarquee = () => {
  const expertise = [
    { name: 'Next.js 15', icon: <Cpu size={18} /> },
    { name: 'Payload CMS', icon: <Layout size={18} /> },
    { name: 'UI/UX Design', icon: <Sparkles size={18} /> },
    { name: 'Tailwind CSS', icon: <Code2 size={18} /> },
    { name: 'TypeScript', icon: <ShieldCheck size={18} /> },
    { name: 'SEO Strategy', icon: <Globe size={18} /> },
    { name: 'Performance', icon: <Gauge size={18} /> },
    { name: 'Ultra Fast', icon: <Zap size={18} /> },
  ]

  return (
    <section className="relative py-24  overflow-hidden bg-white">
      {/* DÉGRADÉ BLANC SUR LES CÔTÉS
          On utilise un masque CSS linéaire : transparent au bord, noir (opaque) au centre.
      */}
      <div
        className="relative w-full"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        }}
      >
        <Marquee
          gradient={false} // On gère le dégradé nous-mêmes avec le masque ci-dessus pour plus de précision
          speed={60}
          pauseOnHover={true}
          delay={0}
          play={true}
        >
          {/* ASTUCE : On double la liste ici même si React Fast Marquee le fait en interne,
              cela garantit qu'il n'y a JAMAIS de vide sur les écrans ultra-larges.
          */}
          {[...expertise, ...expertise].map((item, index) => (
            <div
              key={index}
              className="group mx-4 flex items-center gap-4 rounded-2xl border border-[#0F172A]/5 bg-slate-50/40 px-8 py-5 transition-all duration-300 hover:border-primary/40 hover:bg-white hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0F172A]/60 shadow-sm transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:rotate-[360deg]">
                {item.icon}
              </div>

              <span className="text-xl font-medium tracking-tight text-[#0F172A]/70 transition-colors group-hover:text-[#0F172A]">
                {item.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
