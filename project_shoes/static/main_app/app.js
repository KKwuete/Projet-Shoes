$(document).ready(function () {
  $(".carouselWrapper").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow:
      "C:UsersmarjoOneDriveBureauProjet-Shoesimgiconangle-double-left.png",
    nextArrow:
      "C:UsersmarjoOneDriveBureauProjet-Shoesimgiconangle-double-right.png",
  });
});

const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);
