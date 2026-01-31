import { Footer, Global, Header } from '@/payload-types'

export type ContactInfo = Global['contact']
export type SocialLinks = Global['socialLinks']
export type SocialLinkItem = NonNullable<Global['socialLinks']>[number]

export type HeaderNavItems = NonNullable<Header['navItems']>
export type HeaderButtons = NonNullable<Header['buttons']>

export type FooterNavItem = Footer['navItems']
