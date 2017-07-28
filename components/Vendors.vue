<template lang="pug">
.section.section_vendors#vendors
  .vendorlist
    a.vendor(
      :href="vendor.link",target='_new',
      :style="'background-image: url(/images/vendors/' + vendor.image + ')'",
      v-for="vendor, index in vendors")
</template>

<script>
export default {
  data () {
    return {
      vendors: require('~/copy/vendors.json'),
    }
  }
}
</script>

<style lang="stylus">

json('../static/colors.json')
json('../static/fonts.json')
@import '../assets/stylus/mixins.styl'

.section_vendors
  padding 60px 0
  height auto
  clear both
  > .vendorlist
    text-align center
    > .vendor
      display inline-block
      width 200px
      height 200px
      margin 0 20px
      background-size contain
      background-repeat no-repeat
      background-position center

@media all and (min-width: 1px) and (max-width: 1000px)
  .section_vendors
    > .vendorlist
      width auto
      > .vendor
        float none
        display block
        margin 20px auto !important
</style>

