import { theme } from '@/utilities/theme'

const Faq = () => {
  const items = [
    {
      question: 'Combien de temps pour mettre en ligne ?',
      answer: 'En general 2 a 4 semaines selon la complexite et la rapidite des retours.',
    },
    {
      question: 'Puis je garder mon contenu ?',
      answer: 'Oui, nous adaptons le design sans perdre vos messages clefs et vos preuves.',
    },
    {
      question: 'Comment se passent les retours ?',
      answer: 'Vous recevez un lien de validation a chaque etape pour ajuster rapidement.',
    },
  ]

  return (
    <section className={`relative px-6 py-24 ${theme.page}`}>
      <div className="relative mx-auto container">
        <div className="text-center">
          <p className={`text-xs uppercase tracking-[0.35em] ${theme.inkSoft}`}>FAQ</p>
          <h2 className="mt-4 text-3xl font-(--font-marcellus) text-[#0F172A] md:text-4xl">
            Reponses claires, decisions rapides.
          </h2>
        </div>
        <div className="mt-12 grid gap-5">
          {items.map((item) => (
            <div
              key={item.question}
              className="rounded-3xl border border-[#0F172A]/10 bg-white/80 p-6"
            >
              <h3 className="text-base font-semibold text-[#0F172A]">{item.question}</h3>
              <p className={`mt-3 text-sm ${theme.inkMuted}`}>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
