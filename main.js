//Page loader, spinner
window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 4000);
};

//Move Hamburger X to right
document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
  });

//Smoth Scroll
document.querySelector(".container").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";

  });

/*
//Hidding menu after click on link
$('.menu .menu-link').on('click', function () {
  $('.hamburger-menu').removeClass('open');
  $('.menu').removeClass('open');
});*/
