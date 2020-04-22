export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'prefetch', href: '/images/not-brettie.jpg' },
      { rel: 'prefetch', href: '/images/entrance.jpg' },
      { rel: 'prefetch', href: '/fonts/zillaslab-medium-webfont.woff2' },
      { rel: 'prefetch', href: '/fonts/shadowsintolight-regular-webfont.woff2' },
      { rel: 'prefetch', href: '/fonts/zillaslab-regular-webfont.woff2' }
    ],
    titleTemplate: '%s - Brett Jacobson, Psychologist'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/styles.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend () {
    }
  },
  env: {
  },
  router: {
    linkActiveClass: 'active'
  }
}
