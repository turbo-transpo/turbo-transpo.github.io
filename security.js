console.log("Security js");

const rotated = document.getElementById("menu");
const pages = document.getElementById("menu-content");
let menuopen = false;

rotated.addEventListener("click", function () {
    if (menuopen) {
        pages.style.display = "none";
        rotated.style.transform = "rotate(0deg)";
        menuopen = false;
    } else {
        pages.style.display = "block";
        rotated.style.transform = "rotate(90deg)";
        menuopen = true;
    }
});

pages.addEventListener("mouseleave", function () {
    pages.style.display = "none";
    rotated.style.transform = "rotate(0deg)";
});