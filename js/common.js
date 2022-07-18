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
