export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  router: {
    base: '/2020/12/year-in-review/'
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Year in review: Pride and persistence',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'In a year of many challenges, the UC Santa Cruz community supported each other while advancing critical causes.'
      },
      { property: "og:site_name", content: "UC Santa Cruz" },
      { hid: "og:type", property: "og:type", content: "article" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://news.ucsc.edu/2020/12/year-in-review/",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Pride and persistence",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "In a year of many challenges, the UC Santa Cruz community supported each other while advancing critical causes.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://news.ucsc.edu/2020/12/year-in-review/redwoods-looking-up.jpg",
      },
      { property: "og:image:width", content: "1600" },
      { property: "og:image:height", content: "1067" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://www.ucsc.edu/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~plugins/date-filter.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxt/content'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  googleAnalytics: {
    id: 'UA-4301164-1',
    debug: {
      enabled: false
    }
  }
}
