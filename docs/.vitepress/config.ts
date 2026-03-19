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
          { text: "Primeros Pasos", link: "/es/getting-started/" },
          { text: "Contenido", link: "/es/content/sermons" },
          { text: "Changelog", link: "/es/changelog/" },
        ],
        sidebar: {
          "/es/getting-started/": [
            {
              text: "Primeros Pasos",
              items: [
                { text: "Resumen", link: "/es/getting-started/" },
                { text: "Descargar la App", link: "/es/getting-started/download-the-app" },
                { text: "Crear tu Cuenta", link: "/es/getting-started/create-your-account" },
              ],
            },
          ],
          "/es/account/": [
            {
              text: "Cuenta",
              items: [
                { text: "Iniciar Sesión", link: "/es/account/login" },
                { text: "Recuperar Contraseña", link: "/es/account/password-recovery" },
                { text: "Perfil", link: "/es/account/profile" },
                { text: "Desbloqueo Biométrico", link: "/es/account/biometric-unlock" },
                { text: "Plan Familiar", link: "/es/account/family-plan" },
              ],
            },
          ],
          "/es/content/": [
            {
              text: "Contenido",
              items: [
                { text: "Sermones", link: "/es/content/sermons" },
                { text: "Música", link: "/es/content/music" },
                { text: "Libros", link: "/es/content/books" },
                { text: "Videos", link: "/es/content/videos" },
                { text: "Podcasts y Radio", link: "/es/content/podcasts-radio" },
                { text: "Frase del Día", link: "/es/content/quote-of-the-day" },
                { text: "Servicios en Vivo", link: "/es/content/live-services" },
              ],
            },
          ],
          "/es/my-library/": [
            {
              text: "Mi Biblioteca",
              items: [
                { text: "Listas de Reproducción", link: "/es/my-library/playlists" },
                { text: "Favoritos", link: "/es/my-library/favorites" },
                { text: "Notas y Resaltados", link: "/es/my-library/notes-highlights" },
                { text: "Descargas y Offline", link: "/es/my-library/downloads-offline" },
                { text: "Reproducción", link: "/es/my-library/playback" },
              ],
            },
          ],
          "/es/search-ai/": [
            {
              text: "Búsqueda e IA",
              items: [
                { text: "Buscar", link: "/es/search-ai/search" },
                { text: "Asistente IA", link: "/es/search-ai/ai-assistant" },
              ],
            },
          ],
          "/es/subscriptions/": [
            {
              text: "Suscripciones",
              items: [
                { text: "Planes", link: "/es/subscriptions/plans" },
                { text: "Gestionar Suscripción", link: "/es/subscriptions/manage-subscription" },
                { text: "Métodos de Pago", link: "/es/subscriptions/payment-methods" },
                { text: "Créditos IA", link: "/es/subscriptions/ai-credits" },
              ],
            },
          ],
          "/es/settings/": [
            {
              text: "Configuración",
              items: [
                { text: "Temas", link: "/es/settings/themes" },
                { text: "Idioma", link: "/es/settings/language" },
                { text: "Notificaciones", link: "/es/settings/notifications" },
              ],
            },
          ],
          "/es/admin/": [
            {
              text: "Administración",
              items: [
                { text: "Resumen", link: "/es/admin/" },
                { text: "Gestión de Contenido", link: "/es/admin/managing-content" },
                { text: "Gestión de Usuarios", link: "/es/admin/managing-users" },
                { text: "Notificaciones Push", link: "/es/admin/push-notifications" },
                { text: "Tickets de Retroalimentación", link: "/es/admin/feedback-tickets" },
              ],
            },
          ],
          "/es/troubleshooting/": [
            {
              text: "Solución de Problemas",
              items: [
                { text: "Resumen", link: "/es/troubleshooting/" },
                { text: "Problemas de Inicio de Sesión", link: "/es/troubleshooting/login-issues" },
                { text: "Problemas de Reproducción", link: "/es/troubleshooting/playback-issues" },
                { text: "Problemas de Descarga", link: "/es/troubleshooting/download-issues" },
                { text: "Problemas de Facturación", link: "/es/troubleshooting/billing-issues" },
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
      { text: "Getting Started", link: "/getting-started/" },
      { text: "Content", link: "/content/sermons" },
      { text: "Changelog", link: "/changelog/" },
    ],

    sidebar: {
      "/getting-started/": [
        {
          text: "Getting Started",
          items: [
            { text: "Overview", link: "/getting-started/" },
            { text: "Download the App", link: "/getting-started/download-the-app" },
            { text: "Create Your Account", link: "/getting-started/create-your-account" },
          ],
        },
      ],
      "/account/": [
        {
          text: "Account",
          items: [
            { text: "Login", link: "/account/login" },
            { text: "Password Recovery", link: "/account/password-recovery" },
            { text: "Profile", link: "/account/profile" },
            { text: "Biometric Unlock", link: "/account/biometric-unlock" },
            { text: "Family Plan", link: "/account/family-plan" },
          ],
        },
      ],
      "/content/": [
        {
          text: "Content",
          items: [
            { text: "Sermons", link: "/content/sermons" },
            { text: "Music", link: "/content/music" },
            { text: "Books", link: "/content/books" },
            { text: "Videos", link: "/content/videos" },
            { text: "Podcasts & Radio", link: "/content/podcasts-radio" },
            { text: "Quote of the Day", link: "/content/quote-of-the-day" },
            { text: "Live Services", link: "/content/live-services" },
          ],
        },
      ],
      "/my-library/": [
        {
          text: "My Library",
          items: [
            { text: "Playlists", link: "/my-library/playlists" },
            { text: "Favorites", link: "/my-library/favorites" },
            { text: "Notes & Highlights", link: "/my-library/notes-highlights" },
            { text: "Downloads & Offline", link: "/my-library/downloads-offline" },
            { text: "Playback", link: "/my-library/playback" },
          ],
        },
      ],
      "/search-ai/": [
        {
          text: "Search & AI",
          items: [
            { text: "Search", link: "/search-ai/search" },
            { text: "AI Assistant", link: "/search-ai/ai-assistant" },
          ],
        },
      ],
      "/subscriptions/": [
        {
          text: "Subscriptions",
          items: [
            { text: "Plans", link: "/subscriptions/plans" },
            { text: "Manage Subscription", link: "/subscriptions/manage-subscription" },
            { text: "Payment Methods", link: "/subscriptions/payment-methods" },
            { text: "AI Credits", link: "/subscriptions/ai-credits" },
          ],
        },
      ],
      "/settings/": [
        {
          text: "Settings",
          items: [
            { text: "Themes", link: "/settings/themes" },
            { text: "Language", link: "/settings/language" },
            { text: "Notifications", link: "/settings/notifications" },
          ],
        },
      ],
      "/admin/": [
        {
          text: "Administration",
          items: [
            { text: "Overview", link: "/admin/" },
            { text: "Managing Content", link: "/admin/managing-content" },
            { text: "Managing Users", link: "/admin/managing-users" },
            { text: "Push Notifications", link: "/admin/push-notifications" },
            { text: "Feedback Tickets", link: "/admin/feedback-tickets" },
          ],
        },
      ],
      "/troubleshooting/": [
        {
          text: "Troubleshooting",
          items: [
            { text: "Overview", link: "/troubleshooting/" },
            { text: "Login Issues", link: "/troubleshooting/login-issues" },
            { text: "Playback Issues", link: "/troubleshooting/playback-issues" },
            { text: "Download Issues", link: "/troubleshooting/download-issues" },
            { text: "Billing Issues", link: "/troubleshooting/billing-issues" },
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
