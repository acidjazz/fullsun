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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjI1Ni5jb2ZmZWUiLCJjb25maWcuY29mZmVlIiwiZGVsYXkuY29mZmVlIiwiaW5kZXguY29mZmVlIiwibWFwLmNvZmZlZSIsInByb2R1Y3QuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsQ0FBQTtFQUFBOztBQUFBLENBQUEsR0FFRTtFQUFBLENBQUEsRUFBRyxTQUFBO1dBQ0QsSUFBQyxDQUFBLE9BQUQsR0FBVyxXQUFBLENBQVksSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsSUFBYixDQUFaLEVBQTZCLEdBQTdCO0VBRFYsQ0FBSDtFQUdBLENBQUEsRUFDRTtJQUFBLE1BQUEsRUFBUSxLQUFSO0lBQ0EsT0FBQSxFQUFTLENBRFQ7R0FKRjtFQU9BLElBQUEsRUFBTSxTQUFDLEVBQUQsRUFBSyxNQUFMLEVBQW1CLEdBQW5COztNQUFLLFNBQU87OztNQUFPLE1BQUk7O0lBRTNCLElBQUcsQ0FBQSxDQUFBLEVBQUEsWUFBa0IsTUFBbEIsQ0FBSDtNQUNFLEVBQUEsR0FBSyxDQUFBLENBQUUsRUFBRixFQURQOztJQUdBLElBQUcsTUFBQSxLQUFZLEtBQWY7TUFDRSxFQUFFLENBQUMsV0FBSCxDQUFlLE1BQWYsRUFERjs7SUFHQSxJQUFHLEdBQUEsS0FBUyxLQUFaO01BQ0UsRUFBRSxDQUFDLFFBQUgsQ0FBWSxHQUFaLEVBREY7O0FBR0EsV0FBTztFQVhILENBUE47RUFvQkEsR0FBQSxFQUFLLFNBQUMsRUFBRCxFQUFLLENBQUw7O01BQUssSUFBRTs7SUFFVixJQUFHLENBQUMsQ0FBQyxNQUFGLElBQWEsQ0FBQyxDQUFDLE9BQUYsR0FBWSxDQUE1QjtNQUVFLElBQUMsQ0FBQSxJQUFELENBQU0sRUFBTixFQUFVLEtBQVYsRUFBaUIsUUFBakI7TUFDQSxVQUFBLENBQVcsU0FBQTtRQUNULElBQUMsQ0FBQSxJQUFELENBQU0sRUFBTixFQUFVLFFBQVYsRUFBb0IsS0FBcEI7ZUFDQSxJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4s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LGlEQUFGLENBQW9ELENBQUMsS0FBckQsQ0FBMkQsSUFBQyxDQUFBLFVBQTVEO0VBRlEsQ0FKVjtFQVNBLFlBQUEsRUFBYyxTQUFBO0FBQ1osUUFBQTtJQUFBLE9BQUEsR0FBVSxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsSUFBUixDQUFhLFNBQWI7SUFDVixDQUFDLENBQUMsRUFBRixDQUFLLGNBQUEsR0FBZSxPQUFmLEdBQXVCLElBQTVCO0lBQ0EsQ0FBQyxDQUFDLEVBQUYsQ0FBSyxhQUFBLEdBQWMsT0FBZCxHQUFzQixJQUEzQjtJQUNBLElBQUcsS0FBSyxDQUFDLE1BQU4sS0FBa0IsQ0FBckI7YUFDRSxLQUFLLENBQUMsT0FBTixDQUFjLFVBQWQsRUFERjs7RUFKWSxDQVRkO0VBaUJBLFVBQUEsRUFBWSxTQUFBO0lBRVYsQ0FBQyxDQUFDLEdBQUYsQ0FBTSx3Q0FBTjtXQUNBLENBQUMsQ0FBQyxHQUFGLENBQU0sdUNBQU47RUFIVSxDQWpCWiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJfID1cblxuICBpOiAtPlxuICAgIEBjb25zb2xlID0gc2V0SW50ZXJ2YWwoQGRldGVjdC5iaW5kKEApLCAyMDApXG5cbiAgcDpcbiAgICBvZmZpbmc6IGZhbHNlXG4gICAgb2ZmdGltZTogMFxuXG4gIHR1cm46IChlbCwgcmVtb3ZlPWZhbHNlLCBhZGQ9ZmFsc2UpIC0+XG5cbiAgICBpZiBlbCBub3QgaW5zdGFuY2VvZiBqUXVlcnlcbiAgICAgIGVsID0gJChlbClcblxuICAgIGlmIHJlbW92ZSBpc250IGZhbHNlXG4gICAgICBlbC5yZW1vdmVDbGFzcyhyZW1vdmUpXG5cbiAgICBpZiBhZGQgaXNudCBmYWxzZVxuICAgICAgZWwuYWRkQ2xhc3MoYWRkKVxuXG4gICAgcmV0dXJuIHRydWVcblxuICBvZmY6IChlbCwgcD17fSkgLT5cblxuICAgIGlmIHAub2ZmaW5nIGFuZCBwLm9mZnRpbWUgPiAwXG5cbiAgICAgIEB0dXJuIGVsLCBmYWxzZSwgJ29mZmluZydcbiAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgQHR1cm4gZWwsICdvZmZpbmcnLCBmYWxzZVxuICAgICAgICBAdHVybiBlbCwgJ29uJywgJ29mZidcbiAgICAgICwgcC5vZmZ0aW1lKjEwMDAgKyAxMDBcblxuICAgIGVsc2VcbiAgICAgIEB0dXJuIGVsLCAnb24nLCAnb2ZmJ1xuXG4gICAgcmV0dXJuXG5cbiAgb246IChlbCwgcCkgLT5cbiAgICBAdHVybiBlbCwgJ29mZicsICdvbidcblxuICBzd2FwOiAoZWwsIHApIC0+XG5cbiAgICBpZiBlbCBub3QgaW5zdGFuY2VvZiBqUXVlcnlcbiAgICAgIGVsID0gJChlbClcblxuICAgIGlmIGVsLmhhc0NsYXNzICdvZmYnXG4gICAgICBAb24gZWwsIHBcbiAgICBlbHNlXG4gICAgICBAb2ZmIGVsLCBwXG5cbiAgICByZXR1cm5cblxuICBlbmNvZGU6IChzdHIpIC0+XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpXG4gICAgICAucmVwbGFjZSgvIS9nLCAnJTIxJylcbiAgICAgIC5yZXBsYWNlKC8nL2csICclMjcnKVxuICAgICAgLnJlcGxhY2UoL1xcKC9nLCAnJTI4JylcbiAgICAgIC5yZXBsYWNlKC9cXCkvZywgJyUyOScpXG4gICAgICAucmVwbGFjZSgvXFwqL2csICclMkEnKVxuICAgICAgLnJlcGxhY2UoLyUyMC9nLCAnKycpXG5cbiAgdDogKGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCB2YWx1ZSkgLT5cbiAgICBfZ2FxLnB1c2ggWydfdHJhY2tFdmVudCcsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCB2YWx1ZV1cblxuICByYW5kOiAobWluLCBtYXgpIC0+XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCkgKyBtaW5cblxuICBoZXgycmdiOiAoaGV4KSAtPlxuICAgIHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpXG4gICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXG4gICAgZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXG4gICAgYjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNilcbiBcbiAgb2JqYzogKG9iaikgLT5cbiAgICAoayBmb3Igb3duIGsgb2Ygb2JqKS5sZW5ndGhcblxuICBsb2FkOiAoc2NyaXB0LCBpbml0aWF0ZSwgY29tcGxldGUpIC0+XG5cbiAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgJ3NjcmlwdCdcbiAgICBlbC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCdcbiAgICBlbC5zcmMgPSBzY3JpcHRcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyICdsb2FkJyAsIChlKSAtPlxuICAgICAgY29tcGxldGUoKSBpZiB0eXBlb2YgY29tcGxldGUgaXMgJ2Z1bmN0aW9uJ1xuICAgICAgd2luZG93W2luaXRpYXRlXS5pKCkgaWYgaW5pdGlhdGUgaXNudCB1bmRlZmluZWQgYW5kIGluaXRpYXRlIGlzbnQgZmFsc2VcbiAgICAsIGZhbHNlXG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKVxuXG4gIGxsYzogLT5cbiAgICBhc2NpaSA9IFwiXCJcIlxuXG4gICAgICAlY21tbS8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uL21tbVxuICAgICAgbW1vLi4uLi4uLi4uLi4uLi4uLi06Oi8vOjotLi4uLi4uLi06Ojo6Ojo6Ojo6Ojo6LS4uLi4uLi4uLTo6Ly8vOi0ub21tXG4gICAgICBtZC0uLi4uLi4uLi4uLi4uOit5aGRkZGRkZGh5Ky0uLi4uL2RkZGRkZGRkZGRkZGQrLi4uLi4uL3NoZGRkZGRkZHlvZG1cbiAgICAgIG1vLi4uLi4uLi4uLi4uLi1obW1taHl5eXlkbW1taDouLi4vbW1tbWhoaGhoaGhoaCsuLi4uOnlkbW1kaHl5eWhkZG9vbVxuICAgICAgbS0uLi4uLi4uLi4uLi4uLi1zczotLi4uLi15bW1teS4uLi9tbW1tLS0tLS0tLS0tLi4uLjpkbW1tczotLi4uLTovLi1tXG4gICAgICBkLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLnltbW15Li4uL21tbW0tLytvb28rOi0uLi4ueW1tbXktOitvb28rLy0uLmRcbiAgICAgIGguLi4uLi4uLi4uLi4uLi4uLi4uLi4uLjpzbW1tZDouLi4vbW1tbWhtbW1tbW1kaCsuLi5kbW1tc2hkbW1tbW1taHMtaFxuICAgICAgaC4uLi4uLi4uLi4uLi4uLi4uLi4uLjpzZG1tZHk6Li4uLjpoaGRobysvLyt5bW1tbSsuLmRtbW1keW8vLytzZG1tbWhoXG4gICAgICBkLi4uLi4uLi4uLi4uLi4uLi4uLSt5ZG1tZHkvLi4uLi4uLi0tOi4uLi4uLi5zbW1taC4ueW1tbXMuLi4uLi46bW1tbW1cbiAgICAgIG0tLi4uLi4uLi4uLi4uLi4tOnNobW1tZHMvLS0tLS0uLi4uOnMvLS0uLi4tOmhtbW1zLi46ZG1tZC8tLi4uLW9tbW1tbVxuICAgICAgbW8uLi4uLi4uLi4uLi4uLmhtbW1tbW1oaGhoaGhoaC4uLitkbW1kaHl5eWhkbW1teS0uLi4vaG1tbWh5eXlobW1tZGhtXG4gICAgICBtZC0uLi4uLi4uLi4uLi4uZGRkZGRkZGRkZGRkZGRkLi4uLStzaGRkZGRkZGRoeS8tLi4uLi4tb3lkZGRkZGRkaG86ZG1cbiAgICAgIG1tby4uLi4uLi4uLi4uLi46Ojo6Ojo6Ojo6Ojo6OjouLi4uLi4uLTovLy86Oi0uLi4uLi4uLi4uLi06Ly8vOi0uLm9tbVxuICAgICAgbW1tLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4vbW1tXG5cbiAgICAgIDo6IHN5bnRhY3RpYyBzdWdhciBieSAyNTZcbiAgICAgIDo6IGh0dHA6Ly8yNTYuaW8vXG4gICAgICA6OiAje2NvbmZpZy5tZXRhLnJlcG99XG4gICAgXCJcIlwiXG4gICAgY29uc29sZS5sb2cgYXNjaWksIFwiY29sb3I6IGdyZXk7IGZvbnQtZmFtaWx5OiBNZW5sbywgbW9ub3NwYWNlO1wiXG5cbiAgZGV0ZWN0OiAtPlxuICAgIGlmICgoKHdpbmRvdy5vdXRlckhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCkgPiAxMDApIHx8ICgod2luZG93Lm91dGVyV2lkdGggLSB3aW5kb3cuaW5uZXJXaWR0aCkgPiAxMDApKVxuICAgICAgQGxsYygpXG4gICAgICBjbGVhckludGVydmFsIEBjb25zb2xlXG5cbl8uaSgpXG4iLCJjb25maWcgPSB7XCJjb2xvclwiOntcImJsdWUxXCI6XCIjMDBBRkFBXCIsXCJvcmFuZ2UxXCI6XCIjRjI5OTM0XCIsXCJvcmFuZ2UyXCI6XCIjOUU1RDA3XCIsXCJwZWFjaDFcIjpcIiNGOEY1RjJcIixcIndoaXRlMVwiOlwiI2ZmZmZmZlwiLFwiYmxhY2sxXCI6XCIjMDAwMDAwXCIsXCJncmV5MVwiOlwiIzc3Nzc3N1wifSxcImZvbnRcIjp7XCJoMVwiOntcImZvbnQtZmFtaWx5XCI6XCJhcXVpbG9uZSByZWd1bGFyXCIsXCJmb250LXNpemVcIjpcIjQ4cHhcIn0sXCJoMlwiOntcImZvbnQtZmFtaWx5XCI6XCJzYWNrZXJzIGdvdGhpY1wiLFwiZm9udC1zaXplXCI6XCIyNnB4XCIsXCJsZXR0ZXItc3BhY2luZ1wiOlwiNHB4XCJ9LFwiaDNcIjp7XCJmb250LWZhbWlseVwiOlwic2Fja2VycyBnb3RoaWNcIixcImZvbnQtc2l6ZVwiOlwiMjBweFwiLFwibGV0dGVyLXNwYWNpbmdcIjpcIjJweFwiLFwibGluZS1oZWlnaHRcIjpcIjMycHhcIn0sXCJoNFwiOntcImZvbnQtZmFtaWx5XCI6XCJhcXVpbG9uZSByZWd1bGFyXCIsXCJmb250LXNpemVcIjpcIjMycHhcIn0sXCJjMVwiOntcImZvbnQtZmFtaWx5XCI6XCJhdmVydGEgbGlnaHRcIixcImZvbnQtc2l6ZVwiOlwiMjBweFwifSxcImMxc1wiOntcImZvbnQtZmFtaWx5XCI6XCJhdmVydGEgbGlnaHRcIixcImZvbnQtc2l6ZVwiOlwiMTRweFwifSxcImMyXCI6e1wiZm9udC1mYW1pbHlcIjpcImF2ZXJ0YSBib2xkXCIsXCJmb250LXNpemVcIjpcIjI4cHhcIn0sXCJjM1wiOntcImZvbnQtZmFtaWx5XCI6XCJhdmVydGEgYm9sZFwiLFwiZm9udC1zaXplXCI6XCIxNHB4XCJ9fSxcIm1ldGFcIjp7XCJ1cmxcIjpcImh0dHA6Ly9mdWxsc3VuLmNvbS9cIixcInRpdGxlXCI6XCJmdWxsIHN1blwiLFwiZGVzY3JpcHRpb25cIjpcImNhbGlmb3JuaWEgY29uc2Npb3VzIGNhbm5hYmlzXCIsXCJrZXl3b3Jkc1wiOlwiZnVsbCBzdW4sIGNhbm5hYmlzLCBjYWxpZm9ybmlhXCIsXCJ0cmFja2luZ19pZFwiOjMxMzM3LFwic2hhcmVcIjpcImltYWdlcy9sb2dvMS5wbmdcIixcInJlcG9cIjpcImh0dHBzOi8vZ2l0aHViLmNvbS9hY2lkamF6ei9mdWxsc3VuXCIsXCJtYXBfYXBpX2tleVwiOlwiQUl6YVN5QUlxODRwamk0b3Z1bUFOWFhvbE1xa0d3UVg4a00xbUtjXCJ9LFwicHJvZHVjdHNcIjpbe1wibmFtZVwiOlwidmFwZSBwZW4gc2V0XCIsXCJ0aXRsZVwiOlwiNTEwIFRocmVhZGVkIEJhdHRlcnksIENoYXJnZXIsIGFuZCBOYXR1cmFsIFJpc2UgQ2FydHJpZGdlLlwiLFwiZGVzY3JpcHRpb25cIjpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZGlhbSBub251bW15IG5pYmggZXVpc21vZCB0aW5jaWR1bnQgdXQgbGFvcmVldCBkb2xvcmUgbWFnbmEgYWxpcXVhbSBlcmF0IHZvbHV0cGF0LiBVdCB3aXNpIGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpIHRhdGlvbiB1bGxhbWNvcnBlciBzdXNjaXBpdCBsb2JvcnRpcyBuaXNsIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuXCIsXCJpbWFnZVwiOlwicGVuX3NldC5qcGdcIixcImRldGFpbFwiOlt7XCJsZWZ0XCI6XCJUSENcIixcInJpZ2h0XCI6XCIyMyVcIn0se1wibGVmdFwiOlwiU0FUSVZBXCIsXCJyaWdodFwiOlwiSHVtYm9sZHQgQ291bnR5LCBDQVwifSx7XCJsZWZ0XCI6XCJGRUVMUyBMSUtFXCIsXCJyaWdodFwiOlwiQlJJR0hUICYgQlJFRVpZXCJ9XX0se1wibmFtZVwiOlwicmlzZVwiLFwidGl0bGVcIjpcIlNvbHZlbnQtRnJlZSBTaW5nbGUgT3JpZ2luIENhcnRyaWRnZSBSZWZpbGxcIixcImRlc2NyaXB0aW9uXCI6XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRpYW0gbm9udW1teSBuaWJoIGV1aXNtb2QgdGluY2lkdW50IHV0IGxhb3JlZXQgZG9sb3JlIG1hZ25hIGFsaXF1YW0gZXJhdCB2b2x1dHBhdC4gVXQgd2lzaSBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaSB0YXRpb24gdWxsYW1jb3JwZXIgc3VzY2lwaXQgbG9ib3J0aXMgbmlzbCB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LlwiLFwiaW1hZ2VcIjpcInJpc2UuanBnXCIsXCJkZXRhaWxcIjpbe1wibGVmdFwiOlwiVEhDXCIsXCJyaWdodFwiOlwiMjMlXCJ9LHtcImxlZnRcIjpcIlNBVElWQVwiLFwicmlnaHRcIjpcIkh1bWJvbGR0IENvdW50eSwgQ0FcIn0se1wibGVmdFwiOlwiRkVFTFMgTElLRVwiLFwicmlnaHRcIjpcIkJSSUdIVCAmIEJSRUVaWVwifV19LHtcIm5hbWVcIjpcInNoaW5lXCIsXCJ0aXRsZVwiOlwiU29sdmVudC1GcmVlIENsZWFyIENvbmNlbnRyYXRlIEhpZ2ggRGVmaW5pdGlvbiBPRyBLdXNoLlwiLFwiZGVzY3JpcHRpb25cIjpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZGlhbSBub251bW15IG5pYmggZXVpc21vZCB0aW5jaWR1bnQgdXQgbGFvcmVldCBkb2xvcmUgbWFnbmEgYWxpcXVhbSBlcmF0IHZvbHV0cGF0LiBVdCB3aXNpIGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpIHRhdGlvbiB1bGxhbWNvcnBlciBzdXNjaXBpdCBsb2JvcnRpcyBuaXNsIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuXCIsXCJpbWFnZVwiOlwic2hpbmUuanBnXCIsXCJkZXRhaWxcIjpbe1wibGVmdFwiOlwiVEhDXCIsXCJyaWdodFwiOlwiMjMlXCJ9LHtcImxlZnRcIjpcIlNBVElWQVwiLFwicmlnaHRcIjpcIkh1bWJvbGR0IENvdW50eSwgQ0FcIn0se1wibGVmdFwiOlwiRkVFTFMgTElLRVwiLFwicmlnaHRcIjpcIk1FTExPVyAmIFdBUk1cIn1dfV0sXCJ2ZW5kb3JzXCI6W3tcIm5hbWVcIjpcIlRoZSBHcmVlbiBDcm9zc1wiLFwicGxhY2VJZFwiOlwiQ2hJSnA3dXo3NGwtajRBUkgtbmRKam0wdHprXCJ9LHtcIm5hbWVcIjpcIkhhcmJvcnNpZGUgSGVhbHRoIENlbnRlclwiLFwicGxhY2VJZFwiOlwiQ2hJSms2dllydUNHajRBUkdnc0duUWFXZ3p3XCJ9LHtcIm5hbWVcIjpcInNwYXJjXCIsXCJwbGFjZUlkXCI6XCJDaElKV1VaN3dweUFoWUFSS1FZX0lKSEVfOTRcIn1dfTsiLCJcbkRlbGF5ID1cbiAgaGVpZ2h0OiBmYWxzZVxuICB3aW46IGZhbHNlXG4gIGxvZ286IGZhbHNlXG4gIGhlYWRlcjogZmFsc2VcbiAgcGVhY2g6IGZhbHNlXG4gIGZpbGxlZDogZmFsc2VcblxuICBpOiAtPlxuXG4gICAgQHdpbiA9ICQgd2luZG93XG4gICAgQGhlaWdodCA9IEB3aW4uaGVpZ2h0KClcbiAgICBAbG9nbyA9ICQgJy5zZWN0aW9uLnNlY3Rpb25fdG9wID4gLm1pZGRsZSdcbiAgICBAaGVhZGVyID0gJCAnaGVhZGVyJ1xuICAgIEBwZWFjaCA9IF8uaGV4MnJnYiBjb25maWcuY29sb3IucGVhY2gxXG4gICAgJCh3aW5kb3cpLnNjcm9sbCBAY2hlY2tTY3JvbGxcblxuICBjaGVja1Njcm9sbDogLT5cblxuICAgIHBlcmMgPSAoRGVsYXkud2luLnNjcm9sbFRvcCgpICogMTAwIC8gRGVsYXkuaGVpZ2h0KS50b0ZpeGVkIDJcblxuICAgIGlmIHBlcmMgPiAxMDBcbiAgICAgIGlmIERlbGF5LmZpbGxlZCBpcyBmYWxzZVxuICAgICAgICAkKCdoZWFkZXInKS5hZGRDbGFzcyAnZmlsbGVkJ1xuICAgICAgICBEZWxheS5maWxsZWQgPSB0cnVlXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGVsc2VcbiAgICAgIGlmIERlbGF5LmZpbGxlZCBpcyB0cnVlXG4gICAgICAgICQoJ2hlYWRlcicpLnJlbW92ZUNsYXNzICdmaWxsZWQnXG4gICAgICAgIERlbGF5LmZpbGxlZCA9IGZhbHNlXG5cbiAgICBvcGFjaXR5ID0gKHBlcmMvMTAwKS50b0ZpeGVkKDEpIC8gMlxuXG4gICAgaWYgSW5kZXgub2Zmc2V0IGlzbnQgMFxuICAgICAgRGVsYXkubG9nby5jc3MoJ3RyYW5zZm9ybScsIFwidHJhbnNsYXRlKDBweCwgI3twZXJjKjd9cHgpXCIpXG4gICAgICBEZWxheS5oZWFkZXIuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgXCJyZ2JhKCN7RGVsYXkucGVhY2gucn0sI3tEZWxheS5wZWFjaC5nfSwje0RlbGF5LnBlYWNoLmJ9LCN7b3BhY2l0eX0pXCIpXG5cbiIsIkluZGV4ID1cbiAgb2Zmc2V0OiAtODZcblxuICBpOiAtPlxuXG4gICAgRGVsYXkuaSgpXG4gICAgUHJvZHVjdC5pKClcblxuICAgIHRsID0gbmV3IFRpbWVsaW5lTWF4IHJlcGVhdDogMFxuXG4gICAgdGwudG8gJyNsb2dvUmF5c09mZicsIDIuMCwge21vcnBoU1ZHOiAnI2xvZ29SYXlzT24nLCBlYXNlOkV4cG8uZWFzZUluT3V0fVxuXG4gICAgaWYgJCh3aW5kb3cpLndpZHRoKCkgPCAxMDAwXG4gICAgICBAb2Zmc2V0ID0gMFxuXG4gICAgQGhhbmRsZXJzKClcblxuICBoYW5kbGVyczogLT5cbiAgICAkKCdoZWFkZXIgPiAuYnVyZ2VyJykuY2xpY2sgQGJ1cmdlckhhbmRsZXJcbiAgICAkKCdoZWFkZXIgPiAuaW5uZXIgPiAubWVudSA+IC5pdGVtcyA+IC5pbm5lciA+IC5pdGVtJykuY2xpY2sgQG1lbnVIYW5kbGVyXG4gICAgJCgnaGVhZGVyID4gLmlubmVyID4gLmxvZ28nKS5jbGljayBAbWVudUhhbmRsZXJcblxuICBidXJnZXJIYW5kbGVyOiAtPlxuICAgIF8uc3dhcCAnaGVhZGVyID4gLmJ1cmdlcidcbiAgICBfLnN3YXAgJ2hlYWRlciA+IC5pbm5lciA+IC5tZW51ID4gLml0ZW1zJ1xuXG4gIG1lbnVIYW5kbGVyOiAtPlxuICAgIF8ub24gJ2hlYWRlciA+IC5idXJnZXInXG4gICAgXy5vZmYgJ2hlYWRlciA+IC5pbm5lciA+IC5tZW51ID4gLml0ZW1zJ1xuICAgIEluZGV4LnNlY3Rpb24gJCh0aGlzKS5kYXRhICdpdGVtJ1xuXG4gIHNlY3Rpb246IChzZWN0aW9uKSAtPlxuICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICQoJ2h0bWwsIGJvZHknKS5zY3JvbGxUbyBcIiMje3NlY3Rpb259XCIsXG4gICAgICAgIGR1cmF0aW9uOiA1MDBcbiAgICAgICAgb2Zmc2V0OiBJbmRleC5vZmZzZXRcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSBzZWN0aW9uXG4gICAgLCAxMDBcblxuXG4iLCJNYXAgPVxuICBtYXA6IGZhbHNlXG4gIHBsYWNlczoge31cblxuICBpOiAtPlxuXG5cbiAgICBAbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksXG4gICAgICBjZW50ZXI6IGxhdDogMzcuNzc4NDA3LCBsbmc6IC0xMjIuMzk3MTI4XG4gICAgICB6b29tOiAxMVxuICAgICAgc3R5bGVzOiBAc3R5bGVzXG4gICAgICBvcHRpb25zOiBAb3B0aW9uc1xuXG4gICAgc2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuUGxhY2VzU2VydmljZShAbWFwKVxuXG4gICAgZm9yIHZlbmRvciBpbiBjb25maWcudmVuZG9yc1xuICAgICAgc2VydmljZS5nZXREZXRhaWxzXG4gICAgICAgIHBsYWNlSWQ6IHZlbmRvci5wbGFjZUlkXG4gICAgICAsIChyZXN1bHQsIHN0YXR1cykgLT5cbiAgICAgICAgTWFwLnBsYWNlc1tyZXN1bHQucGxhY2VfaWRdID0gcmVzdWx0XG4gICAgICAgIE1hcC5tYXJrZXJzKCkgaWYgXy5vYmpjKGNvbmZpZy52ZW5kb3JzKSBpcyBfLm9iamMoTWFwLnBsYWNlcylcblxuXG4gICAgQGhhbmRsZXJzKClcblxuICBoYW5kbGVyczogLT5cbiAgICQoJy5zZWN0aW9uX2xvY2F0aW9ucyA+IC5wbGFjZSA+IC5jbG9zZScpLmNsaWNrIEBwbGFjZUNsb3NlSGFuZGxlclxuICBtYXJrZXJzOiAtPlxuXG4gICAgbWFya2VycyA9IFtdXG5cbiAgICBmb3IgaWQsIHBsYWNlIG9mIEBwbGFjZXNcblxuICAgICAgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlclxuICAgICAgICBtYXA6IE1hcC5tYXBcbiAgICAgICAgcG9zaXRpb246IHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uXG4gICAgICAgIGljb246XG4gICAgICAgICAgdXJsOiAnL2ltYWdlcy9tYXAvbWFya2VyLnBuZycsXG4gICAgICAgICAgc2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoNjAsIDYwKVxuICAgICAgICAgIG9yaWdpbjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDAsIDApXG4gICAgICAgIHBsYWNlOlxuICAgICAgICAgIHBsYWNlSWQ6IHBsYWNlLnBsYWNlX2lkXG4gICAgICAgICAgbG9jYXRpb246IHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uXG4gICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lciBtYXJrZXIsICdjbGljaycsIE1hcC5tYXJrZXJIYW5kbGVyXG4gICAgICBtYXJrZXJzLnB1c2ggbWFya2VyXG5cbiAgICBtYXJrZXJDbHVzdGVyID0gbmV3IE1hcmtlckNsdXN0ZXJlciBNYXAubWFwLCBtYXJrZXJzLFxuICAgICAgaW1hZ2VQYXRoOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvZXhhbXBsZXMvbWFya2VyY2x1c3RlcmVyL20nXG5cbiAgbWFya2VySGFuZGxlcjogLT5cblxuICAgcGxhY2UgPSBNYXAucGxhY2VzW3RoaXMucGxhY2UucGxhY2VJZF1cblxuXG4gICBpZiBwbGFjZS5waG90b3NcbiAgICAkKCcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UgPiAuaW5uZXIgPiAuaW1hZ2UnKS5hdHRyICdzcmMnLHBsYWNlLnBob3Rvc1swXS5nZXRVcmwgbWF4V2lkdGg6IDI2MCwgbWF4SGVpZ2h0OiAyMDBcbiAgICBfLm9uICcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UgPiAuaW5uZXIgPiAuaW1hZ2UnXG4gICBlbHNlXG4gICAgXy5vZmYgJy5zZWN0aW9uX2xvY2F0aW9ucyA+IC5wbGFjZSA+IC5pbm5lciA+IC5pbWFnZSdcblxuICAgJCgnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlID4gLmlubmVyID4gLm5hbWUnKS50ZXh0IHBsYWNlLm5hbWVcbiAgICQoJy5zZWN0aW9uX2xvY2F0aW9ucyA+IC5wbGFjZSA+IC5pbm5lciA+IC5uYW1lJykuYXR0ciAnaHJlZicsIHBsYWNlLnVybFxuICAgJCgnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlID4gLmlubmVyID4gLmFkZHJlc3MnKS5odG1sIHBsYWNlLmZvcm1hdHRlZF9hZGRyZXNzXG4gICAkKCcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UgPiAuaW5uZXIgPiAucGhvbmUnKS5odG1sIHBsYWNlLmZvcm1hdHRlZF9waG9uZV9udW1iZXJcblxuICAgXy5vbiAnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlJ1xuXG4gICBNYXAubWFwLnNldFpvb20oMTYpXG4gICBNYXAubWFwLnNldENlbnRlcih0aGlzLmdldFBvc2l0aW9uKCkpXG5cbiAgIGNvbnNvbGUubG9nIHBsYWNlXG5cblxuICBwbGFjZUNsb3NlSGFuZGxlcjogLT5cbiAgICBfLm9mZiAnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlJ1xuICAgIE1hcC5tYXAuc2V0Wm9vbSgxMSlcbiAgICBcbiAgb3B0aW9uczpcbiAgICBzY3JvbGx3aGVlbDogZmFsc2VcbiAgICBtYXBUeXBlQ29udHJvbDogZmFsc2VcbiAgICBmdWxsc2NyZWVuQ29udHJvbDogZmFsc2VcblxuICBzdHlsZXM6XG4gICAgW1xuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAnYWRtaW5pc3RyYXRpdmUnXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdsYWJlbHMudGV4dC5maWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAnY29sb3InOiAnIzllNWQwNycgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdhZG1pbmlzdHJhdGl2ZS5jb3VudHJ5J1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnbGFiZWxzLnRleHQuZmlsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbIHsgJ2NvbG9yJzogJyNmMjk5MzQnIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAnYWRtaW5pc3RyYXRpdmUubG9jYWxpdHknXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdsYWJlbHMudGV4dC5maWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAnY29sb3InOiAnIzllNWQwNycgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdsYW5kc2NhcGUnXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdhbGwnXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICdjb2xvcic6ICcjZjhmNWYyJyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3BvaSdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2FsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbIHsgJ3Zpc2liaWxpdHknOiAnb2ZmJyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3JvYWQnXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdhbGwnXG4gICAgICAgICdzdHlsZXJzJzogW1xuICAgICAgICAgIHsgJ3NhdHVyYXRpb24nOiAtMTAwIH1cbiAgICAgICAgICB7ICdsaWdodG5lc3MnOiA0NSB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3JvYWQnXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdnZW9tZXRyeS5maWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAnY29sb3InOiAnI2YyOTkzNCcgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdyb2FkLmhpZ2h3YXknXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdhbGwnXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICd2aXNpYmlsaXR5JzogJ3NpbXBsaWZpZWQnIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAncm9hZC5hcnRlcmlhbCdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2xhYmVscy5pY29uJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAndmlzaWJpbGl0eSc6ICdvZmYnIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAndHJhbnNpdCdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2FsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbIHsgJ3Zpc2liaWxpdHknOiAnb2ZmJyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3dhdGVyJ1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnYWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFtcbiAgICAgICAgICB7ICdjb2xvcic6ICcjMDBhZmFhJyB9XG4gICAgICAgICAgeyAndmlzaWJpbGl0eSc6ICdvbicgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuXG4iLCJQcm9kdWN0ID1cblxuICBpOiAtPlxuXG4gICAgQGhhbmRsZXJzKClcblxuICBoYW5kbGVyczogLT5cbiAgICAkKCcuc2VjdGlvbl9wcm9kdWN0cyA+IC5wcm9kdWN0bGlzdCA+IC5wcm9kdWN0JykuY2xpY2sgQHByb2R1Y3RDbGlja1xuICAgICQoJy5zZWN0aW9uX3Byb2R1Y3RzID4gLmRldGFpbHMgPiAuZGV0YWlsID4gLmNsb3NlJykuY2xpY2sgQGNsb3NlQ2xpY2tcblxuXG4gIHByb2R1Y3RDbGljazogLT5cbiAgICBwcm9kdWN0ID0gJCh0aGlzKS5kYXRhICdwcm9kdWN0J1xuICAgIF8ub24gXCJbaWQ9J2RldGFpbCAje3Byb2R1Y3R9J11cIlxuICAgIF8ub24gXCJbaWQ9J2ltYWdlICN7cHJvZHVjdH0nXVwiXG4gICAgaWYgSW5kZXgub2Zmc2V0IGlzbnQgMFxuICAgICAgSW5kZXguc2VjdGlvbiAncHJvZHVjdHMnXG5cblxuICBjbG9zZUNsaWNrOiAtPlxuXG4gICAgXy5vZmYgJy5zZWN0aW9uX3Byb2R1Y3RzID4gLmRldGFpbHMgPiAuZGV0YWlsJ1xuICAgIF8ub2ZmICcuc2VjdGlvbl9wcm9kdWN0cyA+IC5kZXRhaWxzID4gLmltYWdlJ1xuICAgIFxuIl19
