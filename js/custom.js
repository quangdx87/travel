//menu 
$(document).ready(function(){
  var heightCol =  $(".showcase .col-1").height() - 1 ;
  $(".showcase .col-2").css({'height' : heightCol, 'overflow' : 'hidden'});

  $( window ).resize(function() {
   var heightCol =  $(".showcase .col-1").height() - 1 ;
   $(".showcase .col-2").css({'height' : heightCol, 'overflow' : 'hidden'});
 });
  
  $(".showcase .col-2").css({'width': '54%', 'height' : height, 'overflow' : 'hidden'});
  $('.scrolltop').click(function() {
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
  });

  $("#datepicker").datepicker();

  $(".close-btn").click(function() {
    var height =  $(".showcase .col-1").height() - 6;
    $(".box-search").toggle();
    $(".showcase .col-2").css({'width': '54%', 'height' : height, 'overflow' : 'hidden'});
  });

  $("#open-menu").click(function() {
    $("body").toggleClass('menu-open');
  });

  $(window).scroll(function(){
    var sticky = $('#header'),
    scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });


});