console.log("Security js");

const rotated = document.getElementById("menu");
var menubar = document.getElementById("menu");
const pages = document.getElementById("menu-content");
let menuopen = false;

document.getElementById("menu").style.cursor = "pointer";
menubar.addEventListener("click", function () {
    if (menuopen==true){
        pages.style.display="none";
        rotated.style.transform="rotate(0deg)";
        menuopen=false;
    }
    else if (menuopen==false){
        pages.style.display = "block";
        rotated.style.transform = "rotate(90deg)";
        menuopen=true;
    }
});




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
    document.getElementById("menu").style.cursor = "pointer";
});
