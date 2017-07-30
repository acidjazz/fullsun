let colors = require('./static/colors.json')
let meta = require('./copy/meta.json')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Full Sun',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Premium Sungrown Goodness' },
      { hid: 'keywords', name: 'keywords', content: meta.keywords },
      { name: "google-site-verification", content: "P4j5FCkrTpQ0MAvJnQMqH4HC12a2F4sJrTvW2g174dk" },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=Edge,chrome=1' },
      { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
      { name: 'viewport', content: 'user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height' },
      { name: "msapplication-config", content: "images/icons/browserconfig.xml" },
      { name: "theme-color", content: colors.tiffanyBlue },

      // facebook
      { property: 'og:url', content: meta.url },
      { property: 'og:title', content: meta.title },
      { property: 'og:image', content: meta.url + meta.share },
      { property: 'og:description', content: meta.description },
      { property: 'og:type', content: 'website' },

      // twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: meta.title },
      { name: 'twitter:description', content: meta.description },
      { name: 'twitter:image', content: meta.url + meta.share },

    ],
    script: [

      { src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/jquery-scrollTo/2.1.2/jquery.scrollTo.min.js" },
      { src: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js" },

    ],

    link: [
      {rel: "apple-touch-icon", sizes: "180x180", href: "/icons/apple-touch-icon.png"},
      {rel: "icon", type: "image/png", href: "/icons/favicon-32x32.png", sizes: "32x32"},
      {rel: "icon", type: "image/png", href: "/icons/favicon-16x16.png", sizes: "16x16"},
      {rel: "manifest", href: "/icons/manifest.json"},
      {rel: "mask-icon", href: "/icons/safari-pinned-tab.svg", color: "5bbad5"},
      {rel:" shortcut,icon", href: "/icons/favicon.ico"},

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
