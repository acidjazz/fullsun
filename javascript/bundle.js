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
    "url": "https://full-sun.com/",
    "title": "Full Sun",
    "description": "Premium Sungrown Goodness",
    "keywords": "full sun, cannabis, california",
    "tracking_id": "UA-93234607-1",
    "share": "images/share.png",
    "repo": "https://github.com/acidjazz/fullsun",
    "map_api_key": "AIzaSyAIq84pji4ovumANXXolMqkGwQX8kM1mKc",
    "email": "info@full-sun.com",
    "instagram": "https://www.instagram.com/fullsun_/",
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
      "description": ["Shine stronger a little longer with our 100% solvent-free, clear cannabis concentrate. We use a proprietary extraction method to distill a clean, clear oil from our High-Definition, Single Origin OG Kush. An indica-leaning hybrid, our oil is totally pure and totally potent.", "Our concentrates can be used in loadable vape pens, oil rigs, or smeared onto joints for a little extra strength.", "Product tested and held  to the highest standards for purity and consistent THC potency.", "<i>Experience: A balanced body and head high. Mellow & relaxed.</i>"],
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
    }, {
      "name": "Anvil Tee",
      "title": "Anvil Tee Shirt",
      "description": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"],
      "thumb": "anvil_tee_thumb.jpg",
      "image": "anvil_tee_grey.jpg",
      "detail": [
        {
          "left": "Sizes",
          "right": "S, M, L, XL"
        }, {
          "left": "colors",
          "right": "green, black, blue"
        }
      ],
      "versions": [
        {
          "color": "grey",
          "image": "anvil_tee_grey.jpg"
        }, {
          "color": "black",
          "image": "anvil_tee_black.jpg"
        }
      ]
    }, {
      "name": "Cropped Tee",
      "title": "Cropped Tee Shirt",
      "description": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"],
      "thumb": "cropped_tee_thumb.jpg",
      "image": "cropped_tee.jpg",
      "detail": [
        {
          "left": "Sizes",
          "right": "S, M, L, XL"
        }, {
          "left": "colors",
          "right": "green, black, blue"
        }
      ]
    }, {
      "name": "Bag",
      "title": "Drawstring Bag",
      "description": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"],
      "thumb": "bag_thumb.jpg",
      "image": "bag.jpg",
      "detail": [
        {
          "left": "Sizes",
          "right": "S, M, L, XL"
        }, {
          "left": "colors",
          "right": "green, black, blue"
        }
      ]
    }, {
      "name": "hat",
      "title": "Blue Hat",
      "description": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"],
      "thumb": "hat_thumb.jpg",
      "image": "hat.jpg",
      "detail": [
        {
          "left": "Sizes",
          "right": "S, M, L, XL"
        }, {
          "left": "colors",
          "right": "green, black, blue"
        }
      ]
    }, {
      "name": "Leggings",
      "title": "Black Leggings",
      "description": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"],
      "thumb": "leggings_thumb.jpg",
      "image": "leggings.jpg",
      "detail": [
        {
          "left": "Sizes",
          "right": "S, M, L, XL"
        }, {
          "left": "colors",
          "right": "green, black, blue"
        }
      ]
    }, {
      "name": "Racerback",
      "ecwid": 88316723,
      "title": "California Conscious",
      "description": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"],
      "thumb": "racerback_thumb.jpg",
      "image": "racerback_front.jpg",
      "detail": [
        {
          "left": "Sizes",
          "right": "S, M, L, XL"
        }, {
          "left": "colors",
          "right": "green, black, blue"
        }
      ],
      "versions": [
        {
          "color": "grey",
          "image": "racerback_front.jpg"
        }, {
          "color": "black",
          "image": "racerback_back.jpg"
        }
      ]
    }
  ],
  "vendors": [
    {
      "name": "Humboldt Patient Resource Center",
      "placeId": "ChIJW3sRtAVX0VQR7q7_hDDcnAs",
      "link": "http://hprcarcata.com/",
      "image": "hprc.png"
    }, {
      "name": "Blum Oak",
      "placeId": "ChIJNUi-AqyAj4AROCPitWxtpsM",
      "link": "http://blumoak.com/",
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
      "copys": ["All of our products consist of Single Origin, High-Definition OG Kush cannabis. While others call this their “Reserve” we call this our \"All the Time”. We hand select our small group of producers for their consistent commitment to quality and excellence. They work their magic with our proprietary strain which allows us to maintain quality, consistency, <i>and</i> quantity. Raised out of the most reputable growing region in the world, our Humboldt County farms stays rooted in consciously growing the best and brightest sungrown cannabis.", "Extracting oil from plants has been widely used across industries for centuries. Finding the right cannabis extraction process has taken years, but we have designed and perfected a model that makes our products superior. Our proprietary extract method is done at our state of the art facility in Humboldt County. The result is an ultra-refined oil that is lab tested and 100% solvent-free, every single time. Your well-being is our top priority."]
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
    $('.section_products > .details > .image > .inner > .versions > .version').click(this.versionClick);
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
    _.on('.backdrop');
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
  versionClick: function() {
    $('.versions > .version').removeClass('active');
    $(this).addClass('active');
    return $(this).parent().parent().css('background-image', 'url(/images/products/' + $(this).data('image'));
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
    _.off('.backdrop');
    return Product.details = false;
  }
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjI1Ni5jb2ZmZWUiLCJjb25maWcuY29mZmVlIiwiZGVsYXkuY29mZmVlIiwiZm9sZC5jb2ZmZWUiLCJnYXRlLmNvZmZlZSIsImluZGV4LmNvZmZlZSIsIm1hcC5jb2ZmZWUiLCJwcm9kdWN0LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBLENBQUE7RUFBQTs7QUFBQSxDQUFBLEdBRUU7RUFBQSxDQUFBLEVBQUcsU0FBQTtXQUNELElBQUMsQ0FBQSxPQUFELEdBQVcsV0FBQSxDQUFZLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLElBQWIsQ0FBWixFQUE2QixHQUE3QjtFQURWLENBQUg7RUFHQSxDQUFBLEVBQ0U7SUFBQSxNQUFBLEVBQVEsS0FBUjtJQUNBLE9BQUEsRUFBUyxDQURUO0dBSkY7RUFPQSxJQUFBLEVBQU0sU0FBQyxFQUFELEVBQUssTUFBTCxFQUFtQixHQUFuQjs7TUFBSyxTQUFPOzs7TUFBTyxNQUFJOztJQUUzQixJQUFHLENBQUEsQ0FBQSxFQUFBLFlBQWtCLE1BQWxCLENBQUg7TUFDRSxFQUFBLEdBQUssQ0FBQSxDQUFFLEVBQUYsRUFEUDs7SUFHQSxJQUFHLE1BQUEsS0FBWSxLQUFmO01BQ0UsRUFBRSxDQUFDLFdBQUgsQ0FBZSxNQUFmLEVBREY7O0lBR0EsSUFBRyxHQUFBLEtBQVMsS0FBWjtNQUNFLEVBQUUsQ0FBQyxRQUFILENBQVksR0FBWixFQURGOztBQUdBLFdBQU87RUFYSCxDQVBOO0VBb0JBLEdBQUEsRUFBSyxTQUFDLEVBQUQsRUFBSyxDQUFMOztNQUFLLElBQUU7O0lBRVYsSUFBRyxDQUFDLENBQUMsTUFBRixJQUFhLENBQUMsQ0FBQyxPQUFGLEdBQVksQ0FBNUI7TUFFRSxJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4sRUFBVSxLQUFWLEVBQWlCLFFBQWpCO01BQ0EsVUFBQSxDQUFXLFNBQUE7UUFDVCxJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4sRUFBVSxRQUFWLEVBQW9CLEtBQXBCO2VB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QUExQixDQUFzQyxRQUF0QztJQUNBLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxRQUFSLENBQWlCLFFBQWpCO1dBQ0EsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLE1BQVIsQ0FBQSxDQUFnQixDQUFDLE1BQWpCLENBQUEsQ0FBeUIsQ0FBQyxHQUExQixDQUE4QixrQkFBOUIsRUFBa0QsdUJBQUEsR0FBMEIsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLElBQVIsQ0FBYSxPQUFiLENBQTVFO0VBSFksQ0E1Q2Q7RUFpREEsVUFBQSxFQUFZLFNBQUE7QUFDVixRQUFBO0lBQUEsS0FBQSxHQUFRLFFBQVEsQ0FBQyxzQkFBVCxDQUFnQyxVQUFoQztBQUNSLFNBQUEsdUNBQUE7O01BQ0UsRUFBQSxHQUFLLElBQUksV0FBSixDQUFnQjtRQUFBLE1BQUEsRUFBUSxDQUFSO09BQWhCO01BQ0wsRUFBRSxDQUFDLEVBQUgsQ0FBTSxHQUFOLEVBQVcsSUFBWCxFQUFpQjtRQUFDLFFBQUEsRUFBVSxXQUFYO1FBQXdCLElBQUEsRUFBSyxJQUFJLENBQUMsU0FBbEM7T0FBakI7QUFGRjtJQUlBLENBQUMsQ0FBQyxHQUFGLENBQU0sd0NBQU47SUFDQSxDQUFDLENBQUMsR0FBRixDQUFNLHVDQUFOO0lBQ0EsQ0FBQyxDQUFDLEdBQUYsQ0FBTSxXQUFOO1dBQ0EsT0FBTyxDQUFDLE9BQVIsR0FBa0I7RUFUUixDQWpEWiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJfID1cblxuICBpOiAtPlxuICAgIEBjb25zb2xlID0gc2V0SW50ZXJ2YWwoQGRldGVjdC5iaW5kKEApLCAyMDApXG5cbiAgcDpcbiAgICBvZmZpbmc6IGZhbHNlXG4gICAgb2ZmdGltZTogMFxuXG4gIHR1cm46IChlbCwgcmVtb3ZlPWZhbHNlLCBhZGQ9ZmFsc2UpIC0+XG5cbiAgICBpZiBlbCBub3QgaW5zdGFuY2VvZiBqUXVlcnlcbiAgICAgIGVsID0gJChlbClcblxuICAgIGlmIHJlbW92ZSBpc250IGZhbHNlXG4gICAgICBlbC5yZW1vdmVDbGFzcyhyZW1vdmUpXG5cbiAgICBpZiBhZGQgaXNudCBmYWxzZVxuICAgICAgZWwuYWRkQ2xhc3MoYWRkKVxuXG4gICAgcmV0dXJuIHRydWVcblxuICBvZmY6IChlbCwgcD17fSkgLT5cblxuICAgIGlmIHAub2ZmaW5nIGFuZCBwLm9mZnRpbWUgPiAwXG5cbiAgICAgIEB0dXJuIGVsLCBmYWxzZSwgJ29mZmluZydcbiAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgQHR1cm4gZWwsICdvZmZpbmcnLCBmYWxzZVxuICAgICAgICBAdHVybiBlbCwgJ29uJywgJ29mZidcbiAgICAgICwgcC5vZmZ0aW1lKjEwMDAgKyAxMDBcblxuICAgIGVsc2VcbiAgICAgIEB0dXJuIGVsLCAnb24nLCAnb2ZmJ1xuXG4gICAgcmV0dXJuXG5cbiAgb246IChlbCwgcCkgLT5cbiAgICBAdHVybiBlbCwgJ29mZicsICdvbidcblxuICBzdGF0ZTogKGVsKSAtPlxuICAgIGlmIGVsIG5vdCBpbnN0YW5jZW9mIGpRdWVyeVxuICAgICAgZWwgPSAkKGVsKVxuXG4gICAgaWYgZWwuaGFzQ2xhc3MgJ29mZidcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIGlmIGVsLmhhc0NsYXNzICdvbidcbiAgICAgIHJldHVybiB0cnVlXG5cbiAgICByZXR1cm4gbnVsbFxuXG4gIHN3YXA6IChlbCwgcCkgLT5cblxuICAgIGlmIGVsIG5vdCBpbnN0YW5jZW9mIGpRdWVyeVxuICAgICAgZWwgPSAkKGVsKVxuXG4gICAgaWYgZWwuaGFzQ2xhc3MgJ29mZidcbiAgICAgIEBvbiBlbCwgcFxuICAgIGVsc2VcbiAgICAgIEBvZmYgZWwsIHBcblxuICAgIHJldHVyblxuXG4gIGVuY29kZTogKHN0cikgLT5cbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cilcbiAgICAgIC5yZXBsYWNlKC8hL2csICclMjEnKVxuICAgICAgLnJlcGxhY2UoLycvZywgJyUyNycpXG4gICAgICAucmVwbGFjZSgvXFwoL2csICclMjgnKVxuICAgICAgLnJlcGxhY2UoL1xcKS9nLCAnJTI5JylcbiAgICAgIC5yZXBsYWNlKC9cXCovZywgJyUyQScpXG4gICAgICAucmVwbGFjZSgvJTIwL2csICcrJylcblxuICB0OiAoY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsIHZhbHVlKSAtPlxuICAgIF9nYXEucHVzaCBbJ190cmFja0V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsIHZhbHVlXVxuXG4gIHJhbmQ6IChtaW4sIG1heCkgLT5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KSArIG1pblxuXG4gIGhleDJyZ2I6IChoZXgpIC0+XG4gICAgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleClcbiAgICByOiBwYXJzZUludChyZXN1bHRbMV0sIDE2KSxcbiAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcbiAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KVxuIFxuICBvYmpjOiAob2JqKSAtPlxuICAgIChrIGZvciBvd24gayBvZiBvYmopLmxlbmd0aFxuXG4gIGxvYWQ6IChzY3JpcHQsIGluaXRpYXRlLCBjb21wbGV0ZSkgLT5cblxuICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAnc2NyaXB0J1xuICAgIGVsLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0J1xuICAgIGVsLnNyYyA9IHNjcmlwdFxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIgJ2xvYWQnICwgKGUpIC0+XG4gICAgICBjb21wbGV0ZSgpIGlmIHR5cGVvZiBjb21wbGV0ZSBpcyAnZnVuY3Rpb24nXG4gICAgICB3aW5kb3dbaW5pdGlhdGVdLmkoKSBpZiBpbml0aWF0ZSBpc250IHVuZGVmaW5lZCBhbmQgaW5pdGlhdGUgaXNudCBmYWxzZVxuICAgICwgZmFsc2VcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpXG5cbiAgbGxjOiAtPlxuICAgIGFzY2lpID0gXCJcIlwiXG5cbiAgICAgICVjbW1tLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4vbW1tXG4gICAgICBtbW8uLi4uLi4uLi4uLi4uLi4uLTo6Ly86Oi0uLi4uLi4uLTo6Ojo6Ojo6Ojo6OjotLi4uLi4uLi4tOjovLy86LS5vbW1cbiAgICAgIG1kLS4uLi4uLi4uLi4uLi46K3loZGRkZGRkaHkrLS4uLi4vZGRkZGRkZGRkZGRkZCsuLi4uLi4vc2hkZGRkZGRkeW9kbVxuICAgICAgbW8uLi4uLi4uLi4uLi4uLWhtbW1oeXl5eWRtbW1oOi4uLi9tbW1taGhoaGhoaGhoKy4uLi46eWRtbWRoeXl5aGRkb29tXG4gICAgICBtLS4uLi4uLi4uLi4uLi4uLXNzOi0uLi4uLXltbW15Li4uL21tbW0tLS0tLS0tLS0uLi4uOmRtbW1zOi0uLi4tOi8uLW1cbiAgICAgIGQuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4ueW1tbXkuLi4vbW1tbS0vK29vbys6LS4uLi55bW1teS06K29vbysvLS4uZFxuICAgICAgaC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uOnNtbW1kOi4uLi9tbW1taG1tbW1tbWRoKy4uLmRtbW1zaGRtbW1tbW1ocy1oXG4gICAgICBoLi4uLi4uLi4uLi4uLi4uLi4uLi4uOnNkbW1keTouLi4uOmhoZGhvKy8vK3ltbW1tKy4uZG1tbWR5by8vK3NkbW1taGhcbiAgICAgIGQuLi4uLi4uLi4uLi4uLi4uLi4tK3lkbW1keS8uLi4uLi4uLS06Li4uLi4uLnNtbW1oLi55bW1tcy4uLi4uLjptbW1tbVxuICAgICAgbS0uLi4uLi4uLi4uLi4uLi06c2htbW1kcy8tLS0tLS4uLi46cy8tLS4uLi06aG1tbXMuLjpkbW1kLy0uLi4tb21tbW1tXG4gICAgICBtby4uLi4uLi4uLi4uLi4uaG1tbW1tbWhoaGhoaGhoLi4uK2RtbWRoeXl5aGRtbW15LS4uLi9obW1taHl5eWhtbW1kaG1cbiAgICAgIG1kLS4uLi4uLi4uLi4uLi5kZGRkZGRkZGRkZGRkZGQuLi4tK3NoZGRkZGRkZGh5Ly0uLi4uLi1veWRkZGRkZGRobzpkbVxuICAgICAgbW1vLi4uLi4uLi4uLi4uLjo6Ojo6Ojo6Ojo6Ojo6Oi4uLi4uLi4tOi8vLzo6LS4uLi4uLi4uLi4uLTovLy86LS4ub21tXG4gICAgICBtbW0vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9tbW1cblxuICAgICAgOjogc3ludGFjdGljIHN1Z2FyIGJ5IDI1NlxuICAgICAgOjogaHR0cDovLzI1Ni5pby9cbiAgICAgIDo6ICN7Y29uZmlnLm1ldGEucmVwb31cbiAgICBcIlwiXCJcbiAgICBjb25zb2xlLmxvZyBhc2NpaSwgXCJjb2xvcjogZ3JleTsgZm9udC1mYW1pbHk6IE1lbmxvLCBtb25vc3BhY2U7XCJcblxuICBkZXRlY3Q6IC0+XG4gICAgaWYgKCgod2luZG93Lm91dGVySGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0KSA+IDEwMCkgfHwgKCh3aW5kb3cub3V0ZXJXaWR0aCAtIHdpbmRvdy5pbm5lcldpZHRoKSA+IDEwMCkpXG4gICAgICBAbGxjKClcbiAgICAgIGNsZWFySW50ZXJ2YWwgQGNvbnNvbGVcblxuXy5pKClcbiIsImNvbmZpZyA9IHtcImNvbG9yXCI6e1wiYmx1ZTFcIjpcIiMwMEFGQUFcIixcIm9yYW5nZTFcIjpcIiNGMjk5MzRcIixcIm9yYW5nZTJcIjpcIiM5RTVEMDdcIixcIm9yYW5nZTNcIjpcIiNEMUE5N0VcIixcImtoYWtpMVwiOlwiI0NBQUY5MFwiLFwicGVhY2gxXCI6XCIjRjhGNUYyXCIsXCJ3aGl0ZTFcIjpcIiNmZmZmZmZcIixcImJsYWNrMVwiOlwiIzAwMDAwMFwiLFwiZ3JleTFcIjpcIiM3Nzc3NzdcIn0sXCJmb250XCI6e1wiaDFcIjp7XCJmb250LWZhbWlseVwiOlwiYXF1aWxvbmUgcmVndWxhclwiLFwiZm9udC1zaXplXCI6XCI0OHB4XCJ9LFwiaDJcIjp7XCJmb250LWZhbWlseVwiOlwic2Fja2VycyBnb3RoaWNcIixcImZvbnQtc2l6ZVwiOlwiMjJweFwiLFwibGV0dGVyLXNwYWNpbmdcIjpcIjRweFwifSxcImgzXCI6e1wiZm9udC1mYW1pbHlcIjpcInNhY2tlcnMgZ290aGljXCIsXCJmb250LXNpemVcIjpcIjE2cHhcIixcImxldHRlci1zcGFjaW5nXCI6XCIycHhcIixcImxpbmUtaGVpZ2h0XCI6XCIyMnB4XCJ9LFwiaDRcIjp7XCJmb250LWZhbWlseVwiOlwiYXF1aWxvbmUgcmVndWxhclwiLFwiZm9udC1zaXplXCI6XCIzMnB4XCJ9LFwiYzFcIjp7XCJmb250LWZhbWlseVwiOlwiYXZlcnRhIGxpZ2h0XCIsXCJmb250LXNpemVcIjpcIjE4cHhcIn0sXCJjMXNcIjp7XCJmb250LWZhbWlseVwiOlwiYXZlcnRhIGxpZ2h0XCIsXCJmb250LXNpemVcIjpcIjE0cHhcIn0sXCJjMXNzXCI6e1wiZm9udC1mYW1pbHlcIjpcImF2ZXJ0YSBsaWdodFwiLFwiZm9udC1zaXplXCI6XCIxMHB4XCJ9LFwiYzFzYlwiOntcImZvbnQtZmFtaWx5XCI6XCJhdmVydGEgYm9sZFwiLFwiZm9udC1zaXplXCI6XCIxNHB4XCJ9LFwiYzJcIjp7XCJmb250LWZhbWlseVwiOlwiYXZlcnRhIGJvbGRcIixcImZvbnQtc2l6ZVwiOlwiMjhweFwifSxcImMzXCI6e1wiZm9udC1mYW1pbHlcIjpcImF2ZXJ0YSBib2xkXCIsXCJmb250LXNpemVcIjpcIjE0cHhcIn0sXCJjM3NcIjp7XCJmb250LWZhbWlseVwiOlwiYXZlcnRhIGJvbGRcIixcImZvbnQtc2l6ZVwiOlwiMTFweFwifSxcImM0XCI6e1wiZm9udC1mYW1pbHlcIjpcImF2ZXJ0YSBib2xkXCIsXCJmb250LXNpemVcIjpcIjIwcHhcIn0sXCJjNVwiOntcImZvbnQtZmFtaWx5XCI6XCJhdmVydGEgYm9sZFwiLFwiZm9udC1zaXplXCI6XCIxOHB4XCJ9LFwiYzZcIjp7XCJmb250LWZhbWlseVwiOlwiYXF1aWxvbmUgcmVndWxhclwiLFwiZm9udC1zaXplXCI6XCIxNnB4XCJ9fSxcIm1ldGFcIjp7XCJ1cmxcIjpcImh0dHBzOi8vZnVsbC1zdW4uY29tL1wiLFwidGl0bGVcIjpcIkZ1bGwgU3VuXCIsXCJkZXNjcmlwdGlvblwiOlwiUHJlbWl1bSBTdW5ncm93biBHb29kbmVzc1wiLFwia2V5d29yZHNcIjpcImZ1bGwgc3VuLCBjYW5uYWJpcywgY2FsaWZvcm5pYVwiLFwidHJhY2tpbmdfaWRcIjpcIlVBLTkzMjM0NjA3LTFcIixcInNoYXJlXCI6XCJpbWFnZXMvc2hhcmUucG5nXCIsXCJyZXBvXCI6XCJodHRwczovL2dpdGh1Yi5jb20vYWNpZGphenovZnVsbHN1blwiLFwibWFwX2FwaV9rZXlcIjpcIkFJemFTeUFJcTg0cGppNG92dW1BTlhYb2xNcWtHd1FYOGtNMW1LY1wiLFwiZW1haWxcIjpcImluZm9AZnVsbC1zdW4uY29tXCIsXCJpbnN0YWdyYW1cIjpcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZnVsbHN1bl8vXCIsXCJ0d2l0dGVyXCI6XCJodHRwczovL3R3aXR0ZXIuY29tL0Z1bGxTdW4yXCIsXCJmYWNlYm9va1wiOlwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0Z1bGwtU3VuLTY0ODk1MjI3MTk3MTY4NS9cIn0sXCJwcm9kdWN0c1wiOlt7XCJuYW1lXCI6XCJ2YXBlIHBlbiBzZXRcIixcInRpdGxlXCI6XCJDYW5uYWJpcyBPaWwgVmFwb3JpemF0aW9uIFNldFwiLFwiZGVzY3JpcHRpb25cIjpbXCJEZXNpZ25lZCBmb3Igb24tdGhlLWdvIGVuam95bWVudCwgdGhpcyBwcmVtaXVtIHZhcGUgc2V0IGluY2x1ZGVzIG91ciBTaW5nbGUgT3JpZ2luIGNhbm5hYmlzIG9pbC4gVXNlIHRocm91Z2hvdXQgdGhlIGRheSB0byBpbmNpdGUgY3JlYXRpdml0eSwgY2FsbSB0aGUgbWluZCBvciBkZWVwZW4gcmVsYXhhdGlvbiBsZXZlbHMuXCIsXCJTYXZlIHlvdXJzZWxmIHRpbWUgYW5kIGVmZm9ydCwgdGhpcyBvbmUgY2FydHJpZGdlIGNhbiBiZSB1c2VkIGZvciBlbmRsZXNzIG9jY2FzaW9ucy4gVGhlIHBlcmZlY3QgZG9zZSBvZiBnb29kbmVzcyBhbnl0aW1lIHlvdSBuZWVkIGl0IOKAlCBzdW51cCB0byBzdW5kb3duLlwiLFwiSW5jbHVkZXMgYmF0dGVyeSwgNTAwbWcgY2FydHJpZGdlIGFuZCBjaGFyZ2VyLiAgU29sdmVudCBGcmVlLiBQcm9kdWN0IHRlc3RlZCBhbmQgaGVsZCAgdG8gdGhlIGhpZ2hlc3Qgc3RhbmRhcmRzIGZvciBwdXJpdHkgYW5kIGNvbnNpc3RlbnQgVEhDIHBvdGVuY3kuXCIsXCI8aT5FeHBlcmllbmNlOiBBIGNsZWFyLWhlYWRlZCwgZm9jdXNlZCBoaWdoIHBlcmZlY3QgZm9yIGRheXRpbWUgYW5kIG5pZ2h0dGltZSB1c2UuPC9pPlwiXSxcInRodW1iXCI6XCJwZW5fc2V0X3RodW1iLmpwZ1wiLFwiaW1hZ2VcIjpcInBlbl9zZXQuanBnXCIsXCJkZXRhaWxcIjpbe1wibGVmdFwiOlwiVEhDXCIsXCJyaWdodFwiOlwiPjg1JVwifSx7XCJsZWZ0XCI6XCJTVFJBSU5cIixcInJpZ2h0XCI6XCJIeWJyaWRcIn0se1wibGVmdFwiOlwiUFJPRFVDVCBPUklHSU5cIixcInJpZ2h0XCI6XCJIdW1ib2xkdCBDb3VudHksIENBXCJ9XX0se1wibmFtZVwiOlwicmlzZVwiLFwidGl0bGVcIjpcIlNvbHZlbnQtRnJlZSBTaW5nbGUgT3JpZ2luIENhcnRyaWRnZSBSZWZpbGxcIixcImRlc2NyaXB0aW9uXCI6W1wiTW9ybmluZ3MganVzdCBnb3QgYnJpZ2h0ZXIuIE91ciBSaXNlLCBhbGwtbmF0dXJhbCwgc2luZ2xlIG9yaWdpbiBvaWwgY2FydHJpZGdlcyBhcmUgYXZhaWxhYmxlIGluIDQgZGlmZmVyZW50IHRlcnBlbmUgZW5yaWNoZWQgZmxhdm9yczogRGFuayBCZXJyeSwgRW5saWdodGVu4oCdbWludOKAnSwgVHJvcGlDYWxpIGFuZCBOYXR1cmFsLlwiLFwiPGk+U2VsZWN0IGEgdG9uZSB0byBlbmhhbmNlIHlvdXIgZGF5OjwvaT5cIl0sXCJ0aHVtYlwiOlwicmlzZV90aHVtYi5qcGdcIixcImltYWdlXCI6XCJyaXNlLmpwZ1wiLFwiZmxhdm9yc1wiOlt7XCJuYW1lXCI6XCJEYW5rIEJlcnJ5XCIsXCJkZXNjXCI6W1wiSW1hZ2luZSB3YWtpbmcgdXAgZmVlbGluZyBjb21wbGV0ZWx5IHJlZnJlc2hlZCBhbmQgcmVhZHkgdG8gY29ucXVlciB0aGUgZGF5LlwiLFwiRmVlbDogQ3JlYXRpdmUsIGFsZXJ0LCBhbmQgaW5zcGlyZWRcIl19LHtcIm5hbWVcIjpcIkVubGlnaHRlbuKAnW1pbnTigJ1cIixcImRlc2NcIjpbXCJUbyBZb2dhIG9yIG5vdCB0byBZb2dhPyBXaGV0aGVyIHlvdSBzd2VhdCB0aHJvdWdoIGl0IG9yIHNsZXB0IHRocm91Z2ggaXQsIHdlIGdvdCB5b3UgY292ZXJlZC5cIixcIkZlZWw6IE1pbmRmdWwsIGZvY3VzZWQsIGFuZCBjYWxtXCJdfSx7XCJuYW1lXCI6XCJUcm9waUNhbGlcIixcImRlc2NcIjpbXCJZb3UgaG9wcGVkIG9uIGEgcGxhbmUgYW5kIGp1c3QgdG91Y2hlZCBkb3duIG9uIGEgdHJvcGljYWwgb2FzaXMuIFdlbGNvbWUgdG8gaXNsYW5kIGxpdmluZywgb3BlcmF0aW9uIHVud2luZC5cIixcIkZlZWw6IEhhcHB5LCByZWxheGVkLCBhbmQgY2FyZWZyZWVcIl19LHtcIm5hbWVcIjpcIk5hdHVyYWxcIixcImRlc2NcIjpbXCJHcmVlbiBzbW9vdGhpZWQgZm9yIGJyZWFrZmFzdCwgYXRlIHNhbGFkIGZvciBsdW5jaCwgcG93ZXIgY3ljbGVkIGFmdGVyIHdvcmsg4oCUIHRoYXQgd2FzIHRoZSBpZGVhIGFueXdheXMuXCIsXCJGZWVsOiBDbGVhci1oZWFkZWQsIGVuZXJnaXplZCwgYW5kIHJlZnJlc2hlZFwiXX1dLFwiZGV0YWlsXCI6W3tcImxlZnRcIjpcIlRIQ1wiLFwicmlnaHRcIjpcIj44NSVcIn0se1wibGVmdFwiOlwiU1RSQUlOXCIsXCJyaWdodFwiOlwiSHlicmlkXCJ9LHtcImxlZnRcIjpcIlBST0RVQ1QgT1JJR0lOXCIsXCJyaWdodFwiOlwiSHVtYm9sZHQgQ291bnR5LCBDQVwifV19LHtcIm5hbWVcIjpcInNoaW5lXCIsXCJ0aXRsZVwiOlwiQ2xlYXIgQ2FubmFiaXMgQ29uY2VudHJhdGVcIixcImRlc2NyaXB0aW9uXCI6W1wiU2hpbmUgc3Ryb25nZXIgYSBsaXR0bGUgbG9uZ2VyIHdpdGggb3VyIDEwMCUgc29sdmVudC1mcmVlLCBjbGVhciBjYW5uYWJpcyBjb25jZW50cmF0ZS4gV2UgdXNlIGEgcHJvcHJpZXRhcnkgZXh0cmFjdGlvbiBtZXRob2QgdG8gZGlzdGlsbCBhIGNsZWFuLCBjbGVhciBvaWwgZnJvbSBvdXIgSGlnaC1EZWZpbml0aW9uLCBTaW5nbGUgT3JpZ2luIE9HIEt1c2guIEFuIGluZGljYS1sZWFuaW5nIGh5YnJpZCwgb3VyIG9pbCBpcyB0b3RhbGx5IHB1cmUgYW5kIHRvdGFsbHkgcG90ZW50LlwiLFwiT3VyIGNvbmNlbnRyYXRlcyBjYW4gYmUgdXNlZCBpbiBsb2FkYWJsZSB2YXBlIHBlbnMsIG9pbCByaWdzLCBvciBzbWVhcmVkIG9udG8gam9pbnRzIGZvciBhIGxpdHRsZSBleHRyYSBzdHJlbmd0aC5cIixcIlByb2R1Y3QgdGVzdGVkIGFuZCBoZWxkICB0byB0aGUgaGlnaGVzdCBzdGFuZGFyZHMgZm9yIHB1cml0eSBhbmQgY29uc2lzdGVudCBUSEMgcG90ZW5jeS5cIixcIjxpPkV4cGVyaWVuY2U6IEEgYmFsYW5jZWQgYm9keSBhbmQgaGVhZCBoaWdoLiBNZWxsb3cgJiByZWxheGVkLjwvaT5cIl0sXCJ0aHVtYlwiOlwic2hpbmVfdGh1bWIuanBnXCIsXCJpbWFnZVwiOlwic2hpbmUuanBnXCIsXCJkZXRhaWxcIjpbe1wibGVmdFwiOlwiVEhDXCIsXCJyaWdodFwiOlwiPjg1JVwifSx7XCJsZWZ0XCI6XCJTVFJBSU5cIixcInJpZ2h0XCI6XCJIeWJyaWRcIn0se1wibGVmdFwiOlwiUFJPRFVDVCBPUklHSU5cIixcInJpZ2h0XCI6XCJIdW1ib2xkdCBDb3VudHksIENBXCJ9XX0se1wibmFtZVwiOlwiZmxvd2Vyc1wiLFwidGl0bGVcIjpcIkZ1bGwgQmxvb21zXCIsXCJkZXNjcmlwdGlvblwiOltcIk5hdHVyYWxseSBncm93biBhbmQgaGFydmVzdGVkIHVuZGVyIEh1bWJvbGR0IENvdW50eSBzdW5zaGluZSwgb3VyIGZsb3dlcnMgYXJlIG1ldGljdWxvdXNseSBtb25pdG9yZWQgYW5kIGhhbmRsZWQgd2l0aCB0aGUgdXRtb3N0IGNhcmUgdG8gZW5zdXJlIHByZW1pdW0gcXVhbGl0eS5cIixcIkFzIG5hdGl2ZSBIdW1ib2xkdCBncm93ZXJzLCB3ZSBoYXZlIGEgcHVsc2Ugb24gd2hhdOKAmXMgaW4gZGVtYW5kIHRvIG1ha2Ugc3VyZSB3ZSBwcm92aWRlIHRoZSBuZXdlc3QgYW5kIG1vc3QgZXhjaXRpbmcgc3RyYWlucy5cIixcIkFsbCBvZiBvdXIgZmxvd2VycyBhcmUgbGFiLXRlc3RlZCB0ZXN0ZWQgYW5kIGhlbGQgdG8gdGhlIGhpZ2hlc3Qgc3RhbmRhcmRzIGZvciBwdXJpdHkgYW5kIGNvbnNpc3RlbnQgVEhDIHBvdGVuY3kuXCJdLFwidGh1bWJcIjpcImZsb3dlcnNfdGh1bWIuanBnXCIsXCJpbWFnZVwiOlwiZmxvd2Vycy5qcGdcIixcImZsYXZvcnNcIjpbe1wibmFtZVwiOlwiSGlnaC1EZWZpbml0aW9uIE9HIEt1c2hcIixcInRhZ1wiOlwiaGRcIixcInRoY1wiOlwiMjYlXCIsXCJkZXNjXCI6W1wiT25lIG9mIHRoZSBtb3N0IGxlZ2VuZGFyeSBjYW5uYWJpcyBzdHJhaW5zLCBPRyBLdXNoIGlzIGEgc3Ryb25nLCBJbmRpY2EtbGVhbmluZyBoeWJyaWQgcmVub3duZWQgZm9yIGl0cyBwb3dlcmZ1bCBwb3RlbmN5LCBtZWRpY2luYWwgcXVhbGl0aWVzIGFuZCB1bmlxdWUgdGFzdGUuIFRoZSBzdHJhaW4gc21lbGxzIGFuZCB0YXN0ZXMgbGlrZSBzd2VldCBsZW1vbnMgd2l0aCBhIGhpbnQgb2Ygd29vZHkgZWFydGhpbmVzcy4gV2hhdCBtYWtlcyBvdXJzIEhpZ2gtRGVmaW5pdGlvbj8gVGhhdOKAmXMgb3VyIGJlc3Qga2VwdCBzZWNyZXQuXCJdfSx7XCJuYW1lXCI6XCJTdW5zZXQgU2hlcmJlcnRcIixcInRhZ1wiOlwic2hlcmJlcnRcIixcInRoY1wiOlwiMjQtMjYlXCIsXCJkZXNjXCI6W1wiQW4gSW5kaWNhLWRvbWluYW50IGh5YnJpZCwgdGhpcyBpcyBhIHBvd2VyZnVsIGNyb3NzIGJldHdlZW4gdGhlIEdpcmwgU2NvdXQgQ29va2llcyBhbmQgUGluayBQYW50aWVzIHN0cmFpbnMuIEtub3duIGZvciBpdHMgdXBsaWZ0aW5nIGpvbHQgb2YgY2VyZWJyYWwgZW5lcmd5LCBTdW5zZXQgU2hlcmJldCB0YXN0ZXMgbGlrZSBzd2VldCBjaXRydXMgYW5kIGhvbmV5IHdpdGggYW4gZWFydGh5IGFmdGVydGFzdGUuXCJdfSx7XCJuYW1lXCI6XCJTb3VyIFRhbmdpZVwiLFwidGFnXCI6XCJzb3VyXCIsXCJ0aGNcIjpcIjI0JVwiLFwiZGVzY1wiOltcIkFuIDgwJSBTYXRpdmEtZG9taW5hbnQgY3Jvc3MgYmV0d2VlbiBFYXN0IENvYXN0IFNvdXIgRGllc2VsIGFuZCBUYW5naWUsIHRoaXMgc3RyYWluIGlzIGtub3duIGZvciBpdHMgZXh0cmVtZSwgbW91dGh3YXRlcmluZyBmbGF2b3IuIFN0cm9uZyBjaXRydXMgbm90ZXMgYXJlIG1ldCB3aXRoIGFuIGVhcnRoeSBkaWVzZWwgYWZ0ZXJ0YXN0ZS4gQSB3ZWxsLWJhbGFuY2VkIHN0cmFpbiBwZXJmZWN0IGZvciBmdWxsIGJvZHkgcmVsYXhhdGlvbi5cIl19LHtcIm5hbWVcIjpcIkJsYWNrIExpbWUgUmVzZXJ2ZVwiLFwidGFnXCI6XCJsaW1lXCIsXCJ0aGNcIjpcIjI0LTI2JVwiLFwiZGVzY1wiOltcIkEgYm91dGlxdWUsIEluZGljYSBzdHJhaW4gd2l0aCBhIHJlcHV0YWJsZSBFbWVyYWxkIFRyaWFuZ2xlIGhlcml0YWdlLiBBIHBvd2VyZnVsIGNyb3NzIGJldHdlZW4gTm9ydGhlcm4gTGlnaHRzLCBQdXJwbGUgS3VzaCBhbmQgQ2hlbWRhd2cgU3BlY2lhbCBSZXNlcnZlIHN0cmFpbnMuIFJlZnJlc2hpbmcgYW5kIGV4dWJlcmFudCB3aXRoIGEgcHJvbm91bmNlZCBtaXggb2Ygc3dlZXQgY2l0cnVzLCBwZXBwZXJ5IHNwaWNlIGFuZCBqdWljeSBsaW1lLlwiXX1dLFwiZGV0YWlsXCI6W3tcImxlZnRcIjpcIlRIQ1wiLFwicmlnaHRcIjpcIjI0LTI2JVwifSx7XCJsZWZ0XCI6XCJTVFJBSU5cIixcInJpZ2h0XCI6XCJIeWJyaWRcIn0se1wibGVmdFwiOlwiUFJPRFVDVCBPUklHSU5cIixcInJpZ2h0XCI6XCJIdW1ib2xkdCBDb3VudHksIENBXCJ9XX0se1wibmFtZVwiOlwiQW52aWwgVGVlXCIsXCJ0aXRsZVwiOlwiQW52aWwgVGVlIFNoaXJ0XCIsXCJkZXNjcmlwdGlvblwiOltcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1clwiXSxcInRodW1iXCI6XCJhbnZpbF90ZWVfdGh1bWIuanBnXCIsXCJpbWFnZVwiOlwiYW52aWxfdGVlX2dyZXkuanBnXCIsXCJkZXRhaWxcIjpbe1wibGVmdFwiOlwiU2l6ZXNcIixcInJpZ2h0XCI6XCJTLCBNLCBMLCBYTFwifSx7XCJsZWZ0XCI6XCJjb2xvcnNcIixcInJpZ2h0XCI6XCJncmVlbiwgYmxhY2ssIGJsdWVcIn1dLFwidmVyc2lvbnNcIjpbe1wiY29sb3JcIjpcImdyZXlcIixcImltYWdlXCI6XCJhbnZpbF90ZWVfZ3JleS5qcGdcIn0se1wiY29sb3JcIjpcImJsYWNrXCIsXCJpbWFnZVwiOlwiYW52aWxfdGVlX2JsYWNrLmpwZ1wifV19LHtcIm5hbWVcIjpcIkNyb3BwZWQgVGVlXCIsXCJ0aXRsZVwiOlwiQ3JvcHBlZCBUZWUgU2hpcnRcIixcImRlc2NyaXB0aW9uXCI6W1wiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyXCJdLFwidGh1bWJcIjpcImNyb3BwZWRfdGVlX3RodW1iLmpwZ1wiLFwiaW1hZ2VcIjpcImNyb3BwZWRfdGVlLmpwZ1wiLFwiZGV0YWlsXCI6W3tcImxlZnRcIjpcIlNpemVzXCIsXCJyaWdodFwiOlwiUywgTSwgTCwgWExcIn0se1wibGVmdFwiOlwiY29sb3JzXCIsXCJyaWdodFwiOlwiZ3JlZW4sIGJsYWNrLCBibHVlXCJ9XX0se1wibmFtZVwiOlwiQmFnXCIsXCJ0aXRsZVwiOlwiRHJhd3N0cmluZyBCYWdcIixcImRlc2NyaXB0aW9uXCI6W1wiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyXCJdLFwidGh1bWJcIjpcImJhZ190aHVtYi5qcGdcIixcImltYWdlXCI6XCJiYWcuanBnXCIsXCJkZXRhaWxcIjpbe1wibGVmdFwiOlwiU2l6ZXNcIixcInJpZ2h0XCI6XCJTLCBNLCBMLCBYTFwifSx7XCJsZWZ0XCI6XCJjb2xvcnNcIixcInJpZ2h0XCI6XCJncmVlbiwgYmxhY2ssIGJsdWVcIn1dfSx7XCJuYW1lXCI6XCJoYXRcIixcInRpdGxlXCI6XCJCbHVlIEhhdFwiLFwiZGVzY3JpcHRpb25cIjpbXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXJcIl0sXCJ0aHVtYlwiOlwiaGF0X3RodW1iLmpwZ1wiLFwiaW1hZ2VcIjpcImhhdC5qcGdcIixcImRldGFpbFwiOlt7XCJsZWZ0XCI6XCJTaXplc1wiLFwicmlnaHRcIjpcIlMsIE0sIEwsIFhMXCJ9LHtcImxlZnRcIjpcImNvbG9yc1wiLFwicmlnaHRcIjpcImdyZWVuLCBibGFjaywgYmx1ZVwifV19LHtcIm5hbWVcIjpcIkxlZ2dpbmdzXCIsXCJ0aXRsZVwiOlwiQmxhY2sgTGVnZ2luZ3NcIixcImRlc2NyaXB0aW9uXCI6W1wiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyXCJdLFwidGh1bWJcIjpcImxlZ2dpbmdzX3RodW1iLmpwZ1wiLFwiaW1hZ2VcIjpcImxlZ2dpbmdzLmpwZ1wiLFwiZGV0YWlsXCI6W3tcImxlZnRcIjpcIlNpemVzXCIsXCJyaWdodFwiOlwiUywgTSwgTCwgWExcIn0se1wibGVmdFwiOlwiY29sb3JzXCIsXCJyaWdodFwiOlwiZ3JlZW4sIGJsYWNrLCBibHVlXCJ9XX0se1wibmFtZVwiOlwiUmFjZXJiYWNrXCIsXCJlY3dpZFwiOjg4MzE2NzIzLFwidGl0bGVcIjpcIkNhbGlmb3JuaWEgQ29uc2Npb3VzXCIsXCJkZXNjcmlwdGlvblwiOltcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1clwiXSxcInRodW1iXCI6XCJyYWNlcmJhY2tfdGh1bWIuanBnXCIsXCJpbWFnZVwiOlwicmFjZXJiYWNrX2Zyb250LmpwZ1wiLFwiZGV0YWlsXCI6W3tcImxlZnRcIjpcIlNpemVzXCIsXCJyaWdodFwiOlwiUywgTSwgTCwgWExcIn0se1wibGVmdFwiOlwiY29sb3JzXCIsXCJyaWdodFwiOlwiZ3JlZW4sIGJsYWNrLCBibHVlXCJ9XSxcInZlcnNpb25zXCI6W3tcImNvbG9yXCI6XCJncmV5XCIsXCJpbWFnZVwiOlwicmFjZXJiYWNrX2Zyb250LmpwZ1wifSx7XCJjb2xvclwiOlwiYmxhY2tcIixcImltYWdlXCI6XCJyYWNlcmJhY2tfYmFjay5qcGdcIn1dfV0sXCJ2ZW5kb3JzXCI6W3tcIm5hbWVcIjpcIkh1bWJvbGR0IFBhdGllbnQgUmVzb3VyY2UgQ2VudGVyXCIsXCJwbGFjZUlkXCI6XCJDaElKVzNzUnRBVlgwVlFSN3E3X2hERGNuQXNcIixcImxpbmtcIjpcImh0dHA6Ly9ocHJjYXJjYXRhLmNvbS9cIixcImltYWdlXCI6XCJocHJjLnBuZ1wifSx7XCJuYW1lXCI6XCJCbHVtIE9ha1wiLFwicGxhY2VJZFwiOlwiQ2hJSk5VaS1BcXlBajRBUk9DUGl0V3h0cHNNXCIsXCJsaW5rXCI6XCJodHRwOi8vYmx1bW9hay5jb20vXCIsXCJpbWFnZVwiOlwiYmx1bS5qcGdcIn1dLFwiY29weVwiOntcImFib3V0XCI6e1widGl0bGVcIjpcImFib3V0IHVzXCIsXCJjb3B5c1wiOltcIldlIGFyZSB0aGUgc21hbGxlc3QgZ3JhaW5zIG9mIHJpY2gsIGhlYWx0aHkgc29pbC4gV2UgYXJlIHRoZSBveHlnZW4gdGhpY2sgYWlyIHByb3ZpZGVkIGJ5IHRoZSBmb3Jlc3RzIG9mIEh1bWJvbGR0IENvdW50eS4gV2UgYXJlIHRoZSBjYXJpbmcgaGFuZHMgdGhhdCB0dXJuIGhpZ2ggcXVhbGl0eSwgY2hlbWljYWwtZnJlZSBjYW5uYWJpcyBpbnRvIGJlYXV0aWZ1bGx5IGNyYWZ0ZWQgY29uY2VudHJhdGVzLCBhbGxvd2luZyB5b3VyIGxpZmUgdG8gYmUgYSBsaXR0bGUgZWFzaWVyLlwiLFwiTGFzdGx5LCB3ZSBhcmUgdGhlIHJheXMgb2Ygc3Vuc2hpbmUgdGhhdCBzcGlsbCBkb3duIHVwb24gdGhlIG1vdW50YWludG9wIOKAlCB0aGUgYnJpZ2h0IGFuZCBtb3N0IHBvd2VyZnVsIHNvdXJjZSB0aGF0IGVucmljaGVzIGFsbCBvZiBvdXIgY2FubmFiaXMgYXQgRnVsbCBTdW4uXCJdfSxcImNvbnRhY3RcIjp7XCJ0aXRsZVwiOlwiY29udGFjdCB1c1wiLFwic3VidGl0bGVcIjpcIldhbnQgbW9yZSBzdW5ncm93biBnb29kbmVzcz9cIn0sXCJwcm9jZXNzXCI6e1widGl0bGVcIjpcIm91ciBwcm9jZXNzXCIsXCJjb3B5c1wiOltcIkFsbCBvZiBvdXIgcHJvZHVjdHMgY29uc2lzdCBvZiBTaW5nbGUgT3JpZ2luLCBIaWdoLURlZmluaXRpb24gT0cgS3VzaCBjYW5uYWJpcy4gV2hpbGUgb3RoZXJzIGNhbGwgdGhpcyB0aGVpciDigJxSZXNlcnZl4oCdIHdlIGNhbGwgdGhpcyBvdXIgXFxcIkFsbCB0aGUgVGltZeKAnS4gV2UgaGFuZCBzZWxlY3Qgb3VyIHNtYWxsIGdyb3VwIG9mIHByb2R1Y2VycyBmb3IgdGhlaXIgY29uc2lzdGVudCBjb21taXRtZW50IHRvIHF1YWxpdHkgYW5kIGV4Y2VsbGVuY2UuIFRoZXkgd29yayB0aGVpciBtYWdpYyB3aXRoIG91ciBwcm9wcmlldGFyeSBzdHJhaW4gd2hpY2ggYWxsb3dzIHVzIHRvIG1haW50YWluIHF1YWxpdHksIGNvbnNpc3RlbmN5LCA8aT5hbmQ8L2k+IHF1YW50aXR5LiBSYWlzZWQgb3V0IG9mIHRoZSBtb3N0IHJlcHV0YWJsZSBncm93aW5nIHJlZ2lvbiBpbiB0aGUgd29ybGQsIG91ciBIdW1ib2xkdCBDb3VudHkgZmFybXMgc3RheXMgcm9vdGVkIGluIGNvbnNjaW91c2x5IGdyb3dpbmcgdGhlIGJlc3QgYW5kIGJyaWdodGVzdCBzdW5ncm93biBjYW5uYWJpcy5cIixcIkV4dHJhY3Rpbmcgb2lsIGZyb20gcGxhbnRzIGhhcyBiZWVuIHdpZGVseSB1c2VkIGFjcm9zcyBpbmR1c3RyaWVzIGZvciBjZW50dXJpZXMuIEZpbmRpbmcgdGhlIHJpZ2h0IGNhbm5hYmlzIGV4dHJhY3Rpb24gcHJvY2VzcyBoYXMgdGFrZW4geWVhcnMsIGJ1dCB3ZSBoYXZlIGRlc2lnbmVkIGFuZCBwZXJmZWN0ZWQgYSBtb2RlbCB0aGF0IG1ha2VzIG91ciBwcm9kdWN0cyBzdXBlcmlvci4gT3VyIHByb3ByaWV0YXJ5IGV4dHJhY3QgbWV0aG9kIGlzIGRvbmUgYXQgb3VyIHN0YXRlIG9mIHRoZSBhcnQgZmFjaWxpdHkgaW4gSHVtYm9sZHQgQ291bnR5LiBUaGUgcmVzdWx0IGlzIGFuIHVsdHJhLXJlZmluZWQgb2lsIHRoYXQgaXMgbGFiIHRlc3RlZCBhbmQgMTAwJSBzb2x2ZW50LWZyZWUsIGV2ZXJ5IHNpbmdsZSB0aW1lLiBZb3VyIHdlbGwtYmVpbmcgaXMgb3VyIHRvcCBwcmlvcml0eS5cIl19fX07IiwiXG5EZWxheSA9XG4gIGhlaWdodDogZmFsc2VcbiAgd2luOiBmYWxzZVxuICBsb2dvOiBmYWxzZVxuICBoZWFkZXI6IGZhbHNlXG4gIHBlYWNoOiBmYWxzZVxuICBmaWxsZWQ6IGZhbHNlXG5cbiAgaTogLT5cblxuICAgIEB3aW4gPSAkIHdpbmRvd1xuICAgIEBoZWlnaHQgPSBAd2luLmhlaWdodCgpXG4gICAgQGxvZ28gPSAkICcuc2VjdGlvbi5zZWN0aW9uX3RvcCA+IC5taWRkbGUnXG4gICAgQGhlYWRlciA9ICQgJ2hlYWRlcidcbiAgICBAcGVhY2ggPSBfLmhleDJyZ2IgY29uZmlnLmNvbG9yLnBlYWNoMVxuICAgICQod2luZG93KS5zY3JvbGwgQGNoZWNrU2Nyb2xsXG5cbiAgY2hlY2tTY3JvbGw6IC0+XG5cbiAgICBwZXJjID0gKERlbGF5Lndpbi5zY3JvbGxUb3AoKSAqIDEwMCAvIERlbGF5LmhlaWdodCkudG9GaXhlZCAyXG5cbiAgICBpZiBwZXJjID4gMTAwXG4gICAgICBpZiBEZWxheS5maWxsZWQgaXMgZmFsc2VcbiAgICAgICAgJCgnaGVhZGVyJykuYWRkQ2xhc3MgJ2ZpbGxlZCdcbiAgICAgICAgRGVsYXkuZmlsbGVkID0gdHJ1ZVxuICAgICAgcmV0dXJuIHRydWVcbiAgICBlbHNlXG4gICAgICBpZiBEZWxheS5maWxsZWQgaXMgdHJ1ZVxuICAgICAgICAkKCdoZWFkZXInKS5yZW1vdmVDbGFzcyAnZmlsbGVkJ1xuICAgICAgICBEZWxheS5maWxsZWQgPSBmYWxzZVxuXG4gICAgb3BhY2l0eSA9IChwZXJjLzEwMCkudG9GaXhlZCgxKSAvIDJcblxuICAgIGlmIEluZGV4Lm9mZnNldCBpc250IDBcbiAgICAgICNEZWxheS5sb2dvLmNzcygndHJhbnNmb3JtJywgXCJ0cmFuc2xhdGUoMHB4LCAje3BlcmMqN31weClcIilcbiAgICAgIERlbGF5LmhlYWRlci5jc3MoJ2JhY2tncm91bmQtY29sb3InLCBcInJnYmEoI3tEZWxheS5wZWFjaC5yfSwje0RlbGF5LnBlYWNoLmd9LCN7RGVsYXkucGVhY2guYn0sI3tvcGFjaXR5fSlcIilcblxuIiwiRm9sZCA9XG5cbiAgaW5WaWV3cG9ydDogKGVsKSAtPlxuXG4gICAgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgXG4gICAgcmV0dXJuKFxuICAgICAgKHJlY3QudG9wID49IDAgfHwgcmVjdC5ib3R0b20gPj0gMCkgJiZcbiAgICAgIChyZWN0LnRvcCA8PSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0KVxuICAgIClcblxuXG4gIHZpZXdzOiAoZWxzLCByZXN1bHQpIC0+XG5cbiAgICB2aWV3cyA9IHt9XG5cbiAgICBlbHMuZWFjaCAoaSwgZWwpIC0+XG5cbiAgICAgIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgbmFtZSA9ICQoZWwpLmF0dHIgJ2lkJ1xuXG4gICAgICByZXR1cm4gdHJ1ZSBpZiBuYW1lIGlzIHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIChyZWN0LnRvcCA+PSAwIHx8IHJlY3QuYm90dG9tID49IDApICYmXG4gICAgICAgIChyZWN0LnRvcCA8PSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0KVxuICAgICAgKVxuICAgICAgICBtaWRkbGUgPSB3aW5kb3cuaW5uZXJIZWlnaHQvMlxuICAgICAgICBpZiByZWN0LnRvcCA8IG1pZGRsZSAmJiByZWN0LmJvdHRvbSA+IG1pZGRsZVxuICAgICAgICAgIHJlc3VsdChuYW1lKVxuIiwiR2F0ZSA9XG5cbiAgaTogLT5cblxuICAgIEBoYW5kbGVycygpXG5cbiAgICAjXy5vZmYoJy5nYXRlJykgaWYgIENvb2tpZXMuZ2V0KCdnYXRlJykgaXNudCB1bmRlZmluZWRcblxuICBoYW5kbGVyczogLT5cblxuICAgICQoJy5nYXRlID4gLmdyYWRpZW50ID4gLm1pZGRsZSA+IC5idXR0b25zID4gLmJ1dHRvbicpLm9uICdjbGljaycsIEB5ZXNub1xuXG4gIHllc25vOiAtPlxuXG4gICAgcmV0dXJuIGxvY2F0aW9uLmhyZWYgPSAnaHR0cDovL3d3dy5idWlsZGFiZWFyLmNvbS8nIGlmICQodGhpcykudGV4dCgpIGlzICdOTydcbiAgICBpZiAkKHRoaXMpLnRleHQoKSBpcyAnWUVTJ1xuICAgICAgXy5vZmYgJy5nYXRlJ1xuICAgICAgQ29va2llcy5zZXQgJ2dhdGUnLCB0cnVlLCBleHBpcmVzOiAxXG5cbiIsIkluZGV4ID1cbiAgb2Zmc2V0OiAtODZcblxuICBpOiAtPlxuXG4gICAgR2F0ZS5pKClcblxuICAgIERlbGF5LmkoKVxuICAgIFByb2R1Y3QuaSgpXG5cbiAgICBpZiAkKHdpbmRvdykud2lkdGgoKSA8IDEwMDBcbiAgICAgIEBvZmZzZXQgPSAwXG5cbiAgICBAaGFuZGxlcnMoKVxuXG4gICAgc2V0SW50ZXJ2YWwgSW5kZXgubWVudSwgNTAwXG5cbiAgaGFuZGxlcnM6IC0+XG4gICAgJCgnaGVhZGVyID4gLmJ1cmdlcicpLmNsaWNrIEBidXJnZXJIYW5kbGVyXG4gICAgJCgnaGVhZGVyID4gLmlubmVyID4gLm1lbnUgPiAuaXRlbXMgPiAuaW5uZXIgPiAuaXRlbScpLmNsaWNrIEBtZW51SGFuZGxlclxuICAgICQoJ2hlYWRlciA+IC5pbm5lciA+IC5sb2dvJykuY2xpY2sgQG1lbnVIYW5kbGVyXG5cbiAgYnVyZ2VySGFuZGxlcjogLT5cbiAgICBfLnN3YXAgJ2hlYWRlciA+IC5idXJnZXInXG4gICAgXy5zd2FwICdoZWFkZXIgPiAuaW5uZXIgPiAubWVudSA+IC5pdGVtcydcblxuICBtZW51SGFuZGxlcjogLT5cbiAgICBfLm9uICdoZWFkZXIgPiAuYnVyZ2VyJ1xuICAgIF8ub2ZmICdoZWFkZXIgPiAuaW5uZXIgPiAubWVudSA+IC5pdGVtcydcbiAgICBJbmRleC5zZWN0aW9uICQodGhpcykuZGF0YSAnaXRlbSdcblxuICBzZWN0aW9uOiAoc2VjdGlvbikgLT5cbiAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAkKCdodG1sLCBib2R5Jykuc2Nyb2xsVG8gXCIjI3tzZWN0aW9ufVwiLFxuICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICAgIG9mZnNldDogSW5kZXgub2Zmc2V0XG4gICAgICBsb2NhdGlvbi5oYXNoID0gc2VjdGlvblxuICAgICwgMTAwXG5cbiAgbWVudTogLT5cblxuICAgIEZvbGQudmlld3MgJCgnLnNlY3Rpb24nKSwgKHJlc3VsdCkgLT5cbiAgICAgIF8ub2ZmICdoZWFkZXIgPiAuaW5uZXIgPiAubWVudSA+IC5pdGVtcyA+IC5pbm5lciA+IC5pdGVtJ1xuICAgICAgXy5vbiBcIi5pdGVtXyN7cmVzdWx0fVwiXG5cbiAgICAgIGlmIHJlc3VsdCBpc250ICdwcm9kdWN0cycgYW5kIFByb2R1Y3QuZGV0YWlscyBpcyB0cnVlXG4gICAgICAgIFByb2R1Y3QuY2xvc2VDbGljaygpXG4iLCJNYXAgPVxuICBtYXA6IGZhbHNlXG4gIHBsYWNlczoge31cblxuICBpOiAtPlxuXG4gICAgQG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLFxuICAgICAgY2VudGVyOiBsYXQ6IDM5LjYwOTI0NzQsIGxuZzogLTEyMy40NDUzNzU1XG4gICAgICB6b29tOiA3XG4gICAgICBzdHlsZXM6IEBzdHlsZXNcbiAgICAgIG9wdGlvbnM6IEBvcHRpb25zXG5cbiAgICBzZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZXNTZXJ2aWNlKEBtYXApXG5cbiAgICBmb3IgdmVuZG9yIGluIGNvbmZpZy52ZW5kb3JzXG4gICAgICBzZXJ2aWNlLmdldERldGFpbHNcbiAgICAgICAgcGxhY2VJZDogdmVuZG9yLnBsYWNlSWRcbiAgICAgICwgKHJlc3VsdCwgc3RhdHVzKSAtPlxuICAgICAgICBNYXAucGxhY2VzW3Jlc3VsdC5wbGFjZV9pZF0gPSByZXN1bHRcbiAgICAgICAgTWFwLm1hcmtlcnMoKSBpZiBfLm9iamMoY29uZmlnLnZlbmRvcnMpIGlzIF8ub2JqYyhNYXAucGxhY2VzKVxuXG5cbiAgICBAaGFuZGxlcnMoKVxuXG4gIGhhbmRsZXJzOiAtPlxuICAgJCgnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlID4gLmNsb3NlJykuY2xpY2sgQHBsYWNlQ2xvc2VIYW5kbGVyXG4gIG1hcmtlcnM6IC0+XG5cbiAgICBtYXJrZXJzID0gW11cblxuICAgIGZvciBpZCwgcGxhY2Ugb2YgQHBsYWNlc1xuXG4gICAgICBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyXG4gICAgICAgIG1hcDogTWFwLm1hcFxuICAgICAgICBwb3NpdGlvbjogcGxhY2UuZ2VvbWV0cnkubG9jYXRpb25cbiAgICAgICAgaWNvbjpcbiAgICAgICAgICB1cmw6ICcvaW1hZ2VzL21hcC9tYXJrZXIucG5nJyxcbiAgICAgICAgICBzY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSg2MCwgNjApXG4gICAgICAgICAgb3JpZ2luOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMCwgMClcbiAgICAgICAgcGxhY2U6XG4gICAgICAgICAgcGxhY2VJZDogcGxhY2UucGxhY2VfaWRcbiAgICAgICAgICBsb2NhdGlvbjogcGxhY2UuZ2VvbWV0cnkubG9jYXRpb25cbiAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyIG1hcmtlciwgJ2NsaWNrJywgTWFwLm1hcmtlckhhbmRsZXJcbiAgICAgIG1hcmtlcnMucHVzaCBtYXJrZXJcblxuICAgIG1hcmtlckNsdXN0ZXIgPSBuZXcgTWFya2VyQ2x1c3RlcmVyIE1hcC5tYXAsIG1hcmtlcnMsXG4gICAgICBpbWFnZVBhdGg6ICdodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9leGFtcGxlcy9tYXJrZXJjbHVzdGVyZXIvbSdcblxuICBtYXJrZXJIYW5kbGVyOiAtPlxuXG4gICBwbGFjZSA9IE1hcC5wbGFjZXNbdGhpcy5wbGFjZS5wbGFjZUlkXVxuXG5cbiAgIGlmIHBsYWNlLnBob3Rvc1xuICAgICQoJy5zZWN0aW9uX2xvY2F0aW9ucyA+IC5wbGFjZSA+IC5pbm5lciA+IC5pbWFnZScpLmF0dHIgJ3NyYycscGxhY2UucGhvdG9zWzBdLmdldFVybCBtYXhXaWR0aDogMjYwLCBtYXhIZWlnaHQ6IDIwMFxuICAgIF8ub24gJy5zZWN0aW9uX2xvY2F0aW9ucyA+IC5wbGFjZSA+IC5pbm5lciA+IC5pbWFnZSdcbiAgIGVsc2VcbiAgICBfLm9mZiAnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlID4gLmlubmVyID4gLmltYWdlJ1xuXG4gICAkKCcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UgPiAuaW5uZXIgPiAubmFtZScpLnRleHQgcGxhY2UubmFtZVxuICAgJCgnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlID4gLmlubmVyID4gLm5hbWUnKS5hdHRyICdocmVmJywgcGxhY2UudXJsXG4gICAkKCcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UgPiAuaW5uZXIgPiAuYWRkcmVzcycpLmh0bWwgcGxhY2UuZm9ybWF0dGVkX2FkZHJlc3NcbiAgICQoJy5zZWN0aW9uX2xvY2F0aW9ucyA+IC5wbGFjZSA+IC5pbm5lciA+IC5waG9uZScpLmh0bWwgcGxhY2UuZm9ybWF0dGVkX3Bob25lX251bWJlclxuXG4gICBfLm9uICcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UnXG5cbiAgIE1hcC5tYXAuc2V0Wm9vbSgxNilcbiAgIE1hcC5tYXAuc2V0Q2VudGVyKHRoaXMuZ2V0UG9zaXRpb24oKSlcblxuICAgY29uc29sZS5sb2cgcGxhY2VcblxuXG4gIHBsYWNlQ2xvc2VIYW5kbGVyOiAtPlxuICAgIF8ub2ZmICcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UnXG4gICAgTWFwLm1hcC5zZXRab29tKDExKVxuICAgIFxuICBvcHRpb25zOlxuICAgIHNjcm9sbHdoZWVsOiBmYWxzZVxuICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZVxuICAgIGZ1bGxzY3JlZW5Db250cm9sOiBmYWxzZVxuXG4gIHN0eWxlczpcbiAgICBbXG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdhZG1pbmlzdHJhdGl2ZSdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2xhYmVscy50ZXh0LmZpbGwnXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICdjb2xvcic6ICcjOWU1ZDA3JyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ2FkbWluaXN0cmF0aXZlLmNvdW50cnknXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdsYWJlbHMudGV4dC5maWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAnY29sb3InOiAnI2YyOTkzNCcgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdhZG1pbmlzdHJhdGl2ZS5sb2NhbGl0eSdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2xhYmVscy50ZXh0LmZpbGwnXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICdjb2xvcic6ICcjOWU1ZDA3JyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ2xhbmRzY2FwZSdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2FsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbIHsgJ2NvbG9yJzogJyNmOGY1ZjInIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAncG9pJ1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnYWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAndmlzaWJpbGl0eSc6ICdvZmYnIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAncm9hZCdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2FsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbXG4gICAgICAgICAgeyAnc2F0dXJhdGlvbic6IC0xMDAgfVxuICAgICAgICAgIHsgJ2xpZ2h0bmVzcyc6IDQ1IH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAncm9hZCdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2dlb21ldHJ5LmZpbGwnXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICdjb2xvcic6ICcjZjI5OTM0JyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3JvYWQuaGlnaHdheSdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2FsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbIHsgJ3Zpc2liaWxpdHknOiAnc2ltcGxpZmllZCcgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdyb2FkLmFydGVyaWFsJ1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnbGFiZWxzLmljb24nXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICd2aXNpYmlsaXR5JzogJ29mZicgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICd0cmFuc2l0J1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnYWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAndmlzaWJpbGl0eSc6ICdvZmYnIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAnd2F0ZXInXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdhbGwnXG4gICAgICAgICdzdHlsZXJzJzogW1xuICAgICAgICAgIHsgJ2NvbG9yJzogJyMwMGFmYWEnIH1cbiAgICAgICAgICB7ICd2aXNpYmlsaXR5JzogJ29uJyB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG5cbiIsIlByb2R1Y3QgPVxuICB0bDogZmFsc2VcbiAgZGV0YWlsczogZmFsc2VcblxuICBpOiAtPlxuICAgIEB0bCA9IG5ldyBUaW1lbGluZU1heCByZXBlYXQ6IDBcblxuICAgIEBoYW5kbGVycygpXG5cbiAgaGFuZGxlcnM6IC0+XG5cbiAgICAkKCcuc2VjdGlvbl9wcm9kdWN0cyA+IC5wcm9kdWN0bGlzdCA+IC5wcm9kdWN0JykuY2xpY2sgQHByb2R1Y3RDbGlja1xuICAgICQoJy5zZWN0aW9uX3Byb2R1Y3RzID4gLmRldGFpbHMgPiAuZGV0YWlsID4gLmNsb3NlJykuY2xpY2sgQGNsb3NlQ2xpY2tcbiAgICAkKCcuc2VjdGlvbl9wcm9kdWN0cyA+IC5kZXRhaWxzID4gLmltYWdlID4gLmlubmVyID4gLnZlcnNpb25zID4gLnZlcnNpb24nKS5jbGljayBAdmVyc2lvbkNsaWNrXG4gICAgJCgnLnNlY3Rpb25fcHJvZHVjdHMgPiAuZGV0YWlscyA+IC5kZXRhaWwgPiAuY29weSA+IC5pbm5lciA+IC5mbGF2b3JzID4gLmZsYXZvciA+IC5uYW1lJykuY2xpY2sgQGZsYXZvclxuXG4gIGZsYXZvcjogLT5cbiAgICBwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpXG4gICAgc3RhdGUgPSBfLnN0YXRlIHBhcmVudFxuICAgIF8ub2ZmICcuZmxhdm9ycyA+IC5mbGF2b3InXG4gICAgaWYgc3RhdGVcbiAgICAgIF8ub2ZmIHBhcmVudFxuICAgIGVsc2VcbiAgICAgIF8ub24gcGFyZW50XG4gICAgICB0ID0gJCh0aGlzKVxuICAgICAgaWYgdC5kYXRhKCd0YWcnKSBpc250IHVuZGVmaW5lZFxuICAgICAgICBfLm9mZiAnLmltYWdlLnRhZydcbiAgICAgICAgXy5vbiBcIi5pbWFnZS50YWcudGFnXyN7dC5kYXRhKCd0YWcnKX1cIlxuICAgICAgICB0aGMgPSB0LmRhdGEoJ3RoYycpXG4gICAgICAgICQoJy5kYXRhOmZpcnN0LWNoaWxkID4gLnJpZ2h0JykudGV4dCB0aGNcblxuICBwcm9kdWN0Q2xpY2s6IC0+XG4gICAgcHJvZHVjdCA9ICQodGhpcykuZGF0YSAncHJvZHVjdCdcbiAgICBfLm9uICcuYmFja2Ryb3AnXG4gICAgXy5vbiBcIltpZD0nZGV0YWlsICN7cHJvZHVjdH0nXVwiXG4gICAgXy5vbiBcIltpZD0naW1hZ2UgI3twcm9kdWN0fSddXCJcbiAgICBQcm9kdWN0LmRldGFpbHMgPSB0cnVlXG4gICAgaWYgSW5kZXgub2Zmc2V0IGlzbnQgMFxuICAgICAgSW5kZXguc2VjdGlvbiAncHJvZHVjdHMnXG5cbiAgICBlbXB0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgJ3N1bkVtcHR5J1xuICAgIGZvciBkaXYgaW4gZW1wdHlcbiAgICAgIHRsID0gbmV3IFRpbWVsaW5lTWF4IHJlcGVhdDogMFxuICAgICAgdGwudG8gZGl2LCAxLjAsIHttb3JwaFNWRzoge3NoYXBlOiAnI3N1bkZpbGxlZCcsIHNoYXBlSW5kZXg6IDN9LCBlYXNlOkV4cG8uZWFzZUluT3V0fVxuXG4gIHZlcnNpb25DbGljazogLT5cbiAgICAkKCcudmVyc2lvbnMgPiAudmVyc2lvbicpLnJlbW92ZUNsYXNzICdhY3RpdmUnXG4gICAgJCh0aGlzKS5hZGRDbGFzcyAnYWN0aXZlJ1xuICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgJ3VybCgvaW1hZ2VzL3Byb2R1Y3RzLycgKyAkKHRoaXMpLmRhdGEoJ2ltYWdlJykpXG5cbiAgY2xvc2VDbGljazogLT5cbiAgICBlbXB0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgJ3N1bkVtcHR5J1xuICAgIGZvciBkaXYgaW4gZW1wdHlcbiAgICAgIHRsID0gbmV3IFRpbWVsaW5lTWF4IHJlcGVhdDogMFxuICAgICAgdGwudG8gZGl2LCAwLjAxLCB7bW9ycGhTVkc6ICcjc3VuRW1wdHknLCBlYXNlOkV4cG8uZWFzZUluT3V0fVxuXG4gICAgXy5vZmYgJy5zZWN0aW9uX3Byb2R1Y3RzID4gLmRldGFpbHMgPiAuZGV0YWlsJ1xuICAgIF8ub2ZmICcuc2VjdGlvbl9wcm9kdWN0cyA+IC5kZXRhaWxzID4gLmltYWdlJ1xuICAgIF8ub2ZmICcuYmFja2Ryb3AnXG4gICAgUHJvZHVjdC5kZXRhaWxzID0gZmFsc2VcbiJdfQ==
