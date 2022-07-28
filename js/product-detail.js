$(document).ready(function () {
  const $mainImage = $(".main-image img")
  const $slide = $(".fake-slide")
  const $item = $slide.find(".item")
  const $remain = $(".remain")

  const delta = $item.length - 4

  if (delta >= 1) {
    $remain.css("display", "flex")
    $remain.text("+" + delta)
  }

  $mainImage.attr("src", $slide.find("img:first").attr("src"))

  $item.each(function () {
    const $this = $(this)

    $this.on("mouseover", function () {
      $mainImage.attr("src", $(this).find("img").attr("src"))
    })
  })
})
