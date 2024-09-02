// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const themes = require('prism-react-renderer').themes,
  lightCodeTheme = themes.nightOwlLight,
  darkCodeTheme = themes.palenight,
  repoUrl = "https://github.com",
  repoName = "techdocs",
  repoOwner = "lfir",
  portfolioUrl = "https://maybelambda.cf",
  portfolio = {
    label: "Portfolio",
    href: portfolioUrl,
  },
  blog = { to: "/blog", label: "Blog" },
  contact = {
    label: "Contact",
    href: `${portfolioUrl}/contact.html`,
  },
  liblogofn = "/img/icons/library1-200x200.png";

// @type {import('@docusaurus/types').Config}
const config = {
  title: "Sci & Tech docs",
  tagline: "Personal technical documentation website",
  url: portfolio.href,
  baseUrl: `/${repoName}/`,
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/library1.png",
  organizationName: repoOwner, // Usually your GitHub org/user name.
  projectName: repoName, // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          editUrl: `${repoUrl}/${repoOwner}/${repoName}/edit/devel/`,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: false,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-7V9TKMFQ7L",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "Home",
        logo: {
          alt: "My Site Logo",
          src: "img/bookshelf2.svg",
        },
        items: [
          {
            type: "doc",
            docId: "apache",
            label: "Docs",
          },
          blog,
          contact,
          portfolio,
        ],
        hideOnScroll: true,
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Main sections",
            items: [
              {
                label: "Docs",
                to: "/docs/apache",
              },
              blog,
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub repository",
                href: `${repoUrl}/${repoOwner}/${repoName}`,
              },
              contact,
              portfolio,
            ],
          },
        ],
        logo: {
          alt: "Facebook Open Source Logo",
          src: "img/oss_logo.png",
          href: "https://opensource.facebook.com",
          width: 170,
          height: 55,
          target: "_blank",
        },
        copyright: `Copyright © ${new Date().getFullYear()}
          <a href="mailto:psljp@protonmail.com">Asta86</a>. Built with <a href="https://docusaurus.io" target="_blank" rel="noreferrer noopener">Docusaurus</a>.`,
      },
      prism: {
        additionalLanguages: ["bash", "java", "json"],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    "@cmfcmf/docusaurus-search-local",
    [
      "@docusaurus/plugin-pwa",
      {
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: liblogofn,
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(37, 194, 160)",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#000",
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            href: liblogofn,
          },
          {
            tagName: "link",
            rel: "mask-icon",
            href: liblogofn,
            color: "rgb(37, 194, 160)",
          },
          {
            tagName: "meta",
            name: "msapplication-TileImage",
            content: liblogofn,
          },
          {
            tagName: "meta",
            name: "msapplication-TileColor",
            content: "#000",
          },
        ],
      },
    ],
  ],
};

module.exports = config;
