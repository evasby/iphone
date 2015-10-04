$(document).ready(function(){
	var visible = '95%';
  var hidden = 100;
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
});