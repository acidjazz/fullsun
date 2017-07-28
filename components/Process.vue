<template lang="pug">
.section.section_process#process
  .body
    .title our process
    .copys
      p 'All of our products consist of Single Origin, High-Definition OG Kush cannabis. While others call this their “Reserve” we call this our "All the Time”. We hand select our small group of producers for their consistent commitment to quality and excellence. They work their magic with our proprietary strain which allows us to maintain quality, consistency, <i>and</i> quantity. Raised out of the most reputable growing region in the world, our Humboldt County farms stays rooted in consciously growing the best and brightest sungrown cannabis.'
      p 'Extracting oil from plants has been widely used across industries for centuries. Finding the right cannabis extraction process has taken years, but we have designed and perfected a model that makes our products superior. Our proprietary extract method is done at our state of the art facility in Humboldt County. The result is an ultra-refined oil that is lab tested and 100% solvent-free, every single time. Your well-being is our top priority.'
 
</template>

<style lang="stylus">
json('../static/colors.json')
json('../static/fonts.json')
@import '../assets/stylus/mixins.styl'

.section_process
  background-color springWood
  > .body
    z-index 2
    color white
    text-align center
    position absolute
    height 630px
    left 0
    right 0
    top 50%
    margin-top -315px
    > .title
      font h1
      padding 30px 0 
      color tiffanyBlue
    > .copys
      > p
        color orange3
        max-width 860px
        line-height 30px
        margin 0 auto 30px auto

@media all and (min-width: 1px) and (max-width: 1000px)
  .section_process
    height 960px
    > .body
      height 100%
      top 40% 
      > .copys
        padding 0 10px
</style>
