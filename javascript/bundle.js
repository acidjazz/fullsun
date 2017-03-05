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
          "tag": "hd",
          "desc": ["One of the most legendary cannabis strains, OG Kush is a strong, Indica-leaning hybrid renowned for its powerful potency, medicinal qualities and unique taste. The strain smells and tastes like sweet lemons with a hint of woody earthiness. What makes ours High-Definition? That’s our best kept secret."]
        }, {
          "name": "Sunset Sherbert",
          "tag": "sherbert",
          "desc": ["An Indica-dominant hybrid, this is a powerful cross between the Girl Scout Cookies and Pink Panties strains. Known for its uplifting jolt of cerebral energy, Sunset Sherbet tastes like sweet citrus and honey with an earthy aftertaste."]
        }, {
          "name": "Sour Tangie",
          "tag": "sour",
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
    var parent, state, t;
    parent = $(this).parent();
    state = _.state(parent);
    _.off('.flavors > .flavor');
    if (state) {
      return _.off(parent);
    } else {
      _.on(parent);
      t = $(this);
      if (t.data('tag') !== void 0) {
        return _on(".image.tag.tag_" + (t.data('tag')));
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjI1Ni5jb2ZmZWUiLCJjb25maWcuY29mZmVlIiwiZGVsYXkuY29mZmVlIiwiZm9sZC5jb2ZmZWUiLCJnYXRlLmNvZmZlZSIsImluZGV4LmNvZmZlZSIsIm1hcC5jb2ZmZWUiLCJwcm9kdWN0LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBLENBQUE7RUFBQTs7QUFBQSxDQUFBLEdBRUU7RUFBQSxDQUFBLEVBQUcsU0FBQTtXQUNELElBQUMsQ0FBQSxPQUFELEdBQVcsV0FBQSxDQUFZLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLElBQWIsQ0FBWixFQUE2QixHQUE3QjtFQURWLENBQUg7RUFHQSxDQUFBLEVBQ0U7SUFBQSxNQUFBLEVBQVEsS0FBUjtJQUNBLE9BQUEsRUFBUyxDQURUO0dBSkY7RUFPQSxJQUFBLEVBQU0sU0FBQyxFQUFELEVBQUssTUFBTCxFQUFtQixHQUFuQjs7TUFBSyxTQUFPOzs7TUFBTyxNQUFJOztJQUUzQixJQUFHLENBQUEsQ0FBQSxFQUFBLFlBQWtCLE1BQWxCLENBQUg7TUFDRSxFQUFBLEdBQUssQ0FBQSxDQUFFLEVBQUYsRUFEUDs7SUFHQSxJQUFHLE1BQUEsS0FBWSxLQUFmO01BQ0UsRUFBRSxDQUFDLFdBQUgsQ0FBZSxNQUFmLEVBREY7O0lBR0EsSUFBRyxHQUFBLEtBQVMsS0FBWjtNQUNFLEVBQUUsQ0FBQyxRQUFILENBQVksR0FBWixFQURGOztBQUdBLFdBQU87RUFYSCxDQVBOO0VBb0JBLEdBQUEsRUFBSyxTQUFDLEVBQUQsRUFBSyxDQUFMOztNQUFLLElBQUU7O0lBRVYsSUFBRyxDQUFDLENBQUMsTUFBRixJQUFhLENBQUMsQ0FBQyxPQUFGLEdBQVksQ0FBNUI7TUFFRSxJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4sRUFBVSxLQUFWLEVBQWlCLFFBQWpCO01BQ0EsVUFBQSxDQUFXLFNBQUE7UUFDVCxJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4sRUFBVSxRQUFWLEVBQW9CLEtBQXBCO2VBQ0EsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsSUFBVixFQUFnQixLQUFoQjtNQUZTLENBQVgsRUFHRSxDQUFDLENBQUMsT0FBRixHQUFVLElBQVYsR0FBaUIsR0FIbkIsRUFIRjtLQUFBLE1BQUE7TUFTRSxJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4sRUFBVSxJQUFWLEVBQWdCLEtBQWhCLEVBVEY7O0VBRkcsQ0FwQkw7RUFtQ0EsRUFBQSxFQUFJLFNBQUMsRUFBRCxFQUFLLENBQUw7V0FDRixJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4sRUFBVSxLQUFWLEVBQWlCLElBQWpCO0VBREUsQ0FuQ0o7RUFzQ0EsS0FBQSxFQUFPLFNBQUMsRUFBRDtJQUNMLElBQUcsQ0FBQSxDQUFBLEVBQUEsWUFBa0IsTUFBbEIsQ0FBSDtNQUNFLEVBQUEsR0FBSyxDQUFBLENBQUUsRUFBRixFQURQOztJQUdBLElBQUcsRUFBRSxDQUFDLFFBQUgsQ0FBWSxLQUFaLENBQUg7QUFDRSxhQUFPLE1BRFQ7O0lBRUEsSUFBRyxFQUFFLENBQUMsUUFBSCxDQUFZLElBQVosQ0FBSDtBQUNFLGFBQU8sS0FEVDs7QUFHQSxXQUFPO0VBVEYsQ0F0Q1A7RUFpREEsSUFBQSxFQUFNLFNBQUMsRUFBRCxFQUFLLENBQUw7SUFFSixJQUFHLENBQUEsQ0FBQSxFQUFBLFlBQWtCLE1BQWxCLENBQUg7TUFDRSxFQUFBLEdBQUssQ0FBQSxDQUFFLEVBQUYsRUFEUDs7SUFHQSxJQUFHLEVBQUUsQ0FBQyxRQUFILENBQVksS0FBWixDQUFIO01BQ0UsSUFBQyxDQUFBLEVBQUQsQ0FBSSxFQUFKLEVBQVEsQ0FBUixFQURGO0tBQUEsTUFBQTtNQUdFLElBQUMsQ0FBQSxHQUFELENBQUssRUFBTCxFQUFTLENBQVQsRUFIRjs7RUFMSSxDQWpETjtFQTZEQSxNQUFBLEVBQVEsU0FBQyxHQUFEO0FBQ04sV0FBTyxrQkFBQSxDQUFtQixHQUFuQixDQUNMLENBQUMsT0FESSxDQUNJLElBREosRUFDVSxLQURWLENBRUwsQ0FBQyxPQUZJLENBRUksSUFGSixFQUVVLEtBRlYsQ0FHTCxDQUFDLE9BSEksQ0FHSSxLQUhKLEVBR1csS0FIWCxDQUlMLENBQUMsT0FKSSxDQUlJLEtBSkosRUFJVyxLQUpYLENBS0wsQ0FBQyxPQUxJLENBS0ksS0FMSixFQUtXLEtBTFgsQ0FNTCxDQUFDLE9BTkksQ0FNSSxNQU5KLEVBTVksR0FOWjtFQURELENBN0RSO0VBc0VBLENBQUEsRUFBRyxTQUFDLFFBQUQsRUFBVyxNQUFYLEVBQW1CLEtBQW5CLEVBQTBCLEtBQTFCO1dBQ0QsSUFBSSxDQUFDLElBQUwsQ0FBVSxDQUFDLGFBQUQsRUFBZ0IsUUFBaEIsRUFBMEIsTUFBMUIsRUFBa0MsS0FBbEMsRUFBeUMsS0FBekMsQ0FBVjtFQURDLENBdEVIO0VBeUVBLElBQUEsRUFBTSxTQUFDLEdBQUQsRUFBTSxHQUFOO0FBQ0osV0FBTyxJQUFJLENBQUMsS0FBTCxDQUFXLElBQUksQ0FBQyxNQUFMLENBQUEsQ0FBQSxHQUFnQixHQUEzQixDQUFBLEdBQWtDO0VBRHJDLENBekVOO0VBNEVBLE9BQUEsRUFBUyxTQUFDLEdBQUQ7QUFDUCxRQUFBO0lBQUEsTUFBQSxHQUFTLDJDQUEyQyxDQUFDLElBQTVDLENBQWlELEdBQWpEO1dBQ1Q7TUFBQSxDQUFBLEVBQUcsUUFBQSxDQUFTLE1BQU8sQ0FBQSxDQUFBLENBQWhCLEVBQW9CLEVBQXBCLENBQUg7TUFDQSxDQUFBLEVBQUcsUUFBQSxDQUFTLE1BQU8sQ0FBQSxDQUFBLENBQWhCLEVBQW9CLEVBQXBCLENBREg7TUFFQSxDQUFBLEVBQUcsUUFBQSxDQUFTLE1BQU8sQ0FBQSxDQUFBLENBQWhCLEVBQW9CLEVBQXBCLENBRkg7O0VBRk8sQ0E1RVQ7RUFrRkEsSUFBQSxFQUFNLFNBQUMsR0FBRDtBQUNKLFFBQUE7V0FBQTs7QUFBQztXQUFBLFFBQUE7O3FCQUFBO0FBQUE7O1FBQUQsQ0FBb0IsQ0FBQztFQURqQixDQWxGTjtFQXFGQSxJQUFBLEVBQU0sU0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixRQUFuQjtBQUVKLFFBQUE7SUFBQSxFQUFBLEdBQUssUUFBUSxDQUFDLGFBQVQsQ0FBdUIsUUFBdkI7SUFDTCxFQUFFLENBQUMsSUFBSCxHQUFVO0lBQ1YsRUFBRSxDQUFDLEdBQUgsR0FBUztJQUNULEVBQUUsQ0FBQyxnQkFBSCxDQUFvQixNQUFwQixFQUE2QixTQUFDLENBQUQ7TUFDM0IsSUFBYyxPQUFPLFFBQVAsS0FBbUIsVUFBakM7UUFBQSxRQUFBLENBQUEsRUFBQTs7TUFDQSxJQUF3QixRQUFBLEtBQWMsTUFBZCxJQUE0QixRQUFBLEtBQWMsS0FBbEU7ZUFBQSxNQUFPLENBQUEsUUFBQSxDQUFTLENBQUMsQ0FBakIsQ0FBQSxFQUFBOztJQUYyQixDQUE3QixFQUdFLEtBSEY7V0FLQSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQWQsQ0FBMEIsRUFBMUI7RUFWSSxDQXJGTjtFQWlHQSxHQUFBLEVBQUssU0FBQTtBQUNILFFBQUE7SUFBQSxLQUFBLEdBQVEsMmhDQUFBLEdBbUJELE1BQU0sQ0FBQyxJQUFJLENBQUM7V0FFbkIsT0FBTyxDQUFDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CLDZDQUFuQjtFQXRCRyxDQWpHTDtFQXlIQSxNQUFBLEVBQVEsU0FBQTtJQUNOLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLE1BQU0sQ0FBQyxXQUE3QixDQUFBLEdBQTRDLEdBQTdDLENBQUEsSUFBcUQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFQLEdBQW9CLE1BQU0sQ0FBQyxVQUE1QixDQUFBLEdBQTBDLEdBQTNDLENBQXpEO01BQ0UsSUFBQyxDQUFBLEdBQUQsQ0FBQTthQUNBLGFBQUEsQ0FBYyxJQUFDLENBQUEsT0FBZixFQUZGOztFQURNLENBekhSOzs7QUE4SEYsQ0FBQyxDQUFDLENBQUYsQ0FBQTs7QUNoSUEsSUFBQTs7QUFBQSxNQUFBLEdBQVM7RUFBQyxPQUFBLEVBQVE7SUFBQyxPQUFBLEVBQVEsU0FBVDtJQUFtQixTQUFBLEVBQVUsU0FBN0I7SUFBdUMsU0FBQSxFQUFVLFNBQWpEO0lBQTJELFNBQUEsRUFBVSxTQUFyRTtJQUErRSxRQUFBLEVBQVMsU0FBeEY7SUFBa0csUUFBQSxFQUFTLFNBQTNHO0lBQXFILFFBQUEsRUFBUyxTQUE5SDtJQUF3SSxRQUFBLEVBQVMsU0FBako7SUFBMkosT0FBQSxFQUFRLFNBQW5LO0dBQVQ7RUFBdUwsTUFBQSxFQUFPO0lBQUMsSUFBQSxFQUFLO01BQUMsYUFBQSxFQUFjLGtCQUFmO01BQWtDLFdBQUEsRUFBWSxNQUE5QztLQUFOO0lBQTRELElBQUEsRUFBSztNQUFDLGFBQUEsRUFBYyxnQkFBZjtNQUFnQyxXQUFBLEVBQVksTUFBNUM7TUFBbUQsZ0JBQUEsRUFBaUIsS0FBcEU7S0FBakU7SUFBNEksSUFBQSxFQUFLO01BQUMsYUFBQSxFQUFjLGdCQUFmO01BQWdDLFdBQUEsRUFBWSxNQUE1QztNQUFtRCxnQkFBQSxFQUFpQixLQUFwRTtNQUEwRSxhQUFBLEVBQWMsTUFBeEY7S0FBako7SUFBaVAsSUFBQSxFQUFLO01BQUMsYUFBQSxFQUFjLGtCQUFmO01BQWtDLFdBQUEsRUFBWSxNQUE5QztLQUF0UDtJQUE0UyxJQUFBLEVBQUs7TUFBQyxhQUFBLEVBQWMsY0FBZjtNQUE4QixXQUFBLEVBQVksTUFBMUM7S0FBalQ7SUFBbVcsS0FBQSxFQUFNO01BQUMsYUFBQSxFQUFjLGNBQWY7TUFBOEIsV0FBQSxFQUFZLE1BQTFDO0tBQXpXO0lBQTJaLE1BQUEsRUFBTztNQUFDLGFBQUEsRUFBYyxjQUFmO01BQThCLFdBQUEsRUFBWSxNQUExQztLQUFsYTtJQUFvZCxNQUFBLEVBQU87TUFBQyxhQUFBLEVBQWMsYUFBZjtNQUE2QixXQUFBLEVBQVksTUFBekM7S0FBM2Q7SUFBNGdCLElBQUEsRUFBSztNQUFDLGFBQUEsRUFBYyxhQUFmO01BQTZCLFdBQUEsRUFBWSxNQUF6QztLQUFqaEI7SUFBa2tCLElBQUEsRUFBSztNQUFDLGFBQUEsRUFBYyxhQUFmO01BQTZCLFdBQUEsRUFBWSxNQUF6QztLQUF2a0I7SUFBd25CLEtBQUEsRUFBTTtNQUFDLGFBQUEsRUFBYyxhQUFmO01BQTZCLFdBQUEsRUFBWSxNQUF6QztLQUE5bkI7SUFBK3FCLElBQUEsRUFBSztNQUFDLGFBQUEsRUFBYyxhQUFmO01BQTZCLFdBQUEsRUFBWSxNQUF6QztLQUFwckI7SUFBcXVCLElBQUEsRUFBSztNQUFDLGFBQUEsRUFBYyxhQUFmO01BQTZCLFdBQUEsRUFBWSxNQUF6QztLQUExdUI7SUFBMnhCLElBQUEsRUFBSztNQUFDLGFBQUEsRUFBYyxrQkFBZjtNQUFrQyxXQUFBLEVBQVksTUFBOUM7S0FBaHlCO0dBQTlMO0VBQXFoQyxNQUFBLEVBQU87SUFBQyxLQUFBLEVBQU0scUJBQVA7SUFBNkIsT0FBQSxFQUFRLFVBQXJDO0lBQWdELGFBQUEsRUFBYywrQkFBOUQ7SUFBOEYsVUFBQSxFQUFXLGdDQUF6RztJQUEwSSxhQUFBLEVBQWMsS0FBeEo7SUFBOEosT0FBQSxFQUFRLGtCQUF0SztJQUF5TCxNQUFBLEVBQU8scUNBQWhNO0lBQXNPLGFBQUEsRUFBYyx5Q0FBcFA7SUFBOFIsT0FBQSxFQUFRLGtCQUF0UztJQUF5VCxXQUFBLEVBQVksMkJBQXJVO0lBQWlXLFNBQUEsRUFBVSx5QkFBM1c7SUFBcVksVUFBQSxFQUFXLDBCQUFoWjtHQUE1aEM7RUFBdzhDLFVBQUEsRUFBVztJQUFDO01BQUMsTUFBQSxFQUFPLGNBQVI7TUFBdUIsT0FBQSxFQUFRLCtCQUEvQjtNQUErRCxhQUFBLEVBQWMsQ0FBQywwTEFBRCxFQUE0TCwySkFBNUwsRUFBd1Ysd0pBQXhWLEVBQWlmLHdGQUFqZixDQUE3RTtNQUF3cEIsT0FBQSxFQUFRLG1CQUFocUI7TUFBb3JCLE9BQUEsRUFBUSxhQUE1ckI7TUFBMHNCLFFBQUEsRUFBUztRQUFDO1VBQUMsTUFBQSxFQUFPLEtBQVI7VUFBYyxPQUFBLEVBQVEsTUFBdEI7U0FBRCxFQUErQjtVQUFDLE1BQUEsRUFBTyxRQUFSO1VBQWlCLE9BQUEsRUFBUSxRQUF6QjtTQUEvQixFQUFrRTtVQUFDLE1BQUEsRUFBTyxnQkFBUjtVQUF5QixPQUFBLEVBQVEscUJBQWpDO1NBQWxFO09BQW50QjtLQUFELEVBQWcxQjtNQUFDLE1BQUEsRUFBTyxNQUFSO01BQWUsT0FBQSxFQUFRLDZDQUF2QjtNQUFxRSxhQUFBLEVBQWMsQ0FBQyw0TEFBRCxFQUE4TCwyQ0FBOUwsQ0FBbkY7TUFBOFQsT0FBQSxFQUFRLGdCQUF0VTtNQUF1VixPQUFBLEVBQVEsVUFBL1Y7TUFBMFcsU0FBQSxFQUFVO1FBQUM7VUFBQyxNQUFBLEVBQU8sWUFBUjtVQUFxQixNQUFBLEVBQU8sQ0FBQyw4RUFBRCxFQUFnRixxQ0FBaEYsQ0FBNUI7U0FBRCxFQUFxSjtVQUFDLE1BQUEsRUFBTyxpQkFBUjtVQUEwQixNQUFBLEVBQU8sQ0FBQywrRkFBRCxFQUFpRyxrQ0FBakcsQ0FBakM7U0FBckosRUFBNFQ7VUFBQyxNQUFBLEVBQU8sV0FBUjtVQUFvQixNQUFBLEVBQU8sQ0FBQyw4R0FBRCxFQUFnSCxvQ0FBaEgsQ0FBM0I7U0FBNVQsRUFBOGU7VUFBQyxNQUFBLEVBQU8sU0FBUjtVQUFrQixNQUFBLEVBQU8sQ0FBQywwR0FBRCxFQUE0Ryw4Q0FBNUcsQ0FBekI7U0FBOWU7T0FBcFg7TUFBeWhDLFFBQUEsRUFBUztRQUFDO1VBQUMsTUFBQSxFQUFPLEtBQVI7VUFBYyxPQUFBLEVBQVEsTUFBdEI7U0FBRCxFQUErQjtVQUFDLE1BQUEsRUFBTyxRQUFSO1VBQWlCLE9BQUEsRUFBUSxRQUF6QjtTQUEvQixFQUFrRTtVQUFDLE1BQUEsRUFBTyxnQkFBUjtVQUF5QixPQUFBLEVBQVEscUJBQWpDO1NBQWxFO09BQWxpQztLQUFoMUIsRUFBOCtEO01BQUMsTUFBQSxFQUFPLE9BQVI7TUFBZ0IsT0FBQSxFQUFRLDRCQUF4QjtNQUFxRCxhQUFBLEVBQWMsQ0FBQyxvUkFBRCxFQUFzUixtSEFBdFIsRUFBMFksMEZBQTFZLEVBQXFlLDhEQUFyZSxDQUFuRTtNQUF3bUIsT0FBQSxFQUFRLGlCQUFobkI7TUFBa29CLE9BQUEsRUFBUSxXQUExb0I7TUFBc3BCLFFBQUEsRUFBUztRQUFDO1VBQUMsTUFBQSxFQUFPLEtBQVI7VUFBYyxPQUFBLEVBQVEsTUFBdEI7U0FBRCxFQUErQjtVQUFDLE1BQUEsRUFBTyxRQUFSO1VBQWlCLE9BQUEsRUFBUSxRQUF6QjtTQUEvQixFQUFrRTtVQUFDLE1BQUEsRUFBTyxnQkFBUjtVQUF5QixPQUFBLEVBQVEscUJBQWpDO1NBQWxFO09BQS9wQjtLQUE5K0QsRUFBeXdGO01BQUMsTUFBQSxFQUFPLFNBQVI7TUFBa0IsT0FBQSxFQUFRLGFBQTFCO01BQXdDLGFBQUEsRUFBYyxDQUFDLGtLQUFELEVBQW9LLCtIQUFwSyxFQUFvUyxtSEFBcFMsQ0FBdEQ7TUFBK2MsT0FBQSxFQUFRLG1CQUF2ZDtNQUEyZSxPQUFBLEVBQVEsYUFBbmY7TUFBaWdCLFNBQUEsRUFBVTtRQUFDO1VBQUMsTUFBQSxFQUFPLHlCQUFSO1VBQWtDLEtBQUEsRUFBTSxJQUF4QztVQUE2QyxNQUFBLEVBQU8sQ0FBQywrU0FBRCxDQUFwRDtTQUFELEVBQXdXO1VBQUMsTUFBQSxFQUFPLGlCQUFSO1VBQTBCLEtBQUEsRUFBTSxVQUFoQztVQUEyQyxNQUFBLEVBQU8sQ0FBQyw0T0FBRCxDQUFsRDtTQUF4VyxFQUEwb0I7VUFBQyxNQUFBLEVBQU8sYUFBUjtVQUFzQixLQUFBLEVBQU0sTUFBNUI7VUFBbUMsTUFBQSxFQUFPLENBQUMsNFBBQUQsQ0FBMUM7U0FBMW9CLEVBQW83QjtVQUFDLE1BQUEsRUFBTyxvQkFBUjtVQUE2QixNQUFBLEVBQU8sQ0FBQyxpUUFBRCxDQUFwQztTQUFwN0I7T0FBM2dCO01BQXl1RCxRQUFBLEVBQVM7UUFBQztVQUFDLE1BQUEsRUFBTyxLQUFSO1VBQWMsT0FBQSxFQUFRLE1BQXRCO1NBQUQsRUFBK0I7VUFBQyxNQUFBLEVBQU8sUUFBUjtVQUFpQixPQUFBLEVBQVEsUUFBekI7U0FBL0IsRUFBa0U7VUFBQyxNQUFBLEVBQU8sZ0JBQVI7VUFBeUIsT0FBQSxFQUFRLHFCQUFqQztTQUFsRTtPQUFsdkQ7S0FBendGO0dBQW45QztFQUEya00sU0FBQSxFQUFVO0lBQUM7TUFBQyxNQUFBLEVBQU8sa0NBQVI7TUFBMkMsU0FBQSxFQUFVLDZCQUFyRDtNQUFtRixPQUFBLEVBQVEsVUFBM0Y7S0FBRCxFQUF3RztNQUFDLE1BQUEsRUFBTyxVQUFSO01BQW1CLFNBQUEsRUFBVSw2QkFBN0I7TUFBMkQsT0FBQSxFQUFRLFVBQW5FO0tBQXhHO0dBQXJsTTtFQUE2d00sTUFBQSxFQUFPO0lBQUMsT0FBQSxFQUFRO01BQUMsT0FBQSxFQUFRLFVBQVQ7TUFBb0IsT0FBQSxFQUFRLENBQUMsbVJBQUQsRUFBcVIsK0pBQXJSLENBQTVCO0tBQVQ7SUFBNGQsU0FBQSxFQUFVO01BQUMsT0FBQSxFQUFRLFlBQVQ7TUFBc0IsVUFBQSxFQUFXLDhCQUFqQztLQUF0ZTtJQUF1aUIsU0FBQSxFQUFVO01BQUMsT0FBQSxFQUFRLGFBQVQ7TUFBdUIsT0FBQSxFQUFRLENBQUMscWdCQUFELEVBQXVnQiw2ZEFBdmdCLENBQS9CO0tBQWpqQjtHQUFweE07OztBQ0NULElBQUE7O0FBQUEsS0FBQSxHQUNFO0VBQUEsTUFBQSxFQUFRLEtBQVI7RUFDQSxHQUFBLEVBQUssS0FETDtFQUVBLElBQUEsRUFBTSxLQUZOO0VBR0EsTUFBQSxFQUFRLEtBSFI7RUFJQSxLQUFBLEVBQU8sS0FKUDtFQUtBLE1BQUEsRUFBUSxLQUxSO0VBT0EsQ0FBQSxFQUFHLFNBQUE7SUFFRCxJQUFDLENBQUEsR0FBRCxHQUFPLENBQUEsQ0FBRSxNQUFGO0lBQ1AsSUFBQyxDQUFBLE1BQUQsR0FBVSxJQUFDLENBQUEsR0FBRyxDQUFDLE1BQUwsQ0FBQTtJQUNWLElBQUMsQ0FBQSxJQUFELEdBQVEsQ0FBQSxDQUFFLGdDQUFGO0lBQ1IsSUFBQyxDQUFBLE1BQUQsR0FBVSxDQUFBLENBQUUsUUFBRjtJQUNWLElBQUMsQ0FBQSxLQUFELEdBQVMsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQXZCO1dBQ1QsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLE1BQVYsQ0FBaUIsSUFBQyxDQUFBLFdBQWxCO0VBUEMsQ0FQSDtFQWdCQSxXQUFBLEVBQWEsU0FBQTtBQUVYLFFBQUE7SUFBQSxJQUFBLEdBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVYsQ0FBQSxDQUFBLEdBQXdCLEdBQXhCLEdBQThCLEtBQUssQ0FBQyxNQUFyQyxDQUE0QyxDQUFDLE9BQTdDLENBQXFELENBQXJEO0lBRVAsSUFBRyxJQUFBLEdBQU8sR0FBVjtNQUNFLElBQUcsS0FBSyxDQUFDLE1BQU4sS0FBZ0IsS0FBbkI7UUFDRSxDQUFBLENBQUUsUUFBRixDQUFXLENBQUMsUUFBWixDQUFxQixRQUFyQjtRQUNBLEtBQUssQ0FBQyxNQUFOLEdBQWUsS0FGakI7O0FBR0EsYUFBTyxLQUpUO0tBQUEsTUFBQTtNQU1FLElBQUcsS0FBSyxDQUFDLE1BQU4sS0FBZ0IsSUFBbkI7UUFDRSxDQUFBLENBQUUsUUFBRixDQUFXLENBQUMsV0FBWixDQUF3QixRQUF4QjtRQUNBLEtBQUssQ0FBQyxNQUFOLEdBQWUsTUFGakI7T0FORjs7SUFVQSxPQUFBLEdBQVUsQ0FBQyxJQUFBLEdBQUssR0FBTixDQUFVLENBQUMsT0FBWCxDQUFtQixDQUFuQixDQUFBLEdBQXdCO0lBRWxDLElBQUcsS0FBSyxDQUFDLE1BQU4sS0FBa0IsQ0FBckI7YUFFRSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQWIsQ0FBaUIsa0JBQWpCLEVBQXFDLE9BQUEsR0FBUSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQXBCLEdBQXNCLEdBQXRCLEdBQXlCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBckMsR0FBdUMsR0FBdkMsR0FBMEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUF0RCxHQUF3RCxHQUF4RCxHQUEyRCxPQUEzRCxHQUFtRSxHQUF4RyxFQUZGOztFQWhCVyxDQWhCYjs7O0FDRkYsSUFBQTs7QUFBQSxJQUFBLEdBRUU7RUFBQSxVQUFBLEVBQVksU0FBQyxFQUFEO0FBRVYsUUFBQTtJQUFBLElBQUEsR0FBTyxFQUFFLENBQUMscUJBQUgsQ0FBQTtBQUVQLFdBQ0UsQ0FBQyxJQUFJLENBQUMsR0FBTCxJQUFZLENBQVosSUFBaUIsSUFBSSxDQUFDLE1BQUwsSUFBZSxDQUFqQyxDQUFBLElBQ0EsQ0FBQyxJQUFJLENBQUMsR0FBTCxJQUFZLE1BQU0sQ0FBQyxXQUFuQixJQUFrQyxJQUFJLENBQUMsTUFBTCxJQUFlLE1BQU0sQ0FBQyxXQUF6RDtFQU5RLENBQVo7RUFVQSxLQUFBLEVBQU8sU0FBQyxHQUFELEVBQU0sTUFBTjtBQUVMLFFBQUE7SUFBQSxLQUFBLEdBQVE7V0FFUixHQUFHLENBQUMsSUFBSixDQUFTLFNBQUMsQ0FBRCxFQUFJLEVBQUo7QUFFUCxVQUFBO01BQUEsSUFBQSxHQUFPLEVBQUUsQ0FBQyxxQkFBSCxDQUFBO01BQ1AsSUFBQSxHQUFPLENBQUEsQ0FBRSxFQUFGLENBQUssQ0FBQyxJQUFOLENBQVcsSUFBWDtNQUVQLElBQWUsSUFBQSxLQUFRLE1BQXZCO0FBQUEsZUFBTyxLQUFQOztNQUVBLElBQ0UsQ0FBQyxJQUFJLENBQUMsR0FBTCxJQUFZLENBQVosSUFBaUIsSUFBSSxDQUFDLE1BQUwsSUFBZSxDQUFqQyxDQUFBLElBQ0EsQ0FBQyxJQUFJLENBQUMsR0FBTCxJQUFZLE1BQU0sQ0FBQyxXQUFuQixJQUFrQyxJQUFJLENBQUMsTUFBTCxJQUFlLE1BQU0sQ0FBQyxXQUF6RCxDQUZGO1FBSUUsTUFBQSxHQUFTLE1BQU0sQ0FBQyxXQUFQLEdBQW1CO1FBQzVCLElBQUcsSUFBSSxDQUFDLEdBQUwsR0FBVyxNQUFYLElBQXFCLElBQUksQ0FBQyxNQUFMLEdBQWMsTUFBdEM7aUJBQ0UsTUFBQSxDQUFPLElBQVAsRUFERjtTQUxGOztJQVBPLENBQVQ7RUFKSyxDQVZQOzs7QUNGRixJQUFBOztBQUFBLElBQUEsR0FFRTtFQUFBLENBQUEsRUFBRyxTQUFBO0lBRUQsSUFBQyxDQUFBLFFBQUQsQ0FBQTtJQUVBLElBQW1CLE9BQU8sQ0FBQyxHQUFSLENBQVksTUFBWixDQUFBLEtBQXlCLE1BQTVDO2FBQUEsQ0FBQyxDQUFDLEdBQUYsQ0FBTSxPQUFOLEVBQUE7O0VBSkMsQ0FBSDtFQU1BLFFBQUEsRUFBVSxTQUFBO1dBRVIsQ0FBQSxDQUFFLGtEQUFGLENBQXFELENBQUMsRUFBdEQsQ0FBeUQsT0FBekQsRUFBa0UsSUFBQyxDQUFBLEtBQW5FO0VBRlEsQ0FOVjtFQVVBLEtBQUEsRUFBTyxTQUFBO0lBRUwsSUFBdUQsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLElBQVIsQ0FBQSxDQUFBLEtBQWtCLElBQXpFO0FBQUEsYUFBTyxRQUFRLENBQUMsSUFBVCxHQUFnQiw2QkFBdkI7O0lBQ0EsSUFBRyxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsSUFBUixDQUFBLENBQUEsS0FBa0IsS0FBckI7TUFDRSxDQUFDLENBQUMsR0FBRixDQUFNLE9BQU47YUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLE1BQVosRUFBb0IsSUFBcEIsRUFBMEI7UUFBQSxPQUFBLEVBQVMsQ0FBVDtPQUExQixFQUZGOztFQUhLLENBVlA7OztBQ0ZGLElBQUE7O0FBQUEsS0FBQSxHQUNFO0VBQUEsTUFBQSxFQUFRLENBQUMsRUFBVDtFQUVBLENBQUEsRUFBRyxTQUFBO0lBRUQsSUFBSSxDQUFDLENBQUwsQ0FBQTtJQUVBLEtBQUssQ0FBQyxDQUFOLENBQUE7SUFDQSxPQUFPLENBQUMsQ0FBUixDQUFBO0lBRUEsSUFBRyxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsS0FBVixDQUFBLENBQUEsR0FBb0IsSUFBdkI7TUFDRSxJQUFDLENBQUEsTUFBRCxHQUFVLEVBRFo7O0lBR0EsSUFBQyxDQUFBLFFBQUQsQ0FBQTtXQUVBLFdBQUEsQ0FBWSxLQUFLLENBQUMsSUFBbEIsRUFBd0IsR0FBeEI7RUFaQyxDQUZIO0VBZ0JBLFFBQUEsRUFBVSxTQUFBO0lBQ1IsQ0FBQSxDQUFFLGtCQUFGLENBQXFCLENBQUMsS0FBdEIsQ0FBNEIsSUFBQyxDQUFBLGFBQTdCO0lBQ0EsQ0FBQSxDQUFFLG1EQUFGLENBQXNELENBQUMsS0FBdkQsQ0FBNkQsSUFBQyxDQUFBLFdBQTlEO1dBQ0EsQ0FBQSxDQUFFLHlCQUFGLENBQTRCLENBQUMsS0FBN0IsQ0FBbUMsSUFBQyxDQUFBLFdBQXBDO0VBSFEsQ0FoQlY7RUFxQkEsYUFBQSxFQUFlLFNBQUE7SUFDYixDQUFDLENBQUMsSUFBRixDQUFPLGtCQUFQO1dBQ0EsQ0FBQyxDQUFDLElBQUYsQ0FBTyxrQ0FBUDtFQUZhLENBckJmO0VBeUJBLFdBQUEsRUFBYSxTQUFBO0lBQ1gsQ0FBQyxDQUFDLEVBQUYsQ0FBSyxrQkFBTDtJQUNBLENBQUMsQ0FBQyxHQUFGLENBQU0sa0NBQU47V0FDQSxLQUFLLENBQUMsT0FBTixDQUFjLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxJQUFSLENBQWEsTUFBYixDQUFkO0VBSFcsQ0F6QmI7RUE4QkEsT0FBQSxFQUFTLFNBQUMsT0FBRDtXQUNQLFVBQUEsQ0FBVyxTQUFBO01BQ1QsQ0FBQSxDQUFFLFlBQUYsQ0FBZSxDQUFDLFFBQWhCLENBQXlCLEdBQUEsR0FBSSxPQUE3QixFQUNFO1FBQUEsUUFBQSxFQUFVLEdBQVY7UUFDQSxNQUFBLEVBQVEsS0FBSyxDQUFDLE1BRGQ7T0FERjthQUdBLFFBQVEsQ0FBQyxJQUFULEdBQWdCO0lBSlAsQ0FBWCxFQUtFLEdBTEY7RUFETyxDQTlCVDtFQXNDQSxJQUFBLEVBQU0sU0FBQTtXQUVKLElBQUksQ0FBQyxLQUFMLENBQVcsQ0FBQSxDQUFFLFVBQUYsQ0FBWCxFQUEwQixTQUFDLE1BQUQ7TUFDeEIsQ0FBQyxDQUFDLEdBQUYsQ0FBTSxtREFBTjtNQUNBLENBQUMsQ0FBQyxFQUFGLENBQUssUUFBQSxHQUFTLE1BQWQ7TUFFQSxJQUFHLE1BQUEsS0FBWSxVQUFaLElBQTJCLE9BQU8sQ0FBQyxPQUFSLEtBQW1CLElBQWpEO2VBQ0UsT0FBTyxDQUFDLFVBQVIsQ0FBQSxFQURGOztJQUp3QixDQUExQjtFQUZJLENBdENOOzs7QUNERixJQUFBOztBQUFBLEdBQUEsR0FDRTtFQUFBLEdBQUEsRUFBSyxLQUFMO0VBQ0EsTUFBQSxFQUFRLEVBRFI7RUFHQSxDQUFBLEVBQUcsU0FBQTtBQUVELFFBQUE7SUFBQSxJQUFDLENBQUEsR0FBRCxHQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFoQixDQUFvQixRQUFRLENBQUMsY0FBVCxDQUF3QixLQUF4QixDQUFwQixFQUNMO01BQUEsTUFBQSxFQUFRO1FBQUEsR0FBQSxFQUFLLFVBQUw7UUFBaUIsR0FBQSxFQUFLLENBQUMsV0FBdkI7T0FBUjtNQUNBLElBQUEsRUFBTSxDQUROO01BRUEsTUFBQSxFQUFRLElBQUMsQ0FBQSxNQUZUO01BR0EsT0FBQSxFQUFTLElBQUMsQ0FBQSxPQUhWO0tBREs7SUFNUCxPQUFBLEdBQVUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUF2QixDQUFxQyxJQUFDLENBQUEsR0FBdEM7QUFFVjtBQUFBLFNBQUEscUNBQUE7O01BQ0UsT0FBTyxDQUFDLFVBQVIsQ0FDRTtRQUFBLE9BQUEsRUFBUyxNQUFNLENBQUMsT0FBaEI7T0FERixFQUVFLFNBQUMsTUFBRCxFQUFTLE1BQVQ7UUFDQSxHQUFHLENBQUMsTUFBTyxDQUFBLE1BQU0sQ0FBQyxRQUFQLENBQVgsR0FBOEI7UUFDOUIsSUFBaUIsQ0FBQyxDQUFDLElBQUYsQ0FBTyxNQUFNLENBQUMsT0FBZCxDQUFBLEtBQTBCLENBQUMsQ0FBQyxJQUFGLENBQU8sR0FBRyxDQUFDLE1BQVgsQ0FBM0M7aUJBQUEsR0FBRyxDQUFDLE9BQUosQ0FBQSxFQUFBOztNQUZBLENBRkY7QUFERjtXQVFBLElBQUMsQ0FBQSxRQUFELENBQUE7RUFsQkMsQ0FISDtFQXVCQSxRQUFBLEVBQVUsU0FBQTtXQUNULENBQUEsQ0FBRSxzQ0FBRixDQUF5QyxDQUFDLEtBQTFDLENBQWdELElBQUMsQ0FBQSxpQkFBakQ7RUFEUyxDQXZCVjtFQXlCQSxPQUFBLEVBQVMsU0FBQTtBQUVQLFFBQUE7SUFBQSxPQUFBLEdBQVU7QUFFVjtBQUFBLFNBQUEsU0FBQTs7TUFFRSxNQUFBLEdBQVMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQWhCLENBQ1A7UUFBQSxHQUFBLEVBQUssR0FBRyxDQUFDLEdBQVQ7UUFDQSxRQUFBLEVBQVUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUR6QjtRQUVBLElBQUEsRUFDRTtVQUFBLEdBQUEsRUFBSyx3QkFBTDtVQUNBLFVBQUEsRUFBWSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBaEIsQ0FBcUIsRUFBckIsRUFBeUIsRUFBekIsQ0FEWjtVQUVBLE1BQUEsRUFBUSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBaEIsQ0FBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsQ0FGUjtTQUhGO1FBTUEsS0FBQSxFQUNFO1VBQUEsT0FBQSxFQUFTLEtBQUssQ0FBQyxRQUFmO1VBQ0EsUUFBQSxFQUFVLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFEekI7U0FQRjtPQURPO01BVVQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBbEIsQ0FBOEIsTUFBOUIsRUFBc0MsT0FBdEMsRUFBK0MsR0FBRyxDQUFDLGFBQW5EO01BQ0EsT0FBTyxDQUFDLElBQVIsQ0FBYSxNQUFiO0FBYkY7V0FlQSxhQUFBLEdBQWdCLElBQUksZUFBSixDQUFvQixHQUFHLENBQUMsR0FBeEIsRUFBNkIsT0FBN0IsRUFDZDtNQUFBLFNBQUEsRUFBVyx3RkFBWDtLQURjO0VBbkJULENBekJUO0VBK0NBLGFBQUEsRUFBZSxTQUFBO0FBRWQsUUFBQTtJQUFBLEtBQUEsR0FBUSxHQUFHLENBQUMsTUFBTyxDQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBWDtJQUduQixJQUFHLEtBQUssQ0FBQyxNQUFUO01BQ0MsQ0FBQSxDQUFFLCtDQUFGLENBQWtELENBQUMsSUFBbkQsQ0FBd0QsS0FBeEQsRUFBOEQsS0FBSyxDQUFDLE1BQU8sQ0FBQSxDQUFBLENBQUUsQ0FBQyxNQUFoQixDQUF1QjtRQUFBLFFBQUEsRUFBVSxHQUFWO1FBQWUsU0FBQSxFQUFXLEdBQTFCO09BQXZCLENBQTlEO01BQ0EsQ0FBQyxDQUFDLEVBQUYsQ0FBSywrQ0FBTCxFQUZEO0tBQUEsTUFBQTtNQUlDLENBQUMsQ0FBQyxHQUFGLENBQU0sK0NBQU4sRUFKRDs7SUFNQSxDQUFBLENBQUUsOENBQUYsQ0FBaUQsQ0FBQyxJQUFsRCxDQUF1RCxLQUFLLENBQUMsSUFBN0Q7SUFDQSxDQUFBLENBQUUsOENBQUYsQ0FBaUQsQ0FBQyxJQUFsRCxDQUF1RCxNQUF2RCxFQUErRCxLQUFLLENBQUMsR0FBckU7SUFDQSxDQUFBLENBQUUsaURBQUYsQ0FBb0QsQ0FBQyxJQUFyRCxDQUEwRCxLQUFLLENBQUMsaUJBQWhFO0lBQ0EsQ0FBQSxDQUFFLCtDQUFGLENBQWtELENBQUMsSUFBbkQsQ0FBd0QsS0FBSyxDQUFDLHNCQUE5RDtJQUVBLENBQUMsQ0FBQyxFQUFGLENBQUssNkJBQUw7SUFFQSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQVIsQ0FBZ0IsRUFBaEI7SUFDQSxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVIsQ0FBa0IsSUFBSSxDQUFDLFdBQUwsQ0FBQSxDQUFsQjtXQUVBLE9BQU8sQ0FBQyxHQUFSLENBQVksS0FBWjtFQXJCYyxDQS9DZjtFQXVFQSxpQkFBQSxFQUFtQixTQUFBO0lBQ2pCLENBQUMsQ0FBQyxHQUFGLENBQU0sNkJBQU47V0FDQSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQVIsQ0FBZ0IsRUFBaEI7RUFGaUIsQ0F2RW5CO0VBMkVBLE9BQUEsRUFDRTtJQUFBLFdBQUEsRUFBYSxLQUFiO0lBQ0EsY0FBQSxFQUFnQixLQURoQjtJQUVBLGlCQUFBLEVBQW1CLEtBRm5CO0dBNUVGO0VBZ0ZBLE1BQUEsRUFDRTtJQUNFO01BQ0UsYUFBQSxFQUFlLGdCQURqQjtNQUVFLGFBQUEsRUFBZSxrQkFGakI7TUFHRSxTQUFBLEVBQVc7UUFBRTtVQUFFLE9BQUEsRUFBUyxTQUFYO1NBQUY7T0FIYjtLQURGLEVBTUU7TUFDRSxhQUFBLEVBQWUsd0JBRGpCO01BRUUsYUFBQSxFQUFlLGtCQUZqQjtNQUdFLFNBQUEsRUFBVztRQUFFO1VBQUUsT0FBQSxFQUFTLFNBQVg7U0FBRjtPQUhiO0tBTkYsRUFXRTtNQUNFLGFBQUEsRUFBZSx5QkFEakI7TUFFRSxhQUFBLEVBQWUsa0JBRmpCO01BR0UsU0FBQSxFQUFXO1FBQUU7VUFBRSxPQUFBLEVBQVMsU0FBWDtTQUFGO09BSGI7S0FYRixFQWdCRTtNQUNFLGFBQUEsRUFBZSxXQURqQjtNQUVFLGFBQUEsRUFBZSxLQUZqQjtNQUdFLFNBQUEsRUFBVztRQUFFO1VBQUUsT0FBQSxFQUFTLFNBQVg7U0FBRjtPQUhiO0tBaEJGLEVBcUJFO01BQ0UsYUFBQSxFQUFlLEtBRGpCO01BRUUsYUFBQSxFQUFlLEtBRmpCO01BR0UsU0FBQSxFQUFXO1FBQUU7VUFBRSxZQUFBLEVBQWMsS0FBaEI7U0FBRjtPQUhiO0tBckJGLEVBMEJFO01BQ0UsYUFBQSxFQUFlLE1BRGpCO01BRUUsYUFBQSxFQUFlLEtBRmpCO01BR0UsU0FBQSxFQUFXO1FBQ1Q7VUFBRSxZQUFBLEVBQWMsQ0FBQyxHQUFqQjtTQURTLEVBRVQ7VUFBRSxXQUFBLEVBQWEsRUFBZjtTQUZTO09BSGI7S0ExQkYsRUFrQ0U7TUFDRSxhQUFBLEVBQWUsTUFEakI7TUFFRSxhQUFBLEVBQWUsZUFGakI7TUFHRSxTQUFBLEVBQVc7UUFBRTtVQUFFLE9BQUEsRUFBUyxTQUFYO1NBQUY7T0FIYjtLQWxDRixFQXVDRTtNQUNFLGFBQUEsRUFBZSxjQURqQjtNQUVFLGFBQUEsRUFBZSxLQUZqQjtNQUdFLFNBQUEsRUFBVztRQUFFO1VBQUUsWUFBQSxFQUFjLFlBQWhCO1NBQUY7T0FIYjtLQXZDRixFQTRDRTtNQUNFLGFBQUEsRUFBZSxlQURqQjtNQUVFLGFBQUEsRUFBZSxhQUZqQjtNQUdFLFNBQUEsRUFBVztRQUFFO1VBQUUsWUFBQSxFQUFjLEtBQWhCO1NBQUY7T0FIYjtLQTVDRixFQWlERTtNQUNFLGFBQUEsRUFBZSxTQURqQjtNQUVFLGFBQUEsRUFBZSxLQUZqQjtNQUdFLFNBQUEsRUFBVztRQUFFO1VBQUUsWUFBQSxFQUFjLEtBQWhCO1NBQUY7T0FIYjtLQWpERixFQXNERTtNQUNFLGFBQUEsRUFBZSxPQURqQjtNQUVFLGFBQUEsRUFBZSxLQUZqQjtNQUdFLFNBQUEsRUFBVztRQUNUO1VBQUUsT0FBQSxFQUFTLFNBQVg7U0FEUyxFQUVUO1VBQUUsWUFBQSxFQUFjLElBQWhCO1NBRlM7T0FIYjtLQXRERjtHQWpGRjs7O0FDREYsSUFBQTs7QUFBQSxPQUFBLEdBQ0U7RUFBQSxFQUFBLEVBQUksS0FBSjtFQUNBLE9BQUEsRUFBUyxLQURUO0VBR0EsQ0FBQSxFQUFHLFNBQUE7SUFDRCxJQUFDLENBQUEsRUFBRCxHQUFNLElBQUksV0FBSixDQUFnQjtNQUFBLE1BQUEsRUFBUSxDQUFSO0tBQWhCO1dBRU4sSUFBQyxDQUFBLFFBQUQsQ0FBQTtFQUhDLENBSEg7RUFRQSxRQUFBLEVBQVUsU0FBQTtJQUVSLENBQUEsQ0FBRSw2Q0FBRixDQUFnRCxDQUFDLEtBQWpELENBQXVELElBQUMsQ0FBQSxZQUF4RDtJQUNBLENBQUEsQ0FBRSxpREFBRixDQUFvRCxDQUFDLEtBQXJELENBQTJELElBQUMsQ0FBQSxVQUE1RDtXQUNBLENBQUEsQ0FBRSxzRkFBRixDQUF5RixDQUFDLEtBQTFGLENBQWdHLElBQUMsQ0FBQSxNQUFqRztFQUpRLENBUlY7RUFjQSxNQUFBLEVBQVEsU0FBQTtBQUNOLFFBQUE7SUFBQSxNQUFBLEdBQVMsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLE1BQVIsQ0FBQTtJQUNULEtBQUEsR0FBUSxDQUFDLENBQUMsS0FBRixDQUFRLE1BQVI7SUFDUixDQUFDLENBQUMsR0FBRixDQUFNLG9CQUFOO0lBQ0EsSUFBRyxLQUFIO2FBQ0UsQ0FBQyxDQUFDLEdBQUYsQ0FBTSxNQUFOLEVBREY7S0FBQSxNQUFBO01BR0UsQ0FBQyxDQUFDLEVBQUYsQ0FBSyxNQUFMO01BQ0EsQ0FBQSxHQUFJLENBQUEsQ0FBRSxJQUFGO01BQ0osSUFBRyxDQUFDLENBQUMsSUFBRixDQUFPLEtBQVAsQ0FBQSxLQUFtQixNQUF0QjtlQUNFLEdBQUEsQ0FBSSxpQkFBQSxHQUFpQixDQUFDLENBQUMsQ0FBQyxJQUFGLENBQU8sS0FBUCxDQUFELENBQXJCLEVBREY7T0FMRjs7RUFKTSxDQWRSO0VBMEJBLFlBQUEsRUFBYyxTQUFBO0FBQ1osUUFBQTtJQUFBLE9BQUEsR0FBVSxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsSUFBUixDQUFhLFNBQWI7SUFDVixDQUFDLENBQUMsRUFBRixDQUFLLGNBQUEsR0FBZSxPQUFmLEdBQXVCLElBQTVCO0lBQ0EsQ0FBQyxDQUFDLEVBQUYsQ0FBSyxhQUFBLEdBQWMsT0FBZCxHQUFzQixJQUEzQjtJQUNBLE9BQU8sQ0FBQyxPQUFSLEdBQWtCO0lBQ2xCLElBQUcsS0FBSyxDQUFDLE1BQU4sS0FBa0IsQ0FBckI7TUFDRSxLQUFLLENBQUMsT0FBTixDQUFjLFVBQWQsRUFERjs7SUFJQSxLQUFBLEdBQVEsUUFBUSxDQUFDLHNCQUFULENBQWdDLFVBQWhDO0FBQ1I7U0FBQSx1Q0FBQTs7TUFDRSxFQUFBLEdBQUssSUFBSSxXQUFKLENBQWdCO1FBQUEsTUFBQSxFQUFRLENBQVI7T0FBaEI7bUJBQ0wsRUFBRSxDQUFDLEVBQUgsQ0FBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQjtRQUFDLFFBQUEsRUFBVTtVQUFDLEtBQUEsRUFBTyxZQUFSO1VBQXNCLFVBQUEsRUFBWSxDQUFsQztTQUFYO1FBQWlELElBQUEsRUFBSyxJQUFJLENBQUMsU0FBM0Q7T0FBaEI7QUFGRjs7RUFWWSxDQTFCZDtFQXdDQSxVQUFBLEVBQVksU0FBQTtBQUNWLFFBQUE7SUFBQSxLQUFBLEdBQVEsUUFBUSxDQUFDLHNCQUFULENBQWdDLFVBQWhDO0FBQ1IsU0FBQSx1Q0FBQTs7TUFDRSxFQUFBLEdBQUssSUFBSSxXQUFKLENBQWdCO1FBQUEsTUFBQSxFQUFRLENBQVI7T0FBaEI7TUFDTCxFQUFFLENBQUMsRUFBSCxDQUFNLEdBQU4sRUFBVyxJQUFYLEVBQWlCO1FBQUMsUUFBQSxFQUFVLFdBQVg7UUFBd0IsSUFBQSxFQUFLLElBQUksQ0FBQyxTQUFsQztPQUFqQjtBQUZGO0lBSUEsQ0FBQyxDQUFDLEdBQUYsQ0FBTSx3Q0FBTjtJQUNBLENBQUMsQ0FBQyxHQUFGLENBQU0sdUNBQU47V0FDQSxPQUFPLENBQUMsT0FBUixHQUFrQjtFQVJSLENBeENaIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIl8gPVxuXG4gIGk6IC0+XG4gICAgQGNvbnNvbGUgPSBzZXRJbnRlcnZhbChAZGV0ZWN0LmJpbmQoQCksIDIwMClcblxuICBwOlxuICAgIG9mZmluZzogZmFsc2VcbiAgICBvZmZ0aW1lOiAwXG5cbiAgdHVybjogKGVsLCByZW1vdmU9ZmFsc2UsIGFkZD1mYWxzZSkgLT5cblxuICAgIGlmIGVsIG5vdCBpbnN0YW5jZW9mIGpRdWVyeVxuICAgICAgZWwgPSAkKGVsKVxuXG4gICAgaWYgcmVtb3ZlIGlzbnQgZmFsc2VcbiAgICAgIGVsLnJlbW92ZUNsYXNzKHJlbW92ZSlcblxuICAgIGlmIGFkZCBpc250IGZhbHNlXG4gICAgICBlbC5hZGRDbGFzcyhhZGQpXG5cbiAgICByZXR1cm4gdHJ1ZVxuXG4gIG9mZjogKGVsLCBwPXt9KSAtPlxuXG4gICAgaWYgcC5vZmZpbmcgYW5kIHAub2ZmdGltZSA+IDBcblxuICAgICAgQHR1cm4gZWwsIGZhbHNlLCAnb2ZmaW5nJ1xuICAgICAgc2V0VGltZW91dCAtPlxuICAgICAgICBAdHVybiBlbCwgJ29mZmluZycsIGZhbHNlXG4gICAgICAgIEB0dXJuIGVsLCAnb24nLCAnb2ZmJ1xuICAgICAgLCBwLm9mZnRpbWUqMTAwMCArIDEwMFxuXG4gICAgZWxzZVxuICAgICAgQHR1cm4gZWwsICdvbicsICdvZmYnXG5cbiAgICByZXR1cm5cblxuICBvbjogKGVsLCBwKSAtPlxuICAgIEB0dXJuIGVsLCAnb2ZmJywgJ29uJ1xuXG4gIHN0YXRlOiAoZWwpIC0+XG4gICAgaWYgZWwgbm90IGluc3RhbmNlb2YgalF1ZXJ5XG4gICAgICBlbCA9ICQoZWwpXG5cbiAgICBpZiBlbC5oYXNDbGFzcyAnb2ZmJ1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgaWYgZWwuaGFzQ2xhc3MgJ29uJ1xuICAgICAgcmV0dXJuIHRydWVcblxuICAgIHJldHVybiBudWxsXG5cbiAgc3dhcDogKGVsLCBwKSAtPlxuXG4gICAgaWYgZWwgbm90IGluc3RhbmNlb2YgalF1ZXJ5XG4gICAgICBlbCA9ICQoZWwpXG5cbiAgICBpZiBlbC5oYXNDbGFzcyAnb2ZmJ1xuICAgICAgQG9uIGVsLCBwXG4gICAgZWxzZVxuICAgICAgQG9mZiBlbCwgcFxuXG4gICAgcmV0dXJuXG5cbiAgZW5jb2RlOiAoc3RyKSAtPlxuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKVxuICAgICAgLnJlcGxhY2UoLyEvZywgJyUyMScpXG4gICAgICAucmVwbGFjZSgvJy9nLCAnJTI3JylcbiAgICAgIC5yZXBsYWNlKC9cXCgvZywgJyUyOCcpXG4gICAgICAucmVwbGFjZSgvXFwpL2csICclMjknKVxuICAgICAgLnJlcGxhY2UoL1xcKi9nLCAnJTJBJylcbiAgICAgIC5yZXBsYWNlKC8lMjAvZywgJysnKVxuXG4gIHQ6IChjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCwgdmFsdWUpIC0+XG4gICAgX2dhcS5wdXNoIFsnX3RyYWNrRXZlbnQnLCBjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCwgdmFsdWVdXG5cbiAgcmFuZDogKG1pbiwgbWF4KSAtPlxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpICsgbWluXG5cbiAgaGV4MnJnYjogKGhleCkgLT5cbiAgICByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KVxuICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxuICAgIGc6IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxuICAgIGI6IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpXG4gXG4gIG9iamM6IChvYmopIC0+XG4gICAgKGsgZm9yIG93biBrIG9mIG9iaikubGVuZ3RoXG5cbiAgbG9hZDogKHNjcmlwdCwgaW5pdGlhdGUsIGNvbXBsZXRlKSAtPlxuXG4gICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICdzY3JpcHQnXG4gICAgZWwudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnXG4gICAgZWwuc3JjID0gc2NyaXB0XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lciAnbG9hZCcgLCAoZSkgLT5cbiAgICAgIGNvbXBsZXRlKCkgaWYgdHlwZW9mIGNvbXBsZXRlIGlzICdmdW5jdGlvbidcbiAgICAgIHdpbmRvd1tpbml0aWF0ZV0uaSgpIGlmIGluaXRpYXRlIGlzbnQgdW5kZWZpbmVkIGFuZCBpbml0aWF0ZSBpc250IGZhbHNlXG4gICAgLCBmYWxzZVxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbClcblxuICBsbGM6IC0+XG4gICAgYXNjaWkgPSBcIlwiXCJcblxuICAgICAgJWNtbW0vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9tbW1cbiAgICAgIG1tby4uLi4uLi4uLi4uLi4uLi4tOjovLzo6LS4uLi4uLi4tOjo6Ojo6Ojo6Ojo6Oi0uLi4uLi4uLi06Oi8vLzotLm9tbVxuICAgICAgbWQtLi4uLi4uLi4uLi4uLjoreWhkZGRkZGRoeSstLi4uLi9kZGRkZGRkZGRkZGRkKy4uLi4uLi9zaGRkZGRkZGR5b2RtXG4gICAgICBtby4uLi4uLi4uLi4uLi4taG1tbWh5eXl5ZG1tbWg6Li4uL21tbW1oaGhoaGhoaGgrLi4uLjp5ZG1tZGh5eXloZGRvb21cbiAgICAgIG0tLi4uLi4uLi4uLi4uLi4tc3M6LS4uLi4teW1tbXkuLi4vbW1tbS0tLS0tLS0tLS4uLi46ZG1tbXM6LS4uLi06Ly4tbVxuICAgICAgZC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi55bW1teS4uLi9tbW1tLS8rb29vKzotLi4uLnltbW15LTorb29vKy8tLi5kXG4gICAgICBoLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi46c21tbWQ6Li4uL21tbW1obW1tbW1tZGgrLi4uZG1tbXNoZG1tbW1tbWhzLWhcbiAgICAgIGguLi4uLi4uLi4uLi4uLi4uLi4uLi46c2RtbWR5Oi4uLi46aGhkaG8rLy8reW1tbW0rLi5kbW1tZHlvLy8rc2RtbW1oaFxuICAgICAgZC4uLi4uLi4uLi4uLi4uLi4uLi0reWRtbWR5Ly4uLi4uLi4tLTouLi4uLi4uc21tbWguLnltbW1zLi4uLi4uOm1tbW1tXG4gICAgICBtLS4uLi4uLi4uLi4uLi4uLTpzaG1tbWRzLy0tLS0tLi4uLjpzLy0tLi4uLTpobW1tcy4uOmRtbWQvLS4uLi1vbW1tbW1cbiAgICAgIG1vLi4uLi4uLi4uLi4uLi5obW1tbW1taGhoaGhoaGguLi4rZG1tZGh5eXloZG1tbXktLi4uL2htbW1oeXl5aG1tbWRobVxuICAgICAgbWQtLi4uLi4uLi4uLi4uLmRkZGRkZGRkZGRkZGRkZC4uLi0rc2hkZGRkZGRkaHkvLS4uLi4uLW95ZGRkZGRkZGhvOmRtXG4gICAgICBtbW8uLi4uLi4uLi4uLi4uOjo6Ojo6Ojo6Ojo6Ojo6Li4uLi4uLi06Ly8vOjotLi4uLi4uLi4uLi4tOi8vLzotLi5vbW1cbiAgICAgIG1tbS8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uL21tbVxuXG4gICAgICA6OiBzeW50YWN0aWMgc3VnYXIgYnkgMjU2XG4gICAgICA6OiBodHRwOi8vMjU2LmlvL1xuICAgICAgOjogI3tjb25maWcubWV0YS5yZXBvfVxuICAgIFwiXCJcIlxuICAgIGNvbnNvbGUubG9nIGFzY2lpLCBcImNvbG9yOiBncmV5OyBmb250LWZhbWlseTogTWVubG8sIG1vbm9zcGFjZTtcIlxuXG4gIGRldGVjdDogLT5cbiAgICBpZiAoKCh3aW5kb3cub3V0ZXJIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQpID4gMTAwKSB8fCAoKHdpbmRvdy5vdXRlcldpZHRoIC0gd2luZG93LmlubmVyV2lkdGgpID4gMTAwKSlcbiAgICAgIEBsbGMoKVxuICAgICAgY2xlYXJJbnRlcnZhbCBAY29uc29sZVxuXG5fLmkoKVxuIiwiY29uZmlnID0ge1wiY29sb3JcIjp7XCJibHVlMVwiOlwiIzAwQUZBQVwiLFwib3JhbmdlMVwiOlwiI0YyOTkzNFwiLFwib3JhbmdlMlwiOlwiIzlFNUQwN1wiLFwib3JhbmdlM1wiOlwiI0QxQTk3RVwiLFwia2hha2kxXCI6XCIjQ0FBRjkwXCIsXCJwZWFjaDFcIjpcIiNGOEY1RjJcIixcIndoaXRlMVwiOlwiI2ZmZmZmZlwiLFwiYmxhY2sxXCI6XCIjMDAwMDAwXCIsXCJncmV5MVwiOlwiIzc3Nzc3N1wifSxcImZvbnRcIjp7XCJoMVwiOntcImZvbnQtZmFtaWx5XCI6XCJhcXVpbG9uZSByZWd1bGFyXCIsXCJmb250LXNpemVcIjpcIjQ4cHhcIn0sXCJoMlwiOntcImZvbnQtZmFtaWx5XCI6XCJzYWNrZXJzIGdvdGhpY1wiLFwiZm9udC1zaXplXCI6XCIyMnB4XCIsXCJsZXR0ZXItc3BhY2luZ1wiOlwiNHB4XCJ9LFwiaDNcIjp7XCJmb250LWZhbWlseVwiOlwic2Fja2VycyBnb3RoaWNcIixcImZvbnQtc2l6ZVwiOlwiMTZweFwiLFwibGV0dGVyLXNwYWNpbmdcIjpcIjJweFwiLFwibGluZS1oZWlnaHRcIjpcIjIycHhcIn0sXCJoNFwiOntcImZvbnQtZmFtaWx5XCI6XCJhcXVpbG9uZSByZWd1bGFyXCIsXCJmb250LXNpemVcIjpcIjMycHhcIn0sXCJjMVwiOntcImZvbnQtZmFtaWx5XCI6XCJhdmVydGEgbGlnaHRcIixcImZvbnQtc2l6ZVwiOlwiMThweFwifSxcImMxc1wiOntcImZvbnQtZmFtaWx5XCI6XCJhdmVydGEgbGlnaHRcIixcImZvbnQtc2l6ZVwiOlwiMTRweFwifSxcImMxc3NcIjp7XCJmb250LWZhbWlseVwiOlwiYXZlcnRhIGxpZ2h0XCIsXCJmb250LXNpemVcIjpcIjEwcHhcIn0sXCJjMXNiXCI6e1wiZm9udC1mYW1pbHlcIjpcImF2ZXJ0YSBib2xkXCIsXCJmb250LXNpemVcIjpcIjE0cHhcIn0sXCJjMlwiOntcImZvbnQtZmFtaWx5XCI6XCJhdmVydGEgYm9sZFwiLFwiZm9udC1zaXplXCI6XCIyOHB4XCJ9LFwiYzNcIjp7XCJmb250LWZhbWlseVwiOlwiYXZlcnRhIGJvbGRcIixcImZvbnQtc2l6ZVwiOlwiMTRweFwifSxcImMzc1wiOntcImZvbnQtZmFtaWx5XCI6XCJhdmVydGEgYm9sZFwiLFwiZm9udC1zaXplXCI6XCIxMXB4XCJ9LFwiYzRcIjp7XCJmb250LWZhbWlseVwiOlwiYXZlcnRhIGJvbGRcIixcImZvbnQtc2l6ZVwiOlwiMjBweFwifSxcImM1XCI6e1wiZm9udC1mYW1pbHlcIjpcImF2ZXJ0YSBib2xkXCIsXCJmb250LXNpemVcIjpcIjE4cHhcIn0sXCJjNlwiOntcImZvbnQtZmFtaWx5XCI6XCJhcXVpbG9uZSByZWd1bGFyXCIsXCJmb250LXNpemVcIjpcIjE2cHhcIn19LFwibWV0YVwiOntcInVybFwiOlwiaHR0cDovL2Z1bGxzdW4uY29tL1wiLFwidGl0bGVcIjpcImZ1bGwgc3VuXCIsXCJkZXNjcmlwdGlvblwiOlwiY2FsaWZvcm5pYSBjb25zY2lvdXMgY2FubmFiaXNcIixcImtleXdvcmRzXCI6XCJmdWxsIHN1biwgY2FubmFiaXMsIGNhbGlmb3JuaWFcIixcInRyYWNraW5nX2lkXCI6MzEzMzcsXCJzaGFyZVwiOlwiaW1hZ2VzL2xvZ28xLnBuZ1wiLFwicmVwb1wiOlwiaHR0cHM6Ly9naXRodWIuY29tL2FjaWRqYXp6L2Z1bGxzdW5cIixcIm1hcF9hcGlfa2V5XCI6XCJBSXphU3lBSXE4NHBqaTRvdnVtQU5YWG9sTXFrR3dRWDhrTTFtS2NcIixcImVtYWlsXCI6XCJpbmZvQGZ1bGxzdW4uY29tXCIsXCJpbnN0YWdyYW1cIjpcImh0dHA6Ly93d3cuaW5zdGFncmFtLmNvbS9cIixcInR3aXR0ZXJcIjpcImh0dHA6Ly93d3cudHdpdHRlci5jb20vXCIsXCJmYWNlYm9va1wiOlwiaHR0cDovL3d3dy5mYWNlYm9vay5jb20vXCJ9LFwicHJvZHVjdHNcIjpbe1wibmFtZVwiOlwidmFwZSBwZW4gc2V0XCIsXCJ0aXRsZVwiOlwiQ2FubmFiaXMgT2lsIFZhcG9yaXphdGlvbiBTZXRcIixcImRlc2NyaXB0aW9uXCI6W1wiRGVzaWduZWQgZm9yIG9uLXRoZS1nbyBlbmpveW1lbnQsIHRoaXMgcHJlbWl1bSB2YXBlIHNldCBpbmNsdWRlcyBvdXIgU2luZ2xlIE9yaWdpbiBjYW5uYWJpcyBvaWwuIFVzZSB0aHJvdWdob3V0IHRoZSBkYXkgdG8gaW5jaXRlIGNyZWF0aXZpdHksIGNhbG0gdGhlIG1pbmQgb3IgZGVlcGVuIHJlbGF4YXRpb24gbGV2ZWxzLlwiLFwiU2F2ZSB5b3Vyc2VsZiB0aW1lIGFuZCBlZmZvcnQsIHRoaXMgb25lIGNhcnRyaWRnZSBjYW4gYmUgdXNlZCBmb3IgZW5kbGVzcyBvY2Nhc2lvbnMuIFRoZSBwZXJmZWN0IGRvc2Ugb2YgZ29vZG5lc3MgYW55dGltZSB5b3UgbmVlZCBpdCDigJQgc3VudXAgdG8gc3VuZG93bi5cIixcIkluY2x1ZGVzIGJhdHRlcnksIDUwMG1nIGNhcnRyaWRnZSBhbmQgY2hhcmdlci4gIFNvbHZlbnQgRnJlZS4gUHJvZHVjdCB0ZXN0ZWQgYW5kIGhlbGQgIHRvIHRoZSBoaWdoZXN0IHN0YW5kYXJkcyBmb3IgcHVyaXR5IGFuZCBjb25zaXN0ZW50IFRIQyBwb3RlbmN5LlwiLFwiPGk+RXhwZXJpZW5jZTogQSBjbGVhci1oZWFkZWQsIGZvY3VzZWQgaGlnaCBwZXJmZWN0IGZvciBkYXl0aW1lIGFuZCBuaWdodHRpbWUgdXNlLjwvaT5cIl0sXCJ0aHVtYlwiOlwicGVuX3NldF90aHVtYi5qcGdcIixcImltYWdlXCI6XCJwZW5fc2V0LmpwZ1wiLFwiZGV0YWlsXCI6W3tcImxlZnRcIjpcIlRIQ1wiLFwicmlnaHRcIjpcIj44NSVcIn0se1wibGVmdFwiOlwiU1RSQUlOXCIsXCJyaWdodFwiOlwiSHlicmlkXCJ9LHtcImxlZnRcIjpcIlBST0RVQ1QgT1JJR0lOXCIsXCJyaWdodFwiOlwiSHVtYm9sZHQgQ291bnR5LCBDQVwifV19LHtcIm5hbWVcIjpcInJpc2VcIixcInRpdGxlXCI6XCJTb2x2ZW50LUZyZWUgU2luZ2xlIE9yaWdpbiBDYXJ0cmlkZ2UgUmVmaWxsXCIsXCJkZXNjcmlwdGlvblwiOltcIk1vcm5pbmdzIGp1c3QgZ290IGJyaWdodGVyLiBPdXIgUmlzZSwgYWxsLW5hdHVyYWwsIHNpbmdsZSBvcmlnaW4gb2lsIGNhcnRyaWRnZXMgYXJlIGF2YWlsYWJsZSBpbiA0IGRpZmZlcmVudCB0ZXJwZW5lIGVucmljaGVkIGZsYXZvcnM6IERhbmsgQmVycnksIEVubGlnaHRlbuKAnW1pbnTigJ0sIFRyb3BpQ2FsaSBhbmQgTmF0dXJhbC5cIixcIjxpPlNlbGVjdCBhIHRvbmUgdG8gZW5oYW5jZSB5b3VyIGRheTo8L2k+XCJdLFwidGh1bWJcIjpcInJpc2VfdGh1bWIuanBnXCIsXCJpbWFnZVwiOlwicmlzZS5qcGdcIixcImZsYXZvcnNcIjpbe1wibmFtZVwiOlwiRGFuayBCZXJyeVwiLFwiZGVzY1wiOltcIkltYWdpbmUgd2FraW5nIHVwIGZlZWxpbmcgY29tcGxldGVseSByZWZyZXNoZWQgYW5kIHJlYWR5IHRvIGNvbnF1ZXIgdGhlIGRheS5cIixcIkZlZWw6IGNyZWF0aXZlLCBhbGVydCwgYW5kIGluc3BpcmVkXCJdfSx7XCJuYW1lXCI6XCJFbmxpZ2h0ZW7igJ1taW504oCdXCIsXCJkZXNjXCI6W1wiVG8gWW9nYSBvciBub3QgdG8gWW9nYT8gV2hldGhlciB5b3Ugc3dlYXQgdGhyb3VnaCBpdCBvciBzbGVwdCB0aHJvdWdoIGl0LCB3ZSBnb3QgeW91IGNvdmVyZWQuXCIsXCJGZWVsOiBNaW5kZnVsLCBmb2N1c2VkLCBhbmQgY2FsbVwiXX0se1wibmFtZVwiOlwiVHJvcGlDYWxpXCIsXCJkZXNjXCI6W1wiWW91IGhvcHBlZCBvbiBhIHBsYW5lIGFuZCBqdXN0IHRvdWNoZWQgZG93biBvbiBhIHRyb3BpY2FsIG9hc2lzLiBXZWxjb21lIHRvIGlzbGFuZCBsaXZpbmcsIG9wZXJhdGlvbiB1bndpbmQuXCIsXCJGZWVsOiBIYXBweSwgcmVsYXhlZCwgYW5kIGNhcmVmcmVlXCJdfSx7XCJuYW1lXCI6XCJOYXR1cmFsXCIsXCJkZXNjXCI6W1wiR3JlZW4gc21vb3RoaWVkIGZvciBicmVha2Zhc3QsIGF0ZSBzYWxhZCBmb3IgbHVuY2gsIHBvd2VyIGN5Y2xlZCBhZnRlciB3b3JrIOKAlCB0aGF0IHdhcyB0aGUgaWRlYSBhbnl3YXlzLlwiLFwiRmVlbDogY2xlYXItaGVhZGVkLCBlbmVyZ2l6ZWQsIGFuZCByZWZyZXNoZWRcIl19XSxcImRldGFpbFwiOlt7XCJsZWZ0XCI6XCJUSENcIixcInJpZ2h0XCI6XCI+ODUlXCJ9LHtcImxlZnRcIjpcIlNUUkFJTlwiLFwicmlnaHRcIjpcIkh5YnJpZFwifSx7XCJsZWZ0XCI6XCJQUk9EVUNUIE9SSUdJTlwiLFwicmlnaHRcIjpcIkh1bWJvbGR0IENvdW50eSwgQ0FcIn1dfSx7XCJuYW1lXCI6XCJzaGluZVwiLFwidGl0bGVcIjpcIkNsZWFyIENhbm5hYmlzIENvbmNlbnRyYXRlXCIsXCJkZXNjcmlwdGlvblwiOltcIlNoaW5lIHN0cm9uZ2VyIGEgbGl0dGxlIGxvbmdlciB3aXRoIG91ciAxMDAlIHNvbHZlbnQtZnJlZSwgY2xlYXIgY2FubmFiaXMgY29uY2VudHJhdGUuIFdlIHVzZSBhIHByb3ByaWV0YXJ5IGV4dHJhY3Rpb24gbWV0aG9kIHRvIGRpc3RpbGwgYSBjbGVhbiwgY2xlYXIgb2lsIGZyb20gb3VyIEhpZ2gtRGVmaW5pdGlvbiwgU2luZ2xlIE9yaWdpbiBPRyBLdXNoLiBBbiBpbmRpY2EtbGVhbmluZyBoeWJyaWQsIG91ciBvaWwgaXMgdG90YWxseSBwdXJlIGFuZCB0b3RhbGx5IHBvdGVudC5cIixcIk91ciBjb25jZW50cmF0ZXMgY2FuIGJlIHVzZWQgaW4gbG9hZGFibGUgdmFwZSBwZW5zLCBvaWwgcmlncywgb3Igc21lYXJlZCBvbnRvIGpvaW50cyBmb3IgYSBsaXR0bGUgZXh0cmEgc3RyZW5ndGguXCIsXCJQcm9kdWN0IHRlc3RlZCBhbmQgaGVsZCAgdG8gdGhlIGhpZ2hlc3Qgc3RhbmRhcmRzIGZvciBwdXJpdHkgYW5kIGNvbnNpc3RlbnQgVEhDIHBvdGVuY3kuXCIsXCJFeHBlcmllbmNlOiBBIGJhbGFuY2VkIGJvZHkgYW5kIGhlYWQgaGlnaC4gTWVsbG93ICYgcmVsYXhlZC5cIl0sXCJ0aHVtYlwiOlwic2hpbmVfdGh1bWIuanBnXCIsXCJpbWFnZVwiOlwic2hpbmUuanBnXCIsXCJkZXRhaWxcIjpbe1wibGVmdFwiOlwiVEhDXCIsXCJyaWdodFwiOlwiPjg1JVwifSx7XCJsZWZ0XCI6XCJTVFJBSU5cIixcInJpZ2h0XCI6XCJIeWJyaWRcIn0se1wibGVmdFwiOlwiUFJPRFVDVCBPUklHSU5cIixcInJpZ2h0XCI6XCJIdW1ib2xkdCBDb3VudHksIENBXCJ9XX0se1wibmFtZVwiOlwiZmxvd2Vyc1wiLFwidGl0bGVcIjpcIkZ1bGwgQmxvb21zXCIsXCJkZXNjcmlwdGlvblwiOltcIk5hdHVyYWxseSBncm93biBhbmQgaGFydmVzdGVkIHVuZGVyIEh1bWJvbGR0IENvdW50eSBzdW5zaGluZSwgb3VyIGZsb3dlcnMgYXJlIG1ldGljdWxvdXNseSBtb25pdG9yZWQgYW5kIGhhbmRsZWQgd2l0aCB0aGUgdXRtb3N0IGNhcmUgdG8gZW5zdXJlIHByZW1pdW0gcXVhbGl0eS5cIixcIkFzIG5hdGl2ZSBIdW1ib2xkdCBncm93ZXJzLCB3ZSBoYXZlIGEgcHVsc2Ugb24gd2hhdOKAmXMgaW4gZGVtYW5kIHRvIG1ha2Ugc3VyZSB3ZSBwcm92aWRlIHRoZSBuZXdlc3QgYW5kIG1vc3QgZXhjaXRpbmcgc3RyYWlucy5cIixcIkFsbCBvZiBvdXIgZmxvd2VycyBhcmUgbGFiLXRlc3RlZCB0ZXN0ZWQgYW5kIGhlbGQgdG8gdGhlIGhpZ2hlc3Qgc3RhbmRhcmRzIGZvciBwdXJpdHkgYW5kIGNvbnNpc3RlbnQgVEhDIHBvdGVuY3kuXCJdLFwidGh1bWJcIjpcImZsb3dlcnNfdGh1bWIuanBnXCIsXCJpbWFnZVwiOlwiZmxvd2Vycy5qcGdcIixcImZsYXZvcnNcIjpbe1wibmFtZVwiOlwiSGlnaC1EZWZpbml0aW9uIE9HIEt1c2hcIixcInRhZ1wiOlwiaGRcIixcImRlc2NcIjpbXCJPbmUgb2YgdGhlIG1vc3QgbGVnZW5kYXJ5IGNhbm5hYmlzIHN0cmFpbnMsIE9HIEt1c2ggaXMgYSBzdHJvbmcsIEluZGljYS1sZWFuaW5nIGh5YnJpZCByZW5vd25lZCBmb3IgaXRzIHBvd2VyZnVsIHBvdGVuY3ksIG1lZGljaW5hbCBxdWFsaXRpZXMgYW5kIHVuaXF1ZSB0YXN0ZS4gVGhlIHN0cmFpbiBzbWVsbHMgYW5kIHRhc3RlcyBsaWtlIHN3ZWV0IGxlbW9ucyB3aXRoIGEgaGludCBvZiB3b29keSBlYXJ0aGluZXNzLiBXaGF0IG1ha2VzIG91cnMgSGlnaC1EZWZpbml0aW9uPyBUaGF04oCZcyBvdXIgYmVzdCBrZXB0IHNlY3JldC5cIl19LHtcIm5hbWVcIjpcIlN1bnNldCBTaGVyYmVydFwiLFwidGFnXCI6XCJzaGVyYmVydFwiLFwiZGVzY1wiOltcIkFuIEluZGljYS1kb21pbmFudCBoeWJyaWQsIHRoaXMgaXMgYSBwb3dlcmZ1bCBjcm9zcyBiZXR3ZWVuIHRoZSBHaXJsIFNjb3V0IENvb2tpZXMgYW5kIFBpbmsgUGFudGllcyBzdHJhaW5zLiBLbm93biBmb3IgaXRzIHVwbGlmdGluZyBqb2x0IG9mIGNlcmVicmFsIGVuZXJneSwgU3Vuc2V0IFNoZXJiZXQgdGFzdGVzIGxpa2Ugc3dlZXQgY2l0cnVzIGFuZCBob25leSB3aXRoIGFuIGVhcnRoeSBhZnRlcnRhc3RlLlwiXX0se1wibmFtZVwiOlwiU291ciBUYW5naWVcIixcInRhZ1wiOlwic291clwiLFwiZGVzY1wiOltcIkFuIDgwJSBTYXRpdmEtZG9taW5hbnQgY3Jvc3MgYmV0d2VlbiBFYXN0IENvYXN0IFNvdXIgRGllc2VsIGFuZCBUYW5naWUsIHRoaXMgc3RyYWluIGlzIGtub3duIGZvciBpdHMgZXh0cmVtZSwgbW91dGh3YXRlcmluZyBmbGF2b3IuIFN0cm9uZyBjaXRydXMgbm90ZXMgYXJlIG1ldCB3aXRoIGFuIGVhcnRoeSBkaWVzZWwgYWZ0ZXJ0YXN0ZS4gQSB3ZWxsLWJhbGFuY2VkIHN0cmFpbiBwZXJmZWN0IGZvciBmdWxsIGJvZHkgcmVsYXhhdGlvbi5cIl19LHtcIm5hbWVcIjpcIkJsYWNrIExpbWUgUmVzZXJ2ZVwiLFwiZGVzY1wiOltcIkEgYm91dGlxdWUsIEluZGljYSBzdHJhaW4gd2l0aCBhIHJlcHV0YWJsZSBFbWVyYWxkIFRyaWFuZ2xlIGhlcml0YWdlLiBBIHBvd2VyZnVsIGNyb3NzIGJldHdlZW4gTm9ydGhlcm4gTGlnaHRzLCBQdXJwbGUgS3VzaCBhbmQgQ2hlbWRhd2cgU3BlY2lhbCBSZXNlcnZlIHN0cmFpbnMuIFJlZnJlc2hpbmcgYW5kIGV4dWJlcmFudCB3aXRoIGEgcHJvbm91bmNlZCBtaXggb2Ygc3dlZXQgY2l0cnVzLCBwZXBwZXJ5IHNwaWNlIGFuZCBqdWljeSBsaW1lLlwiXX1dLFwiZGV0YWlsXCI6W3tcImxlZnRcIjpcIlRIQ1wiLFwicmlnaHRcIjpcIj44NSVcIn0se1wibGVmdFwiOlwiU1RSQUlOXCIsXCJyaWdodFwiOlwiSHlicmlkXCJ9LHtcImxlZnRcIjpcIlBST0RVQ1QgT1JJR0lOXCIsXCJyaWdodFwiOlwiSHVtYm9sZHQgQ291bnR5LCBDQVwifV19XSxcInZlbmRvcnNcIjpbe1wibmFtZVwiOlwiSHVtYm9sZHQgUGF0aWVudCBSZXNvdXJjZSBDZW50ZXJcIixcInBsYWNlSWRcIjpcIkNoSUpXM3NSdEFWWDBWUVI3cTdfaEREY25Bc1wiLFwiaW1hZ2VcIjpcImhwcmMuanBnXCJ9LHtcIm5hbWVcIjpcIkJsdW0gT2FrXCIsXCJwbGFjZUlkXCI6XCJDaElKTlVpLUFxeUFqNEFST0NQaXRXeHRwc01cIixcImltYWdlXCI6XCJibHVtLmpwZ1wifV0sXCJjb3B5XCI6e1wiYWJvdXRcIjp7XCJ0aXRsZVwiOlwiYWJvdXQgdXNcIixcImNvcHlzXCI6W1wiV2UgYXJlIHRoZSBzbWFsbGVzdCBncmFpbnMgb2YgcmljaCwgaGVhbHRoeSBzb2lsLiBXZSBhcmUgdGhlIG94eWdlbiB0aGljayBhaXIgcHJvdmlkZWQgYnkgdGhlIGZvcmVzdHMgb2YgSHVtYm9sZHQgQ291bnR5LiBXZSBhcmUgdGhlIGNhcmluZyBoYW5kcyB0aGF0IHR1cm4gaGlnaCBxdWFsaXR5LCBjaGVtaWNhbC1mcmVlIGNhbm5hYmlzIGludG8gYmVhdXRpZnVsbHkgY3JhZnRlZCBjb25jZW50cmF0ZXMsIGFsbG93aW5nIHlvdXIgbGlmZSB0byBiZSBhIGxpdHRsZSBlYXNpZXIuXCIsXCJMYXN0bHksIHdlIGFyZSB0aGUgcmF5cyBvZiBzdW5zaGluZSB0aGF0IHNwaWxsIGRvd24gdXBvbiB0aGUgbW91bnRhaW50b3Ag4oCUIHRoZSBicmlnaHQgYW5kIG1vc3QgcG93ZXJmdWwgc291cmNlIHRoYXQgZW5yaWNoZXMgYWxsIG9mIG91ciBjYW5uYWJpcyBhdCBGdWxsIFN1bi5cIl19LFwiY29udGFjdFwiOntcInRpdGxlXCI6XCJjb250YWN0IHVzXCIsXCJzdWJ0aXRsZVwiOlwiV2FudCBtb3JlIHN1bmdyb3duIGdvb2RuZXNzP1wifSxcInByb2Nlc3NcIjp7XCJ0aXRsZVwiOlwib3VyIHByb2Nlc3NcIixcImNvcHlzXCI6W1wiQWxsIG9mIG91ciBwcm9kdWN0cyBjb25zaXN0IG9mIFNpbmdsZSBPcmlnaW4sIEhpZ2gtRGVmaW5pdGlvbiBPRyBLdXNoIGNhbm5hYmlzLiBXaGlsZSBvdGhlcnMgY2FsbCB0aGlzIHRoZWlyIOKAnFJlc2VydmXigJ0gd2UgY2FsbCB0aGlzIG91ciBcXFwiQWxsIHRoZSBUaW1l4oCdLiBXZSBoYW5kIHNlbGVjdCBvdXIgc21hbGwgZ3JvdXAgb2YgcHJvZHVjZXJzIGZvciB0aGVpciBjb25zaXN0ZW50IGNvbW1pdG1lbnQgdG8gcXVhbGl0eSBhbmQgZXhjZWxsZW5jZS4gVGhleSB3b3JrIHRoZWlyIG1hZ2ljIHdpdGggb3VyIHdoaWNoIGFsbG93cyB1cyB0byBtYWludGFpbiBxdWFsaXR5LCBjb25zaXN0ZW5jeSBhbmQgcXVhbnRpdHkuIFJhaXNlZCBvdXQgb2YgdGhlIG1vc3QgcmVwdXRhYmxlIGdyb3dpbmcgcmVnaW9uIGluIHRoZSB3b3JsZCwgb3VyIEh1bWJvbGR0IENvdW50eSBmYXJtcyBzdGF5cyByb290ZWQgaW4gY29uc2Npb3VzbHkgZ3Jvd2luZyB0aGUgYmVzdCBhbmQgYnJpZ2h0ZXN0IHN1bmdyb3duIGNhbm5hYmlzLlwiLFwiRXh0cmFjdGluZyBvaWwgZnJvbSBwbGFudHMgaGFzIGJlZW4gd2lkZWx5IHVzZWQgYWNyb3NzIGluZHVzdHJpZXMgZm9yIGNlbnR1cmllcy4gRmluZGluZyB0aGUgcmlnaHQgY2FubmFiaXMgZGlzdGlsbGF0aW9uIHByb2Nlc3MgaGFzIHRha2VuIHllYXJzLCBidXQgd2UgaGF2ZSBkZXNpZ25lZCBhbmQgcGVyZmVjdGVkIGEgbW9kZWwgdGhhdCBpcyBqdXN0IHJpZ2h0IGZvciB1cy4gT3VyIHByb3ByaWV0YXJ5IGV4dHJhY3QgbWV0aG9kIGlzIGRvbmUgYXQgb3VyIHN0YXRlIG9mIHRoZSBhcnQgZmFjaWxpdHkgaW4gSHVtYm9sZHQgQ291bnR5LiBUaGUgcmVzdWx0IGlzIGFuIHVsdHJhIHJlZmluZWQgb2lsIHRoYXQgaXMgbGFiIHRlc3RlZCBhbmQgMTAwJSBzb2x2ZW50LWZyZWUsIGV2ZXJ5IHNpbmdsZSB0aW1lLiBZb3VyIHdlbGwtYmVpbmcgaXMgb3VyIHRvcCBwcmlvcml0eSBzbyB5b3UgY2FuIGV4cGVjdCBpcyBvbmx5IHRoZSBiZXN0LlwiXX19fTsiLCJcbkRlbGF5ID1cbiAgaGVpZ2h0OiBmYWxzZVxuICB3aW46IGZhbHNlXG4gIGxvZ286IGZhbHNlXG4gIGhlYWRlcjogZmFsc2VcbiAgcGVhY2g6IGZhbHNlXG4gIGZpbGxlZDogZmFsc2VcblxuICBpOiAtPlxuXG4gICAgQHdpbiA9ICQgd2luZG93XG4gICAgQGhlaWdodCA9IEB3aW4uaGVpZ2h0KClcbiAgICBAbG9nbyA9ICQgJy5zZWN0aW9uLnNlY3Rpb25fdG9wID4gLm1pZGRsZSdcbiAgICBAaGVhZGVyID0gJCAnaGVhZGVyJ1xuICAgIEBwZWFjaCA9IF8uaGV4MnJnYiBjb25maWcuY29sb3IucGVhY2gxXG4gICAgJCh3aW5kb3cpLnNjcm9sbCBAY2hlY2tTY3JvbGxcblxuICBjaGVja1Njcm9sbDogLT5cblxuICAgIHBlcmMgPSAoRGVsYXkud2luLnNjcm9sbFRvcCgpICogMTAwIC8gRGVsYXkuaGVpZ2h0KS50b0ZpeGVkIDJcblxuICAgIGlmIHBlcmMgPiAxMDBcbiAgICAgIGlmIERlbGF5LmZpbGxlZCBpcyBmYWxzZVxuICAgICAgICAkKCdoZWFkZXInKS5hZGRDbGFzcyAnZmlsbGVkJ1xuICAgICAgICBEZWxheS5maWxsZWQgPSB0cnVlXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGVsc2VcbiAgICAgIGlmIERlbGF5LmZpbGxlZCBpcyB0cnVlXG4gICAgICAgICQoJ2hlYWRlcicpLnJlbW92ZUNsYXNzICdmaWxsZWQnXG4gICAgICAgIERlbGF5LmZpbGxlZCA9IGZhbHNlXG5cbiAgICBvcGFjaXR5ID0gKHBlcmMvMTAwKS50b0ZpeGVkKDEpIC8gMlxuXG4gICAgaWYgSW5kZXgub2Zmc2V0IGlzbnQgMFxuICAgICAgI0RlbGF5LmxvZ28uY3NzKCd0cmFuc2Zvcm0nLCBcInRyYW5zbGF0ZSgwcHgsICN7cGVyYyo3fXB4KVwiKVxuICAgICAgRGVsYXkuaGVhZGVyLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIFwicmdiYSgje0RlbGF5LnBlYWNoLnJ9LCN7RGVsYXkucGVhY2guZ30sI3tEZWxheS5wZWFjaC5ifSwje29wYWNpdHl9KVwiKVxuXG4iLCJGb2xkID1cblxuICBpblZpZXdwb3J0OiAoZWwpIC0+XG5cbiAgICByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBcbiAgICByZXR1cm4oXG4gICAgICAocmVjdC50b3AgPj0gMCB8fCByZWN0LmJvdHRvbSA+PSAwKSAmJlxuICAgICAgKHJlY3QudG9wIDw9IHdpbmRvdy5pbm5lckhlaWdodCB8fCByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQpXG4gICAgKVxuXG5cbiAgdmlld3M6IChlbHMsIHJlc3VsdCkgLT5cblxuICAgIHZpZXdzID0ge31cblxuICAgIGVscy5lYWNoIChpLCBlbCkgLT5cblxuICAgICAgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBuYW1lID0gJChlbCkuYXR0ciAnaWQnXG5cbiAgICAgIHJldHVybiB0cnVlIGlmIG5hbWUgaXMgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChcbiAgICAgICAgKHJlY3QudG9wID49IDAgfHwgcmVjdC5ib3R0b20gPj0gMCkgJiZcbiAgICAgICAgKHJlY3QudG9wIDw9IHdpbmRvdy5pbm5lckhlaWdodCB8fCByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQpXG4gICAgICApXG4gICAgICAgIG1pZGRsZSA9IHdpbmRvdy5pbm5lckhlaWdodC8yXG4gICAgICAgIGlmIHJlY3QudG9wIDwgbWlkZGxlICYmIHJlY3QuYm90dG9tID4gbWlkZGxlXG4gICAgICAgICAgcmVzdWx0KG5hbWUpXG4iLCJHYXRlID1cblxuICBpOiAtPlxuXG4gICAgQGhhbmRsZXJzKClcblxuICAgIF8ub2ZmKCcuZ2F0ZScpIGlmICBDb29raWVzLmdldCgnZ2F0ZScpIGlzbnQgdW5kZWZpbmVkXG5cbiAgaGFuZGxlcnM6IC0+XG5cbiAgICAkKCcuZ2F0ZSA+IC5ncmFkaWVudCA+IC5taWRkbGUgPiAuYnV0dG9ucyA+IC5idXR0b24nKS5vbiAnY2xpY2snLCBAeWVzbm9cblxuICB5ZXNubzogLT5cblxuICAgIHJldHVybiBsb2NhdGlvbi5ocmVmID0gJ2h0dHA6Ly93d3cuYnVpbGRhYmVhci5jb20vJyBpZiAkKHRoaXMpLnRleHQoKSBpcyAnTk8nXG4gICAgaWYgJCh0aGlzKS50ZXh0KCkgaXMgJ1lFUydcbiAgICAgIF8ub2ZmICcuZ2F0ZSdcbiAgICAgIENvb2tpZXMuc2V0ICdnYXRlJywgdHJ1ZSwgZXhwaXJlczogMVxuXG4iLCJJbmRleCA9XG4gIG9mZnNldDogLTg2XG5cbiAgaTogLT5cblxuICAgIEdhdGUuaSgpXG5cbiAgICBEZWxheS5pKClcbiAgICBQcm9kdWN0LmkoKVxuXG4gICAgaWYgJCh3aW5kb3cpLndpZHRoKCkgPCAxMDAwXG4gICAgICBAb2Zmc2V0ID0gMFxuXG4gICAgQGhhbmRsZXJzKClcblxuICAgIHNldEludGVydmFsIEluZGV4Lm1lbnUsIDUwMFxuXG4gIGhhbmRsZXJzOiAtPlxuICAgICQoJ2hlYWRlciA+IC5idXJnZXInKS5jbGljayBAYnVyZ2VySGFuZGxlclxuICAgICQoJ2hlYWRlciA+IC5pbm5lciA+IC5tZW51ID4gLml0ZW1zID4gLmlubmVyID4gLml0ZW0nKS5jbGljayBAbWVudUhhbmRsZXJcbiAgICAkKCdoZWFkZXIgPiAuaW5uZXIgPiAubG9nbycpLmNsaWNrIEBtZW51SGFuZGxlclxuXG4gIGJ1cmdlckhhbmRsZXI6IC0+XG4gICAgXy5zd2FwICdoZWFkZXIgPiAuYnVyZ2VyJ1xuICAgIF8uc3dhcCAnaGVhZGVyID4gLmlubmVyID4gLm1lbnUgPiAuaXRlbXMnXG5cbiAgbWVudUhhbmRsZXI6IC0+XG4gICAgXy5vbiAnaGVhZGVyID4gLmJ1cmdlcidcbiAgICBfLm9mZiAnaGVhZGVyID4gLmlubmVyID4gLm1lbnUgPiAuaXRlbXMnXG4gICAgSW5kZXguc2VjdGlvbiAkKHRoaXMpLmRhdGEgJ2l0ZW0nXG5cbiAgc2VjdGlvbjogKHNlY3Rpb24pIC0+XG4gICAgc2V0VGltZW91dCAtPlxuICAgICAgJCgnaHRtbCwgYm9keScpLnNjcm9sbFRvIFwiIyN7c2VjdGlvbn1cIixcbiAgICAgICAgZHVyYXRpb246IDUwMFxuICAgICAgICBvZmZzZXQ6IEluZGV4Lm9mZnNldFxuICAgICAgbG9jYXRpb24uaGFzaCA9IHNlY3Rpb25cbiAgICAsIDEwMFxuXG4gIG1lbnU6IC0+XG5cbiAgICBGb2xkLnZpZXdzICQoJy5zZWN0aW9uJyksIChyZXN1bHQpIC0+XG4gICAgICBfLm9mZiAnaGVhZGVyID4gLmlubmVyID4gLm1lbnUgPiAuaXRlbXMgPiAuaW5uZXIgPiAuaXRlbSdcbiAgICAgIF8ub24gXCIuaXRlbV8je3Jlc3VsdH1cIlxuXG4gICAgICBpZiByZXN1bHQgaXNudCAncHJvZHVjdHMnIGFuZCBQcm9kdWN0LmRldGFpbHMgaXMgdHJ1ZVxuICAgICAgICBQcm9kdWN0LmNsb3NlQ2xpY2soKVxuIiwiTWFwID1cbiAgbWFwOiBmYWxzZVxuICBwbGFjZXM6IHt9XG5cbiAgaTogLT5cblxuICAgIEBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSxcbiAgICAgIGNlbnRlcjogbGF0OiAzOS42MDkyNDc0LCBsbmc6IC0xMjMuNDQ1Mzc1NVxuICAgICAgem9vbTogN1xuICAgICAgc3R5bGVzOiBAc3R5bGVzXG4gICAgICBvcHRpb25zOiBAb3B0aW9uc1xuXG4gICAgc2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuUGxhY2VzU2VydmljZShAbWFwKVxuXG4gICAgZm9yIHZlbmRvciBpbiBjb25maWcudmVuZG9yc1xuICAgICAgc2VydmljZS5nZXREZXRhaWxzXG4gICAgICAgIHBsYWNlSWQ6IHZlbmRvci5wbGFjZUlkXG4gICAgICAsIChyZXN1bHQsIHN0YXR1cykgLT5cbiAgICAgICAgTWFwLnBsYWNlc1tyZXN1bHQucGxhY2VfaWRdID0gcmVzdWx0XG4gICAgICAgIE1hcC5tYXJrZXJzKCkgaWYgXy5vYmpjKGNvbmZpZy52ZW5kb3JzKSBpcyBfLm9iamMoTWFwLnBsYWNlcylcblxuXG4gICAgQGhhbmRsZXJzKClcblxuICBoYW5kbGVyczogLT5cbiAgICQoJy5zZWN0aW9uX2xvY2F0aW9ucyA+IC5wbGFjZSA+IC5jbG9zZScpLmNsaWNrIEBwbGFjZUNsb3NlSGFuZGxlclxuICBtYXJrZXJzOiAtPlxuXG4gICAgbWFya2VycyA9IFtdXG5cbiAgICBmb3IgaWQsIHBsYWNlIG9mIEBwbGFjZXNcblxuICAgICAgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlclxuICAgICAgICBtYXA6IE1hcC5tYXBcbiAgICAgICAgcG9zaXRpb246IHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uXG4gICAgICAgIGljb246XG4gICAgICAgICAgdXJsOiAnL2ltYWdlcy9tYXAvbWFya2VyLnBuZycsXG4gICAgICAgICAgc2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoNjAsIDYwKVxuICAgICAgICAgIG9yaWdpbjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDAsIDApXG4gICAgICAgIHBsYWNlOlxuICAgICAgICAgIHBsYWNlSWQ6IHBsYWNlLnBsYWNlX2lkXG4gICAgICAgICAgbG9jYXRpb246IHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uXG4gICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lciBtYXJrZXIsICdjbGljaycsIE1hcC5tYXJrZXJIYW5kbGVyXG4gICAgICBtYXJrZXJzLnB1c2ggbWFya2VyXG5cbiAgICBtYXJrZXJDbHVzdGVyID0gbmV3IE1hcmtlckNsdXN0ZXJlciBNYXAubWFwLCBtYXJrZXJzLFxuICAgICAgaW1hZ2VQYXRoOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvZXhhbXBsZXMvbWFya2VyY2x1c3RlcmVyL20nXG5cbiAgbWFya2VySGFuZGxlcjogLT5cblxuICAgcGxhY2UgPSBNYXAucGxhY2VzW3RoaXMucGxhY2UucGxhY2VJZF1cblxuXG4gICBpZiBwbGFjZS5waG90b3NcbiAgICAkKCcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UgPiAuaW5uZXIgPiAuaW1hZ2UnKS5hdHRyICdzcmMnLHBsYWNlLnBob3Rvc1swXS5nZXRVcmwgbWF4V2lkdGg6IDI2MCwgbWF4SGVpZ2h0OiAyMDBcbiAgICBfLm9uICcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UgPiAuaW5uZXIgPiAuaW1hZ2UnXG4gICBlbHNlXG4gICAgXy5vZmYgJy5zZWN0aW9uX2xvY2F0aW9ucyA+IC5wbGFjZSA+IC5pbm5lciA+IC5pbWFnZSdcblxuICAgJCgnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlID4gLmlubmVyID4gLm5hbWUnKS50ZXh0IHBsYWNlLm5hbWVcbiAgICQoJy5zZWN0aW9uX2xvY2F0aW9ucyA+IC5wbGFjZSA+IC5pbm5lciA+IC5uYW1lJykuYXR0ciAnaHJlZicsIHBsYWNlLnVybFxuICAgJCgnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlID4gLmlubmVyID4gLmFkZHJlc3MnKS5odG1sIHBsYWNlLmZvcm1hdHRlZF9hZGRyZXNzXG4gICAkKCcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UgPiAuaW5uZXIgPiAucGhvbmUnKS5odG1sIHBsYWNlLmZvcm1hdHRlZF9waG9uZV9udW1iZXJcblxuICAgXy5vbiAnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlJ1xuXG4gICBNYXAubWFwLnNldFpvb20oMTYpXG4gICBNYXAubWFwLnNldENlbnRlcih0aGlzLmdldFBvc2l0aW9uKCkpXG5cbiAgIGNvbnNvbGUubG9nIHBsYWNlXG5cblxuICBwbGFjZUNsb3NlSGFuZGxlcjogLT5cbiAgICBfLm9mZiAnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlJ1xuICAgIE1hcC5tYXAuc2V0Wm9vbSgxMSlcbiAgICBcbiAgb3B0aW9uczpcbiAgICBzY3JvbGx3aGVlbDogZmFsc2VcbiAgICBtYXBUeXBlQ29udHJvbDogZmFsc2VcbiAgICBmdWxsc2NyZWVuQ29udHJvbDogZmFsc2VcblxuICBzdHlsZXM6XG4gICAgW1xuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAnYWRtaW5pc3RyYXRpdmUnXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdsYWJlbHMudGV4dC5maWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAnY29sb3InOiAnIzllNWQwNycgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdhZG1pbmlzdHJhdGl2ZS5jb3VudHJ5J1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnbGFiZWxzLnRleHQuZmlsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbIHsgJ2NvbG9yJzogJyNmMjk5MzQnIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAnYWRtaW5pc3RyYXRpdmUubG9jYWxpdHknXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdsYWJlbHMudGV4dC5maWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAnY29sb3InOiAnIzllNWQwNycgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdsYW5kc2NhcGUnXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdhbGwnXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICdjb2xvcic6ICcjZjhmNWYyJyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3BvaSdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2FsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbIHsgJ3Zpc2liaWxpdHknOiAnb2ZmJyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3JvYWQnXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdhbGwnXG4gICAgICAgICdzdHlsZXJzJzogW1xuICAgICAgICAgIHsgJ3NhdHVyYXRpb24nOiAtMTAwIH1cbiAgICAgICAgICB7ICdsaWdodG5lc3MnOiA0NSB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3JvYWQnXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdnZW9tZXRyeS5maWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAnY29sb3InOiAnI2YyOTkzNCcgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdyb2FkLmhpZ2h3YXknXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdhbGwnXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICd2aXNpYmlsaXR5JzogJ3NpbXBsaWZpZWQnIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAncm9hZC5hcnRlcmlhbCdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2xhYmVscy5pY29uJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAndmlzaWJpbGl0eSc6ICdvZmYnIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAndHJhbnNpdCdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2FsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbIHsgJ3Zpc2liaWxpdHknOiAnb2ZmJyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3dhdGVyJ1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnYWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFtcbiAgICAgICAgICB7ICdjb2xvcic6ICcjMDBhZmFhJyB9XG4gICAgICAgICAgeyAndmlzaWJpbGl0eSc6ICdvbicgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuXG4iLCJQcm9kdWN0ID1cbiAgdGw6IGZhbHNlXG4gIGRldGFpbHM6IGZhbHNlXG5cbiAgaTogLT5cbiAgICBAdGwgPSBuZXcgVGltZWxpbmVNYXggcmVwZWF0OiAwXG5cbiAgICBAaGFuZGxlcnMoKVxuXG4gIGhhbmRsZXJzOiAtPlxuXG4gICAgJCgnLnNlY3Rpb25fcHJvZHVjdHMgPiAucHJvZHVjdGxpc3QgPiAucHJvZHVjdCcpLmNsaWNrIEBwcm9kdWN0Q2xpY2tcbiAgICAkKCcuc2VjdGlvbl9wcm9kdWN0cyA+IC5kZXRhaWxzID4gLmRldGFpbCA+IC5jbG9zZScpLmNsaWNrIEBjbG9zZUNsaWNrXG4gICAgJCgnLnNlY3Rpb25fcHJvZHVjdHMgPiAuZGV0YWlscyA+IC5kZXRhaWwgPiAuY29weSA+IC5pbm5lciA+IC5mbGF2b3JzID4gLmZsYXZvciA+IC5uYW1lJykuY2xpY2sgQGZsYXZvclxuXG4gIGZsYXZvcjogLT5cbiAgICBwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpXG4gICAgc3RhdGUgPSBfLnN0YXRlIHBhcmVudFxuICAgIF8ub2ZmICcuZmxhdm9ycyA+IC5mbGF2b3InXG4gICAgaWYgc3RhdGVcbiAgICAgIF8ub2ZmIHBhcmVudFxuICAgIGVsc2VcbiAgICAgIF8ub24gcGFyZW50XG4gICAgICB0ID0gJCh0aGlzKVxuICAgICAgaWYgdC5kYXRhKCd0YWcnKSBpc250IHVuZGVmaW5lZFxuICAgICAgICBfb24gXCIuaW1hZ2UudGFnLnRhZ18je3QuZGF0YSgndGFnJyl9XCJcblxuICBwcm9kdWN0Q2xpY2s6IC0+XG4gICAgcHJvZHVjdCA9ICQodGhpcykuZGF0YSAncHJvZHVjdCdcbiAgICBfLm9uIFwiW2lkPSdkZXRhaWwgI3twcm9kdWN0fSddXCJcbiAgICBfLm9uIFwiW2lkPSdpbWFnZSAje3Byb2R1Y3R9J11cIlxuICAgIFByb2R1Y3QuZGV0YWlscyA9IHRydWVcbiAgICBpZiBJbmRleC5vZmZzZXQgaXNudCAwXG4gICAgICBJbmRleC5zZWN0aW9uICdwcm9kdWN0cydcblxuXG4gICAgZW1wdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lICdzdW5FbXB0eSdcbiAgICBmb3IgZGl2IGluIGVtcHR5XG4gICAgICB0bCA9IG5ldyBUaW1lbGluZU1heCByZXBlYXQ6IDBcbiAgICAgIHRsLnRvIGRpdiwgMS4wLCB7bW9ycGhTVkc6IHtzaGFwZTogJyNzdW5GaWxsZWQnLCBzaGFwZUluZGV4OiAzfSwgZWFzZTpFeHBvLmVhc2VJbk91dH1cblxuICBjbG9zZUNsaWNrOiAtPlxuICAgIGVtcHR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSAnc3VuRW1wdHknXG4gICAgZm9yIGRpdiBpbiBlbXB0eVxuICAgICAgdGwgPSBuZXcgVGltZWxpbmVNYXggcmVwZWF0OiAwXG4gICAgICB0bC50byBkaXYsIDAuMDEsIHttb3JwaFNWRzogJyNzdW5FbXB0eScsIGVhc2U6RXhwby5lYXNlSW5PdXR9XG5cbiAgICBfLm9mZiAnLnNlY3Rpb25fcHJvZHVjdHMgPiAuZGV0YWlscyA+IC5kZXRhaWwnXG4gICAgXy5vZmYgJy5zZWN0aW9uX3Byb2R1Y3RzID4gLmRldGFpbHMgPiAuaW1hZ2UnXG4gICAgUHJvZHVjdC5kZXRhaWxzID0gZmFsc2VcbiAgICBcblxuIl19
