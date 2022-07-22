$(document).ready(() => {
  // scroll effect
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 500,
      once: true,
    })
  }
  // scroll effect

  // fixed header
  window.onscroll = function () {
    fixedHeader()
  }

  const header = document.getElementById("main-header")
  const sticky = header.offsetTop + 40

  function fixedHeader() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky")
    } else {
      header.classList.remove("sticky")
    }
  }
  // fixed header

  // toggle responsive header
  const $header = $("#main-header")
  const $toggle = $header.find(".toggle-nav")
  $toggle.on("click", function () {
    $header.toggleClass("active")
  })
  // toggle responsive header

  // toggle footer connect
  const $connect = $(".connect-info")
  const $toggleInfo = $connect.find(".title")
  $toggleInfo.each(function () {
    const $this = $(this)
    $this.on("click", function () {
      $this.closest(".connect").toggleClass("active")
    })
  })
  // toggle footer connect

  // count up
  $(".count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 5000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now))
          },
        }
      )
  })
  // count up
})
