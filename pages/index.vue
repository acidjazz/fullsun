<template lang="pug">
.container
  Top
  Landing
  Rise
  Banner
  Products
  Locations
  Vendors
  About
  Process
  Contact
  Footer
</template>

<script>
import Top from '~/components/Top.vue'
import Landing from '~/components/Landing.vue'
import Rise from '~/components/Rise.vue'
import Banner from '~/components/Banner.vue'
import Products from '~/components/Products.vue'
import Locations from '~/components/Locations.vue'
import Vendors from '~/components/Vendors.vue'
import About from '~/components/About.vue'
import Process from '~/components/Process.vue'
import Contact from '~/components/Contact.vue'
// import Footer from '~/components/Footer.vue'
export default {
  components: { Top, Landing, Rise, Banner, Products, Locations, Vendors, About, Process, Contact }
}
</script>

<style>
</style>
