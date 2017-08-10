<template lang="pug">
.section.section_rise
  .inner
    .title rise and shine, a new cannabis experience is dawning.

    .copy Inspired by the immense beauty and power of California sunshine, Full Sun is a premium, sustainably farmed cannabis line. Proudly raised under the sunbelt of Humboldt County, we work naturally with the land to produce sungrown goodness with a little C-A soul.
    .copy Our towering redwoods, sun-drenched hills and mellow ocean breezes work harmoniously together to enrich our soil and produce healthier, stronger plants. 
    .copy 100% all-natural, sungrown cannabis raised the way it should be: under the sun, happy & free.

    .copy.copy-b Better. Brighter. Bolder.
    .copy.copy-c Rise up. Shine on. 
    .hashtag #staylifted
</template>

<style lang="stylus">
json('../static/colors.json')
json('../static/fonts.json')
@import '../assets/stylus/mixins.styl'
.section_rise
  height 600px
  text-align center
  padding 75px 0
  > .inner
    max-width 700px
    margin auto
    > .title
      font h1
      color tiffanyBlue
      max-width 500px
      margin auto
    > .copy
      padding 20px 0 10px 0
      color richGold
      max-width 860px
      margin auto
      line-height 30px
      &.copy-b
        font c5
      &.copy-c
        font h1
        color seaBuckthorn
@media all and (min-width: 1px) and (max-width: 1000px)
  .section_rise
    height 690px
</style>
