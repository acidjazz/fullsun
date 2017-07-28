<template lang="pug">
.container
  Top
  Landing
  Rise
  Banner
  Products
  Footer
</template>

<script>
import Top from '~/components/Top.vue'
import Landing from '~/components/Landing.vue'
import Rise from '~/components/Rise.vue'
import Banner from '~/components/Banner.vue'
import Products from '~/components/Products.vue'
// import Footer from '~/components/Footer.vue'
export default {
  components: { Top, Landing, Rise, Banner, Products }
}
</script>

<style>
</style>
