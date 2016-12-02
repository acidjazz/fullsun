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
  image: false,
  peach: false,
  filled: false,
  i: function() {
    this.win = $(window);
    this.height = this.win.height();
    this.logo = $('.section.section_top > .middle');
    this.header = $('header');
    this.image = $('.section.section_top > .bgimage');
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
    Delay.logo.css('transform', "translate(0px, " + (perc * 7) + "px)");
    return Delay.header.css('background-color', "rgba(" + Delay.peach.r + "," + Delay.peach.g + "," + Delay.peach.b + "," + opacity + ")");
  }
};

var Index;

Index = {
  offset: -65,
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
    this.offset = $('header').height();
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
    return $('.section_map > .place > .close').click(this.placeCloseHandler);
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
      $('.section_map > .place > .inner > .image').attr('src', place.photos[0].getUrl({
        maxWidth: 260,
        maxHeight: 200
      }));
      _.on('.section_map > .place > .inner > .image');
    } else {
      _.off('.section_map > .place > .inner > .image');
    }
    $('.section_map > .place > .inner > .name').text(place.name);
    $('.section_map > .place > .inner > .name').attr('href', place.url);
    $('.section_map > .place > .inner > .address').html(place.formatted_address);
    $('.section_map > .place > .inner > .phone').html(place.formatted_phone_number);
    _.on('.section_map > .place');
    Map.map.setZoom(16);
    Map.map.setCenter(this.getPosition());
    return console.log(place);
  },
  placeCloseHandler: function() {
    _.off('.section_map > .place');
    return Map.map.setZoom(11);
  },
  options: {
    scrollwheel: false,
    mapTypeControl: false
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjI1Ni5jb2ZmZWUiLCJjb25maWcuY29mZmVlIiwiZGVsYXkuY29mZmVlIiwiaW5kZXguY29mZmVlIiwibWFwLmNvZmZlZSIsInByb2R1Y3QuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsQ0FBQTtFQUFBOztBQUFBLENBQUEsR0FFRTtFQUFBLENBQUEsRUFBRyxTQUFBO1dBQ0QsSUFBQyxDQUFBLE9BQUQsR0FBVyxXQUFBLENBQVksSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsSUFBYixDQUFaLEVBQTZCLEdBQTdCO0VBRFYsQ0FBSDtFQUdBLENBQUEsRUFDRTtJQUFBLE1BQUEsRUFBUSxLQUFSO0lBQ0EsT0FBQSxFQUFTLENBRFQ7R0FKRjtFQU9BLElBQUEsRUFBTSxTQUFDLEVBQUQsRUFBSyxNQUFMLEVBQW1CLEdBQW5COztNQUFLLFNBQU87OztNQUFPLE1BQUk7O0lBRTNCLElBQUcsQ0FBQSxDQUFBLEVBQUEsWUFBa0IsTUFBbEIsQ0FBSDtNQUNFLEVBQUEsR0FBSyxDQUFBLENBQUUsRUFBRixFQURQOztJQUdBLElBQUcsTUFBQSxLQUFZLEtBQWY7TUFDRSxFQUFFLENBQUMsV0FBSCxDQUFlLE1BQWYsRUFERjs7SUFHQSxJQUFHLEdBQUEsS0FBUyxLQUFaO01BQ0UsRUFBRSxDQUFDLFFBQUgsQ0FBWSxHQUFaLEVBREY7O0FBR0EsV0FBTztFQVhILENBUE47RUFvQkEsR0FBQSxFQUFLLFNBQUMsRUFBRCxFQUFLLENBQUw7O01BQUssSUFBRTs7SUFFVixJQUFHLENBQUMsQ0FBQyxNQUFGLElBQWEsQ0FBQyxDQUFDLE9BQUYsR0FBWSxDQUE1QjtNQUVFLElBQUMsQ0FBQSxJQUFELENBQU0sRUFBTixFQUFVLEtBQVYsRUFBaUIsUUFBakI7TUFDQSxVQUFBLENBQVcsU0FBQTtRQUNULElBQUMsQ0FBQSxJQUFELENBQU0sRUFBTixFQUFVLFFBQVYsRUFBb0IsS0FBcEI7ZUFDQSxJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4s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RixDQUFnRCxDQUFDLEtBQWpELENBQXVELElBQUMsQ0FBQSxZQUF4RDtXQUNBLENBQUEsQ0FBRSxpREFBRixDQUFvRCxDQUFDLEtBQXJELENBQTJELElBQUMsQ0FBQSxVQUE1RDtFQUZRLENBSlY7RUFTQSxZQUFBLEVBQWMsU0FBQTtBQUNaLFFBQUE7SUFBQSxPQUFBLEdBQVUsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLElBQVIsQ0FBYSxTQUFiO0lBQ1YsQ0FBQyxDQUFDLEVBQUYsQ0FBSyxjQUFBLEdBQWUsT0FBZixHQUF1QixJQUE1QjtJQUNBLENBQUMsQ0FBQyxFQUFGLENBQUssYUFBQSxHQUFjLE9BQWQsR0FBc0IsSUFBM0I7SUFDQSxJQUFHLEtBQUssQ0FBQyxNQUFOLEtBQWtCLENBQXJCO2FBQ0UsS0FBSyxDQUFDLE9BQU4sQ0FBYyxVQUFkLEVBREY7O0VBSlksQ0FUZDtFQWlCQSxVQUFBLEVBQVksU0FBQTtJQUVWLENBQUMsQ0FBQyxHQUFGLENBQU0sd0NBQU47V0FDQSxDQUFDLENBQUMsR0FBRixDQUFNLHVDQUFOO0VBSFUsQ0FqQloiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXyA9XG5cbiAgaTogLT5cbiAgICBAY29uc29sZSA9IHNldEludGVydmFsKEBkZXRlY3QuYmluZChAKSwgMjAwKVxuXG4gIHA6XG4gICAgb2ZmaW5nOiBmYWxzZVxuICAgIG9mZnRpbWU6IDBcblxuICB0dXJuOiAoZWwsIHJlbW92ZT1mYWxzZSwgYWRkPWZhbHNlKSAtPlxuXG4gICAgaWYgZWwgbm90IGluc3RhbmNlb2YgalF1ZXJ5XG4gICAgICBlbCA9ICQoZWwpXG5cbiAgICBpZiByZW1vdmUgaXNudCBmYWxzZVxuICAgICAgZWwucmVtb3ZlQ2xhc3MocmVtb3ZlKVxuXG4gICAgaWYgYWRkIGlzbnQgZmFsc2VcbiAgICAgIGVsLmFkZENsYXNzKGFkZClcblxuICAgIHJldHVybiB0cnVlXG5cbiAgb2ZmOiAoZWwsIHA9e30pIC0+XG5cbiAgICBpZiBwLm9mZmluZyBhbmQgcC5vZmZ0aW1lID4gMFxuXG4gICAgICBAdHVybiBlbCwgZmFsc2UsICdvZmZpbmcnXG4gICAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAgIEB0dXJuIGVsLCAnb2ZmaW5nJywgZmFsc2VcbiAgICAgICAgQHR1cm4gZWwsICdvbicsICdvZmYnXG4gICAgICAsIHAub2ZmdGltZSoxMDAwICsgMTAwXG5cbiAgICBlbHNlXG4gICAgICBAdHVybiBlbCwgJ29uJywgJ29mZidcblxuICAgIHJldHVyblxuXG4gIG9uOiAoZWwsIHApIC0+XG4gICAgQHR1cm4gZWwsICdvZmYnLCAnb24nXG5cbiAgc3dhcDogKGVsLCBwKSAtPlxuXG4gICAgaWYgZWwgbm90IGluc3RhbmNlb2YgalF1ZXJ5XG4gICAgICBlbCA9ICQoZWwpXG5cbiAgICBpZiBlbC5oYXNDbGFzcyAnb2ZmJ1xuICAgICAgQG9uIGVsLCBwXG4gICAgZWxzZVxuICAgICAgQG9mZiBlbCwgcFxuXG4gICAgcmV0dXJuXG5cbiAgZW5jb2RlOiAoc3RyKSAtPlxuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKVxuICAgICAgLnJlcGxhY2UoLyEvZywgJyUyMScpXG4gICAgICAucmVwbGFjZSgvJy9nLCAnJTI3JylcbiAgICAgIC5yZXBsYWNlKC9cXCgvZywgJyUyOCcpXG4gICAgICAucmVwbGFjZSgvXFwpL2csICclMjknKVxuICAgICAgLnJlcGxhY2UoL1xcKi9nLCAnJTJBJylcbiAgICAgIC5yZXBsYWNlKC8lMjAvZywgJysnKVxuXG4gIHQ6IChjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCwgdmFsdWUpIC0+XG4gICAgX2dhcS5wdXNoIFsnX3RyYWNrRXZlbnQnLCBjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCwgdmFsdWVdXG5cbiAgcmFuZDogKG1pbiwgbWF4KSAtPlxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpICsgbWluXG5cbiAgaGV4MnJnYjogKGhleCkgLT5cbiAgICByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KVxuICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxuICAgIGc6IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxuICAgIGI6IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpXG4gXG4gIG9iamM6IChvYmopIC0+XG4gICAgKGsgZm9yIG93biBrIG9mIG9iaikubGVuZ3RoXG5cbiAgbG9hZDogKHNjcmlwdCwgaW5pdGlhdGUsIGNvbXBsZXRlKSAtPlxuXG4gICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICdzY3JpcHQnXG4gICAgZWwudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnXG4gICAgZWwuc3JjID0gc2NyaXB0XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lciAnbG9hZCcgLCAoZSkgLT5cbiAgICAgIGNvbXBsZXRlKCkgaWYgdHlwZW9mIGNvbXBsZXRlIGlzICdmdW5jdGlvbidcbiAgICAgIHdpbmRvd1tpbml0aWF0ZV0uaSgpIGlmIGluaXRpYXRlIGlzbnQgdW5kZWZpbmVkIGFuZCBpbml0aWF0ZSBpc250IGZhbHNlXG4gICAgLCBmYWxzZVxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbClcblxuICBsbGM6IC0+XG4gICAgYXNjaWkgPSBcIlwiXCJcblxuICAgICAgJWNtbW0vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9tbW1cbiAgICAgIG1tby4uLi4uLi4uLi4uLi4uLi4tOjovLzo6LS4uLi4uLi4tOjo6Ojo6Ojo6Ojo6Oi0uLi4uLi4uLi06Oi8vLzotLm9tbVxuICAgICAgbWQtLi4uLi4uLi4uLi4uLjoreWhkZGRkZGRoeSstLi4uLi9kZGRkZGRkZGRkZGRkKy4uLi4uLi9zaGRkZGRkZGR5b2RtXG4gICAgICBtby4uLi4uLi4uLi4uLi4taG1tbWh5eXl5ZG1tbWg6Li4uL21tbW1oaGhoaGhoaGgrLi4uLjp5ZG1tZGh5eXloZGRvb21cbiAgICAgIG0tLi4uLi4uLi4uLi4uLi4tc3M6LS4uLi4teW1tbXkuLi4vbW1tbS0tLS0tLS0tLS4uLi46ZG1tbXM6LS4uLi06Ly4tbVxuICAgICAgZC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi55bW1teS4uLi9tbW1tLS8rb29vKzotLi4uLnltbW15LTorb29vKy8tLi5kXG4gICAgICBoLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi46c21tbWQ6Li4uL21tbW1obW1tbW1tZGgrLi4uZG1tbXNoZG1tbW1tbWhzLWhcbiAgICAgIGguLi4uLi4uLi4uLi4uLi4uLi4uLi46c2RtbWR5Oi4uLi46aGhkaG8rLy8reW1tbW0rLi5kbW1tZHlvLy8rc2RtbW1oaFxuICAgICAgZC4uLi4uLi4uLi4uLi4uLi4uLi0reWRtbWR5Ly4uLi4uLi4tLTouLi4uLi4uc21tbWguLnltbW1zLi4uLi4uOm1tbW1tXG4gICAgICBtLS4uLi4uLi4uLi4uLi4uLTpzaG1tbWRzLy0tLS0tLi4uLjpzLy0tLi4uLTpobW1tcy4uOmRtbWQvLS4uLi1vbW1tbW1cbiAgICAgIG1vLi4uLi4uLi4uLi4uLi5obW1tbW1taGhoaGhoaGguLi4rZG1tZGh5eXloZG1tbXktLi4uL2htbW1oeXl5aG1tbWRobVxuICAgICAgbWQtLi4uLi4uLi4uLi4uLmRkZGRkZGRkZGRkZGRkZC4uLi0rc2hkZGRkZGRkaHkvLS4uLi4uLW95ZGRkZGRkZGhvOmRtXG4gICAgICBtbW8uLi4uLi4uLi4uLi4uOjo6Ojo6Ojo6Ojo6Ojo6Li4uLi4uLi06Ly8vOjotLi4uLi4uLi4uLi4tOi8vLzotLi5vbW1cbiAgICAgIG1tbS8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uL21tbVxuXG4gICAgICA6OiBzeW50YWN0aWMgc3VnYXIgYnkgMjU2XG4gICAgICA6OiBodHRwOi8vMjU2LmlvL1xuICAgICAgOjogI3tjb25maWcubWV0YS5yZXBvfVxuICAgIFwiXCJcIlxuICAgIGNvbnNvbGUubG9nIGFzY2lpLCBcImNvbG9yOiBncmV5OyBmb250LWZhbWlseTogTWVubG8sIG1vbm9zcGFjZTtcIlxuXG4gIGRldGVjdDogLT5cbiAgICBpZiAoKCh3aW5kb3cub3V0ZXJIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQpID4gMTAwKSB8fCAoKHdpbmRvdy5vdXRlcldpZHRoIC0gd2luZG93LmlubmVyV2lkdGgpID4gMTAwKSlcbiAgICAgIEBsbGMoKVxuICAgICAgY2xlYXJJbnRlcnZhbCBAY29uc29sZVxuXG5fLmkoKVxuIiwiY29uZmlnID0ge1wiY29sb3JcIjp7XCJibHVlMVwiOlwiIzAwQUZBQVwiLFwib3JhbmdlMVwiOlwiI0YyOTkzNFwiLFwib3JhbmdlMlwiOlwiIzlFNUQwN1wiLFwicGVhY2gxXCI6XCIjRjhGNUYyXCIsXCJ3aGl0ZTFcIjpcIiNmZmZmZmZcIixcImJsYWNrMVwiOlwiIzAwMDAwMFwiLFwiZ3JleTFcIjpcIiM3Nzc3NzdcIn0sXCJmb250XCI6e1wiaDFcIjp7XCJmb250LWZhbWlseVwiOlwiYXF1aWxvbmUgcmVndWxhclwiLFwiZm9udC1zaXplXCI6XCI0OHB4XCJ9LFwiaDJcIjp7XCJmb250LWZhbWlseVwiOlwic2Fja2VycyBnb3RoaWNcIixcImZvbnQtc2l6ZVwiOlwiMjZweFwiLFwibGV0dGVyLXNwYWNpbmdcIjpcIjRweFwifSxcImgzXCI6e1wiZm9udC1mYW1pbHlcIjpcInNhY2tlcnMgZ290aGljXCIsXCJmb250LXNpemVcIjpcIjIwcHhcIixcImxldHRlci1zcGFjaW5nXCI6XCIycHhcIixcImxpbmUtaGVpZ2h0XCI6XCIzMnB4XCJ9LFwiaDRcIjp7XCJmb250LWZhbWlseVwiOlwiYXF1aWxvbmUgcmVndWxhclwiLFwiZm9udC1zaXplXCI6XCIzMnB4XCJ9LFwiYzFcIjp7XCJmb250LWZhbWlseVwiOlwiYXZlcnRhIGxpZ2h0XCIsXCJmb250LXNpemVcIjpcIjIwcHhcIn0sXCJjMXNcIjp7XCJmb250LWZhbWlseVwiOlwiYXZlcnRhIGxpZ2h0XCIsXCJmb250LXNpemVcIjpcIjE0cHhcIn0sXCJjMlwiOntcImZvbnQtZmFtaWx5XCI6XCJhdmVydGEgYm9sZFwiLFwiZm9udC1zaXplXCI6XCIyOHB4XCJ9LFwiYzNcIjp7XCJmb250LWZhbWlseVwiOlwiYXZlcnRhIGJvbGRcIixcImZvbnQtc2l6ZVwiOlwiMTRweFwifX0sXCJtZXRhXCI6e1widXJsXCI6XCJodHRwOi8vZnVsbHN1bi5jb20vXCIsXCJ0aXRsZVwiOlwiZnVsbCBzdW5cIixcImRlc2NyaXB0aW9uXCI6XCJjYWxpZm9ybmlhIGNvbnNjaW91cyBjYW5uYWJpc1wiLFwia2V5d29yZHNcIjpcImZ1bGwgc3VuLCBjYW5uYWJpcywgY2FsaWZvcm5pYVwiLFwidHJhY2tpbmdfaWRcIjozMTMzNyxcInNoYXJlXCI6XCJpbWFnZXMvbG9nbzEucG5nXCIsXCJyZXBvXCI6XCJodHRwczovL2dpdGh1Yi5jb20vYWNpZGphenovZnVsbHN1blwiLFwibWFwX2FwaV9rZXlcIjpcIkFJemFTeUFJcTg0cGppNG92dW1BTlhYb2xNcWtHd1FYOGtNMW1LY1wifSxcInByb2R1Y3RzXCI6W3tcIm5hbWVcIjpcInZhcGUgcGVuIHNldFwiLFwidGl0bGVcIjpcIjUxMCBUaHJlYWRlZCBCYXR0ZXJ5LCBDaGFyZ2VyLCBhbmQgTmF0dXJhbCBSaXNlIENhcnRyaWRnZS5cIixcImRlc2NyaXB0aW9uXCI6XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRpYW0gbm9udW1teSBuaWJoIGV1aXNtb2QgdGluY2lkdW50IHV0IGxhb3JlZXQgZG9sb3JlIG1hZ25hIGFsaXF1YW0gZXJhdCB2b2x1dHBhdC4gVXQgd2lzaSBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaSB0YXRpb24gdWxsYW1jb3JwZXIgc3VzY2lwaXQgbG9ib3J0aXMgbmlzbCB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LlwiLFwiaW1hZ2VcIjpcInBlbl9zZXQuanBnXCIsXCJkZXRhaWxcIjpbe1wibGVmdFwiOlwiVEhDXCIsXCJyaWdodFwiOlwiMjMlXCJ9LHtcImxlZnRcIjpcIlNBVElWQVwiLFwicmlnaHRcIjpcIkh1bWJvbGR0IENvdW50eSwgQ0FcIn0se1wibGVmdFwiOlwiRkVFTFMgTElLRVwiLFwicmlnaHRcIjpcIkJSSUdIVCAmIEJSRUVaWVwifV19LHtcIm5hbWVcIjpcInJpc2VcIixcInRpdGxlXCI6XCJTb2x2ZW50LUZyZWUgU2luZ2xlIE9yaWdpbiBDYXJ0cmlkZ2UgUmVmaWxsXCIsXCJkZXNjcmlwdGlvblwiOlwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkaWFtIG5vbnVtbXkgbmliaCBldWlzbW9kIHRpbmNpZHVudCB1dCBsYW9yZWV0IGRvbG9yZSBtYWduYSBhbGlxdWFtIGVyYXQgdm9sdXRwYXQuIFV0IHdpc2kgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2kgdGF0aW9uIHVsbGFtY29ycGVyIHN1c2NpcGl0IGxvYm9ydGlzIG5pc2wgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC5cIixcImltYWdlXCI6XCJyaXNlLmpwZ1wiLFwiZGV0YWlsXCI6W3tcImxlZnRcIjpcIlRIQ1wiLFwicmlnaHRcIjpcIjIzJVwifSx7XCJsZWZ0XCI6XCJTQVRJVkFcIixcInJpZ2h0XCI6XCJIdW1ib2xkdCBDb3VudHksIENBXCJ9LHtcImxlZnRcIjpcIkZFRUxTIExJS0VcIixcInJpZ2h0XCI6XCJCUklHSFQgJiBCUkVFWllcIn1dfSx7XCJuYW1lXCI6XCJzaGluZVwiLFwidGl0bGVcIjpcIlNvbHZlbnQtRnJlZSBDbGVhciBDb25jZW50cmF0ZSBIaWdoIERlZmluaXRpb24gT0cgS3VzaC5cIixcImRlc2NyaXB0aW9uXCI6XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRpYW0gbm9udW1teSBuaWJoIGV1aXNtb2QgdGluY2lkdW50IHV0IGxhb3JlZXQgZG9sb3JlIG1hZ25hIGFsaXF1YW0gZXJhdCB2b2x1dHBhdC4gVXQgd2lzaSBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaSB0YXRpb24gdWxsYW1jb3JwZXIgc3VzY2lwaXQgbG9ib3J0aXMgbmlzbCB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LlwiLFwiaW1hZ2VcIjpcInNoaW5lLmpwZ1wiLFwiZGV0YWlsXCI6W3tcImxlZnRcIjpcIlRIQ1wiLFwicmlnaHRcIjpcIjIzJVwifSx7XCJsZWZ0XCI6XCJTQVRJVkFcIixcInJpZ2h0XCI6XCJIdW1ib2xkdCBDb3VudHksIENBXCJ9LHtcImxlZnRcIjpcIkZFRUxTIExJS0VcIixcInJpZ2h0XCI6XCJNRUxMT1cgJiBXQVJNXCJ9XX1dLFwidmVuZG9yc1wiOlt7XCJuYW1lXCI6XCJUaGUgR3JlZW4gQ3Jvc3NcIixcInBsYWNlSWRcIjpcIkNoSUpwN3V6NzRsLWo0QVJILW5kSmptMHR6a1wifSx7XCJuYW1lXCI6XCJIYXJib3JzaWRlIEhlYWx0aCBDZW50ZXJcIixcInBsYWNlSWRcIjpcIkNoSUprNnZZcnVDR2o0QVJHZ3NHblFhV2d6d1wifSx7XCJuYW1lXCI6XCJzcGFyY1wiLFwicGxhY2VJZFwiOlwiQ2hJSldVWjd3cHlBaFlBUktRWV9JSkhFXzk0XCJ9XX07IiwiXG5EZWxheSA9XG4gIGhlaWdodDogZmFsc2VcbiAgd2luOiBmYWxzZVxuICBsb2dvOiBmYWxzZVxuICBoZWFkZXI6IGZhbHNlXG4gIGltYWdlOiBmYWxzZVxuICBwZWFjaDogZmFsc2VcbiAgZmlsbGVkOiBmYWxzZVxuXG4gIGk6IC0+XG5cbiAgICBAd2luID0gJCB3aW5kb3dcbiAgICBAaGVpZ2h0ID0gQHdpbi5oZWlnaHQoKVxuICAgIEBsb2dvID0gJCAnLnNlY3Rpb24uc2VjdGlvbl90b3AgPiAubWlkZGxlJ1xuICAgIEBoZWFkZXIgPSAkICdoZWFkZXInXG4gICAgQGltYWdlID0gJCAnLnNlY3Rpb24uc2VjdGlvbl90b3AgPiAuYmdpbWFnZSdcbiAgICBAcGVhY2ggPSBfLmhleDJyZ2IgY29uZmlnLmNvbG9yLnBlYWNoMVxuICAgICQod2luZG93KS5zY3JvbGwgQGNoZWNrU2Nyb2xsXG5cbiAgY2hlY2tTY3JvbGw6IC0+XG5cbiAgICBwZXJjID0gKERlbGF5Lndpbi5zY3JvbGxUb3AoKSAqIDEwMCAvIERlbGF5LmhlaWdodCkudG9GaXhlZCAyXG5cbiAgICBpZiBwZXJjID4gMTAwXG4gICAgICBpZiBEZWxheS5maWxsZWQgaXMgZmFsc2VcbiAgICAgICAgJCgnaGVhZGVyJykuYWRkQ2xhc3MgJ2ZpbGxlZCdcbiAgICAgICAgRGVsYXkuZmlsbGVkID0gdHJ1ZVxuICAgICAgcmV0dXJuIHRydWVcbiAgICBlbHNlXG4gICAgICBpZiBEZWxheS5maWxsZWQgaXMgdHJ1ZVxuICAgICAgICAkKCdoZWFkZXInKS5yZW1vdmVDbGFzcyAnZmlsbGVkJ1xuICAgICAgICBEZWxheS5maWxsZWQgPSBmYWxzZVxuXG4gICAgb3BhY2l0eSA9IChwZXJjLzEwMCkudG9GaXhlZCgxKSAvIDJcblxuICAgIERlbGF5LmxvZ28uY3NzKCd0cmFuc2Zvcm0nLCBcInRyYW5zbGF0ZSgwcHgsICN7cGVyYyo3fXB4KVwiKVxuICAgICNEZWxheS5pbWFnZS5jc3MoJ3RyYW5zZm9ybScsIFwidHJhbnNsYXRlKDBweCwgI3twZXJjKjh9cHgpXCIpXG4gICAgRGVsYXkuaGVhZGVyLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIFwicmdiYSgje0RlbGF5LnBlYWNoLnJ9LCN7RGVsYXkucGVhY2guZ30sI3tEZWxheS5wZWFjaC5ifSwje29wYWNpdHl9KVwiKVxuXG4iLCJJbmRleCA9XG4gIG9mZnNldDogLTY1XG5cbiAgaTogLT5cblxuICAgIERlbGF5LmkoKVxuICAgIFByb2R1Y3QuaSgpXG5cbiAgICB0bCA9IG5ldyBUaW1lbGluZU1heCByZXBlYXQ6IDBcblxuICAgIHRsLnRvICcjbG9nb1JheXNPZmYnLCAyLjAsIHttb3JwaFNWRzogJyNsb2dvUmF5c09uJywgZWFzZTpFeHBvLmVhc2VJbk91dH1cblxuICAgIEBvZmZzZXQgPSAkKCdoZWFkZXInKS5oZWlnaHQoKVxuXG4gICAgaWYgJCh3aW5kb3cpLndpZHRoKCkgPCAxMDAwXG4gICAgICBAb2Zmc2V0ID0gMFxuXG5cbiAgICBAaGFuZGxlcnMoKVxuXG4gIGhhbmRsZXJzOiAtPlxuICAgICQoJ2hlYWRlciA+IC5idXJnZXInKS5jbGljayBAYnVyZ2VySGFuZGxlclxuICAgICQoJ2hlYWRlciA+IC5pbm5lciA+IC5tZW51ID4gLml0ZW1zID4gLmlubmVyID4gLml0ZW0nKS5jbGljayBAbWVudUhhbmRsZXJcbiAgICAkKCdoZWFkZXIgPiAuaW5uZXIgPiAubG9nbycpLmNsaWNrIEBtZW51SGFuZGxlclxuXG4gIGJ1cmdlckhhbmRsZXI6IC0+XG4gICAgXy5zd2FwICdoZWFkZXIgPiAuYnVyZ2VyJ1xuICAgIF8uc3dhcCAnaGVhZGVyID4gLmlubmVyID4gLm1lbnUgPiAuaXRlbXMnXG5cbiAgbWVudUhhbmRsZXI6IC0+XG4gICAgXy5vbiAnaGVhZGVyID4gLmJ1cmdlcidcbiAgICBfLm9mZiAnaGVhZGVyID4gLmlubmVyID4gLm1lbnUgPiAuaXRlbXMnXG4gICAgSW5kZXguc2VjdGlvbiAkKHRoaXMpLmRhdGEgJ2l0ZW0nXG5cbiAgc2VjdGlvbjogKHNlY3Rpb24pIC0+XG4gICAgc2V0VGltZW91dCAtPlxuICAgICAgJCgnaHRtbCwgYm9keScpLnNjcm9sbFRvIFwiIyN7c2VjdGlvbn1cIixcbiAgICAgICAgZHVyYXRpb246IDUwMFxuICAgICAgICBvZmZzZXQ6IEluZGV4Lm9mZnNldFxuICAgICAgbG9jYXRpb24uaGFzaCA9IHNlY3Rpb25cbiAgICAsIDEwMFxuXG5cbiIsIk1hcCA9XG4gIG1hcDogZmFsc2VcbiAgcGxhY2VzOiB7fVxuXG4gIGk6IC0+XG5cbiAgICBAbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksXG4gICAgICBjZW50ZXI6IGxhdDogMzcuNzc4NDA3LCBsbmc6IC0xMjIuMzk3MTI4XG4gICAgICB6b29tOiAxMVxuICAgICAgc3R5bGVzOiBAc3R5bGVzXG4gICAgICBvcHRpb25zOiBAb3B0aW9uc1xuXG4gICAgc2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuUGxhY2VzU2VydmljZShAbWFwKVxuXG4gICAgZm9yIHZlbmRvciBpbiBjb25maWcudmVuZG9yc1xuICAgICAgc2VydmljZS5nZXREZXRhaWxzXG4gICAgICAgIHBsYWNlSWQ6IHZlbmRvci5wbGFjZUlkXG4gICAgICAsIChyZXN1bHQsIHN0YXR1cykgLT5cbiAgICAgICAgTWFwLnBsYWNlc1tyZXN1bHQucGxhY2VfaWRdID0gcmVzdWx0XG4gICAgICAgIE1hcC5tYXJrZXJzKCkgaWYgXy5vYmpjKGNvbmZpZy52ZW5kb3JzKSBpcyBfLm9iamMoTWFwLnBsYWNlcylcblxuXG4gICAgQGhhbmRsZXJzKClcblxuICBoYW5kbGVyczogLT5cbiAgICQoJy5zZWN0aW9uX21hcCA+IC5wbGFjZSA+IC5jbG9zZScpLmNsaWNrIEBwbGFjZUNsb3NlSGFuZGxlclxuICBtYXJrZXJzOiAtPlxuXG4gICAgbWFya2VycyA9IFtdXG5cbiAgICBmb3IgaWQsIHBsYWNlIG9mIEBwbGFjZXNcblxuICAgICAgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlclxuICAgICAgICBtYXA6IE1hcC5tYXBcbiAgICAgICAgcG9zaXRpb246IHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uXG4gICAgICAgIGljb246XG4gICAgICAgICAgdXJsOiAnL2ltYWdlcy9tYXAvbWFya2VyLnBuZycsXG4gICAgICAgICAgc2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoNjAsIDYwKVxuICAgICAgICAgIG9yaWdpbjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDAsIDApXG4gICAgICAgIHBsYWNlOlxuICAgICAgICAgIHBsYWNlSWQ6IHBsYWNlLnBsYWNlX2lkXG4gICAgICAgICAgbG9jYXRpb246IHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uXG4gICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lciBtYXJrZXIsICdjbGljaycsIE1hcC5tYXJrZXJIYW5kbGVyXG4gICAgICBtYXJrZXJzLnB1c2ggbWFya2VyXG5cbiAgICBtYXJrZXJDbHVzdGVyID0gbmV3IE1hcmtlckNsdXN0ZXJlciBNYXAubWFwLCBtYXJrZXJzLFxuICAgICAgaW1hZ2VQYXRoOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvZXhhbXBsZXMvbWFya2VyY2x1c3RlcmVyL20nXG5cbiAgbWFya2VySGFuZGxlcjogLT5cblxuICAgcGxhY2UgPSBNYXAucGxhY2VzW3RoaXMucGxhY2UucGxhY2VJZF1cblxuXG4gICBpZiBwbGFjZS5waG90b3NcbiAgICAkKCcuc2VjdGlvbl9tYXAgPiAucGxhY2UgPiAuaW5uZXIgPiAuaW1hZ2UnKS5hdHRyICdzcmMnLHBsYWNlLnBob3Rvc1swXS5nZXRVcmwgbWF4V2lkdGg6IDI2MCwgbWF4SGVpZ2h0OiAyMDBcbiAgICBfLm9uICcuc2VjdGlvbl9tYXAgPiAucGxhY2UgPiAuaW5uZXIgPiAuaW1hZ2UnXG4gICBlbHNlXG4gICAgXy5vZmYgJy5zZWN0aW9uX21hcCA+IC5wbGFjZSA+IC5pbm5lciA+IC5pbWFnZSdcbiAgICQoJy5zZWN0aW9uX21hcCA+IC5wbGFjZSA+IC5pbm5lciA+IC5uYW1lJykudGV4dCBwbGFjZS5uYW1lXG4gICAkKCcuc2VjdGlvbl9tYXAgPiAucGxhY2UgPiAuaW5uZXIgPiAubmFtZScpLmF0dHIgJ2hyZWYnLCBwbGFjZS51cmxcbiAgICQoJy5zZWN0aW9uX21hcCA+IC5wbGFjZSA+IC5pbm5lciA+IC5hZGRyZXNzJykuaHRtbCBwbGFjZS5mb3JtYXR0ZWRfYWRkcmVzc1xuICAgJCgnLnNlY3Rpb25fbWFwID4gLnBsYWNlID4gLmlubmVyID4gLnBob25lJykuaHRtbCBwbGFjZS5mb3JtYXR0ZWRfcGhvbmVfbnVtYmVyXG5cbiAgIF8ub24gJy5zZWN0aW9uX21hcCA+IC5wbGFjZSdcblxuICAgTWFwLm1hcC5zZXRab29tKDE2KVxuICAgTWFwLm1hcC5zZXRDZW50ZXIodGhpcy5nZXRQb3NpdGlvbigpKVxuXG4gICBjb25zb2xlLmxvZyBwbGFjZVxuXG5cbiAgcGxhY2VDbG9zZUhhbmRsZXI6IC0+XG4gICAgXy5vZmYgJy5zZWN0aW9uX21hcCA+IC5wbGFjZSdcbiAgICBNYXAubWFwLnNldFpvb20oMTEpXG4gICAgXG4gIG9wdGlvbnM6XG4gICAgc2Nyb2xsd2hlZWw6IGZhbHNlXG4gICAgbWFwVHlwZUNvbnRyb2w6IGZhbHNlXG5cbiAgc3R5bGVzOlxuICAgIFtcbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ2FkbWluaXN0cmF0aXZlJ1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnbGFiZWxzLnRleHQuZmlsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbIHsgJ2NvbG9yJzogJyM5ZTVkMDcnIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAnYWRtaW5pc3RyYXRpdmUuY291bnRyeSdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2xhYmVscy50ZXh0LmZpbGwnXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICdjb2xvcic6ICcjZjI5OTM0JyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ2FkbWluaXN0cmF0aXZlLmxvY2FsaXR5J1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnbGFiZWxzLnRleHQuZmlsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbIHsgJ2NvbG9yJzogJyM5ZTVkMDcnIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAnbGFuZHNjYXBlJ1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnYWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAnY29sb3InOiAnI2Y4ZjVmMicgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdwb2knXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdhbGwnXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICd2aXNpYmlsaXR5JzogJ29mZicgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdyb2FkJ1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnYWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFtcbiAgICAgICAgICB7ICdzYXR1cmF0aW9uJzogLTEwMCB9XG4gICAgICAgICAgeyAnbGlnaHRuZXNzJzogNDUgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdyb2FkJ1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnZ2VvbWV0cnkuZmlsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbIHsgJ2NvbG9yJzogJyNmMjk5MzQnIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAncm9hZC5oaWdod2F5J1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnYWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAndmlzaWJpbGl0eSc6ICdzaW1wbGlmaWVkJyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3JvYWQuYXJ0ZXJpYWwnXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdsYWJlbHMuaWNvbidcbiAgICAgICAgJ3N0eWxlcnMnOiBbIHsgJ3Zpc2liaWxpdHknOiAnb2ZmJyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3RyYW5zaXQnXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdhbGwnXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICd2aXNpYmlsaXR5JzogJ29mZicgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICd3YXRlcidcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2FsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbXG4gICAgICAgICAgeyAnY29sb3InOiAnIzAwYWZhYScgfVxuICAgICAgICAgIHsgJ3Zpc2liaWxpdHknOiAnb24nIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cblxuIiwiUHJvZHVjdCA9XG5cbiAgaTogLT5cblxuICAgIEBoYW5kbGVycygpXG5cbiAgaGFuZGxlcnM6IC0+XG4gICAgJCgnLnNlY3Rpb25fcHJvZHVjdHMgPiAucHJvZHVjdGxpc3QgPiAucHJvZHVjdCcpLmNsaWNrIEBwcm9kdWN0Q2xpY2tcbiAgICAkKCcuc2VjdGlvbl9wcm9kdWN0cyA+IC5kZXRhaWxzID4gLmRldGFpbCA+IC5jbG9zZScpLmNsaWNrIEBjbG9zZUNsaWNrXG5cblxuICBwcm9kdWN0Q2xpY2s6IC0+XG4gICAgcHJvZHVjdCA9ICQodGhpcykuZGF0YSAncHJvZHVjdCdcbiAgICBfLm9uIFwiW2lkPSdkZXRhaWwgI3twcm9kdWN0fSddXCJcbiAgICBfLm9uIFwiW2lkPSdpbWFnZSAje3Byb2R1Y3R9J11cIlxuICAgIGlmIEluZGV4Lm9mZnNldCBpc250IDBcbiAgICAgIEluZGV4LnNlY3Rpb24gJ3Byb2R1Y3RzJ1xuXG5cbiAgY2xvc2VDbGljazogLT5cblxuICAgIF8ub2ZmICcuc2VjdGlvbl9wcm9kdWN0cyA+IC5kZXRhaWxzID4gLmRldGFpbCdcbiAgICBfLm9mZiAnLnNlY3Rpb25fcHJvZHVjdHMgPiAuZGV0YWlscyA+IC5pbWFnZSdcbiAgICBcbiJdfQ==
