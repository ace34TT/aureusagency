import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'

import type { Header } from '@/payload-types'

export async function Header() {
  const headerData = (await getCachedGlobal('header', 1)()) as Header

  console.log(headerData)

  return <HeaderClient data={headerData} />
}
