
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900&display=swap' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/style.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    '@aceforth/nuxt-optimized-images'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    [
      'nuxt-i18n',
      {
        locales: [{
          code: 'en',
          iso: 'en-US',
          file: 'en.json'
        }, {
          code: 'de',
          iso: 'de-DE',
          file: 'de.json'
        }],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en'
        },
        langDir: 'locales/',
        lazy: true,
        seo: true
      }
    ]
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  render: {
    bundleRenderer: {
      shouldPreload: (_file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  optimizedImages: {
    optimizeImages: true
  }
}
