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
    "orange3": "#D1A97E",
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
      "font-size": "22px",
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
    "c1ss": {
      "font-family": "averta light",
      "font-size": "10px"
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
    "c3s": {
      "font-family": "averta bold",
      "font-size": "11px"
    },
    "c4": {
      "font-family": "averta bold",
      "font-size": "20px"
    },
    "c5": {
      "font-family": "averta bold",
      "font-size": "18px"
    },
    "c6": {
      "font-family": "aquilone regular",
      "font-size": "16px"
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
    "map_api_key": "AIzaSyAIq84pji4ovumANXXolMqkGwQX8kM1mKc",
    "email": "info@fullsun.com",
    "instagram": "http://www.instagram.com/",
    "twitter": "http://www.twitter.com/",
    "facebook": "http://www.facebook.com/"
  },
  "products": [
    {
      "name": "vape pen set",
      "title": "Cannabis Oil Vaporization Set",
      "description": ["Designed for on-the-go enjoyment, this premium vape set includes our Single Origin cannabis oil. Use throughout the day to incite creativity, calm the mind or deepen relaxation levels.", "Save yourself time and effort, this one cartridge can be used for endless occasions. The perfect dose of goodness anytime you need it — sunup to sundown.", "Includes battery, 500mg cartridge and charger.  Solvent Free. Product tested and held  to the highest standards for purity and consistent THC potency.", "<i>Experience: A clear-headed, focused high perfect for daytime and nighttime use.</i>"],
      "image": "pen_set.jpg",
      "detail": [
        {
          "left": "THC",
          "right": ">85%"
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
      "description": ["Mornings just got brighter. Our Rise, all-natural, single origin oil cartridges are available in 4 different terpene enriched flavors: Dank Berry, Enlighten”mint”, TropiCali and Natural.", "<i>Select a tone to enhance your day:</i>"],
      "image": "rise.jpg",
      "flavors": [
        {
          "name": "Dank Berry",
          "desc": ["Imagine waking up feeling completely refreshed and ready to conquer the day.", "Feel: creative, alert, and inspired"]
        }, {
          "name": "Enlighten”mint”",
          "desc": ["To Yoga or not to Yoga? Whether you sweat through it or slept through it, we got you covered.", "Feel: Mindful, focused, and calm"]
        }, {
          "name": "TropiCali",
          "desc": ["You hopped on a plane and just touched down on a tropical oasis. Welcome to island living, operation unwind.", "Feel: Happy, relaxed, and carefree"]
        }, {
          "name": "Natural",
          "desc": ["Green smoothied for breakfast, ate salad for lunch, power cycled after work — that was the idea anyways.", "Feel: clear-headed, energized, and refreshed"]
        }
      ],
      "detail": [
        {
          "left": "THC",
          "right": ">85%"
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
          "right": ">85%"
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
      "title": "Full Blooms",
      "description": ["Naturally grown and harvested under Humboldt County sunshine, our flowers are meticulously monitored and handled with the utmost care to ensure premium quality.", "As native Humboldt growers, we have a pulse on what’s in demand to make sure we provide the newest and most exciting strains.", "All of our flowers are lab-tested tested and held to the highest standards for purity and consistent THC potency."],
      "image": "flowers.jpg",
      "flavors": [
        {
          "name": "High-Definition OG Kush",
          "desc": ["One of the most legendary cannabis strains, OG Kush is a strong, Indica-leaning hybrid renowned for its powerful potency, medicinal qualities and unique taste. The strain smells and tastes like sweet lemons with a hint of woody earthiness. What makes ours High-Definition? That’s our best kept secret."]
        }, {
          "name": "Sunset Sherbert",
          "desc": ["An Indica-dominant hybrid, this is a powerful cross between the Girl Scout Cookies and Pink Panties strains. Known for its uplifting jolt of cerebral energy, Sunset Sherbet tastes like sweet citrus and honey with an earthy aftertaste."]
        }, {
          "name": "Sour Tangie",
          "desc": ["An 80% Sativa-dominant cross between East Coast Sour Diesel and Tangie, this strain is known for its extreme, mouthwatering flavor. Strong citrus notes are met with an earthy diesel aftertaste. A well-balanced strain perfect for full body relaxation."]
        }, {
          "name": "Black Lime Reserve",
          "desc": ["A boutique, Indica strain with a reputable Emerald Triangle heritage. A powerful cross between Northern Lights, Purple Kush and Chemdawg Special Reserve strains. Refreshing and exuberant with a pronounced mix of sweet citrus, peppery spice and juicy lime."]
        }
      ],
      "detail": [
        {
          "left": "THC",
          "right": ">85%"
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
      "title": "about us",
      "copys": ["We are the smallest grains of rich, healthy soil. We are the oxygen thick air provided by the forests of Humboldt County. We are the caring hands that turn high quality, chemical-free cannabis into beautifully crafted concentrates, allowing your life to be a little easier.", "Lastly, we are the rays of sunshine that spill down upon the mountaintop — the bright and most powerful source that enriches all of our cannabis at Full Sun."]
    },
    "contact": {
      "title": "contact us",
      "subtitle": "Want more sungrown goodness?"
    },
    "process": {
      "title": "our process",
      "copys": ["All of our products consist of Single Origin, High-Definition OG Kush cannabis. While others call this their “Reserve” we call this our \"All the Time”. We hand select our small group of producers for their consistent commitment to quality and excellence. They work their magic with our which allows us to maintain quality, consistency and quantity. Raised out of the most reputable growing region in the world, our Humboldt County farms stays rooted in consciously growing the best and brightest sungrown cannabis.", "Extracting oil from plants has been widely used across industries for centuries. Finding the right cannabis distillation process has taken years, but we have designed and perfected a model that is just right for us. Our proprietary extract method is done at our state of the art facility in Humboldt County. The result is an ultra refined oil that is lab tested and 100% solvent-free, every single time. Your well-being is our top priority so you can expect is only the best."]
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

var Gate;

Gate = {
  i: function() {
    this.handlers();
    if (Cookies.get('gate') !== void 0) {
      return _.off('.gate');
    }
  },
  handlers: function() {
    return $('.gate > .gradient > .middle > .buttons > .button').on('click', this.yesno);
  },
  yesno: function() {
    if ($(this).text() === 'NO') {
      return location.href = 'http://www.buildabear.com/';
    }
    if ($(this).text() === 'YES') {
      _.off('.gate');
      return Cookies.set('gate', true);
    }
  }
};

var Index;

Index = {
  offset: -86,
  i: function() {
    Gate.i();
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjI1Ni5jb2ZmZWUiLCJjb25maWcuY29mZmVlIiwiZGVsYXkuY29mZmVlIiwiZm9sZC5jb2ZmZWUiLCJnYXRlLmNvZmZlZSIsImluZGV4LmNvZmZlZSIsIm1hcC5jb2ZmZWUiLCJwcm9kdWN0LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBLENBQUE7RUFBQTs7QUFBQSxDQUFBLEdBRUU7RUFBQSxDQUFBLEVBQUcsU0FBQTtXQUNELElBQUMsQ0FBQSxPQUFELEdBQVcsV0FBQSxDQUFZLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLElBQWIsQ0FBWixFQUE2QixHQUE3QjtFQURWLENBQUg7RUFHQSxDQUFBLEVBQ0U7SUFBQSxNQUFBLEVBQVEsS0FBUjtJQUNBLE9BQUEsRUFBUyxDQURUO0dBSkY7RUFPQSxJQUFBLEVBQU0sU0FBQyxFQUFELEVBQUssTUFBTCxFQUFtQixHQUFuQjs7TUFBSyxTQUFPOzs7TUFBTyxNQUFJOztJQUUzQixJQUFHLENBQUEsQ0FBQSxFQUFBLFlBQWtCLE1BQWxCLENBQUg7TUFDRSxFQUFBLEdBQUssQ0FBQSxDQUFFLEVBQUYsRUFEUDs7SUFHQSxJQUFHLE1BQUEsS0FBWSxLQUFmO01BQ0UsRUFBRSxDQUFDLFdBQUgsQ0FBZSxNQUFmLEVBREY7O0lBR0EsSUFBRyxHQUFBLEtBQVMsS0FBWjtNQUNFLEVBQUUsQ0FBQyxRQUFILENBQVksR0FBWixFQURGOztBQUdBLFdBQU87RUFYSCxDQVBOO0VBb0JBLEdBQUEsRUFBSyxTQUFDLEVBQUQsRUFBSyxDQUFMOztNQUFLLElBQUU7O0lBRVYsSUFBRyxDQUFDLENBQUMsTUFBRixJQUFhLENBQUMsQ0FBQyxPQUFGLEdBQVksQ0FBNUI7TUFFRSxJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4sRUFBVSxLQUFWLEVBQWlCLFFBQWpCO01BQ0EsVUFBQSxDQUFXLFNBQUE7UUFDVCxJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4sRUFBVSxRQUFWLEVBQW9CLEtBQXBCO2VB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QWdDLFVBQWhDO0FBQ1I7U0FBQSx1Q0FBQTs7TUFDRSxFQUFBLEdBQVMsSUFBQSxXQUFBLENBQVk7UUFBQSxNQUFBLEVBQVEsQ0FBUjtPQUFaO21CQUNULEVBQUUsQ0FBQyxFQUFILENBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0I7UUFBQyxRQUFBLEVBQVU7VUFBQyxLQUFBLEVBQU8sWUFBUjtVQUFzQixVQUFBLEVBQVksQ0FBbEM7U0FBWDtRQUFpRCxJQUFBLEVBQUssSUFBSSxDQUFDLFNBQTNEO09BQWhCO0FBRkY7O0VBVlksQ0F6QmQ7RUF1Q0EsVUFBQSxFQUFZLFNBQUE7QUFDVixRQUFBO0lBQUEsS0FBQSxHQUFRLFFBQVEsQ0FBQyxzQkFBVCxDQUFnQyxVQUFoQztBQUNSLFNBQUEsdUNBQUE7O01BQ0UsRUFBQSxHQUFTLElBQUEsV0FBQSxDQUFZO1FBQUEsTUFBQSxFQUFRLENBQVI7T0FBWjtNQUNULEVBQUUsQ0FBQyxFQUFILENBQU0sR0FBTixFQUFXLElBQVgsRUFBaUI7UUFBQyxRQUFBLEVBQVUsV0FBWDtRQUF3QixJQUFBLEVBQUssSUFBSSxDQUFDLFNBQWxDO09BQWpCO0FBRkY7SUFJQSxDQUFDLENBQUMsR0FBRixDQUFNLHdDQUFOO0lBQ0EsQ0FBQyxDQUFDLEdBQUYsQ0FBTSx1Q0FBTjtXQUNBLE9BQU8sQ0FBQyxPQUFSLEdBQWtCO0VBUlIsQ0F2Q1oiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXyA9XG5cbiAgaTogLT5cbiAgICBAY29uc29sZSA9IHNldEludGVydmFsKEBkZXRlY3QuYmluZChAKSwgMjAwKVxuXG4gIHA6XG4gICAgb2ZmaW5nOiBmYWxzZVxuICAgIG9mZnRpbWU6IDBcblxuICB0dXJuOiAoZWwsIHJlbW92ZT1mYWxzZSwgYWRkPWZhbHNlKSAtPlxuXG4gICAgaWYgZWwgbm90IGluc3RhbmNlb2YgalF1ZXJ5XG4gICAgICBlbCA9ICQoZWwpXG5cbiAgICBpZiByZW1vdmUgaXNudCBmYWxzZVxuICAgICAgZWwucmVtb3ZlQ2xhc3MocmVtb3ZlKVxuXG4gICAgaWYgYWRkIGlzbnQgZmFsc2VcbiAgICAgIGVsLmFkZENsYXNzKGFkZClcblxuICAgIHJldHVybiB0cnVlXG5cbiAgb2ZmOiAoZWwsIHA9e30pIC0+XG5cbiAgICBpZiBwLm9mZmluZyBhbmQgcC5vZmZ0aW1lID4gMFxuXG4gICAgICBAdHVybiBlbCwgZmFsc2UsICdvZmZpbmcnXG4gICAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAgIEB0dXJuIGVsLCAnb2ZmaW5nJywgZmFsc2VcbiAgICAgICAgQHR1cm4gZWwsICdvbicsICdvZmYnXG4gICAgICAsIHAub2ZmdGltZSoxMDAwICsgMTAwXG5cbiAgICBlbHNlXG4gICAgICBAdHVybiBlbCwgJ29uJywgJ29mZidcblxuICAgIHJldHVyblxuXG4gIG9uOiAoZWwsIHApIC0+XG4gICAgQHR1cm4gZWwsICdvZmYnLCAnb24nXG5cbiAgc3RhdGU6IChlbCkgLT5cbiAgICBpZiBlbCBub3QgaW5zdGFuY2VvZiBqUXVlcnlcbiAgICAgIGVsID0gJChlbClcblxuICAgIGlmIGVsLmhhc0NsYXNzICdvZmYnXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICBpZiBlbC5oYXNDbGFzcyAnb24nXG4gICAgICByZXR1cm4gdHJ1ZVxuXG4gICAgcmV0dXJuIG51bGxcblxuICBzd2FwOiAoZWwsIHApIC0+XG5cbiAgICBpZiBlbCBub3QgaW5zdGFuY2VvZiBqUXVlcnlcbiAgICAgIGVsID0gJChlbClcblxuICAgIGlmIGVsLmhhc0NsYXNzICdvZmYnXG4gICAgICBAb24gZWwsIHBcbiAgICBlbHNlXG4gICAgICBAb2ZmIGVsLCBwXG5cbiAgICByZXR1cm5cblxuICBlbmNvZGU6IChzdHIpIC0+XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpXG4gICAgICAucmVwbGFjZSgvIS9nLCAnJTIxJylcbiAgICAgIC5yZXBsYWNlKC8nL2csICclMjcnKVxuICAgICAgLnJlcGxhY2UoL1xcKC9nLCAnJTI4JylcbiAgICAgIC5yZXBsYWNlKC9cXCkvZywgJyUyOScpXG4gICAgICAucmVwbGFjZSgvXFwqL2csICclMkEnKVxuICAgICAgLnJlcGxhY2UoLyUyMC9nLCAnKycpXG5cbiAgdDogKGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCB2YWx1ZSkgLT5cbiAgICBfZ2FxLnB1c2ggWydfdHJhY2tFdmVudCcsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCB2YWx1ZV1cblxuICByYW5kOiAobWluLCBtYXgpIC0+XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCkgKyBtaW5cblxuICBoZXgycmdiOiAoaGV4KSAtPlxuICAgIHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpXG4gICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXG4gICAgZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXG4gICAgYjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNilcbiBcbiAgb2JqYzogKG9iaikgLT5cbiAgICAoayBmb3Igb3duIGsgb2Ygb2JqKS5sZW5ndGhcblxuICBsb2FkOiAoc2NyaXB0LCBpbml0aWF0ZSwgY29tcGxldGUpIC0+XG5cbiAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgJ3NjcmlwdCdcbiAgICBlbC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCdcbiAgICBlbC5zcmMgPSBzY3JpcHRcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyICdsb2FkJyAsIChlKSAtPlxuICAgICAgY29tcGxldGUoKSBpZiB0eXBlb2YgY29tcGxldGUgaXMgJ2Z1bmN0aW9uJ1xuICAgICAgd2luZG93W2luaXRpYXRlXS5pKCkgaWYgaW5pdGlhdGUgaXNudCB1bmRlZmluZWQgYW5kIGluaXRpYXRlIGlzbnQgZmFsc2VcbiAgICAsIGZhbHNlXG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKVxuXG4gIGxsYzogLT5cbiAgICBhc2NpaSA9IFwiXCJcIlxuXG4gICAgICAlY21tbS8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uL21tbVxuICAgICAgbW1vLi4uLi4uLi4uLi4uLi4uLi06Oi8vOjotLi4uLi4uLi06Ojo6Ojo6Ojo6Ojo6LS4uLi4uLi4uLTo6Ly8vOi0ub21tXG4gICAgICBtZC0uLi4uLi4uLi4uLi4uOit5aGRkZGRkZGh5Ky0uLi4uL2RkZGRkZGRkZGRkZGQrLi4uLi4uL3NoZGRkZGRkZHlvZG1cbiAgICAgIG1vLi4uLi4uLi4uLi4uLi1obW1taHl5eXlkbW1taDouLi4vbW1tbWhoaGhoaGhoaCsuLi4uOnlkbW1kaHl5eWhkZG9vbVxuICAgICAgbS0uLi4uLi4uLi4uLi4uLi1zczotLi4uLi15bW1teS4uLi9tbW1tLS0tLS0tLS0tLi4uLjpkbW1tczotLi4uLTovLi1tXG4gICAgICBkLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLnltbW15Li4uL21tbW0tLytvb28rOi0uLi4ueW1tbXktOitvb28rLy0uLmRcbiAgICAgIGguLi4uLi4uLi4uLi4uLi4uLi4uLi4uLjpzbW1tZDouLi4vbW1tbWhtbW1tbW1kaCsuLi5kbW1tc2hkbW1tbW1taHMtaFxuICAgICAgaC4uLi4uLi4uLi4uLi4uLi4uLi4uLjpzZG1tZHk6Li4uLjpoaGRobysvLyt5bW1tbSsuLmRtbW1keW8vLytzZG1tbWhoXG4gICAgICBkLi4uLi4uLi4uLi4uLi4uLi4uLSt5ZG1tZHkvLi4uLi4uLi0tOi4uLi4uLi5zbW1taC4ueW1tbXMuLi4uLi46bW1tbW1cbiAgICAgIG0tLi4uLi4uLi4uLi4uLi4tOnNobW1tZHMvLS0tLS0uLi4uOnMvLS0uLi4tOmhtbW1zLi46ZG1tZC8tLi4uLW9tbW1tbVxuICAgICAgbW8uLi4uLi4uLi4uLi4uLmhtbW1tbW1oaGhoaGhoaC4uLitkbW1kaHl5eWhkbW1teS0uLi4vaG1tbWh5eXlobW1tZGhtXG4gICAgICBtZC0uLi4uLi4uLi4uLi4uZGRkZGRkZGRkZGRkZGRkLi4uLStzaGRkZGRkZGRoeS8tLi4uLi4tb3lkZGRkZGRkaG86ZG1cbiAgICAgIG1tby4uLi4uLi4uLi4uLi46Ojo6Ojo6Ojo6Ojo6OjouLi4uLi4uLTovLy86Oi0uLi4uLi4uLi4uLi06Ly8vOi0uLm9tbVxuICAgICAgbW1tLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4vbW1tXG5cbiAgICAgIDo6IHN5bnRhY3RpYyBzdWdhciBieSAyNTZcbiAgICAgIDo6IGh0dHA6Ly8yNTYuaW8vXG4gICAgICA6OiAje2NvbmZpZy5tZXRhLnJlcG99XG4gICAgXCJcIlwiXG4gICAgY29uc29sZS5sb2cgYXNjaWksIFwiY29sb3I6IGdyZXk7IGZvbnQtZmFtaWx5OiBNZW5sbywgbW9ub3NwYWNlO1wiXG5cbiAgZGV0ZWN0OiAtPlxuICAgIGlmICgoKHdpbmRvdy5vdXRlckhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCkgPiAxMDApIHx8ICgod2luZG93Lm91dGVyV2lkdGggLSB3aW5kb3cuaW5uZXJXaWR0aCkgPiAxMDApKVxuICAgICAgQGxsYygpXG4gICAgICBjbGVhckludGVydmFsIEBjb25zb2xlXG5cbl8uaSgpXG4iLCJjb25maWcgPSB7XCJjb2xvclwiOntcImJsdWUxXCI6XCIjMDBBRkFBXCIsXCJvcmFuZ2UxXCI6XCIjRjI5OTM0XCIsXCJvcmFuZ2UyXCI6XCIjOUU1RDA3XCIsXCJvcmFuZ2UzXCI6XCIjRDFBOTdFXCIsXCJraGFraTFcIjpcIiNDQUFGOTBcIixcInBlYWNoMVwiOlwiI0Y4RjVGMlwiLFwid2hpdGUxXCI6XCIjZmZmZmZmXCIsXCJibGFjazFcIjpcIiMwMDAwMDBcIixcImdyZXkxXCI6XCIjNzc3Nzc3XCJ9LFwiZm9udFwiOntcImgxXCI6e1wiZm9udC1mYW1pbHlcIjpcImFxdWlsb25lIHJlZ3VsYXJcIixcImZvbnQtc2l6ZVwiOlwiNDhweFwifSxcImgyXCI6e1wiZm9udC1mYW1pbHlcIjpcInNhY2tlcnMgZ290aGljXCIsXCJmb250LXNpemVcIjpcIjIycHhcIixcImxldHRlci1zcGFjaW5nXCI6XCI0cHhcIn0sXCJoM1wiOntcImZvbnQtZmFtaWx5XCI6XCJzYWNrZXJzIGdvdGhpY1wiLFwiZm9udC1zaXplXCI6XCIxNnB4XCIsXCJsZXR0ZXItc3BhY2luZ1wiOlwiMnB4XCIsXCJsaW5lLWhlaWdodFwiOlwiMjJweFwifSxcImg0XCI6e1wiZm9udC1mYW1pbHlcIjpcImFxdWlsb25lIHJlZ3VsYXJcIixcImZvbnQtc2l6ZVwiOlwiMzJweFwifSxcImMxXCI6e1wiZm9udC1mYW1pbHlcIjpcImF2ZXJ0YSBsaWdodFwiLFwiZm9udC1zaXplXCI6XCIxOHB4XCJ9LFwiYzFzXCI6e1wiZm9udC1mYW1pbHlcIjpcImF2ZXJ0YSBsaWdodFwiLFwiZm9udC1zaXplXCI6XCIxNHB4XCJ9LFwiYzFzc1wiOntcImZvbnQtZmFtaWx5XCI6XCJhdmVydGEgbGlnaHRcIixcImZvbnQtc2l6ZVwiOlwiMTBweFwifSxcImMxc2JcIjp7XCJmb250LWZhbWlseVwiOlwiYXZlcnRhIGJvbGRcIixcImZvbnQtc2l6ZVwiOlwiMTRweFwifSxcImMyXCI6e1wiZm9udC1mYW1pbHlcIjpcImF2ZXJ0YSBib2xkXCIsXCJmb250LXNpemVcIjpcIjI4cHhcIn0sXCJjM1wiOntcImZvbnQtZmFtaWx5XCI6XCJhdmVydGEgYm9sZFwiLFwiZm9udC1zaXplXCI6XCIxNHB4XCJ9LFwiYzNzXCI6e1wiZm9udC1mYW1pbHlcIjpcImF2ZXJ0YSBib2xkXCIsXCJmb250LXNpemVcIjpcIjExcHhcIn0sXCJjNFwiOntcImZvbnQtZmFtaWx5XCI6XCJhdmVydGEgYm9sZFwiLFwiZm9udC1zaXplXCI6XCIyMHB4XCJ9LFwiYzVcIjp7XCJmb250LWZhbWlseVwiOlwiYXZlcnRhIGJvbGRcIixcImZvbnQtc2l6ZVwiOlwiMThweFwifSxcImM2XCI6e1wiZm9udC1mYW1pbHlcIjpcImFxdWlsb25lIHJlZ3VsYXJcIixcImZvbnQtc2l6ZVwiOlwiMTZweFwifX0sXCJtZXRhXCI6e1widXJsXCI6XCJodHRwOi8vZnVsbHN1bi5jb20vXCIsXCJ0aXRsZVwiOlwiZnVsbCBzdW5cIixcImRlc2NyaXB0aW9uXCI6XCJjYWxpZm9ybmlhIGNvbnNjaW91cyBjYW5uYWJpc1wiLFwia2V5d29yZHNcIjpcImZ1bGwgc3VuLCBjYW5uYWJpcywgY2FsaWZvcm5pYVwiLFwidHJhY2tpbmdfaWRcIjozMTMzNyxcInNoYXJlXCI6XCJpbWFnZXMvbG9nbzEucG5nXCIsXCJyZXBvXCI6XCJodHRwczovL2dpdGh1Yi5jb20vYWNpZGphenovZnVsbHN1blwiLFwibWFwX2FwaV9rZXlcIjpcIkFJemFTeUFJcTg0cGppNG92dW1BTlhYb2xNcWtHd1FYOGtNMW1LY1wiLFwiZW1haWxcIjpcImluZm9AZnVsbHN1bi5jb21cIixcImluc3RhZ3JhbVwiOlwiaHR0cDovL3d3dy5pbnN0YWdyYW0uY29tL1wiLFwidHdpdHRlclwiOlwiaHR0cDovL3d3dy50d2l0dGVyLmNvbS9cIixcImZhY2Vib29rXCI6XCJodHRwOi8vd3d3LmZhY2Vib29rLmNvbS9cIn0sXCJwcm9kdWN0c1wiOlt7XCJuYW1lXCI6XCJ2YXBlIHBlbiBzZXRcIixcInRpdGxlXCI6XCJDYW5uYWJpcyBPaWwgVmFwb3JpemF0aW9uIFNldFwiLFwiZGVzY3JpcHRpb25cIjpbXCJEZXNpZ25lZCBmb3Igb24tdGhlLWdvIGVuam95bWVudCwgdGhpcyBwcmVtaXVtIHZhcGUgc2V0IGluY2x1ZGVzIG91ciBTaW5nbGUgT3JpZ2luIGNhbm5hYmlzIG9pbC4gVXNlIHRocm91Z2hvdXQgdGhlIGRheSB0byBpbmNpdGUgY3JlYXRpdml0eSwgY2FsbSB0aGUgbWluZCBvciBkZWVwZW4gcmVsYXhhdGlvbiBsZXZlbHMuXCIsXCJTYXZlIHlvdXJzZWxmIHRpbWUgYW5kIGVmZm9ydCwgdGhpcyBvbmUgY2FydHJpZGdlIGNhbiBiZSB1c2VkIGZvciBlbmRsZXNzIG9jY2FzaW9ucy4gVGhlIHBlcmZlY3QgZG9zZSBvZiBnb29kbmVzcyBhbnl0aW1lIHlvdSBuZWVkIGl0IOKAlCBzdW51cCB0byBzdW5kb3duLlwiLFwiSW5jbHVkZXMgYmF0dGVyeSwgNTAwbWcgY2FydHJpZGdlIGFuZCBjaGFyZ2VyLiAgU29sdmVudCBGcmVlLiBQcm9kdWN0IHRlc3RlZCBhbmQgaGVsZCAgdG8gdGhlIGhpZ2hlc3Qgc3RhbmRhcmRzIGZvciBwdXJpdHkgYW5kIGNvbnNpc3RlbnQgVEhDIHBvdGVuY3kuXCIsXCI8aT5FeHBlcmllbmNlOiBBIGNsZWFyLWhlYWRlZCwgZm9jdXNlZCBoaWdoIHBlcmZlY3QgZm9yIGRheXRpbWUgYW5kIG5pZ2h0dGltZSB1c2UuPC9pPlwiXSxcImltYWdlXCI6XCJwZW5fc2V0LmpwZ1wiLFwiZGV0YWlsXCI6W3tcImxlZnRcIjpcIlRIQ1wiLFwicmlnaHRcIjpcIj44NSVcIn0se1wibGVmdFwiOlwiU1RSQUlOXCIsXCJyaWdodFwiOlwiSHlicmlkXCJ9LHtcImxlZnRcIjpcIlBST0RVQ1QgT1JJR0lOXCIsXCJyaWdodFwiOlwiSHVtYm9sZHQgQ291bnR5LCBDQVwifV19LHtcIm5hbWVcIjpcInJpc2VcIixcInRpdGxlXCI6XCJTb2x2ZW50LUZyZWUgU2luZ2xlIE9yaWdpbiBDYXJ0cmlkZ2UgUmVmaWxsXCIsXCJkZXNjcmlwdGlvblwiOltcIk1vcm5pbmdzIGp1c3QgZ290IGJyaWdodGVyLiBPdXIgUmlzZSwgYWxsLW5hdHVyYWwsIHNpbmdsZSBvcmlnaW4gb2lsIGNhcnRyaWRnZXMgYXJlIGF2YWlsYWJsZSBpbiA0IGRpZmZlcmVudCB0ZXJwZW5lIGVucmljaGVkIGZsYXZvcnM6IERhbmsgQmVycnksIEVubGlnaHRlbuKAnW1pbnTigJ0sIFRyb3BpQ2FsaSBhbmQgTmF0dXJhbC5cIixcIjxpPlNlbGVjdCBhIHRvbmUgdG8gZW5oYW5jZSB5b3VyIGRheTo8L2k+XCJdLFwiaW1hZ2VcIjpcInJpc2UuanBnXCIsXCJmbGF2b3JzXCI6W3tcIm5hbWVcIjpcIkRhbmsgQmVycnlcIixcImRlc2NcIjpbXCJJbWFnaW5lIHdha2luZyB1cCBmZWVsaW5nIGNvbXBsZXRlbHkgcmVmcmVzaGVkIGFuZCByZWFkeSB0byBjb25xdWVyIHRoZSBkYXkuXCIsXCJGZWVsOiBjcmVhdGl2ZSwgYWxlcnQsIGFuZCBpbnNwaXJlZFwiXX0se1wibmFtZVwiOlwiRW5saWdodGVu4oCdbWludOKAnVwiLFwiZGVzY1wiOltcIlRvIFlvZ2Egb3Igbm90IHRvIFlvZ2E/IFdoZXRoZXIgeW91IHN3ZWF0IHRocm91Z2ggaXQgb3Igc2xlcHQgdGhyb3VnaCBpdCwgd2UgZ290IHlvdSBjb3ZlcmVkLlwiLFwiRmVlbDogTWluZGZ1bCwgZm9jdXNlZCwgYW5kIGNhbG1cIl19LHtcIm5hbWVcIjpcIlRyb3BpQ2FsaVwiLFwiZGVzY1wiOltcIllvdSBob3BwZWQgb24gYSBwbGFuZSBhbmQganVzdCB0b3VjaGVkIGRvd24gb24gYSB0cm9waWNhbCBvYXNpcy4gV2VsY29tZSB0byBpc2xhbmQgbGl2aW5nLCBvcGVyYXRpb24gdW53aW5kLlwiLFwiRmVlbDogSGFwcHksIHJlbGF4ZWQsIGFuZCBjYXJlZnJlZVwiXX0se1wibmFtZVwiOlwiTmF0dXJhbFwiLFwiZGVzY1wiOltcIkdyZWVuIHNtb290aGllZCBmb3IgYnJlYWtmYXN0LCBhdGUgc2FsYWQgZm9yIGx1bmNoLCBwb3dlciBjeWNsZWQgYWZ0ZXIgd29yayDigJQgdGhhdCB3YXMgdGhlIGlkZWEgYW55d2F5cy5cIixcIkZlZWw6IGNsZWFyLWhlYWRlZCwgZW5lcmdpemVkLCBhbmQgcmVmcmVzaGVkXCJdfV0sXCJkZXRhaWxcIjpbe1wibGVmdFwiOlwiVEhDXCIsXCJyaWdodFwiOlwiPjg1JVwifSx7XCJsZWZ0XCI6XCJTVFJBSU5cIixcInJpZ2h0XCI6XCJIeWJyaWRcIn0se1wibGVmdFwiOlwiUFJPRFVDVCBPUklHSU5cIixcInJpZ2h0XCI6XCJIdW1ib2xkdCBDb3VudHksIENBXCJ9XX0se1wibmFtZVwiOlwic2hpbmVcIixcInRpdGxlXCI6XCJDbGVhciBDYW5uYWJpcyBDb25jZW50cmF0ZVwiLFwiZGVzY3JpcHRpb25cIjpbXCJTaGluZSBzdHJvbmdlciBhIGxpdHRsZSBsb25nZXIgd2l0aCBvdXIgMTAwJSBzb2x2ZW50LWZyZWUsIGNsZWFyIGNhbm5hYmlzIGNvbmNlbnRyYXRlLiBXZSB1c2UgYSBwcm9wcmlldGFyeSBleHRyYWN0aW9uIG1ldGhvZCB0byBkaXN0aWxsIGEgY2xlYW4sIGNsZWFyIG9pbCBmcm9tIG91ciBIaWdoLURlZmluaXRpb24sIFNpbmdsZSBPcmlnaW4gT0cgS3VzaC4gQW4gaW5kaWNhLWxlYW5pbmcgaHlicmlkLCBvdXIgb2lsIGlzIHRvdGFsbHkgcHVyZSBhbmQgdG90YWxseSBwb3RlbnQuXCIsXCJPdXIgY29uY2VudHJhdGVzIGNhbiBiZSB1c2VkIGluIGxvYWRhYmxlIHZhcGUgcGVucywgb2lsIHJpZ3MsIG9yIHNtZWFyZWQgb250byBqb2ludHMgZm9yIGEgbGl0dGxlIGV4dHJhIHN0cmVuZ3RoLlwiLFwiUHJvZHVjdCB0ZXN0ZWQgYW5kIGhlbGQgIHRvIHRoZSBoaWdoZXN0IHN0YW5kYXJkcyBmb3IgcHVyaXR5IGFuZCBjb25zaXN0ZW50IFRIQyBwb3RlbmN5LlwiLFwiRXhwZXJpZW5jZTogQSBiYWxhbmNlZCBib2R5IGFuZCBoZWFkIGhpZ2guIE1lbGxvdyAmIHJlbGF4ZWQuXCJdLFwiaW1hZ2VcIjpcInNoaW5lLmpwZ1wiLFwiZGV0YWlsXCI6W3tcImxlZnRcIjpcIlRIQ1wiLFwicmlnaHRcIjpcIj44NSVcIn0se1wibGVmdFwiOlwiU1RSQUlOXCIsXCJyaWdodFwiOlwiSHlicmlkXCJ9LHtcImxlZnRcIjpcIlBST0RVQ1QgT1JJR0lOXCIsXCJyaWdodFwiOlwiSHVtYm9sZHQgQ291bnR5LCBDQVwifV19LHtcIm5hbWVcIjpcImZsb3dlcnNcIixcInRpdGxlXCI6XCJGdWxsIEJsb29tc1wiLFwiZGVzY3JpcHRpb25cIjpbXCJOYXR1cmFsbHkgZ3Jvd24gYW5kIGhhcnZlc3RlZCB1bmRlciBIdW1ib2xkdCBDb3VudHkgc3Vuc2hpbmUsIG91ciBmbG93ZXJzIGFyZSBtZXRpY3Vsb3VzbHkgbW9uaXRvcmVkIGFuZCBoYW5kbGVkIHdpdGggdGhlIHV0bW9zdCBjYXJlIHRvIGVuc3VyZSBwcmVtaXVtIHF1YWxpdHkuXCIsXCJBcyBuYXRpdmUgSHVtYm9sZHQgZ3Jvd2Vycywgd2UgaGF2ZSBhIHB1bHNlIG9uIHdoYXTigJlzIGluIGRlbWFuZCB0byBtYWtlIHN1cmUgd2UgcHJvdmlkZSB0aGUgbmV3ZXN0IGFuZCBtb3N0IGV4Y2l0aW5nIHN0cmFpbnMuXCIsXCJBbGwgb2Ygb3VyIGZsb3dlcnMgYXJlIGxhYi10ZXN0ZWQgdGVzdGVkIGFuZCBoZWxkIHRvIHRoZSBoaWdoZXN0IHN0YW5kYXJkcyBmb3IgcHVyaXR5IGFuZCBjb25zaXN0ZW50IFRIQyBwb3RlbmN5LlwiXSxcImltYWdlXCI6XCJmbG93ZXJzLmpwZ1wiLFwiZmxhdm9yc1wiOlt7XCJuYW1lXCI6XCJIaWdoLURlZmluaXRpb24gT0cgS3VzaFwiLFwiZGVzY1wiOltcIk9uZSBvZiB0aGUgbW9zdCBsZWdlbmRhcnkgY2FubmFiaXMgc3RyYWlucywgT0cgS3VzaCBpcyBhIHN0cm9uZywgSW5kaWNhLWxlYW5pbmcgaHlicmlkIHJlbm93bmVkIGZvciBpdHMgcG93ZXJmdWwgcG90ZW5jeSwgbWVkaWNpbmFsIHF1YWxpdGllcyBhbmQgdW5pcXVlIHRhc3RlLiBUaGUgc3RyYWluIHNtZWxscyBhbmQgdGFzdGVzIGxpa2Ugc3dlZXQgbGVtb25zIHdpdGggYSBoaW50IG9mIHdvb2R5IGVhcnRoaW5lc3MuIFdoYXQgbWFrZXMgb3VycyBIaWdoLURlZmluaXRpb24/IFRoYXTigJlzIG91ciBiZXN0IGtlcHQgc2VjcmV0LlwiXX0se1wibmFtZVwiOlwiU3Vuc2V0IFNoZXJiZXJ0XCIsXCJkZXNjXCI6W1wiQW4gSW5kaWNhLWRvbWluYW50IGh5YnJpZCwgdGhpcyBpcyBhIHBvd2VyZnVsIGNyb3NzIGJldHdlZW4gdGhlIEdpcmwgU2NvdXQgQ29va2llcyBhbmQgUGluayBQYW50aWVzIHN0cmFpbnMuIEtub3duIGZvciBpdHMgdXBsaWZ0aW5nIGpvbHQgb2YgY2VyZWJyYWwgZW5lcmd5LCBTdW5zZXQgU2hlcmJldCB0YXN0ZXMgbGlrZSBzd2VldCBjaXRydXMgYW5kIGhvbmV5IHdpdGggYW4gZWFydGh5IGFmdGVydGFzdGUuXCJdfSx7XCJuYW1lXCI6XCJTb3VyIFRhbmdpZVwiLFwiZGVzY1wiOltcIkFuIDgwJSBTYXRpdmEtZG9taW5hbnQgY3Jvc3MgYmV0d2VlbiBFYXN0IENvYXN0IFNvdXIgRGllc2VsIGFuZCBUYW5naWUsIHRoaXMgc3RyYWluIGlzIGtub3duIGZvciBpdHMgZXh0cmVtZSwgbW91dGh3YXRlcmluZyBmbGF2b3IuIFN0cm9uZyBjaXRydXMgbm90ZXMgYXJlIG1ldCB3aXRoIGFuIGVhcnRoeSBkaWVzZWwgYWZ0ZXJ0YXN0ZS4gQSB3ZWxsLWJhbGFuY2VkIHN0cmFpbiBwZXJmZWN0IGZvciBmdWxsIGJvZHkgcmVsYXhhdGlvbi5cIl19LHtcIm5hbWVcIjpcIkJsYWNrIExpbWUgUmVzZXJ2ZVwiLFwiZGVzY1wiOltcIkEgYm91dGlxdWUsIEluZGljYSBzdHJhaW4gd2l0aCBhIHJlcHV0YWJsZSBFbWVyYWxkIFRyaWFuZ2xlIGhlcml0YWdlLiBBIHBvd2VyZnVsIGNyb3NzIGJldHdlZW4gTm9ydGhlcm4gTGlnaHRzLCBQdXJwbGUgS3VzaCBhbmQgQ2hlbWRhd2cgU3BlY2lhbCBSZXNlcnZlIHN0cmFpbnMuIFJlZnJlc2hpbmcgYW5kIGV4dWJlcmFudCB3aXRoIGEgcHJvbm91bmNlZCBtaXggb2Ygc3dlZXQgY2l0cnVzLCBwZXBwZXJ5IHNwaWNlIGFuZCBqdWljeSBsaW1lLlwiXX1dLFwiZGV0YWlsXCI6W3tcImxlZnRcIjpcIlRIQ1wiLFwicmlnaHRcIjpcIj44NSVcIn0se1wibGVmdFwiOlwiU1RSQUlOXCIsXCJyaWdodFwiOlwiSHlicmlkXCJ9LHtcImxlZnRcIjpcIlBST0RVQ1QgT1JJR0lOXCIsXCJyaWdodFwiOlwiSHVtYm9sZHQgQ291bnR5LCBDQVwifV19XSxcInZlbmRvcnNcIjpbe1wibmFtZVwiOlwiVGhlIEdyZWVuIENyb3NzXCIsXCJwbGFjZUlkXCI6XCJDaElKcDd1ejc0bC1qNEFSSC1uZEpqbTB0emtcIixcImltYWdlXCI6XCJ0aGVncmVlbmNyb3NzLmpwZ1wifSx7XCJuYW1lXCI6XCJIYXJib3JzaWRlIEhlYWx0aCBDZW50ZXJcIixcInBsYWNlSWRcIjpcIkNoSUprNnZZcnVDR2o0QVJHZ3NHblFhV2d6d1wiLFwiaW1hZ2VcIjpcImhhcmJvcnNpZGUuanBnXCJ9LHtcIm5hbWVcIjpcInNwYXJjXCIsXCJwbGFjZUlkXCI6XCJDaElKV1VaN3dweUFoWUFSS1FZX0lKSEVfOTRcIixcImltYWdlXCI6XCJzcGFyYy5qcGdcIn1dLFwiY29weVwiOntcImFib3V0XCI6e1widGl0bGVcIjpcImFib3V0IHVzXCIsXCJjb3B5c1wiOltcIldlIGFyZSB0aGUgc21hbGxlc3QgZ3JhaW5zIG9mIHJpY2gsIGhlYWx0aHkgc29pbC4gV2UgYXJlIHRoZSBveHlnZW4gdGhpY2sgYWlyIHByb3ZpZGVkIGJ5IHRoZSBmb3Jlc3RzIG9mIEh1bWJvbGR0IENvdW50eS4gV2UgYXJlIHRoZSBjYXJpbmcgaGFuZHMgdGhhdCB0dXJuIGhpZ2ggcXVhbGl0eSwgY2hlbWljYWwtZnJlZSBjYW5uYWJpcyBpbnRvIGJlYXV0aWZ1bGx5IGNyYWZ0ZWQgY29uY2VudHJhdGVzLCBhbGxvd2luZyB5b3VyIGxpZmUgdG8gYmUgYSBsaXR0bGUgZWFzaWVyLlwiLFwiTGFzdGx5LCB3ZSBhcmUgdGhlIHJheXMgb2Ygc3Vuc2hpbmUgdGhhdCBzcGlsbCBkb3duIHVwb24gdGhlIG1vdW50YWludG9wIOKAlCB0aGUgYnJpZ2h0IGFuZCBtb3N0IHBvd2VyZnVsIHNvdXJjZSB0aGF0IGVucmljaGVzIGFsbCBvZiBvdXIgY2FubmFiaXMgYXQgRnVsbCBTdW4uXCJdfSxcImNvbnRhY3RcIjp7XCJ0aXRsZVwiOlwiY29udGFjdCB1c1wiLFwic3VidGl0bGVcIjpcIldhbnQgbW9yZSBzdW5ncm93biBnb29kbmVzcz9cIn0sXCJwcm9jZXNzXCI6e1widGl0bGVcIjpcIm91ciBwcm9jZXNzXCIsXCJjb3B5c1wiOltcIkFsbCBvZiBvdXIgcHJvZHVjdHMgY29uc2lzdCBvZiBTaW5nbGUgT3JpZ2luLCBIaWdoLURlZmluaXRpb24gT0cgS3VzaCBjYW5uYWJpcy4gV2hpbGUgb3RoZXJzIGNhbGwgdGhpcyB0aGVpciDigJxSZXNlcnZl4oCdIHdlIGNhbGwgdGhpcyBvdXIgXFxcIkFsbCB0aGUgVGltZeKAnS4gV2UgaGFuZCBzZWxlY3Qgb3VyIHNtYWxsIGdyb3VwIG9mIHByb2R1Y2VycyBmb3IgdGhlaXIgY29uc2lzdGVudCBjb21taXRtZW50IHRvIHF1YWxpdHkgYW5kIGV4Y2VsbGVuY2UuIFRoZXkgd29yayB0aGVpciBtYWdpYyB3aXRoIG91ciB3aGljaCBhbGxvd3MgdXMgdG8gbWFpbnRhaW4gcXVhbGl0eSwgY29uc2lzdGVuY3kgYW5kIHF1YW50aXR5LiBSYWlzZWQgb3V0IG9mIHRoZSBtb3N0IHJlcHV0YWJsZSBncm93aW5nIHJlZ2lvbiBpbiB0aGUgd29ybGQsIG91ciBIdW1ib2xkdCBDb3VudHkgZmFybXMgc3RheXMgcm9vdGVkIGluIGNvbnNjaW91c2x5IGdyb3dpbmcgdGhlIGJlc3QgYW5kIGJyaWdodGVzdCBzdW5ncm93biBjYW5uYWJpcy5cIixcIkV4dHJhY3Rpbmcgb2lsIGZyb20gcGxhbnRzIGhhcyBiZWVuIHdpZGVseSB1c2VkIGFjcm9zcyBpbmR1c3RyaWVzIGZvciBjZW50dXJpZXMuIEZpbmRpbmcgdGhlIHJpZ2h0IGNhbm5hYmlzIGRpc3RpbGxhdGlvbiBwcm9jZXNzIGhhcyB0YWtlbiB5ZWFycywgYnV0IHdlIGhhdmUgZGVzaWduZWQgYW5kIHBlcmZlY3RlZCBhIG1vZGVsIHRoYXQgaXMganVzdCByaWdodCBmb3IgdXMuIE91ciBwcm9wcmlldGFyeSBleHRyYWN0IG1ldGhvZCBpcyBkb25lIGF0IG91ciBzdGF0ZSBvZiB0aGUgYXJ0IGZhY2lsaXR5IGluIEh1bWJvbGR0IENvdW50eS4gVGhlIHJlc3VsdCBpcyBhbiB1bHRyYSByZWZpbmVkIG9pbCB0aGF0IGlzIGxhYiB0ZXN0ZWQgYW5kIDEwMCUgc29sdmVudC1mcmVlLCBldmVyeSBzaW5nbGUgdGltZS4gWW91ciB3ZWxsLWJlaW5nIGlzIG91ciB0b3AgcHJpb3JpdHkgc28geW91IGNhbiBleHBlY3QgaXMgb25seSB0aGUgYmVzdC5cIl19fX07IiwiXG5EZWxheSA9XG4gIGhlaWdodDogZmFsc2VcbiAgd2luOiBmYWxzZVxuICBsb2dvOiBmYWxzZVxuICBoZWFkZXI6IGZhbHNlXG4gIHBlYWNoOiBmYWxzZVxuICBmaWxsZWQ6IGZhbHNlXG5cbiAgaTogLT5cblxuICAgIEB3aW4gPSAkIHdpbmRvd1xuICAgIEBoZWlnaHQgPSBAd2luLmhlaWdodCgpXG4gICAgQGxvZ28gPSAkICcuc2VjdGlvbi5zZWN0aW9uX3RvcCA+IC5taWRkbGUnXG4gICAgQGhlYWRlciA9ICQgJ2hlYWRlcidcbiAgICBAcGVhY2ggPSBfLmhleDJyZ2IgY29uZmlnLmNvbG9yLnBlYWNoMVxuICAgICQod2luZG93KS5zY3JvbGwgQGNoZWNrU2Nyb2xsXG5cbiAgY2hlY2tTY3JvbGw6IC0+XG5cbiAgICBwZXJjID0gKERlbGF5Lndpbi5zY3JvbGxUb3AoKSAqIDEwMCAvIERlbGF5LmhlaWdodCkudG9GaXhlZCAyXG5cbiAgICBpZiBwZXJjID4gMTAwXG4gICAgICBpZiBEZWxheS5maWxsZWQgaXMgZmFsc2VcbiAgICAgICAgJCgnaGVhZGVyJykuYWRkQ2xhc3MgJ2ZpbGxlZCdcbiAgICAgICAgRGVsYXkuZmlsbGVkID0gdHJ1ZVxuICAgICAgcmV0dXJuIHRydWVcbiAgICBlbHNlXG4gICAgICBpZiBEZWxheS5maWxsZWQgaXMgdHJ1ZVxuICAgICAgICAkKCdoZWFkZXInKS5yZW1vdmVDbGFzcyAnZmlsbGVkJ1xuICAgICAgICBEZWxheS5maWxsZWQgPSBmYWxzZVxuXG4gICAgb3BhY2l0eSA9IChwZXJjLzEwMCkudG9GaXhlZCgxKSAvIDJcblxuICAgIGlmIEluZGV4Lm9mZnNldCBpc250IDBcbiAgICAgICNEZWxheS5sb2dvLmNzcygndHJhbnNmb3JtJywgXCJ0cmFuc2xhdGUoMHB4LCAje3BlcmMqN31weClcIilcbiAgICAgIERlbGF5LmhlYWRlci5jc3MoJ2JhY2tncm91bmQtY29sb3InLCBcInJnYmEoI3tEZWxheS5wZWFjaC5yfSwje0RlbGF5LnBlYWNoLmd9LCN7RGVsYXkucGVhY2guYn0sI3tvcGFjaXR5fSlcIilcblxuIiwiRm9sZCA9XG5cbiAgaW5WaWV3cG9ydDogKGVsKSAtPlxuXG4gICAgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgXG4gICAgcmV0dXJuKFxuICAgICAgKHJlY3QudG9wID49IDAgfHwgcmVjdC5ib3R0b20gPj0gMCkgJiZcbiAgICAgIChyZWN0LnRvcCA8PSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0KVxuICAgIClcblxuXG4gIHZpZXdzOiAoZWxzLCByZXN1bHQpIC0+XG5cbiAgICB2aWV3cyA9IHt9XG5cbiAgICBlbHMuZWFjaCAoaSwgZWwpIC0+XG5cbiAgICAgIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgbmFtZSA9ICQoZWwpLmF0dHIgJ2lkJ1xuXG4gICAgICByZXR1cm4gdHJ1ZSBpZiBuYW1lIGlzIHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIChyZWN0LnRvcCA+PSAwIHx8IHJlY3QuYm90dG9tID49IDApICYmXG4gICAgICAgIChyZWN0LnRvcCA8PSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0KVxuICAgICAgKVxuICAgICAgICBtaWRkbGUgPSB3aW5kb3cuaW5uZXJIZWlnaHQvMlxuICAgICAgICBpZiByZWN0LnRvcCA8IG1pZGRsZSAmJiByZWN0LmJvdHRvbSA+IG1pZGRsZVxuICAgICAgICAgIHJlc3VsdChuYW1lKVxuIiwiR2F0ZSA9XG5cbiAgaTogLT5cblxuICAgIEBoYW5kbGVycygpXG5cbiAgICBfLm9mZignLmdhdGUnKSBpZiAgQ29va2llcy5nZXQoJ2dhdGUnKSBpc250IHVuZGVmaW5lZFxuXG4gIGhhbmRsZXJzOiAtPlxuXG4gICAgJCgnLmdhdGUgPiAuZ3JhZGllbnQgPiAubWlkZGxlID4gLmJ1dHRvbnMgPiAuYnV0dG9uJykub24gJ2NsaWNrJywgQHllc25vXG5cbiAgeWVzbm86IC0+XG5cbiAgICByZXR1cm4gbG9jYXRpb24uaHJlZiA9ICdodHRwOi8vd3d3LmJ1aWxkYWJlYXIuY29tLycgaWYgJCh0aGlzKS50ZXh0KCkgaXMgJ05PJ1xuICAgIGlmICQodGhpcykudGV4dCgpIGlzICdZRVMnXG4gICAgICBfLm9mZiAnLmdhdGUnXG4gICAgICBDb29raWVzLnNldCAnZ2F0ZScsIHRydWVcbiIsIkluZGV4ID1cbiAgb2Zmc2V0OiAtODZcblxuICBpOiAtPlxuXG4gICAgR2F0ZS5pKClcblxuICAgIERlbGF5LmkoKVxuICAgIFByb2R1Y3QuaSgpXG5cbiAgICBpZiAkKHdpbmRvdykud2lkdGgoKSA8IDEwMDBcbiAgICAgIEBvZmZzZXQgPSAwXG5cbiAgICBAaGFuZGxlcnMoKVxuXG4gICAgc2V0SW50ZXJ2YWwgSW5kZXgubWVudSwgNTAwXG5cbiAgaGFuZGxlcnM6IC0+XG4gICAgJCgnaGVhZGVyID4gLmJ1cmdlcicpLmNsaWNrIEBidXJnZXJIYW5kbGVyXG4gICAgJCgnaGVhZGVyID4gLmlubmVyID4gLm1lbnUgPiAuaXRlbXMgPiAuaW5uZXIgPiAuaXRlbScpLmNsaWNrIEBtZW51SGFuZGxlclxuICAgICQoJ2hlYWRlciA+IC5pbm5lciA+IC5sb2dvJykuY2xpY2sgQG1lbnVIYW5kbGVyXG5cbiAgYnVyZ2VySGFuZGxlcjogLT5cbiAgICBfLnN3YXAgJ2hlYWRlciA+IC5idXJnZXInXG4gICAgXy5zd2FwICdoZWFkZXIgPiAuaW5uZXIgPiAubWVudSA+IC5pdGVtcydcblxuICBtZW51SGFuZGxlcjogLT5cbiAgICBfLm9uICdoZWFkZXIgPiAuYnVyZ2VyJ1xuICAgIF8ub2ZmICdoZWFkZXIgPiAuaW5uZXIgPiAubWVudSA+IC5pdGVtcydcbiAgICBJbmRleC5zZWN0aW9uICQodGhpcykuZGF0YSAnaXRlbSdcblxuICBzZWN0aW9uOiAoc2VjdGlvbikgLT5cbiAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAkKCdodG1sLCBib2R5Jykuc2Nyb2xsVG8gXCIjI3tzZWN0aW9ufVwiLFxuICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICAgIG9mZnNldDogSW5kZXgub2Zmc2V0XG4gICAgICBsb2NhdGlvbi5oYXNoID0gc2VjdGlvblxuICAgICwgMTAwXG5cbiAgbWVudTogLT5cblxuICAgIEZvbGQudmlld3MgJCgnLnNlY3Rpb24nKSwgKHJlc3VsdCkgLT5cbiAgICAgIF8ub2ZmICdoZWFkZXIgPiAuaW5uZXIgPiAubWVudSA+IC5pdGVtcyA+IC5pbm5lciA+IC5pdGVtJ1xuICAgICAgXy5vbiBcIi5pdGVtXyN7cmVzdWx0fVwiXG5cbiAgICAgIGlmIHJlc3VsdCBpc250ICdwcm9kdWN0cycgYW5kIFByb2R1Y3QuZGV0YWlscyBpcyB0cnVlXG4gICAgICAgIFByb2R1Y3QuY2xvc2VDbGljaygpXG4iLCJNYXAgPVxuICBtYXA6IGZhbHNlXG4gIHBsYWNlczoge31cblxuICBpOiAtPlxuXG5cbiAgICBAbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksXG4gICAgICBjZW50ZXI6IGxhdDogMzcuNzc4NDA3LCBsbmc6IC0xMjIuMzk3MTI4XG4gICAgICB6b29tOiAxMVxuICAgICAgc3R5bGVzOiBAc3R5bGVzXG4gICAgICBvcHRpb25zOiBAb3B0aW9uc1xuXG4gICAgc2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuUGxhY2VzU2VydmljZShAbWFwKVxuXG4gICAgZm9yIHZlbmRvciBpbiBjb25maWcudmVuZG9yc1xuICAgICAgc2VydmljZS5nZXREZXRhaWxzXG4gICAgICAgIHBsYWNlSWQ6IHZlbmRvci5wbGFjZUlkXG4gICAgICAsIChyZXN1bHQsIHN0YXR1cykgLT5cbiAgICAgICAgTWFwLnBsYWNlc1tyZXN1bHQucGxhY2VfaWRdID0gcmVzdWx0XG4gICAgICAgIE1hcC5tYXJrZXJzKCkgaWYgXy5vYmpjKGNvbmZpZy52ZW5kb3JzKSBpcyBfLm9iamMoTWFwLnBsYWNlcylcblxuXG4gICAgQGhhbmRsZXJzKClcblxuICBoYW5kbGVyczogLT5cbiAgICQoJy5zZWN0aW9uX2xvY2F0aW9ucyA+IC5wbGFjZSA+IC5jbG9zZScpLmNsaWNrIEBwbGFjZUNsb3NlSGFuZGxlclxuICBtYXJrZXJzOiAtPlxuXG4gICAgbWFya2VycyA9IFtdXG5cbiAgICBmb3IgaWQsIHBsYWNlIG9mIEBwbGFjZXNcblxuICAgICAgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlclxuICAgICAgICBtYXA6IE1hcC5tYXBcbiAgICAgICAgcG9zaXRpb246IHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uXG4gICAgICAgIGljb246XG4gICAgICAgICAgdXJsOiAnL2ltYWdlcy9tYXAvbWFya2VyLnBuZycsXG4gICAgICAgICAgc2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoNjAsIDYwKVxuICAgICAgICAgIG9yaWdpbjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDAsIDApXG4gICAgICAgIHBsYWNlOlxuICAgICAgICAgIHBsYWNlSWQ6IHBsYWNlLnBsYWNlX2lkXG4gICAgICAgICAgbG9jYXRpb246IHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uXG4gICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lciBtYXJrZXIsICdjbGljaycsIE1hcC5tYXJrZXJIYW5kbGVyXG4gICAgICBtYXJrZXJzLnB1c2ggbWFya2VyXG5cbiAgICBtYXJrZXJDbHVzdGVyID0gbmV3IE1hcmtlckNsdXN0ZXJlciBNYXAubWFwLCBtYXJrZXJzLFxuICAgICAgaW1hZ2VQYXRoOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvZXhhbXBsZXMvbWFya2VyY2x1c3RlcmVyL20nXG5cbiAgbWFya2VySGFuZGxlcjogLT5cblxuICAgcGxhY2UgPSBNYXAucGxhY2VzW3RoaXMucGxhY2UucGxhY2VJZF1cblxuXG4gICBpZiBwbGFjZS5waG90b3NcbiAgICAkKCcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UgPiAuaW5uZXIgPiAuaW1hZ2UnKS5hdHRyICdzcmMnLHBsYWNlLnBob3Rvc1swXS5nZXRVcmwgbWF4V2lkdGg6IDI2MCwgbWF4SGVpZ2h0OiAyMDBcbiAgICBfLm9uICcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UgPiAuaW5uZXIgPiAuaW1hZ2UnXG4gICBlbHNlXG4gICAgXy5vZmYgJy5zZWN0aW9uX2xvY2F0aW9ucyA+IC5wbGFjZSA+IC5pbm5lciA+IC5pbWFnZSdcblxuICAgJCgnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlID4gLmlubmVyID4gLm5hbWUnKS50ZXh0IHBsYWNlLm5hbWVcbiAgICQoJy5zZWN0aW9uX2xvY2F0aW9ucyA+IC5wbGFjZSA+IC5pbm5lciA+IC5uYW1lJykuYXR0ciAnaHJlZicsIHBsYWNlLnVybFxuICAgJCgnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlID4gLmlubmVyID4gLmFkZHJlc3MnKS5odG1sIHBsYWNlLmZvcm1hdHRlZF9hZGRyZXNzXG4gICAkKCcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UgPiAuaW5uZXIgPiAucGhvbmUnKS5odG1sIHBsYWNlLmZvcm1hdHRlZF9waG9uZV9udW1iZXJcblxuICAgXy5vbiAnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlJ1xuXG4gICBNYXAubWFwLnNldFpvb20oMTYpXG4gICBNYXAubWFwLnNldENlbnRlcih0aGlzLmdldFBvc2l0aW9uKCkpXG5cbiAgIGNvbnNvbGUubG9nIHBsYWNlXG5cblxuICBwbGFjZUNsb3NlSGFuZGxlcjogLT5cbiAgICBfLm9mZiAnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlJ1xuICAgIE1hcC5tYXAuc2V0Wm9vbSgxMSlcbiAgICBcbiAgb3B0aW9uczpcbiAgICBzY3JvbGx3aGVlbDogZmFsc2VcbiAgICBtYXBUeXBlQ29udHJvbDogZmFsc2VcbiAgICBmdWxsc2NyZWVuQ29udHJvbDogZmFsc2VcblxuICBzdHlsZXM6XG4gICAgW1xuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAnYWRtaW5pc3RyYXRpdmUnXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdsYWJlbHMudGV4dC5maWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAnY29sb3InOiAnIzllNWQwNycgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdhZG1pbmlzdHJhdGl2ZS5jb3VudHJ5J1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnbGFiZWxzLnRleHQuZmlsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbIHsgJ2NvbG9yJzogJyNmMjk5MzQnIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAnYWRtaW5pc3RyYXRpdmUubG9jYWxpdHknXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdsYWJlbHMudGV4dC5maWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAnY29sb3InOiAnIzllNWQwNycgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdsYW5kc2NhcGUnXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdhbGwnXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICdjb2xvcic6ICcjZjhmNWYyJyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3BvaSdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2FsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbIHsgJ3Zpc2liaWxpdHknOiAnb2ZmJyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3JvYWQnXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdhbGwnXG4gICAgICAgICdzdHlsZXJzJzogW1xuICAgICAgICAgIHsgJ3NhdHVyYXRpb24nOiAtMTAwIH1cbiAgICAgICAgICB7ICdsaWdodG5lc3MnOiA0NSB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3JvYWQnXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdnZW9tZXRyeS5maWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAnY29sb3InOiAnI2YyOTkzNCcgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdyb2FkLmhpZ2h3YXknXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdhbGwnXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICd2aXNpYmlsaXR5JzogJ3NpbXBsaWZpZWQnIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAncm9hZC5hcnRlcmlhbCdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2xhYmVscy5pY29uJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAndmlzaWJpbGl0eSc6ICdvZmYnIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAndHJhbnNpdCdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2FsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbIHsgJ3Zpc2liaWxpdHknOiAnb2ZmJyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3dhdGVyJ1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnYWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFtcbiAgICAgICAgICB7ICdjb2xvcic6ICcjMDBhZmFhJyB9XG4gICAgICAgICAgeyAndmlzaWJpbGl0eSc6ICdvbicgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuXG4iLCJQcm9kdWN0ID1cbiAgdGw6IGZhbHNlXG4gIGRldGFpbHM6IGZhbHNlXG5cbiAgaTogLT5cbiAgICBAdGwgPSBuZXcgVGltZWxpbmVNYXggcmVwZWF0OiAwXG5cbiAgICBAaGFuZGxlcnMoKVxuXG4gIGhhbmRsZXJzOiAtPlxuXG4gICAgJCgnLnNlY3Rpb25fcHJvZHVjdHMgPiAucHJvZHVjdGxpc3QgPiAucHJvZHVjdCcpLmNsaWNrIEBwcm9kdWN0Q2xpY2tcbiAgICAkKCcuc2VjdGlvbl9wcm9kdWN0cyA+IC5kZXRhaWxzID4gLmRldGFpbCA+IC5jbG9zZScpLmNsaWNrIEBjbG9zZUNsaWNrXG4gICAgJCgnLnNlY3Rpb25fcHJvZHVjdHMgPiAuZGV0YWlscyA+IC5kZXRhaWwgPiAuY29weSA+IC5pbm5lciA+IC5mbGF2b3JzID4gLmZsYXZvciA+IC5uYW1lJykuY2xpY2sgQGZsYXZvclxuXG4gIGZsYXZvcjogLT5cbiAgICBwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpXG4gICAgc3RhdGUgPSBfLnN0YXRlIHBhcmVudFxuICAgIGNvbnNvbGUubG9nIHN0YXRlXG4gICAgXy5vZmYgJy5mbGF2b3JzID4gLmZsYXZvcidcbiAgICBpZiBzdGF0ZVxuICAgICAgXy5vZmYgcGFyZW50XG4gICAgZWxzZVxuICAgICAgXy5vbiBwYXJlbnRcblxuXG4gIHByb2R1Y3RDbGljazogLT5cbiAgICBwcm9kdWN0ID0gJCh0aGlzKS5kYXRhICdwcm9kdWN0J1xuICAgIF8ub24gXCJbaWQ9J2RldGFpbCAje3Byb2R1Y3R9J11cIlxuICAgIF8ub24gXCJbaWQ9J2ltYWdlICN7cHJvZHVjdH0nXVwiXG4gICAgUHJvZHVjdC5kZXRhaWxzID0gdHJ1ZVxuICAgIGlmIEluZGV4Lm9mZnNldCBpc250IDBcbiAgICAgIEluZGV4LnNlY3Rpb24gJ3Byb2R1Y3RzJ1xuXG5cbiAgICBlbXB0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgJ3N1bkVtcHR5J1xuICAgIGZvciBkaXYgaW4gZW1wdHlcbiAgICAgIHRsID0gbmV3IFRpbWVsaW5lTWF4IHJlcGVhdDogMFxuICAgICAgdGwudG8gZGl2LCAxLjAsIHttb3JwaFNWRzoge3NoYXBlOiAnI3N1bkZpbGxlZCcsIHNoYXBlSW5kZXg6IDN9LCBlYXNlOkV4cG8uZWFzZUluT3V0fVxuXG4gIGNsb3NlQ2xpY2s6IC0+XG4gICAgZW1wdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lICdzdW5FbXB0eSdcbiAgICBmb3IgZGl2IGluIGVtcHR5XG4gICAgICB0bCA9IG5ldyBUaW1lbGluZU1heCByZXBlYXQ6IDBcbiAgICAgIHRsLnRvIGRpdiwgMC4wMSwge21vcnBoU1ZHOiAnI3N1bkVtcHR5JywgZWFzZTpFeHBvLmVhc2VJbk91dH1cblxuICAgIF8ub2ZmICcuc2VjdGlvbl9wcm9kdWN0cyA+IC5kZXRhaWxzID4gLmRldGFpbCdcbiAgICBfLm9mZiAnLnNlY3Rpb25fcHJvZHVjdHMgPiAuZGV0YWlscyA+IC5pbWFnZSdcbiAgICBQcm9kdWN0LmRldGFpbHMgPSBmYWxzZVxuICAgIFxuIl19
