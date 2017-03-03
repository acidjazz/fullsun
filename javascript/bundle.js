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
      "thumb": "pen_set_thumb.jpg",
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
      "thumb": "rise_thumb.jpg",
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
      "thumb": "shine_thumb.jpg",
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
      "thumb": "flowers_thumb.jpg",
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
      "name": "Humboldt Patient Resource Center",
      "placeId": "ChIJW3sRtAVX0VQR7q7_hDDcnAs",
      "image": "hprc.jpg"
    }, {
      "name": "Blum Oak",
      "placeId": "ChIJNUi-AqyAj4AROCPitWxtpsM",
      "image": "blum.jpg"
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
      return Cookies.set('gate', true, {
        expires: 1
      });
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
        lat: 39.6092474,
        lng: -123.4453755
      },
      zoom: 7,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjI1Ni5jb2ZmZWUiLCJjb25maWcuY29mZmVlIiwiZGVsYXkuY29mZmVlIiwiZm9sZC5jb2ZmZWUiLCJnYXRlLmNvZmZlZSIsImluZGV4LmNvZmZlZSIsIm1hcC5jb2ZmZWUiLCJwcm9kdWN0LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBLENBQUE7RUFBQTs7QUFBQSxDQUFBLEdBRUU7RUFBQSxDQUFBLEVBQUcsU0FBQTtXQUNELElBQUMsQ0FBQSxPQUFELEdBQVcsV0FBQSxDQUFZLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLElBQWIsQ0FBWixFQUE2QixHQUE3QjtFQURWLENBQUg7RUFHQSxDQUFBLEVBQ0U7SUFBQSxNQUFBLEVBQVEsS0FBUjtJQUNBLE9BQUEsRUFBUyxDQURUO0dBSkY7RUFPQSxJQUFBLEVBQU0sU0FBQyxFQUFELEVBQUssTUFBTCxFQUFtQixHQUFuQjs7TUFBSyxTQUFPOzs7TUFBTyxNQUFJOztJQUUzQixJQUFHLENBQUEsQ0FBQSxFQUFBLFlBQWtCLE1BQWxCLENBQUg7TUFDRSxFQUFBLEdBQUssQ0FBQSxDQUFFLEVBQUYsRUFEUDs7SUFHQSxJQUFHLE1BQUEsS0FBWSxLQUFmO01BQ0UsRUFBRSxDQUFDLFdBQUgsQ0FBZSxNQUFmLEVBREY7O0lBR0EsSUFBRyxHQUFBLEtBQVMsS0FBWjtNQUNFLEVBQUUsQ0FBQyxRQUFILENBQVksR0FBWixFQURGOztBQUdBLFdBQU87RUFYSCxDQVBOO0VBb0JBLEdBQUEsRUFBSyxTQUFDLEVBQUQsRUFBSyxDQUFMOztNQUFLLElBQUU7O0lBRVYsSUFBRyxDQUFDLENBQUMsTUFBRixJQUFhLENBQUMsQ0FBQyxPQUFGLEdBQVksQ0FBNUI7TUFFRSxJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4sRUFBVSxLQUFWLEVBQWlCLFFBQWpCO01BQ0EsVUFBQSxDQUFXLFNBQUE7UUFDVCxJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4sRUFBVSxRQUFWLEVBQW9CLEtBQXBCO2VB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QU4sQ0FBYyxVQUFkLEVBREY7O0lBSUEsS0FBQSxHQUFRLFFBQVEsQ0FBQyxzQkFBVCxDQUFnQyxVQUFoQztBQUNSO1NBQUEsdUNBQUE7O01BQ0UsRUFBQSxHQUFLLElBQUksV0FBSixDQUFnQjtRQUFBLE1BQUEsRUFBUSxDQUFSO09BQWhCO21CQUNMLEVBQUUsQ0FBQyxFQUFILENBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0I7UUFBQyxRQUFBLEVBQVU7VUFBQyxLQUFBLEVBQU8sWUFBUjtVQUFzQixVQUFBLEVBQVksQ0FBbEM7U0FBWDtRQUFpRCxJQUFBLEVBQUssSUFBSSxDQUFDLFNBQTNEO09BQWhCO0FBRkY7O0VBVlksQ0F6QmQ7RUF1Q0EsVUFBQSxFQUFZLFNBQUE7QUFDVixRQUFBO0lBQUEsS0FBQSxHQUFRLFFBQVEsQ0FBQyxzQkFBVCxDQUFnQyxVQUFoQztBQUNSLFNBQUEsdUNBQUE7O01BQ0UsRUFBQSxHQUFLLElBQUksV0FBSixDQUFnQjtRQUFBLE1BQUEsRUFBUSxDQUFSO09BQWhCO01BQ0wsRUFBRSxDQUFDLEVBQUgsQ0FBTSxHQUFOLEVBQVcsSUFBWCxFQUFpQjtRQUFDLFFBQUEsRUFBVSxXQUFYO1FBQXdCLElBQUEsRUFBSyxJQUFJLENBQUMsU0FBbEM7T0FBakI7QUFGRjtJQUlBLENBQUMsQ0FBQyxHQUFGLENBQU0sd0NBQU47SUFDQSxDQUFDLENBQUMsR0FBRixDQUFNLHVDQUFOO1dBQ0EsT0FBTyxDQUFDLE9BQVIsR0FBa0I7RUFSUixDQXZDWiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJfID1cblxuICBpOiAtPlxuICAgIEBjb25zb2xlID0gc2V0SW50ZXJ2YWwoQGRldGVjdC5iaW5kKEApLCAyMDApXG5cbiAgcDpcbiAgICBvZmZpbmc6IGZhbHNlXG4gICAgb2ZmdGltZTogMFxuXG4gIHR1cm46IChlbCwgcmVtb3ZlPWZhbHNlLCBhZGQ9ZmFsc2UpIC0+XG5cbiAgICBpZiBlbCBub3QgaW5zdGFuY2VvZiBqUXVlcnlcbiAgICAgIGVsID0gJChlbClcblxuICAgIGlmIHJlbW92ZSBpc250IGZhbHNlXG4gICAgICBlbC5yZW1vdmVDbGFzcyhyZW1vdmUpXG5cbiAgICBpZiBhZGQgaXNudCBmYWxzZVxuICAgICAgZWwuYWRkQ2xhc3MoYWRkKVxuXG4gICAgcmV0dXJuIHRydWVcblxuICBvZmY6IChlbCwgcD17fSkgLT5cblxuICAgIGlmIHAub2ZmaW5nIGFuZCBwLm9mZnRpbWUgPiAwXG5cbiAgICAgIEB0dXJuIGVsLCBmYWxzZSwgJ29mZmluZydcbiAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgQHR1cm4gZWwsICdvZmZpbmcnLCBmYWxzZVxuICAgICAgICBAdHVybiBlbCwgJ29uJywgJ29mZidcbiAgICAgICwgcC5vZmZ0aW1lKjEwMDAgKyAxMDBcblxuICAgIGVsc2VcbiAgICAgIEB0dXJuIGVsLCAnb24nLCAnb2ZmJ1xuXG4gICAgcmV0dXJuXG5cbiAgb246IChlbCwgcCkgLT5cbiAgICBAdHVybiBlbCwgJ29mZicsICdvbidcblxuICBzdGF0ZTogKGVsKSAtPlxuICAgIGlmIGVsIG5vdCBpbnN0YW5jZW9mIGpRdWVyeVxuICAgICAgZWwgPSAkKGVsKVxuXG4gICAgaWYgZWwuaGFzQ2xhc3MgJ29mZidcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIGlmIGVsLmhhc0NsYXNzICdvbidcbiAgICAgIHJldHVybiB0cnVlXG5cbiAgICByZXR1cm4gbnVsbFxuXG4gIHN3YXA6IChlbCwgcCkgLT5cblxuICAgIGlmIGVsIG5vdCBpbnN0YW5jZW9mIGpRdWVyeVxuICAgICAgZWwgPSAkKGVsKVxuXG4gICAgaWYgZWwuaGFzQ2xhc3MgJ29mZidcbiAgICAgIEBvbiBlbCwgcFxuICAgIGVsc2VcbiAgICAgIEBvZmYgZWwsIHBcblxuICAgIHJldHVyblxuXG4gIGVuY29kZTogKHN0cikgLT5cbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cilcbiAgICAgIC5yZXBsYWNlKC8hL2csICclMjEnKVxuICAgICAgLnJlcGxhY2UoLycvZywgJyUyNycpXG4gICAgICAucmVwbGFjZSgvXFwoL2csICclMjgnKVxuICAgICAgLnJlcGxhY2UoL1xcKS9nLCAnJTI5JylcbiAgICAgIC5yZXBsYWNlKC9cXCovZywgJyUyQScpXG4gICAgICAucmVwbGFjZSgvJTIwL2csICcrJylcblxuICB0OiAoY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsIHZhbHVlKSAtPlxuICAgIF9nYXEucHVzaCBbJ190cmFja0V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsIHZhbHVlXVxuXG4gIHJhbmQ6IChtaW4sIG1heCkgLT5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KSArIG1pblxuXG4gIGhleDJyZ2I6IChoZXgpIC0+XG4gICAgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleClcbiAgICByOiBwYXJzZUludChyZXN1bHRbMV0sIDE2KSxcbiAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcbiAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KVxuIFxuICBvYmpjOiAob2JqKSAtPlxuICAgIChrIGZvciBvd24gayBvZiBvYmopLmxlbmd0aFxuXG4gIGxvYWQ6IChzY3JpcHQsIGluaXRpYXRlLCBjb21wbGV0ZSkgLT5cblxuICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAnc2NyaXB0J1xuICAgIGVsLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0J1xuICAgIGVsLnNyYyA9IHNjcmlwdFxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIgJ2xvYWQnICwgKGUpIC0+XG4gICAgICBjb21wbGV0ZSgpIGlmIHR5cGVvZiBjb21wbGV0ZSBpcyAnZnVuY3Rpb24nXG4gICAgICB3aW5kb3dbaW5pdGlhdGVdLmkoKSBpZiBpbml0aWF0ZSBpc250IHVuZGVmaW5lZCBhbmQgaW5pdGlhdGUgaXNudCBmYWxzZVxuICAgICwgZmFsc2VcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpXG5cbiAgbGxjOiAtPlxuICAgIGFzY2lpID0gXCJcIlwiXG5cbiAgICAgICVjbW1tLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4vbW1tXG4gICAgICBtbW8uLi4uLi4uLi4uLi4uLi4uLTo6Ly86Oi0uLi4uLi4uLTo6Ojo6Ojo6Ojo6OjotLi4uLi4uLi4tOjovLy86LS5vbW1cbiAgICAgIG1kLS4uLi4uLi4uLi4uLi46K3loZGRkZGRkaHkrLS4uLi4vZGRkZGRkZGRkZGRkZCsuLi4uLi4vc2hkZGRkZGRkeW9kbVxuICAgICAgbW8uLi4uLi4uLi4uLi4uLWhtbW1oeXl5eWRtbW1oOi4uLi9tbW1taGhoaGhoaGhoKy4uLi46eWRtbWRoeXl5aGRkb29tXG4gICAgICBtLS4uLi4uLi4uLi4uLi4uLXNzOi0uLi4uLXltbW15Li4uL21tbW0tLS0tLS0tLS0uLi4uOmRtbW1zOi0uLi4tOi8uLW1cbiAgICAgIGQuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4ueW1tbXkuLi4vbW1tbS0vK29vbys6LS4uLi55bW1teS06K29vbysvLS4uZFxuICAgICAgaC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uOnNtbW1kOi4uLi9tbW1taG1tbW1tbWRoKy4uLmRtbW1zaGRtbW1tbW1ocy1oXG4gICAgICBoLi4uLi4uLi4uLi4uLi4uLi4uLi4uOnNkbW1keTouLi4uOmhoZGhvKy8vK3ltbW1tKy4uZG1tbWR5by8vK3NkbW1taGhcbiAgICAgIGQuLi4uLi4uLi4uLi4uLi4uLi4tK3lkbW1keS8uLi4uLi4uLS06Li4uLi4uLnNtbW1oLi55bW1tcy4uLi4uLjptbW1tbVxuICAgICAgbS0uLi4uLi4uLi4uLi4uLi06c2htbW1kcy8tLS0tLS4uLi46cy8tLS4uLi06aG1tbXMuLjpkbW1kLy0uLi4tb21tbW1tXG4gICAgICBtby4uLi4uLi4uLi4uLi4uaG1tbW1tbWhoaGhoaGhoLi4uK2RtbWRoeXl5aGRtbW15LS4uLi9obW1taHl5eWhtbW1kaG1cbiAgICAgIG1kLS4uLi4uLi4uLi4uLi5kZGRkZGRkZGRkZGRkZGQuLi4tK3NoZGRkZGRkZGh5Ly0uLi4uLi1veWRkZGRkZGRobzpkbVxuICAgICAgbW1vLi4uLi4uLi4uLi4uLjo6Ojo6Ojo6Ojo6Ojo6Oi4uLi4uLi4tOi8vLzo6LS4uLi4uLi4uLi4uLTovLy86LS4ub21tXG4gICAgICBtbW0vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9tbW1cblxuICAgICAgOjogc3ludGFjdGljIHN1Z2FyIGJ5IDI1NlxuICAgICAgOjogaHR0cDovLzI1Ni5pby9cbiAgICAgIDo6ICN7Y29uZmlnLm1ldGEucmVwb31cbiAgICBcIlwiXCJcbiAgICBjb25zb2xlLmxvZyBhc2NpaSwgXCJjb2xvcjogZ3JleTsgZm9udC1mYW1pbHk6IE1lbmxvLCBtb25vc3BhY2U7XCJcblxuICBkZXRlY3Q6IC0+XG4gICAgaWYgKCgod2luZG93Lm91dGVySGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0KSA+IDEwMCkgfHwgKCh3aW5kb3cub3V0ZXJXaWR0aCAtIHdpbmRvdy5pbm5lcldpZHRoKSA+IDEwMCkpXG4gICAgICBAbGxjKClcbiAgICAgIGNsZWFySW50ZXJ2YWwgQGNvbnNvbGVcblxuXy5pKClcbiIsImNvbmZpZyA9IHtcImNvbG9yXCI6e1wiYmx1ZTFcIjpcIiMwMEFGQUFcIixcIm9yYW5nZTFcIjpcIiNGMjk5MzRcIixcIm9yYW5nZTJcIjpcIiM5RTVEMDdcIixcIm9yYW5nZTNcIjpcIiNEMUE5N0VcIixcImtoYWtpMVwiOlwiI0NBQUY5MFwiLFwicGVhY2gxXCI6XCIjRjhGNUYyXCIsXCJ3aGl0ZTFcIjpcIiNmZmZmZmZcIixcImJsYWNrMVwiOlwiIzAwMDAwMFwiLFwiZ3JleTFcIjpcIiM3Nzc3NzdcIn0sXCJmb250XCI6e1wiaDFcIjp7XCJmb250LWZhbWlseVwiOlwiYXF1aWxvbmUgcmVndWxhclwiLFwiZm9udC1zaXplXCI6XCI0OHB4XCJ9LFwiaDJcIjp7XCJmb250LWZhbWlseVwiOlwic2Fja2VycyBnb3RoaWNcIixcImZvbnQtc2l6ZVwiOlwiMjJweFwiLFwibGV0dGVyLXNwYWNpbmdcIjpcIjRweFwifSxcImgzXCI6e1wiZm9udC1mYW1pbHlcIjpcInNhY2tlcnMgZ290aGljXCIsXCJmb250LXNpemVcIjpcIjE2cHhcIixcImxldHRlci1zcGFjaW5nXCI6XCIycHhcIixcImxpbmUtaGVpZ2h0XCI6XCIyMnB4XCJ9LFwiaDRcIjp7XCJmb250LWZhbWlseVwiOlwiYXF1aWxvbmUgcmVndWxhclwiLFwiZm9udC1zaXplXCI6XCIzMnB4XCJ9LFwiYzFcIjp7XCJmb250LWZhbWlseVwiOlwiYXZlcnRhIGxpZ2h0XCIsXCJmb250LXNpemVcIjpcIjE4cHhcIn0sXCJjMXNcIjp7XCJmb250LWZhbWlseVwiOlwiYXZlcnRhIGxpZ2h0XCIsXCJmb250LXNpemVcIjpcIjE0cHhcIn0sXCJjMXNzXCI6e1wiZm9udC1mYW1pbHlcIjpcImF2ZXJ0YSBsaWdodFwiLFwiZm9udC1zaXplXCI6XCIxMHB4XCJ9LFwiYzFzYlwiOntcImZvbnQtZmFtaWx5XCI6XCJhdmVydGEgYm9sZFwiLFwiZm9udC1zaXplXCI6XCIxNHB4XCJ9LFwiYzJcIjp7XCJmb250LWZhbWlseVwiOlwiYXZlcnRhIGJvbGRcIixcImZvbnQtc2l6ZVwiOlwiMjhweFwifSxcImMzXCI6e1wiZm9udC1mYW1pbHlcIjpcImF2ZXJ0YSBib2xkXCIsXCJmb250LXNpemVcIjpcIjE0cHhcIn0sXCJjM3NcIjp7XCJmb250LWZhbWlseVwiOlwiYXZlcnRhIGJvbGRcIixcImZvbnQtc2l6ZVwiOlwiMTFweFwifSxcImM0XCI6e1wiZm9udC1mYW1pbHlcIjpcImF2ZXJ0YSBib2xkXCIsXCJmb250LXNpemVcIjpcIjIwcHhcIn0sXCJjNVwiOntcImZvbnQtZmFtaWx5XCI6XCJhdmVydGEgYm9sZFwiLFwiZm9udC1zaXplXCI6XCIxOHB4XCJ9LFwiYzZcIjp7XCJmb250LWZhbWlseVwiOlwiYXF1aWxvbmUgcmVndWxhclwiLFwiZm9udC1zaXplXCI6XCIxNnB4XCJ9fSxcIm1ldGFcIjp7XCJ1cmxcIjpcImh0dHA6Ly9mdWxsc3VuLmNvbS9cIixcInRpdGxlXCI6XCJmdWxsIHN1blwiLFwiZGVzY3JpcHRpb25cIjpcImNhbGlmb3JuaWEgY29uc2Npb3VzIGNhbm5hYmlzXCIsXCJrZXl3b3Jkc1wiOlwiZnVsbCBzdW4sIGNhbm5hYmlzLCBjYWxpZm9ybmlhXCIsXCJ0cmFja2luZ19pZFwiOjMxMzM3LFwic2hhcmVcIjpcImltYWdlcy9sb2dvMS5wbmdcIixcInJlcG9cIjpcImh0dHBzOi8vZ2l0aHViLmNvbS9hY2lkamF6ei9mdWxsc3VuXCIsXCJtYXBfYXBpX2tleVwiOlwiQUl6YVN5QUlxODRwamk0b3Z1bUFOWFhvbE1xa0d3UVg4a00xbUtjXCIsXCJlbWFpbFwiOlwiaW5mb0BmdWxsc3VuLmNvbVwiLFwiaW5zdGFncmFtXCI6XCJodHRwOi8vd3d3Lmluc3RhZ3JhbS5jb20vXCIsXCJ0d2l0dGVyXCI6XCJodHRwOi8vd3d3LnR3aXR0ZXIuY29tL1wiLFwiZmFjZWJvb2tcIjpcImh0dHA6Ly93d3cuZmFjZWJvb2suY29tL1wifSxcInByb2R1Y3RzXCI6W3tcIm5hbWVcIjpcInZhcGUgcGVuIHNldFwiLFwidGl0bGVcIjpcIkNhbm5hYmlzIE9pbCBWYXBvcml6YXRpb24gU2V0XCIsXCJkZXNjcmlwdGlvblwiOltcIkRlc2lnbmVkIGZvciBvbi10aGUtZ28gZW5qb3ltZW50LCB0aGlzIHByZW1pdW0gdmFwZSBzZXQgaW5jbHVkZXMgb3VyIFNpbmdsZSBPcmlnaW4gY2FubmFiaXMgb2lsLiBVc2UgdGhyb3VnaG91dCB0aGUgZGF5IHRvIGluY2l0ZSBjcmVhdGl2aXR5LCBjYWxtIHRoZSBtaW5kIG9yIGRlZXBlbiByZWxheGF0aW9uIGxldmVscy5cIixcIlNhdmUgeW91cnNlbGYgdGltZSBhbmQgZWZmb3J0LCB0aGlzIG9uZSBjYXJ0cmlkZ2UgY2FuIGJlIHVzZWQgZm9yIGVuZGxlc3Mgb2NjYXNpb25zLiBUaGUgcGVyZmVjdCBkb3NlIG9mIGdvb2RuZXNzIGFueXRpbWUgeW91IG5lZWQgaXQg4oCUIHN1bnVwIHRvIHN1bmRvd24uXCIsXCJJbmNsdWRlcyBiYXR0ZXJ5LCA1MDBtZyBjYXJ0cmlkZ2UgYW5kIGNoYXJnZXIuICBTb2x2ZW50IEZyZWUuIFByb2R1Y3QgdGVzdGVkIGFuZCBoZWxkICB0byB0aGUgaGlnaGVzdCBzdGFuZGFyZHMgZm9yIHB1cml0eSBhbmQgY29uc2lzdGVudCBUSEMgcG90ZW5jeS5cIixcIjxpPkV4cGVyaWVuY2U6IEEgY2xlYXItaGVhZGVkLCBmb2N1c2VkIGhpZ2ggcGVyZmVjdCBmb3IgZGF5dGltZSBhbmQgbmlnaHR0aW1lIHVzZS48L2k+XCJdLFwidGh1bWJcIjpcInBlbl9zZXRfdGh1bWIuanBnXCIsXCJpbWFnZVwiOlwicGVuX3NldC5qcGdcIixcImRldGFpbFwiOlt7XCJsZWZ0XCI6XCJUSENcIixcInJpZ2h0XCI6XCI+ODUlXCJ9LHtcImxlZnRcIjpcIlNUUkFJTlwiLFwicmlnaHRcIjpcIkh5YnJpZFwifSx7XCJsZWZ0XCI6XCJQUk9EVUNUIE9SSUdJTlwiLFwicmlnaHRcIjpcIkh1bWJvbGR0IENvdW50eSwgQ0FcIn1dfSx7XCJuYW1lXCI6XCJyaXNlXCIsXCJ0aXRsZVwiOlwiU29sdmVudC1GcmVlIFNpbmdsZSBPcmlnaW4gQ2FydHJpZGdlIFJlZmlsbFwiLFwiZGVzY3JpcHRpb25cIjpbXCJNb3JuaW5ncyBqdXN0IGdvdCBicmlnaHRlci4gT3VyIFJpc2UsIGFsbC1uYXR1cmFsLCBzaW5nbGUgb3JpZ2luIG9pbCBjYXJ0cmlkZ2VzIGFyZSBhdmFpbGFibGUgaW4gNCBkaWZmZXJlbnQgdGVycGVuZSBlbnJpY2hlZCBmbGF2b3JzOiBEYW5rIEJlcnJ5LCBFbmxpZ2h0ZW7igJ1taW504oCdLCBUcm9waUNhbGkgYW5kIE5hdHVyYWwuXCIsXCI8aT5TZWxlY3QgYSB0b25lIHRvIGVuaGFuY2UgeW91ciBkYXk6PC9pPlwiXSxcInRodW1iXCI6XCJyaXNlX3RodW1iLmpwZ1wiLFwiaW1hZ2VcIjpcInJpc2UuanBnXCIsXCJmbGF2b3JzXCI6W3tcIm5hbWVcIjpcIkRhbmsgQmVycnlcIixcImRlc2NcIjpbXCJJbWFnaW5lIHdha2luZyB1cCBmZWVsaW5nIGNvbXBsZXRlbHkgcmVmcmVzaGVkIGFuZCByZWFkeSB0byBjb25xdWVyIHRoZSBkYXkuXCIsXCJGZWVsOiBjcmVhdGl2ZSwgYWxlcnQsIGFuZCBpbnNwaXJlZFwiXX0se1wibmFtZVwiOlwiRW5saWdodGVu4oCdbWludOKAnVwiLFwiZGVzY1wiOltcIlRvIFlvZ2Egb3Igbm90IHRvIFlvZ2E/IFdoZXRoZXIgeW91IHN3ZWF0IHRocm91Z2ggaXQgb3Igc2xlcHQgdGhyb3VnaCBpdCwgd2UgZ290IHlvdSBjb3ZlcmVkLlwiLFwiRmVlbDogTWluZGZ1bCwgZm9jdXNlZCwgYW5kIGNhbG1cIl19LHtcIm5hbWVcIjpcIlRyb3BpQ2FsaVwiLFwiZGVzY1wiOltcIllvdSBob3BwZWQgb24gYSBwbGFuZSBhbmQganVzdCB0b3VjaGVkIGRvd24gb24gYSB0cm9waWNhbCBvYXNpcy4gV2VsY29tZSB0byBpc2xhbmQgbGl2aW5nLCBvcGVyYXRpb24gdW53aW5kLlwiLFwiRmVlbDogSGFwcHksIHJlbGF4ZWQsIGFuZCBjYXJlZnJlZVwiXX0se1wibmFtZVwiOlwiTmF0dXJhbFwiLFwiZGVzY1wiOltcIkdyZWVuIHNtb290aGllZCBmb3IgYnJlYWtmYXN0LCBhdGUgc2FsYWQgZm9yIGx1bmNoLCBwb3dlciBjeWNsZWQgYWZ0ZXIgd29yayDigJQgdGhhdCB3YXMgdGhlIGlkZWEgYW55d2F5cy5cIixcIkZlZWw6IGNsZWFyLWhlYWRlZCwgZW5lcmdpemVkLCBhbmQgcmVmcmVzaGVkXCJdfV0sXCJkZXRhaWxcIjpbe1wibGVmdFwiOlwiVEhDXCIsXCJyaWdodFwiOlwiPjg1JVwifSx7XCJsZWZ0XCI6XCJTVFJBSU5cIixcInJpZ2h0XCI6XCJIeWJyaWRcIn0se1wibGVmdFwiOlwiUFJPRFVDVCBPUklHSU5cIixcInJpZ2h0XCI6XCJIdW1ib2xkdCBDb3VudHksIENBXCJ9XX0se1wibmFtZVwiOlwic2hpbmVcIixcInRpdGxlXCI6XCJDbGVhciBDYW5uYWJpcyBDb25jZW50cmF0ZVwiLFwiZGVzY3JpcHRpb25cIjpbXCJTaGluZSBzdHJvbmdlciBhIGxpdHRsZSBsb25nZXIgd2l0aCBvdXIgMTAwJSBzb2x2ZW50LWZyZWUsIGNsZWFyIGNhbm5hYmlzIGNvbmNlbnRyYXRlLiBXZSB1c2UgYSBwcm9wcmlldGFyeSBleHRyYWN0aW9uIG1ldGhvZCB0byBkaXN0aWxsIGEgY2xlYW4sIGNsZWFyIG9pbCBmcm9tIG91ciBIaWdoLURlZmluaXRpb24sIFNpbmdsZSBPcmlnaW4gT0cgS3VzaC4gQW4gaW5kaWNhLWxlYW5pbmcgaHlicmlkLCBvdXIgb2lsIGlzIHRvdGFsbHkgcHVyZSBhbmQgdG90YWxseSBwb3RlbnQuXCIsXCJPdXIgY29uY2VudHJhdGVzIGNhbiBiZSB1c2VkIGluIGxvYWRhYmxlIHZhcGUgcGVucywgb2lsIHJpZ3MsIG9yIHNtZWFyZWQgb250byBqb2ludHMgZm9yIGEgbGl0dGxlIGV4dHJhIHN0cmVuZ3RoLlwiLFwiUHJvZHVjdCB0ZXN0ZWQgYW5kIGhlbGQgIHRvIHRoZSBoaWdoZXN0IHN0YW5kYXJkcyBmb3IgcHVyaXR5IGFuZCBjb25zaXN0ZW50IFRIQyBwb3RlbmN5LlwiLFwiRXhwZXJpZW5jZTogQSBiYWxhbmNlZCBib2R5IGFuZCBoZWFkIGhpZ2guIE1lbGxvdyAmIHJlbGF4ZWQuXCJdLFwidGh1bWJcIjpcInNoaW5lX3RodW1iLmpwZ1wiLFwiaW1hZ2VcIjpcInNoaW5lLmpwZ1wiLFwiZGV0YWlsXCI6W3tcImxlZnRcIjpcIlRIQ1wiLFwicmlnaHRcIjpcIj44NSVcIn0se1wibGVmdFwiOlwiU1RSQUlOXCIsXCJyaWdodFwiOlwiSHlicmlkXCJ9LHtcImxlZnRcIjpcIlBST0RVQ1QgT1JJR0lOXCIsXCJyaWdodFwiOlwiSHVtYm9sZHQgQ291bnR5LCBDQVwifV19LHtcIm5hbWVcIjpcImZsb3dlcnNcIixcInRpdGxlXCI6XCJGdWxsIEJsb29tc1wiLFwiZGVzY3JpcHRpb25cIjpbXCJOYXR1cmFsbHkgZ3Jvd24gYW5kIGhhcnZlc3RlZCB1bmRlciBIdW1ib2xkdCBDb3VudHkgc3Vuc2hpbmUsIG91ciBmbG93ZXJzIGFyZSBtZXRpY3Vsb3VzbHkgbW9uaXRvcmVkIGFuZCBoYW5kbGVkIHdpdGggdGhlIHV0bW9zdCBjYXJlIHRvIGVuc3VyZSBwcmVtaXVtIHF1YWxpdHkuXCIsXCJBcyBuYXRpdmUgSHVtYm9sZHQgZ3Jvd2Vycywgd2UgaGF2ZSBhIHB1bHNlIG9uIHdoYXTigJlzIGluIGRlbWFuZCB0byBtYWtlIHN1cmUgd2UgcHJvdmlkZSB0aGUgbmV3ZXN0IGFuZCBtb3N0IGV4Y2l0aW5nIHN0cmFpbnMuXCIsXCJBbGwgb2Ygb3VyIGZsb3dlcnMgYXJlIGxhYi10ZXN0ZWQgdGVzdGVkIGFuZCBoZWxkIHRvIHRoZSBoaWdoZXN0IHN0YW5kYXJkcyBmb3IgcHVyaXR5IGFuZCBjb25zaXN0ZW50IFRIQyBwb3RlbmN5LlwiXSxcInRodW1iXCI6XCJmbG93ZXJzX3RodW1iLmpwZ1wiLFwiaW1hZ2VcIjpcImZsb3dlcnMuanBnXCIsXCJmbGF2b3JzXCI6W3tcIm5hbWVcIjpcIkhpZ2gtRGVmaW5pdGlvbiBPRyBLdXNoXCIsXCJkZXNjXCI6W1wiT25lIG9mIHRoZSBtb3N0IGxlZ2VuZGFyeSBjYW5uYWJpcyBzdHJhaW5zLCBPRyBLdXNoIGlzIGEgc3Ryb25nLCBJbmRpY2EtbGVhbmluZyBoeWJyaWQgcmVub3duZWQgZm9yIGl0cyBwb3dlcmZ1bCBwb3RlbmN5LCBtZWRpY2luYWwgcXVhbGl0aWVzIGFuZCB1bmlxdWUgdGFzdGUuIFRoZSBzdHJhaW4gc21lbGxzIGFuZCB0YXN0ZXMgbGlrZSBzd2VldCBsZW1vbnMgd2l0aCBhIGhpbnQgb2Ygd29vZHkgZWFydGhpbmVzcy4gV2hhdCBtYWtlcyBvdXJzIEhpZ2gtRGVmaW5pdGlvbj8gVGhhdOKAmXMgb3VyIGJlc3Qga2VwdCBzZWNyZXQuXCJdfSx7XCJuYW1lXCI6XCJTdW5zZXQgU2hlcmJlcnRcIixcImRlc2NcIjpbXCJBbiBJbmRpY2EtZG9taW5hbnQgaHlicmlkLCB0aGlzIGlzIGEgcG93ZXJmdWwgY3Jvc3MgYmV0d2VlbiB0aGUgR2lybCBTY291dCBDb29raWVzIGFuZCBQaW5rIFBhbnRpZXMgc3RyYWlucy4gS25vd24gZm9yIGl0cyB1cGxpZnRpbmcgam9sdCBvZiBjZXJlYnJhbCBlbmVyZ3ksIFN1bnNldCBTaGVyYmV0IHRhc3RlcyBsaWtlIHN3ZWV0IGNpdHJ1cyBhbmQgaG9uZXkgd2l0aCBhbiBlYXJ0aHkgYWZ0ZXJ0YXN0ZS5cIl19LHtcIm5hbWVcIjpcIlNvdXIgVGFuZ2llXCIsXCJkZXNjXCI6W1wiQW4gODAlIFNhdGl2YS1kb21pbmFudCBjcm9zcyBiZXR3ZWVuIEVhc3QgQ29hc3QgU291ciBEaWVzZWwgYW5kIFRhbmdpZSwgdGhpcyBzdHJhaW4gaXMga25vd24gZm9yIGl0cyBleHRyZW1lLCBtb3V0aHdhdGVyaW5nIGZsYXZvci4gU3Ryb25nIGNpdHJ1cyBub3RlcyBhcmUgbWV0IHdpdGggYW4gZWFydGh5IGRpZXNlbCBhZnRlcnRhc3RlLiBBIHdlbGwtYmFsYW5jZWQgc3RyYWluIHBlcmZlY3QgZm9yIGZ1bGwgYm9keSByZWxheGF0aW9uLlwiXX0se1wibmFtZVwiOlwiQmxhY2sgTGltZSBSZXNlcnZlXCIsXCJkZXNjXCI6W1wiQSBib3V0aXF1ZSwgSW5kaWNhIHN0cmFpbiB3aXRoIGEgcmVwdXRhYmxlIEVtZXJhbGQgVHJpYW5nbGUgaGVyaXRhZ2UuIEEgcG93ZXJmdWwgY3Jvc3MgYmV0d2VlbiBOb3J0aGVybiBMaWdodHMsIFB1cnBsZSBLdXNoIGFuZCBDaGVtZGF3ZyBTcGVjaWFsIFJlc2VydmUgc3RyYWlucy4gUmVmcmVzaGluZyBhbmQgZXh1YmVyYW50IHdpdGggYSBwcm9ub3VuY2VkIG1peCBvZiBzd2VldCBjaXRydXMsIHBlcHBlcnkgc3BpY2UgYW5kIGp1aWN5IGxpbWUuXCJdfV0sXCJkZXRhaWxcIjpbe1wibGVmdFwiOlwiVEhDXCIsXCJyaWdodFwiOlwiPjg1JVwifSx7XCJsZWZ0XCI6XCJTVFJBSU5cIixcInJpZ2h0XCI6XCJIeWJyaWRcIn0se1wibGVmdFwiOlwiUFJPRFVDVCBPUklHSU5cIixcInJpZ2h0XCI6XCJIdW1ib2xkdCBDb3VudHksIENBXCJ9XX1dLFwidmVuZG9yc1wiOlt7XCJuYW1lXCI6XCJIdW1ib2xkdCBQYXRpZW50IFJlc291cmNlIENlbnRlclwiLFwicGxhY2VJZFwiOlwiQ2hJSlczc1J0QVZYMFZRUjdxN19oRERjbkFzXCIsXCJpbWFnZVwiOlwiaHByYy5qcGdcIn0se1wibmFtZVwiOlwiQmx1bSBPYWtcIixcInBsYWNlSWRcIjpcIkNoSUpOVWktQXF5QWo0QVJPQ1BpdFd4dHBzTVwiLFwiaW1hZ2VcIjpcImJsdW0uanBnXCJ9XSxcImNvcHlcIjp7XCJhYm91dFwiOntcInRpdGxlXCI6XCJhYm91dCB1c1wiLFwiY29weXNcIjpbXCJXZSBhcmUgdGhlIHNtYWxsZXN0IGdyYWlucyBvZiByaWNoLCBoZWFsdGh5IHNvaWwuIFdlIGFyZSB0aGUgb3h5Z2VuIHRoaWNrIGFpciBwcm92aWRlZCBieSB0aGUgZm9yZXN0cyBvZiBIdW1ib2xkdCBDb3VudHkuIFdlIGFyZSB0aGUgY2FyaW5nIGhhbmRzIHRoYXQgdHVybiBoaWdoIHF1YWxpdHksIGNoZW1pY2FsLWZyZWUgY2FubmFiaXMgaW50byBiZWF1dGlmdWxseSBjcmFmdGVkIGNvbmNlbnRyYXRlcywgYWxsb3dpbmcgeW91ciBsaWZlIHRvIGJlIGEgbGl0dGxlIGVhc2llci5cIixcIkxhc3RseSwgd2UgYXJlIHRoZSByYXlzIG9mIHN1bnNoaW5lIHRoYXQgc3BpbGwgZG93biB1cG9uIHRoZSBtb3VudGFpbnRvcCDigJQgdGhlIGJyaWdodCBhbmQgbW9zdCBwb3dlcmZ1bCBzb3VyY2UgdGhhdCBlbnJpY2hlcyBhbGwgb2Ygb3VyIGNhbm5hYmlzIGF0IEZ1bGwgU3VuLlwiXX0sXCJjb250YWN0XCI6e1widGl0bGVcIjpcImNvbnRhY3QgdXNcIixcInN1YnRpdGxlXCI6XCJXYW50IG1vcmUgc3VuZ3Jvd24gZ29vZG5lc3M/XCJ9LFwicHJvY2Vzc1wiOntcInRpdGxlXCI6XCJvdXIgcHJvY2Vzc1wiLFwiY29weXNcIjpbXCJBbGwgb2Ygb3VyIHByb2R1Y3RzIGNvbnNpc3Qgb2YgU2luZ2xlIE9yaWdpbiwgSGlnaC1EZWZpbml0aW9uIE9HIEt1c2ggY2FubmFiaXMuIFdoaWxlIG90aGVycyBjYWxsIHRoaXMgdGhlaXIg4oCcUmVzZXJ2ZeKAnSB3ZSBjYWxsIHRoaXMgb3VyIFxcXCJBbGwgdGhlIFRpbWXigJ0uIFdlIGhhbmQgc2VsZWN0IG91ciBzbWFsbCBncm91cCBvZiBwcm9kdWNlcnMgZm9yIHRoZWlyIGNvbnNpc3RlbnQgY29tbWl0bWVudCB0byBxdWFsaXR5IGFuZCBleGNlbGxlbmNlLiBUaGV5IHdvcmsgdGhlaXIgbWFnaWMgd2l0aCBvdXIgd2hpY2ggYWxsb3dzIHVzIHRvIG1haW50YWluIHF1YWxpdHksIGNvbnNpc3RlbmN5IGFuZCBxdWFudGl0eS4gUmFpc2VkIG91dCBvZiB0aGUgbW9zdCByZXB1dGFibGUgZ3Jvd2luZyByZWdpb24gaW4gdGhlIHdvcmxkLCBvdXIgSHVtYm9sZHQgQ291bnR5IGZhcm1zIHN0YXlzIHJvb3RlZCBpbiBjb25zY2lvdXNseSBncm93aW5nIHRoZSBiZXN0IGFuZCBicmlnaHRlc3Qgc3VuZ3Jvd24gY2FubmFiaXMuXCIsXCJFeHRyYWN0aW5nIG9pbCBmcm9tIHBsYW50cyBoYXMgYmVlbiB3aWRlbHkgdXNlZCBhY3Jvc3MgaW5kdXN0cmllcyBmb3IgY2VudHVyaWVzLiBGaW5kaW5nIHRoZSByaWdodCBjYW5uYWJpcyBkaXN0aWxsYXRpb24gcHJvY2VzcyBoYXMgdGFrZW4geWVhcnMsIGJ1dCB3ZSBoYXZlIGRlc2lnbmVkIGFuZCBwZXJmZWN0ZWQgYSBtb2RlbCB0aGF0IGlzIGp1c3QgcmlnaHQgZm9yIHVzLiBPdXIgcHJvcHJpZXRhcnkgZXh0cmFjdCBtZXRob2QgaXMgZG9uZSBhdCBvdXIgc3RhdGUgb2YgdGhlIGFydCBmYWNpbGl0eSBpbiBIdW1ib2xkdCBDb3VudHkuIFRoZSByZXN1bHQgaXMgYW4gdWx0cmEgcmVmaW5lZCBvaWwgdGhhdCBpcyBsYWIgdGVzdGVkIGFuZCAxMDAlIHNvbHZlbnQtZnJlZSwgZXZlcnkgc2luZ2xlIHRpbWUuIFlvdXIgd2VsbC1iZWluZyBpcyBvdXIgdG9wIHByaW9yaXR5IHNvIHlvdSBjYW4gZXhwZWN0IGlzIG9ubHkgdGhlIGJlc3QuXCJdfX19OyIsIlxuRGVsYXkgPVxuICBoZWlnaHQ6IGZhbHNlXG4gIHdpbjogZmFsc2VcbiAgbG9nbzogZmFsc2VcbiAgaGVhZGVyOiBmYWxzZVxuICBwZWFjaDogZmFsc2VcbiAgZmlsbGVkOiBmYWxzZVxuXG4gIGk6IC0+XG5cbiAgICBAd2luID0gJCB3aW5kb3dcbiAgICBAaGVpZ2h0ID0gQHdpbi5oZWlnaHQoKVxuICAgIEBsb2dvID0gJCAnLnNlY3Rpb24uc2VjdGlvbl90b3AgPiAubWlkZGxlJ1xuICAgIEBoZWFkZXIgPSAkICdoZWFkZXInXG4gICAgQHBlYWNoID0gXy5oZXgycmdiIGNvbmZpZy5jb2xvci5wZWFjaDFcbiAgICAkKHdpbmRvdykuc2Nyb2xsIEBjaGVja1Njcm9sbFxuXG4gIGNoZWNrU2Nyb2xsOiAtPlxuXG4gICAgcGVyYyA9IChEZWxheS53aW4uc2Nyb2xsVG9wKCkgKiAxMDAgLyBEZWxheS5oZWlnaHQpLnRvRml4ZWQgMlxuXG4gICAgaWYgcGVyYyA+IDEwMFxuICAgICAgaWYgRGVsYXkuZmlsbGVkIGlzIGZhbHNlXG4gICAgICAgICQoJ2hlYWRlcicpLmFkZENsYXNzICdmaWxsZWQnXG4gICAgICAgIERlbGF5LmZpbGxlZCA9IHRydWVcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZWxzZVxuICAgICAgaWYgRGVsYXkuZmlsbGVkIGlzIHRydWVcbiAgICAgICAgJCgnaGVhZGVyJykucmVtb3ZlQ2xhc3MgJ2ZpbGxlZCdcbiAgICAgICAgRGVsYXkuZmlsbGVkID0gZmFsc2VcblxuICAgIG9wYWNpdHkgPSAocGVyYy8xMDApLnRvRml4ZWQoMSkgLyAyXG5cbiAgICBpZiBJbmRleC5vZmZzZXQgaXNudCAwXG4gICAgICAjRGVsYXkubG9nby5jc3MoJ3RyYW5zZm9ybScsIFwidHJhbnNsYXRlKDBweCwgI3twZXJjKjd9cHgpXCIpXG4gICAgICBEZWxheS5oZWFkZXIuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgXCJyZ2JhKCN7RGVsYXkucGVhY2gucn0sI3tEZWxheS5wZWFjaC5nfSwje0RlbGF5LnBlYWNoLmJ9LCN7b3BhY2l0eX0pXCIpXG5cbiIsIkZvbGQgPVxuXG4gIGluVmlld3BvcnQ6IChlbCkgLT5cblxuICAgIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIFxuICAgIHJldHVybihcbiAgICAgIChyZWN0LnRvcCA+PSAwIHx8IHJlY3QuYm90dG9tID49IDApICYmXG4gICAgICAocmVjdC50b3AgPD0gd2luZG93LmlubmVySGVpZ2h0IHx8IHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodClcbiAgICApXG5cblxuICB2aWV3czogKGVscywgcmVzdWx0KSAtPlxuXG4gICAgdmlld3MgPSB7fVxuXG4gICAgZWxzLmVhY2ggKGksIGVsKSAtPlxuXG4gICAgICByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIG5hbWUgPSAkKGVsKS5hdHRyICdpZCdcblxuICAgICAgcmV0dXJuIHRydWUgaWYgbmFtZSBpcyB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICAocmVjdC50b3AgPj0gMCB8fCByZWN0LmJvdHRvbSA+PSAwKSAmJlxuICAgICAgICAocmVjdC50b3AgPD0gd2luZG93LmlubmVySGVpZ2h0IHx8IHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodClcbiAgICAgIClcbiAgICAgICAgbWlkZGxlID0gd2luZG93LmlubmVySGVpZ2h0LzJcbiAgICAgICAgaWYgcmVjdC50b3AgPCBtaWRkbGUgJiYgcmVjdC5ib3R0b20gPiBtaWRkbGVcbiAgICAgICAgICByZXN1bHQobmFtZSlcbiIsIkdhdGUgPVxuXG4gIGk6IC0+XG5cbiAgICBAaGFuZGxlcnMoKVxuXG4gICAgXy5vZmYoJy5nYXRlJykgaWYgIENvb2tpZXMuZ2V0KCdnYXRlJykgaXNudCB1bmRlZmluZWRcblxuICBoYW5kbGVyczogLT5cblxuICAgICQoJy5nYXRlID4gLmdyYWRpZW50ID4gLm1pZGRsZSA+IC5idXR0b25zID4gLmJ1dHRvbicpLm9uICdjbGljaycsIEB5ZXNub1xuXG4gIHllc25vOiAtPlxuXG4gICAgcmV0dXJuIGxvY2F0aW9uLmhyZWYgPSAnaHR0cDovL3d3dy5idWlsZGFiZWFyLmNvbS8nIGlmICQodGhpcykudGV4dCgpIGlzICdOTydcbiAgICBpZiAkKHRoaXMpLnRleHQoKSBpcyAnWUVTJ1xuICAgICAgXy5vZmYgJy5nYXRlJ1xuICAgICAgQ29va2llcy5zZXQgJ2dhdGUnLCB0cnVlLCBleHBpcmVzOiAxXG5cbiIsIkluZGV4ID1cbiAgb2Zmc2V0OiAtODZcblxuICBpOiAtPlxuXG4gICAgR2F0ZS5pKClcblxuICAgIERlbGF5LmkoKVxuICAgIFByb2R1Y3QuaSgpXG5cbiAgICBpZiAkKHdpbmRvdykud2lkdGgoKSA8IDEwMDBcbiAgICAgIEBvZmZzZXQgPSAwXG5cbiAgICBAaGFuZGxlcnMoKVxuXG4gICAgc2V0SW50ZXJ2YWwgSW5kZXgubWVudSwgNTAwXG5cbiAgaGFuZGxlcnM6IC0+XG4gICAgJCgnaGVhZGVyID4gLmJ1cmdlcicpLmNsaWNrIEBidXJnZXJIYW5kbGVyXG4gICAgJCgnaGVhZGVyID4gLmlubmVyID4gLm1lbnUgPiAuaXRlbXMgPiAuaW5uZXIgPiAuaXRlbScpLmNsaWNrIEBtZW51SGFuZGxlclxuICAgICQoJ2hlYWRlciA+IC5pbm5lciA+IC5sb2dvJykuY2xpY2sgQG1lbnVIYW5kbGVyXG5cbiAgYnVyZ2VySGFuZGxlcjogLT5cbiAgICBfLnN3YXAgJ2hlYWRlciA+IC5idXJnZXInXG4gICAgXy5zd2FwICdoZWFkZXIgPiAuaW5uZXIgPiAubWVudSA+IC5pdGVtcydcblxuICBtZW51SGFuZGxlcjogLT5cbiAgICBfLm9uICdoZWFkZXIgPiAuYnVyZ2VyJ1xuICAgIF8ub2ZmICdoZWFkZXIgPiAuaW5uZXIgPiAubWVudSA+IC5pdGVtcydcbiAgICBJbmRleC5zZWN0aW9uICQodGhpcykuZGF0YSAnaXRlbSdcblxuICBzZWN0aW9uOiAoc2VjdGlvbikgLT5cbiAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAkKCdodG1sLCBib2R5Jykuc2Nyb2xsVG8gXCIjI3tzZWN0aW9ufVwiLFxuICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICAgIG9mZnNldDogSW5kZXgub2Zmc2V0XG4gICAgICBsb2NhdGlvbi5oYXNoID0gc2VjdGlvblxuICAgICwgMTAwXG5cbiAgbWVudTogLT5cblxuICAgIEZvbGQudmlld3MgJCgnLnNlY3Rpb24nKSwgKHJlc3VsdCkgLT5cbiAgICAgIF8ub2ZmICdoZWFkZXIgPiAuaW5uZXIgPiAubWVudSA+IC5pdGVtcyA+IC5pbm5lciA+IC5pdGVtJ1xuICAgICAgXy5vbiBcIi5pdGVtXyN7cmVzdWx0fVwiXG5cbiAgICAgIGlmIHJlc3VsdCBpc250ICdwcm9kdWN0cycgYW5kIFByb2R1Y3QuZGV0YWlscyBpcyB0cnVlXG4gICAgICAgIFByb2R1Y3QuY2xvc2VDbGljaygpXG4iLCJNYXAgPVxuICBtYXA6IGZhbHNlXG4gIHBsYWNlczoge31cblxuICBpOiAtPlxuXG4gICAgQG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLFxuICAgICAgY2VudGVyOiBsYXQ6IDM5LjYwOTI0NzQsIGxuZzogLTEyMy40NDUzNzU1XG4gICAgICB6b29tOiA3XG4gICAgICBzdHlsZXM6IEBzdHlsZXNcbiAgICAgIG9wdGlvbnM6IEBvcHRpb25zXG5cbiAgICBzZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZXNTZXJ2aWNlKEBtYXApXG5cbiAgICBmb3IgdmVuZG9yIGluIGNvbmZpZy52ZW5kb3JzXG4gICAgICBzZXJ2aWNlLmdldERldGFpbHNcbiAgICAgICAgcGxhY2VJZDogdmVuZG9yLnBsYWNlSWRcbiAgICAgICwgKHJlc3VsdCwgc3RhdHVzKSAtPlxuICAgICAgICBNYXAucGxhY2VzW3Jlc3VsdC5wbGFjZV9pZF0gPSByZXN1bHRcbiAgICAgICAgTWFwLm1hcmtlcnMoKSBpZiBfLm9iamMoY29uZmlnLnZlbmRvcnMpIGlzIF8ub2JqYyhNYXAucGxhY2VzKVxuXG5cbiAgICBAaGFuZGxlcnMoKVxuXG4gIGhhbmRsZXJzOiAtPlxuICAgJCgnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlID4gLmNsb3NlJykuY2xpY2sgQHBsYWNlQ2xvc2VIYW5kbGVyXG4gIG1hcmtlcnM6IC0+XG5cbiAgICBtYXJrZXJzID0gW11cblxuICAgIGZvciBpZCwgcGxhY2Ugb2YgQHBsYWNlc1xuXG4gICAgICBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyXG4gICAgICAgIG1hcDogTWFwLm1hcFxuICAgICAgICBwb3NpdGlvbjogcGxhY2UuZ2VvbWV0cnkubG9jYXRpb25cbiAgICAgICAgaWNvbjpcbiAgICAgICAgICB1cmw6ICcvaW1hZ2VzL21hcC9tYXJrZXIucG5nJyxcbiAgICAgICAgICBzY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSg2MCwgNjApXG4gICAgICAgICAgb3JpZ2luOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMCwgMClcbiAgICAgICAgcGxhY2U6XG4gICAgICAgICAgcGxhY2VJZDogcGxhY2UucGxhY2VfaWRcbiAgICAgICAgICBsb2NhdGlvbjogcGxhY2UuZ2VvbWV0cnkubG9jYXRpb25cbiAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyIG1hcmtlciwgJ2NsaWNrJywgTWFwLm1hcmtlckhhbmRsZXJcbiAgICAgIG1hcmtlcnMucHVzaCBtYXJrZXJcblxuICAgIG1hcmtlckNsdXN0ZXIgPSBuZXcgTWFya2VyQ2x1c3RlcmVyIE1hcC5tYXAsIG1hcmtlcnMsXG4gICAgICBpbWFnZVBhdGg6ICdodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9leGFtcGxlcy9tYXJrZXJjbHVzdGVyZXIvbSdcblxuICBtYXJrZXJIYW5kbGVyOiAtPlxuXG4gICBwbGFjZSA9IE1hcC5wbGFjZXNbdGhpcy5wbGFjZS5wbGFjZUlkXVxuXG5cbiAgIGlmIHBsYWNlLnBob3Rvc1xuICAgICQoJy5zZWN0aW9uX2xvY2F0aW9ucyA+IC5wbGFjZSA+IC5pbm5lciA+IC5pbWFnZScpLmF0dHIgJ3NyYycscGxhY2UucGhvdG9zWzBdLmdldFVybCBtYXhXaWR0aDogMjYwLCBtYXhIZWlnaHQ6IDIwMFxuICAgIF8ub24gJy5zZWN0aW9uX2xvY2F0aW9ucyA+IC5wbGFjZSA+IC5pbm5lciA+IC5pbWFnZSdcbiAgIGVsc2VcbiAgICBfLm9mZiAnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlID4gLmlubmVyID4gLmltYWdlJ1xuXG4gICAkKCcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UgPiAuaW5uZXIgPiAubmFtZScpLnRleHQgcGxhY2UubmFtZVxuICAgJCgnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlID4gLmlubmVyID4gLm5hbWUnKS5hdHRyICdocmVmJywgcGxhY2UudXJsXG4gICAkKCcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UgPiAuaW5uZXIgPiAuYWRkcmVzcycpLmh0bWwgcGxhY2UuZm9ybWF0dGVkX2FkZHJlc3NcbiAgICQoJy5zZWN0aW9uX2xvY2F0aW9ucyA+IC5wbGFjZSA+IC5pbm5lciA+IC5waG9uZScpLmh0bWwgcGxhY2UuZm9ybWF0dGVkX3Bob25lX251bWJlclxuXG4gICBfLm9uICcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UnXG5cbiAgIE1hcC5tYXAuc2V0Wm9vbSgxNilcbiAgIE1hcC5tYXAuc2V0Q2VudGVyKHRoaXMuZ2V0UG9zaXRpb24oKSlcblxuICAgY29uc29sZS5sb2cgcGxhY2VcblxuXG4gIHBsYWNlQ2xvc2VIYW5kbGVyOiAtPlxuICAgIF8ub2ZmICcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UnXG4gICAgTWFwLm1hcC5zZXRab29tKDExKVxuICAgIFxuICBvcHRpb25zOlxuICAgIHNjcm9sbHdoZWVsOiBmYWxzZVxuICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZVxuICAgIGZ1bGxzY3JlZW5Db250cm9sOiBmYWxzZVxuXG4gIHN0eWxlczpcbiAgICBbXG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdhZG1pbmlzdHJhdGl2ZSdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2xhYmVscy50ZXh0LmZpbGwnXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICdjb2xvcic6ICcjOWU1ZDA3JyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ2FkbWluaXN0cmF0aXZlLmNvdW50cnknXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdsYWJlbHMudGV4dC5maWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAnY29sb3InOiAnI2YyOTkzNCcgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdhZG1pbmlzdHJhdGl2ZS5sb2NhbGl0eSdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2xhYmVscy50ZXh0LmZpbGwnXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICdjb2xvcic6ICcjOWU1ZDA3JyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ2xhbmRzY2FwZSdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2FsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbIHsgJ2NvbG9yJzogJyNmOGY1ZjInIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAncG9pJ1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnYWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAndmlzaWJpbGl0eSc6ICdvZmYnIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAncm9hZCdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2FsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbXG4gICAgICAgICAgeyAnc2F0dXJhdGlvbic6IC0xMDAgfVxuICAgICAgICAgIHsgJ2xpZ2h0bmVzcyc6IDQ1IH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAncm9hZCdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2dlb21ldHJ5LmZpbGwnXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICdjb2xvcic6ICcjZjI5OTM0JyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3JvYWQuaGlnaHdheSdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2FsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbIHsgJ3Zpc2liaWxpdHknOiAnc2ltcGxpZmllZCcgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdyb2FkLmFydGVyaWFsJ1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnbGFiZWxzLmljb24nXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICd2aXNpYmlsaXR5JzogJ29mZicgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICd0cmFuc2l0J1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnYWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAndmlzaWJpbGl0eSc6ICdvZmYnIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAnd2F0ZXInXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdhbGwnXG4gICAgICAgICdzdHlsZXJzJzogW1xuICAgICAgICAgIHsgJ2NvbG9yJzogJyMwMGFmYWEnIH1cbiAgICAgICAgICB7ICd2aXNpYmlsaXR5JzogJ29uJyB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG5cbiIsIlByb2R1Y3QgPVxuICB0bDogZmFsc2VcbiAgZGV0YWlsczogZmFsc2VcblxuICBpOiAtPlxuICAgIEB0bCA9IG5ldyBUaW1lbGluZU1heCByZXBlYXQ6IDBcblxuICAgIEBoYW5kbGVycygpXG5cbiAgaGFuZGxlcnM6IC0+XG5cbiAgICAkKCcuc2VjdGlvbl9wcm9kdWN0cyA+IC5wcm9kdWN0bGlzdCA+IC5wcm9kdWN0JykuY2xpY2sgQHByb2R1Y3RDbGlja1xuICAgICQoJy5zZWN0aW9uX3Byb2R1Y3RzID4gLmRldGFpbHMgPiAuZGV0YWlsID4gLmNsb3NlJykuY2xpY2sgQGNsb3NlQ2xpY2tcbiAgICAkKCcuc2VjdGlvbl9wcm9kdWN0cyA+IC5kZXRhaWxzID4gLmRldGFpbCA+IC5jb3B5ID4gLmlubmVyID4gLmZsYXZvcnMgPiAuZmxhdm9yID4gLm5hbWUnKS5jbGljayBAZmxhdm9yXG5cbiAgZmxhdm9yOiAtPlxuICAgIHBhcmVudCA9ICQodGhpcykucGFyZW50KClcbiAgICBzdGF0ZSA9IF8uc3RhdGUgcGFyZW50XG4gICAgY29uc29sZS5sb2cgc3RhdGVcbiAgICBfLm9mZiAnLmZsYXZvcnMgPiAuZmxhdm9yJ1xuICAgIGlmIHN0YXRlXG4gICAgICBfLm9mZiBwYXJlbnRcbiAgICBlbHNlXG4gICAgICBfLm9uIHBhcmVudFxuXG5cbiAgcHJvZHVjdENsaWNrOiAtPlxuICAgIHByb2R1Y3QgPSAkKHRoaXMpLmRhdGEgJ3Byb2R1Y3QnXG4gICAgXy5vbiBcIltpZD0nZGV0YWlsICN7cHJvZHVjdH0nXVwiXG4gICAgXy5vbiBcIltpZD0naW1hZ2UgI3twcm9kdWN0fSddXCJcbiAgICBQcm9kdWN0LmRldGFpbHMgPSB0cnVlXG4gICAgaWYgSW5kZXgub2Zmc2V0IGlzbnQgMFxuICAgICAgSW5kZXguc2VjdGlvbiAncHJvZHVjdHMnXG5cblxuICAgIGVtcHR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSAnc3VuRW1wdHknXG4gICAgZm9yIGRpdiBpbiBlbXB0eVxuICAgICAgdGwgPSBuZXcgVGltZWxpbmVNYXggcmVwZWF0OiAwXG4gICAgICB0bC50byBkaXYsIDEuMCwge21vcnBoU1ZHOiB7c2hhcGU6ICcjc3VuRmlsbGVkJywgc2hhcGVJbmRleDogM30sIGVhc2U6RXhwby5lYXNlSW5PdXR9XG5cbiAgY2xvc2VDbGljazogLT5cbiAgICBlbXB0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgJ3N1bkVtcHR5J1xuICAgIGZvciBkaXYgaW4gZW1wdHlcbiAgICAgIHRsID0gbmV3IFRpbWVsaW5lTWF4IHJlcGVhdDogMFxuICAgICAgdGwudG8gZGl2LCAwLjAxLCB7bW9ycGhTVkc6ICcjc3VuRW1wdHknLCBlYXNlOkV4cG8uZWFzZUluT3V0fVxuXG4gICAgXy5vZmYgJy5zZWN0aW9uX3Byb2R1Y3RzID4gLmRldGFpbHMgPiAuZGV0YWlsJ1xuICAgIF8ub2ZmICcuc2VjdGlvbl9wcm9kdWN0cyA+IC5kZXRhaWxzID4gLmltYWdlJ1xuICAgIFByb2R1Y3QuZGV0YWlscyA9IGZhbHNlXG4gICAgXG4iXX0=
