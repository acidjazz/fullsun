<template lang="pug">
#Top
  .burger(:class="{ on: !menu, off: menu }",@click="menu = !menu")
    .lines
      span
      span
      span
      span
    .clear
  .inner
    .logo(@click="section('landing')")
      .inner
        .circle
        .svg
          include ../static/vector/logos.svg
    .menu
      .items(:class="{ on: menu, off: !menu }")
        .inner
          .item.item_products(data-item='products',@click="section('products')") products
          .item.item_locations(data-item='locations',@click="section('locations')") locations
          .item.item_about(data-item='about',@click="section('about')") about
          .item.item_process(data-item='process',@click="section('process')") process
          .item.item_contact(data-item='contact',@click="section('contact')") contact

      .shares
        a.share.share_twitter(href='https://twitter.com/FullSun2',target='_new')
          include ../static/vector/twitter.svg
        a.share.share_facebook(href='https://www.facebook.com/Full-Sun-648952271971685/',target='_new')
          include ../static/vector/facebook.svg
        a.share.share_instagram(href='https://www.instagram.com/fullsun_/',target='_new')
          include ../static/vector/instagram.svg

      .clear
</template>

<script>
export default {

  methods: {

    section (section) {
      this.$emit('section')
      setTimeout(() => {
        this.menu = false
        this.$('html, body').scrollTo('#' + section, {
          duration: 500,
          offset: this.offset,
        })
        location.hash = section
      }, 100)

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
      $: {},
      offset: -86,
      menu: false,
    }
  }
}
</script>

<style lang="stylus">

json('../static/colors.json')
json('../static/fonts.json')
@import '../assets/stylus/mixins.styl'

#Top
  width 100%
  height 86px
  position fixed
  &.filled
    background-color white !important
    > .inner > .menu > .items > .inner > .item
      color tiffanyBlue
    > .inner > .logo > .inner
      opacity 1
      transform scale(1)
  z-index 10
  > .burger
    display none
  > .inner
    max-width 960px
    padding 0px 50px
    margin auto
    font c3s

    > .logo
      width 60px
      height 60px
      float left
      margin 13px 15px 0 0
      position relative
      z-index 11
      cursor pointer
      &:hover > .inner > .circle
        animation gradient 1s ease infinite
      > .inner
        opacity 0
        transform scale(0.7)
        transition all 1s linear 0s
        transition-timing-function: cubic-bezier(.87,-.41,.19,1.44)
        > .circle
          position absolute
          top 13px
          left 10px
          background linear-gradient(rgba(seaBuckthorn, 0.5), rgba(tiffanyBlue, 0.5))
          background-size 200% 200%
          animation gradient 5s ease infinite
          border-radius 50%
          width 39px
          height 39px
        > .svg
          position absolute
          top 0
          left 0
          bottom 0
          right 0
          > svg
            > path
              fill richGold

    > .menu
      padding 25px 0

      > .items
        > .inner
          > .item
            cursor pointer
            float left
            text-align center
            padding 10px 20px 10px 20px
            margin 0 10px 0 0
            text-transform uppercase
            color white
            transition all 0.2s linear 0.1s
            &:hover
              background-color rgba(tiffanyBlue, 0.25)
            &.on
              background-color tiffanyBlue
              color white
      > .shares
        > .share
          cursor pointer
          float right
          width 14px
          height 14px
          background-color tiffanyBlue
          transition background-color 0.2s linear 0.1s
          &:hover
            background-color seaBuckthorn
            transition background-color 0.2s linear 0s
          padding 10px
          border-radius 25px
          margin 0 20px 0 0
          > svg
            > path, > circle
              fill white
.burger
  position fixed
  top 20px
  left 20px
  clear both
  width 40px
  height 40px
  z-index 11
  &.off > .lines > span
    background-color tiffanyBlue
  &.off > .lines > span:nth-child(1)
    top 18px
    width 0%
    left 50%
  &.off > .lines > span:nth-child(2)
    transform rotate(45deg)
  &.off > .lines > span:nth-child(3)
    transform rotate(-45deg)
  &.off > .lines > span:nth-child(4)
    top 18px
    width 0%
    left 50%

  > .lines
    position relative
    width 100%
    height 100%
    > span
      display block
      position absolute
      height 3px
      border-radius 9px
      width 100%
      background-color tiffanyBlue
      opacity 1
      left 0
      transition 0.25s ease-in-out
      &:nth-child(1)
        top 0px
      &:nth-child(2),
      &:nth-child(3)
        top 14px
      &:nth-child(4)
        top 28px


@media all and (min-width: 1px) and (max-width: 1000px)
  #Top
    background-color rgba(0,0,0,0) !important
    &.filled
      background-color rgba(0,0,0,0) !important
    > .burger
      display block
    > .inner
      padding 0
      > .logo
        float right
      > .menu
        padding 10px 20px
        > .shares, > .buy
          margin 10px 0 0 0

        > .items
          onoff()
          position fixed
          background-color springWood
          top 0
          left 0
          bottom 0
          right 0
          > .inner
            position absolute
            width 100%
            height 396px
            top 50%
            margin-top -198px
            > .item
              float none
              padding 10px 0
              font h1
              color tiffanyBlue

        > .shares, > .buy
          display none
</style>
