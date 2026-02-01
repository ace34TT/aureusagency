import { theme } from '@/utilities/theme'

const WorkShowcase = () => {
  const items = [
    {
      name: 'Studio Nomad',
      result: '+58% de demandes',
      summary: 'Refonte avec focus sur la proposition de valeur et un CTA unique.',
    },
    {
      name: 'Atelier North',
      result: 'x2.4 taux de clic',
      summary: 'Design editoriale avec sections courtes et arguments nets.',
    },
    {
      name: 'Nova Conseil',
      result: '+31% prises de contact',
      summary: 'Page rapide, preuve sociale, contact email visible.',
    },
  ]

  return (
    <section id="work" className={`relative px-6 py-24 ${theme.page}`}>
      <div className="relative mx-auto container">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className={`text-xs uppercase tracking-[0.35em] ${theme.inkSoft}`}>Etudes rapides</p>
            <h2 className="mt-4 text-3xl font-(--font-marcellus) text-[#0F172A] md:text-4xl">
              Des exemples qui montrent l impact.
            </h2>
          </div>
          <p className={`max-w-md text-sm ${theme.inkMuted}`}>
            Des layouts differents, un meme objectif: rendre la prise de contact simple.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.name}
              className="group relative overflow-hidden rounded-[28px] border border-[#0F172A]/10 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.1)]"
            >
              <div className="absolute -right-10 top-0 h-24 w-24 rounded-full bg-[#9AD5CA]/30 blur-2xl transition group-hover:scale-110" />
              <p className="text-xs uppercase tracking-[0.3em] text-[#0F172A]/60">{item.name}</p>
              <p className="mt-4 text-2xl font-semibold text-[#0F172A]">{item.result}</p>
              <p className={`mt-3 text-sm ${theme.inkMuted}`}>{item.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkShowcase
