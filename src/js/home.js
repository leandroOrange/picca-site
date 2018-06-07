$(document).ready(function(){

  const $header = $('#header');

  $header.addClass('Header--home');


  // Globals
  const $ourWindow = $(window);


  // Back Header
  const $headerHome = $('.Header--home');

  $ourWindow.on('load scroll', () => {

    if($ourWindow.scrollTop() > 60){
      $headerHome.addClass('show-back');
    }else{
      $headerHome.removeClass('show-back');
    }

  })
})