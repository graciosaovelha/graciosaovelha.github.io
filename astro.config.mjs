import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightTags from 'starlight-tags';

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
      plugins: [
        starlightTags({
          configPath: 'tags.yml',
          tagsPagesPrefix: 'tags',
          tagsIndexSlug: 'tags',
          onInlineTagsNotFound: 'error',
          itemsPerPage: 18,
        }),
      ],
      sidebar: [
        { label: 'Início', slug: 'index' },
        {
          label: 'Torah',
          items: [
            { label: 'Visão geral', slug: 'torah' },
            { label: 'Bereshit — Gênesis', autogenerate: { directory: 'torah/bereshit' } },
            { label: 'Shemot — Êxodo', autogenerate: { directory: 'torah/shemot' } },
            { label: 'Vayikra — Levítico', autogenerate: { directory: 'torah/vayikra' } },
            { label: 'Bamidbar — Números', autogenerate: { directory: 'torah/bamidbar' } },
            { label: 'Devarim — Deuteronômio', autogenerate: { directory: 'torah/devarim' } },
          ],
        },
        {
          label: 'Parashot',
          items: [
            { label: 'Visão geral', slug: 'parashot' },
            { label: 'Bereshit', autogenerate: { directory: 'parashot/bereshit' } },
            { label: 'Shemot', autogenerate: { directory: 'parashot/shemot' } },
            { label: 'Vayikra', autogenerate: { directory: 'parashot/vayikra' } },
            { label: 'Bamidbar', autogenerate: { directory: 'parashot/bamidbar' } },
            { label: 'Devarim', autogenerate: { directory: 'parashot/devarim' } },
          ],
        },
        { label: 'Estudos', slug: 'estudos' },
        { label: 'Glossário', slug: 'glossario' },
        { label: 'Tags', link: '/tags/' },
        { label: 'Sobre', slug: 'sobre' },
      ],
    }),
  ],
});
