var gptadslots = [];
window.googletag = window.googletag || {cmd: []};
dfp_keywords = getKeywords();

// initialize pbjs
var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];
    
gpt_slot_objects = [];

googletag.cmd.push(function() {

//Adslot 1 declaration
    var REFRESH_KEY = 'refresh';
    var REFRESH_VALUE = 'true';
    // This slot is allowed to refresh, as it contains the targeting keys which have been declared for refresh.


    gpt_azan = googletag.defineSlot('/4905536/detik_daerah_mobile/detik_bali/billboard', [[320, 150], [320, 100]], 'div-gpt-ad-1646728244180-0').
      setTargeting(REFRESH_KEY, REFRESH_VALUE).
      addService(googletag.pubads());

    //gpt_billboard = googletag.defineSlot('/4905536/detik_daerah_mobile/detik_bali/billboard', [[320, 150], [320, 100]], 'div-gpt-ad-1646728244180-0').
      //setTargeting(REFRESH_KEY, REFRESH_VALUE).
      //setTargeting('test', 'event').
      //addService(googletag.pubads());
      
    gpt_staticbanner1 = "";
      //googletag.defineSlot('/4905536/detik_daerah_mobile/detik_bali/static_banner1', [[300, 250], [320, 100]], 'div-gpt-ad-1646728856686-0').
      //setTargeting('test', 'lazyload').
      //setTargeting(REFRESH_KEY, REFRESH_VALUE).
      //setTargeting('test', 'event').
      //addService(googletag.pubads());

    gpt_staticbanner2 = "";
      //googletag.defineSlot('/4905536/detik_daerah_mobile/detik_bali/static_banner2', [300, 250], 'div-gpt-ad-1646728904219-0').
      //setTargeting(REFRESH_KEY, REFRESH_VALUE).
      //setTargeting('test', 'event').
      //addService(googletag.pubads());

    gpt_mmr = "";
    //googletag.defineSlot('/4905536/detik_daerah_mobile/detik_bali/mmr', [300, 250], 'div-gpt-ad-1646728450863-0').
      //setTargeting(REFRESH_KEY, REFRESH_VALUE).
      //setTargeting('test', 'event').
      //addService(googletag.pubads());
      
    
    gpt_newstag = googletag.defineSlot('/4905536/detik_daerah_mobile/detik_bali/newstag', [1, 1], 'div-gpt-ad-1686733951533-0').
      setTargeting('test', 'lazyload').
      setTargeting(REFRESH_KEY, REFRESH_VALUE).
      setTargeting('test', 'event').
      addService(googletag.pubads());
      
      
    // Number of seconds to wait after the slot becomes viewable.
    var SECONDS_TO_WAIT_AFTER_VIEWABILITY = 10;
    googletag.pubads().addEventListener('impressionViewable', function(event) {
      var slot = event.slot;
      if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
        setTimeout(function() {
          googletag.pubads().refresh([slot]);
        }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
      }
    });
      
gpt_megabillboard2 = googletag.defineSlot('/4905536/detik_daerah_mobile/detik_bali/mega_billboard', [[1, 1], [320, 480]], 'div-gpt-ad-1646728316272-0').addService(googletag.pubads());
      
//googletag.defineSlot('/4905536/detik_daerah_mobile/detik_bali/billboard', [1, 1], 'div-gpt-ad-1679505370713-0').addService(googletag.pubads());

gpt_parallax1fixesize = "";

gpt_parallax2fixesize = "";

gpt_parallaxdetailfixesize = googletag.defineSlot('/4905536/detik_daerah_mobile/detik_bali/parallax_detail', [[300, 250], [300, 600], [320, 480]], 'div-gpt-ad-1646728804341-0').addService(googletag.pubads());

//googletag.defineSlot('/4905536/detik_daerah_mobile/detik_bali/parallax', [[300, 250], [300, 600], [1, 1]], 'div-gpt-ad-1646728672426-0').addService(googletag.pubads());

//googletag.defineSlot('/4905536/detik_daerah_mobile/detik_bali/parallax2', [[300, 250], [300, 600], [1, 1]], 'div-gpt-ad-1646728733553-0').addService(googletag.pubads());

gptadslots[0] = "";
gpt_stickystaticclose = googletag.defineSlot('/4905536/detik_daerah_mobile/detik_bali/sticky_static', [[1, 1], [320, 50], [320, 100]], 'div-gpt-ad-1646728977561-0').addService(googletag.pubads());

gpt_staticbanner3 = "";


//googletag.defineSlot('/4905536/detik_daerah_mobile/detik_bali/static_banner3', [[320, 100], [300, 250]], 'div-gpt-ad-1646728938844-0').addService(googletag.pubads());

//googletag.defineSlot('/4905536/detik_daerah_mobile/detik_bali/newsfeed1', ['fluid'], 'div-gpt-ad-1646728499915-0').addService(googletag.pubads());

//googletag.defineSlot('/4905536/detik_daerah_mobile/detik_bali/newsfeed2', ['fluid'], 'div-gpt-ad-1646728536549-0').addService(googletag.pubads());

//googletag.defineSlot('/4905536/detik_daerah_mobile/detik_bali/newsfeed3', ['fluid'], 'div-gpt-ad-1646728566915-0').addService(googletag.pubads());

//googletag.defineOutOfPageSlot('/4905536/detik_daerah_mobile/detik_bali/newstag', 'div-gpt-ad-1646728639486-0').addService(googletag.pubads());



gpt_inbetween = googletag.defineOutOfPageSlot('/4905536/detik_daerah_mobile/detik_bali/inbetween', 'div-gpt-ad-1658811419777-0').addService(googletag.pubads());

gpt_staticdetail = googletag.defineSlot('/4905536/detik_daerah_mobile/detik_bali/static_detail', [[1, 1], [300, 250]], 'div-gpt-ad-1706604285192-0').addService(googletag.pubads());

gpt_cbinternal = "";
//googletag.defineSlot('/4905536/detik_mobile/wp/cb_internal', [300, 250], 'div-gpt-ad-1707842985557-0').addService(googletag.pubads());
gpt_billboard = "";

gpt_slot_objects.push(gpt_azan, gpt_megabillboard2,gpt_staticbanner1, gpt_staticbanner2, gpt_stickystaticclose);

//conditional empty parallax detail 
if (document.getElementById('div-gpt-ad-1646728804341-0') != null) {
gpt_slot_objects.push(gpt_parallaxdetailfixesize);
}

//conditional empty static detail 
if (document.getElementById('div-gpt-ad-1706604285192-0') != null) {
gpt_slot_objects.push(gpt_staticdetail);
}

//conditional empty cb internal 
//if (document.getElementById('div-gpt-ad-1707842985557-0') != null) {
//gpt_slot_objects.push(gpt_cbinternal);
//}

//conditional empty newstag 
if (document.getElementById('div-gpt-ad-1686733951533-0') != null) {
gpt_slot_objects.push(gpt_newstag);
}

//conditional empty inbetween 
if (document.getElementById('div-gpt-ad-1658811419777-0') != null) {
gpt_slot_objects.push(gpt_inbetween);
}



googletag.pubads().addEventListener('slotRenderEnded', function(event) {


if (event.slot == gpt_megabillboard2 && !event.isEmpty) {
var containsAdMg2 = !event.isEmpty,
widthMg2 = event.size[0],
heightMg2 = event.size[1];
$('.megabillboard').css({
'background-color': '#000',
'height': '522px'
});
$(".ads-slot-mb-container, .megabillboard_container, .MgSlot").css(
"background-color", "#000");
$(".megabillboard-close").css("color", "#fff");
if (heightMg2 == 1 && widthMg2 == 1) {
$('.megabillboard_container').height('510px');
}
window.onscroll = function () {
MegaBillSticky();
};
}

if (event.slot == gpt_billboard && !event.isEmpty) {
var containsAdBB = !event.isEmpty,
widthBB = event.size[0],
heightBB = event.size[1];
$(".bb .scrollpage").show();
}
if (event.slot == gpt_azan && !event.isEmpty) {
var containsAdAzan = !event.isEmpty,
widthAzan = event.size[0],
heightAzan = event.size[1];
$(".bb .scrollpage").show();
var divazan = document.querySelectorAll("#tsbillboard");
for (var az = 0; az < 4; az++) {
divazan[az].remove();
}
}
if (event.slot == gpt_staticbanner1 && !event.isEmpty){
var containsAdSB1 = !event.isEmpty,
widthSB1 = event.size[0],
heightSB1 = event.size[1];
$("#sb1").css("width","100%");
$(".sb1 .scrollpage").show();
var divsToRemoveMR = document.querySelectorAll(".carousel-container");
for (var i = 0; i < 4; i++) {
divsToRemoveMR[i].remove();
}
}
if (event.slot == gpt_staticbanner2 && !event.isEmpty){
var containsAdSB2 = !event.isEmpty,
widthSB2 = event.size[0],
heightSB2 = event.size[1];
$("#sb2").css("width","100%");
$(".sb2 .scrollpage").show();
}
if (event.slot == gpt_staticbanner3 && !event.isEmpty){
var containsAdSB3 = !event.isEmpty,
widthSB3 = event.size[0],
heightSB3 = event.size[1];
$("#sb3").css("width","100%");
$(".sb3 .scrollpage").show();
}
if (event.slot == gpt_mmr && !event.isEmpty){
var containsAdMMR = !event.isEmpty,
widthmmr = event.size[0],
heightmmr = event.size[1];
$("#mmr").css("width","100%");
$(".mmr .scrollpage").show();
}

if (event.slot == gpt_stickystaticclose && !event.isEmpty) {
var containsAdssb = !event.isEmpty,
widthssb = event.size[0],
heightssb = event.size[1];

if ( heightssb == 50 && widthssb == 360){
setTimeout(function(){
$('.ssb-close').css("display", "block");
}, 3000);
}
if ( heightssb == 50 && widthssb == 320){
setTimeout(function(){
$('.ssb-close').css("display", "block");
}, 3000);
}
if ( heightssb == 1 && widthssb == 1){
$('.ssb-close').css("display", "none");
$(".sticky-share").css("bottom","120px");
$(".bottom-sticky").css("bottom","120px");
}
if ( heightssb == 100 && widthssb == 320){
setTimeout(function(){
$('.ssb-close').css("display", "block");
}, 3000);
$(".footer_banner").height(heightssb);
$(".back-top").css("bottom", "217px");
$(".notif_breakingnews").css("bottom", "120px");
$(".sticky-share").css("bottom","120px");
$(".bottom-sticky").css("bottom","120px");
}
}

if (event.slot == gpt_parallax1fixesize && !event.isEmpty) {
  var containsAdPX1 = !event.isEmpty,
    widthPX1 = event.size[0],
    heightPX1 = event.size[1];
  $('.para1').show();
  if (heightPX1 == 250 && widthPX1 == 300) {
    $('.para1').css("padding-bottom", "0px");
    $('.para1 .para').css({"height": "250px","margin":"10px auto 20px"});
    console.log("jalan");
    $('.para1 .para_fix').css("position", "relative");
    $('.para1 .para_ads').css({
      "top": "0",
      "transform": "translateX(-50%)",
      "-moz-transform": "translateX(-50%)",
      "-webkit-transform": "translateX(-50%)",
      "-ms-transform": "translateX(-50%)",
      "-o-transform": "translateX(-50%)"
    });
    $('.para1 #para_caption').hide();
    $('.para1 #para_caption2').hide();
  }
}
if (event.slot == gpt_parallax2fixesize && !event.isEmpty) {
  var containsAdPX2 = !event.isEmpty,
    widthPX2 = event.size[0],
    heightPX2 = event.size[1];
  $('.para2').show();
  if (heightPX2 == 250 && widthPX2 == 300) {
    $('.para2').css("padding-bottom", "0px");
    $('.para2 .para').css({"height": "250px","margin":"10px auto 20px"});
    console.log("jalan");
    $('.para2 .para_fix').css("position", "relative");
    $('.para2 .para_ads').css({
      "top": "0",
      "transform": "translateX(-50%)",
      "-moz-transform": "translateX(-50%)",
      "-webkit-transform": "translateX(-50%)",
      "-ms-transform": "translateX(-50%)",
      "-o-transform": "translateX(-50%)"
    });
    $('.para2 #para_caption').hide();
    $('.para2 #para_caption2').hide();
  }
}



if (event.slot == gptadslots[0] && !event.isEmpty){
$('.footer_banner').show();
}

});

googletag.pubads().enableSingleRequest();
googletag.pubads().disableInitialLoad();
googletag.pubads().setTargeting('test', ['refresh']);
googletag.pubads().setTargeting('site', ['detikcom']);
googletag.pubads().setTargeting('section', ['news']);
googletag.pubads().setTargeting('medium', ['mobile']);
googletag.pubads().setTargeting('keyvalue', dfp_keywords);
googletag.pubads().setTargeting('militaryconflict', dfp_keywords);
googletag.pubads().setTargeting('ilegal_drugs', dfp_keywords);
googletag.pubads().setTargeting('adult', dfp_keywords);
googletag.pubads().setTargeting('death_injury', dfp_keywords);
googletag.pubads().setTargeting('hate_speech', dfp_keywords);
googletag.pubads().setTargeting('spam_harmfulsite', dfp_keywords);
googletag.pubads().setTargeting('tobacco', dfp_keywords);
googletag.pubads().setTargeting('disaster', dfp_keywords);
googletag.pubads().setTargeting('politic', dfp_keywords);
googletag.pubads().setTargeting('obscenity', dfp_keywords);
googletag.pubads().setTargeting('terorism', dfp_keywords);
googletag.pubads().setTargeting('arms', dfp_keywords);
googletag.pubads().setTargeting('crime', dfp_keywords);
googletag.pubads().setTargeting('online_piracy', dfp_keywords);
googletag.pubads().collapseEmptyDivs(true);
googletag.enableServices();

// request pbjs bids when it loads
  pbjs.que.push(function() {
    pbjs.rp.requestBids({
      callback: callAdserver,
      gptSlotObjects: gpt_slot_objects
    });
});

// failsafe in case PBJS doesn't load
setTimeout(function() {
callAdserver(gpt_slot_objects);
}, 2000);
//Lazyload
googletag.pubads().enableLazyLoad({
fetchMarginPercent: 1000,
renderMarginPercent: 5,
mobileScaling: 2.0
});
});

function callAdserver(gptSlots) {
    if (pbjs.adserverCalled) return;
    pbjs.adserverCalled = true;
    googletag.pubads().refresh(gptSlots);
  }
