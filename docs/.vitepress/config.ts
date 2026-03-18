import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

// For custom domain (e.g. help.christgospel.org), change base to '/'
const base = "/docs-public/";

export default withMermaid(defineConfig({
  title: "Christ Gospel Church",
  description: "Help center and documentation for CGC applications",
  lang: "en-US",
  base,
  head: [["link", { rel: "icon", href: `${base}favicon.png` }]],

  locales: {
    root: {
      label: "English",
      lang: "en-US",
    },
    es: {
      label: "Español",
      lang: "es-MX",
      themeConfig: {
        nav: [
          { text: "Inicio", link: "/es/" },
          { text: "Ayuda", link: "/es/help/getting-started" },
          { text: "Funciones", link: "/es/features/" },
          { text: "Changelog", link: "/es/changelog/" },
        ],
        sidebar: {
          "/es/help/": [
            {
              text: "Centro de Ayuda",
              items: [
                {
                  text: "Primeros Pasos",
                  link: "/es/help/getting-started",
                },
                {
                  text: "Guía de Inicio de Sesión",
                  link: "/es/help/login-guide",
                },
                {
                  text: "Gestionar Suscripción",
                  link: "/es/help/manage-subscription",
                },
                {
                  text: "Descargas y Offline",
                  link: "/es/help/offline-downloads",
                },
                {
                  text: "Guía del Administrador",
                  link: "/es/help/admin-guide",
                },
                {
                  text: "Preguntas Frecuentes",
                  link: "/es/help/faq",
                },
                {
                  text: "Solución de Problemas",
                  link: "/es/help/troubleshooting",
                },
              ],
            },
          ],
          "/es/features/": [
            {
              text: "Funciones",
              items: [
                { text: "Resumen", link: "/es/features/" },
                { text: "Sermones", link: "/es/features/sermons" },
                {
                  text: "Biblioteca Multimedia",
                  link: "/es/features/media-library",
                },
                {
                  text: "Suscripciones",
                  link: "/es/features/subscriptions",
                },
                {
                  text: "Aplicación Móvil",
                  link: "/es/features/mobile-app",
                },
                {
                  text: "Funciones con IA",
                  link: "/es/features/ai-features",
                },
              ],
            },
          ],
        },
      },
    },
  },

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
}));
