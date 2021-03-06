
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal', // universal  spa
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  loading: '~/components/common/loading.vue',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main.css',
    '~/assets/css/font-awesome-4.7.0/css/font-awesome.min.css',
    'view-design/dist/styles/iview.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    {src: '~/plugins/iview'},
    {src: '~/plugins/vuex-persistedstate.js', ssr: false},
    {src: '~/plugins/vue-lazyload', ssr: false},
    {src: "~/plugins/vue-awesome-swiper.js", ssr: false },
    {src: "~/plugins/veeValidate.js"},
    {src: "~/plugins/i18n.js"}
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
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    // 'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true,
    prefix: '/api', // baseURL
    credentials: true
  },
  proxy: {
    '/api/': {
      target: 'http://vue.lilysilk.com/lilysilk/public/api/', // 代理地址
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      },
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    transpile: [
      "vee-validate/dist/rules"
    ],
    vendor: ['vue-i18n']
  }
}
