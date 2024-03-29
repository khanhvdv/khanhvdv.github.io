$(document).ready(function () {
  const $main = $(".main-image")
  const $mainImage = $(".main-image img")
  const $mainVideo = $(".main-image iframe")
  const $slide = $(".fake-slide")
  const $item = $slide.find(".item")
  const $remain = $(".remain")

  const delta = $item.length - 4

  if (delta >= 1) {
    $remain.css("display", "flex")
    $remain.text("+" + delta)
  }

  // fake item click when click on remain number
  $remain.click(function () {
    $item.first().click()
  })
  $main.click(function () {
    $item.first().click()
  })
  // fake item click when click on remain number

  // set default main image
  const firstType = $item.first().children().prop("tagName").toLowerCase()
  const firstSrc = $item.first().children().attr("src")
  if (firstType === "img") {
    $mainImage.show()
    $mainImage.attr("src", firstSrc)
    $mainVideo.hide()
  } else {
    $mainVideo.show()
    $mainVideo.attr("src", firstSrc)
    $mainImage.hide()
  }
  // set default main image

  $item.each(function () {
    const $this = $(this)
    const itemType = $this.children().first().prop("tagName").toLowerCase()

    // block user from play video in fake slide
    if (itemType !== "img") {
      $this.addClass("has-video")
    }
    // block user from play video in fake slide

    // update main slide image on hover
    $this.on("mouseover", function () {
      const src = $(this).children().first().attr("src")
      if (itemType === "img") {
        $mainImage.show()
        $mainImage.attr("src", src)
        $mainVideo.hide()
      } else {
        $mainVideo.show()
        $mainVideo.attr("src", src)
        $mainImage.hide()
      }
    })
    // update main slide image on hover
  })

  $(".item").flashy()

  $(".small-title").click(function () {
    $(this).next("ul").toggleClass("active")
  })
})
