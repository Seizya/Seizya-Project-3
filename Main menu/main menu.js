var clicka = false;
document.getElementById("scroll").addEventListener('click', () => {
    clicka = !clicka;
    if (clicka) {
        document.getElementById("scroll").className = "hover";
    } else {
        document.getElementById("scroll").className = "out";
    }
}, false);

var clickb = false;
document.getElementById("menu").addEventListener('click', () => {
    clickb = !clickb;
    if (clickb) {
        document.getElementById("menu").className = "hover";
        document.getElementById("menus").className = "hover";
    } else {
        document.getElementById("menu").className = "";
        document.getElementById("menus").className = "";
    }
}, false);

var clickc = true;
document.getElementById("bg_chenge").addEventListener('click', () => {
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

var clickd = true;
document.getElementById("gear_chenge").addEventListener('click', () => {
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

var clicke = false;
document.getElementById("start").addEventListener('click', () => {
    clicke = !clicke;
    if (clicke) {
        document.getElementById("start").className = "hover";
        document.getElementById("starts").className = "hover";
    } else {
        document.getElementById("start").className = "out";
        document.getElementById("starts").className = "";
    }
}, false);