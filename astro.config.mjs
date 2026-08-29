import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const SITE = 'https://graciosaovelha.github.io';
const REPOSITORY = 'https://github.com/graciosaovelha/graciosaovelha.github.io';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'Graciosa Ovelha',
      description: 'Um caminho diário pela Torah à luz da Cabalá autêntica.',
      logo: {
        src: './src/assets/logo.svg',
        alt: 'Graciosa Ovelha',
      },
      favicon: '/favicon.svg',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Português (Brasil)',
          lang: 'pt-BR',
        },
      },
      pagefind: true,
      pagination: true,
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      editLink: {
        baseUrl: `${REPOSITORY}/edit/main/`,
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: REPOSITORY,
        },
      ],
      customCss: ['./src/styles/custom.css'],
      components: {
        PageTitle: './src/components/PageTitle.astro',
      },
      sidebar: [
  {
    label: 'Início',
    link: '/',
  },

  {
    label: 'Torah',
    items: [
      {
        label: 'Visão geral',
        link: '/torah/',
      },

      {
        label: 'Bereshit — Gênesis',
        items: [
          {
            autogenerate: {
              directory: 'torah/bereshit',
            },
          },
        ],
      },

      {
        label: 'Shemot — Êxodo',
        items: [
          {
            autogenerate: {
              directory: 'torah/shemot',
            },
          },
        ],
      },

      {
        label: 'Vayikra — Levítico',
        items: [
          {
            autogenerate: {
              directory: 'torah/vayikra',
            },
          },
        ],
      },

      {
        label: 'Bamidbar — Números',
        items: [
          {
            autogenerate: {
              directory: 'torah/bamidbar',
            },
          },
        ],
      },

      {
        label: 'Devarim — Deuteronômio',
        items: [
          {
            autogenerate: {
              directory: 'torah/devarim',
            },
          },
        ],
      },
    ],
  },

  {
    label: 'Parashot',
    items: [
      {
        label: 'Visão geral',
        link: '/parashot/',
      },

      {
        label: 'Bereshit',
        items: [
          {
            autogenerate: {
              directory: 'parashot/bereshit',
            },
          },
        ],
      },

      {
        label: 'Shemot',
        items: [
          {
            autogenerate: {
              directory: 'parashot/shemot',
            },
          },
        ],
      },

      {
        label: 'Vayikra',
        items: [
          {
            autogenerate: {
              directory: 'parashot/vayikra',
            },
          },
        ],
      },

      {
        label: 'Bamidbar',
        items: [
          {
            autogenerate: {
              directory: 'parashot/bamidbar',
            },
          },
        ],
      },

      {
        label: 'Devarim',
        items: [
          {
            autogenerate: {
              directory: 'parashot/devarim',
            },
          },
        ],
      },
    ],
  },

  {
    label: 'Estudos',
    link: '/estudos/',
  },

  {
    label: 'Glossário',
    link: '/glossario/',
  },

  {
    label: 'Sobre',
    link: '/sobre/',
  },
],
    }),
  ],
});
