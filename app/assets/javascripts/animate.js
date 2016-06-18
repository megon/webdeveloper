$(document).ready(function(){

  // hide our element on page load
  $('#element-to-animate1').css('opacity', 0);
 
  $('#element-to-animate1').waypoint(function() {
      $('#element-to-animate1').addClass('fadeInDown');
  }, { offset: '50%' }); 

  // hide our element on page load
  $('#element-to-animate2').css('opacity', 0);
 
  $('#element-to-animate2').waypoint(function() {
      $('#element-to-animate2').addClass('fadeInLeft');
  }, { offset: '50%' });

  // hide our element on page load
  $('#element-to-animate3').css('opacity', 0);
 
  $('#element-to-animate3').waypoint(function() {
      $('#element-to-animate3').addClass('fadeInRight');
  }, { offset: '50%' });
 
});