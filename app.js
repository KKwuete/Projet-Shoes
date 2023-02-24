/**const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Jordan GOLDEN",
    price: 250,
    img: "./img/Seigaiha-detourB.jpg",
    bcgrd: "yellow",
  },
  {
    id: 2,
    title: "Air Jordan 1",
    price: 250,
    img: "./img/Kikko-detourB.jpg",
    bcgrd: "red",
  },
  {
    id: 3,
    title: "Air Legacy Bleach",
    price: 200,
    img: "./img/LegacyBleachpetit.png",
    bcgrd: "green",
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = choosenProduct.price + " €";

    // change the img of currentProduct
    currentProductImg.src = choosenProduct.img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});**/

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
