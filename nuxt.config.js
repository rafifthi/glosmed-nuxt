export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Glosmed | Distributor Alat Kesehatan Mata',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:title', name: 'og:title', content: 'Glosmed | Distributor Alat Kesehatan Mata' },
      { hid: 'og:image', name: 'og:image', content: '~/static/icon.png' },
      { hid: 'og:image:alt', name: 'og:image:alt', content: 'Glosmed Company Logo' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Glosmed mensuplai alat-alat kesehatan dan bahan penunjang operasi mata lainnya ke Rumah Sakit Umum dan Rumah Sakit khusus Mata yang ada di seluruh Indonesia.'
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700&display=swap'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/strapi'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_URL
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BASE_URL
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: {
        title: 'Glosmed - Distributor Alat Kesehatan Mata',
        author: 'Rafif Fathi',
        description: 'Glosmed mensuplai alat-alat kesehatan dan bahan penunjang operasi mata lainnya ke Rumah Sakit Umum dan Rumah Sakit khusus Mata yang ada di seluruh Indonesia.',
        theme_color: '#00ADC7',
        lang: 'id',
        ogHost: 'https://glosmed.com'
      }
    },
    manifest: {
      name: 'Glosmed - Distributor Alat Kesehatan Mata',
      short_name: 'Glosmed',
      theme_color: '#00ADC7',
      description: 'Glosmed mensuplai alat-alat kesehatan dan bahan penunjang operasi mata lainnya ke Rumah Sakit Umum dan Rumah Sakit khusus Mata yang ada di seluruh Indonesia.',
      lang: 'id'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  }
}
