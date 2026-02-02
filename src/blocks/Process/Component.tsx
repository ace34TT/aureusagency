import React from 'react'
import Image from 'next/image'
import { Layout, Paintbrush, Rocket, Search } from 'lucide-react'
import { theme } from '@/utilities/theme'

const Process = () => {
  const steps = [
    {
      title: 'Diagnostic express',
      copy: 'Nous clarifions votre offre, votre cible et la promesse principale.',
      icon: <Search className="w-6 h-6 text-[#6C63FF]" />,
      color: 'bg-blue-50',
    },
    {
      title: 'Structure persuasive',
      copy: 'Nous mappons les sections pour guider la lecture et déclencher le contact.',
      icon: <Layout className="w-6 h-6 text-purple-500" />,
      color: 'bg-purple-50',
    },
    {
      title: 'Design sur mesure',
      copy: 'Un visuel fort qui colle à votre marque et vous distingue.',
      icon: <Paintbrush className="w-6 h-6 text-pink-500" />,
      color: 'bg-pink-50',
    },
    {
      title: 'Mise en ligne rapide',
      copy: 'Optimisation, SEO et livrable prêt à générer des emails.',
      icon: <Rocket className="w-6 h-6 text-amber-500" />,
      color: 'bg-amber-50',
    },
  ]

  return (
    <section className="relative px-6 py-24 overflow-hidden bg-white">
      {/* Cercles animés en arrière-plan pour la cohérence */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] -right-[10%] h-125 w-125 rounded-full bg-blue-50/50 blur-[120px] animate-glow" />
      </div>

      <div className="relative mx-auto container z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* CÔTÉ GAUCHE : IMAGE & VISUEL */}
          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-3xl border border-[#0F172A]/5">
              <Image
                src="/Frame 182.png" // Remplacez par une image de collaboration tech
                alt="Notre processus de travail"
                width={600}
                height={600}
                className="w-full h-auto bg-slate-50 p-8 "
              />
            </div>
            {/* Décoration sous l'image */}
            <div className="absolute -bottom-6 -right-6 h-full w-full rounded-3xl border-2 border-dashed border-primary/20 -z-10" />
          </div>

          {/* CÔTÉ DROIT : CONTENU & ÉTAPES */}
          <div>
            <p className={`text-xs uppercase tracking-[0.35em] ${theme.inkSoft}`}>Notre Méthode</p>
            <h2 className="mt-4 text-4xl font-(--font-marcellus) text-[#0F172A] leading-tight">
              Un parcours simple, des décisions rapides.
            </h2>

            <div className="mt-12 space-y-8">
              {steps.map((step, index) => (
                <div key={step.title} className="group flex gap-6">
                  {/* Icône avec ligne verticale */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${step.color} border border-[#0F172A]/5 transition-transform group-hover:scale-110 shadow-sm`}
                    >
                      {step.icon}
                    </div>
                    {index !== steps.length - 1 && (
                      <div className="w-px h-full bg-linear-to-b from-[#0F172A]/10 to-transparent mt-4" />
                    )}
                  </div>

                  {/* Texte */}
                  <div className="pb-8">
                    <h3 className="text-xl font-semibold text-[#0F172A] flex items-center gap-3">
                      <span className="text-xs font-mono opacity-30">0{index + 1}</span>
                      {step.title}
                    </h3>
                    <p className={`mt-3 text-sm leading-relaxed ${theme.inkMuted}`}>{step.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
