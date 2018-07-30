var scroll = document.getElementById("scroll");
var clicka = false;
scroll.addEventListener('click', () => {
    clicka = !clicka;
    console.log(clicka)
    if (clicka) {
        document.getElementById("scroll").className = "hover";
    } else {
        document.getElementById("scroll").className = "out";
    }
}, false);

var menu = document.getElementById("menu");
var clickb = false;
menu.addEventListener('click', () => {
    clickb = !clickb;
    //console.log(clickb)
    if (clickb) {
        document.getElementById("menu").className = "hover";
        document.getElementById("menus").className = "hover";
    } else {
        document.getElementById("menu").className = "";
        document.getElementById("menus").className = "";
    }
}, false);

var bg_chenge = document.getElementById("bg_chenge");
var clickc = true;
bg_chenge.addEventListener('click', () => {
    clickc = !clickc;
    if (clickc) {
        document.getElementById("bg").className = "one";
        document.getElementById("circle").className = "one";
        document.getElementById("line_x").className = "one";
        document.getElementById("line_y").className = "one";
    } else {
        document.getElementById("bg").className = "two";
        document.getElementById("circle").className = "two";
        document.getElementById("line_x").className = "two";
        document.getElementById("line_y").className = "two";
    }
}, false);

var gear_chenge = document.getElementById("gear_chenge");
var clickd = true;
gear_chenge.addEventListener('click', () => {
    clickd = !clickd;
    console.log(clickd)
    if (clickd) {
        document.getElementById("smbg2").className = "on";
        document.getElementById("gear1").className = "off";
        document.getElementById("gear2").className = "off";
        document.getElementById("gear3").className = "off";
        document.getElementById("gear4").className = "off";
    } else {
        document.getElementById("smbg2").className = "off";
        document.getElementById("gear1").className = "on";
        document.getElementById("gear2").className = "on";
        document.getElementById("gear3").className = "on";
        document.getElementById("gear4").className = "on";
    }
}, false);