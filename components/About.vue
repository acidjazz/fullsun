<template lang="pug">
.section.section_about#about
  .gradient
  .body
    .title about us
    .copys
      p We are the smallest grains of rich, healthy soil. We are the oxygen thick air provided by the forests of Humboldt County. We are the caring hands that turn high quality, chemical-free cannabis into beautifully crafted concentrates, allowing your life to be a little easier.
      p Lastly, we are the rays of sunshine that spill down upon the mountaintop — the bright and most powerful source that enriches all of our cannabis at Full Sun.  
</template>

<style lang="stylus">

json('../static/colors.json')
json('../static/fonts.json')
@import '../assets/stylus/mixins.styl'

.section_about
  background-image url('/images/trees.jpg')
  background-size cover
  background-position center
  > .gradient
    z-index 1
    position absolute
    fullsize()
    background linear-gradient(rgba(tiffanyBlue, 0.8), rgba(seaBuckthorn, 0.8))
  > .body
    z-index 2
    color white
    text-align center
    position absolute
    height 420px
    left 0
    right 0
    top 50%
    margin-top -210px
    > .title
      font h1
      padding 0 0 30px 0
    > .copys
      > p
        max-width 600px
        line-height 30px
        margin 0 auto 30px auto

@media all and (min-width: 1px) and (max-width: 1000px)
  .section_about
    height auto
    min-height 700px
    > .body
      > .copys
        padding 0 10px
</style>
