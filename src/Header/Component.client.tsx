'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { FC, useCallback, useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { cn } from '@/utilities/ui'
import { createPortal } from 'react-dom'
import { Button } from '@payloadcms/ui'
import { RiCloseLargeLine } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'
import { HeaderButtons, HeaderNavItems } from '@/types'
import { CMSLink } from '@/components/Link'

interface HeaderClientProps {
  data: Header
}

const getPathSegment = (path: string) => path.split('/')[1] ?? ''

const NavLink: FC<{
  href: string
  newTab?: boolean
  onClick?: () => void
  children: React.ReactNode
  isActive: boolean
}> = ({ href, newTab, onClick, children, isActive }) => (
  <Link
    href={href}
    target={newTab ? '_blank' : undefined}
    rel={newTab ? 'noopener noreferrer' : undefined}
    className={cn(
      'hover:text-secondary-400 font-bold transition-colors duration-300 px-4 py-2 text-white',
      isActive ? 'font-bold' : 'font-normal',
    )}
    onClick={onClick}
    scroll={true}
    prefetch={true}
  >
    {children}
  </Link>
)

const MobileMenu: FC<{
  isOpen: boolean
  onClose: () => void
  menus: HeaderNavItems
  buttons?: HeaderButtons | null
  logoUrl: string
  activeSegment: string
}> = ({ isOpen, onClose, menus, buttons, logoUrl, activeSegment }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isOpen)
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  if (!mounted) return null

  return createPortal(
    <>
      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-y-0 right-0 z-9999 lg:hidden',
          'transition-all duration-300 ease-in-out',
          'w-80 border-l border-[#0F172A]/10 bg-[#F5F2EB] shadow-[0_30px_80px_rgba(15,23,42,0.18)]',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-6 border-b border-[#0F172A]/10">
            {logoUrl ? (
              <div className="relative w-25 h-6">
                <Image
                  src={logoUrl}
                  alt="Logo"
                  width={100}
                  height={24}
                  className="object-contain w-full h-full"
                />
              </div>
            ) : null}
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="text-[#0F172A] hover:text-[#0F172A]/70 transition-colors duration-300"
            >
              <RiCloseLargeLine size={24} aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Navigation Items */}
          <div className="grow overflow-y-auto">
            <ul className="flex flex-col py-6">
              {menus.map(({ link }) => {
                const href = link.url ?? '#'
                const isActive = activeSegment === getPathSegment(href)

                return (
                  <li key={href} className="border-b border-[#0F172A]/10 last:border-b-0">
                    <Link
                      href={href}
                      target={link.newTab ? '_blank' : undefined}
                      rel={link.newTab ? 'noopener noreferrer' : undefined}
                      className={cn(
                        'block px-6 py-4 text-base font-medium transition-colors duration-300',
                        isActive
                          ? 'font-bold text-[#F5F2EB] bg-[#0F172A]'
                          : 'text-[#0F172A]/70 hover:text-[#0F172A]',
                      )}
                      onClick={onClose}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="p-6 border-t border-[#0F172A]/10">
            <div className="space-y-3">
              {buttons?.map((button) => (
                <Button
                  key={button.link.url ?? button.link.label}
                  el="link"
                  url={button.link.url ?? '#'}
                  newTab={button.link.newTab ?? undefined}
                  onClick={onClose}
                  className="w-full"
                >
                  {button.link.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#0F172A]/35 z-9998 lg:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}
    </>,
    document.body,
  )
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const [localIsMenuOpen, setLocalIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const activeSegment = getPathSegment(pathname)
  const closeMenu = useCallback(() => setLocalIsMenuOpen(false), [])
  const toggleMenu = useCallback(() => setLocalIsMenuOpen((isOpen) => !isOpen), [])
  const { logo, navItems, buttons } = data
  const navMenus: HeaderNavItems = navItems ?? []
  const navButtons: HeaderButtons = buttons ?? []
  const logoUrl = typeof logo === 'string' ? logo : (logo?.url ?? '')

  console.log(navItems![0].link.reference || '')

  useEffect(() => {
    // 1. Reset du thème lors du changement de page
    setHeaderTheme(null)

    // 2. Gestion du Scroll (Optimisée avec throttle ou simple toggle)
    const handleScroll = () => {
      const isCurrentlyScrolled = window.scrollY > 0
      // On n'Update l'état que si la valeur change vraiment
      setIsScrolled((prev) => (prev !== isCurrentlyScrolled ? isCurrentlyScrolled : prev))
    }

    // 3. Gestion du Resize (Fermeture menu)
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setLocalIsMenuOpen(false)
      }
    }

    // Ajout des listeners
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    // Exécution immédiate au montage
    handleScroll()
    handleResize()

    // Nettoyage unique
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [pathname]) // Se relance uniquement au changement de page

  // Gestion séparée du thème pour éviter les boucles infinies
  useEffect(() => {
    if (headerTheme && headerTheme !== theme) {
      setTheme(headerTheme)
    }
  }, [headerTheme, theme])

  const renderNavItems = (items: HeaderNavItems) =>
    items.map(({ link }) => (
      <li key={link.url ?? link.label} className="relative">
        <NavLink
          href={link.reference?.value ?? '#'}
          newTab={link.newTab ?? undefined}
          onClick={closeMenu}
          isActive={activeSegment === getPathSegment(link.url ?? '')}
        >
          {link.label}
        </NavLink>
      </li>
    ))

  return (
    <>
      <nav
        className={cn(
          'w-full h-16 md:h-24 flex items-center fixed top-0 left-0 right-0 border-b  z-999 transition-all duration-300 ease-in-out font-[Roboto]',
          isScrolled
            ? 'bg-[#13233C80] border-white backdrop-blur-md'
            : 'bg-[#13233C80] border-white/80 backdrop-blur-sm ',
        )}
      >
        <div className="container mx-auto px-4 md:px-0">
          <div className="w-full flex items-center justify-between h-16 relative">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center w-full">
              {/* Left Logo */}
              <div className="flex items-center w-24 h-24">
                <Link href="/" className="flex items-center w-full h-full">
                  <div
                    className={cn(
                      'relative transition-all duration-200 ease-in-out',
                      isScrolled ? 'scale-95' : 'scale-100',
                    )}
                  >
                    {logoUrl ? (
                      <Image
                        src={logoUrl}
                        alt="Logo"
                        width={200}
                        height={200}
                        className="object-contain w-full h-full"
                        priority
                      />
                    ) : null}
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center gap-24">
                <ul className="flex items-center space-x-8">{renderNavItems(navMenus)}</ul>
                <div className="flex items-center gap-4">
                  {navButtons.map((button, i) => (
                    <CMSLink
                      key={i}
                      {...button.link} // Cela passe automatiquement url, label, appearance, etc.
                      appearance={button.link.appearance || 'default'}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Logo (visible only on mobile) */}
            <div className="flex lg:hidden  left-0">
              <Link href="/" className="flex items-center">
                {logoUrl ? (
                  <div className="relative w-24 h-24">
                    <Image
                      src={logoUrl}
                      alt="Logo"
                      width={200}
                      height={200}
                      className="object-contain w-full h-full"
                      priority
                    />
                  </div>
                ) : null}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              aria-label={localIsMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={localIsMenuOpen}
              className="flex lg:hidden right-0 text-white hover:text-blue-300 transition-colors duration-300 cursor-pointer"
            >
              {localIsMenuOpen ? (
                <RiCloseLargeLine size={24} aria-hidden="true" />
              ) : (
                <GiHamburgerMenu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={localIsMenuOpen}
        onClose={closeMenu}
        menus={navMenus}
        buttons={navButtons}
        logoUrl={logoUrl}
        activeSegment={activeSegment}
      />
    </>
  )
}
