$(document).ready(() => {
  // toggle active left nav
  $(".sub-nav").each(function () {
    const $this = $(this)

    const toggle = $this.find(".toggle")
    toggle.click(function () {
      $this.toggleClass("active")
    })
  })
  // toggle active left nav
})
