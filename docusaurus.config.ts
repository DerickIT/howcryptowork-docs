import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'CryptoWorks',
  tagline: "A Practitioner's Guide to the Crypto Industry",
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://cryptoworks.guide',
  baseUrl: '/',

  organizationName: 'cryptoworks',
  projectName: 'cryptoworks-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en-US',
      },
      'zh-Hans': {
        label: '简体中文',
        htmlLang: 'zh-Hans',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/cryptoworks-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'CryptoWorks',
      logo: {
        alt: 'CryptoWorks Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/cryptoworks',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Preface', to: '/docs/preface' },
            { label: 'Bitcoin', to: '/docs/bitcoin' },
            { label: 'Ethereum', to: '/docs/ethereum' },
          ],
        },
        {
          title: 'Topics',
          items: [
            { label: 'DeFi', to: '/docs/defi' },
            { label: 'Stablecoins & RWAs', to: '/docs/stablecoins-rwas' },
            { label: 'Governance', to: '/docs/governance' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'GitHub', href: 'https://github.com/cryptoworks' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CryptoWorks. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['solidity', 'bash', 'json', 'typescript'],
    },
    mermaid: {
      theme: { light: 'neutral', dark: 'dark' },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
