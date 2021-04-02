const meta = {
  title: 'California Medicare for All',
  description: "It's time for M4A in California",
  image: 'https://cam4a.org/graphs/header-cam4asite.png',
  image_alt: '',
}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: meta.title,
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: meta.description,
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: meta.title,
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: meta.description,
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: meta.image,
      },
      {
        hid: 'og:image:alt',
        name: 'og:image:alt',
        content: meta.image_alt,
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: meta.title,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: meta.description,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: meta.image,
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: meta.image_alt,
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_image_large',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['static/styles/style.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-i18n'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', dir: 'ltr' },
      { code: 'es', iso: 'es', dir: 'ltr' },
    ],
    defaultLocale: 'en',
    langDir: '~/locales/',
    vueI18n: {
      fallbackLocale: 'en',
    },
    vueI18nLoader: true,
  },
}
