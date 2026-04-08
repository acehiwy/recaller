import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://acehiwy.github.io',
  base: '/recaller/',
  integrations: [
    starlight({
      title: 'Recaller',
      logo: {
        src: './src/assets/logo.svg',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/acehiwy/recaller',
        },
      ],
      sidebar: [
        { slug: '' },
        {
          label: 'Framework',
          autogenerate: { directory: 'framework' },
          collapsed: true,
        },
        {
          label: 'Tools',
          autogenerate: { directory: 'tool' },
          collapsed: true,
        },
        {
          label: 'Concepts',
          autogenerate: { directory: 'concept' },
          collapsed: true,
        },
        {
          label: 'Language',
          items: [
            {
              label: 'Python',
              autogenerate: { directory: 'language/python' },
              collapsed: true,
            },
            {
              label: 'Rust',
              autogenerate: { directory: 'language/rust' },
              collapsed: true,
            },
            {
              label: 'TypeScript',
              autogenerate: { directory: 'language/typescript' },
              collapsed: true,
            },
          ],
          collapsed: true,
        },
        {
          label: 'System Design',
          autogenerate: { directory: 'system-design' },
          collapsed: true,
        },
      ],
      tableOfContents: { maxHeadingLevel: 5 },
      lastUpdated: true,
      customCss: ['./src/styles/custom.css'],
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            integrity:
              'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
            crossorigin: 'anonymous',
          },
        },
      ],
      expressiveCode: {
        themes: ['github-dark', 'github-light'],
      },
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
