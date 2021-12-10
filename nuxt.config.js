export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  router: {
    base: '/2021/12/year-in-review/'
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Year in review: Giving voice to the challenges of our time',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'With purpose-driven and persistent effort, we sought to advance justice, push the envelope of knowledge, and advocate for transformative change.'
      },
      { property: "og:site_name", content: "UC Santa Cruz" },
      { hid: "og:type", property: "og:type", content: "article" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://news.ucsc.edu/2021/12/year-in-review/",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Year in review: Giving voice to the challenges of our time",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "With purpose-driven and persistent effort, we sought to advance justice, push the envelope of knowledge, and advocate for transformative change.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://news.ucsc.edu/2021/12/images/circle-students.jpg",
      },
      { property: "og:image:width", content: "2000" },
      { property: "og:image:height", content: "1333" },
      { property: "og:image:alt", content: "POV: your new college friends have your back if you fall down" },
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
