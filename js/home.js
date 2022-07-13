$(document).ready(() => {
  $(".owl-prefooter").owlCarousel({
    loop: true,
    autoplay: true,
    autoWidth:true,
    margin: 16,
  });

  $(".owl-banner").owlCarousel({
    loop: true,
    autoplay: true,
    autoWidth:true,
    items: 1,
    center: true,
    dots: true,
    autoplayHoverPause: true,
  })
})
