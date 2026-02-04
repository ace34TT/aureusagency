import type { CollectionSlug, GlobalSlug, Payload, PayloadRequest, File } from 'payload'

import { aureusPosts, aureusTags } from './aureus'
import { contactForm as contactFormData } from './contact-form'
import { contact as contactPageData } from './contact-page'
import { home } from './home'
import { image1 } from './image-1'
import { image2 } from './image-2'
import { imageHero1 } from './image-hero-1'
import { post1 } from './post-1'
import { post2 } from './post-2'
import { post3 } from './post-3'

const collections: CollectionSlug[] = [
  'categories',
  'media',
  'pages',
  'posts',
  'forms',
  'form-submissions',
  'tags',
  'search',
]

const globals: GlobalSlug[] = ['header', 'footer']

const categories = ['Technology', 'News', 'Finance', 'Design', 'Software', 'Engineering']

// Next.js revalidation errors are normal when seeding the database without a server running
// i.e. running `yarn seed` locally instead of using the admin UI within an active app
// The app is not running to revalidate the pages and so the API routes are not available
// These error messages can be ignored: `Error hitting revalidate route for...`
export const seed = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('Seeding database...')

  // we need to clear the media directory before seeding
  // as well as the collections and globals
  // this is because while `yarn seed` drops the database
  // the custom `/api/seed` endpoint does not
  // payload.logger.info(`— Clearing collections and globals...`)

  // clear the database
  // await Promise.all(
  //   globals.map((global) =>
  //     payload.updateGlobal({
  //       slug: global,
  //       data: {
  //         navItems: [],
  //       },
  //       depth: 0,
  //       context: {
  //         disableRevalidate: true,
  //       },
  //     }),
  //   ),
  // )

  // await Promise.all(
  //   collections.map((collection) => payload.db.deleteMany({ collection, req, where: {} })),
  // )

  // await Promise.all(
  //   collections
  //     .filter((collection) => Boolean(payload.collections[collection].config.versions))
  //     .map((collection) => payload.db.deleteVersions({ collection, req, where: {} })),
  // )

  payload.logger.info(`— Seeding demo author and user...`)

  await payload.delete({
    collection: 'users',
    depth: 0,
    where: {
      email: {
        equals: 'demo-author@example.com',
      },
    },
  })

  payload.logger.info(`— Seeding media...`)

  const [image1Buffer, image2Buffer, image3Buffer, hero1Buffer] = await Promise.all([
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post1.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post2.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post3.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-hero1.webp',
    ),
  ])

  // Helper to create or find user
  let demoAuthorDoc = await payload
    .find({ collection: 'users', where: { email: { equals: 'demo-author@example.com' } } })
    .then((res) => res.docs[0])
  if (!demoAuthorDoc) {
    demoAuthorDoc = await payload.create({
      collection: 'users',
      data: {
        name: 'Demo Author',
        email: 'demo-author@example.com',
        password: 'password',
      },
    })
  }
  const demoAuthor = demoAuthorDoc

  // Helper to create or find media
  const createOrFindMedia = async (data: any, file: any) => {
    // This is a simplified check, in reality you might check filename hash
    const existing = await payload.find({ collection: 'media', limit: 1 })
    // For now, always create to ensure we have IDs, or rely on existing if we implemented real check
    // But since we can't easily check file content, we'll try-catch or just create if unique constrained
    // The previous code just assumed clean DB.
    // Let's just create and ignore error if it's not critical, but media usually doesn't conflict unless filename unique.
    // However, for this fix, let's just create and catch error, or assume they exist if we are "restoring".

    // BETTER APPROACH: Just create. If it fails, assume it exists.
    // But we need the ID.
    // Let's just re-create them. If DB has them, Payload handles it (duplicates allowed usually unless unique field).
    return payload.create({
      collection: 'media',
      data,
      file,
    })
  }

  // NOTE: For "Restore" without wipe, duplicates might happen.
  // We will wrap the Promise.all in individual try-catches or accept that 'categories' slug is unique.

  const image1Doc = await payload.create({ collection: 'media', data: image1, file: image1Buffer })
  const image2Doc = await payload.create({ collection: 'media', data: image2, file: image2Buffer })
  const image3Doc = await payload.create({ collection: 'media', data: image2, file: image3Buffer })
  const imageHomeDoc = await payload.create({
    collection: 'media',
    data: imageHero1,
    file: hero1Buffer,
  })

  await Promise.all(
    categories.map(async (category) => {
      try {
        const existing = await payload.find({
          collection: 'categories',
          where: { slug: { equals: category } },
        })
        if (existing.totalDocs > 0) return existing.docs[0]
        return await payload.create({
          collection: 'categories',
          data: {
            title: category,
            slug: category,
          },
        })
      } catch (e) {
        // Ignore duplicate errors
        return null
      }
    }),
  )

  payload.logger.info(`— Seeding tags...`)

  const createdTags: Record<string, any> = {}

  await Promise.all(
    aureusTags.map(async (tag) => {
      const slug = tag
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '')

      const existingTag = await payload.find({
        collection: 'tags',
        where: { slug: { equals: slug } },
      })

      if (existingTag.totalDocs > 0) {
        createdTags[tag] = existingTag.docs[0].id
        return
      }

      const doc = await payload.create({
        collection: 'tags',
        data: {
          name: tag,
          slug,
        } as any,
      })
      createdTags[tag] = doc.id
    }),
  )

  payload.logger.info(`— Seeding Aureus posts...`)

  // Create posts sequentially
  for (const postData of aureusPosts) {
    const assignedTags = []

    // Check if post exists
    const existingPost = await payload.find({
      collection: 'posts',
      where: { slug: { equals: postData.slug } },
    })
    if (existingPost.totalDocs > 0) {
      // Skip existing post
      continue
    }

    // Simple logic to assign tags based on content for demo purposes
    if (postData.title?.includes('Excellence')) {
      assignedTags.push(createdTags['Développement Web'])
      assignedTags.push(createdTags['Design UI/UX'])
      assignedTags.push(createdTags['Business'])
    } else if (postData.title?.includes('Technique')) {
      assignedTags.push(createdTags['Développement Web'])
      assignedTags.push(createdTags['Infrastructure'])
      assignedTags.push(createdTags['Tech'])
    } else {
      assignedTags.push(createdTags['SEO & Performance'])
      assignedTags.push(createdTags['Business'])
    }

    await payload.create({
      collection: 'posts',
      depth: 0,
      context: {
        disableRevalidate: true,
      },
      data: {
        ...postData,
        heroImage: imageHomeDoc.id, // Corrected variable name
        tags: assignedTags.filter(Boolean),
        authors: [demoAuthor.id], // Corrected field name
      },
    })
  }

  // (Related posts update logic removed for Aureus seed simplification)

  payload.logger.info(`— Seeding contact form...`)

  const contactForm = await payload.create({
    collection: 'forms',
    depth: 0,
    data: contactFormData,
  })

  payload.logger.info(`— Seeding pages...`)

  const contactPageDataToCreate = contactPageData({ contactForm: contactForm })
  const homePageDataToCreate = home({ heroImage: imageHomeDoc, metaImage: image2Doc })

  let contactPage = await payload
    .find({ collection: 'pages', where: { slug: { equals: 'contact' } } })
    .then((res) => res.docs[0])
  if (!contactPage) {
    contactPage = await payload.create({
      collection: 'pages',
      depth: 0,
      data: contactPageDataToCreate,
      context: {
        disableRevalidate: true,
      },
    })
  }

  let homePage = await payload
    .find({ collection: 'pages', where: { slug: { equals: 'home' } } })
    .then((res) => res.docs[0])
  if (!homePage) {
    homePage = await payload.create({
      collection: 'pages',
      depth: 0,
      data: homePageDataToCreate,
      context: {
        disableRevalidate: true,
      },
    })
  } else {
    // Optional: Update home page if it exists to force the new layout?
    // For restoration purposes, yes, let's update it.
    await payload.update({
      collection: 'pages',
      id: homePage.id,
      data: homePageDataToCreate,
      context: {
        disableRevalidate: true,
      },
    })
  }

  payload.logger.info(`— Seeding globals...`)

  await Promise.all([
    payload.updateGlobal({
      slug: 'header',
      data: {
        navItems: [
          {
            link: {
              type: 'custom',
              label: 'Posts',
              url: '/posts',
            },
          },
          {
            link: {
              type: 'reference',
              label: 'Contact',
              reference: {
                relationTo: 'pages',
                value: contactPage.id,
              },
            },
          },
        ],
      } as any,
      context: {
        disableRevalidate: true,
      },
    }),
    payload.updateGlobal({
      slug: 'footer',
      data: {
        navItems: [
          {
            link: {
              type: 'custom',
              label: 'Admin',
              url: '/admin',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Source Code',
              newTab: true,
              url: 'https://github.com/payloadcms/payload/tree/main/templates/website',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Payload',
              newTab: true,
              url: 'https://payloadcms.com/',
            },
          },
        ],
      },
      context: {
        disableRevalidate: true,
      },
    }),
  ])

  payload.logger.info('Seeded database successfully!')
}

async function fetchFileByURL(url: string): Promise<File> {
  const res = await fetch(url, {
    credentials: 'include',
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch file from ${url}, status: ${res.status}`)
  }

  const data = await res.arrayBuffer()

  return {
    name: url.split('/').pop() || `file-${Date.now()}`,
    data: Buffer.from(data),
    mimetype: `image/${url.split('.').pop()}`,
    size: data.byteLength,
  }
}
