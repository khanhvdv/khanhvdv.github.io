$(document).ready(() => {
  $(".owl-prefooter").infiniteslide({
    direction: "right",
    pauseonhover: false,
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
    autoHeight: true,
    pagination: {
      el: ".custom-swiper-pagination",
      clickable: true,
    },
    spaceBetween: 23,
    speed: 3000,
    autoplay: {
      delay: 3000,
    },
    slidesPerView: 1,
    loop: true,
    on: {
      init: function () {
        setSlideHeight(this)
      },
      slideChangeTransitionEnd: function () {
        setSlideHeight(this)
      },
    },
  })

  function setSlideHeight(that) {
    $(".swiper-slide").css({ height: "auto" })
    var currentSlide = that.activeIndex
    var newHeight = $(that.slides[currentSlide]).height()

    $(".swiper-wrapper,.swiper-slide").css({ height: newHeight })
    that.update()
  }
})
