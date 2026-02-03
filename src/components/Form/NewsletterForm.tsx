'use client'

import React from 'react'

export const NewsletterForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ta logique d'envoi ici
    console.log('Inscription newsletter')
  }

  return (
    <form className="relative flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="votre@email.com"
        className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-lg outline-none focus:border-primary/50 transition-all placeholder:text-slate-600"
        required
      />
      <button
        type="submit"
        className="w-full py-5 rounded-2xl text-sm font-black uppercase tracking-[0.3em] transition-all hover:scale-[1.02] active:scale-95 cursor-pointer shadow-lg"
        style={{ backgroundColor: 'oklch(59.73% 0.224 279.77deg)', color: 'white' }}
      >
        S&apos;abonner
      </button>
    </form>
  )
}
