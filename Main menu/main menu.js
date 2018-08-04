var clicka = false;
document.getElementById("scroll").addEventListener('click', () => {
    clicka = !clicka;
    if (clicka) {
        document.getElementById("scroll").className = "hover";
    } else {
        document.getElementById("scroll").className = "out";
    }
}, false);

document.getElementById("menu").addEventListener('click', () => {
    if(document.getElementById("menu").className !=  "hover"){
        document.getElementById("menu").className = "hover";
        document.getElementById("menus").className = "hover";
    }
}, false);

document.getElementById("menus-close").addEventListener('click', () => {
    document.getElementById("menu").className = "out";
    document.getElementById("menus").className = "";
    document.getElementById("music-menus").className = "";
}, false);

document.getElementById("menus").addEventListener("click",e=>e.stopPropagation());

document.getElementById("music-menus").addEventListener("click",e=>e.stopPropagation());

var clickc = true;
document.getElementById("bg-chenge").addEventListener('click', () => {
    clickc = !clickc;
    if (clickc) {
        document.getElementById("bg").className = "one";
        document.getElementById("circle").className = "one";
        document.getElementById("line-x").className = "one";
        document.getElementById("line-y").className = "one";
    } else {
        document.getElementById("bg").className = "two";
        document.getElementById("circle").className = "two";
        document.getElementById("line-x").className = "two";
        document.getElementById("line-y").className = "two";
    }
}, false);

var clickd = true;
document.getElementById("gear-chenge").addEventListener('click', () => {
    clickd = !clickd;
    console.log(clickd)
    if (clickd) {
        document.getElementById("gear-chenge").innerHTML="Gear / static";
        document.getElementById("smbg2").className = "on";
        document.getElementById("gear1").className = "off";
        document.getElementById("gear2").className = "off";
        document.getElementById("gear3").className = "off";
        document.getElementById("gear4").className = "off";
    } else {
        document.getElementById("gear-chenge").innerHTML="Gear / dynamic";
        document.getElementById("smbg2").className = "off";
        document.getElementById("gear1").className = "on";
        document.getElementById("gear2").className = "on";
        document.getElementById("gear3").className = "on";
        document.getElementById("gear4").className = "on";
    }
}, false);

document.getElementById("start").addEventListener('click', () => {
    if (document.getElementById("start").className!="hover") {
        document.getElementById("start").className = "hover";
        document.getElementById("starts").className = "hover";
    }
}, false);

document.getElementById("st-close").addEventListener("click",e=>e.stopPropagation());

document.getElementById("st-close").addEventListener('click', () => {
    document.getElementById("start").className = "out";
    document.getElementById("starts").className = "";
}, false);

document.getElementById("music").addEventListener('click', () => {
    document.getElementById("music-menus").className = "hover";
    document.getElementById("menus").className = "";
}, false);

document.getElementById("music-menu-back").addEventListener('click', () => {
    document.getElementById("music-menus").className = "";
    document.getElementById("menus").className = "hover";
}, false);

var bgm = new Audio();
bgm.src="./music/昨日話してたやつっぽいやつ-test4-.mp3";
bgm.loop = true;
bgm.volume = .3;

document.getElementById("volume").addEventListener('input', () => {
    bgm.volume=document.getElementById("volume").value;
}, false);

var clickf = false;
document.getElementById("music-onff").addEventListener('click', () => {
    clickf = !clickf;
    if (clickf) {
        bgm.play();
        document.getElementById("music-onff").innerHTML="ON/OFF / "+(clickf===false?"一時停止中":"再生中")+""
    } else {
        bgm.pause();
        document.getElementById("music-onff").innerHTML="ON/OFF / "+(clickf===false?"一時停止中":"再生中")+""
    }
}, false);