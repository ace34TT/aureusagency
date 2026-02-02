'use client'

import { useState } from 'react'
import { theme } from '@/utilities/theme'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const items = [
    {
      question: 'Combien de temps pour mettre en ligne ?',
      answer: 'En général 2 à 4 semaines selon la complexité et la rapidité des retours.',
    },
    {
      question: 'Puis-je garder mon contenu ?',
      answer: 'Oui, nous adaptons le design sans perdre vos messages clefs et vos preuves.',
    },
    {
      question: 'Comment se passent les retours ?',
      answer: 'Vous recevez un lien de validation à chaque étape pour ajuster rapidement.',
    },
  ]

  return (
    <section className={`relative px-6 py-24`}>
      <div className="relative mx-auto container">
        <div className="text-center">
          <p className={`text-xs uppercase tracking-[0.35em] ${theme.inkSoft}`}>FAQ</p>
          <h2 className="mt-4 text-3xl font-(--font-marcellus) text-[#0F172A] md:text-4xl">
            Réponses claires, décisions rapides.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 max-w-3xl mx-auto">
          {items.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-3xl border transition-all duration-300 bg-white/80
                  ${isOpen ? 'border-[#0F172A]/30 shadow-sm' : 'border-[#0F172A]/10 hover:border-[#0F172A]/20'}`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  // cursor-pointer ajouté ici
                  className="flex w-full cursor-pointer items-center justify-between p-6 text-left"
                >
                  <h3 className="text-base font-semibold text-[#0F172A]">{item.question}</h3>
                  <span
                    className={`ml-4 transform transition-transform duration-300 ${isOpen ? 'rotate-45 text-[#0F172A]' : 'rotate-0 text-[#0F172A]/50'}`}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 4V16M4 10H16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 invisible'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className={`text-sm leading-relaxed ${theme.inkMuted}`}>{item.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Faq
