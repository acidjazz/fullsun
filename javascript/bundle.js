var _,hasProp={}.hasOwnProperty;_={i:function(){return this.console=setInterval(this.detect.bind(this),200)},p:{offing:!1,offtime:0},turn:function(m,n,d){return null==n&&(n=!1),null==d&&(d=!1),m instanceof jQuery||(m=$(m)),n!==!1&&m.removeClass(n),d!==!1&&m.addClass(d),!0},off:function(m,n){null==n&&(n={}),n.offing&&n.offtime>0?(this.turn(m,!1,"offing"),setTimeout(function(){return this.turn(m,"offing",!1),this.turn(m,"on","off")},1e3*n.offtime+100)):this.turn(m,"on","off")},on:function(m,n){return this.turn(m,"off","on")},state:function(m){return m instanceof jQuery||(m=$(m)),!m.hasClass("off")&&(!!m.hasClass("on")||null)},swap:function(m,n){m instanceof jQuery||(m=$(m)),m.hasClass("off")?this.on(m,n):this.off(m,n)},encode:function(m){return encodeURIComponent(m).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A").replace(/%20/g,"+")},t:function(m,n,d,o){return _gaq.push(["_trackEvent",m,n,d,o])},rand:function(m,n){return Math.floor(Math.random()*n)+m},hex2rgb:function(m){var n;return n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(m),{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}},objc:function(m){var n;return function(){var d;d=[];for(n in m)hasProp.call(m,n)&&d.push(n);return d}().length},load:function(m,n,d){var o;return o=document.createElement("script"),o.type="text/javascript",o.src=m,o.addEventListener("load",function(m){if("function"==typeof d&&d(),void 0!==n&&n!==!1)return window[n].i()},!1),document.body.appendChild(o)},llc:function(){var m;return m="\n%cmmm/............................................................./mmm\nmmo................-:://::-.......-:::::::::::::-........-::///:-.omm\nmd-.............:+yhddddddhy+-..../ddddddddddddd+....../shdddddddyodm\nmo.............-hmmmhyyyydmmmh:.../mmmmhhhhhhhhh+....:ydmmdhyyyhddoom\nm-..............-ss:-....-ymmmy.../mmmm---------....:dmmms:-...-:/.-m\nd.........................ymmmy.../mmmm-/+ooo+:-....ymmmy-:+ooo+/-..d\nh.......................:smmmd:.../mmmmhmmmmmmdh+...dmmmshdmmmmmmhs-h\nh.....................:sdmmdy:....:hhdho+//+ymmmm+..dmmmdyo//+sdmmmhh\nd..................-+ydmmdy/.......--:.......smmmh..ymmms......:mmmmm\nm-..............-:shmmmds/-----....:s/--...-:hmmms..:dmmd/-...-ommmmm\nmo..............hmmmmmmhhhhhhhh...+dmmdhyyyhdmmmy-.../hmmmhyyyhmmmdhm\nmd-.............ddddddddddddddd...-+shdddddddhy/-.....-oydddddddho:dm\nmmo.............:::::::::::::::.......-:///::-...........-:///:-..omm\nmmm/............................................................./mmm\n\n:: syntactic sugar by 256\n:: http://256.io/\n:: "+config.meta.repo,console.log(m,"color: grey; font-family: Menlo, monospace;")},detect:function(){if(window.outerHeight-window.innerHeight>100||window.outerWidth-window.innerWidth>100)return this.llc(),clearInterval(this.console)}},_.i();
var config;config={color:{blue1:"#00AFAA",orange1:"#F29934",orange2:"#9E5D07",orange3:"#D1A97E",khaki1:"#CAAF90",peach1:"#F8F5F2",white1:"#ffffff",black1:"#000000",grey1:"#777777"},font:{h1:{"font-family":"aquilone regular","font-size":"48px"},h2:{"font-family":"sackers gothic","font-size":"22px","letter-spacing":"4px"},h3:{"font-family":"sackers gothic","font-size":"16px","letter-spacing":"2px","line-height":"22px"},h4:{"font-family":"aquilone regular","font-size":"32px"},c1:{"font-family":"averta light","font-size":"18px"},c1s:{"font-family":"averta light","font-size":"14px"},c1ss:{"font-family":"averta light","font-size":"10px"},c1sb:{"font-family":"averta bold","font-size":"14px"},c2:{"font-family":"averta bold","font-size":"28px"},c3:{"font-family":"averta bold","font-size":"14px"},c3s:{"font-family":"averta bold","font-size":"11px"},c4:{"font-family":"averta bold","font-size":"20px"},c5:{"font-family":"averta bold","font-size":"18px"},c6:{"font-family":"aquilone regular","font-size":"16px"}},meta:{url:"http://fullsun.com/",title:"full sun",description:"california conscious cannabis",keywords:"full sun, cannabis, california",tracking_id:31337,share:"images/logo1.png",repo:"https://github.com/acidjazz/fullsun",map_api_key:"AIzaSyAIq84pji4ovumANXXolMqkGwQX8kM1mKc",email:"info@fullsun.com",instagram:"https://www.instagram.com/fullsun_/",twitter:"https://twitter.com/FullSun2",facebook:"https://www.facebook.com/Full-Sun-648952271971685/"},products:[{name:"vape pen set",title:"Cannabis Oil Vaporization Set",description:["Designed for on-the-go enjoyment, this premium vape set includes our Single Origin cannabis oil. Use throughout the day to incite creativity, calm the mind or deepen relaxation levels.","Save yourself time and effort, this one cartridge can be used for endless occasions. The perfect dose of goodness anytime you need it — sunup to sundown.","Includes battery, 500mg cartridge and charger.  Solvent Free. Product tested and held  to the highest standards for purity and consistent THC potency.","<i>Experience: A clear-headed, focused high perfect for daytime and nighttime use.</i>"],thumb:"pen_set_thumb.jpg",image:"pen_set.jpg",detail:[{left:"THC",right:">85%"},{left:"STRAIN",right:"Hybrid"},{left:"PRODUCT ORIGIN",right:"Humboldt County, CA"}]},{name:"rise",title:"Solvent-Free Single Origin Cartridge Refill",description:["Mornings just got brighter. Our Rise, all-natural, single origin oil cartridges are available in 4 different terpene enriched flavors: Dank Berry, Enlighten”mint”, TropiCali and Natural.","<i>Select a tone to enhance your day:</i>"],thumb:"rise_thumb.jpg",image:"rise.jpg",flavors:[{name:"Dank Berry",desc:["Imagine waking up feeling completely refreshed and ready to conquer the day.","Feel: Creative, alert, and inspired"]},{name:"Enlighten”mint”",desc:["To Yoga or not to Yoga? Whether you sweat through it or slept through it, we got you covered.","Feel: Mindful, focused, and calm"]},{name:"TropiCali",desc:["You hopped on a plane and just touched down on a tropical oasis. Welcome to island living, operation unwind.","Feel: Happy, relaxed, and carefree"]},{name:"Natural",desc:["Green smoothied for breakfast, ate salad for lunch, power cycled after work — that was the idea anyways.","Feel: Clear-headed, energized, and refreshed"]}],detail:[{left:"THC",right:">85%"},{left:"STRAIN",right:"Hybrid"},{left:"PRODUCT ORIGIN",right:"Humboldt County, CA"}]},{name:"shine",title:"Clear Cannabis Concentrate",description:["Shine stronger a little longer with our 100% solvent-free, clear cannabis concentrate. We use a proprietary extraction method to distill a clean, clear oil from our High-Definition, Single Origin OG Kush. An indica-leaning hybrid, our oil is totally pure and totally potent.","Our concentrates can be used in loadable vape pens, oil rigs, or smeared onto joints for a little extra strength.","Product tested and held  to the highest standards for purity and consistent THC potency.","Experience: A balanced body and head high. Mellow & relaxed."],thumb:"shine_thumb.jpg",image:"shine.jpg",detail:[{left:"THC",right:">85%"},{left:"STRAIN",right:"Hybrid"},{left:"PRODUCT ORIGIN",right:"Humboldt County, CA"}]},{name:"flowers",title:"Full Blooms",description:["Naturally grown and harvested under Humboldt County sunshine, our flowers are meticulously monitored and handled with the utmost care to ensure premium quality.","As native Humboldt growers, we have a pulse on what’s in demand to make sure we provide the newest and most exciting strains.","All of our flowers are lab-tested tested and held to the highest standards for purity and consistent THC potency."],thumb:"flowers_thumb.jpg",image:"flowers.jpg",flavors:[{name:"High-Definition OG Kush",tag:"hd",thc:"26%",desc:["One of the most legendary cannabis strains, OG Kush is a strong, Indica-leaning hybrid renowned for its powerful potency, medicinal qualities and unique taste. The strain smells and tastes like sweet lemons with a hint of woody earthiness. What makes ours High-Definition? That’s our best kept secret."]},{name:"Sunset Sherbert",tag:"sherbert",thc:"24-26%",desc:["An Indica-dominant hybrid, this is a powerful cross between the Girl Scout Cookies and Pink Panties strains. Known for its uplifting jolt of cerebral energy, Sunset Sherbet tastes like sweet citrus and honey with an earthy aftertaste."]},{name:"Sour Tangie",tag:"sour",thc:"24%",desc:["An 80% Sativa-dominant cross between East Coast Sour Diesel and Tangie, this strain is known for its extreme, mouthwatering flavor. Strong citrus notes are met with an earthy diesel aftertaste. A well-balanced strain perfect for full body relaxation."]},{name:"Black Lime Reserve",tag:"lime",thc:"24-26%",desc:["A boutique, Indica strain with a reputable Emerald Triangle heritage. A powerful cross between Northern Lights, Purple Kush and Chemdawg Special Reserve strains. Refreshing and exuberant with a pronounced mix of sweet citrus, peppery spice and juicy lime."]}],detail:[{left:"THC",right:"24-26%"},{left:"STRAIN",right:"Hybrid"},{left:"PRODUCT ORIGIN",right:"Humboldt County, CA"}]}],vendors:[{name:"Humboldt Patient Resource Center",placeId:"ChIJW3sRtAVX0VQR7q7_hDDcnAs",link:"http://hprcarcata.com/",image:"hprc.png"},{name:"Blum Oak",placeId:"ChIJNUi-AqyAj4AROCPitWxtpsM",link:"http://blumoak.com/",image:"blum.jpg"}],copy:{about:{title:"about us",copys:["We are the smallest grains of rich, healthy soil. We are the oxygen thick air provided by the forests of Humboldt County. We are the caring hands that turn high quality, chemical-free cannabis into beautifully crafted concentrates, allowing your life to be a little easier.","Lastly, we are the rays of sunshine that spill down upon the mountaintop — the bright and most powerful source that enriches all of our cannabis at Full Sun."]},contact:{title:"contact us",subtitle:"Want more sungrown goodness?"},process:{title:"our process",copys:['All of our products consist of Single Origin, High-Definition OG Kush cannabis. While others call this their “Reserve” we call this our "All the Time”. We hand select our small group of producers for their consistent commitment to quality and excellence. They work their magic with our proprietary strain which allows us to maintain quality, consistency, <i>and</i> quantity. Raised out of the most reputable growing region in the world, our Humboldt County farms stays rooted in consciously growing the best and brightest sungrown cannabis.',"Extracting oil from plants has been widely used across industries for centuries. Finding the right cannabis extraction process has taken years, but we have designed and perfected a model that makes our products superior. Our proprietary extract method is done at our state of the art facility in Humboldt County. The result is an ultra-refined oil that is lab tested and 100% solvent-free, every single time. Your well-being is our top priority."]}}};
var Delay;Delay={height:!1,win:!1,logo:!1,header:!1,peach:!1,filled:!1,i:function(){return this.win=$(window),this.height=this.win.height(),this.logo=$(".section.section_top > .middle"),this.header=$("header"),this.peach=_.hex2rgb(config.color.peach1),$(window).scroll(this.checkScroll)},checkScroll:function(){var e,l;return l=(100*Delay.win.scrollTop()/Delay.height).toFixed(2),l>100?(Delay.filled===!1&&($("header").addClass("filled"),Delay.filled=!0),!0):(Delay.filled===!0&&($("header").removeClass("filled"),Delay.filled=!1),e=(l/100).toFixed(1)/2,0!==Index.offset?Delay.header.css("background-color","rgba("+Delay.peach.r+","+Delay.peach.g+","+Delay.peach.b+","+e+")"):void 0)}};
var Fold;Fold={inViewport:function(t){var n;return n=t.getBoundingClientRect(),(n.top>=0||n.bottom>=0)&&(n.top<=window.innerHeight||n.bottom<=window.innerHeight)},views:function(t,n){var o;return o={},t.each(function(t,o){var i,e,r;return r=o.getBoundingClientRect(),e=$(o).attr("id"),void 0===e||((r.top>=0||r.bottom>=0)&&(r.top<=window.innerHeight||r.bottom<=window.innerHeight)&&(i=window.innerHeight/2,r.top<i&&r.bottom>i)?n(e):void 0)})}};
var Gate;Gate={i:function(){return this.handlers()},handlers:function(){return $(".gate > .gradient > .middle > .buttons > .button").on("click",this.yesno)},yesno:function(){return"NO"===$(this).text()?location.href="http://www.buildabear.com/":"YES"===$(this).text()?(_.off(".gate"),Cookies.set("gate",!0,{expires:1})):void 0}};
var Index;Index={offset:-86,i:function(){return Gate.i(),Delay.i(),Product.i(),$(window).width()<1e3&&(this.offset=0),this.handlers(),setInterval(Index.menu,500)},handlers:function(){return $("header > .burger").click(this.burgerHandler),$("header > .inner > .menu > .items > .inner > .item").click(this.menuHandler),$("header > .inner > .logo").click(this.menuHandler)},burgerHandler:function(){return _.swap("header > .burger"),_.swap("header > .inner > .menu > .items")},menuHandler:function(){return _.on("header > .burger"),_.off("header > .inner > .menu > .items"),Index.section($(this).data("item"))},section:function(e){return setTimeout(function(){return $("html, body").scrollTo("#"+e,{duration:500,offset:Index.offset}),location.hash=e},100)},menu:function(){return Fold.views($(".section"),function(e){if(_.off("header > .inner > .menu > .items > .inner > .item"),_.on(".item_"+e),"products"!==e&&Product.details===!0)return Product.closeClick()})}};
var Map;Map={map:!1,places:{},i:function(){var e,a,t,l,o;for(this.map=new google.maps.Map(document.getElementById("map"),{center:{lat:39.6092474,lng:-123.4453755},zoom:7,styles:this.styles,options:this.options}),l=new google.maps.places.PlacesService(this.map),t=config.vendors,e=0,a=t.length;e<a;e++)o=t[e],l.getDetails({placeId:o.placeId},function(e,a){if(Map.places[e.place_id]=e,_.objc(config.vendors)===_.objc(Map.places))return Map.markers()});return this.handlers()},handlers:function(){return $(".section_locations > .place > .close").click(this.placeCloseHandler)},markers:function(){var e,a,t,l,o,s;l=[],s=this.places;for(e in s)o=s[e],a=new google.maps.Marker({map:Map.map,position:o.geometry.location,icon:{url:"/images/map/marker.png",scaledSize:new google.maps.Size(60,60),origin:new google.maps.Point(0,0)},place:{placeId:o.place_id,location:o.geometry.location}}),google.maps.event.addListener(a,"click",Map.markerHandler),l.push(a);return t=new MarkerClusterer(Map.map,l,{imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"})},markerHandler:function(){var e;return e=Map.places[this.place.placeId],e.photos?($(".section_locations > .place > .inner > .image").attr("src",e.photos[0].getUrl({maxWidth:260,maxHeight:200})),_.on(".section_locations > .place > .inner > .image")):_.off(".section_locations > .place > .inner > .image"),$(".section_locations > .place > .inner > .name").text(e.name),$(".section_locations > .place > .inner > .name").attr("href",e.url),$(".section_locations > .place > .inner > .address").html(e.formatted_address),$(".section_locations > .place > .inner > .phone").html(e.formatted_phone_number),_.on(".section_locations > .place"),Map.map.setZoom(16),Map.map.setCenter(this.getPosition()),console.log(e)},placeCloseHandler:function(){return _.off(".section_locations > .place"),Map.map.setZoom(11)},options:{scrollwheel:!1,mapTypeControl:!1,fullscreenControl:!1},styles:[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#9e5d07"}]},{featureType:"administrative.country",elementType:"labels.text.fill",stylers:[{color:"#f29934"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#9e5d07"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f8f5f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#f29934"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#00afaa"},{visibility:"on"}]}]};
var Product;Product={tl:!1,details:!1,i:function(){return this.tl=new TimelineMax({repeat:0}),this.handlers()},handlers:function(){return $(".section_products > .productlist > .product").click(this.productClick),$(".section_products > .details > .detail > .close").click(this.closeClick),$(".section_products > .details > .detail > .copy > .inner > .flavors > .flavor > .name").click(this.flavor)},flavor:function(){var t,e,a,i;return t=$(this).parent(),e=_.state(t),_.off(".flavors > .flavor"),e?_.off(t):(_.on(t),a=$(this),void 0!==a.data("tag")?(_.off(".image.tag"),_.on(".image.tag.tag_"+a.data("tag")),i=a.data("thc"),$(".data:first-child > .right").text(i)):void 0)},productClick:function(){var t,e,a,i,o,s,n;for(o=$(this).data("product"),_.on("[id='detail "+o+"']"),_.on("[id='image "+o+"']"),Product.details=!0,0!==Index.offset&&Index.section("products"),e=document.getElementsByClassName("sunEmpty"),s=[],a=0,i=e.length;a<i;a++)t=e[a],n=new TimelineMax({repeat:0}),s.push(n.to(t,1,{morphSVG:{shape:"#sunFilled",shapeIndex:3},ease:Expo.easeInOut}));return s},closeClick:function(){var t,e,a,i,o;for(e=document.getElementsByClassName("sunEmpty"),a=0,i=e.length;a<i;a++)t=e[a],o=new TimelineMax({repeat:0}),o.to(t,.01,{morphSVG:"#sunEmpty",ease:Expo.easeInOut});return _.off(".section_products > .details > .detail"),_.off(".section_products > .details > .image"),Product.details=!1}};