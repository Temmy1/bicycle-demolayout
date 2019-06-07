$(function () {

  // Scroll Effects

  // $(window).scroll(function() {

  //   let wScroll = $(this).scrollTop();
    
  //   if(wScroll <= $('.header__nav').height()) {

  //     $('.header__nav').css({
  //       'transform' : 'translate(0px, '+ wScroll / .8 +'%)'
  //     });
  //   }
  // });





  // Carousel 
  $('.carousel-wrapper').slick({
    dots: true,
    arrows: false,
    // autoplay: true,
    autoplaySpeed: 5000
  });

});
  
