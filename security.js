console.log("Security js");

const rotated = document.getElementById("menu");
var menubar = document.getElementById("menu");
const pages = document.getElementById("menu-content");




if (pages.addEventListener("mouseleave", function () {
    pages.style.display = "none";
    rotated.style.transform = "rotate(0deg)";
})) {
} else if (addEventListener("click", function () {
    rotated.style.transform = "rotate(0deg)";
    pages.style.display = "none";
}));

menubar.addEventListener("mouseenter", function () {
    pages.style.display = "block";
    rotated.style.transform = "rotate(90deg)";
    document.getElementById("menu").style.cursor="pointer";
    /*....*/
});
