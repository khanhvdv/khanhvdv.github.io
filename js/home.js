$(document).ready(() => {
  $(".owl-prefooter").owlCarousel({
    loop: true,
    autoplay: true,
    autoWidth: false,
    autoheight: false,
    margin: 16,
    slideTransition: "linear",
    autoplaySpeed: 6000,
    smartSpeed: 6000,
    items: 5.5,
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

  const second = 500
  const div = $("div.comments")
  div.animate(
    {
      scrollTop: div.height(),
    },
    30 * second
  )
  div
    .mouseenter(() => {
      div.stop()
    })
    .mouseleave(() => {
      div.animate(
        {
          scrollTop: div.height(),
        },
        30 * second
      )
    })
})
