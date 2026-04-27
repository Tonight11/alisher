// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],

  sourcemap: false,

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  i18n: {
    langDir: 'locales',
    strategy: 'no_prefix',
    defaultLocale: 'en',
    detectBrowserLanguage: false,
    locales: [
      { code: 'en', language: 'en-US', file: 'en.json', name: 'English' },
      { code: 'zh', language: 'zh-CN', file: 'zh.json', name: '\u4e2d\u6587' }
    ]
  },

  compatibilityDate: '2025-01-15'
})
