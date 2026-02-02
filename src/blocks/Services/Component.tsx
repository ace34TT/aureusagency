import { theme } from '@/utilities/theme'

const Services = () => {
  return (
    <section className={`relative px-6 py-24 `}>
      <div className="relative mx-auto container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className={`text-xs uppercase tracking-[0.35em] ${theme.inkSoft}`}>Services</p>

            <h2 className="mt-4 text-3xl font-(--font-marcellus) text-[#0F172A] md:text-4xl">
              Un site vitrine qui joue comme un commercial.
            </h2>
            <p className={`mt-4 text-base ${theme.inkMuted}`}>
              Nous combinons branding, UX et conversion pour rendre votre offre simple a comprendre
              et facile a choisir.
            </p>

            <div className="mt-8 flex flex-col gap-4 text-sm uppercase tracking-[0.3em] text-[#0F172A]/60">
              <span>Design sur mesure</span>
              <span>Architecture rapide</span>
              <span>SEO propre</span>
              <span>Mesure des leads</span>
            </div>
          </div>

          <div className="grid gap-5">
            {[
              {
                title: 'Landing page persuasive',
                copy: 'Structuree pour convertir avec un chemin clair vers votre email.',
              },
              {
                title: 'Pages offre & preuves',
                copy: 'Des modules modulaires pour afficher vos cas, chiffres et garanties.',
              },
              {
                title: 'Integration email',
                copy: 'Formulaire simple, CTA visibles, suivi rapide pour relancer vos prospects.',
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="flex items-start gap-6 rounded-3xl border border-[#0F172A]/10 bg-white/80 p-6 shadow-[0_16px_50px_rgba(15,23,42,0.08)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F172A] text-sm font-semibold text-[#F5F2EB]">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0F172A]">{item.title}</h3>
                  <p className={`mt-2 text-sm ${theme.inkMuted}`}>{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
