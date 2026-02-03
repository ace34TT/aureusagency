import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React, { JSX } from 'react'
import {
  FaAngellist,
  FaApple,
  FaBandcamp,
  FaBehance,
  FaBitbucket,
  FaBluesky,
  FaDiscord,
  FaDribbble,
  FaEnvelope,
  FaFacebookF,
  FaFacebookMessenger,
  FaFigma,
  FaGithub,
  FaGitlab,
  FaGlobe,
  FaGoogle,
  FaHackerNews,
  FaInstagram,
  FaLine,
  FaLinkedinIn,
  FaMapLocationDot,
  FaMastodon,
  FaMedium,
  FaNewspaper,
  FaPhone,
  FaPinterestP,
  FaPodcast,
  FaProductHunt,
  FaQuora,
  FaRedditAlien,
  FaRss,
  FaSlack,
  FaSnapchat,
  FaSoundcloud,
  FaSpotify,
  FaStackOverflow,
  FaTelegram,
  FaThreads,
  FaTiktok,
  FaTumblr,
  FaTwitch,
  FaTwitter,
  FaVimeoV,
  FaWeixin,
  FaWhatsapp,
  FaXTwitter,
  FaYelp,
  FaYoutube,
} from 'react-icons/fa6'
import type { Footer, Global } from '@/payload-types'
import { FaSignal } from 'react-icons/fa'
import { getMediaUrl } from '@/utilities/getMediaUrl'

import Image from 'next/image'
import { HeaderNavItems, SocialLinks } from '@/types'

export async function Footer() {
  const footerData: Footer = (await getCachedGlobal('footer', 1)()) as Footer
  const globalData: Global = (await getCachedGlobal('global', 1)()) as Global

  const { logo, navItems, legalLinks } = footerData

  console.log(navItems)
  const { socialLinks } = globalData
  const logoUrl = getMediaUrl(logo)

  const iconMap: Record<string, JSX.Element> = {
    ANGELLIST: <FaAngellist size={22} className="text-current" />,
    APPLE_MUSIC: <FaApple size={22} className="text-current" />,
    BANDCAMP: <FaBandcamp size={22} className="text-current" />,
    BEHANCE: <FaBehance size={22} className="text-current" />,
    BITBUCKET: <FaBitbucket size={22} className="text-current" />,
    BLUESKY: <FaBluesky size={22} className="text-current" />,
    DISCORD: <FaDiscord size={22} className="text-current" />,
    DRIBBBLE: <FaDribbble size={22} className="text-current" />,
    EMAIL: <FaEnvelope size={22} className="text-current" />,
    FACEBOOK: <FaFacebookF size={22} className="text-current" />,
    FACEBOOK_MESSENGER: <FaFacebookMessenger size={22} className="text-current" />,
    FIGMA: <FaFigma size={22} className="text-current" />,
    GITHUB: <FaGithub size={22} className="text-current" />,
    GITLAB: <FaGitlab size={22} className="text-current" />,
    GOOGLE: <FaGoogle size={22} className="text-current" />,
    GOOGLE_BUSINESS: <FaGoogle size={22} className="text-current" />,
    HACKER_NEWS: <FaHackerNews size={22} className="text-current" />,
    INSTAGRAM: <FaInstagram size={22} className="text-current" />,
    LINE: <FaLine size={22} className="text-current" />,
    LINKEDIN: <FaLinkedinIn size={22} className="text-current" />,
    MASTODON: <FaMastodon size={22} className="text-current" />,
    MEDIUM: <FaMedium size={22} className="text-current" />,
    MESSENGER: <FaFacebookMessenger size={22} className="text-current" />,
    PHONE: <FaPhone size={22} className="text-current" />,
    PINTEREST: <FaPinterestP size={22} className="text-current" />,
    PODCASTS: <FaPodcast size={22} className="text-current" />,
    PRODUCT_HUNT: <FaProductHunt size={22} className="text-current" />,
    QUORA: <FaQuora size={22} className="text-current" />,
    REDDIT: <FaRedditAlien size={22} className="text-current" />,
    RSS: <FaRss size={22} className="text-current" />,
    SIGNAL: <FaSignal size={22} className="text-current" />,
    SLACK: <FaSlack size={22} className="text-current" />,
    SNAPCHAT: <FaSnapchat size={22} className="text-current" />,
    SOUNDCLOUD: <FaSoundcloud size={22} className="text-current" />,
    SPOTIFY: <FaSpotify size={22} className="text-current" />,
    STACK_OVERFLOW: <FaStackOverflow size={22} className="text-current" />,
    SUBSTACK: <FaNewspaper size={22} className="text-current" />,
    TELEGRAM: <FaTelegram size={22} className="text-current" />,
    THREADS: <FaThreads size={22} className="text-current" />,
    TIKTOK: <FaTiktok size={22} className="text-current" />,
    TRIPADVISOR: <FaMapLocationDot size={22} className="text-current" />,
    TUMBLR: <FaTumblr size={22} className="text-current" />,
    TWITCH: <FaTwitch size={22} className="text-current" />,
    TWITTER: <FaTwitter size={22} className="text-current" />,
    VIMEO: <FaVimeoV size={22} className="text-current" />,
    WEBSITE: <FaGlobe size={22} className="text-current" />,
    WEB: <FaGlobe size={22} className="text-current" />,
    SITE: <FaGlobe size={22} className="text-current" />,
    WECHAT: <FaWeixin size={22} className="text-current" />,
    WHATSAPP: <FaWhatsapp size={22} className="text-current" />,
    X: <FaXTwitter size={22} className="text-current" />,
    YELP: <FaYelp size={22} className="text-current" />,
    YOUTUBE: <FaYoutube size={22} className="text-current" />,
  }

  const renderLinks = (links: HeaderNavItems) =>
    links?.map((item, index) => {
      const { link, id } = item

      // Détermination de l'URL : Priorité à la référence interne, sinon URL custom
      const href =
        link.type === 'reference'
          ? typeof link.reference?.value === 'object'
            ? `/${link.reference.value.slug}`
            : '#'
          : (link.url ?? '#')

      return (
        <li key={id || index}>
          <Link
            href={href}
            target={link.newTab ? '_blank' : undefined}
            rel={link.newTab ? 'noopener noreferrer' : undefined}
            className="hover:text-[#090814] transition-colors"
          >
            {link.label}
          </Link>
        </li>
      )
    })

  const renderSocialIcons = (links: SocialLinks) =>
    links?.map((link) => {
      const icon = iconMap[link.platform.toUpperCase()]
      if (!icon) return null

      return (
        <li key={`${link.url}-${link.platform}`}>
          <Link
            href={link.url}
            target={'_blank'}
            rel={'noopener noreferrer'}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-200 transition hover:border-slate-500 hover:text-white"
            aria-label={link.url}
          >
            {icon}
          </Link>
        </li>
      )
    })

  return (
    <footer className="relative text-white py-24 px-6 overflow-hidden">
      {/* MASQUE DE TRANSITION (Évite le rude cut avec la section FAQ) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 15%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%)',
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-10 mb-10">
          <div className="space-y-6">
            {logo && (
              <div className="relative w-40 h-40 mb-4">
                <Image src={logoUrl} alt={''} fill sizes="160px" className="object-contain" />
              </div>
            )}
            {/*{socialLinks?.length ? (*/}
            {/*  <div>*/}
            {/*    <ul className="flex flex-wrap gap-3">{renderSocialIcons(socialLinks)}</ul>*/}
            {/*  </div>*/}
            {/*) : null}*/}
          </div>
          <div>
            <h3 className="font-(--font-marcellus) text-lg mb-6 text-[#090814] uppercase tracking-wider">
              Liens utiles
            </h3>
            <ul className="space-y-3 text-slate-400 text-sm">{renderLinks(navItems || [])}</ul>
          </div>
          <div>
            <h3 className="font-(--font-marcellus) text-lg mb-6 text-[#090814] uppercase tracking-wider">
              Liens légaux
            </h3>
            <ul className="space-y-3 text-slate-400 text-sm">{renderLinks(legalLinks || [])}</ul>
          </div>
        </div>

        <div className="border-t border-[#090814] pt-8 text-center text-slate-500 text-[10px] uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Aureus Agency. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
