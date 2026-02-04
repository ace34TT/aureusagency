import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type HomeArgs = {
  heroImage: Media
  metaImage: Media
}

export const home: (args: HomeArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  heroImage,
  metaImage,
}) => {
  return {
    slug: 'home',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      richText: {
        root: {
          type: 'root',
          children: [
            {
              type: 'heading',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Aureus Agency',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              tag: 'h1',
              version: 1,
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Agence Digitale Premium : Design UI/UX & Développement Web',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
    },
    layout: [
      {
        blockName: 'Services',
        blockType: 'services',
        tagline: 'Nos Services',
        richHeadline: {
          root: {
            children: [{ type: 'text', version: 1, text: 'Expertise & Innovation' }],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        services: [
          {
            title: 'Design UI/UX',
            description:
              "Création d'interfaces modernes, intuitives et centrées sur l'utilisateur pour maximiser la conversion.",
          },
          {
            title: 'Développement Web',
            description:
              'Sites performants utilisant Next.js et Payload CMS pour une maintenabilité optimale.',
          },
          {
            title: 'Audit & SEO',
            description:
              'Optimisation technique pour le référencement naturel et la performance (Core Web Vitals).',
          },
        ],
      },
      {
        blockName: 'Work Showcase',
        blockType: 'workShowcase',
        tagline: 'Nos Réalisations',
        richHeadline: {
          root: {
            children: [{ type: 'text', version: 1, text: 'Projets Récents' }],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        richDescription: {
          root: {
            children: [
              {
                type: 'text',
                version: 1,
                text: 'Découvrez comment nous aidons nos clients à atteindre leurs objectifs.',
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        projects: [
          {
            name: 'Luxe & Co',
            result: '+150% de conversion',
            summary:
              "Refonte complète du site e-commerce pour une marque de luxe, axée sur l'expérience utilisateur et la performance mobile.",
            link: 'https://example.com',
          },
          {
            name: 'TechFlow',
            result: 'Vitesse x3',
            summary:
              'Optimisation de la plateforme SaaS et migration vers Next.js pour une scalabilité maximale.',
            link: 'https://example.com',
          },
          {
            name: 'GreenEnergy',
            result: '-40% Taux de rebond',
            summary:
              "Création d'une identité visuelle forte et d'un site vitrine pour une startup dans les énergies renouvelables.",
            link: 'https://example.com',
          },
        ],
      },
      {
        blockName: 'Process',
        blockType: 'process',
        tagline: 'Méthodologie',
        richHeadline: {
          root: {
            children: [{ type: 'text', version: 1, text: 'Comment nous travaillons' }],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        steps: [
          {
            title: 'Immersion',
            copy: 'Nous analysons votre marché et vos besoins pour définir une stratégie digitale sur mesure.',
            icon: 'search',
          },
          {
            title: 'Design & Prototype',
            copy: "Création de maquettes haute-fidélité pour valider l'expérience utilisateur avant le code.",
            icon: 'paintbrush',
          },
          {
            title: 'Développement',
            copy: 'Intégration pixel-perfect et développement backend robuste avec les meilleures technologies.',
            icon: 'layout',
          },
          {
            title: 'Déploiement',
            copy: 'Mise en ligne, tests de performance et formation de vos équipes.',
            icon: 'rocket',
          },
        ],
      },
      {
        blockName: 'Testimonials',
        blockType: 'testimonials',
        tagline: 'Confiance',
        richHeadline: {
          root: {
            children: [{ type: 'text', version: 1, text: 'Ils nous font confiance' }],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        testimonials: [
          {
            quote:
              'Une équipe réactive et professionnelle qui a su transformer notre vision en un site web performant.',
            authorName: 'Jean Dupont',
            authorRole: 'CEO, TechStart',
          },
          {
            quote:
              'Le design est magnifique et les performances sont au rendez-vous. Je recommande vivement Aureus.',
            authorName: 'Marie Martin',
            authorRole: 'Marketing Director, LuxeCorp',
          },
        ],
      },
      {
        blockName: 'Blog List',
        blockType: 'blogList',
        title: {
          root: {
            children: [
              {
                type: 'heading',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Derniers Articles',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                tag: 'h3',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        limit: 3,
      },
    ],
    meta: {
      description: 'Aureus Agency - Agence Web Premium',
      image: heroImage.id,
      title: 'Aureus Agency',
    },
    title: 'Home',
  }
}
