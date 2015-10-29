$(document).ready(function(){
  $('.myslider_wrap').bxSlider({
    mode: 'fade',
    controls: false,
    pagerCustom: '.myslider_pager'
  });
  $('.main1').bxSlider({
    mode: 'fade',
    controls: false,
    pager: false,
    auto: true
  });
	var visible = '95%';
  var hidden = 50;
  /*********************************************************************/
  var waypoint_menu1 = new Waypoint({
    element: $('.header_bottom'),
    handler: function(dir) {
      if (dir === 'down') {
        $('.header_bottom').addClass('header_bottom__fixed');
      } else{
        $('.header_bottom').removeClass('header_bottom__fixed');
      }
    }
  })
  /*********************************************************************/
	var waypoint_main1_1 = new Waypoint({
    element: $('#main1'),
    handler: function(dir) {
      if (dir === 'down') {
        $('.main1_item1').bgLoaded({
          afterLoaded : function(){
            $('#main1').removeClass('fadeOut').addClass('fadeIn');
          }
        });
      } else{
        $('#main1').removeClass('fadeIn').addClass('fadeOut');
      }
    },
    offset: visible
  })
  var waypoint_main1_2 = new Waypoint({
    element: $('#main1'),
    handler: function(dir) {
      if (dir === 'down') {
        $('#main1').removeClass('fadeIn').addClass('fadeOut');
      } else {
        $('#main1').removeClass('fadeOut').addClass('fadeIn');
      };
      
    },
    offset: - $('#main1').innerHeight() + hidden
  })
  /*********************************************************************/
  var waypoint_main2_1 = new Waypoint({
    element: $('#main2'),
    handler: function(dir) {
      if (dir === 'down') {
        $('.main2_image').removeClass('rotateOut').addClass('rotateIn');
      } else{
        $('.main2_image').removeClass('rotateIn').addClass('rotateOut');
      }
    },
    offset: visible
  })
  var waypoint_main2_2 = new Waypoint({
    element: $('#main2'),
    handler: function(dir) {
      if (dir === 'down') {
        $('.main2_image').removeClass('rotateIn').addClass('rotateOut');
      } else {
        $('.main2_image').removeClass('rotateOut').addClass('rotateIn');
      };
      
    },
    offset: - $('#main2').innerHeight() + hidden
  })
  /*********************************************************************/
  var waypoint_main3_1 = new Waypoint({
    element: $('#main3'),
    handler: function(dir) {
      if (dir === 'down') {
        $('.main3_item').removeClass('fadeOut').addClass('fadeIn');
        $('.main3').removeClass('fadeOut').addClass('fadeIn');
      } else{
        $('.main3_item').removeClass('fadeIn').addClass('fadeOut');
        $('.main3').removeClass('fadeIn').addClass('fadeOut');
      }
    },
    offset: visible
  })
  var waypoint_main3_2 = new Waypoint({
    element: $('#main3'),
    handler: function(dir) {
      if (dir === 'down') {
        $('.main3_item').removeClass('fadeIn').addClass('fadeOut');
        $('.main3').removeClass('fadeIn').addClass('fadeOut');
      } else {
        $('.main3_item').removeClass('fadeOut').addClass('fadeIn');
        $('.main3').removeClass('fadeOut').addClass('fadeIn');
      };
      
    },
    offset: - $('#main3').innerHeight() + hidden
  })
  /*********************************************************************/
  var waypoint_main4_1 = new Waypoint({
    element: $('#main4'),
    handler: function(dir) {
      if (dir === 'down') {
        $('.main4').removeClass('fadeOut').addClass('fadeIn');
        $('.why_image').removeClass('rotateOut').addClass('rotateIn');
        $('.how_item:even').removeClass('fadeOutLeft').addClass('fadeInLeft');
        $('.how_item:odd').removeClass('fadeOutRight').addClass('fadeInRight');
      } else{
        $('.main4').removeClass('fadeIn').addClass('fadeOut');
        $('.why_image').removeClass('rotateIn').addClass('rotateOut');
        $('.how_item:even').removeClass('fadeInLeft').addClass('fadeOutLeft');
        $('.how_item:odd').removeClass('fadeInRight').addClass('fadeOutRight');
      }
    },
    offset: visible
  })
  var waypoint_main4_2 = new Waypoint({
    element: $('#main4'),
    handler: function(dir) {
      if (dir === 'down') {
        $('.main4').removeClass('fadeIn').addClass('fadeOut');
        $('.why_image').removeClass('rotateIn').addClass('rotateOut');
        $('.how_item:even').removeClass('fadeInLeft').addClass('fadeOutLeft');
        $('.how_item:odd').removeClass('fadeInRight').addClass('fadeOutRight');
      } else {
        $('.main4').removeClass('fadeOut').addClass('fadeIn');
        $('.why_image').removeClass('rotateOut').addClass('rotateIn');
        $('.how_item:even').removeClass('fadeOutLeft').addClass('fadeInLeft');
        $('.how_item:odd').removeClass('fadeOutRight').addClass('fadeInRight');
      };
      
    },
    offset: - $('#main4').innerHeight() + hidden
  })
  /*********************************************************************/
  var waypoint_main5_1 = new Waypoint({
    element: $('#main5'),
    handler: function(dir) {
      if (dir === 'down') {
        $('.main5').removeClass('fadeOut').addClass('fadeIn');
      } else{
        $('.main5').removeClass('fadeIn').addClass('fadeOut');
      }
    },
    offset: visible
  })
  var waypoint_main5_2 = new Waypoint({
    element: $('#main5'),
    handler: function(dir) {
      if (dir === 'down') {
        $('.main5').removeClass('fadeIn').addClass('fadeOut');
      } else {
        $('.main5').removeClass('fadeOut').addClass('fadeIn');
      };
      
    },
    offset: - $('#main5').innerHeight() + hidden
  })
  /*********************************************************************/
  var waypoint_main6_1 = new Waypoint({
    element: $('#main6'),
    handler: function(dir) {
      if (dir === 'down') {
        $('.main6').removeClass('fadeOut').addClass('fadeIn');
        $('.actions_item').removeClass('fadeOut').addClass('fadeIn');
      } else{
        $('.main6').removeClass('fadeIn').addClass('fadeOut');
        $('.actions_item').removeClass('fadeIn').addClass('fadeOut');
      }
    },
    offset: visible
  })
  var waypoint_main6_2 = new Waypoint({
    element: $('#main6'),
    handler: function(dir) {
      if (dir === 'down') {
        $('.main6').removeClass('fadeIn').addClass('fadeOut');
        $('.actions_item').removeClass('fadeIn').addClass('fadeOut');
      } else {
        $('.main6').removeClass('fadeOut').addClass('fadeIn');
        $('.actions_item').removeClass('fadeOut').addClass('fadeIn');
      };
      
    },
    offset: - $('#main6').innerHeight() + hidden
  })
  /*********************************************************************/
  var waypoint_main7_1 = new Waypoint({
    element: $('#main7'),
    handler: function(dir) {
      if (dir === 'down') {
        $('.main7').removeClass('fadeOut').addClass('fadeIn');
        $('.news_item').removeClass('fadeOut').addClass('fadeIn');
      } else{
        $('.main7').removeClass('fadeIn').addClass('fadeOut');
        $('.news_item').removeClass('fadeIn').addClass('fadeOut');
      }
    },
    offset: visible
  })
  var waypoint_main7_2 = new Waypoint({
    element: $('#main7'),
    handler: function(dir) {
      if (dir === 'down') {
        $('.main7').removeClass('fadeIn').addClass('fadeOut');
        $('.news_item').removeClass('fadeIn').addClass('fadeOut');
      } else {
        $('.main7').removeClass('fadeOut').addClass('fadeIn');
        $('.news_item').removeClass('fadeOut').addClass('fadeIn');
      };
      
    },
    offset: - $('#main7').innerHeight() + hidden
  })
  /*********************************************************************/
});
var map;
var center = new google.maps.LatLng(53.912566, 27.597712);
var myLatlng = new google.maps.LatLng(53.912566, 27.597712);
function initialize() {
  var mapOptions = {
    zoom: 17,
    center: center,
    scrollwheel: false,
    mapTypeControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('gmap'),
      mapOptions);
  var marker = new google.maps.Marker({
      position: myLatlng
  });
  // To add the marker to the map, call setMap();
  marker.setMap(map);
google.maps.event.addListener(map, "rightclick", function(event) {
    var lat = event.latLng.lat();
    var lng = event.latLng.lng();
    // populate yor box/field with lat, lng
    console.log("Lat=" + lat + "; Lng=" + lng);
});
}
google.maps.event.addDomListener(window, 'load', initialize);