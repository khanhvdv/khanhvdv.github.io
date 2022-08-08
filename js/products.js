$(document).ready(function () {
  $(".small-title").click(function () {
    $(this).next("ul").toggleClass("active")
  })
})
