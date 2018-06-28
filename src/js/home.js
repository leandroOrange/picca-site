$(document).ready(function(){

  const $header = $('#header');
  $header.addClass('Header--home');

  const $BannerBPadd = $('.Banner-promo-b');
  $BannerBPadd.addClass('Banner-promo-b-padd-home');

  const $bannerBCols = $('#banner-promo-b-cols');
  $bannerBCols.addClass('col-lg-10');


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