$(document).ready(function () {
  $(".toggle").click(function () {
    $(this).next("ul").toggleClass("active")
  })
})
