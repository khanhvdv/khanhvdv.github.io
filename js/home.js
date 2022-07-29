$(document).ready(() => {
  // $(".owl-prefooter").owlCarousel({
  //   loop: true,
  //   autoplay: true,
  //   autoWidth: true,
  //   margin: 16,
  //   slideTransition: "linear",
  //   autoplaySpeed: 6000,
  //   smartSpeed: 6000,
  //   dots: false,
  //   rtl: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   freeDrag: false,
  //   responsive: {
  //     0: {
  //       items: 2,
  //     },
  //     320: {
  //       items: 2,
  //     },
  //     640: {
  //       items: 3,
  //     },
  //   },
  // })

  $(".owl-prefooter").infiniteslide({
    direction: "right",
    pauseonhover: false
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
    speed: 3000,
    spaceBetween: 23,
    autoplay: {
      delay: 3000,
    },
    slidesPerView: 1,
    loop: true,
  })
})
