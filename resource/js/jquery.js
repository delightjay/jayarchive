$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $("div.logo > svg").css({
      width: (100 - scroll/5) + "%"
    })
});

// $(document).ready(function() {
//   var Offset = $('div.main_wrap').offset();
//   $(window).scroll(function() {
//     if ($(document).scrollTop() > Offset.top) {
//       $('header').addClass('logo_fixed');
//     }
//     else {
//       $('header').removeClass('logo_fixed');
//     }
//   });
// });

$(function() {
  $(window).scroll(function() {
      if ($(this).scrollTop() >= Math.ceil($('div.container').offset().top)) {
        $('.st0').css('fill','#08b459');
      } else {
        $('.st0').css('fill','#ffffff');
      }
  });
});

$(function() {
  $(window).scroll(function() {
      if ($(this).scrollTop() >= Math.ceil($('div.container').offset().top)) {
        $('header').addClass('logo_fixed');
      }
      else {
        $('header').removeClass('logo_fixed');      
      }
  });
});

$(document).ready(function(){
  $('ul.tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');

      $('ul.tabs li').removeClass('current');
      $('.tab_content').removeClass('current');

      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
  });
});

$(function() {
  $('button.nav_btn').click(function(){
    $('div.menu_wrap').addClass('on');
  })
});
$(function() {
  $('button.close').click(function(){
    $('div.menu_wrap').removeClass('on');
  })
});