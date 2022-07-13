$(document).ready(() => {
  $(".owl-prefooter").owlCarousel({
    loop: true,
    autoplay: true,
    autoWidth: true,
    margin: 16,
  })

  $(".owl-banner").owlCarousel({
    loop: true,
    autoplay: true,
    autoWidth: true,
    items: 1,
    center: true,
    dots: true,
    autoplayHoverPause: true,
  })

  const second = 1000;
  const div = $("div.comments");
  div.animate({
    scrollTop: div.height(),
  }, 30 * second)
  div.mouseenter(() => {
    div.stop();
  }).mouseleave(() => {
    div.animate({
      scrollTop: div.height(),
    }, 30 * second)
  })
})
