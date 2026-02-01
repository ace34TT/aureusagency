import { theme } from '@/utilities/theme'

const EmailCapture = () => {
  return (
    <section id="contact" className={`relative px-6 py-24 ${theme.page}`}>
      <div className="relative mx-auto container">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className={`text-xs uppercase tracking-[0.35em] ${theme.inkSoft}`}>Contact direct</p>
            <h2 className="mt-4 text-3xl font-(--font-marcellus) text-[#0F172A] md:text-4xl">
              Lancez une conversation, recevez une reponse rapide.
            </h2>
            <p className={`mt-4 text-base ${theme.inkMuted}`}>
              Un email suffit pour obtenir une estimation claire, un planning realiste et une
              proposition adaptee a votre besoin.
            </p>
            <div className="mt-8 rounded-3xl border border-[#0F172A]/10 bg-white/80 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[#0F172A]/60">Email direct</p>
              <a
                className="mt-3 block text-lg font-semibold text-[#0F172A]"
                href="mailto:contact@votre-domaine.com"
              >
                contact@votre-domaine.com
              </a>
              <p className="mt-2 text-xs text-[#0F172A]/60">Remplacez par votre email principal.</p>
            </div>
          </div>

          <form
            className="rounded-4xl border border-[#0F172A]/10 bg-white/90 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.12)]"
            action="mailto:contact@votre-domaine.com"
            method="post"
            encType="text/plain"
          >
            <div className="space-y-5">
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-[#0F172A]/60">Nom</label>
                <input
                  name="nom"
                  className="mt-2 w-full rounded-2xl border border-[#0F172A]/10 bg-[#F5F2EB] px-4 py-3 text-sm text-[#0F172A] outline-none focus:border-[#0F172A]"
                  placeholder="Votre nom"
                  type="text"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-[#0F172A]/60">
                  Email
                </label>
                <input
                  name="email"
                  className="mt-2 w-full rounded-2xl border border-[#0F172A]/10 bg-[#F5F2EB] px-4 py-3 text-sm text-[#0F172A] outline-none focus:border-[#0F172A]"
                  placeholder="vous@entreprise.com"
                  type="email"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-[#0F172A]/60">
                  Message
                </label>
                <textarea
                  name="message"
                  className="mt-2 h-28 w-full rounded-2xl border border-[#0F172A]/10 bg-[#F5F2EB] px-4 py-3 text-sm text-[#0F172A] outline-none focus:border-[#0F172A]"
                  placeholder="Votre objectif, votre delai, votre budget."
                />
              </div>
            </div>
            <button type="submit" className={`mt-6 w-full ${theme.button}`}>
              Envoyer par email
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default EmailCapture
