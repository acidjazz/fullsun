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
      "title": "about us",
      "copys": ["We are the smallest grains of rich, healthy soil. We are the oxygen thick air provided by the forests of Humboldt County. We are the caring hands that turn high quality, chemical-free cannabis into beautifully crafted concentrates, allowing your life to be a little easier.", "Lastly, we are the rays of sunshine that spill down upon the mountaintop — the bright and most powerful source that enriches all of our cannabis at Full Sun."]
    },
    "contact": {
      "title": "contact us",
      "subtitle": "Want more sungrown goodness?"
    },
    "process": {
      "title": "our process",
      "copys": ["All of our products consist of Single Origin, High-Definition OG Kush cannabis. While others call this their “Reserve” we call this our \"All the Time”. We hand select our small group of producers for their consistent commitment to quality and excellence. They work their magic with our proprietary strain allowing us to maintain quality, consistency and quantity. Raised out of the most reputable growing region in the world, our Humboldt County farms stays rooted in consciously growing the best and brightest sungrown cannabis.", "Extracting oil from plants has been widely used across industries for centuries. Finding the right cannabis distillation process has taken years, but we have designed and perfected a model that is just right for us. Our proprietary extract method is done at our state of the art facility in Humboldt County. The result is an ultra refined oil that is lab tested and 100% solvent-free, every single time. Your well-being is our top priority so you can expect is only the best."]
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjI1Ni5jb2ZmZWUiLCJjb25maWcuY29mZmVlIiwiZGVsYXkuY29mZmVlIiwiZm9sZC5jb2ZmZWUiLCJpbmRleC5jb2ZmZWUiLCJtYXAuY29mZmVlIiwicHJvZHVjdC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxDQUFBO0VBQUE7O0FBQUEsQ0FBQSxHQUVFO0VBQUEsQ0FBQSxFQUFHLFNBQUE7V0FDRCxJQUFDLENBQUEsT0FBRCxHQUFXLFdBQUEsQ0FBWSxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxJQUFiLENBQVosRUFBNkIsR0FBN0I7RUFEVixDQUFIO0VBR0EsQ0FBQSxFQUNFO0lBQUEsTUFBQSxFQUFRLEtBQVI7SUFDQSxPQUFBLEVBQVMsQ0FEVDtHQUpGO0VBT0EsSUFBQSxFQUFNLFNBQUMsRUFBRCxFQUFLLE1BQUwsRUFBbUIsR0FBbkI7O01BQUssU0FBTzs7O01BQU8sTUFBSTs7SUFFM0IsSUFBRyxDQUFBLENBQUEsRUFBQSxZQUFrQixNQUFsQixDQUFIO01BQ0UsRUFBQSxHQUFLLENBQUEsQ0FBRSxFQUFGLEVBRFA7O0lBR0EsSUFBRyxNQUFBLEtBQVksS0FBZjtNQUNFLEVBQUUsQ0FBQyxXQUFILENBQWUsTUFBZixFQURGOztJQUdBLElBQUcsR0FBQSxLQUFTLEtBQVo7TUFDRSxFQUFFLENBQUMsUUFBSCxDQUFZLEdBQVosRUFERjs7QUFHQSxXQUFPO0VBWEgsQ0FQTjtFQW9CQSxHQUFBLEVBQUssU0FBQyxFQUFELEVBQUssQ0FBTDs7TUFBSyxJQUFFOztJQUVWLElBQUcsQ0FBQyxDQUFDLE1BQUYsSUFBYSxDQUFDLENBQUMsT0FBRixHQUFZLENBQTVCO01BRUUsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsS0FBVixFQUFpQixRQUFqQjtNQUNBLFVBQUEsQ0FBVyxTQUFBO1FBQ1QsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsUUFBVixFQUFvQixLQUFwQjtlQUNBLElBQUMsQ0FBQSxJ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QU8sWUFBUjtVQUFzQixVQUFBLEVBQVksQ0FBbEM7U0FBWDtRQUFpRCxJQUFBLEVBQUssSUFBSSxDQUFDLFNBQTNEO09BQWhCO0FBRkY7O0VBVlksQ0F6QmQ7RUF1Q0EsVUFBQSxFQUFZLFNBQUE7QUFDVixRQUFBO0lBQUEsS0FBQSxHQUFRLFFBQVEsQ0FBQyxzQkFBVCxDQUFnQyxVQUFoQztBQUNSLFNBQUEsdUNBQUE7O01BQ0UsRUFBQSxHQUFTLElBQUEsV0FBQSxDQUFZO1FBQUEsTUFBQSxFQUFRLENBQVI7T0FBWjtNQUNULEVBQUUsQ0FBQyxFQUFILENBQU0sR0FBTixFQUFXLElBQVgsRUFBaUI7UUFBQyxRQUFBLEVBQVUsV0FBWDtRQUF3QixJQUFBLEVBQUssSUFBSSxDQUFDLFNBQWxDO09BQWpCO0FBRkY7SUFJQSxDQUFDLENBQUMsR0FBRixDQUFNLHdDQUFOO0lBQ0EsQ0FBQyxDQUFDLEdBQUYsQ0FBTSx1Q0FBTjtXQUNBLE9BQU8sQ0FBQyxPQUFSLEdBQWtCO0VBUlIsQ0F2Q1oiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXyA9XG5cbiAgaTogLT5cbiAgICBAY29uc29sZSA9IHNldEludGVydmFsKEBkZXRlY3QuYmluZChAKSwgMjAwKVxuXG4gIHA6XG4gICAgb2ZmaW5nOiBmYWxzZVxuICAgIG9mZnRpbWU6IDBcblxuICB0dXJuOiAoZWwsIHJlbW92ZT1mYWxzZSwgYWRkPWZhbHNlKSAtPlxuXG4gICAgaWYgZWwgbm90IGluc3RhbmNlb2YgalF1ZXJ5XG4gICAgICBlbCA9ICQoZWwpXG5cbiAgICBpZiByZW1vdmUgaXNudCBmYWxzZVxuICAgICAgZWwucmVtb3ZlQ2xhc3MocmVtb3ZlKVxuXG4gICAgaWYgYWRkIGlzbnQgZmFsc2VcbiAgICAgIGVsLmFkZENsYXNzKGFkZClcblxuICAgIHJldHVybiB0cnVlXG5cbiAgb2ZmOiAoZWwsIHA9e30pIC0+XG5cbiAgICBpZiBwLm9mZmluZyBhbmQgcC5vZmZ0aW1lID4gMFxuXG4gICAgICBAdHVybiBlbCwgZmFsc2UsICdvZmZpbmcnXG4gICAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAgIEB0dXJuIGVsLCAnb2ZmaW5nJywgZmFsc2VcbiAgICAgICAgQHR1cm4gZWwsICdvbicsICdvZmYnXG4gICAgICAsIHAub2ZmdGltZSoxMDAwICsgMTAwXG5cbiAgICBlbHNlXG4gICAgICBAdHVybiBlbCwgJ29uJywgJ29mZidcblxuICAgIHJldHVyblxuXG4gIG9uOiAoZWwsIHApIC0+XG4gICAgQHR1cm4gZWwsICdvZmYnLCAnb24nXG5cbiAgc3RhdGU6IChlbCkgLT5cbiAgICBpZiBlbCBub3QgaW5zdGFuY2VvZiBqUXVlcnlcbiAgICAgIGVsID0gJChlbClcblxuICAgIGlmIGVsLmhhc0NsYXNzICdvZmYnXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICBpZiBlbC5oYXNDbGFzcyAnb24nXG4gICAgICByZXR1cm4gdHJ1ZVxuXG4gICAgcmV0dXJuIG51bGxcblxuICBzd2FwOiAoZWwsIHApIC0+XG5cbiAgICBpZiBlbCBub3QgaW5zdGFuY2VvZiBqUXVlcnlcbiAgICAgIGVsID0gJChlbClcblxuICAgIGlmIGVsLmhhc0NsYXNzICdvZmYnXG4gICAgICBAb24gZWwsIHBcbiAgICBlbHNlXG4gICAgICBAb2ZmIGVsLCBwXG5cbiAgICByZXR1cm5cblxuICBlbmNvZGU6IChzdHIpIC0+XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpXG4gICAgICAucmVwbGFjZSgvIS9nLCAnJTIxJylcbiAgICAgIC5yZXBsYWNlKC8nL2csICclMjcnKVxuICAgICAgLnJlcGxhY2UoL1xcKC9nLCAnJTI4JylcbiAgICAgIC5yZXBsYWNlKC9cXCkvZywgJyUyOScpXG4gICAgICAucmVwbGFjZSgvXFwqL2csICclMkEnKVxuICAgICAgLnJlcGxhY2UoLyUyMC9nLCAnKycpXG5cbiAgdDogKGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCB2YWx1ZSkgLT5cbiAgICBfZ2FxLnB1c2ggWydfdHJhY2tFdmVudCcsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCB2YWx1ZV1cblxuICByYW5kOiAobWluLCBtYXgpIC0+XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCkgKyBtaW5cblxuICBoZXgycmdiOiAoaGV4KSAtPlxuICAgIHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpXG4gICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXG4gICAgZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXG4gICAgYjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNilcbiBcbiAgb2JqYzogKG9iaikgLT5cbiAgICAoayBmb3Igb3duIGsgb2Ygb2JqKS5sZW5ndGhcblxuICBsb2FkOiAoc2NyaXB0LCBpbml0aWF0ZSwgY29tcGxldGUpIC0+XG5cbiAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgJ3NjcmlwdCdcbiAgICBlbC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCdcbiAgICBlbC5zcmMgPSBzY3JpcHRcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyICdsb2FkJyAsIChlKSAtPlxuICAgICAgY29tcGxldGUoKSBpZiB0eXBlb2YgY29tcGxldGUgaXMgJ2Z1bmN0aW9uJ1xuICAgICAgd2luZG93W2luaXRpYXRlXS5pKCkgaWYgaW5pdGlhdGUgaXNudCB1bmRlZmluZWQgYW5kIGluaXRpYXRlIGlzbnQgZmFsc2VcbiAgICAsIGZhbHNlXG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKVxuXG4gIGxsYzogLT5cbiAgICBhc2NpaSA9IFwiXCJcIlxuXG4gICAgICAlY21tbS8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uL21tbVxuICAgICAgbW1vLi4uLi4uLi4uLi4uLi4uLi06Oi8vOjotLi4uLi4uLi06Ojo6Ojo6Ojo6Ojo6LS4uLi4uLi4uLTo6Ly8vOi0ub21tXG4gICAgICBtZC0uLi4uLi4uLi4uLi4uOit5aGRkZGRkZGh5Ky0uLi4uL2RkZGRkZGRkZGRkZGQrLi4uLi4uL3NoZGRkZGRkZHlvZG1cbiAgICAgIG1vLi4uLi4uLi4uLi4uLi1obW1taHl5eXlkbW1taDouLi4vbW1tbWhoaGhoaGhoaCsuLi4uOnlkbW1kaHl5eWhkZG9vbVxuICAgICAgbS0uLi4uLi4uLi4uLi4uLi1zczotLi4uLi15bW1teS4uLi9tbW1tLS0tLS0tLS0tLi4uLjpkbW1tczotLi4uLTovLi1tXG4gICAgICBkLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLnltbW15Li4uL21tbW0tLytvb28rOi0uLi4ueW1tbXktOitvb28rLy0uLmRcbiAgICAgIGguLi4uLi4uLi4uLi4uLi4uLi4uLi4uLjpzbW1tZDouLi4vbW1tbWhtbW1tbW1kaCsuLi5kbW1tc2hkbW1tbW1taHMtaFxuICAgICAgaC4uLi4uLi4uLi4uLi4uLi4uLi4uLjpzZG1tZHk6Li4uLjpoaGRobysvLyt5bW1tbSsuLmRtbW1keW8vLytzZG1tbWhoXG4gICAgICBkLi4uLi4uLi4uLi4uLi4uLi4uLSt5ZG1tZHkvLi4uLi4uLi0tOi4uLi4uLi5zbW1taC4ueW1tbXMuLi4uLi46bW1tbW1cbiAgICAgIG0tLi4uLi4uLi4uLi4uLi4tOnNobW1tZHMvLS0tLS0uLi4uOnMvLS0uLi4tOmhtbW1zLi46ZG1tZC8tLi4uLW9tbW1tbVxuICAgICAgbW8uLi4uLi4uLi4uLi4uLmhtbW1tbW1oaGhoaGhoaC4uLitkbW1kaHl5eWhkbW1teS0uLi4vaG1tbWh5eXlobW1tZGhtXG4gICAgICBtZC0uLi4uLi4uLi4uLi4uZGRkZGRkZGRkZGRkZGRkLi4uLStzaGRkZGRkZGRoeS8tLi4uLi4tb3lkZGRkZGRkaG86ZG1cbiAgICAgIG1tby4uLi4uLi4uLi4uLi46Ojo6Ojo6Ojo6Ojo6OjouLi4uLi4uLTovLy86Oi0uLi4uLi4uLi4uLi06Ly8vOi0uLm9tbVxuICAgICAgbW1tLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4vbW1tXG5cbiAgICAgIDo6IHN5bnRhY3RpYyBzdWdhciBieSAyNTZcbiAgICAgIDo6IGh0dHA6Ly8yNTYuaW8vXG4gICAgICA6OiAje2NvbmZpZy5tZXRhLnJlcG99XG4gICAgXCJcIlwiXG4gICAgY29uc29sZS5sb2cgYXNjaWksIFwiY29sb3I6IGdyZXk7IGZvbnQtZmFtaWx5OiBNZW5sbywgbW9ub3NwYWNlO1wiXG5cbiAgZGV0ZWN0OiAtPlxuICAgIGlmICgoKHdpbmRvdy5vdXRlckhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCkgPiAxMDApIHx8ICgod2luZG93Lm91dGVyV2lkdGggLSB3aW5kb3cuaW5uZXJXaWR0aCkgPiAxMDApKVxuICAgICAgQGxsYygpXG4gICAgICBjbGVhckludGVydmFsIEBjb25zb2xlXG5cbl8uaSgpXG4iLCJjb25maWcgPSB7XCJjb2xvclwiOntcImJsdWUxXCI6XCIjMDBBRkFBXCIsXCJvcmFuZ2UxXCI6XCIjRjI5OTM0XCIsXCJvcmFuZ2UyXCI6XCIjOUU1RDA3XCIsXCJvcmFuZ2UzXCI6XCIjRDFBOTdFXCIsXCJraGFraTFcIjpcIiNDQUFGOTBcIixcInBlYWNoMVwiOlwiI0Y4RjVGMlwiLFwid2hpdGUxXCI6XCIjZmZmZmZmXCIsXCJibGFjazFcIjpcIiMwMDAwMDBcIixcImdyZXkxXCI6XCIjNzc3Nzc3XCJ9LFwiZm9udFwiOntcImgxXCI6e1wiZm9udC1mYW1pbHlcIjpcImFxdWlsb25lIHJlZ3VsYXJcIixcImZvbnQtc2l6ZVwiOlwiNDhweFwifSxcImgyXCI6e1wiZm9udC1mYW1pbHlcIjpcInNhY2tlcnMgZ290aGljXCIsXCJmb250LXNpemVcIjpcIjI2cHhcIixcImxldHRlci1zcGFjaW5nXCI6XCI0cHhcIn0sXCJoM1wiOntcImZvbnQtZmFtaWx5XCI6XCJzYWNrZXJzIGdvdGhpY1wiLFwiZm9udC1zaXplXCI6XCIxNnB4XCIsXCJsZXR0ZXItc3BhY2luZ1wiOlwiMnB4XCIsXCJsaW5lLWhlaWdodFwiOlwiMjJweFwifSxcImg0XCI6e1wiZm9udC1mYW1pbHlcIjpcImFxdWlsb25lIHJlZ3VsYXJcIixcImZvbnQtc2l6ZVwiOlwiMzJweFwifSxcImMxXCI6e1wiZm9udC1mYW1pbHlcIjpcImF2ZXJ0YSBsaWdodFwiLFwiZm9udC1zaXplXCI6XCIxOHB4XCJ9LFwiYzFzXCI6e1wiZm9udC1mYW1pbHlcIjpcImF2ZXJ0YSBsaWdodFwiLFwiZm9udC1zaXplXCI6XCIxNHB4XCJ9LFwiYzFzYlwiOntcImZvbnQtZmFtaWx5XCI6XCJhdmVydGEgYm9sZFwiLFwiZm9udC1zaXplXCI6XCIxNHB4XCJ9LFwiYzJcIjp7XCJmb250LWZhbWlseVwiOlwiYXZlcnRhIGJvbGRcIixcImZvbnQtc2l6ZVwiOlwiMjhweFwifSxcImMzXCI6e1wiZm9udC1mYW1pbHlcIjpcImF2ZXJ0YSBib2xkXCIsXCJmb250LXNpemVcIjpcIjE0cHhcIn0sXCJjNFwiOntcImZvbnQtZmFtaWx5XCI6XCJhdmVydGEgYm9sZFwiLFwiZm9udC1zaXplXCI6XCIyNHB4XCJ9LFwiYzVcIjp7XCJmb250LWZhbWlseVwiOlwiYXZlcnRhIGJvbGRcIixcImZvbnQtc2l6ZVwiOlwiMThweFwifX0sXCJtZXRhXCI6e1widXJsXCI6XCJodHRwOi8vZnVsbHN1bi5jb20vXCIsXCJ0aXRsZVwiOlwiZnVsbCBzdW5cIixcImRlc2NyaXB0aW9uXCI6XCJjYWxpZm9ybmlhIGNvbnNjaW91cyBjYW5uYWJpc1wiLFwia2V5d29yZHNcIjpcImZ1bGwgc3VuLCBjYW5uYWJpcywgY2FsaWZvcm5pYVwiLFwidHJhY2tpbmdfaWRcIjozMTMzNyxcInNoYXJlXCI6XCJpbWFnZXMvbG9nbzEucG5nXCIsXCJyZXBvXCI6XCJodHRwczovL2dpdGh1Yi5jb20vYWNpZGphenovZnVsbHN1blwiLFwibWFwX2FwaV9rZXlcIjpcIkFJemFTeUFJcTg0cGppNG92dW1BTlhYb2xNcWtHd1FYOGtNMW1LY1wiLFwiZW1haWxcIjpcImluZm9AZnVsbHN1bi5jb21cIixcImluc3RhZ3JhbVwiOlwiaHR0cDovL3d3dy5pbnN0YWdyYW0uY29tL1wiLFwidHdpdHRlclwiOlwiaHR0cDovL3d3dy50d2l0dGVyLmNvbS9cIixcImZhY2Vib29rXCI6XCJodHRwOi8vd3d3LmZhY2Vib29rLmNvbS9cIn0sXCJwcm9kdWN0c1wiOlt7XCJuYW1lXCI6XCJ2YXBlIHBlbiBzZXRcIixcInRpdGxlXCI6XCJDYW5uYWJpcyBPaWwgVmFwb3JpemF0aW9uIFNldFwiLFwiZGVzY3JpcHRpb25cIjpbXCJEZXNpZ25lZCBmb3Igb24tdGhlLWdvIGVuam95bWVudCwgdGhpcyBwcmVtaXVtIHZhcGUgc2V0IGluY2x1ZGVzIGEgcHJvcHJpZXRhcnkgc3RyYWluIG9mIG91ciBTaW5nbGUgT3JpZ2luIGNhbm5hYmlzIG9pbC4gVXNlIHRocm91Z2hvdXQgdGhlIGRheSB0byBpbmNpdGUgY3JlYXRpdml0eSwgY2FsbSB0aGUgbWluZCBvciBkZWVwZW4gcmVsYXhhdGlvbiBsZXZlbHMuXCIsXCJUaGUgcGVyZmVjdCBkb3NlIG9mIGdvb2RuZXNzIGFueXRpbWUgeW91IG5lZWQgaXQg4oCUIHN1bnVwIHRvIHN1bmRvd24uXCIsXCJJbmNsdWRlcyBiYXR0ZXJ5LCA1MDBtZyBjYXJ0cmlkZ2UgYW5kIGNoYXJnZXIuICBTb2x2ZW50IEZyZWUuIFByb2R1Y3QgdGVzdGVkIGFuZCBoZWxkICB0byB0aGUgaGlnaGVzdCBzdGFuZGFyZHMgZm9yIHB1cml0eSBhbmQgY29uc2lzdGVudCBUSEMgcG90ZW5jeS5gXCIsXCJFeHBlcmllbmNlOiBBIGNsZWFyLWhlYWRlZCwgZm9jdXNlZCBoaWdoIHBlcmZlY3QgZm9yIGRheXRpbWUgYW5kIG5pZ2h0dGltZSB1c2UuXCJdLFwiaW1hZ2VcIjpcInBlbl9zZXQuanBnXCIsXCJkZXRhaWxcIjpbe1wibGVmdFwiOlwiVEhDXCIsXCJyaWdodFwiOlwiMjMlXCJ9LHtcImxlZnRcIjpcIlNUUkFJTlwiLFwicmlnaHRcIjpcIkh5YnJpZFwifSx7XCJsZWZ0XCI6XCJQUk9EVUNUIE9SSUdJTlwiLFwicmlnaHRcIjpcIkh1bWJvbGR0IENvdW50eSwgQ0FcIn1dfSx7XCJuYW1lXCI6XCJyaXNlXCIsXCJ0aXRsZVwiOlwiU29sdmVudC1GcmVlIFNpbmdsZSBPcmlnaW4gQ2FydHJpZGdlIFJlZmlsbFwiLFwiZGVzY3JpcHRpb25cIjpbXCJNb3JuaW5ncyBqdXN0IGdvdCBicmlnaHRlci4gT3VyIFJpc2UsIGFsbC1uYXR1cmFsLCBzaW5nbGUgb3JpZ2luIG9pbCBjYXJ0cmlkZ2VzIGFyZSBhdmFpbGFibGUgaW4gNCBkaWZmZXJlbnQgdGVycGVuZSBlbnJpY2hlZCBmbGF2b3JzOiBEYW5rIEJlcnJ5LCBFbmxpZ2h0ZW7igJ1taW504oCdLCBUcm9waUNhbGkgYW5kIE5hdHVyYWxcIixcIlNlbGVjdCBhIHRvbmUgdG8gZW5oYW5jZSB5b3VyIGRheTpcIl0sXCJpbWFnZVwiOlwicmlzZS5qcGdcIixcImZsYXZvcnNcIjpbe1wibmFtZVwiOlwiRGFuayBCZXJyeVwiLFwiZGVzY1wiOltcIkltYWdpbmUgd2FraW5nIHVwIGNvbXBsZXRlbHkgcmVmcmVzaGVkIGFmdGVyIGEgbG9uZywgaGFyZCBzbGVlcCBhbmQgcmVjYWxsaW5nIGV2ZXJ5IHZpdmlkIGRldGFpbCBvZiB5b3VyIGRyZWFtLlwiLFwiRmVlbDogY3JlYXRpdmUsIGFsZXJ0LCBhbmQgaW5zcGlyZWRcIl19LHtcIm5hbWVcIjpcIkVubGlnaHRlbuKAnW1pbnTigJ1cIixcImRlc2NcIjpbXCJUbyBZb2dhIG9yIG5vdCB0byBZb2dhPyBXaGV0aGVyIHlvdSBzd2VhdCB0aHJvdWdoIGl0IG9yIHNsZXB0IHRocm91Z2ggaXQsIHdlIGdvdCB5b3UgY292ZXJlZC5cIixcIkZlZWw6IE1pbmRmdWwsIGZvY3VzZWQsIGFuZCBjYWxtXCJdfSx7XCJuYW1lXCI6XCJUcm9waUNhbGlcIixcImRlc2NcIjpbXCJZb3UgaG9wcGVkIG9uIGEgcGxhbmUgYW5kIGp1c3QgdG91Y2hlZCBkb3duIG9uIGEgdHJvcGljYWwgb2FzaXMuIFdlbGNvbWUgdG8gaXNsYW5kIGxpdmluZywgb3BlcmF0aW9uIHVud2luZC5cIixcIkZlZWw6IEhhcHB5LCByZWxheGVkLCBhbmQgY2FyZWZyZWVcIl19LHtcIm5hbWVcIjpcIlB1cmUvTmF0dXJhbFwiLFwiZGVzY1wiOltcIkdyZWVuIHNtb290aGllZCBmb3IgYnJlYWtmYXN0LCBhdGUgc2FsYWQgZm9yIGx1bmNoLCBzYWlkIG5vIHRvIEhI4oCUICAgICAgdGhhdCB3YXMgdGhlIGlkZWEgYW55d2F5cy5cIixcIkZlZWw6IGNsZWFyIGhlYWRlZCwgZW5lcmdpemVkLCByZWZyZXNoZWRcIl19XSxcImRldGFpbFwiOlt7XCJsZWZ0XCI6XCJUSENcIixcInJpZ2h0XCI6XCIyMyVcIn0se1wibGVmdFwiOlwiU1RSQUlOXCIsXCJyaWdodFwiOlwiSHlicmlkXCJ9LHtcImxlZnRcIjpcIlBST0RVQ1QgT1JJR0lOXCIsXCJyaWdodFwiOlwiSHVtYm9sZHQgQ291bnR5LCBDQVwifV19LHtcIm5hbWVcIjpcInNoaW5lXCIsXCJ0aXRsZVwiOlwiQ2xlYXIgQ2FubmFiaXMgQ29uY2VudHJhdGVcIixcImRlc2NyaXB0aW9uXCI6W1wiU2hpbmUgc3Ryb25nZXIgYSBsaXR0bGUgbG9uZ2VyIHdpdGggb3VyIDEwMCUgc29sdmVudC1mcmVlLCBjbGVhciBjYW5uYWJpcyBjb25jZW50cmF0ZS4gV2UgdXNlIGEgcHJvcHJpZXRhcnkgZXh0cmFjdGlvbiBtZXRob2QgdG8gZGlzdGlsbCBhIGNsZWFuLCBjbGVhciBvaWwgZnJvbSBvdXIgSGlnaC1EZWZpbml0aW9uLCBTaW5nbGUgT3JpZ2luIE9HIEt1c2guIEFuIGluZGljYS1sZWFuaW5nIGh5YnJpZCwgb3VyIG9pbCBpcyB0b3RhbGx5IHB1cmUgYW5kIHRvdGFsbHkgcG90ZW50LlwiLFwiT3VyIGNvbmNlbnRyYXRlcyBjYW4gYmUgdXNlZCBpbiBsb2FkYWJsZSB2YXBlIHBlbnMsIG9pbCByaWdzLCBvciBzbWVhcmVkIG9udG8gam9pbnRzIGZvciBhIGxpdHRsZSBleHRyYSBzdHJlbmd0aC5cIixcIlByb2R1Y3QgdGVzdGVkIGFuZCBoZWxkICB0byB0aGUgaGlnaGVzdCBzdGFuZGFyZHMgZm9yIHB1cml0eSBhbmQgY29uc2lzdGVudCBUSEMgcG90ZW5jeS5cIixcIkV4cGVyaWVuY2U6IEEgYmFsYW5jZWQgYm9keSBhbmQgaGVhZCBoaWdoLiBNZWxsb3cgJiByZWxheGVkLlwiXSxcImltYWdlXCI6XCJzaGluZS5qcGdcIixcImRldGFpbFwiOlt7XCJsZWZ0XCI6XCJUSENcIixcInJpZ2h0XCI6XCIyMyVcIn0se1wibGVmdFwiOlwiU1RSQUlOXCIsXCJyaWdodFwiOlwiSHlicmlkXCJ9LHtcImxlZnRcIjpcIlBST0RVQ1QgT1JJR0lOXCIsXCJyaWdodFwiOlwiSHVtYm9sZHQgQ291bnR5LCBDQVwifV19LHtcIm5hbWVcIjpcImZsb3dlcnNcIixcInRpdGxlXCI6XCJGdWxsIGJsb29tXCIsXCJkZXNjcmlwdGlvblwiOltcIk5hdHVyYWxseSBncm93biBhbmQgaGFydmVzdGVkIHVuZGVyIEh1bWJvbGR0IGNvdW50eSBzdW5zaGluZSwgb3VyIHdob2xlIGZsb3dlcnMgYXJlIG1ldGljdWxvdXNseSBtb25pdG9yZWQgdGhyb3VnaG91dCB0aGUgY3VsdGl2YXRpb24gcHJvY2VzcyB0byBlbnN1cmUgdG9wIHF1YWxpdHkuXCIsXCJXZSBhcmUgY29uc3RhbnRseSB0cmVuZCBodW50aW5nLCBzZWFyY2hpbmcgaGlnaCBhbmQgbG93IGZvciB0aGUgbmV3ZXN0IGFuZCBtb3N0IGV4Y2l0aW5nIHN0cmFpbnMuIFdlIG9ubHkgcHJvdmlkZSB0aGUgYmVzdCBvZiB0aGUgYmVzdCBzbyBpZiB3ZeKAmXJlIG9udG8gc29tZXRoaW5nIGdvb2QsIHlvdeKAmWxsIGJlIHRoZSBmaXJzdCB0byBrbm93LiBUaGF04oCZcyBhIHByb21pc2UuXCIsXCJBbGwgb2Ygb3VyIGZsb3dlcnMgYXJlIGxhYi10ZXN0ZWQgdGVzdGVkIGFuZCBoZWxkIHRvIHRoZSBoaWdoZXN0IHN0YW5kYXJkcyBmb3IgcHVyaXR5IGFuZCBjb25zaXN0ZW50IFRIQyBwb3RlbmN5LlwiLFwiQ3VycmVudGx5IFNlcnZpbmcgNCBGbGF2b3JzOjxiciAvPiBIaWdoLURlZmluaXRpb24gT0cgS3VzaDxiciAvPiBTdW5zZXQgU2hvcmJldDxiciAvPiBTb3VyIFRhbmd5PGJyIC8+IEJsYWNrIExpbWUgUmVzZXJ2ZTxiciAvPlwiXSxcImltYWdlXCI6XCJzaGluZS5qcGdcIixcImRldGFpbFwiOlt7XCJsZWZ0XCI6XCJUSENcIixcInJpZ2h0XCI6XCIyMyVcIn0se1wibGVmdFwiOlwiU1RSQUlOXCIsXCJyaWdodFwiOlwiSHlicmlkXCJ9LHtcImxlZnRcIjpcIlBST0RVQ1QgT1JJR0lOXCIsXCJyaWdodFwiOlwiSHVtYm9sZHQgQ291bnR5LCBDQVwifV19XSxcInZlbmRvcnNcIjpbe1wibmFtZVwiOlwiVGhlIEdyZWVuIENyb3NzXCIsXCJwbGFjZUlkXCI6XCJDaElKcDd1ejc0bC1qNEFSSC1uZEpqbTB0emtcIixcImltYWdlXCI6XCJ0aGVncmVlbmNyb3NzLmpwZ1wifSx7XCJuYW1lXCI6XCJIYXJib3JzaWRlIEhlYWx0aCBDZW50ZXJcIixcInBsYWNlSWRcIjpcIkNoSUprNnZZcnVDR2o0QVJHZ3NHblFhV2d6d1wiLFwiaW1hZ2VcIjpcImhhcmJvcnNpZGUuanBnXCJ9LHtcIm5hbWVcIjpcInNwYXJjXCIsXCJwbGFjZUlkXCI6XCJDaElKV1VaN3dweUFoWUFSS1FZX0lKSEVfOTRcIixcImltYWdlXCI6XCJzcGFyYy5qcGdcIn1dLFwiY29weVwiOntcImFib3V0XCI6e1widGl0bGVcIjpcImFib3V0IHVzXCIsXCJjb3B5c1wiOltcIldlIGFyZSB0aGUgc21hbGxlc3QgZ3JhaW5zIG9mIHJpY2gsIGhlYWx0aHkgc29pbC4gV2UgYXJlIHRoZSBveHlnZW4gdGhpY2sgYWlyIHByb3ZpZGVkIGJ5IHRoZSBmb3Jlc3RzIG9mIEh1bWJvbGR0IENvdW50eS4gV2UgYXJlIHRoZSBjYXJpbmcgaGFuZHMgdGhhdCB0dXJuIGhpZ2ggcXVhbGl0eSwgY2hlbWljYWwtZnJlZSBjYW5uYWJpcyBpbnRvIGJlYXV0aWZ1bGx5IGNyYWZ0ZWQgY29uY2VudHJhdGVzLCBhbGxvd2luZyB5b3VyIGxpZmUgdG8gYmUgYSBsaXR0bGUgZWFzaWVyLlwiLFwiTGFzdGx5LCB3ZSBhcmUgdGhlIHJheXMgb2Ygc3Vuc2hpbmUgdGhhdCBzcGlsbCBkb3duIHVwb24gdGhlIG1vdW50YWludG9wIOKAlCB0aGUgYnJpZ2h0IGFuZCBtb3N0IHBvd2VyZnVsIHNvdXJjZSB0aGF0IGVucmljaGVzIGFsbCBvZiBvdXIgY2FubmFiaXMgYXQgRnVsbCBTdW4uXCJdfSxcImNvbnRhY3RcIjp7XCJ0aXRsZVwiOlwiY29udGFjdCB1c1wiLFwic3VidGl0bGVcIjpcIldhbnQgbW9yZSBzdW5ncm93biBnb29kbmVzcz9cIn0sXCJwcm9jZXNzXCI6e1widGl0bGVcIjpcIm91ciBwcm9jZXNzXCIsXCJjb3B5c1wiOltcIkFsbCBvZiBvdXIgcHJvZHVjdHMgY29uc2lzdCBvZiBTaW5nbGUgT3JpZ2luLCBIaWdoLURlZmluaXRpb24gT0cgS3VzaCBjYW5uYWJpcy4gV2hpbGUgb3RoZXJzIGNhbGwgdGhpcyB0aGVpciDigJxSZXNlcnZl4oCdIHdlIGNhbGwgdGhpcyBvdXIgXFxcIkFsbCB0aGUgVGltZeKAnS4gV2UgaGFuZCBzZWxlY3Qgb3VyIHNtYWxsIGdyb3VwIG9mIHByb2R1Y2VycyBmb3IgdGhlaXIgY29uc2lzdGVudCBjb21taXRtZW50IHRvIHF1YWxpdHkgYW5kIGV4Y2VsbGVuY2UuIFRoZXkgd29yayB0aGVpciBtYWdpYyB3aXRoIG91ciBwcm9wcmlldGFyeSBzdHJhaW4gYWxsb3dpbmcgdXMgdG8gbWFpbnRhaW4gcXVhbGl0eSwgY29uc2lzdGVuY3kgYW5kIHF1YW50aXR5LiBSYWlzZWQgb3V0IG9mIHRoZSBtb3N0IHJlcHV0YWJsZSBncm93aW5nIHJlZ2lvbiBpbiB0aGUgd29ybGQsIG91ciBIdW1ib2xkdCBDb3VudHkgZmFybXMgc3RheXMgcm9vdGVkIGluIGNvbnNjaW91c2x5IGdyb3dpbmcgdGhlIGJlc3QgYW5kIGJyaWdodGVzdCBzdW5ncm93biBjYW5uYWJpcy5cIixcIkV4dHJhY3Rpbmcgb2lsIGZyb20gcGxhbnRzIGhhcyBiZWVuIHdpZGVseSB1c2VkIGFjcm9zcyBpbmR1c3RyaWVzIGZvciBjZW50dXJpZXMuIEZpbmRpbmcgdGhlIHJpZ2h0IGNhbm5hYmlzIGRpc3RpbGxhdGlvbiBwcm9jZXNzIGhhcyB0YWtlbiB5ZWFycywgYnV0IHdlIGhhdmUgZGVzaWduZWQgYW5kIHBlcmZlY3RlZCBhIG1vZGVsIHRoYXQgaXMganVzdCByaWdodCBmb3IgdXMuIE91ciBwcm9wcmlldGFyeSBleHRyYWN0IG1ldGhvZCBpcyBkb25lIGF0IG91ciBzdGF0ZSBvZiB0aGUgYXJ0IGZhY2lsaXR5IGluIEh1bWJvbGR0IENvdW50eS4gVGhlIHJlc3VsdCBpcyBhbiB1bHRyYSByZWZpbmVkIG9pbCB0aGF0IGlzIGxhYiB0ZXN0ZWQgYW5kIDEwMCUgc29sdmVudC1mcmVlLCBldmVyeSBzaW5nbGUgdGltZS4gWW91ciB3ZWxsLWJlaW5nIGlzIG91ciB0b3AgcHJpb3JpdHkgc28geW91IGNhbiBleHBlY3QgaXMgb25seSB0aGUgYmVzdC5cIl19fX07IiwiXG5EZWxheSA9XG4gIGhlaWdodDogZmFsc2VcbiAgd2luOiBmYWxzZVxuICBsb2dvOiBmYWxzZVxuICBoZWFkZXI6IGZhbHNlXG4gIHBlYWNoOiBmYWxzZVxuICBmaWxsZWQ6IGZhbHNlXG5cbiAgaTogLT5cblxuICAgIEB3aW4gPSAkIHdpbmRvd1xuICAgIEBoZWlnaHQgPSBAd2luLmhlaWdodCgpXG4gICAgQGxvZ28gPSAkICcuc2VjdGlvbi5zZWN0aW9uX3RvcCA+IC5taWRkbGUnXG4gICAgQGhlYWRlciA9ICQgJ2hlYWRlcidcbiAgICBAcGVhY2ggPSBfLmhleDJyZ2IgY29uZmlnLmNvbG9yLnBlYWNoMVxuICAgICQod2luZG93KS5zY3JvbGwgQGNoZWNrU2Nyb2xsXG5cbiAgY2hlY2tTY3JvbGw6IC0+XG5cbiAgICBwZXJjID0gKERlbGF5Lndpbi5zY3JvbGxUb3AoKSAqIDEwMCAvIERlbGF5LmhlaWdodCkudG9GaXhlZCAyXG5cbiAgICBpZiBwZXJjID4gMTAwXG4gICAgICBpZiBEZWxheS5maWxsZWQgaXMgZmFsc2VcbiAgICAgICAgJCgnaGVhZGVyJykuYWRkQ2xhc3MgJ2ZpbGxlZCdcbiAgICAgICAgRGVsYXkuZmlsbGVkID0gdHJ1ZVxuICAgICAgcmV0dXJuIHRydWVcbiAgICBlbHNlXG4gICAgICBpZiBEZWxheS5maWxsZWQgaXMgdHJ1ZVxuICAgICAgICAkKCdoZWFkZXInKS5yZW1vdmVDbGFzcyAnZmlsbGVkJ1xuICAgICAgICBEZWxheS5maWxsZWQgPSBmYWxzZVxuXG4gICAgb3BhY2l0eSA9IChwZXJjLzEwMCkudG9GaXhlZCgxKSAvIDJcblxuICAgIGlmIEluZGV4Lm9mZnNldCBpc250IDBcbiAgICAgICNEZWxheS5sb2dvLmNzcygndHJhbnNmb3JtJywgXCJ0cmFuc2xhdGUoMHB4LCAje3BlcmMqN31weClcIilcbiAgICAgIERlbGF5LmhlYWRlci5jc3MoJ2JhY2tncm91bmQtY29sb3InLCBcInJnYmEoI3tEZWxheS5wZWFjaC5yfSwje0RlbGF5LnBlYWNoLmd9LCN7RGVsYXkucGVhY2guYn0sI3tvcGFjaXR5fSlcIilcblxuIiwiRm9sZCA9XG5cbiAgaW5WaWV3cG9ydDogKGVsKSAtPlxuXG4gICAgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgXG4gICAgcmV0dXJuKFxuICAgICAgKHJlY3QudG9wID49IDAgfHwgcmVjdC5ib3R0b20gPj0gMCkgJiZcbiAgICAgIChyZWN0LnRvcCA8PSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0KVxuICAgIClcblxuXG4gIHZpZXdzOiAoZWxzLCByZXN1bHQpIC0+XG5cbiAgICB2aWV3cyA9IHt9XG5cbiAgICBlbHMuZWFjaCAoaSwgZWwpIC0+XG5cbiAgICAgIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgbmFtZSA9ICQoZWwpLmF0dHIgJ2lkJ1xuXG4gICAgICByZXR1cm4gdHJ1ZSBpZiBuYW1lIGlzIHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIChyZWN0LnRvcCA+PSAwIHx8IHJlY3QuYm90dG9tID49IDApICYmXG4gICAgICAgIChyZWN0LnRvcCA8PSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0KVxuICAgICAgKVxuICAgICAgICBtaWRkbGUgPSB3aW5kb3cuaW5uZXJIZWlnaHQvMlxuICAgICAgICBpZiByZWN0LnRvcCA8IG1pZGRsZSAmJiByZWN0LmJvdHRvbSA+IG1pZGRsZVxuICAgICAgICAgIHJlc3VsdChuYW1lKVxuIiwiSW5kZXggPVxuICBvZmZzZXQ6IC04NlxuXG4gIGk6IC0+XG5cbiAgICBEZWxheS5pKClcbiAgICBQcm9kdWN0LmkoKVxuXG4gICAgaWYgJCh3aW5kb3cpLndpZHRoKCkgPCAxMDAwXG4gICAgICBAb2Zmc2V0ID0gMFxuXG4gICAgQGhhbmRsZXJzKClcblxuICAgIHNldEludGVydmFsIEluZGV4Lm1lbnUsIDUwMFxuXG4gIGhhbmRsZXJzOiAtPlxuICAgICQoJ2hlYWRlciA+IC5idXJnZXInKS5jbGljayBAYnVyZ2VySGFuZGxlclxuICAgICQoJ2hlYWRlciA+IC5pbm5lciA+IC5tZW51ID4gLml0ZW1zID4gLmlubmVyID4gLml0ZW0nKS5jbGljayBAbWVudUhhbmRsZXJcbiAgICAkKCdoZWFkZXIgPiAuaW5uZXIgPiAubG9nbycpLmNsaWNrIEBtZW51SGFuZGxlclxuXG4gIGJ1cmdlckhhbmRsZXI6IC0+XG4gICAgXy5zd2FwICdoZWFkZXIgPiAuYnVyZ2VyJ1xuICAgIF8uc3dhcCAnaGVhZGVyID4gLmlubmVyID4gLm1lbnUgPiAuaXRlbXMnXG5cbiAgbWVudUhhbmRsZXI6IC0+XG4gICAgXy5vbiAnaGVhZGVyID4gLmJ1cmdlcidcbiAgICBfLm9mZiAnaGVhZGVyID4gLmlubmVyID4gLm1lbnUgPiAuaXRlbXMnXG4gICAgSW5kZXguc2VjdGlvbiAkKHRoaXMpLmRhdGEgJ2l0ZW0nXG5cbiAgc2VjdGlvbjogKHNlY3Rpb24pIC0+XG4gICAgc2V0VGltZW91dCAtPlxuICAgICAgJCgnaHRtbCwgYm9keScpLnNjcm9sbFRvIFwiIyN7c2VjdGlvbn1cIixcbiAgICAgICAgZHVyYXRpb246IDUwMFxuICAgICAgICBvZmZzZXQ6IEluZGV4Lm9mZnNldFxuICAgICAgbG9jYXRpb24uaGFzaCA9IHNlY3Rpb25cbiAgICAsIDEwMFxuXG4gIG1lbnU6IC0+XG5cbiAgICBGb2xkLnZpZXdzICQoJy5zZWN0aW9uJyksIChyZXN1bHQpIC0+XG4gICAgICBfLm9mZiAnaGVhZGVyID4gLmlubmVyID4gLm1lbnUgPiAuaXRlbXMgPiAuaW5uZXIgPiAuaXRlbSdcbiAgICAgIF8ub24gXCIuaXRlbV8je3Jlc3VsdH1cIlxuXG4gICAgICBpZiByZXN1bHQgaXNudCAncHJvZHVjdHMnIGFuZCBQcm9kdWN0LmRldGFpbHMgaXMgdHJ1ZVxuICAgICAgICBQcm9kdWN0LmNsb3NlQ2xpY2soKVxuIiwiTWFwID1cbiAgbWFwOiBmYWxzZVxuICBwbGFjZXM6IHt9XG5cbiAgaTogLT5cblxuXG4gICAgQG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLFxuICAgICAgY2VudGVyOiBsYXQ6IDM3Ljc3ODQwNywgbG5nOiAtMTIyLjM5NzEyOFxuICAgICAgem9vbTogMTFcbiAgICAgIHN0eWxlczogQHN0eWxlc1xuICAgICAgb3B0aW9uczogQG9wdGlvbnNcblxuICAgIHNlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLlBsYWNlc1NlcnZpY2UoQG1hcClcblxuICAgIGZvciB2ZW5kb3IgaW4gY29uZmlnLnZlbmRvcnNcbiAgICAgIHNlcnZpY2UuZ2V0RGV0YWlsc1xuICAgICAgICBwbGFjZUlkOiB2ZW5kb3IucGxhY2VJZFxuICAgICAgLCAocmVzdWx0LCBzdGF0dXMpIC0+XG4gICAgICAgIE1hcC5wbGFjZXNbcmVzdWx0LnBsYWNlX2lkXSA9IHJlc3VsdFxuICAgICAgICBNYXAubWFya2VycygpIGlmIF8ub2JqYyhjb25maWcudmVuZG9ycykgaXMgXy5vYmpjKE1hcC5wbGFjZXMpXG5cblxuICAgIEBoYW5kbGVycygpXG5cbiAgaGFuZGxlcnM6IC0+XG4gICAkKCcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UgPiAuY2xvc2UnKS5jbGljayBAcGxhY2VDbG9zZUhhbmRsZXJcbiAgbWFya2VyczogLT5cblxuICAgIG1hcmtlcnMgPSBbXVxuXG4gICAgZm9yIGlkLCBwbGFjZSBvZiBAcGxhY2VzXG5cbiAgICAgIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXJcbiAgICAgICAgbWFwOiBNYXAubWFwXG4gICAgICAgIHBvc2l0aW9uOiBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvblxuICAgICAgICBpY29uOlxuICAgICAgICAgIHVybDogJy9pbWFnZXMvbWFwL21hcmtlci5wbmcnLFxuICAgICAgICAgIHNjYWxlZFNpemU6IG5ldyBnb29nbGUubWFwcy5TaXplKDYwLCA2MClcbiAgICAgICAgICBvcmlnaW46IG5ldyBnb29nbGUubWFwcy5Qb2ludCgwLCAwKVxuICAgICAgICBwbGFjZTpcbiAgICAgICAgICBwbGFjZUlkOiBwbGFjZS5wbGFjZV9pZFxuICAgICAgICAgIGxvY2F0aW9uOiBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvblxuICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIgbWFya2VyLCAnY2xpY2snLCBNYXAubWFya2VySGFuZGxlclxuICAgICAgbWFya2Vycy5wdXNoIG1hcmtlclxuXG4gICAgbWFya2VyQ2x1c3RlciA9IG5ldyBNYXJrZXJDbHVzdGVyZXIgTWFwLm1hcCwgbWFya2VycyxcbiAgICAgIGltYWdlUGF0aDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L2V4YW1wbGVzL21hcmtlcmNsdXN0ZXJlci9tJ1xuXG4gIG1hcmtlckhhbmRsZXI6IC0+XG5cbiAgIHBsYWNlID0gTWFwLnBsYWNlc1t0aGlzLnBsYWNlLnBsYWNlSWRdXG5cblxuICAgaWYgcGxhY2UucGhvdG9zXG4gICAgJCgnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlID4gLmlubmVyID4gLmltYWdlJykuYXR0ciAnc3JjJyxwbGFjZS5waG90b3NbMF0uZ2V0VXJsIG1heFdpZHRoOiAyNjAsIG1heEhlaWdodDogMjAwXG4gICAgXy5vbiAnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlID4gLmlubmVyID4gLmltYWdlJ1xuICAgZWxzZVxuICAgIF8ub2ZmICcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UgPiAuaW5uZXIgPiAuaW1hZ2UnXG5cbiAgICQoJy5zZWN0aW9uX2xvY2F0aW9ucyA+IC5wbGFjZSA+IC5pbm5lciA+IC5uYW1lJykudGV4dCBwbGFjZS5uYW1lXG4gICAkKCcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UgPiAuaW5uZXIgPiAubmFtZScpLmF0dHIgJ2hyZWYnLCBwbGFjZS51cmxcbiAgICQoJy5zZWN0aW9uX2xvY2F0aW9ucyA+IC5wbGFjZSA+IC5pbm5lciA+IC5hZGRyZXNzJykuaHRtbCBwbGFjZS5mb3JtYXR0ZWRfYWRkcmVzc1xuICAgJCgnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlID4gLmlubmVyID4gLnBob25lJykuaHRtbCBwbGFjZS5mb3JtYXR0ZWRfcGhvbmVfbnVtYmVyXG5cbiAgIF8ub24gJy5zZWN0aW9uX2xvY2F0aW9ucyA+IC5wbGFjZSdcblxuICAgTWFwLm1hcC5zZXRab29tKDE2KVxuICAgTWFwLm1hcC5zZXRDZW50ZXIodGhpcy5nZXRQb3NpdGlvbigpKVxuXG4gICBjb25zb2xlLmxvZyBwbGFjZVxuXG5cbiAgcGxhY2VDbG9zZUhhbmRsZXI6IC0+XG4gICAgXy5vZmYgJy5zZWN0aW9uX2xvY2F0aW9ucyA+IC5wbGFjZSdcbiAgICBNYXAubWFwLnNldFpvb20oMTEpXG4gICAgXG4gIG9wdGlvbnM6XG4gICAgc2Nyb2xsd2hlZWw6IGZhbHNlXG4gICAgbWFwVHlwZUNvbnRyb2w6IGZhbHNlXG4gICAgZnVsbHNjcmVlbkNvbnRyb2w6IGZhbHNlXG5cbiAgc3R5bGVzOlxuICAgIFtcbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ2FkbWluaXN0cmF0aXZlJ1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnbGFiZWxzLnRleHQuZmlsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbIHsgJ2NvbG9yJzogJyM5ZTVkMDcnIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAnYWRtaW5pc3RyYXRpdmUuY291bnRyeSdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2xhYmVscy50ZXh0LmZpbGwnXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICdjb2xvcic6ICcjZjI5OTM0JyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ2FkbWluaXN0cmF0aXZlLmxvY2FsaXR5J1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnbGFiZWxzLnRleHQuZmlsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbIHsgJ2NvbG9yJzogJyM5ZTVkMDcnIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAnbGFuZHNjYXBlJ1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnYWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAnY29sb3InOiAnI2Y4ZjVmMicgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdwb2knXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdhbGwnXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICd2aXNpYmlsaXR5JzogJ29mZicgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdyb2FkJ1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnYWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFtcbiAgICAgICAgICB7ICdzYXR1cmF0aW9uJzogLTEwMCB9XG4gICAgICAgICAgeyAnbGlnaHRuZXNzJzogNDUgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdyb2FkJ1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnZ2VvbWV0cnkuZmlsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbIHsgJ2NvbG9yJzogJyNmMjk5MzQnIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAncm9hZC5oaWdod2F5J1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnYWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAndmlzaWJpbGl0eSc6ICdzaW1wbGlmaWVkJyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3JvYWQuYXJ0ZXJpYWwnXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdsYWJlbHMuaWNvbidcbiAgICAgICAgJ3N0eWxlcnMnOiBbIHsgJ3Zpc2liaWxpdHknOiAnb2ZmJyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3RyYW5zaXQnXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdhbGwnXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICd2aXNpYmlsaXR5JzogJ29mZicgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICd3YXRlcidcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2FsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbXG4gICAgICAgICAgeyAnY29sb3InOiAnIzAwYWZhYScgfVxuICAgICAgICAgIHsgJ3Zpc2liaWxpdHknOiAnb24nIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cblxuIiwiUHJvZHVjdCA9XG4gIHRsOiBmYWxzZVxuICBkZXRhaWxzOiBmYWxzZVxuXG4gIGk6IC0+XG4gICAgQHRsID0gbmV3IFRpbWVsaW5lTWF4IHJlcGVhdDogMFxuXG4gICAgQGhhbmRsZXJzKClcblxuICBoYW5kbGVyczogLT5cbiAgICAkKCcuc2VjdGlvbl9wcm9kdWN0cyA+IC5wcm9kdWN0bGlzdCA+IC5wcm9kdWN0JykuY2xpY2sgQHByb2R1Y3RDbGlja1xuICAgICQoJy5zZWN0aW9uX3Byb2R1Y3RzID4gLmRldGFpbHMgPiAuZGV0YWlsID4gLmNsb3NlJykuY2xpY2sgQGNsb3NlQ2xpY2tcblxuICAgICQoJy5zZWN0aW9uX3Byb2R1Y3RzID4gLmRldGFpbHMgPiAuZGV0YWlsID4gLmNvcHkgPiAuaW5uZXIgPiAuZmxhdm9ycyA+IC5mbGF2b3IgPiAubmFtZScpLmNsaWNrIEBmbGF2b3JcblxuICBmbGF2b3I6IC0+XG4gICAgcGFyZW50ID0gJCh0aGlzKS5wYXJlbnQoKVxuICAgIHN0YXRlID0gXy5zdGF0ZSBwYXJlbnRcbiAgICBjb25zb2xlLmxvZyBzdGF0ZVxuICAgIF8ub2ZmICcuZmxhdm9ycyA+IC5mbGF2b3InXG4gICAgaWYgc3RhdGVcbiAgICAgIF8ub2ZmIHBhcmVudFxuICAgIGVsc2VcbiAgICAgIF8ub24gcGFyZW50XG5cblxuICBwcm9kdWN0Q2xpY2s6IC0+XG4gICAgcHJvZHVjdCA9ICQodGhpcykuZGF0YSAncHJvZHVjdCdcbiAgICBfLm9uIFwiW2lkPSdkZXRhaWwgI3twcm9kdWN0fSddXCJcbiAgICBfLm9uIFwiW2lkPSdpbWFnZSAje3Byb2R1Y3R9J11cIlxuICAgIFByb2R1Y3QuZGV0YWlscyA9IHRydWVcbiAgICBpZiBJbmRleC5vZmZzZXQgaXNudCAwXG4gICAgICBJbmRleC5zZWN0aW9uICdwcm9kdWN0cydcblxuXG4gICAgZW1wdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lICdzdW5FbXB0eSdcbiAgICBmb3IgZGl2IGluIGVtcHR5XG4gICAgICB0bCA9IG5ldyBUaW1lbGluZU1heCByZXBlYXQ6IDBcbiAgICAgIHRsLnRvIGRpdiwgMS4wLCB7bW9ycGhTVkc6IHtzaGFwZTogJyNzdW5GaWxsZWQnLCBzaGFwZUluZGV4OiAzfSwgZWFzZTpFeHBvLmVhc2VJbk91dH1cblxuICBjbG9zZUNsaWNrOiAtPlxuICAgIGVtcHR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSAnc3VuRW1wdHknXG4gICAgZm9yIGRpdiBpbiBlbXB0eVxuICAgICAgdGwgPSBuZXcgVGltZWxpbmVNYXggcmVwZWF0OiAwXG4gICAgICB0bC50byBkaXYsIDAuMDEsIHttb3JwaFNWRzogJyNzdW5FbXB0eScsIGVhc2U6RXhwby5lYXNlSW5PdXR9XG5cbiAgICBfLm9mZiAnLnNlY3Rpb25fcHJvZHVjdHMgPiAuZGV0YWlscyA+IC5kZXRhaWwnXG4gICAgXy5vZmYgJy5zZWN0aW9uX3Byb2R1Y3RzID4gLmRldGFpbHMgPiAuaW1hZ2UnXG4gICAgUHJvZHVjdC5kZXRhaWxzID0gZmFsc2VcbiAgICBcbiJdfQ==
