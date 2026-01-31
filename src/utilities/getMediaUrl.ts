import { Header, Media } from '@/payload-types'


export const getMediaUrl = (logo: string | Media ) => {
  return typeof logo === 'string' ? logo : (logo?.url ?? '')
}
