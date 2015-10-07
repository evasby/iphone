$(document).ready(function(){
  $('.myslider_wrap').bxSlider({
    mode: 'fade',
    controls: false,
    pagerCustom: '.myslider_pager'
  });
	var visible = '95%';
  var hidden = 50;
  /*********************************************************************/
	var waypoint_main1_1 = new Waypoint({
    element: $('#main1'),
    handler: function(dir) {
      if (dir === 'down') {
        $('#main1').bgLoaded({
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
});