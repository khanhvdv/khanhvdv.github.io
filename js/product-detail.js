$(document).ready(() => {
  const $productSlide = $(".product-carousel")
  const $productDots = $(".product-dots")

  $productSlide
    .owlCarousel({
      loop: true,
      autoplay: true,
      autoWidth: false,
      items: 1,
      center: true,
      dots: true,
      autoplayHoverPause: true,
    })
    .on("dragged.owl.carousel", function (e) {
      if (e.relatedTarget["_drag"]["direction"] == "left") {
        $productDots.trigger("next.owl.carousel")
      } else {
        $productDots.trigger("prev.owl.carousel")
      }
    })

  $productDots
    .owlCarousel({
      loop: true,
      autoplay: true,
      autoWidth: false,
      autoplayHoverPause: true,
      items: 4,
    })
    .on("changed.owl.carousel", function (e) {
      const currentIndex = e.relatedTarget["_current"]
      $productSlide.trigger("to.owl.carousel", currentIndex)
    })

    $('.chocolat-parent').Chocolat();
})
