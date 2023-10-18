type="text/javascript"
var menubar=document.getElementById("menu");
menubar.addEventListener("mouseenter",function(){
    menubar.textContent="menu";
});
menubar.addEventListener("mouseleave",function(){
    menubar.textContent="MENU";
});

