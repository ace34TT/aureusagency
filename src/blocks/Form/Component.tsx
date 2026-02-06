import React from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { FormBlock as FormBlockClient } from './ClientComponent'
import type { FormBlockType } from './ClientComponent'

export const FormBlock = async (
  props: FormBlockType & {
    id?: string
  },
) => {
  const payload = await getPayload({ config: configPromise })

  const globalData = await payload.findGlobal({
    slug: 'global',
  })

  return <FormBlockClient {...props} globalData={globalData} />
}
