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
    dots: false,
    rtl: true,
    responsive: {
      0: {
        items: 2,
      },
      320: {
        items: 2,
      },
      640: {
        items: 3,
      },
    },
  })

  $(".owl-banner").owlCarousel({
    loop: true,
    autoplay: true,
    autoWidth: false,
    items: 1,
    center: true,
    dots: true,
    autoplayHoverPause: true,
    stagePadding: 0,
    margin: 0,
  })

  new Swiper(".swiper", {
    direction: "vertical",
    pagination: {
      el: ".custom-swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
    },
    slidesPerView: 1,
  })
})
