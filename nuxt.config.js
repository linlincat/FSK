module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'fsk',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'team to create the nuxt_frame' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Scss 编译成style
    */
    loaders: [
      {
        test: /\.(scss|sass)$/,
        use: [{
          loader: 'vue-style-loader!css-loader!sass-loader'
        }]
      }
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      // const vueLoader = config.module.rules.find((rule) => {
      //   return rule.loader === 'vue-loader'
      // })
      // vueLoader.options.loaders.scss = 'vue-style-loader!css-loader!sass-loader'
      // if (isDev && isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  }
}
