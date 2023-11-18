/*MENU BAR STUFF*/
const rotated = document.getElementById("menu");
var menubar = document.getElementById("menu");
const pages = document.getElementById("menu-content");
menuopen=false;


document.getElementById("menu").style.cursor="pointer";
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

/*MENU BAR STUFF*/