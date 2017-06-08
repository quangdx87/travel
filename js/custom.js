//menu 
$(document).ready(function(){
  $('.scrolltop').click(function() {
    $('html, body').animate({scrollTop: 0}, 800);
  return false;
    });

    	$("#datepicker").datepicker();

    $(".close-btn").click(function() {
      $(".box-search").toggle();
    });

  	$("#open-menu").click(function() {
        $("body").toggleClass('menu-open');
  	});



});