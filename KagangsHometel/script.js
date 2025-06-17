$(document).ready(() => {
  $(".locations.owl-carousel").owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 20,
    responsive: {
      0: {
        items: 1.5,
      },
      600: {
        items: 1.5,
      },
      1000: {
        items: 3,
      },
    },
  });
});
