<template lang="pug">
.section.section_top#landing
  .image
  .gradient
  .middle
    .logo
      include ../static/vector/newlogo.svg
    .copy Premium Sungrown Goodness
</template>

<script>
import inViewport from 'vue-in-viewport-mixin'
export default {
  mixins: [ inViewport ],
  watch: {
    'inViewport.now' (visible) {
      this.view = visible
      if (visible) {
        window.$('#Top').removeClass('filled')
      } else {
        window.$('#Top').addClass('filled')
      }
    }
  },
  data () {
    return {
      view: true
    }
  }
}
</script>

<style lang="stylus">
json('../static/colors.json')
json('../static/fonts.json')
@import '../assets/stylus/mixins.styl'
.section_top
  width 100vw
  height 100vh
  color white
  z-index 3
  overflow hidden
  position relative
  > .image
    z-index 1
    position fixed
    fullsize()
    background-image url(/images/scapes/7.jpg)
    background-size cover
    background-position center center
  > .gradient
    z-index 1
    position absolute
    fullsize()
    background linear-gradient(rgba(tiffanyBlue, 0.5), rgba(seaBuckthorn, 0.5))
  > .middle
    position fixed 
    width 800px
    height 500px
    margin-top -250px
    margin-left -400px
    top 50%
    left 50%
    will-change transform
    z-index 10
    > .logo
      height 400px
      width 400px
      margin auto
      animation inFromBottom 0.25s linear 0.5s both
      > svg
        position absolute
        height inherit
        > path#logoRaysOn
          display none
        path
          fill white
    > .copy
      animation inFromBottom 0.5s linear 1.0s both
      text-align center
      font h2
      text-transform uppercase
      padding 50px 0 0 0

@media all and (min-width: 1px) and (max-width: 1000px)
  .section_top
    > .middle
      width 400px
      height 450px
      margin-left -200px
      margin-top -225px
      > .logo
        width 300px
        height 300px
      > .copy
        width 300px
        margin auto


</style>
