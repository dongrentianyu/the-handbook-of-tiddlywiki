// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '太微之书',
  tagline: 'TiddlyWiki从入门到入迷',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://dongrentianyu.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/the-handbook-of-tiddlywiki/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dongrentianyu', // Usually your GitHub org/user name.
  projectName: 'the-handbook-of-tiddlywiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/dongrentianyu/the-handbook-of-tiddlywiki/blob/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/dongrentianyu/the-handbook-of-tiddlywiki/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      image: 'img/favicon.ico',
      navbar: {
        title: '太微之书',
        logo: {
          alt: 'tiddlywiki Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/dongrentianyu/the-handbook-of-tiddlywiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'Grok TiddlyWiki',
                href: 'https://groktiddlywiki.com/',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'Talk',
                href: 'https://talk.tiddlywiki.org/',
              },
              {
                label: 'QQ 946052860',
                href: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=KdawsTe2_wyge9psEdMtxw6p3IGja-oX&authKey=85azVHAALYhQm1SWGRqWM2c1QQxynUL6CdOr6fvf8JqKBz9kmj2N%2FIcUcnP7A4Ye&noverify=0&group_code=946052860',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/tiddlywiki',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Jermolene/TiddlyWiki5',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 太微之书, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
