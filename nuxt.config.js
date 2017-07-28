module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { name: "google-site-verification", content: "P4j5FCkrTpQ0MAvJnQMqH4HC12a2F4sJrTvW2g174dk" },
    ],
    script: [
      { src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/jquery-scrollTo/2.1.2/jquery.scrollTo.min.js" },
      { src: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js" },
      // { src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAIq84pji4ovumANXXolMqkGwQX8kM1mKc&callback=Map.i&libraries=places" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  css: [{ src: '~assets/stylus/main.styl', lang: 'stylus' }],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
