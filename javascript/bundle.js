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
  state: function(el) {
    if (!(el instanceof jQuery)) {
      el = $(el);
    }
    if (el.hasClass('off')) {
      return false;
    }
    if (el.hasClass('on')) {
      return true;
    }
    return null;
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
    "khaki1": "#CAAF90",
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
      "font-size": "16px",
      "letter-spacing": "2px",
      "line-height": "22px"
    },
    "h4": {
      "font-family": "aquilone regular",
      "font-size": "32px"
    },
    "c1": {
      "font-family": "averta light",
      "font-size": "18px"
    },
    "c1s": {
      "font-family": "averta light",
      "font-size": "14px"
    },
    "c1sb": {
      "font-family": "averta bold",
      "font-size": "14px"
    },
    "c2": {
      "font-family": "averta bold",
      "font-size": "28px"
    },
    "c3": {
      "font-family": "averta bold",
      "font-size": "14px"
    },
    "c4": {
      "font-family": "averta bold",
      "font-size": "24px"
    },
    "c5": {
      "font-family": "averta bold",
      "font-size": "18px"
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
      "title": "Cannabis Oil Vaporization Set",
      "description": ["Designed for on-the-go enjoyment, this premium vape set includes a proprietary strain of our Single Origin cannabis oil. Use throughout the day to incite creativity, calm the mind or deepen relaxation levels.", "The perfect dose of goodness anytime you need it — sunup to sundown.", "Includes battery, 500mg cartridge and charger.  Solvent Free. Product tested and held  to the highest standards for purity and consistent THC potency.`", "Experience: A clear-headed, focused high perfect for daytime and nighttime use."],
      "image": "pen_set.jpg",
      "detail": [
        {
          "left": "THC",
          "right": "23%"
        }, {
          "left": "STRAIN",
          "right": "Hybrid"
        }, {
          "left": "PRODUCT ORIGIN",
          "right": "Humboldt County, CA"
        }
      ]
    }, {
      "name": "rise",
      "title": "Solvent-Free Single Origin Cartridge Refill",
      "description": ["Mornings just got brighter. Our Rise, all-natural, single origin oil cartridges are available in 4 different terpene enriched flavors: Dank Berry, Enlighten”mint”, TropiCali and Natural", "Select a tone to enhance your day:"],
      "image": "rise.jpg",
      "flavors": [
        {
          "name": "Dank Berry",
          "desc": ["Imagine waking up completely refreshed after a long, hard sleep and recalling every vivid detail of your dream.", "Feel: creative, alert, and inspired"]
        }, {
          "name": "Enlighten”mint”",
          "desc": ["To Yoga or not to Yoga? Whether you sweat through it or slept through it, we got you covered.", "Feel: Mindful, focused, and calm"]
        }, {
          "name": "TropiCali",
          "desc": ["You hopped on a plane and just touched down on a tropical oasis. Welcome to island living, operation unwind.", "Feel: Happy, relaxed, and carefree"]
        }, {
          "name": "Pure/Natural",
          "desc": ["Green smoothied for breakfast, ate salad for lunch, said no to HH—      that was the idea anyways.", "Feel: clear headed, energized, refreshed"]
        }
      ],
      "detail": [
        {
          "left": "THC",
          "right": "23%"
        }, {
          "left": "STRAIN",
          "right": "Hybrid"
        }, {
          "left": "PRODUCT ORIGIN",
          "right": "Humboldt County, CA"
        }
      ]
    }, {
      "name": "shine",
      "title": "Clear Cannabis Concentrate",
      "description": ["Shine stronger a little longer with our 100% solvent-free, clear cannabis concentrate. We use a proprietary extraction method to distill a clean, clear oil from our High-Definition, Single Origin OG Kush. An indica-leaning hybrid, our oil is totally pure and totally potent.", "Our concentrates can be used in loadable vape pens, oil rigs, or smeared onto joints for a little extra strength.", "Product tested and held  to the highest standards for purity and consistent THC potency.", "Experience: A balanced body and head high. Mellow & relaxed."],
      "image": "shine.jpg",
      "detail": [
        {
          "left": "THC",
          "right": "23%"
        }, {
          "left": "STRAIN",
          "right": "Hybrid"
        }, {
          "left": "PRODUCT ORIGIN",
          "right": "Humboldt County, CA"
        }
      ]
    }, {
      "name": "flowers",
      "title": "Full bloom",
      "description": ["Naturally grown and harvested under Humboldt county sunshine, our whole flowers are meticulously monitored throughout the cultivation process to ensure top quality.", "We are constantly trend hunting, searching high and low for the newest and most exciting strains. We only provide the best of the best so if we’re onto something good, you’ll be the first to know. That’s a promise.", "All of our flowers are lab-tested tested and held to the highest standards for purity and consistent THC potency.", "Currently Serving 4 Flavors:<br /> High-Definition OG Kush<br /> Sunset Shorbet<br /> Sour Tangy<br /> Black Lime Reserve<br />"],
      "image": "shine.jpg",
      "detail": [
        {
          "left": "THC",
          "right": "23%"
        }, {
          "left": "STRAIN",
          "right": "Hybrid"
        }, {
          "left": "PRODUCT ORIGIN",
          "right": "Humboldt County, CA"
        }
      ]
    }
  ],
  "vendors": [
    {
      "name": "The Green Cross",
      "placeId": "ChIJp7uz74l-j4ARH-ndJjm0tzk",
      "image": "thegreencross.jpg"
    }, {
      "name": "Harborside Health Center",
      "placeId": "ChIJk6vYruCGj4ARGgsGnQaWgzw",
      "image": "harborside.jpg"
    }, {
      "name": "sparc",
      "placeId": "ChIJWUZ7wpyAhYARKQY_IJHE_94",
      "image": "sparc.jpg"
    }
  ],
  "copy": {
    "about": {
      "title": "our process",
      "copys": [
        {
          "t": "Single Origin",
          "c": "All of our products consist of Single Origin, High-Definition OG Kush cannabis. While others call this their “Reserve” we call this our \"All the Time”. We hand select our small group of producers for their consistent commitment to quality and excellence. They work their magic with our proprietary strain allowing us to maintain quality, consistency and quantity. Raised out of the most reputable growing region in the world, our Humboldt County farms stays rooted in consciously growing the best and brightest sungrown cannabis."
        }, {
          "t": "About Extraction",
          "c": "Extracting oil from plants has been widely used across industries for centuries. Finding the right cannabis distillation process has taken years, but we have designed and perfected a model that is just right for us. Our proprietary extract method is done at our state of the art facility in Humboldt County. The result is an ultra refined oil that is lab tested and 100% solvent-free, every single time. Your well-being is our top priority so you can expect is only the best."
        }
      ]
    }
  }
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
      return Delay.header.css('background-color', "rgba(" + Delay.peach.r + "," + Delay.peach.g + "," + Delay.peach.b + "," + opacity + ")");
    }
  }
};

var Fold;

Fold = {
  inViewport: function(el) {
    var rect;
    rect = el.getBoundingClientRect();
    return (rect.top >= 0 || rect.bottom >= 0) && (rect.top <= window.innerHeight || rect.bottom <= window.innerHeight);
  },
  views: function(els, result) {
    var views;
    views = {};
    return els.each(function(i, el) {
      var middle, name, rect;
      rect = el.getBoundingClientRect();
      name = $(el).attr('id');
      if (name === void 0) {
        return true;
      }
      if ((rect.top >= 0 || rect.bottom >= 0) && (rect.top <= window.innerHeight || rect.bottom <= window.innerHeight)) {
        middle = window.innerHeight / 2;
        if (rect.top < middle && rect.bottom > middle) {
          return result(name);
        }
      }
    });
  }
};

var Index;

Index = {
  offset: -86,
  i: function() {
    Delay.i();
    Product.i();
    if ($(window).width() < 1000) {
      this.offset = 0;
    }
    this.handlers();
    return setInterval(Index.menu, 500);
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
  },
  menu: function() {
    return Fold.views($('.section'), function(result) {
      _.off('header > .inner > .menu > .items > .inner > .item');
      _.on(".item_" + result);
      if (result !== 'products' && Product.details === true) {
        return Product.closeClick();
      }
    });
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
  tl: false,
  details: false,
  i: function() {
    this.tl = new TimelineMax({
      repeat: 0
    });
    return this.handlers();
  },
  handlers: function() {
    $('.section_products > .productlist > .product').click(this.productClick);
    $('.section_products > .details > .detail > .close').click(this.closeClick);
    return $('.section_products > .details > .detail > .copy > .inner > .flavors > .flavor > .name').click(this.flavor);
  },
  flavor: function() {
    var parent, state;
    parent = $(this).parent();
    state = _.state(parent);
    console.log(state);
    _.off('.flavors > .flavor');
    if (state) {
      return _.off(parent);
    } else {
      return _.on(parent);
    }
  },
  productClick: function() {
    var div, empty, i, len, product, results, tl;
    product = $(this).data('product');
    _.on("[id='detail " + product + "']");
    _.on("[id='image " + product + "']");
    Product.details = true;
    if (Index.offset !== 0) {
      Index.section('products');
    }
    empty = document.getElementsByClassName('sunEmpty');
    results = [];
    for (i = 0, len = empty.length; i < len; i++) {
      div = empty[i];
      tl = new TimelineMax({
        repeat: 0
      });
      results.push(tl.to(div, 1.0, {
        morphSVG: {
          shape: '#sunFilled',
          shapeIndex: 3
        },
        ease: Expo.easeInOut
      }));
    }
    return results;
  },
  closeClick: function() {
    var div, empty, i, len, tl;
    empty = document.getElementsByClassName('sunEmpty');
    for (i = 0, len = empty.length; i < len; i++) {
      div = empty[i];
      tl = new TimelineMax({
        repeat: 0
      });
      tl.to(div, 0.01, {
        morphSVG: '#sunEmpty',
        ease: Expo.easeInOut
      });
    }
    _.off('.section_products > .details > .detail');
    _.off('.section_products > .details > .image');
    return Product.details = false;
  }
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjI1Ni5jb2ZmZWUiLCJjb25maWcuY29mZmVlIiwiZGVsYXkuY29mZmVlIiwiZm9sZC5jb2ZmZWUiLCJpbmRleC5jb2ZmZWUiLCJtYXAuY29mZmVlIiwicHJvZHVjdC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxDQUFBO0VBQUE7O0FBQUEsQ0FBQSxHQUVFO0VBQUEsQ0FBQSxFQUFHLFNBQUE7V0FDRCxJQUFDLENBQUEsT0FBRCxHQUFXLFdBQUEsQ0FBWSxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxJQUFiLENBQVosRUFBNkIsR0FBN0I7RUFEVixDQUFIO0VBR0EsQ0FBQSxFQUNFO0lBQUEsTUFBQSxFQUFRLEtBQVI7SUFDQSxPQUFBLEVBQVMsQ0FEVDtHQUpGO0VBT0EsSUFBQSxFQUFNLFNBQUMsRUFBRCxFQUFLLE1BQUwsRUFBbUIsR0FBbkI7O01BQUssU0FBTzs7O01BQU8sTUFBSTs7SUFFM0IsSUFBRyxDQUFBLENBQUEsRUFBQSxZQUFrQixNQUFsQixDQUFIO01BQ0UsRUFBQSxHQUFLLENBQUEsQ0FBRSxFQUFGLEVBRFA7O0lBR0EsSUFBRyxNQUFBLEtBQVksS0FBZjtNQUNFLEVBQUUsQ0FBQyxXQUFILENBQWUsTUFBZixFQURGOztJQUdBLElBQUcsR0FBQSxLQUFTLEtBQVo7TUFDRSxFQUFFLENBQUMsUUFBSCxDQUFZLEdBQVosRUFERjs7QUFHQSxXQUFPO0VBWEgsQ0FQTjtFQW9CQSxHQUFBLEVBQUssU0FBQyxFQUFELEVBQUssQ0FBTDs7TUFBSyxJQUFFOztJQUVWLElBQUcsQ0FBQyxDQUFDLE1BQUYsSUFBYSxDQUFDLENBQUMsT0FBRixHQUFZLENBQTVCO01BRUUsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsS0FBVixFQUFpQixRQUFqQjtNQUNBLFVBQUEsQ0FBVyxTQUFBO1FBQ1QsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsUUFBVixFQUFvQixLQUFwQjtlQUNBLElBQUMsQ0FBQSxJ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RSxFQUFBLEdBQVMsSUFBQSxXQUFBLENBQVk7UUFBQSxNQUFBLEVBQVEsQ0FBUjtPQUFaO01BQ1QsRUFBRSxDQUFDLEVBQUgsQ0FBTSxHQUFOLEVBQVcsSUFBWCxFQUFpQjtRQUFDLFFBQUEsRUFBVSxXQUFYO1FBQXdCLElBQUEsRUFBSyxJQUFJLENBQUMsU0FBbEM7T0FBakI7QUFGRjtJQUlBLENBQUMsQ0FBQyxHQUFGLENBQU0sd0NBQU47SUFDQSxDQUFDLENBQUMsR0FBRixDQUFNLHVDQUFOO1dBQ0EsT0FBTyxDQUFDLE9BQVIsR0FBa0I7RUFSUixDQXZDWiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJfID1cblxuICBpOiAtPlxuICAgIEBjb25zb2xlID0gc2V0SW50ZXJ2YWwoQGRldGVjdC5iaW5kKEApLCAyMDApXG5cbiAgcDpcbiAgICBvZmZpbmc6IGZhbHNlXG4gICAgb2ZmdGltZTogMFxuXG4gIHR1cm46IChlbCwgcmVtb3ZlPWZhbHNlLCBhZGQ9ZmFsc2UpIC0+XG5cbiAgICBpZiBlbCBub3QgaW5zdGFuY2VvZiBqUXVlcnlcbiAgICAgIGVsID0gJChlbClcblxuICAgIGlmIHJlbW92ZSBpc250IGZhbHNlXG4gICAgICBlbC5yZW1vdmVDbGFzcyhyZW1vdmUpXG5cbiAgICBpZiBhZGQgaXNudCBmYWxzZVxuICAgICAgZWwuYWRkQ2xhc3MoYWRkKVxuXG4gICAgcmV0dXJuIHRydWVcblxuICBvZmY6IChlbCwgcD17fSkgLT5cblxuICAgIGlmIHAub2ZmaW5nIGFuZCBwLm9mZnRpbWUgPiAwXG5cbiAgICAgIEB0dXJuIGVsLCBmYWxzZSwgJ29mZmluZydcbiAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgQHR1cm4gZWwsICdvZmZpbmcnLCBmYWxzZVxuICAgICAgICBAdHVybiBlbCwgJ29uJywgJ29mZidcbiAgICAgICwgcC5vZmZ0aW1lKjEwMDAgKyAxMDBcblxuICAgIGVsc2VcbiAgICAgIEB0dXJuIGVsLCAnb24nLCAnb2ZmJ1xuXG4gICAgcmV0dXJuXG5cbiAgb246IChlbCwgcCkgLT5cbiAgICBAdHVybiBlbCwgJ29mZicsICdvbidcblxuICBzdGF0ZTogKGVsKSAtPlxuICAgIGlmIGVsIG5vdCBpbnN0YW5jZW9mIGpRdWVyeVxuICAgICAgZWwgPSAkKGVsKVxuXG4gICAgaWYgZWwuaGFzQ2xhc3MgJ29mZidcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIGlmIGVsLmhhc0NsYXNzICdvbidcbiAgICAgIHJldHVybiB0cnVlXG5cbiAgICByZXR1cm4gbnVsbFxuXG4gIHN3YXA6IChlbCwgcCkgLT5cblxuICAgIGlmIGVsIG5vdCBpbnN0YW5jZW9mIGpRdWVyeVxuICAgICAgZWwgPSAkKGVsKVxuXG4gICAgaWYgZWwuaGFzQ2xhc3MgJ29mZidcbiAgICAgIEBvbiBlbCwgcFxuICAgIGVsc2VcbiAgICAgIEBvZmYgZWwsIHBcblxuICAgIHJldHVyblxuXG4gIGVuY29kZTogKHN0cikgLT5cbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cilcbiAgICAgIC5yZXBsYWNlKC8hL2csICclMjEnKVxuICAgICAgLnJlcGxhY2UoLycvZywgJyUyNycpXG4gICAgICAucmVwbGFjZSgvXFwoL2csICclMjgnKVxuICAgICAgLnJlcGxhY2UoL1xcKS9nLCAnJTI5JylcbiAgICAgIC5yZXBsYWNlKC9cXCovZywgJyUyQScpXG4gICAgICAucmVwbGFjZSgvJTIwL2csICcrJylcblxuICB0OiAoY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsIHZhbHVlKSAtPlxuICAgIF9nYXEucHVzaCBbJ190cmFja0V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsIHZhbHVlXVxuXG4gIHJhbmQ6IChtaW4sIG1heCkgLT5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KSArIG1pblxuXG4gIGhleDJyZ2I6IChoZXgpIC0+XG4gICAgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleClcbiAgICByOiBwYXJzZUludChyZXN1bHRbMV0sIDE2KSxcbiAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcbiAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KVxuIFxuICBvYmpjOiAob2JqKSAtPlxuICAgIChrIGZvciBvd24gayBvZiBvYmopLmxlbmd0aFxuXG4gIGxvYWQ6IChzY3JpcHQsIGluaXRpYXRlLCBjb21wbGV0ZSkgLT5cblxuICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAnc2NyaXB0J1xuICAgIGVsLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0J1xuICAgIGVsLnNyYyA9IHNjcmlwdFxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIgJ2xvYWQnICwgKGUpIC0+XG4gICAgICBjb21wbGV0ZSgpIGlmIHR5cGVvZiBjb21wbGV0ZSBpcyAnZnVuY3Rpb24nXG4gICAgICB3aW5kb3dbaW5pdGlhdGVdLmkoKSBpZiBpbml0aWF0ZSBpc250IHVuZGVmaW5lZCBhbmQgaW5pdGlhdGUgaXNudCBmYWxzZVxuICAgICwgZmFsc2VcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpXG5cbiAgbGxjOiAtPlxuICAgIGFzY2lpID0gXCJcIlwiXG5cbiAgICAgICVjbW1tLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4vbW1tXG4gICAgICBtbW8uLi4uLi4uLi4uLi4uLi4uLTo6Ly86Oi0uLi4uLi4uLTo6Ojo6Ojo6Ojo6OjotLi4uLi4uLi4tOjovLy86LS5vbW1cbiAgICAgIG1kLS4uLi4uLi4uLi4uLi46K3loZGRkZGRkaHkrLS4uLi4vZGRkZGRkZGRkZGRkZCsuLi4uLi4vc2hkZGRkZGRkeW9kbVxuICAgICAgbW8uLi4uLi4uLi4uLi4uLWhtbW1oeXl5eWRtbW1oOi4uLi9tbW1taGhoaGhoaGhoKy4uLi46eWRtbWRoeXl5aGRkb29tXG4gICAgICBtLS4uLi4uLi4uLi4uLi4uLXNzOi0uLi4uLXltbW15Li4uL21tbW0tLS0tLS0tLS0uLi4uOmRtbW1zOi0uLi4tOi8uLW1cbiAgICAgIGQuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4ueW1tbXkuLi4vbW1tbS0vK29vbys6LS4uLi55bW1teS06K29vbysvLS4uZFxuICAgICAgaC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uOnNtbW1kOi4uLi9tbW1taG1tbW1tbWRoKy4uLmRtbW1zaGRtbW1tbW1ocy1oXG4gICAgICBoLi4uLi4uLi4uLi4uLi4uLi4uLi4uOnNkbW1keTouLi4uOmhoZGhvKy8vK3ltbW1tKy4uZG1tbWR5by8vK3NkbW1taGhcbiAgICAgIGQuLi4uLi4uLi4uLi4uLi4uLi4tK3lkbW1keS8uLi4uLi4uLS06Li4uLi4uLnNtbW1oLi55bW1tcy4uLi4uLjptbW1tbVxuICAgICAgbS0uLi4uLi4uLi4uLi4uLi06c2htbW1kcy8tLS0tLS4uLi46cy8tLS4uLi06aG1tbXMuLjpkbW1kLy0uLi4tb21tbW1tXG4gICAgICBtby4uLi4uLi4uLi4uLi4uaG1tbW1tbWhoaGhoaGhoLi4uK2RtbWRoeXl5aGRtbW15LS4uLi9obW1taHl5eWhtbW1kaG1cbiAgICAgIG1kLS4uLi4uLi4uLi4uLi5kZGRkZGRkZGRkZGRkZGQuLi4tK3NoZGRkZGRkZGh5Ly0uLi4uLi1veWRkZGRkZGRobzpkbVxuICAgICAgbW1vLi4uLi4uLi4uLi4uLjo6Ojo6Ojo6Ojo6Ojo6Oi4uLi4uLi4tOi8vLzo6LS4uLi4uLi4uLi4uLTovLy86LS4ub21tXG4gICAgICBtbW0vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9tbW1cblxuICAgICAgOjogc3ludGFjdGljIHN1Z2FyIGJ5IDI1NlxuICAgICAgOjogaHR0cDovLzI1Ni5pby9cbiAgICAgIDo6ICN7Y29uZmlnLm1ldGEucmVwb31cbiAgICBcIlwiXCJcbiAgICBjb25zb2xlLmxvZyBhc2NpaSwgXCJjb2xvcjogZ3JleTsgZm9udC1mYW1pbHk6IE1lbmxvLCBtb25vc3BhY2U7XCJcblxuICBkZXRlY3Q6IC0+XG4gICAgaWYgKCgod2luZG93Lm91dGVySGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0KSA+IDEwMCkgfHwgKCh3aW5kb3cub3V0ZXJXaWR0aCAtIHdpbmRvdy5pbm5lcldpZHRoKSA+IDEwMCkpXG4gICAgICBAbGxjKClcbiAgICAgIGNsZWFySW50ZXJ2YWwgQGNvbnNvbGVcblxuXy5pKClcbiIsImNvbmZpZyA9IHtcImNvbG9yXCI6e1wiYmx1ZTFcIjpcIiMwMEFGQUFcIixcIm9yYW5nZTFcIjpcIiNGMjk5MzRcIixcIm9yYW5nZTJcIjpcIiM5RTVEMDdcIixcImtoYWtpMVwiOlwiI0NBQUY5MFwiLFwicGVhY2gxXCI6XCIjRjhGNUYyXCIsXCJ3aGl0ZTFcIjpcIiNmZmZmZmZcIixcImJsYWNrMVwiOlwiIzAwMDAwMFwiLFwiZ3JleTFcIjpcIiM3Nzc3NzdcIn0sXCJmb250XCI6e1wiaDFcIjp7XCJmb250LWZhbWlseVwiOlwiYXF1aWxvbmUgcmVndWxhclwiLFwiZm9udC1zaXplXCI6XCI0OHB4XCJ9LFwiaDJcIjp7XCJmb250LWZhbWlseVwiOlwic2Fja2VycyBnb3RoaWNcIixcImZvbnQtc2l6ZVwiOlwiMjZweFwiLFwibGV0dGVyLXNwYWNpbmdcIjpcIjRweFwifSxcImgzXCI6e1wiZm9udC1mYW1pbHlcIjpcInNhY2tlcnMgZ290aGljXCIsXCJmb250LXNpemVcIjpcIjE2cHhcIixcImxldHRlci1zcGFjaW5nXCI6XCIycHhcIixcImxpbmUtaGVpZ2h0XCI6XCIyMnB4XCJ9LFwiaDRcIjp7XCJmb250LWZhbWlseVwiOlwiYXF1aWxvbmUgcmVndWxhclwiLFwiZm9udC1zaXplXCI6XCIzMnB4XCJ9LFwiYzFcIjp7XCJmb250LWZhbWlseVwiOlwiYXZlcnRhIGxpZ2h0XCIsXCJmb250LXNpemVcIjpcIjE4cHhcIn0sXCJjMXNcIjp7XCJmb250LWZhbWlseVwiOlwiYXZlcnRhIGxpZ2h0XCIsXCJmb250LXNpemVcIjpcIjE0cHhcIn0sXCJjMXNiXCI6e1wiZm9udC1mYW1pbHlcIjpcImF2ZXJ0YSBib2xkXCIsXCJmb250LXNpemVcIjpcIjE0cHhcIn0sXCJjMlwiOntcImZvbnQtZmFtaWx5XCI6XCJhdmVydGEgYm9sZFwiLFwiZm9udC1zaXplXCI6XCIyOHB4XCJ9LFwiYzNcIjp7XCJmb250LWZhbWlseVwiOlwiYXZlcnRhIGJvbGRcIixcImZvbnQtc2l6ZVwiOlwiMTRweFwifSxcImM0XCI6e1wiZm9udC1mYW1pbHlcIjpcImF2ZXJ0YSBib2xkXCIsXCJmb250LXNpemVcIjpcIjI0cHhcIn0sXCJjNVwiOntcImZvbnQtZmFtaWx5XCI6XCJhdmVydGEgYm9sZFwiLFwiZm9udC1zaXplXCI6XCIxOHB4XCJ9fSxcIm1ldGFcIjp7XCJ1cmxcIjpcImh0dHA6Ly9mdWxsc3VuLmNvbS9cIixcInRpdGxlXCI6XCJmdWxsIHN1blwiLFwiZGVzY3JpcHRpb25cIjpcImNhbGlmb3JuaWEgY29uc2Npb3VzIGNhbm5hYmlzXCIsXCJrZXl3b3Jkc1wiOlwiZnVsbCBzdW4sIGNhbm5hYmlzLCBjYWxpZm9ybmlhXCIsXCJ0cmFja2luZ19pZFwiOjMxMzM3LFwic2hhcmVcIjpcImltYWdlcy9sb2dvMS5wbmdcIixcInJlcG9cIjpcImh0dHBzOi8vZ2l0aHViLmNvbS9hY2lkamF6ei9mdWxsc3VuXCIsXCJtYXBfYXBpX2tleVwiOlwiQUl6YVN5QUlxODRwamk0b3Z1bUFOWFhvbE1xa0d3UVg4a00xbUtjXCJ9LFwicHJvZHVjdHNcIjpbe1wibmFtZVwiOlwidmFwZSBwZW4gc2V0XCIsXCJ0aXRsZVwiOlwiQ2FubmFiaXMgT2lsIFZhcG9yaXphdGlvbiBTZXRcIixcImRlc2NyaXB0aW9uXCI6W1wiRGVzaWduZWQgZm9yIG9uLXRoZS1nbyBlbmpveW1lbnQsIHRoaXMgcHJlbWl1bSB2YXBlIHNldCBpbmNsdWRlcyBhIHByb3ByaWV0YXJ5IHN0cmFpbiBvZiBvdXIgU2luZ2xlIE9yaWdpbiBjYW5uYWJpcyBvaWwuIFVzZSB0aHJvdWdob3V0IHRoZSBkYXkgdG8gaW5jaXRlIGNyZWF0aXZpdHksIGNhbG0gdGhlIG1pbmQgb3IgZGVlcGVuIHJlbGF4YXRpb24gbGV2ZWxzLlwiLFwiVGhlIHBlcmZlY3QgZG9zZSBvZiBnb29kbmVzcyBhbnl0aW1lIHlvdSBuZWVkIGl0IOKAlCBzdW51cCB0byBzdW5kb3duLlwiLFwiSW5jbHVkZXMgYmF0dGVyeSwgNTAwbWcgY2FydHJpZGdlIGFuZCBjaGFyZ2VyLiAgU29sdmVudCBGcmVlLiBQcm9kdWN0IHRlc3RlZCBhbmQgaGVsZCAgdG8gdGhlIGhpZ2hlc3Qgc3RhbmRhcmRzIGZvciBwdXJpdHkgYW5kIGNvbnNpc3RlbnQgVEhDIHBvdGVuY3kuYFwiLFwiRXhwZXJpZW5jZTogQSBjbGVhci1oZWFkZWQsIGZvY3VzZWQgaGlnaCBwZXJmZWN0IGZvciBkYXl0aW1lIGFuZCBuaWdodHRpbWUgdXNlLlwiXSxcImltYWdlXCI6XCJwZW5fc2V0LmpwZ1wiLFwiZGV0YWlsXCI6W3tcImxlZnRcIjpcIlRIQ1wiLFwicmlnaHRcIjpcIjIzJVwifSx7XCJsZWZ0XCI6XCJTVFJBSU5cIixcInJpZ2h0XCI6XCJIeWJyaWRcIn0se1wibGVmdFwiOlwiUFJPRFVDVCBPUklHSU5cIixcInJpZ2h0XCI6XCJIdW1ib2xkdCBDb3VudHksIENBXCJ9XX0se1wibmFtZVwiOlwicmlzZVwiLFwidGl0bGVcIjpcIlNvbHZlbnQtRnJlZSBTaW5nbGUgT3JpZ2luIENhcnRyaWRnZSBSZWZpbGxcIixcImRlc2NyaXB0aW9uXCI6W1wiTW9ybmluZ3MganVzdCBnb3QgYnJpZ2h0ZXIuIE91ciBSaXNlLCBhbGwtbmF0dXJhbCwgc2luZ2xlIG9yaWdpbiBvaWwgY2FydHJpZGdlcyBhcmUgYXZhaWxhYmxlIGluIDQgZGlmZmVyZW50IHRlcnBlbmUgZW5yaWNoZWQgZmxhdm9yczogRGFuayBCZXJyeSwgRW5saWdodGVu4oCdbWludOKAnSwgVHJvcGlDYWxpIGFuZCBOYXR1cmFsXCIsXCJTZWxlY3QgYSB0b25lIHRvIGVuaGFuY2UgeW91ciBkYXk6XCJdLFwiaW1hZ2VcIjpcInJpc2UuanBnXCIsXCJmbGF2b3JzXCI6W3tcIm5hbWVcIjpcIkRhbmsgQmVycnlcIixcImRlc2NcIjpbXCJJbWFnaW5lIHdha2luZyB1cCBjb21wbGV0ZWx5IHJlZnJlc2hlZCBhZnRlciBhIGxvbmcsIGhhcmQgc2xlZXAgYW5kIHJlY2FsbGluZyBldmVyeSB2aXZpZCBkZXRhaWwgb2YgeW91ciBkcmVhbS5cIixcIkZlZWw6IGNyZWF0aXZlLCBhbGVydCwgYW5kIGluc3BpcmVkXCJdfSx7XCJuYW1lXCI6XCJFbmxpZ2h0ZW7igJ1taW504oCdXCIsXCJkZXNjXCI6W1wiVG8gWW9nYSBvciBub3QgdG8gWW9nYT8gV2hldGhlciB5b3Ugc3dlYXQgdGhyb3VnaCBpdCBvciBzbGVwdCB0aHJvdWdoIGl0LCB3ZSBnb3QgeW91IGNvdmVyZWQuXCIsXCJGZWVsOiBNaW5kZnVsLCBmb2N1c2VkLCBhbmQgY2FsbVwiXX0se1wibmFtZVwiOlwiVHJvcGlDYWxpXCIsXCJkZXNjXCI6W1wiWW91IGhvcHBlZCBvbiBhIHBsYW5lIGFuZCBqdXN0IHRvdWNoZWQgZG93biBvbiBhIHRyb3BpY2FsIG9hc2lzLiBXZWxjb21lIHRvIGlzbGFuZCBsaXZpbmcsIG9wZXJhdGlvbiB1bndpbmQuXCIsXCJGZWVsOiBIYXBweSwgcmVsYXhlZCwgYW5kIGNhcmVmcmVlXCJdfSx7XCJuYW1lXCI6XCJQdXJlL05hdHVyYWxcIixcImRlc2NcIjpbXCJHcmVlbiBzbW9vdGhpZWQgZm9yIGJyZWFrZmFzdCwgYXRlIHNhbGFkIGZvciBsdW5jaCwgc2FpZCBubyB0byBISOKAlCAgICAgIHRoYXQgd2FzIHRoZSBpZGVhIGFueXdheXMuXCIsXCJGZWVsOiBjbGVhciBoZWFkZWQsIGVuZXJnaXplZCwgcmVmcmVzaGVkXCJdfV0sXCJkZXRhaWxcIjpbe1wibGVmdFwiOlwiVEhDXCIsXCJyaWdodFwiOlwiMjMlXCJ9LHtcImxlZnRcIjpcIlNUUkFJTlwiLFwicmlnaHRcIjpcIkh5YnJpZFwifSx7XCJsZWZ0XCI6XCJQUk9EVUNUIE9SSUdJTlwiLFwicmlnaHRcIjpcIkh1bWJvbGR0IENvdW50eSwgQ0FcIn1dfSx7XCJuYW1lXCI6XCJzaGluZVwiLFwidGl0bGVcIjpcIkNsZWFyIENhbm5hYmlzIENvbmNlbnRyYXRlXCIsXCJkZXNjcmlwdGlvblwiOltcIlNoaW5lIHN0cm9uZ2VyIGEgbGl0dGxlIGxvbmdlciB3aXRoIG91ciAxMDAlIHNvbHZlbnQtZnJlZSwgY2xlYXIgY2FubmFiaXMgY29uY2VudHJhdGUuIFdlIHVzZSBhIHByb3ByaWV0YXJ5IGV4dHJhY3Rpb24gbWV0aG9kIHRvIGRpc3RpbGwgYSBjbGVhbiwgY2xlYXIgb2lsIGZyb20gb3VyIEhpZ2gtRGVmaW5pdGlvbiwgU2luZ2xlIE9yaWdpbiBPRyBLdXNoLiBBbiBpbmRpY2EtbGVhbmluZyBoeWJyaWQsIG91ciBvaWwgaXMgdG90YWxseSBwdXJlIGFuZCB0b3RhbGx5IHBvdGVudC5cIixcIk91ciBjb25jZW50cmF0ZXMgY2FuIGJlIHVzZWQgaW4gbG9hZGFibGUgdmFwZSBwZW5zLCBvaWwgcmlncywgb3Igc21lYXJlZCBvbnRvIGpvaW50cyBmb3IgYSBsaXR0bGUgZXh0cmEgc3RyZW5ndGguXCIsXCJQcm9kdWN0IHRlc3RlZCBhbmQgaGVsZCAgdG8gdGhlIGhpZ2hlc3Qgc3RhbmRhcmRzIGZvciBwdXJpdHkgYW5kIGNvbnNpc3RlbnQgVEhDIHBvdGVuY3kuXCIsXCJFeHBlcmllbmNlOiBBIGJhbGFuY2VkIGJvZHkgYW5kIGhlYWQgaGlnaC4gTWVsbG93ICYgcmVsYXhlZC5cIl0sXCJpbWFnZVwiOlwic2hpbmUuanBnXCIsXCJkZXRhaWxcIjpbe1wibGVmdFwiOlwiVEhDXCIsXCJyaWdodFwiOlwiMjMlXCJ9LHtcImxlZnRcIjpcIlNUUkFJTlwiLFwicmlnaHRcIjpcIkh5YnJpZFwifSx7XCJsZWZ0XCI6XCJQUk9EVUNUIE9SSUdJTlwiLFwicmlnaHRcIjpcIkh1bWJvbGR0IENvdW50eSwgQ0FcIn1dfSx7XCJuYW1lXCI6XCJmbG93ZXJzXCIsXCJ0aXRsZVwiOlwiRnVsbCBibG9vbVwiLFwiZGVzY3JpcHRpb25cIjpbXCJOYXR1cmFsbHkgZ3Jvd24gYW5kIGhhcnZlc3RlZCB1bmRlciBIdW1ib2xkdCBjb3VudHkgc3Vuc2hpbmUsIG91ciB3aG9sZSBmbG93ZXJzIGFyZSBtZXRpY3Vsb3VzbHkgbW9uaXRvcmVkIHRocm91Z2hvdXQgdGhlIGN1bHRpdmF0aW9uIHByb2Nlc3MgdG8gZW5zdXJlIHRvcCBxdWFsaXR5LlwiLFwiV2UgYXJlIGNvbnN0YW50bHkgdHJlbmQgaHVudGluZywgc2VhcmNoaW5nIGhpZ2ggYW5kIGxvdyBmb3IgdGhlIG5ld2VzdCBhbmQgbW9zdCBleGNpdGluZyBzdHJhaW5zLiBXZSBvbmx5IHByb3ZpZGUgdGhlIGJlc3Qgb2YgdGhlIGJlc3Qgc28gaWYgd2XigJlyZSBvbnRvIHNvbWV0aGluZyBnb29kLCB5b3XigJlsbCBiZSB0aGUgZmlyc3QgdG8ga25vdy4gVGhhdOKAmXMgYSBwcm9taXNlLlwiLFwiQWxsIG9mIG91ciBmbG93ZXJzIGFyZSBsYWItdGVzdGVkIHRlc3RlZCBhbmQgaGVsZCB0byB0aGUgaGlnaGVzdCBzdGFuZGFyZHMgZm9yIHB1cml0eSBhbmQgY29uc2lzdGVudCBUSEMgcG90ZW5jeS5cIixcIkN1cnJlbnRseSBTZXJ2aW5nIDQgRmxhdm9yczo8YnIgLz4gSGlnaC1EZWZpbml0aW9uIE9HIEt1c2g8YnIgLz4gU3Vuc2V0IFNob3JiZXQ8YnIgLz4gU291ciBUYW5neTxiciAvPiBCbGFjayBMaW1lIFJlc2VydmU8YnIgLz5cIl0sXCJpbWFnZVwiOlwic2hpbmUuanBnXCIsXCJkZXRhaWxcIjpbe1wibGVmdFwiOlwiVEhDXCIsXCJyaWdodFwiOlwiMjMlXCJ9LHtcImxlZnRcIjpcIlNUUkFJTlwiLFwicmlnaHRcIjpcIkh5YnJpZFwifSx7XCJsZWZ0XCI6XCJQUk9EVUNUIE9SSUdJTlwiLFwicmlnaHRcIjpcIkh1bWJvbGR0IENvdW50eSwgQ0FcIn1dfV0sXCJ2ZW5kb3JzXCI6W3tcIm5hbWVcIjpcIlRoZSBHcmVlbiBDcm9zc1wiLFwicGxhY2VJZFwiOlwiQ2hJSnA3dXo3NGwtajRBUkgtbmRKam0wdHprXCIsXCJpbWFnZVwiOlwidGhlZ3JlZW5jcm9zcy5qcGdcIn0se1wibmFtZVwiOlwiSGFyYm9yc2lkZSBIZWFsdGggQ2VudGVyXCIsXCJwbGFjZUlkXCI6XCJDaElKazZ2WXJ1Q0dqNEFSR2dzR25RYVdnendcIixcImltYWdlXCI6XCJoYXJib3JzaWRlLmpwZ1wifSx7XCJuYW1lXCI6XCJzcGFyY1wiLFwicGxhY2VJZFwiOlwiQ2hJSldVWjd3cHlBaFlBUktRWV9JSkhFXzk0XCIsXCJpbWFnZVwiOlwic3BhcmMuanBnXCJ9XSxcImNvcHlcIjp7XCJhYm91dFwiOntcInRpdGxlXCI6XCJvdXIgcHJvY2Vzc1wiLFwiY29weXNcIjpbe1widFwiOlwiU2luZ2xlIE9yaWdpblwiLFwiY1wiOlwiQWxsIG9mIG91ciBwcm9kdWN0cyBjb25zaXN0IG9mIFNpbmdsZSBPcmlnaW4sIEhpZ2gtRGVmaW5pdGlvbiBPRyBLdXNoIGNhbm5hYmlzLiBXaGlsZSBvdGhlcnMgY2FsbCB0aGlzIHRoZWlyIOKAnFJlc2VydmXigJ0gd2UgY2FsbCB0aGlzIG91ciBcXFwiQWxsIHRoZSBUaW1l4oCdLiBXZSBoYW5kIHNlbGVjdCBvdXIgc21hbGwgZ3JvdXAgb2YgcHJvZHVjZXJzIGZvciB0aGVpciBjb25zaXN0ZW50IGNvbW1pdG1lbnQgdG8gcXVhbGl0eSBhbmQgZXhjZWxsZW5jZS4gVGhleSB3b3JrIHRoZWlyIG1hZ2ljIHdpdGggb3VyIHByb3ByaWV0YXJ5IHN0cmFpbiBhbGxvd2luZyB1cyB0byBtYWludGFpbiBxdWFsaXR5LCBjb25zaXN0ZW5jeSBhbmQgcXVhbnRpdHkuIFJhaXNlZCBvdXQgb2YgdGhlIG1vc3QgcmVwdXRhYmxlIGdyb3dpbmcgcmVnaW9uIGluIHRoZSB3b3JsZCwgb3VyIEh1bWJvbGR0IENvdW50eSBmYXJtcyBzdGF5cyByb290ZWQgaW4gY29uc2Npb3VzbHkgZ3Jvd2luZyB0aGUgYmVzdCBhbmQgYnJpZ2h0ZXN0IHN1bmdyb3duIGNhbm5hYmlzLlwifSx7XCJ0XCI6XCJBYm91dCBFeHRyYWN0aW9uXCIsXCJjXCI6XCJFeHRyYWN0aW5nIG9pbCBmcm9tIHBsYW50cyBoYXMgYmVlbiB3aWRlbHkgdXNlZCBhY3Jvc3MgaW5kdXN0cmllcyBmb3IgY2VudHVyaWVzLiBGaW5kaW5nIHRoZSByaWdodCBjYW5uYWJpcyBkaXN0aWxsYXRpb24gcHJvY2VzcyBoYXMgdGFrZW4geWVhcnMsIGJ1dCB3ZSBoYXZlIGRlc2lnbmVkIGFuZCBwZXJmZWN0ZWQgYSBtb2RlbCB0aGF0IGlzIGp1c3QgcmlnaHQgZm9yIHVzLiBPdXIgcHJvcHJpZXRhcnkgZXh0cmFjdCBtZXRob2QgaXMgZG9uZSBhdCBvdXIgc3RhdGUgb2YgdGhlIGFydCBmYWNpbGl0eSBpbiBIdW1ib2xkdCBDb3VudHkuIFRoZSByZXN1bHQgaXMgYW4gdWx0cmEgcmVmaW5lZCBvaWwgdGhhdCBpcyBsYWIgdGVzdGVkIGFuZCAxMDAlIHNvbHZlbnQtZnJlZSwgZXZlcnkgc2luZ2xlIHRpbWUuIFlvdXIgd2VsbC1iZWluZyBpcyBvdXIgdG9wIHByaW9yaXR5IHNvIHlvdSBjYW4gZXhwZWN0IGlzIG9ubHkgdGhlIGJlc3QuXCJ9XX19fTsiLCJcbkRlbGF5ID1cbiAgaGVpZ2h0OiBmYWxzZVxuICB3aW46IGZhbHNlXG4gIGxvZ286IGZhbHNlXG4gIGhlYWRlcjogZmFsc2VcbiAgcGVhY2g6IGZhbHNlXG4gIGZpbGxlZDogZmFsc2VcblxuICBpOiAtPlxuXG4gICAgQHdpbiA9ICQgd2luZG93XG4gICAgQGhlaWdodCA9IEB3aW4uaGVpZ2h0KClcbiAgICBAbG9nbyA9ICQgJy5zZWN0aW9uLnNlY3Rpb25fdG9wID4gLm1pZGRsZSdcbiAgICBAaGVhZGVyID0gJCAnaGVhZGVyJ1xuICAgIEBwZWFjaCA9IF8uaGV4MnJnYiBjb25maWcuY29sb3IucGVhY2gxXG4gICAgJCh3aW5kb3cpLnNjcm9sbCBAY2hlY2tTY3JvbGxcblxuICBjaGVja1Njcm9sbDogLT5cblxuICAgIHBlcmMgPSAoRGVsYXkud2luLnNjcm9sbFRvcCgpICogMTAwIC8gRGVsYXkuaGVpZ2h0KS50b0ZpeGVkIDJcblxuICAgIGlmIHBlcmMgPiAxMDBcbiAgICAgIGlmIERlbGF5LmZpbGxlZCBpcyBmYWxzZVxuICAgICAgICAkKCdoZWFkZXInKS5hZGRDbGFzcyAnZmlsbGVkJ1xuICAgICAgICBEZWxheS5maWxsZWQgPSB0cnVlXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGVsc2VcbiAgICAgIGlmIERlbGF5LmZpbGxlZCBpcyB0cnVlXG4gICAgICAgICQoJ2hlYWRlcicpLnJlbW92ZUNsYXNzICdmaWxsZWQnXG4gICAgICAgIERlbGF5LmZpbGxlZCA9IGZhbHNlXG5cbiAgICBvcGFjaXR5ID0gKHBlcmMvMTAwKS50b0ZpeGVkKDEpIC8gMlxuXG4gICAgaWYgSW5kZXgub2Zmc2V0IGlzbnQgMFxuICAgICAgI0RlbGF5LmxvZ28uY3NzKCd0cmFuc2Zvcm0nLCBcInRyYW5zbGF0ZSgwcHgsICN7cGVyYyo3fXB4KVwiKVxuICAgICAgRGVsYXkuaGVhZGVyLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIFwicmdiYSgje0RlbGF5LnBlYWNoLnJ9LCN7RGVsYXkucGVhY2guZ30sI3tEZWxheS5wZWFjaC5ifSwje29wYWNpdHl9KVwiKVxuXG4iLCJGb2xkID1cblxuICBpblZpZXdwb3J0OiAoZWwpIC0+XG5cbiAgICByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBcbiAgICByZXR1cm4oXG4gICAgICAocmVjdC50b3AgPj0gMCB8fCByZWN0LmJvdHRvbSA+PSAwKSAmJlxuICAgICAgKHJlY3QudG9wIDw9IHdpbmRvdy5pbm5lckhlaWdodCB8fCByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQpXG4gICAgKVxuXG5cbiAgdmlld3M6IChlbHMsIHJlc3VsdCkgLT5cblxuICAgIHZpZXdzID0ge31cblxuICAgIGVscy5lYWNoIChpLCBlbCkgLT5cblxuICAgICAgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBuYW1lID0gJChlbCkuYXR0ciAnaWQnXG5cbiAgICAgIHJldHVybiB0cnVlIGlmIG5hbWUgaXMgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChcbiAgICAgICAgKHJlY3QudG9wID49IDAgfHwgcmVjdC5ib3R0b20gPj0gMCkgJiZcbiAgICAgICAgKHJlY3QudG9wIDw9IHdpbmRvdy5pbm5lckhlaWdodCB8fCByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQpXG4gICAgICApXG4gICAgICAgIG1pZGRsZSA9IHdpbmRvdy5pbm5lckhlaWdodC8yXG4gICAgICAgIGlmIHJlY3QudG9wIDwgbWlkZGxlICYmIHJlY3QuYm90dG9tID4gbWlkZGxlXG4gICAgICAgICAgcmVzdWx0KG5hbWUpXG4iLCJJbmRleCA9XG4gIG9mZnNldDogLTg2XG5cbiAgaTogLT5cblxuICAgIERlbGF5LmkoKVxuICAgIFByb2R1Y3QuaSgpXG5cbiAgICBpZiAkKHdpbmRvdykud2lkdGgoKSA8IDEwMDBcbiAgICAgIEBvZmZzZXQgPSAwXG5cbiAgICBAaGFuZGxlcnMoKVxuXG4gICAgc2V0SW50ZXJ2YWwgSW5kZXgubWVudSwgNTAwXG5cbiAgaGFuZGxlcnM6IC0+XG4gICAgJCgnaGVhZGVyID4gLmJ1cmdlcicpLmNsaWNrIEBidXJnZXJIYW5kbGVyXG4gICAgJCgnaGVhZGVyID4gLmlubmVyID4gLm1lbnUgPiAuaXRlbXMgPiAuaW5uZXIgPiAuaXRlbScpLmNsaWNrIEBtZW51SGFuZGxlclxuICAgICQoJ2hlYWRlciA+IC5pbm5lciA+IC5sb2dvJykuY2xpY2sgQG1lbnVIYW5kbGVyXG5cbiAgYnVyZ2VySGFuZGxlcjogLT5cbiAgICBfLnN3YXAgJ2hlYWRlciA+IC5idXJnZXInXG4gICAgXy5zd2FwICdoZWFkZXIgPiAuaW5uZXIgPiAubWVudSA+IC5pdGVtcydcblxuICBtZW51SGFuZGxlcjogLT5cbiAgICBfLm9uICdoZWFkZXIgPiAuYnVyZ2VyJ1xuICAgIF8ub2ZmICdoZWFkZXIgPiAuaW5uZXIgPiAubWVudSA+IC5pdGVtcydcbiAgICBJbmRleC5zZWN0aW9uICQodGhpcykuZGF0YSAnaXRlbSdcblxuICBzZWN0aW9uOiAoc2VjdGlvbikgLT5cbiAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAkKCdodG1sLCBib2R5Jykuc2Nyb2xsVG8gXCIjI3tzZWN0aW9ufVwiLFxuICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICAgIG9mZnNldDogSW5kZXgub2Zmc2V0XG4gICAgICBsb2NhdGlvbi5oYXNoID0gc2VjdGlvblxuICAgICwgMTAwXG5cbiAgbWVudTogLT5cblxuICAgIEZvbGQudmlld3MgJCgnLnNlY3Rpb24nKSwgKHJlc3VsdCkgLT5cbiAgICAgIF8ub2ZmICdoZWFkZXIgPiAuaW5uZXIgPiAubWVudSA+IC5pdGVtcyA+IC5pbm5lciA+IC5pdGVtJ1xuICAgICAgXy5vbiBcIi5pdGVtXyN7cmVzdWx0fVwiXG5cbiAgICAgIGlmIHJlc3VsdCBpc250ICdwcm9kdWN0cycgYW5kIFByb2R1Y3QuZGV0YWlscyBpcyB0cnVlXG4gICAgICAgIFByb2R1Y3QuY2xvc2VDbGljaygpXG4iLCJNYXAgPVxuICBtYXA6IGZhbHNlXG4gIHBsYWNlczoge31cblxuICBpOiAtPlxuXG5cbiAgICBAbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksXG4gICAgICBjZW50ZXI6IGxhdDogMzcuNzc4NDA3LCBsbmc6IC0xMjIuMzk3MTI4XG4gICAgICB6b29tOiAxMVxuICAgICAgc3R5bGVzOiBAc3R5bGVzXG4gICAgICBvcHRpb25zOiBAb3B0aW9uc1xuXG4gICAgc2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuUGxhY2VzU2VydmljZShAbWFwKVxuXG4gICAgZm9yIHZlbmRvciBpbiBjb25maWcudmVuZG9yc1xuICAgICAgc2VydmljZS5nZXREZXRhaWxzXG4gICAgICAgIHBsYWNlSWQ6IHZlbmRvci5wbGFjZUlkXG4gICAgICAsIChyZXN1bHQsIHN0YXR1cykgLT5cbiAgICAgICAgTWFwLnBsYWNlc1tyZXN1bHQucGxhY2VfaWRdID0gcmVzdWx0XG4gICAgICAgIE1hcC5tYXJrZXJzKCkgaWYgXy5vYmpjKGNvbmZpZy52ZW5kb3JzKSBpcyBfLm9iamMoTWFwLnBsYWNlcylcblxuXG4gICAgQGhhbmRsZXJzKClcblxuICBoYW5kbGVyczogLT5cbiAgICQoJy5zZWN0aW9uX2xvY2F0aW9ucyA+IC5wbGFjZSA+IC5jbG9zZScpLmNsaWNrIEBwbGFjZUNsb3NlSGFuZGxlclxuICBtYXJrZXJzOiAtPlxuXG4gICAgbWFya2VycyA9IFtdXG5cbiAgICBmb3IgaWQsIHBsYWNlIG9mIEBwbGFjZXNcblxuICAgICAgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlclxuICAgICAgICBtYXA6IE1hcC5tYXBcbiAgICAgICAgcG9zaXRpb246IHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uXG4gICAgICAgIGljb246XG4gICAgICAgICAgdXJsOiAnL2ltYWdlcy9tYXAvbWFya2VyLnBuZycsXG4gICAgICAgICAgc2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoNjAsIDYwKVxuICAgICAgICAgIG9yaWdpbjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDAsIDApXG4gICAgICAgIHBsYWNlOlxuICAgICAgICAgIHBsYWNlSWQ6IHBsYWNlLnBsYWNlX2lkXG4gICAgICAgICAgbG9jYXRpb246IHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uXG4gICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lciBtYXJrZXIsICdjbGljaycsIE1hcC5tYXJrZXJIYW5kbGVyXG4gICAgICBtYXJrZXJzLnB1c2ggbWFya2VyXG5cbiAgICBtYXJrZXJDbHVzdGVyID0gbmV3IE1hcmtlckNsdXN0ZXJlciBNYXAubWFwLCBtYXJrZXJzLFxuICAgICAgaW1hZ2VQYXRoOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvZXhhbXBsZXMvbWFya2VyY2x1c3RlcmVyL20nXG5cbiAgbWFya2VySGFuZGxlcjogLT5cblxuICAgcGxhY2UgPSBNYXAucGxhY2VzW3RoaXMucGxhY2UucGxhY2VJZF1cblxuXG4gICBpZiBwbGFjZS5waG90b3NcbiAgICAkKCcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UgPiAuaW5uZXIgPiAuaW1hZ2UnKS5hdHRyICdzcmMnLHBsYWNlLnBob3Rvc1swXS5nZXRVcmwgbWF4V2lkdGg6IDI2MCwgbWF4SGVpZ2h0OiAyMDBcbiAgICBfLm9uICcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UgPiAuaW5uZXIgPiAuaW1hZ2UnXG4gICBlbHNlXG4gICAgXy5vZmYgJy5zZWN0aW9uX2xvY2F0aW9ucyA+IC5wbGFjZSA+IC5pbm5lciA+IC5pbWFnZSdcblxuICAgJCgnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlID4gLmlubmVyID4gLm5hbWUnKS50ZXh0IHBsYWNlLm5hbWVcbiAgICQoJy5zZWN0aW9uX2xvY2F0aW9ucyA+IC5wbGFjZSA+IC5pbm5lciA+IC5uYW1lJykuYXR0ciAnaHJlZicsIHBsYWNlLnVybFxuICAgJCgnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlID4gLmlubmVyID4gLmFkZHJlc3MnKS5odG1sIHBsYWNlLmZvcm1hdHRlZF9hZGRyZXNzXG4gICAkKCcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UgPiAuaW5uZXIgPiAucGhvbmUnKS5odG1sIHBsYWNlLmZvcm1hdHRlZF9waG9uZV9udW1iZXJcblxuICAgXy5vbiAnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlJ1xuXG4gICBNYXAubWFwLnNldFpvb20oMTYpXG4gICBNYXAubWFwLnNldENlbnRlcih0aGlzLmdldFBvc2l0aW9uKCkpXG5cbiAgIGNvbnNvbGUubG9nIHBsYWNlXG5cblxuICBwbGFjZUNsb3NlSGFuZGxlcjogLT5cbiAgICBfLm9mZiAnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlJ1xuICAgIE1hcC5tYXAuc2V0Wm9vbSgxMSlcbiAgICBcbiAgb3B0aW9uczpcbiAgICBzY3JvbGx3aGVlbDogZmFsc2VcbiAgICBtYXBUeXBlQ29udHJvbDogZmFsc2VcbiAgICBmdWxsc2NyZWVuQ29udHJvbDogZmFsc2VcblxuICBzdHlsZXM6XG4gICAgW1xuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAnYWRtaW5pc3RyYXRpdmUnXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdsYWJlbHMudGV4dC5maWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAnY29sb3InOiAnIzllNWQwNycgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdhZG1pbmlzdHJhdGl2ZS5jb3VudHJ5J1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnbGFiZWxzLnRleHQuZmlsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbIHsgJ2NvbG9yJzogJyNmMjk5MzQnIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAnYWRtaW5pc3RyYXRpdmUubG9jYWxpdHknXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdsYWJlbHMudGV4dC5maWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAnY29sb3InOiAnIzllNWQwNycgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdsYW5kc2NhcGUnXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdhbGwnXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICdjb2xvcic6ICcjZjhmNWYyJyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3BvaSdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2FsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbIHsgJ3Zpc2liaWxpdHknOiAnb2ZmJyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3JvYWQnXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdhbGwnXG4gICAgICAgICdzdHlsZXJzJzogW1xuICAgICAgICAgIHsgJ3NhdHVyYXRpb24nOiAtMTAwIH1cbiAgICAgICAgICB7ICdsaWdodG5lc3MnOiA0NSB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3JvYWQnXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdnZW9tZXRyeS5maWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAnY29sb3InOiAnI2YyOTkzNCcgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdyb2FkLmhpZ2h3YXknXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdhbGwnXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICd2aXNpYmlsaXR5JzogJ3NpbXBsaWZpZWQnIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAncm9hZC5hcnRlcmlhbCdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2xhYmVscy5pY29uJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAndmlzaWJpbGl0eSc6ICdvZmYnIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAndHJhbnNpdCdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2FsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbIHsgJ3Zpc2liaWxpdHknOiAnb2ZmJyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3dhdGVyJ1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnYWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFtcbiAgICAgICAgICB7ICdjb2xvcic6ICcjMDBhZmFhJyB9XG4gICAgICAgICAgeyAndmlzaWJpbGl0eSc6ICdvbicgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuXG4iLCJQcm9kdWN0ID1cbiAgdGw6IGZhbHNlXG4gIGRldGFpbHM6IGZhbHNlXG5cbiAgaTogLT5cbiAgICBAdGwgPSBuZXcgVGltZWxpbmVNYXggcmVwZWF0OiAwXG5cbiAgICBAaGFuZGxlcnMoKVxuXG4gIGhhbmRsZXJzOiAtPlxuICAgICQoJy5zZWN0aW9uX3Byb2R1Y3RzID4gLnByb2R1Y3RsaXN0ID4gLnByb2R1Y3QnKS5jbGljayBAcHJvZHVjdENsaWNrXG4gICAgJCgnLnNlY3Rpb25fcHJvZHVjdHMgPiAuZGV0YWlscyA+IC5kZXRhaWwgPiAuY2xvc2UnKS5jbGljayBAY2xvc2VDbGlja1xuXG4gICAgJCgnLnNlY3Rpb25fcHJvZHVjdHMgPiAuZGV0YWlscyA+IC5kZXRhaWwgPiAuY29weSA+IC5pbm5lciA+IC5mbGF2b3JzID4gLmZsYXZvciA+IC5uYW1lJykuY2xpY2sgQGZsYXZvclxuXG4gIGZsYXZvcjogLT5cbiAgICBwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpXG4gICAgc3RhdGUgPSBfLnN0YXRlIHBhcmVudFxuICAgIGNvbnNvbGUubG9nIHN0YXRlXG4gICAgXy5vZmYgJy5mbGF2b3JzID4gLmZsYXZvcidcbiAgICBpZiBzdGF0ZVxuICAgICAgXy5vZmYgcGFyZW50XG4gICAgZWxzZVxuICAgICAgXy5vbiBwYXJlbnRcblxuXG4gIHByb2R1Y3RDbGljazogLT5cbiAgICBwcm9kdWN0ID0gJCh0aGlzKS5kYXRhICdwcm9kdWN0J1xuICAgIF8ub24gXCJbaWQ9J2RldGFpbCAje3Byb2R1Y3R9J11cIlxuICAgIF8ub24gXCJbaWQ9J2ltYWdlICN7cHJvZHVjdH0nXVwiXG4gICAgUHJvZHVjdC5kZXRhaWxzID0gdHJ1ZVxuICAgIGlmIEluZGV4Lm9mZnNldCBpc250IDBcbiAgICAgIEluZGV4LnNlY3Rpb24gJ3Byb2R1Y3RzJ1xuXG5cbiAgICBlbXB0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgJ3N1bkVtcHR5J1xuICAgIGZvciBkaXYgaW4gZW1wdHlcbiAgICAgIHRsID0gbmV3IFRpbWVsaW5lTWF4IHJlcGVhdDogMFxuICAgICAgdGwudG8gZGl2LCAxLjAsIHttb3JwaFNWRzoge3NoYXBlOiAnI3N1bkZpbGxlZCcsIHNoYXBlSW5kZXg6IDN9LCBlYXNlOkV4cG8uZWFzZUluT3V0fVxuXG4gIGNsb3NlQ2xpY2s6IC0+XG4gICAgZW1wdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lICdzdW5FbXB0eSdcbiAgICBmb3IgZGl2IGluIGVtcHR5XG4gICAgICB0bCA9IG5ldyBUaW1lbGluZU1heCByZXBlYXQ6IDBcbiAgICAgIHRsLnRvIGRpdiwgMC4wMSwge21vcnBoU1ZHOiAnI3N1bkVtcHR5JywgZWFzZTpFeHBvLmVhc2VJbk91dH1cblxuICAgIF8ub2ZmICcuc2VjdGlvbl9wcm9kdWN0cyA+IC5kZXRhaWxzID4gLmRldGFpbCdcbiAgICBfLm9mZiAnLnNlY3Rpb25fcHJvZHVjdHMgPiAuZGV0YWlscyA+IC5pbWFnZSdcbiAgICBQcm9kdWN0LmRldGFpbHMgPSBmYWxzZVxuICAgIFxuIl19
