"use strict";

$(document).ready(function(){

  const $InternaDetalle = $('#interna-detalle-carrousel');

  $InternaDetalle.owlCarousel({
    loop: true,
    nav: true,
    dots: false, 
    items: 1,
    thumbs: true,
    thumbImage: true,
    thumbContainerClass: 'owl-thumbs',
    thumbItemClass: 'owl-thumb-item'
  })
});