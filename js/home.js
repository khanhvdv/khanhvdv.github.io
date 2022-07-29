$(document).ready(() => {
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
