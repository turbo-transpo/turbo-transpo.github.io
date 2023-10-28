const rotated = document.getElementById("menu");
var menubar = document.getElementById("menu");
const pages = document.getElementById("menu-content");




if (pages.addEventListener("mouseleave", function () {
    pages.style.display = "none";
    rotated.style.transform = "rotate(0deg)";
}));
else if (addEventListener("click", function () {
    rotated.style.transform = "rotate(0deg)";
    pages.style.display = "none";
}));

menubar.addEventListener("mouseenter", function () {
    pages.style.display = "block";
    rotated.style.transform = "rotate(90deg)";
    document.getElementById("menu").style.cursor="pointer";
    /*add drop menu part here*/
});

/*Slideshow*/
let slideIndex = 1;
showSlides(slideIndex);

function nextSlides(n) {
    showSlides(slideIndex += n);
  }

function thisSlide(n) {
    showSlides(slideIndex = n);
  }

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }