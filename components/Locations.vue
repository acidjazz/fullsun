<template lang="pug">
.section.section_locations#locations
  #map
  .place(:class="{ on: place !== false, off: place === false }")
    .inner
      img.image(:src="place.photos[0].getUrl({maxWidth: 260, maxHeight: 200})",v-if="place.photos")
      a.name(target="_new") {{ place.name }}
      .address {{ place.formatted_address }}
      .phone {{ place.formatted_phone_number }}
    .close(@click="place = false; map.setZoom(7)") &#10005;
</template>

<script>

const jsonp = require('jsonp')
export default {

  methods: {

    marker () {
      for (let key in this.places) {
        let place = this.places[key]

        let marker = new window.google.maps.Marker({
          map: this.map,
          position: place.geometry.location,
          icon: {
            url: '/images/map/marker.png',
            scaledSize: new window.google.maps.Size(60, 60),
            origin: new window.google.maps.Point(0, 0),
          },
          place: {
            placeId: place.place_id,
            location: place.geometry.location,
          }
        })

        const vm = this
        window.google.maps.event.addListener(marker, 'click', function () {
          vm.markerHandler(this)
        })
      }
    },
    markerHandler: function (googleContext) {
      this.place = this.places[googleContext.place.placeId]
      this.map.setZoom(16)
      this.map.setCenter(googleContext.getPosition())
    },
  },

  mounted () {

    if (this.loaded === false) {

      jsonp(this.url, null, () => {

        this.loaded = true
        this.vendors = require('~/copy/vendors.json')

        this.map = new window.google.maps.Map(document.getElementById('map'), {
          center: {
            lat: 39.6092474,
            lng: -123.4453755,
          },
          zoom: 7,
          styles: this.styles,
          options: this.options,
        })

        let service = new window.google.maps.places.PlacesService(this.map)

        for (let vendor of this.vendors) {
          service.getDetails({
            placeId: vendor.placeId
          }, (result, status) => {
            this.places[result.place_id] = result
            if (Object.keys(this.vendors).length === Object.keys(this.places).length) {
              this.marker()
            }
          })
        }

      })
    }

  },
  data () {
    return {
      map: false,
      vendors: {},
      places: {},
      markers: [],
      place: false,
      url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAIq84pji4ovumANXXolMqkGwQX8kM1mKc&libraries=places",
      loaded: false,
      options: {
        scrollwheel: false,
        mapTypeControl: false,
        fullscreenControl: false
      },
      styles: [{
        'featureType': 'administrative',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#9e5d07'
          }
        ]
      }, {
        'featureType': 'administrative.country',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#f29934'
          }
        ]
      }, {
        'featureType': 'administrative.locality',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#9e5d07'
          }
        ]
      }, {
        'featureType': 'landscape',
        'elementType': 'all',
        'stylers': [
          {
            'color': '#f8f5f2'
          }
        ]
      }, {
        'featureType': 'poi',
        'elementType': 'all',
        'stylers': [
          {
            'visibility': 'off'
          }
        ]
      }, {
        'featureType': 'road',
        'elementType': 'all',
        'stylers': [
          {
            'saturation': -100
          }, {
            'lightness': 45
          }
        ]
      }, {
        'featureType': 'road',
        'elementType': 'geometry.fill',
        'stylers': [
          {
            'color': '#f29934'
          }
        ]
      }, {
        'featureType': 'road.highway',
        'elementType': 'all',
        'stylers': [
          {
            'visibility': 'simplified'
          }
        ]
      }, {
        'featureType': 'road.arterial',
        'elementType': 'labels.icon',
        'stylers': [
          {
            'visibility': 'off'
          }
        ]
      }, {
        'featureType': 'transit',
        'elementType': 'all',
        'stylers': [
          {
            'visibility': 'off'
          }
        ]
      }, {
        'featureType': 'water',
        'elementType': 'all',
        'stylers': [
          {
            'color': '#00afaa'
          }, {
            'visibility': 'on'
          }
        ]
      }
      ]}
  }
}
</script>

<style lang="stylus">

json('../static/colors.json')
json('../static/fonts.json')
@import '../assets/stylus/mixins.styl'

.section_locations
  height calc(100vh - 85px)
  position relative
  > .title
    font h1
    text-align center
    color seaBuckthorn
    position absolute
    z-index 5
    top 10px
    left 50%
    margin-left -79px
    background-color white
    width 160px
    padding 0 10px
  > #map
    width 100%
    height 100%

  > .place
    position absolute
    width 300px
    height 500px
    background-color springWood
    border 1px solid seaBuckthorn
    z-index 20
    top 50%
    left 50px
    margin-top -250px
    animation inFromLeft 0.4s ease-in-out 0.2s both
    onoff()
    > .inner
      padding 20px
      position relative
      > .image
        width 260px
        height 200px
        display block
        animation inFromBottom 0.2s ease-in-out 0.4s both
        onoff()
        > img
          width inherit
      > .name
        font c2
        color tiffanyBlue
        text-decoration none
        animation inFromBottom 0.2s ease-in-out 0.4s both
        display block
        padding 10px 0
      > .address
        animation inFromBottom 0.2s ease-in-out 0.5s both
      > .phone
        animation inFromBottom 0.2s ease-in-out 0.6s both
    > .close
      cursor pointer
      position absolute
      text-align center
      bottom 20px
      padding 10px 0
      color seaBuckthorn
      width 20px
      height 20px
      font h2
      left 50%
      margin-left -10px


</style>
