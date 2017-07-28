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
      "name": "anvil tee",
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
      "name": "cropped tee",
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
      "name": "bag",
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
      "name": "leggings",
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
      "name": "racerback",
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
    }, {
      "name": "hoodie",
      "title": "Zip Hoodie",
      "description": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"],
      "thumb": "ziphoodie_thumb.jpg",
      "image": "ziphoodie.jpg",
      "detail": [
        {
          "left": "Sizes",
          "right": "S, M, L, XL"
        }, {
          "left": "colors",
          "right": "green, black, blue"
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjI1Ni5jb2ZmZWUiLCJjb25maWcuY29mZmVlIiwiZGVsYXkuY29mZmVlIiwiZm9sZC5jb2ZmZWUiLCJnYXRlLmNvZmZlZSIsImluZGV4LmNvZmZlZSIsIm1hcC5jb2ZmZWUiLCJwcm9kdWN0LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBLENBQUE7RUFBQTs7QUFBQSxDQUFBLEdBRUU7RUFBQSxDQUFBLEVBQUcsU0FBQTtXQUNELElBQUMsQ0FBQSxPQUFELEdBQVcsV0FBQSxDQUFZLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLElBQWIsQ0FBWixFQUE2QixHQUE3QjtFQURWLENBQUg7RUFHQSxDQUFBLEVBQ0U7SUFBQSxNQUFBLEVBQVEsS0FBUjtJQUNBLE9BQUEsRUFBUyxDQURUO0dBSkY7RUFPQSxJQUFBLEVBQU0sU0FBQyxFQUFELEVBQUssTUFBTCxFQUFtQixHQUFuQjs7TUFBSyxTQUFPOzs7TUFBTyxNQUFJOztJQUUzQixJQUFHLENBQUEsQ0FBQSxFQUFBLFlBQWtCLE1BQWxCLENBQUg7TUFDRSxFQUFBLEdBQUssQ0FBQSxDQUFFLEVBQUYsRUFEUDs7SUFHQSxJQUFHLE1BQUEsS0FBWSxLQUFmO01BQ0UsRUFBRSxDQUFDLFdBQUgsQ0FBZSxNQUFmLEVBREY7O0lBR0EsSUFBRyxHQUFBLEtBQVMsS0FBWjtNQUNFLEVBQUUsQ0FBQyxRQUFILENBQVksR0FBWixFQURGOztBQUdBLFdBQU87RUFYSCxDQVBOO0VBb0JBLEdBQUEsRUFBSyxTQUFDLEVBQUQsRUFBSyxDQUFMOztNQUFLLElBQUU7O0lBRVYsSUFBRyxDQUFDLENBQUMsTUFBRixJQUFhLENBQUMsQ0FBQyxPQUFGLEdBQVksQ0FBNUI7TUFFRSxJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4sRUFBVSxLQUFWLEVBQWlCLFFBQWpCO01BQ0EsVUFBQSxDQUFXLFNBQUE7UUFDVCxJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4sRUFBVSxRQUFWLEVBQW9CLEtBQXBCO2VB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InNvdXJjZXNDb250ZW50IjpbIl8gPVxuXG4gIGk6IC0+XG4gICAgQGNvbnNvbGUgPSBzZXRJbnRlcnZhbChAZGV0ZWN0LmJpbmQoQCksIDIwMClcblxuICBwOlxuICAgIG9mZmluZzogZmFsc2VcbiAgICBvZmZ0aW1lOiAwXG5cbiAgdHVybjogKGVsLCByZW1vdmU9ZmFsc2UsIGFkZD1mYWxzZSkgLT5cblxuICAgIGlmIGVsIG5vdCBpbnN0YW5jZW9mIGpRdWVyeVxuICAgICAgZWwgPSAkKGVsKVxuXG4gICAgaWYgcmVtb3ZlIGlzbnQgZmFsc2VcbiAgICAgIGVsLnJlbW92ZUNsYXNzKHJlbW92ZSlcblxuICAgIGlmIGFkZCBpc250IGZhbHNlXG4gICAgICBlbC5hZGRDbGFzcyhhZGQpXG5cbiAgICByZXR1cm4gdHJ1ZVxuXG4gIG9mZjogKGVsLCBwPXt9KSAtPlxuXG4gICAgaWYgcC5vZmZpbmcgYW5kIHAub2ZmdGltZSA+IDBcblxuICAgICAgQHR1cm4gZWwsIGZhbHNlLCAnb2ZmaW5nJ1xuICAgICAgc2V0VGltZW91dCAtPlxuICAgICAgICBAdHVybiBlbCwgJ29mZmluZycsIGZhbHNlXG4gICAgICAgIEB0dXJuIGVsLCAnb24nLCAnb2ZmJ1xuICAgICAgLCBwLm9mZnRpbWUqMTAwMCArIDEwMFxuXG4gICAgZWxzZVxuICAgICAgQHR1cm4gZWwsICdvbicsICdvZmYnXG5cbiAgICByZXR1cm5cblxuICBvbjogKGVsLCBwKSAtPlxuICAgIEB0dXJuIGVsLCAnb2ZmJywgJ29uJ1xuXG4gIHN0YXRlOiAoZWwpIC0+XG4gICAgaWYgZWwgbm90IGluc3RhbmNlb2YgalF1ZXJ5XG4gICAgICBlbCA9ICQoZWwpXG5cbiAgICBpZiBlbC5oYXNDbGFzcyAnb2ZmJ1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgaWYgZWwuaGFzQ2xhc3MgJ29uJ1xuICAgICAgcmV0dXJuIHRydWVcblxuICAgIHJldHVybiBudWxsXG5cbiAgc3dhcDogKGVsLCBwKSAtPlxuXG4gICAgaWYgZWwgbm90IGluc3RhbmNlb2YgalF1ZXJ5XG4gICAgICBlbCA9ICQoZWwpXG5cbiAgICBpZiBlbC5oYXNDbGFzcyAnb2ZmJ1xuICAgICAgQG9uIGVsLCBwXG4gICAgZWxzZVxuICAgICAgQG9mZiBlbCwgcFxuXG4gICAgcmV0dXJuXG5cbiAgZW5jb2RlOiAoc3RyKSAtPlxuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKVxuICAgICAgLnJlcGxhY2UoLyEvZywgJyUyMScpXG4gICAgICAucmVwbGFjZSgvJy9nLCAnJTI3JylcbiAgICAgIC5yZXBsYWNlKC9cXCgvZywgJyUyOCcpXG4gICAgICAucmVwbGFjZSgvXFwpL2csICclMjknKVxuICAgICAgLnJlcGxhY2UoL1xcKi9nLCAnJTJBJylcbiAgICAgIC5yZXBsYWNlKC8lMjAvZywgJysnKVxuXG4gIHQ6IChjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCwgdmFsdWUpIC0+XG4gICAgX2dhcS5wdXNoIFsnX3RyYWNrRXZlbnQnLCBjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCwgdmFsdWVdXG5cbiAgcmFuZDogKG1pbiwgbWF4KSAtPlxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpICsgbWluXG5cbiAgaGV4MnJnYjogKGhleCkgLT5cbiAgICByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KVxuICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxuICAgIGc6IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxuICAgIGI6IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpXG4gXG4gIG9iamM6IChvYmopIC0+XG4gICAgKGsgZm9yIG93biBrIG9mIG9iaikubGVuZ3RoXG5cbiAgbG9hZDogKHNjcmlwdCwgaW5pdGlhdGUsIGNvbXBsZXRlKSAtPlxuXG4gICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICdzY3JpcHQnXG4gICAgZWwudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnXG4gICAgZWwuc3JjID0gc2NyaXB0XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lciAnbG9hZCcgLCAoZSkgLT5cbiAgICAgIGNvbXBsZXRlKCkgaWYgdHlwZW9mIGNvbXBsZXRlIGlzICdmdW5jdGlvbidcbiAgICAgIHdpbmRvd1tpbml0aWF0ZV0uaSgpIGlmIGluaXRpYXRlIGlzbnQgdW5kZWZpbmVkIGFuZCBpbml0aWF0ZSBpc250IGZhbHNlXG4gICAgLCBmYWxzZVxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbClcblxuICBsbGM6IC0+XG4gICAgYXNjaWkgPSBcIlwiXCJcblxuICAgICAgJWNtbW0vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9tbW1cbiAgICAgIG1tby4uLi4uLi4uLi4uLi4uLi4tOjovLzo6LS4uLi4uLi4tOjo6Ojo6Ojo6Ojo6Oi0uLi4uLi4uLi06Oi8vLzotLm9tbVxuICAgICAgbWQtLi4uLi4uLi4uLi4uLjoreWhkZGRkZGRoeSstLi4uLi9kZGRkZGRkZGRkZGRkKy4uLi4uLi9zaGRkZGRkZGR5b2RtXG4gICAgICBtby4uLi4uLi4uLi4uLi4taG1tbWh5eXl5ZG1tbWg6Li4uL21tbW1oaGhoaGhoaGgrLi4uLjp5ZG1tZGh5eXloZGRvb21cbiAgICAgIG0tLi4uLi4uLi4uLi4uLi4tc3M6LS4uLi4teW1tbXkuLi4vbW1tbS0tLS0tLS0tLS4uLi46ZG1tbXM6LS4uLi06Ly4tbVxuICAgICAgZC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi55bW1teS4uLi9tbW1tLS8rb29vKzotLi4uLnltbW15LTorb29vKy8tLi5kXG4gICAgICBoLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi46c21tbWQ6Li4uL21tbW1obW1tbW1tZGgrLi4uZG1tbXNoZG1tbW1tbWhzLWhcbiAgICAgIGguLi4uLi4uLi4uLi4uLi4uLi4uLi46c2RtbWR5Oi4uLi46aGhkaG8rLy8reW1tbW0rLi5kbW1tZHlvLy8rc2RtbW1oaFxuICAgICAgZC4uLi4uLi4uLi4uLi4uLi4uLi0reWRtbWR5Ly4uLi4uLi4tLTouLi4uLi4uc21tbWguLnltbW1zLi4uLi4uOm1tbW1tXG4gICAgICBtLS4uLi4uLi4uLi4uLi4uLTpzaG1tbWRzLy0tLS0tLi4uLjpzLy0tLi4uLTpobW1tcy4uOmRtbWQvLS4uLi1vbW1tbW1cbiAgICAgIG1vLi4uLi4uLi4uLi4uLi5obW1tbW1taGhoaGhoaGguLi4rZG1tZGh5eXloZG1tbXktLi4uL2htbW1oeXl5aG1tbWRobVxuICAgICAgbWQtLi4uLi4uLi4uLi4uLmRkZGRkZGRkZGRkZGRkZC4uLi0rc2hkZGRkZGRkaHkvLS4uLi4uLW95ZGRkZGRkZGhvOmRtXG4gICAgICBtbW8uLi4uLi4uLi4uLi4uOjo6Ojo6Ojo6Ojo6Ojo6Li4uLi4uLi06Ly8vOjotLi4uLi4uLi4uLi4tOi8vLzotLi5vbW1cbiAgICAgIG1tbS8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uL21tbVxuXG4gICAgICA6OiBzeW50YWN0aWMgc3VnYXIgYnkgMjU2XG4gICAgICA6OiBodHRwOi8vMjU2LmlvL1xuICAgICAgOjogI3tjb25maWcubWV0YS5yZXBvfVxuICAgIFwiXCJcIlxuICAgIGNvbnNvbGUubG9nIGFzY2lpLCBcImNvbG9yOiBncmV5OyBmb250LWZhbWlseTogTWVubG8sIG1vbm9zcGFjZTtcIlxuXG4gIGRldGVjdDogLT5cbiAgICBpZiAoKCh3aW5kb3cub3V0ZXJIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQpID4gMTAwKSB8fCAoKHdpbmRvdy5vdXRlcldpZHRoIC0gd2luZG93LmlubmVyV2lkdGgpID4gMTAwKSlcbiAgICAgIEBsbGMoKVxuICAgICAgY2xlYXJJbnRlcnZhbCBAY29uc29sZVxuXG5fLmkoKVxuIiwiY29uZmlnID0ge1wiY29sb3JcIjp7XCJibHVlMVwiOlwiIzAwQUZBQVwiLFwib3JhbmdlMVwiOlwiI0YyOTkzNFwiLFwib3JhbmdlMlwiOlwiIzlFNUQwN1wiLFwib3JhbmdlM1wiOlwiI0QxQTk3RVwiLFwia2hha2kxXCI6XCIjQ0FBRjkwXCIsXCJwZWFjaDFcIjpcIiNGOEY1RjJcIixcIndoaXRlMVwiOlwiI2ZmZmZmZlwiLFwiYmxhY2sxXCI6XCIjMDAwMDAwXCIsXCJncmV5MVwiOlwiIzc3Nzc3N1wifSxcImZvbnRcIjp7XCJoMVwiOntcImZvbnQtZmFtaWx5XCI6XCJhcXVpbG9uZSByZWd1bGFyXCIsXCJmb250LXNpemVcIjpcIjQ4cHhcIn0sXCJoMlwiOntcImZvbnQtZmFtaWx5XCI6XCJzYWNrZXJzIGdvdGhpY1wiLFwiZm9udC1zaXplXCI6XCIyMnB4XCIsXCJsZXR0ZXItc3BhY2luZ1wiOlwiNHB4XCJ9LFwiaDNcIjp7XCJmb250LWZhbWlseVwiOlwic2Fja2VycyBnb3RoaWNcIixcImZvbnQtc2l6ZVwiOlwiMTZweFwiLFwibGV0dGVyLXNwYWNpbmdcIjpcIjJweFwiLFwibGluZS1oZWlnaHRcIjpcIjIycHhcIn0sXCJoNFwiOntcImZvbnQtZmFtaWx5XCI6XCJhcXVpbG9uZSByZWd1bGFyXCIsXCJmb250LXNpemVcIjpcIjMycHhcIn0sXCJjMVwiOntcImZvbnQtZmFtaWx5XCI6XCJhdmVydGEgbGlnaHRcIixcImZvbnQtc2l6ZVwiOlwiMThweFwifSxcImMxc1wiOntcImZvbnQtZmFtaWx5XCI6XCJhdmVydGEgbGlnaHRcIixcImZvbnQtc2l6ZVwiOlwiMTRweFwifSxcImMxc3NcIjp7XCJmb250LWZhbWlseVwiOlwiYXZlcnRhIGxpZ2h0XCIsXCJmb250LXNpemVcIjpcIjEwcHhcIn0sXCJjMXNiXCI6e1wiZm9udC1mYW1pbHlcIjpcImF2ZXJ0YSBib2xkXCIsXCJmb250LXNpemVcIjpcIjE0cHhcIn0sXCJjMlwiOntcImZvbnQtZmFtaWx5XCI6XCJhdmVydGEgYm9sZFwiLFwiZm9udC1zaXplXCI6XCIyOHB4XCJ9LFwiYzNcIjp7XCJmb250LWZhbWlseVwiOlwiYXZlcnRhIGJvbGRcIixcImZvbnQtc2l6ZVwiOlwiMTRweFwifSxcImMzc1wiOntcImZvbnQtZmFtaWx5XCI6XCJhdmVydGEgYm9sZFwiLFwiZm9udC1zaXplXCI6XCIxMXB4XCJ9LFwiYzRcIjp7XCJmb250LWZhbWlseVwiOlwiYXZlcnRhIGJvbGRcIixcImZvbnQtc2l6ZVwiOlwiMjBweFwifSxcImM1XCI6e1wiZm9udC1mYW1pbHlcIjpcImF2ZXJ0YSBib2xkXCIsXCJmb250LXNpemVcIjpcIjE4cHhcIn0sXCJjNlwiOntcImZvbnQtZmFtaWx5XCI6XCJhcXVpbG9uZSByZWd1bGFyXCIsXCJmb250LXNpemVcIjpcIjE2cHhcIn19LFwibWV0YVwiOntcInVybFwiOlwiaHR0cHM6Ly9mdWxsLXN1bi5jb20vXCIsXCJ0aXRsZVwiOlwiRnVsbCBTdW5cIixcImRlc2NyaXB0aW9uXCI6XCJQcmVtaXVtIFN1bmdyb3duIEdvb2RuZXNzXCIsXCJrZXl3b3Jkc1wiOlwiZnVsbCBzdW4sIGNhbm5hYmlzLCBjYWxpZm9ybmlhXCIsXCJ0cmFja2luZ19pZFwiOlwiVUEtOTMyMzQ2MDctMVwiLFwic2hhcmVcIjpcImltYWdlcy9zaGFyZS5wbmdcIixcInJlcG9cIjpcImh0dHBzOi8vZ2l0aHViLmNvbS9hY2lkamF6ei9mdWxsc3VuXCIsXCJtYXBfYXBpX2tleVwiOlwiQUl6YVN5QUlxODRwamk0b3Z1bUFOWFhvbE1xa0d3UVg4a00xbUtjXCIsXCJlbWFpbFwiOlwiaW5mb0BmdWxsLXN1bi5jb21cIixcImluc3RhZ3JhbVwiOlwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9mdWxsc3VuXy9cIixcInR3aXR0ZXJcIjpcImh0dHBzOi8vdHdpdHRlci5jb20vRnVsbFN1bjJcIixcImZhY2Vib29rXCI6XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vRnVsbC1TdW4tNjQ4OTUyMjcxOTcxNjg1L1wifSxcInByb2R1Y3RzXCI6W3tcIm5hbWVcIjpcInZhcGUgcGVuIHNldFwiLFwidGl0bGVcIjpcIkNhbm5hYmlzIE9pbCBWYXBvcml6YXRpb24gU2V0XCIsXCJkZXNjcmlwdGlvblwiOltcIkRlc2lnbmVkIGZvciBvbi10aGUtZ28gZW5qb3ltZW50LCB0aGlzIHByZW1pdW0gdmFwZSBzZXQgaW5jbHVkZXMgb3VyIFNpbmdsZSBPcmlnaW4gY2FubmFiaXMgb2lsLiBVc2UgdGhyb3VnaG91dCB0aGUgZGF5IHRvIGluY2l0ZSBjcmVhdGl2aXR5LCBjYWxtIHRoZSBtaW5kIG9yIGRlZXBlbiByZWxheGF0aW9uIGxldmVscy5cIixcIlNhdmUgeW91cnNlbGYgdGltZSBhbmQgZWZmb3J0LCB0aGlzIG9uZSBjYXJ0cmlkZ2UgY2FuIGJlIHVzZWQgZm9yIGVuZGxlc3Mgb2NjYXNpb25zLiBUaGUgcGVyZmVjdCBkb3NlIG9mIGdvb2RuZXNzIGFueXRpbWUgeW91IG5lZWQgaXQg4oCUIHN1bnVwIHRvIHN1bmRvd24uXCIsXCJJbmNsdWRlcyBiYXR0ZXJ5LCA1MDBtZyBjYXJ0cmlkZ2UgYW5kIGNoYXJnZXIuICBTb2x2ZW50IEZyZWUuIFByb2R1Y3QgdGVzdGVkIGFuZCBoZWxkICB0byB0aGUgaGlnaGVzdCBzdGFuZGFyZHMgZm9yIHB1cml0eSBhbmQgY29uc2lzdGVudCBUSEMgcG90ZW5jeS5cIixcIjxpPkV4cGVyaWVuY2U6IEEgY2xlYXItaGVhZGVkLCBmb2N1c2VkIGhpZ2ggcGVyZmVjdCBmb3IgZGF5dGltZSBhbmQgbmlnaHR0aW1lIHVzZS48L2k+XCJdLFwidGh1bWJcIjpcInBlbl9zZXRfdGh1bWIuanBnXCIsXCJpbWFnZVwiOlwicGVuX3NldC5qcGdcIixcImRldGFpbFwiOlt7XCJsZWZ0XCI6XCJUSENcIixcInJpZ2h0XCI6XCI+ODUlXCJ9LHtcImxlZnRcIjpcIlNUUkFJTlwiLFwicmlnaHRcIjpcIkh5YnJpZFwifSx7XCJsZWZ0XCI6XCJQUk9EVUNUIE9SSUdJTlwiLFwicmlnaHRcIjpcIkh1bWJvbGR0IENvdW50eSwgQ0FcIn1dfSx7XCJuYW1lXCI6XCJyaXNlXCIsXCJ0aXRsZVwiOlwiU29sdmVudC1GcmVlIFNpbmdsZSBPcmlnaW4gQ2FydHJpZGdlIFJlZmlsbFwiLFwiZGVzY3JpcHRpb25cIjpbXCJNb3JuaW5ncyBqdXN0IGdvdCBicmlnaHRlci4gT3VyIFJpc2UsIGFsbC1uYXR1cmFsLCBzaW5nbGUgb3JpZ2luIG9pbCBjYXJ0cmlkZ2VzIGFyZSBhdmFpbGFibGUgaW4gNCBkaWZmZXJlbnQgdGVycGVuZSBlbnJpY2hlZCBmbGF2b3JzOiBEYW5rIEJlcnJ5LCBFbmxpZ2h0ZW7igJ1taW504oCdLCBUcm9waUNhbGkgYW5kIE5hdHVyYWwuXCIsXCI8aT5TZWxlY3QgYSB0b25lIHRvIGVuaGFuY2UgeW91ciBkYXk6PC9pPlwiXSxcInRodW1iXCI6XCJyaXNlX3RodW1iLmpwZ1wiLFwiaW1hZ2VcIjpcInJpc2UuanBnXCIsXCJmbGF2b3JzXCI6W3tcIm5hbWVcIjpcIkRhbmsgQmVycnlcIixcImRlc2NcIjpbXCJJbWFnaW5lIHdha2luZyB1cCBmZWVsaW5nIGNvbXBsZXRlbHkgcmVmcmVzaGVkIGFuZCByZWFkeSB0byBjb25xdWVyIHRoZSBkYXkuXCIsXCJGZWVsOiBDcmVhdGl2ZSwgYWxlcnQsIGFuZCBpbnNwaXJlZFwiXX0se1wibmFtZVwiOlwiRW5saWdodGVu4oCdbWludOKAnVwiLFwiZGVzY1wiOltcIlRvIFlvZ2Egb3Igbm90IHRvIFlvZ2E/IFdoZXRoZXIgeW91IHN3ZWF0IHRocm91Z2ggaXQgb3Igc2xlcHQgdGhyb3VnaCBpdCwgd2UgZ290IHlvdSBjb3ZlcmVkLlwiLFwiRmVlbDogTWluZGZ1bCwgZm9jdXNlZCwgYW5kIGNhbG1cIl19LHtcIm5hbWVcIjpcIlRyb3BpQ2FsaVwiLFwiZGVzY1wiOltcIllvdSBob3BwZWQgb24gYSBwbGFuZSBhbmQganVzdCB0b3VjaGVkIGRvd24gb24gYSB0cm9waWNhbCBvYXNpcy4gV2VsY29tZSB0byBpc2xhbmQgbGl2aW5nLCBvcGVyYXRpb24gdW53aW5kLlwiLFwiRmVlbDogSGFwcHksIHJlbGF4ZWQsIGFuZCBjYXJlZnJlZVwiXX0se1wibmFtZVwiOlwiTmF0dXJhbFwiLFwiZGVzY1wiOltcIkdyZWVuIHNtb290aGllZCBmb3IgYnJlYWtmYXN0LCBhdGUgc2FsYWQgZm9yIGx1bmNoLCBwb3dlciBjeWNsZWQgYWZ0ZXIgd29yayDigJQgdGhhdCB3YXMgdGhlIGlkZWEgYW55d2F5cy5cIixcIkZlZWw6IENsZWFyLWhlYWRlZCwgZW5lcmdpemVkLCBhbmQgcmVmcmVzaGVkXCJdfV0sXCJkZXRhaWxcIjpbe1wibGVmdFwiOlwiVEhDXCIsXCJyaWdodFwiOlwiPjg1JVwifSx7XCJsZWZ0XCI6XCJTVFJBSU5cIixcInJpZ2h0XCI6XCJIeWJyaWRcIn0se1wibGVmdFwiOlwiUFJPRFVDVCBPUklHSU5cIixcInJpZ2h0XCI6XCJIdW1ib2xkdCBDb3VudHksIENBXCJ9XX0se1wibmFtZVwiOlwic2hpbmVcIixcInRpdGxlXCI6XCJDbGVhciBDYW5uYWJpcyBDb25jZW50cmF0ZVwiLFwiZGVzY3JpcHRpb25cIjpbXCJTaGluZSBzdHJvbmdlciBhIGxpdHRsZSBsb25nZXIgd2l0aCBvdXIgMTAwJSBzb2x2ZW50LWZyZWUsIGNsZWFyIGNhbm5hYmlzIGNvbmNlbnRyYXRlLiBXZSB1c2UgYSBwcm9wcmlldGFyeSBleHRyYWN0aW9uIG1ldGhvZCB0byBkaXN0aWxsIGEgY2xlYW4sIGNsZWFyIG9pbCBmcm9tIG91ciBIaWdoLURlZmluaXRpb24sIFNpbmdsZSBPcmlnaW4gT0cgS3VzaC4gQW4gaW5kaWNhLWxlYW5pbmcgaHlicmlkLCBvdXIgb2lsIGlzIHRvdGFsbHkgcHVyZSBhbmQgdG90YWxseSBwb3RlbnQuXCIsXCJPdXIgY29uY2VudHJhdGVzIGNhbiBiZSB1c2VkIGluIGxvYWRhYmxlIHZhcGUgcGVucywgb2lsIHJpZ3MsIG9yIHNtZWFyZWQgb250byBqb2ludHMgZm9yIGEgbGl0dGxlIGV4dHJhIHN0cmVuZ3RoLlwiLFwiUHJvZHVjdCB0ZXN0ZWQgYW5kIGhlbGQgIHRvIHRoZSBoaWdoZXN0IHN0YW5kYXJkcyBmb3IgcHVyaXR5IGFuZCBjb25zaXN0ZW50IFRIQyBwb3RlbmN5LlwiLFwiPGk+RXhwZXJpZW5jZTogQSBiYWxhbmNlZCBib2R5IGFuZCBoZWFkIGhpZ2guIE1lbGxvdyAmIHJlbGF4ZWQuPC9pPlwiXSxcInRodW1iXCI6XCJzaGluZV90aHVtYi5qcGdcIixcImltYWdlXCI6XCJzaGluZS5qcGdcIixcImRldGFpbFwiOlt7XCJsZWZ0XCI6XCJUSENcIixcInJpZ2h0XCI6XCI+ODUlXCJ9LHtcImxlZnRcIjpcIlNUUkFJTlwiLFwicmlnaHRcIjpcIkh5YnJpZFwifSx7XCJsZWZ0XCI6XCJQUk9EVUNUIE9SSUdJTlwiLFwicmlnaHRcIjpcIkh1bWJvbGR0IENvdW50eSwgQ0FcIn1dfSx7XCJuYW1lXCI6XCJmbG93ZXJzXCIsXCJ0aXRsZVwiOlwiRnVsbCBCbG9vbXNcIixcImRlc2NyaXB0aW9uXCI6W1wiTmF0dXJhbGx5IGdyb3duIGFuZCBoYXJ2ZXN0ZWQgdW5kZXIgSHVtYm9sZHQgQ291bnR5IHN1bnNoaW5lLCBvdXIgZmxvd2VycyBhcmUgbWV0aWN1bG91c2x5IG1vbml0b3JlZCBhbmQgaGFuZGxlZCB3aXRoIHRoZSB1dG1vc3QgY2FyZSB0byBlbnN1cmUgcHJlbWl1bSBxdWFsaXR5LlwiLFwiQXMgbmF0aXZlIEh1bWJvbGR0IGdyb3dlcnMsIHdlIGhhdmUgYSBwdWxzZSBvbiB3aGF04oCZcyBpbiBkZW1hbmQgdG8gbWFrZSBzdXJlIHdlIHByb3ZpZGUgdGhlIG5ld2VzdCBhbmQgbW9zdCBleGNpdGluZyBzdHJhaW5zLlwiLFwiQWxsIG9mIG91ciBmbG93ZXJzIGFyZSBsYWItdGVzdGVkIHRlc3RlZCBhbmQgaGVsZCB0byB0aGUgaGlnaGVzdCBzdGFuZGFyZHMgZm9yIHB1cml0eSBhbmQgY29uc2lzdGVudCBUSEMgcG90ZW5jeS5cIl0sXCJ0aHVtYlwiOlwiZmxvd2Vyc190aHVtYi5qcGdcIixcImltYWdlXCI6XCJmbG93ZXJzLmpwZ1wiLFwiZmxhdm9yc1wiOlt7XCJuYW1lXCI6XCJIaWdoLURlZmluaXRpb24gT0cgS3VzaFwiLFwidGFnXCI6XCJoZFwiLFwidGhjXCI6XCIyNiVcIixcImRlc2NcIjpbXCJPbmUgb2YgdGhlIG1vc3QgbGVnZW5kYXJ5IGNhbm5hYmlzIHN0cmFpbnMsIE9HIEt1c2ggaXMgYSBzdHJvbmcsIEluZGljYS1sZWFuaW5nIGh5YnJpZCByZW5vd25lZCBmb3IgaXRzIHBvd2VyZnVsIHBvdGVuY3ksIG1lZGljaW5hbCBxdWFsaXRpZXMgYW5kIHVuaXF1ZSB0YXN0ZS4gVGhlIHN0cmFpbiBzbWVsbHMgYW5kIHRhc3RlcyBsaWtlIHN3ZWV0IGxlbW9ucyB3aXRoIGEgaGludCBvZiB3b29keSBlYXJ0aGluZXNzLiBXaGF0IG1ha2VzIG91cnMgSGlnaC1EZWZpbml0aW9uPyBUaGF04oCZcyBvdXIgYmVzdCBrZXB0IHNlY3JldC5cIl19LHtcIm5hbWVcIjpcIlN1bnNldCBTaGVyYmVydFwiLFwidGFnXCI6XCJzaGVyYmVydFwiLFwidGhjXCI6XCIyNC0yNiVcIixcImRlc2NcIjpbXCJBbiBJbmRpY2EtZG9taW5hbnQgaHlicmlkLCB0aGlzIGlzIGEgcG93ZXJmdWwgY3Jvc3MgYmV0d2VlbiB0aGUgR2lybCBTY291dCBDb29raWVzIGFuZCBQaW5rIFBhbnRpZXMgc3RyYWlucy4gS25vd24gZm9yIGl0cyB1cGxpZnRpbmcgam9sdCBvZiBjZXJlYnJhbCBlbmVyZ3ksIFN1bnNldCBTaGVyYmV0IHRhc3RlcyBsaWtlIHN3ZWV0IGNpdHJ1cyBhbmQgaG9uZXkgd2l0aCBhbiBlYXJ0aHkgYWZ0ZXJ0YXN0ZS5cIl19LHtcIm5hbWVcIjpcIlNvdXIgVGFuZ2llXCIsXCJ0YWdcIjpcInNvdXJcIixcInRoY1wiOlwiMjQlXCIsXCJkZXNjXCI6W1wiQW4gODAlIFNhdGl2YS1kb21pbmFudCBjcm9zcyBiZXR3ZWVuIEVhc3QgQ29hc3QgU291ciBEaWVzZWwgYW5kIFRhbmdpZSwgdGhpcyBzdHJhaW4gaXMga25vd24gZm9yIGl0cyBleHRyZW1lLCBtb3V0aHdhdGVyaW5nIGZsYXZvci4gU3Ryb25nIGNpdHJ1cyBub3RlcyBhcmUgbWV0IHdpdGggYW4gZWFydGh5IGRpZXNlbCBhZnRlcnRhc3RlLiBBIHdlbGwtYmFsYW5jZWQgc3RyYWluIHBlcmZlY3QgZm9yIGZ1bGwgYm9keSByZWxheGF0aW9uLlwiXX0se1wibmFtZVwiOlwiQmxhY2sgTGltZSBSZXNlcnZlXCIsXCJ0YWdcIjpcImxpbWVcIixcInRoY1wiOlwiMjQtMjYlXCIsXCJkZXNjXCI6W1wiQSBib3V0aXF1ZSwgSW5kaWNhIHN0cmFpbiB3aXRoIGEgcmVwdXRhYmxlIEVtZXJhbGQgVHJpYW5nbGUgaGVyaXRhZ2UuIEEgcG93ZXJmdWwgY3Jvc3MgYmV0d2VlbiBOb3J0aGVybiBMaWdodHMsIFB1cnBsZSBLdXNoIGFuZCBDaGVtZGF3ZyBTcGVjaWFsIFJlc2VydmUgc3RyYWlucy4gUmVmcmVzaGluZyBhbmQgZXh1YmVyYW50IHdpdGggYSBwcm9ub3VuY2VkIG1peCBvZiBzd2VldCBjaXRydXMsIHBlcHBlcnkgc3BpY2UgYW5kIGp1aWN5IGxpbWUuXCJdfV0sXCJkZXRhaWxcIjpbe1wibGVmdFwiOlwiVEhDXCIsXCJyaWdodFwiOlwiMjQtMjYlXCJ9LHtcImxlZnRcIjpcIlNUUkFJTlwiLFwicmlnaHRcIjpcIkh5YnJpZFwifSx7XCJsZWZ0XCI6XCJQUk9EVUNUIE9SSUdJTlwiLFwicmlnaHRcIjpcIkh1bWJvbGR0IENvdW50eSwgQ0FcIn1dfSx7XCJuYW1lXCI6XCJhbnZpbCB0ZWVcIixcInRpdGxlXCI6XCJBbnZpbCBUZWUgU2hpcnRcIixcImRlc2NyaXB0aW9uXCI6W1wiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyXCJdLFwidGh1bWJcIjpcImFudmlsX3RlZV90aHVtYi5qcGdcIixcImltYWdlXCI6XCJhbnZpbF90ZWVfZ3JleS5qcGdcIixcImRldGFpbFwiOlt7XCJsZWZ0XCI6XCJTaXplc1wiLFwicmlnaHRcIjpcIlMsIE0sIEwsIFhMXCJ9LHtcImxlZnRcIjpcImNvbG9yc1wiLFwicmlnaHRcIjpcImdyZWVuLCBibGFjaywgYmx1ZVwifV0sXCJ2ZXJzaW9uc1wiOlt7XCJjb2xvclwiOlwiZ3JleVwiLFwiaW1hZ2VcIjpcImFudmlsX3RlZV9ncmV5LmpwZ1wifSx7XCJjb2xvclwiOlwiYmxhY2tcIixcImltYWdlXCI6XCJhbnZpbF90ZWVfYmxhY2suanBnXCJ9XX0se1wibmFtZVwiOlwiY3JvcHBlZCB0ZWVcIixcInRpdGxlXCI6XCJDcm9wcGVkIFRlZSBTaGlydFwiLFwiZGVzY3JpcHRpb25cIjpbXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXJcIl0sXCJ0aHVtYlwiOlwiY3JvcHBlZF90ZWVfdGh1bWIuanBnXCIsXCJpbWFnZVwiOlwiY3JvcHBlZF90ZWUuanBnXCIsXCJkZXRhaWxcIjpbe1wibGVmdFwiOlwiU2l6ZXNcIixcInJpZ2h0XCI6XCJTLCBNLCBMLCBYTFwifSx7XCJsZWZ0XCI6XCJjb2xvcnNcIixcInJpZ2h0XCI6XCJncmVlbiwgYmxhY2ssIGJsdWVcIn1dfSx7XCJuYW1lXCI6XCJiYWdcIixcInRpdGxlXCI6XCJEcmF3c3RyaW5nIEJhZ1wiLFwiZGVzY3JpcHRpb25cIjpbXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXJcIl0sXCJ0aHVtYlwiOlwiYmFnX3RodW1iLmpwZ1wiLFwiaW1hZ2VcIjpcImJhZy5qcGdcIixcImRldGFpbFwiOlt7XCJsZWZ0XCI6XCJTaXplc1wiLFwicmlnaHRcIjpcIlMsIE0sIEwsIFhMXCJ9LHtcImxlZnRcIjpcImNvbG9yc1wiLFwicmlnaHRcIjpcImdyZWVuLCBibGFjaywgYmx1ZVwifV19LHtcIm5hbWVcIjpcImhhdFwiLFwidGl0bGVcIjpcIkJsdWUgSGF0XCIsXCJkZXNjcmlwdGlvblwiOltcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1clwiXSxcInRodW1iXCI6XCJoYXRfdGh1bWIuanBnXCIsXCJpbWFnZVwiOlwiaGF0LmpwZ1wiLFwiZGV0YWlsXCI6W3tcImxlZnRcIjpcIlNpemVzXCIsXCJyaWdodFwiOlwiUywgTSwgTCwgWExcIn0se1wibGVmdFwiOlwiY29sb3JzXCIsXCJyaWdodFwiOlwiZ3JlZW4sIGJsYWNrLCBibHVlXCJ9XX0se1wibmFtZVwiOlwibGVnZ2luZ3NcIixcInRpdGxlXCI6XCJCbGFjayBMZWdnaW5nc1wiLFwiZGVzY3JpcHRpb25cIjpbXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXJcIl0sXCJ0aHVtYlwiOlwibGVnZ2luZ3NfdGh1bWIuanBnXCIsXCJpbWFnZVwiOlwibGVnZ2luZ3MuanBnXCIsXCJkZXRhaWxcIjpbe1wibGVmdFwiOlwiU2l6ZXNcIixcInJpZ2h0XCI6XCJTLCBNLCBMLCBYTFwifSx7XCJsZWZ0XCI6XCJjb2xvcnNcIixcInJpZ2h0XCI6XCJncmVlbiwgYmxhY2ssIGJsdWVcIn1dfSx7XCJuYW1lXCI6XCJyYWNlcmJhY2tcIixcImVjd2lkXCI6ODgzMTY3MjMsXCJ0aXRsZVwiOlwiQ2FsaWZvcm5pYSBDb25zY2lvdXNcIixcImRlc2NyaXB0aW9uXCI6W1wiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyXCJdLFwidGh1bWJcIjpcInJhY2VyYmFja190aHVtYi5qcGdcIixcImltYWdlXCI6XCJyYWNlcmJhY2tfZnJvbnQuanBnXCIsXCJkZXRhaWxcIjpbe1wibGVmdFwiOlwiU2l6ZXNcIixcInJpZ2h0XCI6XCJTLCBNLCBMLCBYTFwifSx7XCJsZWZ0XCI6XCJjb2xvcnNcIixcInJpZ2h0XCI6XCJncmVlbiwgYmxhY2ssIGJsdWVcIn1dLFwidmVyc2lvbnNcIjpbe1wiY29sb3JcIjpcImdyZXlcIixcImltYWdlXCI6XCJyYWNlcmJhY2tfZnJvbnQuanBnXCJ9LHtcImNvbG9yXCI6XCJibGFja1wiLFwiaW1hZ2VcIjpcInJhY2VyYmFja19iYWNrLmpwZ1wifV19LHtcIm5hbWVcIjpcImhvb2RpZVwiLFwidGl0bGVcIjpcIlppcCBIb29kaWVcIixcImRlc2NyaXB0aW9uXCI6W1wiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyXCJdLFwidGh1bWJcIjpcInppcGhvb2RpZV90aHVtYi5qcGdcIixcImltYWdlXCI6XCJ6aXBob29kaWUuanBnXCIsXCJkZXRhaWxcIjpbe1wibGVmdFwiOlwiU2l6ZXNcIixcInJpZ2h0XCI6XCJTLCBNLCBMLCBYTFwifSx7XCJsZWZ0XCI6XCJjb2xvcnNcIixcInJpZ2h0XCI6XCJncmVlbiwgYmxhY2ssIGJsdWVcIn1dfV0sXCJ2ZW5kb3JzXCI6W3tcIm5hbWVcIjpcIkh1bWJvbGR0IFBhdGllbnQgUmVzb3VyY2UgQ2VudGVyXCIsXCJwbGFjZUlkXCI6XCJDaElKVzNzUnRBVlgwVlFSN3E3X2hERGNuQXNcIixcImxpbmtcIjpcImh0dHA6Ly9ocHJjYXJjYXRhLmNvbS9cIixcImltYWdlXCI6XCJocHJjLnBuZ1wifSx7XCJuYW1lXCI6XCJCbHVtIE9ha1wiLFwicGxhY2VJZFwiOlwiQ2hJSk5VaS1BcXlBajRBUk9DUGl0V3h0cHNNXCIsXCJsaW5rXCI6XCJodHRwOi8vYmx1bW9hay5jb20vXCIsXCJpbWFnZVwiOlwiYmx1bS5qcGdcIn1dLFwiY29weVwiOntcImFib3V0XCI6e1widGl0bGVcIjpcImFib3V0IHVzXCIsXCJjb3B5c1wiOltcIldlIGFyZSB0aGUgc21hbGxlc3QgZ3JhaW5zIG9mIHJpY2gsIGhlYWx0aHkgc29pbC4gV2UgYXJlIHRoZSBveHlnZW4gdGhpY2sgYWlyIHByb3ZpZGVkIGJ5IHRoZSBmb3Jlc3RzIG9mIEh1bWJvbGR0IENvdW50eS4gV2UgYXJlIHRoZSBjYXJpbmcgaGFuZHMgdGhhdCB0dXJuIGhpZ2ggcXVhbGl0eSwgY2hlbWljYWwtZnJlZSBjYW5uYWJpcyBpbnRvIGJlYXV0aWZ1bGx5IGNyYWZ0ZWQgY29uY2VudHJhdGVzLCBhbGxvd2luZyB5b3VyIGxpZmUgdG8gYmUgYSBsaXR0bGUgZWFzaWVyLlwiLFwiTGFzdGx5LCB3ZSBhcmUgdGhlIHJheXMgb2Ygc3Vuc2hpbmUgdGhhdCBzcGlsbCBkb3duIHVwb24gdGhlIG1vdW50YWludG9wIOKAlCB0aGUgYnJpZ2h0IGFuZCBtb3N0IHBvd2VyZnVsIHNvdXJjZSB0aGF0IGVucmljaGVzIGFsbCBvZiBvdXIgY2FubmFiaXMgYXQgRnVsbCBTdW4uXCJdfSxcImNvbnRhY3RcIjp7XCJ0aXRsZVwiOlwiY29udGFjdCB1c1wiLFwic3VidGl0bGVcIjpcIldhbnQgbW9yZSBzdW5ncm93biBnb29kbmVzcz9cIn0sXCJwcm9jZXNzXCI6e1widGl0bGVcIjpcIm91ciBwcm9jZXNzXCIsXCJjb3B5c1wiOltcIkFsbCBvZiBvdXIgcHJvZHVjdHMgY29uc2lzdCBvZiBTaW5nbGUgT3JpZ2luLCBIaWdoLURlZmluaXRpb24gT0cgS3VzaCBjYW5uYWJpcy4gV2hpbGUgb3RoZXJzIGNhbGwgdGhpcyB0aGVpciDigJxSZXNlcnZl4oCdIHdlIGNhbGwgdGhpcyBvdXIgXFxcIkFsbCB0aGUgVGltZeKAnS4gV2UgaGFuZCBzZWxlY3Qgb3VyIHNtYWxsIGdyb3VwIG9mIHByb2R1Y2VycyBmb3IgdGhlaXIgY29uc2lzdGVudCBjb21taXRtZW50IHRvIHF1YWxpdHkgYW5kIGV4Y2VsbGVuY2UuIFRoZXkgd29yayB0aGVpciBtYWdpYyB3aXRoIG91ciBwcm9wcmlldGFyeSBzdHJhaW4gd2hpY2ggYWxsb3dzIHVzIHRvIG1haW50YWluIHF1YWxpdHksIGNvbnNpc3RlbmN5LCA8aT5hbmQ8L2k+IHF1YW50aXR5LiBSYWlzZWQgb3V0IG9mIHRoZSBtb3N0IHJlcHV0YWJsZSBncm93aW5nIHJlZ2lvbiBpbiB0aGUgd29ybGQsIG91ciBIdW1ib2xkdCBDb3VudHkgZmFybXMgc3RheXMgcm9vdGVkIGluIGNvbnNjaW91c2x5IGdyb3dpbmcgdGhlIGJlc3QgYW5kIGJyaWdodGVzdCBzdW5ncm93biBjYW5uYWJpcy5cIixcIkV4dHJhY3Rpbmcgb2lsIGZyb20gcGxhbnRzIGhhcyBiZWVuIHdpZGVseSB1c2VkIGFjcm9zcyBpbmR1c3RyaWVzIGZvciBjZW50dXJpZXMuIEZpbmRpbmcgdGhlIHJpZ2h0IGNhbm5hYmlzIGV4dHJhY3Rpb24gcHJvY2VzcyBoYXMgdGFrZW4geWVhcnMsIGJ1dCB3ZSBoYXZlIGRlc2lnbmVkIGFuZCBwZXJmZWN0ZWQgYSBtb2RlbCB0aGF0IG1ha2VzIG91ciBwcm9kdWN0cyBzdXBlcmlvci4gT3VyIHByb3ByaWV0YXJ5IGV4dHJhY3QgbWV0aG9kIGlzIGRvbmUgYXQgb3VyIHN0YXRlIG9mIHRoZSBhcnQgZmFjaWxpdHkgaW4gSHVtYm9sZHQgQ291bnR5LiBUaGUgcmVzdWx0IGlzIGFuIHVsdHJhLXJlZmluZWQgb2lsIHRoYXQgaXMgbGFiIHRlc3RlZCBhbmQgMTAwJSBzb2x2ZW50LWZyZWUsIGV2ZXJ5IHNpbmdsZSB0aW1lLiBZb3VyIHdlbGwtYmVpbmcgaXMgb3VyIHRvcCBwcmlvcml0eS5cIl19fX07IiwiXG5EZWxheSA9XG4gIGhlaWdodDogZmFsc2VcbiAgd2luOiBmYWxzZVxuICBsb2dvOiBmYWxzZVxuICBoZWFkZXI6IGZhbHNlXG4gIHBlYWNoOiBmYWxzZVxuICBmaWxsZWQ6IGZhbHNlXG5cbiAgaTogLT5cblxuICAgIEB3aW4gPSAkIHdpbmRvd1xuICAgIEBoZWlnaHQgPSBAd2luLmhlaWdodCgpXG4gICAgQGxvZ28gPSAkICcuc2VjdGlvbi5zZWN0aW9uX3RvcCA+IC5taWRkbGUnXG4gICAgQGhlYWRlciA9ICQgJ2hlYWRlcidcbiAgICBAcGVhY2ggPSBfLmhleDJyZ2IgY29uZmlnLmNvbG9yLnBlYWNoMVxuICAgICQod2luZG93KS5zY3JvbGwgQGNoZWNrU2Nyb2xsXG5cbiAgY2hlY2tTY3JvbGw6IC0+XG5cbiAgICBwZXJjID0gKERlbGF5Lndpbi5zY3JvbGxUb3AoKSAqIDEwMCAvIERlbGF5LmhlaWdodCkudG9GaXhlZCAyXG5cbiAgICBpZiBwZXJjID4gMTAwXG4gICAgICBpZiBEZWxheS5maWxsZWQgaXMgZmFsc2VcbiAgICAgICAgJCgnaGVhZGVyJykuYWRkQ2xhc3MgJ2ZpbGxlZCdcbiAgICAgICAgRGVsYXkuZmlsbGVkID0gdHJ1ZVxuICAgICAgcmV0dXJuIHRydWVcbiAgICBlbHNlXG4gICAgICBpZiBEZWxheS5maWxsZWQgaXMgdHJ1ZVxuICAgICAgICAkKCdoZWFkZXInKS5yZW1vdmVDbGFzcyAnZmlsbGVkJ1xuICAgICAgICBEZWxheS5maWxsZWQgPSBmYWxzZVxuXG4gICAgb3BhY2l0eSA9IChwZXJjLzEwMCkudG9GaXhlZCgxKSAvIDJcblxuICAgIGlmIEluZGV4Lm9mZnNldCBpc250IDBcbiAgICAgICNEZWxheS5sb2dvLmNzcygndHJhbnNmb3JtJywgXCJ0cmFuc2xhdGUoMHB4LCAje3BlcmMqN31weClcIilcbiAgICAgIERlbGF5LmhlYWRlci5jc3MoJ2JhY2tncm91bmQtY29sb3InLCBcInJnYmEoI3tEZWxheS5wZWFjaC5yfSwje0RlbGF5LnBlYWNoLmd9LCN7RGVsYXkucGVhY2guYn0sI3tvcGFjaXR5fSlcIilcblxuIiwiRm9sZCA9XG5cbiAgaW5WaWV3cG9ydDogKGVsKSAtPlxuXG4gICAgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgXG4gICAgcmV0dXJuKFxuICAgICAgKHJlY3QudG9wID49IDAgfHwgcmVjdC5ib3R0b20gPj0gMCkgJiZcbiAgICAgIChyZWN0LnRvcCA8PSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0KVxuICAgIClcblxuXG4gIHZpZXdzOiAoZWxzLCByZXN1bHQpIC0+XG5cbiAgICB2aWV3cyA9IHt9XG5cbiAgICBlbHMuZWFjaCAoaSwgZWwpIC0+XG5cbiAgICAgIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgbmFtZSA9ICQoZWwpLmF0dHIgJ2lkJ1xuXG4gICAgICByZXR1cm4gdHJ1ZSBpZiBuYW1lIGlzIHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIChyZWN0LnRvcCA+PSAwIHx8IHJlY3QuYm90dG9tID49IDApICYmXG4gICAgICAgIChyZWN0LnRvcCA8PSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0KVxuICAgICAgKVxuICAgICAgICBtaWRkbGUgPSB3aW5kb3cuaW5uZXJIZWlnaHQvMlxuICAgICAgICBpZiByZWN0LnRvcCA8IG1pZGRsZSAmJiByZWN0LmJvdHRvbSA+IG1pZGRsZVxuICAgICAgICAgIHJlc3VsdChuYW1lKVxuIiwiR2F0ZSA9XG5cbiAgaTogLT5cblxuICAgIEBoYW5kbGVycygpXG5cbiAgICAjXy5vZmYoJy5nYXRlJykgaWYgIENvb2tpZXMuZ2V0KCdnYXRlJykgaXNudCB1bmRlZmluZWRcblxuICBoYW5kbGVyczogLT5cblxuICAgICQoJy5nYXRlID4gLmdyYWRpZW50ID4gLm1pZGRsZSA+IC5idXR0b25zID4gLmJ1dHRvbicpLm9uICdjbGljaycsIEB5ZXNub1xuXG4gIHllc25vOiAtPlxuXG4gICAgcmV0dXJuIGxvY2F0aW9uLmhyZWYgPSAnaHR0cDovL3d3dy5idWlsZGFiZWFyLmNvbS8nIGlmICQodGhpcykudGV4dCgpIGlzICdOTydcbiAgICBpZiAkKHRoaXMpLnRleHQoKSBpcyAnWUVTJ1xuICAgICAgXy5vZmYgJy5nYXRlJ1xuICAgICAgQ29va2llcy5zZXQgJ2dhdGUnLCB0cnVlLCBleHBpcmVzOiAxXG5cbiIsIkluZGV4ID1cbiAgb2Zmc2V0OiAtODZcblxuICBpOiAtPlxuXG4gICAgR2F0ZS5pKClcblxuICAgIERlbGF5LmkoKVxuICAgIFByb2R1Y3QuaSgpXG5cbiAgICBpZiAkKHdpbmRvdykud2lkdGgoKSA8IDEwMDBcbiAgICAgIEBvZmZzZXQgPSAwXG5cbiAgICBAaGFuZGxlcnMoKVxuXG4gICAgc2V0SW50ZXJ2YWwgSW5kZXgubWVudSwgNTAwXG5cbiAgaGFuZGxlcnM6IC0+XG4gICAgJCgnaGVhZGVyID4gLmJ1cmdlcicpLmNsaWNrIEBidXJnZXJIYW5kbGVyXG4gICAgJCgnaGVhZGVyID4gLmlubmVyID4gLm1lbnUgPiAuaXRlbXMgPiAuaW5uZXIgPiAuaXRlbScpLmNsaWNrIEBtZW51SGFuZGxlclxuICAgICQoJ2hlYWRlciA+IC5pbm5lciA+IC5sb2dvJykuY2xpY2sgQG1lbnVIYW5kbGVyXG5cbiAgYnVyZ2VySGFuZGxlcjogLT5cbiAgICBfLnN3YXAgJ2hlYWRlciA+IC5idXJnZXInXG4gICAgXy5zd2FwICdoZWFkZXIgPiAuaW5uZXIgPiAubWVudSA+IC5pdGVtcydcblxuICBtZW51SGFuZGxlcjogLT5cbiAgICBfLm9uICdoZWFkZXIgPiAuYnVyZ2VyJ1xuICAgIF8ub2ZmICdoZWFkZXIgPiAuaW5uZXIgPiAubWVudSA+IC5pdGVtcydcbiAgICBJbmRleC5zZWN0aW9uICQodGhpcykuZGF0YSAnaXRlbSdcblxuICBzZWN0aW9uOiAoc2VjdGlvbikgLT5cbiAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAkKCdodG1sLCBib2R5Jykuc2Nyb2xsVG8gXCIjI3tzZWN0aW9ufVwiLFxuICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICAgIG9mZnNldDogSW5kZXgub2Zmc2V0XG4gICAgICBsb2NhdGlvbi5oYXNoID0gc2VjdGlvblxuICAgICwgMTAwXG5cbiAgbWVudTogLT5cblxuICAgIEZvbGQudmlld3MgJCgnLnNlY3Rpb24nKSwgKHJlc3VsdCkgLT5cbiAgICAgIF8ub2ZmICdoZWFkZXIgPiAuaW5uZXIgPiAubWVudSA+IC5pdGVtcyA+IC5pbm5lciA+IC5pdGVtJ1xuICAgICAgXy5vbiBcIi5pdGVtXyN7cmVzdWx0fVwiXG5cbiAgICAgIGlmIHJlc3VsdCBpc250ICdwcm9kdWN0cycgYW5kIFByb2R1Y3QuZGV0YWlscyBpcyB0cnVlXG4gICAgICAgIFByb2R1Y3QuY2xvc2VDbGljaygpXG4iLCJNYXAgPVxuICBtYXA6IGZhbHNlXG4gIHBsYWNlczoge31cblxuICBpOiAtPlxuXG4gICAgQG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLFxuICAgICAgY2VudGVyOiBsYXQ6IDM5LjYwOTI0NzQsIGxuZzogLTEyMy40NDUzNzU1XG4gICAgICB6b29tOiA3XG4gICAgICBzdHlsZXM6IEBzdHlsZXNcbiAgICAgIG9wdGlvbnM6IEBvcHRpb25zXG5cbiAgICBzZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZXNTZXJ2aWNlKEBtYXApXG5cbiAgICBmb3IgdmVuZG9yIGluIGNvbmZpZy52ZW5kb3JzXG4gICAgICBzZXJ2aWNlLmdldERldGFpbHNcbiAgICAgICAgcGxhY2VJZDogdmVuZG9yLnBsYWNlSWRcbiAgICAgICwgKHJlc3VsdCwgc3RhdHVzKSAtPlxuICAgICAgICBNYXAucGxhY2VzW3Jlc3VsdC5wbGFjZV9pZF0gPSByZXN1bHRcbiAgICAgICAgTWFwLm1hcmtlcnMoKSBpZiBfLm9iamMoY29uZmlnLnZlbmRvcnMpIGlzIF8ub2JqYyhNYXAucGxhY2VzKVxuXG5cbiAgICBAaGFuZGxlcnMoKVxuXG4gIGhhbmRsZXJzOiAtPlxuICAgJCgnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlID4gLmNsb3NlJykuY2xpY2sgQHBsYWNlQ2xvc2VIYW5kbGVyXG4gIG1hcmtlcnM6IC0+XG5cbiAgICBtYXJrZXJzID0gW11cblxuICAgIGZvciBpZCwgcGxhY2Ugb2YgQHBsYWNlc1xuXG4gICAgICBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyXG4gICAgICAgIG1hcDogTWFwLm1hcFxuICAgICAgICBwb3NpdGlvbjogcGxhY2UuZ2VvbWV0cnkubG9jYXRpb25cbiAgICAgICAgaWNvbjpcbiAgICAgICAgICB1cmw6ICcvaW1hZ2VzL21hcC9tYXJrZXIucG5nJyxcbiAgICAgICAgICBzY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSg2MCwgNjApXG4gICAgICAgICAgb3JpZ2luOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMCwgMClcbiAgICAgICAgcGxhY2U6XG4gICAgICAgICAgcGxhY2VJZDogcGxhY2UucGxhY2VfaWRcbiAgICAgICAgICBsb2NhdGlvbjogcGxhY2UuZ2VvbWV0cnkubG9jYXRpb25cbiAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyIG1hcmtlciwgJ2NsaWNrJywgTWFwLm1hcmtlckhhbmRsZXJcbiAgICAgIG1hcmtlcnMucHVzaCBtYXJrZXJcblxuICAgIG1hcmtlckNsdXN0ZXIgPSBuZXcgTWFya2VyQ2x1c3RlcmVyIE1hcC5tYXAsIG1hcmtlcnMsXG4gICAgICBpbWFnZVBhdGg6ICdodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9leGFtcGxlcy9tYXJrZXJjbHVzdGVyZXIvbSdcblxuICBtYXJrZXJIYW5kbGVyOiAtPlxuXG4gICBwbGFjZSA9IE1hcC5wbGFjZXNbdGhpcy5wbGFjZS5wbGFjZUlkXVxuXG5cbiAgIGlmIHBsYWNlLnBob3Rvc1xuICAgICQoJy5zZWN0aW9uX2xvY2F0aW9ucyA+IC5wbGFjZSA+IC5pbm5lciA+IC5pbWFnZScpLmF0dHIgJ3NyYycscGxhY2UucGhvdG9zWzBdLmdldFVybCBtYXhXaWR0aDogMjYwLCBtYXhIZWlnaHQ6IDIwMFxuICAgIF8ub24gJy5zZWN0aW9uX2xvY2F0aW9ucyA+IC5wbGFjZSA+IC5pbm5lciA+IC5pbWFnZSdcbiAgIGVsc2VcbiAgICBfLm9mZiAnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlID4gLmlubmVyID4gLmltYWdlJ1xuXG4gICAkKCcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UgPiAuaW5uZXIgPiAubmFtZScpLnRleHQgcGxhY2UubmFtZVxuICAgJCgnLnNlY3Rpb25fbG9jYXRpb25zID4gLnBsYWNlID4gLmlubmVyID4gLm5hbWUnKS5hdHRyICdocmVmJywgcGxhY2UudXJsXG4gICAkKCcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UgPiAuaW5uZXIgPiAuYWRkcmVzcycpLmh0bWwgcGxhY2UuZm9ybWF0dGVkX2FkZHJlc3NcbiAgICQoJy5zZWN0aW9uX2xvY2F0aW9ucyA+IC5wbGFjZSA+IC5pbm5lciA+IC5waG9uZScpLmh0bWwgcGxhY2UuZm9ybWF0dGVkX3Bob25lX251bWJlclxuXG4gICBfLm9uICcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UnXG5cbiAgIE1hcC5tYXAuc2V0Wm9vbSgxNilcbiAgIE1hcC5tYXAuc2V0Q2VudGVyKHRoaXMuZ2V0UG9zaXRpb24oKSlcblxuICAgY29uc29sZS5sb2cgcGxhY2VcblxuXG4gIHBsYWNlQ2xvc2VIYW5kbGVyOiAtPlxuICAgIF8ub2ZmICcuc2VjdGlvbl9sb2NhdGlvbnMgPiAucGxhY2UnXG4gICAgTWFwLm1hcC5zZXRab29tKDExKVxuICAgIFxuICBvcHRpb25zOlxuICAgIHNjcm9sbHdoZWVsOiBmYWxzZVxuICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZVxuICAgIGZ1bGxzY3JlZW5Db250cm9sOiBmYWxzZVxuXG4gIHN0eWxlczpcbiAgICBbXG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdhZG1pbmlzdHJhdGl2ZSdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2xhYmVscy50ZXh0LmZpbGwnXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICdjb2xvcic6ICcjOWU1ZDA3JyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ2FkbWluaXN0cmF0aXZlLmNvdW50cnknXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdsYWJlbHMudGV4dC5maWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAnY29sb3InOiAnI2YyOTkzNCcgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdhZG1pbmlzdHJhdGl2ZS5sb2NhbGl0eSdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2xhYmVscy50ZXh0LmZpbGwnXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICdjb2xvcic6ICcjOWU1ZDA3JyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ2xhbmRzY2FwZSdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2FsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbIHsgJ2NvbG9yJzogJyNmOGY1ZjInIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAncG9pJ1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnYWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAndmlzaWJpbGl0eSc6ICdvZmYnIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAncm9hZCdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2FsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbXG4gICAgICAgICAgeyAnc2F0dXJhdGlvbic6IC0xMDAgfVxuICAgICAgICAgIHsgJ2xpZ2h0bmVzcyc6IDQ1IH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAncm9hZCdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2dlb21ldHJ5LmZpbGwnXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICdjb2xvcic6ICcjZjI5OTM0JyB9IF1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3JvYWQuaGlnaHdheSdcbiAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2FsbCdcbiAgICAgICAgJ3N0eWxlcnMnOiBbIHsgJ3Zpc2liaWxpdHknOiAnc2ltcGxpZmllZCcgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICdyb2FkLmFydGVyaWFsJ1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnbGFiZWxzLmljb24nXG4gICAgICAgICdzdHlsZXJzJzogWyB7ICd2aXNpYmlsaXR5JzogJ29mZicgfSBdXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICdmZWF0dXJlVHlwZSc6ICd0cmFuc2l0J1xuICAgICAgICAnZWxlbWVudFR5cGUnOiAnYWxsJ1xuICAgICAgICAnc3R5bGVycyc6IFsgeyAndmlzaWJpbGl0eSc6ICdvZmYnIH0gXVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAnZmVhdHVyZVR5cGUnOiAnd2F0ZXInXG4gICAgICAgICdlbGVtZW50VHlwZSc6ICdhbGwnXG4gICAgICAgICdzdHlsZXJzJzogW1xuICAgICAgICAgIHsgJ2NvbG9yJzogJyMwMGFmYWEnIH1cbiAgICAgICAgICB7ICd2aXNpYmlsaXR5JzogJ29uJyB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG5cbiIsIlByb2R1Y3QgPVxuICB0bDogZmFsc2VcbiAgZGV0YWlsczogZmFsc2VcblxuICBpOiAtPlxuICAgIEB0bCA9IG5ldyBUaW1lbGluZU1heCByZXBlYXQ6IDBcblxuICAgIEBoYW5kbGVycygpXG5cbiAgaGFuZGxlcnM6IC0+XG5cbiAgICAkKCcuc2VjdGlvbl9wcm9kdWN0cyA+IC5wcm9kdWN0bGlzdCA+IC5wcm9kdWN0JykuY2xpY2sgQHByb2R1Y3RDbGlja1xuICAgICQoJy5zZWN0aW9uX3Byb2R1Y3RzID4gLmRldGFpbHMgPiAuZGV0YWlsID4gLmNsb3NlJykuY2xpY2sgQGNsb3NlQ2xpY2tcbiAgICAkKCcuc2VjdGlvbl9wcm9kdWN0cyA+IC5kZXRhaWxzID4gLmltYWdlID4gLmlubmVyID4gLnZlcnNpb25zID4gLnZlcnNpb24nKS5jbGljayBAdmVyc2lvbkNsaWNrXG4gICAgJCgnLnNlY3Rpb25fcHJvZHVjdHMgPiAuZGV0YWlscyA+IC5kZXRhaWwgPiAuY29weSA+IC5pbm5lciA+IC5mbGF2b3JzID4gLmZsYXZvciA+IC5uYW1lJykuY2xpY2sgQGZsYXZvclxuXG4gIGZsYXZvcjogLT5cbiAgICBwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpXG4gICAgc3RhdGUgPSBfLnN0YXRlIHBhcmVudFxuICAgIF8ub2ZmICcuZmxhdm9ycyA+IC5mbGF2b3InXG4gICAgaWYgc3RhdGVcbiAgICAgIF8ub2ZmIHBhcmVudFxuICAgIGVsc2VcbiAgICAgIF8ub24gcGFyZW50XG4gICAgICB0ID0gJCh0aGlzKVxuICAgICAgaWYgdC5kYXRhKCd0YWcnKSBpc250IHVuZGVmaW5lZFxuICAgICAgICBfLm9mZiAnLmltYWdlLnRhZydcbiAgICAgICAgXy5vbiBcIi5pbWFnZS50YWcudGFnXyN7dC5kYXRhKCd0YWcnKX1cIlxuICAgICAgICB0aGMgPSB0LmRhdGEoJ3RoYycpXG4gICAgICAgICQoJy5kYXRhOmZpcnN0LWNoaWxkID4gLnJpZ2h0JykudGV4dCB0aGNcblxuICBwcm9kdWN0Q2xpY2s6IC0+XG4gICAgcHJvZHVjdCA9ICQodGhpcykuZGF0YSAncHJvZHVjdCdcbiAgICBfLm9uICcuYmFja2Ryb3AnXG4gICAgXy5vbiBcIltpZD0nZGV0YWlsICN7cHJvZHVjdH0nXVwiXG4gICAgXy5vbiBcIltpZD0naW1hZ2UgI3twcm9kdWN0fSddXCJcbiAgICBQcm9kdWN0LmRldGFpbHMgPSB0cnVlXG4gICAgaWYgSW5kZXgub2Zmc2V0IGlzbnQgMFxuICAgICAgSW5kZXguc2VjdGlvbiAncHJvZHVjdHMnXG5cbiAgICBlbXB0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgJ3N1bkVtcHR5J1xuICAgIGZvciBkaXYgaW4gZW1wdHlcbiAgICAgIHRsID0gbmV3IFRpbWVsaW5lTWF4IHJlcGVhdDogMFxuICAgICAgdGwudG8gZGl2LCAxLjAsIHttb3JwaFNWRzoge3NoYXBlOiAnI3N1bkZpbGxlZCcsIHNoYXBlSW5kZXg6IDN9LCBlYXNlOkV4cG8uZWFzZUluT3V0fVxuXG4gIHZlcnNpb25DbGljazogLT5cbiAgICAkKCcudmVyc2lvbnMgPiAudmVyc2lvbicpLnJlbW92ZUNsYXNzICdhY3RpdmUnXG4gICAgJCh0aGlzKS5hZGRDbGFzcyAnYWN0aXZlJ1xuICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgJ3VybCgvaW1hZ2VzL3Byb2R1Y3RzLycgKyAkKHRoaXMpLmRhdGEoJ2ltYWdlJykpXG5cbiAgY2xvc2VDbGljazogLT5cbiAgICBlbXB0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgJ3N1bkVtcHR5J1xuICAgIGZvciBkaXYgaW4gZW1wdHlcbiAgICAgIHRsID0gbmV3IFRpbWVsaW5lTWF4IHJlcGVhdDogMFxuICAgICAgdGwudG8gZGl2LCAwLjAxLCB7bW9ycGhTVkc6ICcjc3VuRW1wdHknLCBlYXNlOkV4cG8uZWFzZUluT3V0fVxuXG4gICAgXy5vZmYgJy5zZWN0aW9uX3Byb2R1Y3RzID4gLmRldGFpbHMgPiAuZGV0YWlsJ1xuICAgIF8ub2ZmICcuc2VjdGlvbl9wcm9kdWN0cyA+IC5kZXRhaWxzID4gLmltYWdlJ1xuICAgIF8ub2ZmICcuYmFja2Ryb3AnXG4gICAgUHJvZHVjdC5kZXRhaWxzID0gZmFsc2VcbiJdfQ==
