import { theme } from '@/utilities/theme'

export const ValueProps = () => {
  return (
    <section className={`relative px-6 py-24`}>
      <div className="absolute inset-0 opacity-60">
        <div className="absolute left-0 top-0 h-full w-[45%]" />
      </div>
      <div className="relative mx-auto container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className={`text-xs uppercase tracking-[0.35em] ${theme.inkSoft}`}>
              Pourquoi nous choisir
            </p>
            <h2 className={'mt-4 text-3xl font-(--font-marcellus) text-[#0F172A] md:text-4xl'}>
              Une base claire pour convaincre et convertir.
            </h2>
          </div>

          <p className={`max-w-md text-sm ${theme.inkMuted}`}>
            Chaque section pousse vos visiteurs vers un email, avec un message simple et une preuve
            visible.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Positionnement net',
              copy: 'Des titres directs, un ton clair, une promesse unique en haut de page.',
            },
            {
              title: 'Narration visuelle',
              copy: 'Des blocs rythmes pour guider l attention et garder la lecture fluide.',
            },
            {
              title: 'Confiance rapide',
              copy: 'Preuves sociales, resultats chiffres, process transparent.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-[#0F172A]/10 bg-white/80 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.1)]"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#F6B3A7]/30 blur-2xl transition group-hover:scale-110" />
              <div className="absolute -left-14 bottom-0 h-28 w-28 rounded-full bg-[#9AD5CA]/40 blur-2xl transition group-hover:scale-110" />
              <p className="text-xs uppercase tracking-[0.35em] text-[#0F172A]/50">Focus</p>
              <h3 className="mt-4 text-xl font-semibold text-[#0F172A]">{item.title}</h3>
              <p className={`mt-3 text-sm ${theme.inkMuted}`}>{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
