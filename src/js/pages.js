$(document).ready(function(){

  const $window = $(window);

  const $firstSection = $('section').first();

  function ajustarMargin(){

    const $headerHeight = $('#header').outerHeight();

    $firstSection.css({
      'margin-top': $headerHeight + 'px'
    })    
  }

  ajustarMargin();

  $window.on('resize', ajustarMargin);

})