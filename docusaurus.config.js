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
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          ],
        },
        blog: {
          path: 'blog',
          // Simple use-case: string editUrl
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
          // Advanced use-case: functional editUrl
          editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
            `https://github.com/dongrentianyu/the-handbook-of-tiddlywiki/blob/main/${blogDirPath}/${blogPath}`,
          editLocalizedFiles: false,
          blogTitle: 'Blog title',
          blogDescription: 'Blog',
          blogSidebarCount: 5,
          blogSidebarTitle: 'All our posts',
          routeBasePath: 'blog',
          include: ['**/*.{md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          postsPerPage: 10,
          blogListComponent: '@theme/BlogListPage',
          blogPostComponent: '@theme/BlogPostPage',
          blogTagsListComponent: '@theme/BlogTagsListPage',
          blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
          truncateMarker: /<!--\s*(truncate)\s*-->/,
          showReadingTime: true,
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
          autoCollapseCategories: true,
        },
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'IHWH0S1K5Z',

        // Public API key: it is safe to commit it
        apiKey: '452e6d27dcde70b671d60dd4c66a31e9',

        indexName: 'the-handbook-of-tiddlywiki',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/\/docs\//', // or as RegExp: /\/docs\//
          to: '/',
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 6,
      },
      image: 'img/favicon.ico',
      navbar: {
        title: '太微之书',
        hideOnScroll: true,
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
                label: '国际论坛',
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
