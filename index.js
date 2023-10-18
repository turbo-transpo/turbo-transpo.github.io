const rotated = document.getElementById("menu");
var menubar=document.getElementById("menu");
menubar.addEventListener("mouseleave", function() {
    rotated.style.transform = "rotate(0deg)";
    /*close drop menu part here*/
});
menubar.addEventListener("mouseenter", function(){
    rotated.style.transform = "rotate(90deg)";
    /*add drop menu part here*/
});
