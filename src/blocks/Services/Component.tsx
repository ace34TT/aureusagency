import { theme } from '@/utilities/theme'
import type { Media } from '@/payload-types'
import { Media as MediaComponent } from '@/components/Media'

type ServiceProps = {
  services?: {
    title: string
    description: string
    icon: string | Media
    id?: string
  }[]
}

const Services = ({ services }: ServiceProps) => {
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
            {(services || []).map((item, index) => (
              <div
                key={item.id || index}
                className="flex items-start gap-6 rounded-3xl border border-[#0F172A]/10 bg-white/80 p-6 shadow-[0_16px_50px_rgba(15,23,42,0.08)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/75 text-sm font-semibold text-[#F5F2EB] overflow-hidden">
                  {typeof item.icon === 'object' && (
                    <MediaComponent resource={item.icon} className="h-full w-full object-cover" />
                  )}
                  {/* Fallback or index if no icon - but icon is required in config */}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0F172A]">{item.title}</h3>
                  <p className={`mt-2 text-sm ${theme.inkMuted}`}>{item.description}</p>
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
