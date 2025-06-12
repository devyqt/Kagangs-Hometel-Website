$(document).ready(function () {
  $('.offcanvas a[href^="#"]').on("click", function (e) {
    const targetId = $(this).attr("href");

    // Let the browser scroll first
    setTimeout(() => {
      const offcanvas = bootstrap.Offcanvas.getInstance($("#sideDrawer")[0]);
      if (offcanvas) offcanvas.hide();
    }, 100); // Slight delay to allow scrolling

    // Optional: smooth scroll (if not using CSS `scroll-behavior: smooth`)
    $("html, body").animate(
      {
        scrollTop: $(targetId).offset().top,
      },
      500
    );
  });
});
