$(document).ready(() => {
  const $productSlide = $(".product-carousel")
  const $productDots = $(".product-dots .owl-carousel")
  const $remain = $(".dots-remain")

  function countItem(index, count) {
    if (index - 4 > 0) {
      $remain.text("+" + (index - 4))
    } else {
      $remain.text("+" + (count - index - 4))
    }
  }

  $productSlide
    .owlCarousel({
      loop: false,
      autoplay: false,
      autoWidth: false,
      items: 1,
      center: true,
      dots: true,
      onInitialized: function (e) {
        countItem(e.item.index, e.item.count)
      },
    })
    .on("dragged.owl.carousel", function (e) {
      if (e.relatedTarget["_drag"]["direction"] == "left") {
        $productDots.trigger("next.owl.carousel")
      } else {
        $productDots.trigger("prev.owl.carousel")
      }
    })
    .on("changed.owl.carousel", function (e) {
      const index = e.item.index
      countItem(index, e.item.count)
    })

  $productDots
    .owlCarousel({
      loop: false,
      autoplay: false,
      autoWidth: true,
      items: 4,
    })
    .on("changed.owl.carousel", function (e) {
      const currentIndex = e.relatedTarget["_current"]
      $productSlide.trigger("to.owl.carousel", currentIndex)

      var current = e.item.index + 1
      total = e.item.count
      if (total - current < 4) {
        $remain.hide()
      } else {
        $remain.show()
      }
    })

  $productDots.on("click", ".owl-item", function (e) {
    const index = $(this).index()
    $productSlide.trigger("to.owl.carousel", index)
  })

  $(".chocolat-parent").Chocolat()
})
