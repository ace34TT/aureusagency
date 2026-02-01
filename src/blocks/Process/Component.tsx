import { theme } from '@/utilities/theme'

const Process = () => {
  const steps = [
    {
      title: 'Diagnostic express',
      copy: 'Nous clarifions votre offre, votre cible et la promesse principale.',
    },
    {
      title: 'Structure persuasive',
      copy: 'Nous mappons les sections pour guider la lecture et declencher le contact.',
    },
    {
      title: 'Design sur mesure',
      copy: 'Un visuel fort qui colle a votre marque et vous distingue.',
    },
    {
      title: 'Mise en ligne rapide',
      copy: 'Optimisation, SEO et livrable pret a generer des emails.',
    },
  ]

  return (
    <section className={`relative px-6 py-24 ${theme.page}`}>
      <div className="relative mx-auto container">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className={`text-xs uppercase tracking-[0.35em] ${theme.inkSoft}`}>Process</p>
            <h2 className="mt-4 text-3xl font-(--font-marcellus) text-[#0F172A] md:text-4xl">
              Un parcours simple, des decisions rapides.
            </h2>
          </div>
          <p className={`max-w-md text-sm ${theme.inkMuted}`}>
            Chaque etape est courte et documentee pour lancer votre site sans friction.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-3xl border border-[#0F172A]/10 bg-white/80 p-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full border border-[#0F172A]/20 text-center text-sm font-semibold leading-[3rem] text-[#0F172A]">
                  {index + 1}
                </div>
                <h3 className="text-base font-semibold text-[#0F172A]">{step.title}</h3>
              </div>
              <p className={`mt-4 text-sm ${theme.inkMuted}`}>{step.copy}</p>
              <div className="pointer-events-none absolute -right-6 top-6 hidden h-0.5 w-12 bg-[#0F172A]/15 lg:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
