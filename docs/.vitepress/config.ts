import { defineConfig } from "vitepress";

// For custom domain (e.g. help.christgospel.org), change base to '/'
const base = "/docs-public/";

export default defineConfig({
  title: "Christ Gospel Church",
  description: "Help center and documentation for CGC applications",
  lang: "en-US",
  base,
  head: [["link", { rel: "icon", href: `${base}favicon.png` }]],

  themeConfig: {
    logo: "/cgc-logo-blue.png",
    siteTitle: "CGC Help Center",

    nav: [
      { text: "Home", link: "/" },
      { text: "Help", link: "/help/getting-started" },
      { text: "Features", link: "/features/" },
      { text: "Changelog", link: "/changelog/" },
    ],

    sidebar: {
      "/help/": [
        {
          text: "Help Center",
          items: [
            { text: "Getting Started", link: "/help/getting-started" },
            { text: "Login Guide", link: "/help/login-guide" },
            {
              text: "Manage Subscription",
              link: "/help/manage-subscription",
            },
            {
              text: "Offline & Downloads",
              link: "/help/offline-downloads",
            },
            { text: "Admin Guide", link: "/help/admin-guide" },
            { text: "FAQ", link: "/help/faq" },
            { text: "Troubleshooting", link: "/help/troubleshooting" },
          ],
        },
      ],
      "/features/": [
        {
          text: "Features",
          items: [
            { text: "Overview", link: "/features/" },
            { text: "Sermons", link: "/features/sermons" },
            { text: "Media Library", link: "/features/media-library" },
            { text: "Subscriptions", link: "/features/subscriptions" },
            { text: "Mobile App", link: "/features/mobile-app" },
            { text: "AI-Powered Features", link: "/features/ai-features" },
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/cgc-church" }],

    footer: {
      message: "Christ Gospel Church",
      copyright: `© ${new Date().getFullYear()} Christ Gospel Church. All rights reserved.`,
    },

    search: {
      provider: "local",
    },
  },
});
