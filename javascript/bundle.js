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
    "twitter": "https://twitter.com/FullSun2",
    "facebook": "https://www.facebook.com/Full-Sun-648952271971685/"
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
          "desc": ["Imagine waking up feeling completely refreshed and ready to conquer the day.", "Feel: Creative, alert, and inspired"]
        }, {
          "name": "Enlighten”mint”",
          "desc": ["To Yoga or not to Yoga? Whether you sweat through it or slept through it, we got you covered.", "Feel: Mindful, focused, and calm"]
        }, {
          "name": "TropiCali",
          "desc": ["You hopped on a plane and just touched down on a tropical oasis. Welcome to island living, operation unwind.", "Feel: Happy, relaxed, and carefree"]
        }, {
          "name": "Natural",
          "desc": ["Green smoothied for breakfast, ate salad for lunch, power cycled after work — that was the idea anyways.", "Feel: Clear-headed, energized, and refreshed"]
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
          "tag": "hd",
          "thc": "26%",
          "desc": ["One of the most legendary cannabis strains, OG Kush is a strong, Indica-leaning hybrid renowned for its powerful potency, medicinal qualities and unique taste. The strain smells and tastes like sweet lemons with a hint of woody earthiness. What makes ours High-Definition? That’s our best kept secret."]
        }, {
          "name": "Sunset Sherbert",
          "tag": "sherbert",
          "thc": "24-26%",
          "desc": ["An Indica-dominant hybrid, this is a powerful cross between the Girl Scout Cookies and Pink Panties strains. Known for its uplifting jolt of cerebral energy, Sunset Sherbet tastes like sweet citrus and honey with an earthy aftertaste."]
        }, {
          "name": "Sour Tangie",
          "tag": "sour",
          "thc": "24%",
          "desc": ["An 80% Sativa-dominant cross between East Coast Sour Diesel and Tangie, this strain is known for its extreme, mouthwatering flavor. Strong citrus notes are met with an earthy diesel aftertaste. A well-balanced strain perfect for full body relaxation."]
        }, {
          "name": "Black Lime Reserve",
          "tag": "lime",
          "thc": "24-26%",
          "desc": ["A boutique, Indica strain with a reputable Emerald Triangle heritage. A powerful cross between Northern Lights, Purple Kush and Chemdawg Special Reserve strains. Refreshing and exuberant with a pronounced mix of sweet citrus, peppery spice and juicy lime."]
        }
      ],
      "detail": [
        {
          "left": "THC",
          "right": "24-26%"
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
      "copys": ["All of our products consist of Single Origin, High-Definition OG Kush cannabis. While others call this their “Reserve” we call this our \"All the Time”. We hand select our small group of producers for their consistent commitment to quality and excellence. They work their magic with proprietary strain which allows us to maintain quality, consistency, <i>and</i> quantity. Raised out of the most reputable growing region in the world, our Humboldt County farms stays rooted in consciously growing the best and brightest sungrown cannabis.", "Extracting oil from plants has been widely used across industries for centuries. Finding the right cannabis extraction process has taken years, but we have designed and perfected a model that makes our products superior. Our proprietary extract method is done at our state of the art facility in Humboldt County. The result is an ultra-refined oil that is lab tested and 100% solvent-free, every single time. Your well-being is our top priority."]
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
    return this.handlers();
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
    var parent, state, t, thc;
    parent = $(this).parent();
    state = _.state(parent);
    _.off('.flavors > .flavor');
    if (state) {
      return _.off(parent);
    } else {
      _.on(parent);
      t = $(this);
      if (t.data('tag') !== void 0) {
        _.off('.image.tag');
        _.on(".image.tag.tag_" + (t.data('tag')));
        thc = t.data('thc');
        return $('.data:first-child > .right').text(thc);
      }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjI1Ni5jb2ZmZWUiLCJjb25maWcuY29mZmVlIiwiZGVsYXkuY29mZmVlIiwiZm9sZC5jb2ZmZWUiLCJnYXRlLmNvZmZlZSIsImluZGV4LmNvZmZlZSIsIm1hcC5jb2ZmZWUiLCJwcm9kdWN0LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBLENBQUE7RUFBQTs7QUFBQSxDQUFBLEdBRUU7RUFBQSxDQUFBLEVBQUcsU0FBQTtXQUNELElBQUMsQ0FBQSxPQUFELEdBQVcsV0FBQSxDQUFZLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLElBQWIsQ0FBWixFQUE2QixHQUE3QjtFQURWLENBQUg7RUFHQSxDQUFBLEVBQ0U7SUFBQSxNQUFBLEVBQVEsS0FBUjtJQUNBLE9BQUEsRUFBUyxDQURUO0dBSkY7RUFPQSxJQUFBLEVBQU0sU0FBQyxFQUFELEVBQUssTUFBTCxFQUFtQixHQUFuQjs7TUFBSyxTQUFPOzs7TUFBTyxNQUFJOztJQUUzQixJQUFHLENBQUEsQ0FBQSxFQUFBLFlBQWtCLE1BQWxCLENBQUg7TUFDRSxFQUFBLEdBQUssQ0FBQSxDQUFFLEVBQUYsRUFEUDs7SUFHQSxJQUFHLE1BQUEsS0FBWSxLQUFmO01BQ0UsRUFBRSxDQUFDLFdBQUgsQ0FBZSxNQUFmLEVBREY7O0lBR0EsSUFBRyxHQUFBLEtBQVMsS0FBWjtNQUNFLEVBQUUsQ0FBQyxRQUFILENBQVksR0FBWixFQURGOztBQUdBLFdBQU87RUFYSCxDQVBOO0VBb0JBLEdBQUEsRUFBSyxTQUFDLEVBQUQsRUFBSyxDQUFMOztNQUFLLElBQUU7O0lBRVYsSUFBRyxDQUFDLENBQUMsTUFBRixJQUFhLENBQUMsQ0FBQyxPQUFGLEdBQVksQ0FBNUI7TUFFRSxJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4sRUFBVSxLQUFWLEVBQWlCLFFBQWpCO01BQ0EsVUFBQSxDQUFXLFNBQUE7UUFDVCxJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4sRUFBVSxRQUFWLEVBQW9CLEtBQXBCO2VB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QUMsQ0FBQyxHQUFGLENBQU0sd0NBQU47SUFDQSxDQUFDLENBQUMsR0FBRixDQUFNLHVDQUFOO1dBQ0EsT0FBTyxDQUFDLE9BQVIsR0FBa0I7RUFSUixDQTFDWiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJfID1cblxuICBpOiAtPlxuICAgIEBjb25zb2xlID0gc2V0SW50ZXJ2YWwoQGRldGVjdC5iaW5kKEApLCAyMDApXG5cbiAgcDpcbiAgICBvZmZpbmc6IGZhbHNlXG4gICAgb2ZmdGltZTogMFxuXG4gIHR1cm46IChlbCwgcmVtb3ZlPWZhbHNlLCBhZGQ9ZmFsc2UpIC0+XG5cbiAgICBpZiBlbCBub3QgaW5zdGFuY2VvZiBqUXVlcnlcbiAgICAgIGVsID0gJChlbClcblxuICAgIGlmIHJlbW92ZSBpc250IGZhbHNlXG4gICAgICBlbC5yZW1vdmVDbGFzcyhyZW1vdmUpXG5cbiAgICBpZiBhZGQgaXNudCBmYWxzZVxuICAgICAgZWwuYWRkQ2xhc3MoYWRkKVxuXG4gICAgcmV0dXJuIHRydWVcblxuICBvZmY6IChlbCwgcD17fSkgLT5cblxuICAgIGlmIHAub2ZmaW5nIGFuZCBwLm9mZnRpbWUgPiAwXG5cbiAgICAgIEB0dXJuIGVsLCBmYWxzZSwgJ29mZmluZydcbiAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgQHR1cm4gZWwsICdvZmZpbmcnLCBmYWxzZVxuICAgICAgICBAdHVybiBlbCwgJ29uJywgJ29mZidcbiAgICAgICwgcC5vZmZ0aW1lKjEwMDAgKyAxMDBcblxuICAgIGVsc2VcbiAgICAgIEB0dXJuIGVsLCAnb24nLCAnb2ZmJ1xuXG4gICAgcmV0dXJuXG5cbiAgb246IChlbCwgcCkgLT5cbiAgICBAdHVybiBlbCwgJ29mZicsICdvbidcblxuICBzdGF0ZTogKGVsKSAtPlxuICAgIGlmIGVsIG5vdCBpbnN0YW5jZW9mIGpRdWVyeVxuICAgICAgZWwgPSAkKGVsKVxuXG4gICAgaWYgZWwuaGFzQ2xhc3MgJ29mZidcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIGlmIGVsLmhhc0NsYXNzICdvbidcbiAgICAgIHJldHVybiB0cnVlXG5cbiAgICByZXR1cm4gbnVsbFxuXG4gIHN3YXA6IChlbCwgcCkgLT5cblxuICAgIGlmIGVsIG5vdCBpbnN0YW5jZW9mIGpRdWVyeVxuICAgICAgZWwgPSAkKGVsKVxuXG4gICAgaWYgZWwuaGFzQ2xhc3MgJ29mZidcbiAgICAgIEBvbiBlbCwgcFxuICAgIGVsc2VcbiAgICAgIEBvZmYgZWwsIHBcblxuICAgIHJldHVyblxuXG4gIGVuY29kZTogKHN0cikgLT5cbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cilcbiAgICAgIC5yZXBsYWNlKC8hL2csICclMjEnKVxuICAgICAgLnJlcGxhY2UoLycvZywgJyUyNycpXG4gICAgICAucmVwbGFjZSgvXFwoL2csICclMjgnKVxuICAgICAgLnJlcGxhY2UoL1xcKS9nLCAnJTI5JylcbiAgICAgIC5yZXBsYWNlKC9cXCovZywgJyUyQScpXG4gICAgICAucmVwbGFjZSgvJTIwL2csICcrJylcblxuICB0OiAoY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsIHZhbHVlKSAtPlxuICAgIF9nYXEucHVzaCBbJ190cmFja0V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsIHZhbHVlXVxuXG4gIHJhbmQ6IChtaW4sIG1heCkgLT5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KSArIG1pblxuXG4gIGhleDJyZ2I6IChoZXgpIC0+XG4gICAgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleClcbiAgICByOiBwYXJzZUludChyZXN1bHRbMV0sIDE2KSxcbiAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcbiAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KVxuIFxuICBvYmpjOiAob2JqKSAtPlxuICAgIChrIGZvciBvd24gayBvZiBvYmopLmxlbmd0aFxuXG4gIGxvYWQ6IChzY3JpcHQsIGluaXRpYXRlLCBjb21wbGV0ZSkgLT5cblxuICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAnc2NyaXB0J1xuICAgIGVsLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0J1xuICAgIGVsLnNyYyA9IHNjcmlwdFxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIgJ2xvYWQnICwgKGUpIC0+XG4gICAgICBjb21wbGV0ZSgpIGlmIHR5cGVvZiBjb21wbGV0ZSBpcyAnZnVuY3Rpb24nXG4gICAgICB3aW5kb3dbaW5pdGlhdGVdLmkoKSBpZiBpbml0aWF0ZSBpc250IHVuZGVmaW5lZCBhbmQgaW5pdGlhdGUgaXNudCBmYWxzZVxuICAgICwgZmFsc2VcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpXG5cbiAgbGxjOiAtPlxuICAgIGFzY2lpID0gXCJcIlwiXG5cbiAgICAgICVjbW1tLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4vbW1tXG4gICAgICBtbW8uLi4uLi4uLi4uLi4uLi4uLTo6Ly86Oi0uLi4uLi4uLTo6Ojo6Ojo6Ojo6OjotLi4uLi4uLi4tOjovLy86LS5vbW1cbiAgICAgIG1kLS4uLi4uLi4uLi4uLi46K3loZGRkZGRkaHkrLS4uLi4vZGRkZGRkZGRkZGRkZCsuLi4uLi4vc2hkZGRkZGRkeW9kbVxuICAgICAgbW8uLi4uLi4uLi4uLi4uLWhtbW1oeXl5eWRtbW1oOi4uLi9tbW1taGhoaGhoaGhoKy4uLi46eWRtbWRoeXl5aGRkb29tXG4gICAgICBtLS4uLi4uLi4uLi4uLi4uLXNzOi0uLi4uLXltbW15Li4uL21tbW0tLS0tLS0tLS0uLi4uOmRtbW1zOi0uLi4tOi8uLW1cbiAgICAgIGQuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4ueW1tbXkuLi4vbW1tbS0vK29vbys6LS4uLi55bW1teS06K29vbysvLS4uZFxuICAgICAgaC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uOnNtbW1kOi4uLi9tbW1taG1tbW1tbWRoKy4uLmRtbW1zaGRtbW1tbW1ocy1oXG4gICAgICBoLi4uLi4uLi4uLi4uLi4uLi4uLi4uOnNkbW1keTouLi4uOmhoZGhvKy8vK3ltbW1tKy4uZG1tbWR5by8vK3NkbW1taGhcbiAgICAgIGQuLi4uLi4uLi4uLi4uLi4uLi4tK3lkbW1keS8uLi4uLi4uLS06Li4uLi4uLnNtbW1oLi55bW1tcy4uLi4uLjptbW1tbVxuICAgICAgbS0uLi4uLi4uLi4uLi4uLi06c2htbW1kcy8tLS0tLS4uLi46cy8tLS4uLi06aG1tbXMuLjpkbW1kLy0uLi4tb21tbW1tXG4gICAgICBtby4uLi4uLi4uLi4uLi4uaG1tbW1tbWhoaGhoaGhoLi4uK2RtbWRoeXl5aGRtbW15LS4uLi9obW1taHl5eWhtbW1kaG1cbiAgICAgIG1kLS4uLi4uLi4uLi4uLi5kZGRkZGRkZGRkZGRkZGQuLi4tK3NoZGRkZGRkZGh5Ly0uLi4uLi1veWRkZGRkZGRobzpkbVxuICAgICAgbW1vLi4uLi4uLi4uLi4uLjo6Ojo6Ojo6Ojo6Ojo6Oi4uLi4uLi4tOi8vLzo6LS4uLi4uLi4uLi4uLTovLy86LS4ub21tXG4gICAgICBtbW0vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9tbW1cblxuICAgICAgOjogc3ludGFjdGljIHN1Z2FyIGJ5IDI1NlxuICAgICAgOjogaHR0cDovLzI1Ni5pby9cbiAgICAgIDo6ICN7Y29uZmlnLm1ldGEucmVwb31cbiAgICBcIlwiXCJcbiAgICBjb25zb2xlLmxvZyBhc2NpaSwgXCJjb2xvcjogZ3JleTsgZm9udC1mYW1pbHk6IE1lbmxvLCBtb25vc3BhY2U7XCJcblxuICBkZXRlY3Q6IC0+XG4gICAgaWYgKCgod2luZG93Lm91dGVySGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0KSA+IDEwMCkgfHwgKCh3aW5kb3cub3V0ZXJXaWR0aCAtIHdpbmRvdy5pbm5lcldpZHRoKSA+IDEwMCkpXG4gICAgICBAbGxjKClcbiAgICAgIGNsZWFySW50ZXJ2YWwgQGNvbnNvbGVcblxuXy5pKClcbiIsImNvbmZpZyA9IHtcImNvbG9yXCI6e1wiYmx1ZTFcIjpcIiMwMEFGQUFcIixcIm9yYW5nZTFcIjpcIiNGMjk5MzRcIixcIm9yYW5nZTJcIjpcIiM5RTVEMDdcIixcIm9yYW5nZTNcIjpcIiNEMUE5N0VcIixcImtoYWtpMVwiOlwiI0NBQUY5MFwiLFwicGVhY2gxXCI6XCIjRjhGNUYyXCIsXCJ3aGl0ZTFcIjpcIiNmZmZmZmZcIixcImJsYWNrMVwiOlwiIzAwMDAwMFwiLFwiZ3JleTFcIjpcIiM3Nzc3NzdcIn0sXCJmb250XCI6e1wiaDFcIjp7XCJmb250LWZhbWlseVwiOlwiYXF1aWxvbmUgcmVndWxhclwiLFwiZm9udC1zaXplXCI6XCI0OHB4XCJ9LFwiaDJcIjp7XCJmb250LWZhbWlseVwiOlwic2Fja2VycyBnb3RoaWNcIixcImZvbnQtc2l6ZVwiOlwiMjJweFwiLFwibGV0dGVyLXNwYWNpbmdcIjpcIjRweFwifSxcImgzXCI6e1wiZm9udC1mYW1pbHlcIjpcInNhY2tlcnMgZ290aGljXCIsXCJmb250LXNpemVcIjpcIjE2cHhcIixcImxldHRlci1zcGFjaW5nXCI6XCIycHhcIixcImxpbmUtaGVpZ2h0XCI6XCIyMnB4XCJ9LFwiaDRcIjp7XCJmb250LWZhbWlseVwiOlwiYXF1aWxvbmUgcmVndWxhclwiLFwiZm9udC1zaXplXCI6XCIzMnB4XCJ9LFwiYzFcIjp7XCJmb250LWZhbWlseVwiOlwiYXZlcnRhIGxpZ2h0XCIsXCJmb250LXNpemVcIjpcIjE4cHhcIn0sXCJjMXNcIjp7XCJmb250LWZhbWlseVwiOlwiYXZlcnRhIGxpZ2h0XCIsXCJmb250LXNpemVcIjpcIjE0cHhcIn0sXCJjMXNzXCI6e1wiZm9udC1mYW1pbHlcIjpcImF2ZXJ0YSBsaWdodFwiLFwiZm9udC1zaXplXCI6XCIxMHB4XCJ9LFwiYzFzYlwiOntcImZvbnQtZmFtaWx5XCI6XCJhdmVydGEgYm9sZFwiLFwiZm9udC1zaXplXCI6XCIxNHB4XCJ9LFwiYzJcIjp7XCJmb250LWZhbWlseVwiOlwiYXZlcnRhIGJvbGRcIixcImZvbnQtc2l6ZVwiOlwiMjhweFwifSxcImMzXCI6e1wiZm9udC1mYW1pbHlcIjpcImF2ZXJ0YSBib2xkXCIsXCJmb250LXNpemVcIjpcIjE0cHhcIn0sXCJjM3NcIjp7XCJmb250LWZhbWlseVwiOlwiYXZlcnRhIGJvbGRcIixcImZvbnQtc2l6ZVwiOlwiMTFweFwifSxcImM0XCI6e1wiZm9udC1mYW1pbHlcIjpcImF2ZXJ0YSBib2xkXCIsXCJmb250LXNpemVcIjpcIjIwcHhcIn0sXCJjNVwiOntcImZvbnQtZmFtaWx5XCI6XCJhdmVydGEgYm9sZFwiLFwiZm9udC1zaXplXCI6XCIxOHB4XCJ9LFwiYzZcIjp7XCJmb250LWZhbWlseVwiOlwiYXF1aWxvbmUgcmVndWxhclwiLFwiZm9udC1zaXplXCI6XCIxNnB4XCJ9fSxcIm1ldGFcIjp7XCJ1cmxcIjpcImh0dHA6Ly9mdWxsc3VuLmNvbS9cIixcInRpdGxlXCI6XCJmdWxsIHN1blwiLFwiZGVzY3JpcHRpb25cIjpcImNhbGlmb3JuaWEgY29uc2Npb3VzIGNhbm5hYmlzXCIsXCJrZXl3b3Jkc1wiOlwiZnVsbCBzdW4sIGNhbm5hYmlzLCBjYWxpZm9ybmlhXCIsXCJ0cmFja2luZ19pZFwiOjMxMzM3LFwic2hhcmVcIjpcImltYWdlcy9sb2dvMS5wbmdcIixcInJlcG9cIjpcImh0dHBzOi8vZ2l0aHViLmNvbS9hY2lkamF6ei9mdWxsc3VuXCIsXCJtYXBfYXBpX2tleVwiOlwiQUl6YVN5QUlxODRwamk0b3Z1bUFOWFhvbE1xa0d3UVg4a00xbUtjXCIsXCJlbWFpbFwiOlwiaW5mb0BmdWxsc3VuLmNvbVwiLFwiaW5zdGFncmFtXCI6XCJodHRwOi8vd3d3Lmluc3RhZ3JhbS5jb20vXCIsXCJ0d2l0dGVyXCI6XCJodHRwczovL3R3aXR0ZXIuY29tL0Z1bGxTdW4yXCIsXCJmYWNlYm9va1wiOlwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0Z1bGwtU3VuLTY0ODk1MjI3MTk3MTY4NS9cIn0sXCJwcm9kdWN0c1wiOlt7XCJuYW1lXCI6XCJ2YXBlIHBlbiBzZXRcIixcInRpdGxlXCI6XCJDYW5uYWJpcyBPaWwgVmFwb3JpemF0aW9uIFNldFwiLFwiZGVzY3JpcHRpb25cIjpbXCJEZXNpZ25lZCBmb3Igb24tdGhlLWdvIGVuam95bWVudCwgdGhpcyBwcmVtaXVtIHZhcGUgc2V0IGluY2x1ZGVzIG91ciBTaW5nbGUgT3JpZ2luIGNhbm5hYmlzIG9pbC4gVXNlIHRocm91Z2hvdXQgdGhlIGRheSB0byBpbmNpdGUgY3JlYXRpdml0eSwgY2FsbSB0aGUgbWluZCBvciBkZWVwZW4gcmVsYXhhdGlvbiBsZXZlbHMuXCIsXCJTYXZlIHlvdXJzZWxmIHRpbWUgYW5kIGVmZm9ydCwgdGhpcyBvbmUgY2FydHJpZGdlIGNhbiBiZSB1c2VkIGZvciBlbmRsZXNzIG9jY2FzaW9ucy4gVGhlIHBlcmZlY3QgZG9zZSBvZiBnb29kbmVzcyBhbnl0aW1lIHlvdSBuZWVkIGl0IOKAlCBzdW51cCB0byBzdW5kb3duLlwiLFwiSW5jbHVkZXMgYmF0dGVyeSwgNTAwbWcgY2FydHJpZGdlIGFuZCBjaGFyZ2VyLiAgU29sdmVudCBGcmVlLiBQcm9kdWN0IHRlc3RlZCBhbmQgaGVsZCAgdG8gdGhlIGhpZ2hlc3Qgc3RhbmRhcmRzIGZvciBwdXJpdHkgYW5kIGNvbnNpc3RlbnQgVEhDIHBvdGVuY3kuXCIsXCI8aT5FeHBlcmllbmNlOiBBIGNsZWFyLWhlYWRlZCwgZm9jdXNlZCBoaWdoIHBlcmZlY3QgZm9yIGRheXRpbWUgYW5kIG5pZ2h0dGltZSB1c2UuPC9pPlwiXSxcInRodW1iXCI6XCJwZW5fc2V0X3RodW1iLmpwZ1wiLFwiaW1hZ2VcIjpcInBlbl9zZXQuanBnXCIsXCJkZXRhaWxcIjpbe1wibGVmdFwiOlwiVEhDXCIsXCJyaWdodFwiOlwiPjg1JVwifSx7XCJsZWZ0XCI6XCJTVFJBSU5cIixcInJpZ2h0XCI6XCJIeWJyaWRcIn0se1wibGVmdFwiOlwiUFJPRFVDVCBPUklHSU5cIixcInJpZ2h0XCI6XCJIdW1ib2xkdCBDb3VudHksIENBXCJ9XX0se1wibmFtZVwiOlwicmlzZVwiLFwidGl0bGVcIjpcIlNvbHZlbnQtRnJlZSBTaW5nbGUgT3JpZ2luIENhcnRyaWRnZSBSZWZpbGxcIixcImRlc2NyaXB0aW9uXCI6W1wiTW9ybmluZ3MganVzdCBnb3QgYnJpZ2h0ZXIuIE91ciBSaXNlLCBhbGwtbmF0dXJhbCwgc2luZ2xlIG9yaWdpbiBvaWwgY2FydHJpZGdlcyBhcmUgYXZhaWxhYmxlIGluIDQgZGlmZmVyZW50IHRlcnBlbmUgZW5yaWNoZWQgZmxhdm9yczogRGFuayBCZXJyeSwgRW5saWdodGVu4oCdbWludOKAnSwgVHJvcGlDYWxpIGFuZCBOYXR1cmFsLlwiLFwiPGk+U2VsZWN0IGEgdG9uZSB0byBlbmhhbmNlIHlvdXIgZGF5OjwvaT5cIl0sXCJ0aHVtYlwiOlwicmlzZV90aHVtYi5qcGdcIixcImltYWdlXCI6XCJyaXNlLmpwZ1wiLFwiZmxhdm9yc1wiOlt7XCJuYW1lXCI6XCJEYW5rIEJlcnJ5XCIsXCJkZXNjXCI6W1wiSW1hZ2luZSB3YWtpbmcgdXAgZmVlbGluZyBjb21wbGV0ZWx5IHJlZnJlc2hlZCBhbmQgcmVhZHkgdG8gY29ucXVlciB0aGUgZGF5LlwiLFwiRmVlbDogQ3JlYXRpdmUsIGFsZXJ0LCBhbmQgaW5zcGlyZWRcIl19LHtcIm5hbWVcIjpcIkVubGlnaHRlbuKAnW1pbnTigJ1cIixcImRlc2NcIjpbXCJUbyBZb2dhIG9yIG5vdCB0byBZb2dhPyBXaGV0aGVyIHlvdSBzd2VhdCB0aHJvdWdoIGl0IG9yIHNsZXB0IHRocm91Z2ggaXQsIHdlIGdvdCB5b3UgY292ZXJlZC5cIixcIkZlZWw6IE1pbmRmdWwsIGZvY3VzZWQsIGFuZCBjYWxtXCJdfSx7XCJuYW1lXCI6XCJUcm9waUNhbGlcIixcImRlc2NcIjpbXCJZb3UgaG9wcGVkIG9uIGEgcGxhbmUgYW5kIGp1c3QgdG91Y2hlZCBkb3duIG9uIGEgdHJvcGljYWwgb2FzaXMuIFdlbGNvbWUgdG8gaXNsYW5kIGxpdmluZywgb3BlcmF0aW9uIHVud2luZC5cIixcIkZlZWw6IEhhcHB5LCByZWxheGVkLCBhbmQgY2FyZWZyZWVcIl19LHtcIm5hbWVcIjpcIk5hdHVyYWxcIixcImRlc2NcIjpbXCJHcmVlbiBzbW9vdGhpZWQgZm9yIGJyZWFrZmFzdCwgYXRlIHNhbGFkIGZvciBsdW5jaCwgcG93ZXIgY3ljbGVkIGFmdGVyIHdvcmsg4oCUIHRoYXQgd2FzIHRoZSBpZGVhIGFueXdheXMuXCIsXCJGZWVsOiBDbGVhci1oZWFkZWQsIGVuZXJnaXplZCwgYW5kIHJlZnJlc2hlZFwiXX1dLFwiZGV0YWlsXCI6W3tcImxlZnRcIjpcIlRIQ1wiLFwicmlnaHRcIjpcIj44NSVcIn0se1wibGVmdFwiOlwiU1RSQUlOXCIsXCJyaWdodFwiOlwiSHlicmlkXCJ9LHtcImxlZnRcIjpcIlBST0RVQ1QgT1JJR0lOXCIsXCJyaWdodFwiOlwiSHVtYm9sZHQgQ291bnR5LCBDQVwifV19LHtcIm5hbWVcIjpcInNoaW5lXCIsXCJ0aXRsZVwiOlwiQ2xlYXIgQ2FubmFiaXMgQ29uY2VudHJhdGVcIixcImRlc2NyaXB0aW9uXCI6W1wiU2hpbmUgc3Ryb25nZXIgYSBsaXR0bGUgbG9uZ2VyIHdpdGggb3VyIDEwMCUgc29sdmVudC1mcmVlLCBjbGVhciBjYW5uYWJpcyBjb25jZW50cmF0ZS4gV2UgdXNlIGEgcHJvcHJpZXRhcnkgZXh0cmFjdGlvbiBtZXRob2QgdG8gZGlzdGlsbCBhIGNsZWFuLCBjbGVhciBvaWwgZnJvbSBvdXIgSGlnaC1EZWZpbml0aW9uLCBTaW5nbGUgT3JpZ2luIE9HIEt1c2guIEFuIGluZGljYS1sZWFuaW5nIGh5YnJpZCwgb3VyIG9pbCBpcyB0b3RhbGx5IHB1cmUgYW5kIHRvdGFsbHkgcG90ZW50LlwiLFwiT3VyIGNvbmNlbnRyYXRlcyBjYW4gYmUgdXNlZCBpbiBsb2FkYWJsZSB2YXBlIHBlbnMsIG9pbCByaWdzLCBvciBzbWVhcmVkIG9udG8gam9pbnRzIGZvciBhIGxpdHRsZSBleHRyYSBzdHJlbmd0aC5cIixcIlByb2R1Y3QgdGVzdGVkIGFuZCBoZWxkICB0byB0aGUgaGlnaGVzdCBzdGFuZGFyZHMgZm9yIHB1cml0eSBhbmQgY29uc2lzdGVudCBUSEMgcG90ZW5jeS5cIixcIkV4cGVyaWVuY2U6IEEgYmFsYW5jZWQgYm9keSBhbmQgaGVhZCBoaWdoLiBNZWxsb3cgJiByZWxheGVkLlwiXSxcInRodW1iXCI6XCJzaGluZV90aHVtYi5qcGdcIixcImltYWdlXCI6XCJzaGluZS5qcGdcIixcImRldGFpbFwiOlt7XCJsZWZ0XCI6XCJUSENcIixcInJpZ2h0XCI6XCI+ODUlXCJ9LHtcImxlZnRcIjpcIlNUUkFJTlwiLFwicmlnaHRcIjpcIkh5YnJpZFwifSx7XCJsZWZ0XCI6XCJQUk9EVUNUIE9SSUdJTlwiLFwicmlnaHRcIjpcIkh1bWJvbGR0IENvdW50eSwgQ0FcIn1dfSx7XCJuYW1lXCI6XCJmbG93ZXJzXCIsXCJ0aXRsZVwiOlwiRnVsbCBCbG9vbXNcIixcImRlc2NyaXB0aW9uXCI6W1wiTmF0dXJhbGx5IGdyb3duIGFuZCBoYXJ2ZXN0ZWQgdW5kZXIgSHVtYm9sZHQgQ291bnR5IHN1bnNoaW5lLCBvdXIgZmxvd2VycyBhcmUgbWV0aWN1bG91c2x5IG1vbml0b3JlZCBhbmQgaGFuZGxlZCB3aXRoIHRoZSB1dG1vc3QgY2FyZSB0byBlbnN1cmUgcHJlbWl1bSBxdWFsaXR5LlwiLFwiQXMgbmF0aXZlIEh1bWJvbGR0IGdyb3dlcnMsIHdlIGhhdmUgYSBwdWxzZSBvbiB3aGF04oCZcyBpbiBkZW1hbmQgdG8gbWFrZSBzdXJlIHdlIHByb3ZpZGUgdGhlIG5ld2VzdCBhbmQgbW9zdCBleGNpdGluZyBzdHJhaW5zLlwiLFwiQWxsIG9mIG91ciBmbG93ZXJzIGFyZSBsYWItdGVzdGVkIHRlc3RlZCBhbmQgaGVsZCB0byB0aGUgaGlnaGVzdCBzdGFuZGFyZHMgZm9yIHB1cml0eSBhbmQgY29uc2lzdGVudCBUSEMgcG90ZW5jeS5cIl0sXCJ0aHVtYlwiOlwiZmxvd2Vyc190aHVtYi5qcGdcIixcImltYWdlXCI6XCJmbG93ZXJzLmpwZ1wiLFwiZmxhdm9yc1wiOlt7XCJuYW1lXCI6XCJIaWdoLURlZmluaXRpb24gT0cgS3VzaFwiLFwidGFnXCI6XCJoZFwiLFwidGhjXCI6XCIyNiVcIixcImRlc2NcIjpbXCJPbmUgb2YgdGhlIG1vc3QgbGVnZW5kYXJ5IGNhbm5hYmlzIHN0cmFpbnMsIE9HIEt1c2ggaXMgYSBzdHJvbmcsIEluZGljYS1sZWFuaW5nIGh5YnJpZCByZW5vd25lZCBmb3IgaXRzIHBvd2VyZnVsIHBvdGVuY3ksIG1lZGljaW5hbCBxdWFsaXRpZXMgYW5kIHVuaXF1ZSB0YXN0ZS4gVGhlIHN0cmFpbiBzbWVsbHMgYW5kIHRhc3RlcyBsaWtlIHN3ZWV0IGxlbW9ucyB3aXRoIGEgaGludCBvZiB3b29keSBlYXJ0aGluZXNzLiBXaGF0IG1ha2VzIG91cnMgSGlnaC1EZWZpbml0aW9uPyBUaGF04oCZcyBvdXIgYmVzdCBrZXB0IHNlY3JldC5cIl19LHtcIm5hbWVcIjpcIlN1bnNldCBTaGVyYmVydFwiLFwidGFnXCI6XCJzaGVyYmVydFwiLFwidGhjXCI6XCIyNC0yNiVcIixcImRlc2NcIjpbXCJBbiBJbmRpY2EtZG9taW5hbnQgaHlicmlkLCB0aGlzIGlzIGEgcG93ZXJmdWwgY3Jvc3MgYmV0d2VlbiB0aGUgR2lybCBTY291dCBDb29raWVzIGFuZCBQaW5rIFBhbnRpZXMgc3RyYWlucy4gS25vd24gZm9yIGl0cyB1cGxpZnRpbmcgam9sdCBvZiBjZXJlYnJhbCBlbmVyZ3ksIFN1bnNldCBTaGVyYmV0IHRhc3RlcyBsaWtlIHN3ZWV0IGNpdHJ1cyBhbmQgaG9uZXkgd2l0aCBhbiBlYXJ0aHkgYWZ0ZXJ0YXN0ZS5cIl19LHtcIm5hbWVcIjpcIlNvdXIgVGFuZ2llXCIsXCJ0YWdcIjpcInNvdXJcIixcInRoY1wiOlwiMjQlXCIsXCJkZXNjXCI6W1wiQW4gODAlIFNhdGl2YS1kb21pbmFudCBjcm9zcyBiZXR3ZWVuIEVhc3QgQ29hc3QgU291ciBEaWVzZWwgYW5kIFRhbmdpZSwgdGhpcyBzdHJhaW4gaXMga25vd24gZm9yIGl0cyBleHRyZW1lLCBtb3V0aHdhdGVyaW5nIGZsYXZvci4gU3Ryb25nIGNpdHJ1cyBub3RlcyBhcmUgbWV0IHdpdGggYW4gZWFydGh5IGRpZXNlbCBhZnRlcnRhc3RlLiBBIHdlbGwtYmFsYW5jZWQgc3RyYWluIHBlcmZlY3QgZm9yIGZ1bGwgYm9keSByZWxheGF0aW9uLlwiXX0se1wibmFtZVwiOlwiQmxhY2sgTGltZSBSZXNlcnZlXCIsXCJ0YWdcIjpcImxpbWVcIixcInRoY1wiOlwiMjQtMjYlXCIsXCJkZXNjXCI6W1wiQSBib3V0aXF1ZSwgSW5kaWNhIHN0cmFpbiB3aXRoIGEgcmVwdXRhYmxlIEVtZXJhbGQgVHJpYW5nbGUgaGVyaXRhZ2UuIEEgcG93ZXJmdWwgY3Jvc3MgYmV0d2VlbiBOb3J0aGVybiBMaWdodHMsIFB1cnBsZSBLdXNoIGFuZCBDaGVtZGF3ZyBTcGVjaWFsIFJlc2VydmUgc3RyYWlucy4gUmVmcmVzaGluZyBhbmQgZXh1YmVyYW50IHdpdGggYSBwcm9ub3VuY2VkIG1peCBvZiBzd2VldCBjaXRydXMsIHBlcHBlcnkgc3BpY2UgYW5kIGp1aWN5IGxpbWUuXCJdfV0sXCJkZXRhaWxcIjpbe1wibGVmdFwiOlwiVEhDXCIsXCJyaWdodFwiOlwiMjQtMjYlXCJ9LHtcImxlZnRcIjpcIlNUUkFJTlwiLFwicmlnaHRcIjpcIkh5YnJpZFwifSx7XCJsZWZ0XCI6XCJQUk9EVUNUIE9SSUdJTlwiLFwicmlnaHRcIjpcIkh1bWJvbGR0IENvdW50eSwgQ0FcIn1dfV0sXCJ2ZW5kb3JzXCI6W3tcIm5hbWVcIjpcIkh1bWJvbGR0IFBhdGllbnQgUmVzb3VyY2UgQ2VudGVyXCIsXCJwbGFjZUlkXCI6XCJDaElKVzNzUnRBVlgwVlFSN3E3X2hERGNuQXNcIixcImltYWdlXCI6XCJocHJjLmpwZ1wifSx7XCJuYW1lXCI6XCJCbHVtIE9ha1wiLFwicGxhY2VJZFwiOlwiQ2hJSk5VaS1BcXlBajRBUk9DUGl0V3h0cHNNXCIsXCJpbWFnZVwiOlwiYmx1bS5qcGdcIn1dLFwiY29weVwiOntcImFib3V0XCI6e1widGl0bGVcIjpcImFib3V0IHVzXCIsXCJjb3B5c1wiOltcIldlIGFyZSB0aGUgc21hbGxlc3QgZ3JhaW5zIG9mIHJpY2gsIGhlYWx0aHkgc29pbC4gV2UgYXJlIHRoZSBveHlnZW4gdGhpY2sgYWlyIHByb3ZpZGVkIGJ5IHRoZSBmb3Jlc3RzIG9mIEh1bWJvbGR0IENvdW50eS4gV2UgYXJlIHRoZSBjYXJpbmcgaGFuZHMgdGhhdCB0dXJuIGhpZ2ggcXVhbGl0eSwgY2hlbWljYWwtZnJlZSBjYW5uYWJpcyBpbnRvIGJlYXV0aWZ1bGx5IGNyYWZ0ZWQgY29uY2VudHJhdGVzLCBhbGxvd2luZyB5b3VyIGxpZmUgdG8gYmUgYSBsaXR0bGUgZWFzaWVyLlwiLFwiTGFzdGx5LCB3ZSBhcmUgdGhlIHJheXMgb2Ygc3Vuc2hpbmUgdGhhdCBzcGlsbCBkb3duIHVwb24gdGhlIG1vdW50YWludG9wIOKAlCB0aGUgYnJpZ2h0IGFuZCBtb3N0IHBvd2VyZnVsIHNvdXJjZSB0aGF0IGVucmljaGVzIGFsbCBvZiBvdXIgY2FubmFiaXMgYXQgRnVsbCBTdW4uXCJdfSxcImNvbnRhY3RcIjp7XCJ0aXRsZVwiOlwiY29udGFjdCB1c1wiLFwic3VidGl0bGVcIjpcIldhbnQgbW9yZSBzdW5ncm93biBnb29kbmVzcz9cIn0sXCJwcm9jZXNzXCI6e1widGl0bGVcIjpcIm91ciBwcm9jZXNzXCIsXCJjb3B5c1wiOltcIkFsbCBvZiBvdXIgcHJvZHVjdHMgY29uc2lzdCBvZiBTaW5nbGUgT3JpZ2luLCBIaWdoLURlZmluaXRpb24gT0cgS3VzaCBjYW5uYWJpcy4gV2hpbGUgb3RoZXJzIGNhbGwgdGhpcyB0aGVpciDigJxSZXNlcnZl4oCdIHdlIGNhbGwgdGhpcyBvdXIgXFxcIkFsbCB0aGUgVGltZeKAnS4gV2UgaGFuZCBzZWxlY3Qgb3VyIHNtYWxsIGdyb3VwIG9mIHByb2R1Y2VycyBmb3IgdGhlaXIgY29uc2lzdGVudCBjb21taXRtZW50IHRvIHF1YWxpdHkgYW5kIGV4Y2VsbGVuY2UuIFRoZXkgd29yayB0aGVpciBtYWdpYyB3aXRoIHByb3ByaWV0YXJ5IHN0cmFpbiB3aGljaCBhbGxvd3MgdXMgdG8gbWFpbnRhaW4gcXVhbGl0eSwgY29uc2lzdGVuY3ksIDxpPmFuZDwvaT4gcXVhbnRpdHkuIFJhaXNlZCBvdXQgb2YgdGhlIG1vc3QgcmVwdXRhYmxlIGdyb3dpbmcgcmVnaW9uIGluIHRoZSB3b3JsZCwgb3VyIEh1bWJvbGR0IENvdW50eSBmYXJtcyBzdGF5cyByb290ZWQgaW4gY29uc2Npb3VzbHkgZ3Jvd2luZyB0aGUgYmVzdCBhbmQgYnJpZ2h0ZXN0IHN1bmdyb3duIGNhbm5hYmlzLlwiLFwiRXh0cmFjdGluZyBvaWwgZnJvbSBwbGFudHMgaGFzIGJlZW4gd2lkZWx5IHVzZWQgYWNyb3NzIGluZHVzdHJpZXMgZm9yIGNlbnR1cmllcy4gRmluZGluZyB0aGUgcmlnaHQgY2FubmFiaXMgZXh0cmFjdGlvbiBwcm9jZXNzIGhhcyB0YWtlbiB5ZWFycywgYnV0IHdlIGhhdmUgZGVzaWduZWQgYW5kIHBlcmZlY3RlZCBhIG1vZGVsIHRoYXQgbWFrZXMgb3VyIHByb2R1Y3RzIHN1cGVyaW9yLiBPdXIgcHJvcHJpZXRhcnkgZXh0cmFjdCBtZXRob2QgaXMgZG9uZSBhdCBvdXIgc3RhdGUgb2YgdGhlIGFydCBmYWNpbGl0eSBpbiBIdW1ib2xkdCBDb3VudHkuIFRoZSByZXN1bHQgaXMgYW4gdWx0cmEtcmVmaW5lZCBvaWwgdGhhdCBpcyBsYWIgdGVzdGVkIGFuZCAxMDAlIHNvbHZlbnQtZnJlZSwgZXZlcnkgc2luZ2xlIHRpbWUuIFlvdXIgd2VsbC1iZWluZyBpcyBvdXIgdG9wIHByaW9yaXR5LlwiXX19fTsiLCJcbkRlbGF5ID1cbiAgaGVpZ2h0OiBmYWxzZVxuICB3aW46IGZhbHNlXG4gIGxvZ286IGZhbHNlXG4gIGhlYWRlcjogZmFsc2VcbiAgcGVhY2g6IGZhbHNlXG4gIGZpbGxlZDogZmFsc2VcblxuICBpOiAtPlxuXG4gICAgQHdpbiA9ICQgd2luZG93XG4gICAgQGhlaWdodCA9IEB3aW4uaGVpZ2h0KClcbiAgICBAbG9nbyA9ICQgJy5zZWN0aW9uLnNlY3Rpb25fdG9wID4gLm1pZGRsZSdcbiAgICBAaGVhZGVyID0gJCAnaGVhZGVyJ1xuICAgIEBwZWFjaCA9IF8uaGV4MnJnYiBjb25maWcuY29sb3IucGVhY2gxXG4gICAgJCh3aW5kb3cpLnNjcm9sbCBAY2hlY2tTY3JvbGxcblxuICBjaGVja1Njcm9sbDogLT5cblxuICAgIHBlcmMgPSAoRGVsYXkud2luLnNjcm9sbFRvcCgpICogMTAwIC8gRGVsYXkuaGVpZ2h0KS50b0ZpeGVkIDJcblxuICAgIGlmIHBlcmMgPiAxMDBcbiAgICAgIGlmIERlbGF5LmZpbGxlZCBpcyBmYWxzZVxuICAgICAgICAkKCdoZWFkZXInKS5hZGRDbGFzcyAnZmlsbGVkJ1xuICAgICAgICBEZWxheS5maWxsZWQgPSB0cnVlXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGVsc2VcbiAgICAgIGlmIERlbGF5LmZpbGxlZCBpcyB0cnVlXG4gICAgICAgICQoJ2hlYWRlcicpLnJlbW92ZUNsYXNzICdmaWxsZWQnXG4gICAgICAgIERlbGF5LmZpbGxlZCA9IGZhbHNlXG5cbiAgICBvcGFjaXR5ID0gKHBlcmMvMTAwKS50b0ZpeGVkKDEpIC8gMlxuXG4gICAgaWYgSW5kZXgub2Zmc2V0IGlzbnQgMFxuICAgICAgI0RlbGF5LmxvZ28uY3NzKCd0cmFuc2Zvcm0nLCBcInRyYW5zbGF0ZSgwcHgsICN7cGVyYyo3fXB4KVwiKVxuICAgICAgRGVsYXkuaGVhZGVyLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIFwicmdiYSgje0RlbGF5LnBlYWNoLnJ9LCN7RGVsYXkucGVhY2guZ30sI3tEZWxheS5wZWFjaC5ifSwje29wYWNpdHl9KVwiKVxuXG4iLCJGb2xkID1cblxuICBpblZpZXdwb3J0OiAoZWwpIC0+XG5cbiAgICByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBcbiAgICByZXR1cm4oXG4gICAgICAocmVjdC50b3AgPj0gMCB8fCByZWN0LmJvdHRvbSA+PSAwKSAmJlxuICAgICAgKHJlY3QudG9wIDw9IHdpbmRvdy5pbm5lckhlaWdodCB8fCByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQpXG4gICAgKVxuXG5cbiAgdmlld3M6IChlbHMsIHJlc3VsdCkgLT5cblxuICAgIHZpZXdzID0ge31cblxuICAgIGVscy5lYWNoIChpLCBlbCkgLT5cblxuICAgICAgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBuYW1lID0gJChlbCkuYXR0ciAnaWQnXG5cbiAgICAgIHJldHVybiB0cnVlIGlmIG5hbWUgaXMgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChcbiAgICAgICAgKHJlY3QudG9wID49IDAgfHwgcmVjdC5ib3R0b20gPj0gMCkgJiZcbiAgICAgICAgKHJlY3QudG9wIDw9IHdpbmRvdy5pbm5lckhlaWdodCB8fCByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQpXG4gICAgICApXG4gICAgICAgIG1pZGRsZSA9IHdpbmRvdy5pbm5lckhlaWdodC8yXG4gICAgICAgIGlmIHJlY3QudG9wIDwgbWlkZGxlICYmIHJlY3QuYm90dG9tID4gbWlkZGxlXG4gICAgICAgICAgcmVzdWx0KG5hbWUpXG4iLCJHYXRlID1cblxuICBpOiAtPlxuXG4gICAgQGhhbmRsZXJzKClcblxuICAgICNfLm9mZignLmdhdGUnKSBpZiAgQ29va2llcy5nZXQoJ2dhdGUnKSBpc250IHVuZGVmaW5lZFxuXG4gIGhhbmRsZXJzOiAtPlxuXG4gICAgJCgnLmdhdGUgPiAuZ3JhZGllbnQgPiAubWlkZGxlID4gLmJ1dHRvbnMgPiAuYnV0dG9uJykub24gJ2NsaWNrJywgQHllc25vXG5cbiAgeWVzbm86IC0+XG5cbiAgICByZXR1cm4gbG9jYXRpb24uaHJlZiA9ICdodHRwOi8vd3d3LmJ1aWxkYWJlYXIuY29tLycgaWYgJCh0aGlzKS50ZXh0KCkgaXMgJ05PJ1xuICAgIGlmICQodGhpcykudGV4dCgpIGlzICdZRVMnXG4gICAgICBfLm9mZiAnLmdhdGUnXG4gICAgICBDb29raWVzLnNldCAnZ2F0ZScsIHRydWUsIGV4cGlyZXM6IDFcblxuIiwiSW5kZXggPVxuICBvZmZzZXQ6IC04NlxuXG4gIGk6IC0+XG5cbiAgICBHYXRlLmkoKVxuXG4gICAgRGVsYXkuaSgpXG4gICAgUHJvZHVjdC5pKClcblxuICAgIGlmICQod2luZG93KS53aWR0aCgpIDwgMTAwMFxuICAgICAgQG9mZnNldCA9IDBcblxuICAgIEBoYW5kbGVycygpXG5cbiAgICBzZXRJbnRlcnZhbCBJbmRleC5tZW51LCA1MDBcblxuICBoYW5kbGVyczogLT5cbiAgICAkKCdoZWFkZXIgPiAuYnVyZ2VyJykuY2xpY2sgQGJ1cmdlckhhbmRsZXJcbiAgICAkKCdoZWFkZXIgPiAuaW5uZXIgPiAubWVudSA+IC5pdGVtcyA+IC5pbm5lciA+IC5pdGVtJykuY2xpY2sgQG1lbnVIYW5kbGVyXG4gICAgJCgnaGVhZGVyID4gLmlubmVyID4gLmxvZ28nKS5jbGljayBAbWVudUhhbmRsZXJcblxuICBidXJnZXJIYW5kbGVyOiAtPlxuICAgIF8uc3dhcCAnaGVhZGVyID4gLmJ1cmdlcidcbiAgICBfLnN3YXAgJ2hlYWRlciA+IC5pbm5lciA+IC5tZW51ID4gLml0ZW1zJ1xuXG4gIG1lbnVIYW5kbGVyOiAtPlxuICAgIF8ub24gJ2hlYWRlciA+IC5idXJnZXInXG4gICAgXy5vZmYgJ2hlYWRlciA+IC5pbm5lciA+IC5tZW51ID4gLml0ZW1zJ1xuICAgIEluZGV4LnNlY3Rpb24gJCh0aGlzKS5kYXRhICdpdGVtJ1xuXG4gIHNlY3Rpb246IChzZWN0aW9uKSAtPlxuICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICQoJ2h0bWwsIGJvZHknKS5zY3JvbGxUbyBcIiMje3NlY3Rpb259XCIsXG4gICAgICAgIGR1cmF0aW9uOiA1MDBcbiAgICAgICAgb2Zmc2V0OiBJbmRleC5vZmZzZXRcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSBzZWN0aW9uXG4gICAgLCAxMDBcblxuICBtZW51OiAtPlxuXG4gICAgRm9sZC52aWV3cyAkKCcuc2VjdGlvbicpLCAocmVzdWx0KSAtPlxuICAgICAgXy5vZmYgJ2hlYWRlciA+IC5pbm5lciA+IC5tZW51ID4gLml0ZW1zID4gLmlubmVyID4gLml0ZW0nXG4gICAgICBfLm9uIFwiLml0ZW1fI3tyZXN1bHR9XCJcblxuICAgICAgaWYgcmVzdWx0IGlzbnQgJ3Byb2R1Y3RzJyBhbmQgUHJvZHVjdC5kZXRhaWxzIGlzIHRydWVcbiAgICAgICAgUHJvZHVjdC5jbG9zZUNsaWNrKClcbiIsIk1hcCA9XG4gIG1hcDogZmFsc2VcbiAgcGxhY2VzOiB7fVxuXG4gIGk6IC0+XG5cbiAgICBAbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksXG4gICAgICBjZW50ZXI6IGxhdDogMzkuNjA5MjQ3NCwgbG5nOiAtMTIzLjQ0NTM3NTVcbiAgICAgIHpvb206IDdcbiAgICAgIHN0eWxlczogQHN0eWxlc1xuICAgICAgb3B0aW9uczogQG9wdGlvbnNcblxuICAgIHNlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLlBsYWNlc1NlcnZpY2UoQG1hcClcblxuICAgIGZvciB2ZW5kb3IgaW4gY29uZmlnLnZlbmRvcnNcbiAgICAgIHNlcnZpY2UuZ2V0RGV0YWlsc1xuICAgICAgICBwbGFjZUlkOiB2ZW5kb3IucGxhY2VJZFxuICAgICAgLCAocmVzdWx0LCBzdGF0dXMpIC0+XG4gICAgICAgIE1hcC5wbGFjZXNbcmVzdWx0LnBsYWNlX2lkXSA9IHJlc3VsdFxuICAgICAgICBNYXAubWFya2VycygpIGlmIF8ub2JqYyhjb25maWcudmVuZG9ycykgaXMgXy5vYmpjKE1hcC5wbGFjZXMpXG5cblxuICAgIEBoYW5kbGVycygpXG5cbiAgaGFuZGxlcnM6IC0+XG4gICAkKCcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UgPiAuY2xvc2UnKS5jbGljayBAcGxhY2VDbG9zZUhhbmRsZXJcbiAgbWFya2VyczogLT5cblxuICAgIG1hcmtlcnMgPSBbXVxuXG4gICAgZm9yIGlkLCBwbGFjZSBvZiBAcGxhY2VzXG5cbiAgICAgIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXJcbiAgICAgICAgbWFwOiBNYXAubWFwXG4gICAgICAgIHBvc2l0aW9uOiBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvblxuICAgICAgICBpY29uOlxuICAgICAgICAgIHVybDogJy9pbWFnZXMvbWFwL21hcmtlci5wbmcnLFxuICAgICAgICAgIHNjYWxlZFNpemU6IG5ldyBnb29nbGUubWFwcy5TaXplKDYwLCA2MClcbiAgICAgICAgICBvcmlnaW46IG5ldyBnb29nbGUubWFwcy5Qb2ludCgwLCAwKVxuICAgICAgICBwbGFjZTpcbiAgICAgICAgICBwbGFjZUlkOiBwbGFjZS5wbGFjZV9pZFxuICAgICAgICAgIGxvY2F0aW9uOiBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvblxuICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIgbWFya2VyLCAnY2xpY2snLCBNYXAubWFya2VySGFuZGxlclxuICAgICAgbWFya2Vycy5wdXNoIG1hcmtlclxuXG4gICAgbWFya2VyQ2x1c3RlciA9IG5ldyBNYXJrZXJDbHVzdGVyZXIgTWFwLm1hcCwgbWFya2VycyxcbiAgICAgIGltYWdlUGF0aDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L2V4YW1wbGVzL21hcmtlcmNsdXN0ZXJlci9tJ1xuXG4gIG1hcmtlckhhbmRsZXI6IC0+XG5cbiAgIHBsYWNlID0gTWFwLnBsYWNlc1t0aGlzLnBsYWNlLnBsYWNlSWRdXG5cblxuICAgaWYgcGxhY2UucGhvdG9zXG4gICAgJCgnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlID4gLmlubmVyID4gLmltYWdlJykuYXR0ciAnc3JjJyxwbGFjZS5waG90b3NbMF0uZ2V0VXJsIG1heFdpZHRoOiAyNjAsIG1heEhlaWdodDogMjAwXG4gICAgXy5vbiAnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlID4gLmlubmVyID4gLmltYWdlJ1xuICAgZWxzZVxuICAgIF8ub2ZmICcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UgPiAuaW5uZXIgPiAuaW1hZ2UnXG5cbiAgICQoJy5zZWN0aW9uX2xvY2F0aW9ucyA+IC5wbGFjZSA+IC5pbm5lciA+IC5uYW1lJykudGV4dCBwbGFjZS5uYW1lXG4gICAkKCcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UgPiAuaW5uZXIgPiAubmFtZScpLmF0dHIgJ2hyZWYnLCBwbGFjZS51cmxcbiAgICQoJy5zZWN0aW9uX2xvY2F0aW9ucyA+IC5wbGFjZSA+IC5pbm5lciA+IC5hZGRyZXNzJykuaHRtbCBwbGFjZS5mb3JtYXR0ZWRfYWRkcmVzc1xuICAgJCgnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlID4gLmlubmVyID4gLnBob25lJykuaHRtbCBwbGFjZS5mb3JtYXR0ZWRfcGhvbmVfbnVtYmVyXG5cbiAgIF8ub24gJy5zZWN0aW9uX2xvY2F0aW9ucyA+IC5wbGFjZSdcblxuICAgTWFwLm1hcC5zZXRab29tKDE2KVxuICAgTWFwLm1hcC5zZXRDZW50ZXIodGhpcy5nZXRQb3NpdGlvbigpKVxuXG4gICBjb25zb2xlLmxvZyBwbGFjZVxuXG5cbiAgcGxhY2VDbG9zZUhhbmRsZXI6IC0+XG4gICAgXy5vZmYgJy5zZWN0aW9uX2xvY2F0aW9ucyA+IC5wbGFjZSdcbiAgICBNYXAubWFwLnNldFpvb20oMTEpXG4gICAgXG4gIG9wdGlvbnM6XG4gICAgc2Nyb2xsd2hlZWw6IGZhbHNlXG4gICAgbWFwVHlwZUNvbnRyb2w6IGZhbHNlXG4gICAgZnVsbHNjcmVlbkNvbnRyb2w6IGZhbHNlXG5cbiAgc3R5bGVzOlxuICAgIFtcbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ2FkbWluaXN0cmF0aXZlJ1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnbGFiZWxzLnRleHQuZmlsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbIHsgJ2NvbG9yJzogJyM5ZTVkMDcnIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAnYWRtaW5pc3RyYXRpdmUuY291bnRyeSdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2xhYmVscy50ZXh0LmZpbGwnXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICdjb2xvcic6ICcjZjI5OTM0JyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ2FkbWluaXN0cmF0aXZlLmxvY2FsaXR5J1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnbGFiZWxzLnRleHQuZmlsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbIHsgJ2NvbG9yJzogJyM5ZTVkMDcnIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAnbGFuZHNjYXBlJ1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnYWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAnY29sb3InOiAnI2Y4ZjVmMicgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdwb2knXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdhbGwnXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICd2aXNpYmlsaXR5JzogJ29mZicgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdyb2FkJ1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnYWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFtcbiAgICAgICAgICB7ICdzYXR1cmF0aW9uJzogLTEwMCB9XG4gICAgICAgICAgeyAnbGlnaHRuZXNzJzogNDUgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdyb2FkJ1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnZ2VvbWV0cnkuZmlsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbIHsgJ2NvbG9yJzogJyNmMjk5MzQnIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAncm9hZC5oaWdod2F5J1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnYWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAndmlzaWJpbGl0eSc6ICdzaW1wbGlmaWVkJyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3JvYWQuYXJ0ZXJpYWwnXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdsYWJlbHMuaWNvbidcbiAgICAgICAgJ3N0eWxlcnMnOiBbIHsgJ3Zpc2liaWxpdHknOiAnb2ZmJyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3RyYW5zaXQnXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdhbGwnXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICd2aXNpYmlsaXR5JzogJ29mZicgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICd3YXRlcidcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2FsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbXG4gICAgICAgICAgeyAnY29sb3InOiAnIzAwYWZhYScgfVxuICAgICAgICAgIHsgJ3Zpc2liaWxpdHknOiAnb24nIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cblxuIiwiUHJvZHVjdCA9XG4gIHRsOiBmYWxzZVxuICBkZXRhaWxzOiBmYWxzZVxuXG4gIGk6IC0+XG4gICAgQHRsID0gbmV3IFRpbWVsaW5lTWF4IHJlcGVhdDogMFxuXG4gICAgQGhhbmRsZXJzKClcblxuICBoYW5kbGVyczogLT5cblxuICAgICQoJy5zZWN0aW9uX3Byb2R1Y3RzID4gLnByb2R1Y3RsaXN0ID4gLnByb2R1Y3QnKS5jbGljayBAcHJvZHVjdENsaWNrXG4gICAgJCgnLnNlY3Rpb25fcHJvZHVjdHMgPiAuZGV0YWlscyA+IC5kZXRhaWwgPiAuY2xvc2UnKS5jbGljayBAY2xvc2VDbGlja1xuICAgICQoJy5zZWN0aW9uX3Byb2R1Y3RzID4gLmRldGFpbHMgPiAuZGV0YWlsID4gLmNvcHkgPiAuaW5uZXIgPiAuZmxhdm9ycyA+IC5mbGF2b3IgPiAubmFtZScpLmNsaWNrIEBmbGF2b3JcblxuICBmbGF2b3I6IC0+XG4gICAgcGFyZW50ID0gJCh0aGlzKS5wYXJlbnQoKVxuICAgIHN0YXRlID0gXy5zdGF0ZSBwYXJlbnRcbiAgICBfLm9mZiAnLmZsYXZvcnMgPiAuZmxhdm9yJ1xuICAgIGlmIHN0YXRlXG4gICAgICBfLm9mZiBwYXJlbnRcbiAgICBlbHNlXG4gICAgICBfLm9uIHBhcmVudFxuICAgICAgdCA9ICQodGhpcylcbiAgICAgIGlmIHQuZGF0YSgndGFnJykgaXNudCB1bmRlZmluZWRcbiAgICAgICAgXy5vZmYgJy5pbWFnZS50YWcnXG4gICAgICAgIF8ub24gXCIuaW1hZ2UudGFnLnRhZ18je3QuZGF0YSgndGFnJyl9XCJcbiAgICAgICAgdGhjID0gdC5kYXRhKCd0aGMnKVxuICAgICAgICAkKCcuZGF0YTpmaXJzdC1jaGlsZCA+IC5yaWdodCcpLnRleHQgdGhjXG5cbiAgcHJvZHVjdENsaWNrOiAtPlxuICAgIHByb2R1Y3QgPSAkKHRoaXMpLmRhdGEgJ3Byb2R1Y3QnXG4gICAgXy5vbiBcIltpZD0nZGV0YWlsICN7cHJvZHVjdH0nXVwiXG4gICAgXy5vbiBcIltpZD0naW1hZ2UgI3twcm9kdWN0fSddXCJcbiAgICBQcm9kdWN0LmRldGFpbHMgPSB0cnVlXG4gICAgaWYgSW5kZXgub2Zmc2V0IGlzbnQgMFxuICAgICAgSW5kZXguc2VjdGlvbiAncHJvZHVjdHMnXG5cbiAgICBlbXB0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgJ3N1bkVtcHR5J1xuICAgIGZvciBkaXYgaW4gZW1wdHlcbiAgICAgIHRsID0gbmV3IFRpbWVsaW5lTWF4IHJlcGVhdDogMFxuICAgICAgdGwudG8gZGl2LCAxLjAsIHttb3JwaFNWRzoge3NoYXBlOiAnI3N1bkZpbGxlZCcsIHNoYXBlSW5kZXg6IDN9LCBlYXNlOkV4cG8uZWFzZUluT3V0fVxuXG4gIGNsb3NlQ2xpY2s6IC0+XG4gICAgZW1wdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lICdzdW5FbXB0eSdcbiAgICBmb3IgZGl2IGluIGVtcHR5XG4gICAgICB0bCA9IG5ldyBUaW1lbGluZU1heCByZXBlYXQ6IDBcbiAgICAgIHRsLnRvIGRpdiwgMC4wMSwge21vcnBoU1ZHOiAnI3N1bkVtcHR5JywgZWFzZTpFeHBvLmVhc2VJbk91dH1cblxuICAgIF8ub2ZmICcuc2VjdGlvbl9wcm9kdWN0cyA+IC5kZXRhaWxzID4gLmRldGFpbCdcbiAgICBfLm9mZiAnLnNlY3Rpb25fcHJvZHVjdHMgPiAuZGV0YWlscyA+IC5pbWFnZSdcbiAgICBQcm9kdWN0LmRldGFpbHMgPSBmYWxzZVxuIl19
