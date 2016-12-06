var _,
  hasProp = {}.hasOwnProperty;

_ = {
  i: function() {
    return this.console = setInterval(this.detect.bind(this), 200);
  },
  p: {
    offing: false,
    offtime: 0
  },
  turn: function(el, remove, add) {
    if (remove == null) {
      remove = false;
    }
    if (add == null) {
      add = false;
    }
    if (!(el instanceof jQuery)) {
      el = $(el);
    }
    if (remove !== false) {
      el.removeClass(remove);
    }
    if (add !== false) {
      el.addClass(add);
    }
    return true;
  },
  off: function(el, p) {
    if (p == null) {
      p = {};
    }
    if (p.offing && p.offtime > 0) {
      this.turn(el, false, 'offing');
      setTimeout(function() {
        this.turn(el, 'offing', false);
        return this.turn(el, 'on', 'off');
      }, p.offtime * 1000 + 100);
    } else {
      this.turn(el, 'on', 'off');
    }
  },
  on: function(el, p) {
    return this.turn(el, 'off', 'on');
  },
  swap: function(el, p) {
    if (!(el instanceof jQuery)) {
      el = $(el);
    }
    if (el.hasClass('off')) {
      this.on(el, p);
    } else {
      this.off(el, p);
    }
  },
  encode: function(str) {
    return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
  },
  t: function(category, action, label, value) {
    return _gaq.push(['_trackEvent', category, action, label, value]);
  },
  rand: function(min, max) {
    return Math.floor(Math.random() * max) + min;
  },
  hex2rgb: function(hex) {
    var result;
    result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    };
  },
  objc: function(obj) {
    var k;
    return ((function() {
      var results;
      results = [];
      for (k in obj) {
        if (!hasProp.call(obj, k)) continue;
        results.push(k);
      }
      return results;
    })()).length;
  },
  load: function(script, initiate, complete) {
    var el;
    el = document.createElement('script');
    el.type = 'text/javascript';
    el.src = script;
    el.addEventListener('load', function(e) {
      if (typeof complete === 'function') {
        complete();
      }
      if (initiate !== void 0 && initiate !== false) {
        return window[initiate].i();
      }
    }, false);
    return document.body.appendChild(el);
  },
  llc: function() {
    var ascii;
    ascii = "\n%cmmm/............................................................./mmm\nmmo................-:://::-.......-:::::::::::::-........-::///:-.omm\nmd-.............:+yhddddddhy+-..../ddddddddddddd+....../shdddddddyodm\nmo.............-hmmmhyyyydmmmh:.../mmmmhhhhhhhhh+....:ydmmdhyyyhddoom\nm-..............-ss:-....-ymmmy.../mmmm---------....:dmmms:-...-:/.-m\nd.........................ymmmy.../mmmm-/+ooo+:-....ymmmy-:+ooo+/-..d\nh.......................:smmmd:.../mmmmhmmmmmmdh+...dmmmshdmmmmmmhs-h\nh.....................:sdmmdy:....:hhdho+//+ymmmm+..dmmmdyo//+sdmmmhh\nd..................-+ydmmdy/.......--:.......smmmh..ymmms......:mmmmm\nm-..............-:shmmmds/-----....:s/--...-:hmmms..:dmmd/-...-ommmmm\nmo..............hmmmmmmhhhhhhhh...+dmmdhyyyhdmmmy-.../hmmmhyyyhmmmdhm\nmd-.............ddddddddddddddd...-+shdddddddhy/-.....-oydddddddho:dm\nmmo.............:::::::::::::::.......-:///::-...........-:///:-..omm\nmmm/............................................................./mmm\n\n:: syntactic sugar by 256\n:: http://256.io/\n:: " + config.meta.repo;
    return console.log(ascii, "color: grey; font-family: Menlo, monospace;");
  },
  detect: function() {
    if (((window.outerHeight - window.innerHeight) > 100) || ((window.outerWidth - window.innerWidth) > 100)) {
      this.llc();
      return clearInterval(this.console);
    }
  }
};

_.i();

var config;

config = {
  "color": {
    "blue1": "#00AFAA",
    "orange1": "#F29934",
    "orange2": "#9E5D07",
    "peach1": "#F8F5F2",
    "white1": "#ffffff",
    "black1": "#000000",
    "grey1": "#777777"
  },
  "font": {
    "h1": {
      "font-family": "aquilone regular",
      "font-size": "48px"
    },
    "h2": {
      "font-family": "sackers gothic",
      "font-size": "26px",
      "letter-spacing": "4px"
    },
    "h3": {
      "font-family": "sackers gothic",
      "font-size": "20px",
      "letter-spacing": "2px",
      "line-height": "32px"
    },
    "h4": {
      "font-family": "aquilone regular",
      "font-size": "32px"
    },
    "c1": {
      "font-family": "averta light",
      "font-size": "20px"
    },
    "c1s": {
      "font-family": "averta light",
      "font-size": "14px"
    },
    "c2": {
      "font-family": "averta bold",
      "font-size": "28px"
    },
    "c3": {
      "font-family": "averta bold",
      "font-size": "14px"
    }
  },
  "meta": {
    "url": "http://fullsun.com/",
    "title": "full sun",
    "description": "california conscious cannabis",
    "keywords": "full sun, cannabis, california",
    "tracking_id": 31337,
    "share": "images/logo1.png",
    "repo": "https://github.com/acidjazz/fullsun",
    "map_api_key": "AIzaSyAIq84pji4ovumANXXolMqkGwQX8kM1mKc"
  },
  "products": [
    {
      "name": "vape pen set",
      "title": "510 Threaded Battery, Charger, and Natural Rise Cartridge.",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
      "image": "pen_set.jpg",
      "detail": [
        {
          "left": "THC",
          "right": "23%"
        }, {
          "left": "SATIVA",
          "right": "Humboldt County, CA"
        }, {
          "left": "FEELS LIKE",
          "right": "BRIGHT & BREEZY"
        }
      ]
    }, {
      "name": "rise",
      "title": "Solvent-Free Single Origin Cartridge Refill",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
      "image": "rise.jpg",
      "detail": [
        {
          "left": "THC",
          "right": "23%"
        }, {
          "left": "SATIVA",
          "right": "Humboldt County, CA"
        }, {
          "left": "FEELS LIKE",
          "right": "BRIGHT & BREEZY"
        }
      ]
    }, {
      "name": "shine",
      "title": "Solvent-Free Clear Concentrate High Definition OG Kush.",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
      "image": "shine.jpg",
      "detail": [
        {
          "left": "THC",
          "right": "23%"
        }, {
          "left": "SATIVA",
          "right": "Humboldt County, CA"
        }, {
          "left": "FEELS LIKE",
          "right": "MELLOW & WARM"
        }
      ]
    }
  ],
  "vendors": [
    {
      "name": "The Green Cross",
      "placeId": "ChIJp7uz74l-j4ARH-ndJjm0tzk"
    }, {
      "name": "Harborside Health Center",
      "placeId": "ChIJk6vYruCGj4ARGgsGnQaWgzw"
    }, {
      "name": "sparc",
      "placeId": "ChIJWUZ7wpyAhYARKQY_IJHE_94"
    }
  ]
};

var Delay;

Delay = {
  height: false,
  win: false,
  logo: false,
  header: false,
  peach: false,
  filled: false,
  i: function() {
    this.win = $(window);
    this.height = this.win.height();
    this.logo = $('.section.section_top > .middle');
    this.header = $('header');
    this.peach = _.hex2rgb(config.color.peach1);
    return $(window).scroll(this.checkScroll);
  },
  checkScroll: function() {
    var opacity, perc;
    perc = (Delay.win.scrollTop() * 100 / Delay.height).toFixed(2);
    if (perc > 100) {
      if (Delay.filled === false) {
        $('header').addClass('filled');
        Delay.filled = true;
      }
      return true;
    } else {
      if (Delay.filled === true) {
        $('header').removeClass('filled');
        Delay.filled = false;
      }
    }
    opacity = (perc / 100).toFixed(1) / 2;
    if (Index.offset !== 0) {
      Delay.logo.css('transform', "translate(0px, " + (perc * 7) + "px)");
      return Delay.header.css('background-color', "rgba(" + Delay.peach.r + "," + Delay.peach.g + "," + Delay.peach.b + "," + opacity + ")");
    }
  }
};

var Index;

Index = {
  offset: -86,
  i: function() {
    var tl;
    Delay.i();
    Product.i();
    tl = new TimelineMax({
      repeat: 0
    });
    tl.to('#logoRaysOff', 2.0, {
      morphSVG: '#logoRaysOn',
      ease: Expo.easeInOut
    });
    if ($(window).width() < 1000) {
      this.offset = 0;
    }
    return this.handlers();
  },
  handlers: function() {
    $('header > .burger').click(this.burgerHandler);
    $('header > .inner > .menu > .items > .inner > .item').click(this.menuHandler);
    return $('header > .inner > .logo').click(this.menuHandler);
  },
  burgerHandler: function() {
    _.swap('header > .burger');
    return _.swap('header > .inner > .menu > .items');
  },
  menuHandler: function() {
    _.on('header > .burger');
    _.off('header > .inner > .menu > .items');
    return Index.section($(this).data('item'));
  },
  section: function(section) {
    return setTimeout(function() {
      $('html, body').scrollTo("#" + section, {
        duration: 500,
        offset: Index.offset
      });
      return location.hash = section;
    }, 100);
  }
};

var Map;

Map = {
  map: false,
  places: {},
  i: function() {
    var i, len, ref, service, vendor;
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 37.778407,
        lng: -122.397128
      },
      zoom: 11,
      styles: this.styles,
      options: this.options
    });
    service = new google.maps.places.PlacesService(this.map);
    ref = config.vendors;
    for (i = 0, len = ref.length; i < len; i++) {
      vendor = ref[i];
      service.getDetails({
        placeId: vendor.placeId
      }, function(result, status) {
        Map.places[result.place_id] = result;
        if (_.objc(config.vendors) === _.objc(Map.places)) {
          return Map.markers();
        }
      });
    }
    return this.handlers();
  },
  handlers: function() {
    return $('.section_locations > .place > .close').click(this.placeCloseHandler);
  },
  markers: function() {
    var id, marker, markerCluster, markers, place, ref;
    markers = [];
    ref = this.places;
    for (id in ref) {
      place = ref[id];
      marker = new google.maps.Marker({
        map: Map.map,
        position: place.geometry.location,
        icon: {
          url: '/images/map/marker.png',
          scaledSize: new google.maps.Size(60, 60),
          origin: new google.maps.Point(0, 0)
        },
        place: {
          placeId: place.place_id,
          location: place.geometry.location
        }
      });
      google.maps.event.addListener(marker, 'click', Map.markerHandler);
      markers.push(marker);
    }
    return markerCluster = new MarkerClusterer(Map.map, markers, {
      imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
  },
  markerHandler: function() {
    var place;
    place = Map.places[this.place.placeId];
    if (place.photos) {
      $('.section_locations > .place > .inner > .image').attr('src', place.photos[0].getUrl({
        maxWidth: 260,
        maxHeight: 200
      }));
      _.on('.section_locations > .place > .inner > .image');
    } else {
      _.off('.section_locations > .place > .inner > .image');
    }
    $('.section_locations > .place > .inner > .name').text(place.name);
    $('.section_locations > .place > .inner > .name').attr('href', place.url);
    $('.section_locations > .place > .inner > .address').html(place.formatted_address);
    $('.section_locations > .place > .inner > .phone').html(place.formatted_phone_number);
    _.on('.section_locations > .place');
    Map.map.setZoom(16);
    Map.map.setCenter(this.getPosition());
    return console.log(place);
  },
  placeCloseHandler: function() {
    _.off('.section_locations > .place');
    return Map.map.setZoom(11);
  },
  options: {
    scrollwheel: false,
    mapTypeControl: false,
    fullscreenControl: false
  },
  styles: [
    {
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
  ]
};

var Product;

Product = {
  i: function() {
    return this.handlers();
  },
  handlers: function() {
    $('.section_products > .productlist > .product').click(this.productClick);
    return $('.section_products > .details > .detail > .close').click(this.closeClick);
  },
  productClick: function() {
    var product;
    product = $(this).data('product');
    _.on("[id='detail " + product + "']");
    _.on("[id='image " + product + "']");
    if (Index.offset !== 0) {
      return Index.section('products');
    }
  },
  closeClick: function() {
    _.off('.section_products > .details > .detail');
    return _.off('.section_products > .details > .image');
  }
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjI1Ni5jb2ZmZWUiLCJjb25maWcuY29mZmVlIiwiZGVsYXkuY29mZmVlIiwiaW5kZXguY29mZmVlIiwibWFwLmNvZmZlZSIsInByb2R1Y3QuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsQ0FBQTtFQUFBOztBQUFBLENBQUEsR0FFRTtFQUFBLENBQUEsRUFBRyxTQUFBO1dBQ0QsSUFBQyxDQUFBLE9BQUQsR0FBVyxXQUFBLENBQVksSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsSUFBYixDQUFaLEVBQTZCLEdBQTdCO0VBRFYsQ0FBSDtFQUdBLENBQUEsRUFDRTtJQUFBLE1BQUEsRUFBUSxLQUFSO0lBQ0EsT0FBQSxFQUFTLENBRFQ7R0FKRjtFQU9BLElBQUEsRUFBTSxTQUFDLEVBQUQsRUFBSyxNQUFMLEVBQW1CLEdBQW5COztNQUFLLFNBQU87OztNQUFPLE1BQUk7O0lBRTNCLElBQUcsQ0FBQSxDQUFBLEVBQUEsWUFBa0IsTUFBbEIsQ0FBSDtNQUNFLEVBQUEsR0FBSyxDQUFBLENBQUUsRUFBRixFQURQOztJQUdBLElBQUcsTUFBQSxLQUFZLEtBQWY7TUFDRSxFQUFFLENBQUMsV0FBSCxDQUFlLE1BQWYsRUFERjs7SUFHQSxJQUFHLEdBQUEsS0FBUyxLQUFaO01BQ0UsRUFBRSxDQUFDLFFBQUgsQ0FBWSxHQUFaLEVBREY7O0FBR0EsV0FBTztFQVhILENBUE47RUFvQkEsR0FBQSxFQUFLLFNBQUMsRUFBRCxFQUFLLENBQUw7O01BQUssSUFBRTs7SUFFVixJQUFHLENBQUMsQ0FBQyxNQUFGLElBQWEsQ0FBQyxDQUFDLE9BQUYsR0FBWSxDQUE1QjtNQUVFLElBQUMsQ0FBQSxJQUFELENBQU0sRUFBTixFQUFVLEtBQVYsRUFBaUIsUUFBakI7TUFDQSxVQUFBLENBQVcsU0FBQTtRQUNULElBQUMsQ0FBQSxJQUFELENBQU0sRUFBTixFQUFVLFFBQVYsRUFBb0IsS0FBcEI7ZUFDQSxJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4s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REFBRixDQUFvRCxDQUFDLEtBQXJELENBQTJELElBQUMsQ0FBQSxVQUE1RDtFQUZRLENBSlY7RUFTQSxZQUFBLEVBQWMsU0FBQTtBQUNaLFFBQUE7SUFBQSxPQUFBLEdBQVUsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLElBQVIsQ0FBYSxTQUFiO0lBQ1YsQ0FBQyxDQUFDLEVBQUYsQ0FBSyxjQUFBLEdBQWUsT0FBZixHQUF1QixJQUE1QjtJQUNBLENBQUMsQ0FBQyxFQUFGLENBQUssYUFBQSxHQUFjLE9BQWQsR0FBc0IsSUFBM0I7SUFDQSxJQUFHLEtBQUssQ0FBQyxNQUFOLEtBQWtCLENBQXJCO2FBQ0UsS0FBSyxDQUFDLE9BQU4sQ0FBYyxVQUFkLEVBREY7O0VBSlksQ0FUZDtFQW1CQSxVQUFBLEVBQVksU0FBQTtJQUVWLENBQUMsQ0FBQyxHQUFGLENBQU0sd0NBQU47V0FDQSxDQUFDLENBQUMsR0FBRixDQUFNLHVDQUFOO0VBSFUsQ0FuQloiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXyA9XG5cbiAgaTogLT5cbiAgICBAY29uc29sZSA9IHNldEludGVydmFsKEBkZXRlY3QuYmluZChAKSwgMjAwKVxuXG4gIHA6XG4gICAgb2ZmaW5nOiBmYWxzZVxuICAgIG9mZnRpbWU6IDBcblxuICB0dXJuOiAoZWwsIHJlbW92ZT1mYWxzZSwgYWRkPWZhbHNlKSAtPlxuXG4gICAgaWYgZWwgbm90IGluc3RhbmNlb2YgalF1ZXJ5XG4gICAgICBlbCA9ICQoZWwpXG5cbiAgICBpZiByZW1vdmUgaXNudCBmYWxzZVxuICAgICAgZWwucmVtb3ZlQ2xhc3MocmVtb3ZlKVxuXG4gICAgaWYgYWRkIGlzbnQgZmFsc2VcbiAgICAgIGVsLmFkZENsYXNzKGFkZClcblxuICAgIHJldHVybiB0cnVlXG5cbiAgb2ZmOiAoZWwsIHA9e30pIC0+XG5cbiAgICBpZiBwLm9mZmluZyBhbmQgcC5vZmZ0aW1lID4gMFxuXG4gICAgICBAdHVybiBlbCwgZmFsc2UsICdvZmZpbmcnXG4gICAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAgIEB0dXJuIGVsLCAnb2ZmaW5nJywgZmFsc2VcbiAgICAgICAgQHR1cm4gZWwsICdvbicsICdvZmYnXG4gICAgICAsIHAub2ZmdGltZSoxMDAwICsgMTAwXG5cbiAgICBlbHNlXG4gICAgICBAdHVybiBlbCwgJ29uJywgJ29mZidcblxuICAgIHJldHVyblxuXG4gIG9uOiAoZWwsIHApIC0+XG4gICAgQHR1cm4gZWwsICdvZmYnLCAnb24nXG5cbiAgc3dhcDogKGVsLCBwKSAtPlxuXG4gICAgaWYgZWwgbm90IGluc3RhbmNlb2YgalF1ZXJ5XG4gICAgICBlbCA9ICQoZWwpXG5cbiAgICBpZiBlbC5oYXNDbGFzcyAnb2ZmJ1xuICAgICAgQG9uIGVsLCBwXG4gICAgZWxzZVxuICAgICAgQG9mZiBlbCwgcFxuXG4gICAgcmV0dXJuXG5cbiAgZW5jb2RlOiAoc3RyKSAtPlxuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKVxuICAgICAgLnJlcGxhY2UoLyEvZywgJyUyMScpXG4gICAgICAucmVwbGFjZSgvJy9nLCAnJTI3JylcbiAgICAgIC5yZXBsYWNlKC9cXCgvZywgJyUyOCcpXG4gICAgICAucmVwbGFjZSgvXFwpL2csICclMjknKVxuICAgICAgLnJlcGxhY2UoL1xcKi9nLCAnJTJBJylcbiAgICAgIC5yZXBsYWNlKC8lMjAvZywgJysnKVxuXG4gIHQ6IChjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCwgdmFsdWUpIC0+XG4gICAgX2dhcS5wdXNoIFsnX3RyYWNrRXZlbnQnLCBjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCwgdmFsdWVdXG5cbiAgcmFuZDogKG1pbiwgbWF4KSAtPlxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpICsgbWluXG5cbiAgaGV4MnJnYjogKGhleCkgLT5cbiAgICByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KVxuICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxuICAgIGc6IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxuICAgIGI6IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpXG4gXG4gIG9iamM6IChvYmopIC0+XG4gICAgKGsgZm9yIG93biBrIG9mIG9iaikubGVuZ3RoXG5cbiAgbG9hZDogKHNjcmlwdCwgaW5pdGlhdGUsIGNvbXBsZXRlKSAtPlxuXG4gICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICdzY3JpcHQnXG4gICAgZWwudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnXG4gICAgZWwuc3JjID0gc2NyaXB0XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lciAnbG9hZCcgLCAoZSkgLT5cbiAgICAgIGNvbXBsZXRlKCkgaWYgdHlwZW9mIGNvbXBsZXRlIGlzICdmdW5jdGlvbidcbiAgICAgIHdpbmRvd1tpbml0aWF0ZV0uaSgpIGlmIGluaXRpYXRlIGlzbnQgdW5kZWZpbmVkIGFuZCBpbml0aWF0ZSBpc250IGZhbHNlXG4gICAgLCBmYWxzZVxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbClcblxuICBsbGM6IC0+XG4gICAgYXNjaWkgPSBcIlwiXCJcblxuICAgICAgJWNtbW0vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9tbW1cbiAgICAgIG1tby4uLi4uLi4uLi4uLi4uLi4tOjovLzo6LS4uLi4uLi4tOjo6Ojo6Ojo6Ojo6Oi0uLi4uLi4uLi06Oi8vLzotLm9tbVxuICAgICAgbWQtLi4uLi4uLi4uLi4uLjoreWhkZGRkZGRoeSstLi4uLi9kZGRkZGRkZGRkZGRkKy4uLi4uLi9zaGRkZGRkZGR5b2RtXG4gICAgICBtby4uLi4uLi4uLi4uLi4taG1tbWh5eXl5ZG1tbWg6Li4uL21tbW1oaGhoaGhoaGgrLi4uLjp5ZG1tZGh5eXloZGRvb21cbiAgICAgIG0tLi4uLi4uLi4uLi4uLi4tc3M6LS4uLi4teW1tbXkuLi4vbW1tbS0tLS0tLS0tLS4uLi46ZG1tbXM6LS4uLi06Ly4tbVxuICAgICAgZC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi55bW1teS4uLi9tbW1tLS8rb29vKzotLi4uLnltbW15LTorb29vKy8tLi5kXG4gICAgICBoLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi46c21tbWQ6Li4uL21tbW1obW1tbW1tZGgrLi4uZG1tbXNoZG1tbW1tbWhzLWhcbiAgICAgIGguLi4uLi4uLi4uLi4uLi4uLi4uLi46c2RtbWR5Oi4uLi46aGhkaG8rLy8reW1tbW0rLi5kbW1tZHlvLy8rc2RtbW1oaFxuICAgICAgZC4uLi4uLi4uLi4uLi4uLi4uLi0reWRtbWR5Ly4uLi4uLi4tLTouLi4uLi4uc21tbWguLnltbW1zLi4uLi4uOm1tbW1tXG4gICAgICBtLS4uLi4uLi4uLi4uLi4uLTpzaG1tbWRzLy0tLS0tLi4uLjpzLy0tLi4uLTpobW1tcy4uOmRtbWQvLS4uLi1vbW1tbW1cbiAgICAgIG1vLi4uLi4uLi4uLi4uLi5obW1tbW1taGhoaGhoaGguLi4rZG1tZGh5eXloZG1tbXktLi4uL2htbW1oeXl5aG1tbWRobVxuICAgICAgbWQtLi4uLi4uLi4uLi4uLmRkZGRkZGRkZGRkZGRkZC4uLi0rc2hkZGRkZGRkaHkvLS4uLi4uLW95ZGRkZGRkZGhvOmRtXG4gICAgICBtbW8uLi4uLi4uLi4uLi4uOjo6Ojo6Ojo6Ojo6Ojo6Li4uLi4uLi06Ly8vOjotLi4uLi4uLi4uLi4tOi8vLzotLi5vbW1cbiAgICAgIG1tbS8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uL21tbVxuXG4gICAgICA6OiBzeW50YWN0aWMgc3VnYXIgYnkgMjU2XG4gICAgICA6OiBodHRwOi8vMjU2LmlvL1xuICAgICAgOjogI3tjb25maWcubWV0YS5yZXBvfVxuICAgIFwiXCJcIlxuICAgIGNvbnNvbGUubG9nIGFzY2lpLCBcImNvbG9yOiBncmV5OyBmb250LWZhbWlseTogTWVubG8sIG1vbm9zcGFjZTtcIlxuXG4gIGRldGVjdDogLT5cbiAgICBpZiAoKCh3aW5kb3cub3V0ZXJIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQpID4gMTAwKSB8fCAoKHdpbmRvdy5vdXRlcldpZHRoIC0gd2luZG93LmlubmVyV2lkdGgpID4gMTAwKSlcbiAgICAgIEBsbGMoKVxuICAgICAgY2xlYXJJbnRlcnZhbCBAY29uc29sZVxuXG5fLmkoKVxuIiwiY29uZmlnID0ge1wiY29sb3JcIjp7XCJibHVlMVwiOlwiIzAwQUZBQVwiLFwib3JhbmdlMVwiOlwiI0YyOTkzNFwiLFwib3JhbmdlMlwiOlwiIzlFNUQwN1wiLFwicGVhY2gxXCI6XCIjRjhGNUYyXCIsXCJ3aGl0ZTFcIjpcIiNmZmZmZmZcIixcImJsYWNrMVwiOlwiIzAwMDAwMFwiLFwiZ3JleTFcIjpcIiM3Nzc3NzdcIn0sXCJmb250XCI6e1wiaDFcIjp7XCJmb250LWZhbWlseVwiOlwiYXF1aWxvbmUgcmVndWxhclwiLFwiZm9udC1zaXplXCI6XCI0OHB4XCJ9LFwiaDJcIjp7XCJmb250LWZhbWlseVwiOlwic2Fja2VycyBnb3RoaWNcIixcImZvbnQtc2l6ZVwiOlwiMjZweFwiLFwibGV0dGVyLXNwYWNpbmdcIjpcIjRweFwifSxcImgzXCI6e1wiZm9udC1mYW1pbHlcIjpcInNhY2tlcnMgZ290aGljXCIsXCJmb250LXNpemVcIjpcIjIwcHhcIixcImxldHRlci1zcGFjaW5nXCI6XCIycHhcIixcImxpbmUtaGVpZ2h0XCI6XCIzMnB4XCJ9LFwiaDRcIjp7XCJmb250LWZhbWlseVwiOlwiYXF1aWxvbmUgcmVndWxhclwiLFwiZm9udC1zaXplXCI6XCIzMnB4XCJ9LFwiYzFcIjp7XCJmb250LWZhbWlseVwiOlwiYXZlcnRhIGxpZ2h0XCIsXCJmb250LXNpemVcIjpcIjIwcHhcIn0sXCJjMXNcIjp7XCJmb250LWZhbWlseVwiOlwiYXZlcnRhIGxpZ2h0XCIsXCJmb250LXNpemVcIjpcIjE0cHhcIn0sXCJjMlwiOntcImZvbnQtZmFtaWx5XCI6XCJhdmVydGEgYm9sZFwiLFwiZm9udC1zaXplXCI6XCIyOHB4XCJ9LFwiYzNcIjp7XCJmb250LWZhbWlseVwiOlwiYXZlcnRhIGJvbGRcIixcImZvbnQtc2l6ZVwiOlwiMTRweFwifX0sXCJtZXRhXCI6e1widXJsXCI6XCJodHRwOi8vZnVsbHN1bi5jb20vXCIsXCJ0aXRsZVwiOlwiZnVsbCBzdW5cIixcImRlc2NyaXB0aW9uXCI6XCJjYWxpZm9ybmlhIGNvbnNjaW91cyBjYW5uYWJpc1wiLFwia2V5d29yZHNcIjpcImZ1bGwgc3VuLCBjYW5uYWJpcywgY2FsaWZvcm5pYVwiLFwidHJhY2tpbmdfaWRcIjozMTMzNyxcInNoYXJlXCI6XCJpbWFnZXMvbG9nbzEucG5nXCIsXCJyZXBvXCI6XCJodHRwczovL2dpdGh1Yi5jb20vYWNpZGphenovZnVsbHN1blwiLFwibWFwX2FwaV9rZXlcIjpcIkFJemFTeUFJcTg0cGppNG92dW1BTlhYb2xNcWtHd1FYOGtNMW1LY1wifSxcInByb2R1Y3RzXCI6W3tcIm5hbWVcIjpcInZhcGUgcGVuIHNldFwiLFwidGl0bGVcIjpcIjUxMCBUaHJlYWRlZCBCYXR0ZXJ5LCBDaGFyZ2VyLCBhbmQgTmF0dXJhbCBSaXNlIENhcnRyaWRnZS5cIixcImRlc2NyaXB0aW9uXCI6XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRpYW0gbm9udW1teSBuaWJoIGV1aXNtb2QgdGluY2lkdW50IHV0IGxhb3JlZXQgZG9sb3JlIG1hZ25hIGFsaXF1YW0gZXJhdCB2b2x1dHBhdC4gVXQgd2lzaSBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaSB0YXRpb24gdWxsYW1jb3JwZXIgc3VzY2lwaXQgbG9ib3J0aXMgbmlzbCB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LlwiLFwiaW1hZ2VcIjpcInBlbl9zZXQuanBnXCIsXCJkZXRhaWxcIjpbe1wibGVmdFwiOlwiVEhDXCIsXCJyaWdodFwiOlwiMjMlXCJ9LHtcImxlZnRcIjpcIlNBVElWQVwiLFwicmlnaHRcIjpcIkh1bWJvbGR0IENvdW50eSwgQ0FcIn0se1wibGVmdFwiOlwiRkVFTFMgTElLRVwiLFwicmlnaHRcIjpcIkJSSUdIVCAmIEJSRUVaWVwifV19LHtcIm5hbWVcIjpcInJpc2VcIixcInRpdGxlXCI6XCJTb2x2ZW50LUZyZWUgU2luZ2xlIE9yaWdpbiBDYXJ0cmlkZ2UgUmVmaWxsXCIsXCJkZXNjcmlwdGlvblwiOlwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkaWFtIG5vbnVtbXkgbmliaCBldWlzbW9kIHRpbmNpZHVudCB1dCBsYW9yZWV0IGRvbG9yZSBtYWduYSBhbGlxdWFtIGVyYXQgdm9sdXRwYXQuIFV0IHdpc2kgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2kgdGF0aW9uIHVsbGFtY29ycGVyIHN1c2NpcGl0IGxvYm9ydGlzIG5pc2wgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC5cIixcImltYWdlXCI6XCJyaXNlLmpwZ1wiLFwiZGV0YWlsXCI6W3tcImxlZnRcIjpcIlRIQ1wiLFwicmlnaHRcIjpcIjIzJVwifSx7XCJsZWZ0XCI6XCJTQVRJVkFcIixcInJpZ2h0XCI6XCJIdW1ib2xkdCBDb3VudHksIENBXCJ9LHtcImxlZnRcIjpcIkZFRUxTIExJS0VcIixcInJpZ2h0XCI6XCJCUklHSFQgJiBCUkVFWllcIn1dfSx7XCJuYW1lXCI6XCJzaGluZVwiLFwidGl0bGVcIjpcIlNvbHZlbnQtRnJlZSBDbGVhciBDb25jZW50cmF0ZSBIaWdoIERlZmluaXRpb24gT0cgS3VzaC5cIixcImRlc2NyaXB0aW9uXCI6XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRpYW0gbm9udW1teSBuaWJoIGV1aXNtb2QgdGluY2lkdW50IHV0IGxhb3JlZXQgZG9sb3JlIG1hZ25hIGFsaXF1YW0gZXJhdCB2b2x1dHBhdC4gVXQgd2lzaSBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaSB0YXRpb24gdWxsYW1jb3JwZXIgc3VzY2lwaXQgbG9ib3J0aXMgbmlzbCB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LlwiLFwiaW1hZ2VcIjpcInNoaW5lLmpwZ1wiLFwiZGV0YWlsXCI6W3tcImxlZnRcIjpcIlRIQ1wiLFwicmlnaHRcIjpcIjIzJVwifSx7XCJsZWZ0XCI6XCJTQVRJVkFcIixcInJpZ2h0XCI6XCJIdW1ib2xkdCBDb3VudHksIENBXCJ9LHtcImxlZnRcIjpcIkZFRUxTIExJS0VcIixcInJpZ2h0XCI6XCJNRUxMT1cgJiBXQVJNXCJ9XX1dLFwidmVuZG9yc1wiOlt7XCJuYW1lXCI6XCJUaGUgR3JlZW4gQ3Jvc3NcIixcInBsYWNlSWRcIjpcIkNoSUpwN3V6NzRsLWo0QVJILW5kSmptMHR6a1wifSx7XCJuYW1lXCI6XCJIYXJib3JzaWRlIEhlYWx0aCBDZW50ZXJcIixcInBsYWNlSWRcIjpcIkNoSUprNnZZcnVDR2o0QVJHZ3NHblFhV2d6d1wifSx7XCJuYW1lXCI6XCJzcGFyY1wiLFwicGxhY2VJZFwiOlwiQ2hJSldVWjd3cHlBaFlBUktRWV9JSkhFXzk0XCJ9XX07IiwiXG5EZWxheSA9XG4gIGhlaWdodDogZmFsc2VcbiAgd2luOiBmYWxzZVxuICBsb2dvOiBmYWxzZVxuICBoZWFkZXI6IGZhbHNlXG4gIHBlYWNoOiBmYWxzZVxuICBmaWxsZWQ6IGZhbHNlXG5cbiAgaTogLT5cblxuICAgIEB3aW4gPSAkIHdpbmRvd1xuICAgIEBoZWlnaHQgPSBAd2luLmhlaWdodCgpXG4gICAgQGxvZ28gPSAkICcuc2VjdGlvbi5zZWN0aW9uX3RvcCA+IC5taWRkbGUnXG4gICAgQGhlYWRlciA9ICQgJ2hlYWRlcidcbiAgICBAcGVhY2ggPSBfLmhleDJyZ2IgY29uZmlnLmNvbG9yLnBlYWNoMVxuICAgICQod2luZG93KS5zY3JvbGwgQGNoZWNrU2Nyb2xsXG5cbiAgY2hlY2tTY3JvbGw6IC0+XG5cbiAgICBwZXJjID0gKERlbGF5Lndpbi5zY3JvbGxUb3AoKSAqIDEwMCAvIERlbGF5LmhlaWdodCkudG9GaXhlZCAyXG5cbiAgICBpZiBwZXJjID4gMTAwXG4gICAgICBpZiBEZWxheS5maWxsZWQgaXMgZmFsc2VcbiAgICAgICAgJCgnaGVhZGVyJykuYWRkQ2xhc3MgJ2ZpbGxlZCdcbiAgICAgICAgRGVsYXkuZmlsbGVkID0gdHJ1ZVxuICAgICAgcmV0dXJuIHRydWVcbiAgICBlbHNlXG4gICAgICBpZiBEZWxheS5maWxsZWQgaXMgdHJ1ZVxuICAgICAgICAkKCdoZWFkZXInKS5yZW1vdmVDbGFzcyAnZmlsbGVkJ1xuICAgICAgICBEZWxheS5maWxsZWQgPSBmYWxzZVxuXG4gICAgb3BhY2l0eSA9IChwZXJjLzEwMCkudG9GaXhlZCgxKSAvIDJcblxuICAgIGlmIEluZGV4Lm9mZnNldCBpc250IDBcbiAgICAgIERlbGF5LmxvZ28uY3NzKCd0cmFuc2Zvcm0nLCBcInRyYW5zbGF0ZSgwcHgsICN7cGVyYyo3fXB4KVwiKVxuICAgICAgRGVsYXkuaGVhZGVyLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIFwicmdiYSgje0RlbGF5LnBlYWNoLnJ9LCN7RGVsYXkucGVhY2guZ30sI3tEZWxheS5wZWFjaC5ifSwje29wYWNpdHl9KVwiKVxuXG4iLCJJbmRleCA9XG4gIG9mZnNldDogLTg2XG5cbiAgaTogLT5cblxuICAgIERlbGF5LmkoKVxuICAgIFByb2R1Y3QuaSgpXG5cbiAgICB0bCA9IG5ldyBUaW1lbGluZU1heCByZXBlYXQ6IDBcbiAgICB0bC50byAnI2xvZ29SYXlzT2ZmJywgMi4wLCB7bW9ycGhTVkc6ICcjbG9nb1JheXNPbicsIGVhc2U6RXhwby5lYXNlSW5PdXR9XG5cbiAgICBpZiAkKHdpbmRvdykud2lkdGgoKSA8IDEwMDBcbiAgICAgIEBvZmZzZXQgPSAwXG5cbiAgICBAaGFuZGxlcnMoKVxuXG4gIGhhbmRsZXJzOiAtPlxuICAgICQoJ2hlYWRlciA+IC5idXJnZXInKS5jbGljayBAYnVyZ2VySGFuZGxlclxuICAgICQoJ2hlYWRlciA+IC5pbm5lciA+IC5tZW51ID4gLml0ZW1zID4gLmlubmVyID4gLml0ZW0nKS5jbGljayBAbWVudUhhbmRsZXJcbiAgICAkKCdoZWFkZXIgPiAuaW5uZXIgPiAubG9nbycpLmNsaWNrIEBtZW51SGFuZGxlclxuXG4gIGJ1cmdlckhhbmRsZXI6IC0+XG4gICAgXy5zd2FwICdoZWFkZXIgPiAuYnVyZ2VyJ1xuICAgIF8uc3dhcCAnaGVhZGVyID4gLmlubmVyID4gLm1lbnUgPiAuaXRlbXMnXG5cbiAgbWVudUhhbmRsZXI6IC0+XG4gICAgXy5vbiAnaGVhZGVyID4gLmJ1cmdlcidcbiAgICBfLm9mZiAnaGVhZGVyID4gLmlubmVyID4gLm1lbnUgPiAuaXRlbXMnXG4gICAgSW5kZXguc2VjdGlvbiAkKHRoaXMpLmRhdGEgJ2l0ZW0nXG5cbiAgc2VjdGlvbjogKHNlY3Rpb24pIC0+XG4gICAgc2V0VGltZW91dCAtPlxuICAgICAgJCgnaHRtbCwgYm9keScpLnNjcm9sbFRvIFwiIyN7c2VjdGlvbn1cIixcbiAgICAgICAgZHVyYXRpb246IDUwMFxuICAgICAgICBvZmZzZXQ6IEluZGV4Lm9mZnNldFxuICAgICAgbG9jYXRpb24uaGFzaCA9IHNlY3Rpb25cbiAgICAsIDEwMFxuXG5cbiIsIk1hcCA9XG4gIG1hcDogZmFsc2VcbiAgcGxhY2VzOiB7fVxuXG4gIGk6IC0+XG5cblxuICAgIEBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSxcbiAgICAgIGNlbnRlcjogbGF0OiAzNy43Nzg0MDcsIGxuZzogLTEyMi4zOTcxMjhcbiAgICAgIHpvb206IDExXG4gICAgICBzdHlsZXM6IEBzdHlsZXNcbiAgICAgIG9wdGlvbnM6IEBvcHRpb25zXG5cbiAgICBzZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZXNTZXJ2aWNlKEBtYXApXG5cbiAgICBmb3IgdmVuZG9yIGluIGNvbmZpZy52ZW5kb3JzXG4gICAgICBzZXJ2aWNlLmdldERldGFpbHNcbiAgICAgICAgcGxhY2VJZDogdmVuZG9yLnBsYWNlSWRcbiAgICAgICwgKHJlc3VsdCwgc3RhdHVzKSAtPlxuICAgICAgICBNYXAucGxhY2VzW3Jlc3VsdC5wbGFjZV9pZF0gPSByZXN1bHRcbiAgICAgICAgTWFwLm1hcmtlcnMoKSBpZiBfLm9iamMoY29uZmlnLnZlbmRvcnMpIGlzIF8ub2JqYyhNYXAucGxhY2VzKVxuXG5cbiAgICBAaGFuZGxlcnMoKVxuXG4gIGhhbmRsZXJzOiAtPlxuICAgJCgnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlID4gLmNsb3NlJykuY2xpY2sgQHBsYWNlQ2xvc2VIYW5kbGVyXG4gIG1hcmtlcnM6IC0+XG5cbiAgICBtYXJrZXJzID0gW11cblxuICAgIGZvciBpZCwgcGxhY2Ugb2YgQHBsYWNlc1xuXG4gICAgICBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyXG4gICAgICAgIG1hcDogTWFwLm1hcFxuICAgICAgICBwb3NpdGlvbjogcGxhY2UuZ2VvbWV0cnkubG9jYXRpb25cbiAgICAgICAgaWNvbjpcbiAgICAgICAgICB1cmw6ICcvaW1hZ2VzL21hcC9tYXJrZXIucG5nJyxcbiAgICAgICAgICBzY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSg2MCwgNjApXG4gICAgICAgICAgb3JpZ2luOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMCwgMClcbiAgICAgICAgcGxhY2U6XG4gICAgICAgICAgcGxhY2VJZDogcGxhY2UucGxhY2VfaWRcbiAgICAgICAgICBsb2NhdGlvbjogcGxhY2UuZ2VvbWV0cnkubG9jYXRpb25cbiAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyIG1hcmtlciwgJ2NsaWNrJywgTWFwLm1hcmtlckhhbmRsZXJcbiAgICAgIG1hcmtlcnMucHVzaCBtYXJrZXJcblxuICAgIG1hcmtlckNsdXN0ZXIgPSBuZXcgTWFya2VyQ2x1c3RlcmVyIE1hcC5tYXAsIG1hcmtlcnMsXG4gICAgICBpbWFnZVBhdGg6ICdodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9leGFtcGxlcy9tYXJrZXJjbHVzdGVyZXIvbSdcblxuICBtYXJrZXJIYW5kbGVyOiAtPlxuXG4gICBwbGFjZSA9IE1hcC5wbGFjZXNbdGhpcy5wbGFjZS5wbGFjZUlkXVxuXG5cbiAgIGlmIHBsYWNlLnBob3Rvc1xuICAgICQoJy5zZWN0aW9uX2xvY2F0aW9ucyA+IC5wbGFjZSA+IC5pbm5lciA+IC5pbWFnZScpLmF0dHIgJ3NyYycscGxhY2UucGhvdG9zWzBdLmdldFVybCBtYXhXaWR0aDogMjYwLCBtYXhIZWlnaHQ6IDIwMFxuICAgIF8ub24gJy5zZWN0aW9uX2xvY2F0aW9ucyA+IC5wbGFjZSA+IC5pbm5lciA+IC5pbWFnZSdcbiAgIGVsc2VcbiAgICBfLm9mZiAnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlID4gLmlubmVyID4gLmltYWdlJ1xuXG4gICAkKCcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UgPiAuaW5uZXIgPiAubmFtZScpLnRleHQgcGxhY2UubmFtZVxuICAgJCgnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlID4gLmlubmVyID4gLm5hbWUnKS5hdHRyICdocmVmJywgcGxhY2UudXJsXG4gICAkKCcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UgPiAuaW5uZXIgPiAuYWRkcmVzcycpLmh0bWwgcGxhY2UuZm9ybWF0dGVkX2FkZHJlc3NcbiAgICQoJy5zZWN0aW9uX2xvY2F0aW9ucyA+IC5wbGFjZSA+IC5pbm5lciA+IC5waG9uZScpLmh0bWwgcGxhY2UuZm9ybWF0dGVkX3Bob25lX251bWJlclxuXG4gICBfLm9uICcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UnXG5cbiAgIE1hcC5tYXAuc2V0Wm9vbSgxNilcbiAgIE1hcC5tYXAuc2V0Q2VudGVyKHRoaXMuZ2V0UG9zaXRpb24oKSlcblxuICAgY29uc29sZS5sb2cgcGxhY2VcblxuXG4gIHBsYWNlQ2xvc2VIYW5kbGVyOiAtPlxuICAgIF8ub2ZmICcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UnXG4gICAgTWFwLm1hcC5zZXRab29tKDExKVxuICAgIFxuICBvcHRpb25zOlxuICAgIHNjcm9sbHdoZWVsOiBmYWxzZVxuICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZVxuICAgIGZ1bGxzY3JlZW5Db250cm9sOiBmYWxzZVxuXG4gIHN0eWxlczpcbiAgICBbXG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdhZG1pbmlzdHJhdGl2ZSdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2xhYmVscy50ZXh0LmZpbGwnXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICdjb2xvcic6ICcjOWU1ZDA3JyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ2FkbWluaXN0cmF0aXZlLmNvdW50cnknXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdsYWJlbHMudGV4dC5maWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAnY29sb3InOiAnI2YyOTkzNCcgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdhZG1pbmlzdHJhdGl2ZS5sb2NhbGl0eSdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2xhYmVscy50ZXh0LmZpbGwnXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICdjb2xvcic6ICcjOWU1ZDA3JyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ2xhbmRzY2FwZSdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2FsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbIHsgJ2NvbG9yJzogJyNmOGY1ZjInIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAncG9pJ1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnYWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAndmlzaWJpbGl0eSc6ICdvZmYnIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAncm9hZCdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2FsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbXG4gICAgICAgICAgeyAnc2F0dXJhdGlvbic6IC0xMDAgfVxuICAgICAgICAgIHsgJ2xpZ2h0bmVzcyc6IDQ1IH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAncm9hZCdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2dlb21ldHJ5LmZpbGwnXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICdjb2xvcic6ICcjZjI5OTM0JyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3JvYWQuaGlnaHdheSdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2FsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbIHsgJ3Zpc2liaWxpdHknOiAnc2ltcGxpZmllZCcgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdyb2FkLmFydGVyaWFsJ1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnbGFiZWxzLmljb24nXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICd2aXNpYmlsaXR5JzogJ29mZicgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICd0cmFuc2l0J1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnYWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAndmlzaWJpbGl0eSc6ICdvZmYnIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAnd2F0ZXInXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdhbGwnXG4gICAgICAgICdzdHlsZXJzJzogW1xuICAgICAgICAgIHsgJ2NvbG9yJzogJyMwMGFmYWEnIH1cbiAgICAgICAgICB7ICd2aXNpYmlsaXR5JzogJ29uJyB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG5cbiIsIlByb2R1Y3QgPVxuXG4gIGk6IC0+XG5cbiAgICBAaGFuZGxlcnMoKVxuXG4gIGhhbmRsZXJzOiAtPlxuICAgICQoJy5zZWN0aW9uX3Byb2R1Y3RzID4gLnByb2R1Y3RsaXN0ID4gLnByb2R1Y3QnKS5jbGljayBAcHJvZHVjdENsaWNrXG4gICAgJCgnLnNlY3Rpb25fcHJvZHVjdHMgPiAuZGV0YWlscyA+IC5kZXRhaWwgPiAuY2xvc2UnKS5jbGljayBAY2xvc2VDbGlja1xuXG5cbiAgcHJvZHVjdENsaWNrOiAtPlxuICAgIHByb2R1Y3QgPSAkKHRoaXMpLmRhdGEgJ3Byb2R1Y3QnXG4gICAgXy5vbiBcIltpZD0nZGV0YWlsICN7cHJvZHVjdH0nXVwiXG4gICAgXy5vbiBcIltpZD0naW1hZ2UgI3twcm9kdWN0fSddXCJcbiAgICBpZiBJbmRleC5vZmZzZXQgaXNudCAwXG4gICAgICBJbmRleC5zZWN0aW9uICdwcm9kdWN0cydcblxuICAgICN0bCA9IG5ldyBUaW1lbGluZU1heCByZXBlYXQ6IDBcbiAgICAjdGwudG8gJyNzdW5FbXB0eScsIDIuMCwge21vcnBoU1ZHOiAnI3N1bkZpbGxlZCcsIGVhc2U6RXhwby5lYXNlSW5PdXR9XG5cbiAgY2xvc2VDbGljazogLT5cblxuICAgIF8ub2ZmICcuc2VjdGlvbl9wcm9kdWN0cyA+IC5kZXRhaWxzID4gLmRldGFpbCdcbiAgICBfLm9mZiAnLnNlY3Rpb25fcHJvZHVjdHMgPiAuZGV0YWlscyA+IC5pbWFnZSdcbiAgICBcbiJdfQ==
