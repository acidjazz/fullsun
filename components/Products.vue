<template lang="pug">
doctype
.section.section_products#products(:class="{ half: !apparelF, full: apparelF }")


  .subsection.subsection_products
    .title products
    .description All our products are 100% sungrown in Humboldt County, California. We use all-natural, responsible farming practices to yield cleaner, stronger cannabis of the highest taste, quality, and performance. 

    .productlist
      a.product(v-for="product, index in products",@click="select(product)")
        .image
          .overlay
          img(:src="'/images/products/' + product.thumb ")
        .name {{ product.name }}
        .title {{ product.title }}
      a.product(@click="toApparel()")
        .image
          .overlay
          img(src="/images/products/anvil_tee_thumb.jpg")
        .name apparel
        .title Everyday Apparel


  .subsection.subsection_apparel#apparel(:class="{on: apparelF, off: !apparelF}")
    .title apparel
    .description California inspired line of everyday apparel. Perfect for lounging around or expanding your horizons, our graphic apparel collection has something for everyone.

    .productlist
      a.product(v-for="product, index in apparel",@click="select(product)")
        .image
          img(:src="'/images/products/' + product.thumb ")
        .name {{ product.name }}
        .title {{ product.title }}

  .backdrop(:class="{ on: this.selected !== false, off: this.selected === false}")
    .left
    .right

  // .details(:class="{ on: selected !== false, off: selected === false}")
  .details(v-if="selected")
    .inner
      .image(:class="{ on: this.selected !== false, off: this.selected === false}")
        .inner(:style="'background-image: url(/images/products/' + selected.thumb + ')'")
      .image.tag.on(
        :class="'tag_' + flavor.tag",
        v-if="selected.flavors"
        v-for="flavor, index in selected.flavors")
        .inner(
          style="'background-image: url(/images/products/types/' + flavor.tag + '.jpg)'",
          v-if="flavor.tag !== undefined")

      .detail(:class="{ on: this.selected !== false, off: this.selected === false}")
        .close(@click="unselect()") &#10005;
        .copy
          .inner
            .sun
              include ../static/vector/sun.svg
              include ../static/vector/sunb.svg
            .name {{ selected.name }}
            .title {{ selected.title }}
            .description
              p(v-for="d, index in selected.description") {{ d }}
            .flavors(v-if="selected.flavors !== undefined")
              .flavor(
                v-for="flavor, index in selected.flavors",
                :class="{ on: selectedF === flavor.name, off: selectedF !== flavor.name }",
                @click="selectedF = (selectedF === flavor.name) ? false : flavor.name")
                .name(:data-tag="flavor.tag",:data-thc="flavor.thc") {{ flavor.name }}
                .description
                  p(v-for="desc in flavor.desc") {{ desc }}
            .clear
            .clear
            .datas(v-if="selected.detail")
              .data(v-for="detail, index in selected.detail")
                .left {{ detail.left }}
                .right {{ detail.right }}
              .clear

            script(
              v-if="selected.selz",
              data-selz-t='_selz-btn-default',
              :data-selz-b="'http://selz.co/' + selected.selz",
              data-text='Buy it now',
              data-selz-a='modal').

              var _$elz = {};
              _$elz.b = { e: document.createElement("script") };
              _$elz.b.e.src = "https://selz.com/embed/button"; document.body.appendChild(_$elz.b.e);

</template>

<script>
export default {

  created () {
    this.products = require('~/copy/products.json')
    this.apparel = require('~/copy/apparel.json')
  },

  methods: {

    toApparel () {
      if (this.apparelF === false) {

        this.apparelF = true

        setTimeout(() => {
          window.$('html, body').scrollTo('#apparel', {
            duration: 500,
            offset: -86
          })

        }, 50)
      } else {
        this.apparelF = false
      }
    },

    select (product) {
      this.selected = product
      this.scrollOff()
      this.$store.commit('selected', true)
    },

    unselect (product) {
      this.selected = false
      this.scrollOn()
      this.$store.commit('selected', false)
    },

    scrollOff () {
      window.$(document).bind('touchmove mousewheel', function (event) {
        event.preventDefault()
      })
    },
    scrollOn () {
      window.$(document).unbind('touchmove mousewheel')
    },
  },

  mounted () {

    this.$ = window.$
    if (this.$(window).width() < 1000) {
      this.offset = 0
    }
  },
  data () {
    return {
      products: {},
      offset: -86,
      selected: false,
      selectedF: false,
      apparelF: false,
    }
  },

}
</script>

<style lang="stylus">
json('../static/colors.json')
json('../static/fonts.json')
@import '../assets/stylus/mixins.styl'
@import '../assets/stylus/keyframes.styl'

.backdrop
  background-color white
  position fixed
  fullsize()
  onoff()
  z-index 19
  > .left
    float left
    width 50%
    height 100%
    background-color white
  > .right
    float right
    width 50%
    height 100%
    background-color springWood

.section_products
  &.half
    height 1400px
  &.full
    height 2700px
  > .subsection
    clear both
    onoff()
    > .title
      font h1
      text-align center
      color tiffanyBlue
      padding 50px 0 25px 0
      clear both
    > .description
      font c4
      text-align center
      color orange3
      line-height 30px
      padding 0 0 50px 0
      max-width 860px
      margin auto
    > .productlist
      text-align center
      width 980px
      margin 0 auto 30px auto
      > .product
        cursor pointer
        display inline-block
        width 300px
        color tiffanyBlue
        margin 0 40px 30px 0
        user-select none
        &:nth-child(3n+3)
          margin 0 0 30px 0
        &:hover
          > .image > .overlay
            opacity 1
          > .name, > .title
            color seaBuckthorn
        > .image
          height auto
          width 100%
          position relative
          > .overlay
            position absolute
            fullsize()
            background-color rgba(seaBuckthorn, 0.2)
            opacity 0
            transition opacity 0.2s ease-in-out 0s
          > img
            height auto
            width 100%
          position relative
        > .name
          font h4
          padding 20px 0 0 0
          transition color 0.2s ease-in-out 0s
          clear both
        > .title
          clear both
          font c1ss
          font-size 12px
          letter-spacing 1px
          // font h3
          // text-transform uppercase
          // font-size 9px
          margin auto
          line-height 20px
          transition color 0.2s ease-in-out 0s


  > .details
    position fixed
    fullsize()
    onoff()
    z-index 20
    top 86px
    > .inner
      width 100%
      height 100%
      position relative
      > .image, > .detail
        top 0
        position absolute
        width 50vw
        height calc(100vh - 86px)
        max-height 800px

      > .image
        left 0
        background-color gc(white1)
        onoff()
        
        > .inner
          animation inFromLeft 0.4s ease-in-out 0.2s both
          width 50vw
          height calc(100vh - 86px)
          max-height 800px
          background-position 50% 0px
          background-repeat no-repeat
          background-size cover 
          position relative
          float right
          > .versions
            position absolute
            bottom 30px
            left 20px
            > .version
              cursor pointer
              width 30px
              height 30px
              float left
              margin-left 10px
              border 1px solid transparent
              &.active
                border 1px solid seaBuckthorn
        &:nth-child(2) > .inner
          background-position 50% -100px
        &:nth-child(4) > .inner
          background-position 50% -100px
      > .detail
        font c1s
        right 0
        background-color springWood
        onoff()
        > .close
          cursor pointer
          height 50px
          width 50px
          text-align center
          position fixed
          bottom 20px
          left 50%
          margin-left -25px
          font h1
          color tiffanyBlue
        > .copy
          text-align center
          color tiffanyBlue
          > .inner
            width 400px
            height 600px
            margin auto
            position absolute
            top 50%
            right 50%
            margin-top -300px
            margin-right -200px
            > .sun
              position relative
              width 100px
              height 50px
              margin auto
              > svg > path#sunFilled
                display none
              > svg
                > path
                  fill seaBuckthorn
            > .name
              font h4
              padding 10px 0 0 0
              animation inFromBottom 0.2s ease-in-out 0.3s both
            > .title
              padding 10px 0 0 20px 0
              animation inFromBottom 0.2s ease-in-out 0.4s both
            > .description
              padding 0 0 10px 0
              animation inFromBottom 0.2s ease-in-out 0.5s both
              line-height 22px
              > p
                > b
                  font c1sb
            > .flavors
              animation inFromBottom 0.2s ease-in-out 0.5s both
              margin -10px 0 60px 0
              clear both
              > .flavor
                width 50%
                float left
                &.off > .description
                  height 0px
                &.on > .name
                  color tiffanyBlue
                  text-decoration underline
                &.on > .description
                  height 120px
                > .name
                  cursor pointer
                  display inline-block
                  color seaBuckthorn
                  padding 5px 0px
                  font c3
                  text-transform uppercase
                > .description
                  overflow hidden
                  transition height 0.2s linear 0s
                  > p
                    font c1ss
                    &:last-child
                      padding 5px 0 0 0
                &:nth-child(3)
                  clear both
            > .datas
              border 1px solid seaBuckthorn
              padding 10px 10px 20px 10px
              animation inFromBottom 0.2s ease-in-out 0.6s both
              clear both
              > .data
                border-bottom 1px dotted tiffanyBlue
                padding 10px 0 20px 0
                > .left
                  float left
                > .right
                  float right
            > a.selz-button
              padding 30px 0 0 0
              .selz-button__label
                background-color seaBuckthorn !important
                border-color seaBuckthorn !important

@media all and (min-width: 1px) and (max-width: 1000px)
  .section_products
    &.half
      height 2500px
    &.full
      height 5900px
    > .subsection
      > .productlist
        width auto
        height auto
        > .product
          float none
          margin 20px auto !important

    > .details
      > .inner
        > .image
          display none !important 
        > .detail

          position fixed
          z-index 30
          onoff()
          fullsize()
          width 100vw 
          height 100vh
          > .close
            z-index 100
            top auto
            right auto
            bottom 20px
            left 50%
            margin-left -12px
          > .copy
            > .inner
                position static
                width auto
                height auto
                margin 20px

</style>


