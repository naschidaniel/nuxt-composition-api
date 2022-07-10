export default {
  head: {
    title: 'nuxt-composition-api',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/composition-api/module'
  ],

  modules: [],

  build: {}
}
