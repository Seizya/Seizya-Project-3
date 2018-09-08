var clicka = false;
document.getElementById("scroll").addEventListener('click', () => {
    clicka = !clicka;
    if (clicka) {
        document.getElementById("scroll").className = "hover";
    } else {
        document.getElementById("scroll").className = "out";
    }
}, false);

//menu---------------------------------------------------------------
document.getElementById("menu").addEventListener('click', () => {
    if (document.getElementById("menu").className != "hover") {
        document.getElementById("menu").className = "hover";
        document.getElementById("menus").className = "menus-style hover";
    } else {
        document.getElementById("menu").className = "out";
        document.getElementById("menus").className = "menus-style";
        document.getElementById("gear-menus").className = "menus-style";
        document.getElementById("music-menus").className = "menus-style";
        document.getElementById("bg-menus").className = "menus-style";
        document.getElementById("circle-menus").className = "menus-style";
    }
}, false);

document.getElementById("menus-close").addEventListener('click', () => {
    document.getElementById("menu").className = "out";
    document.getElementById("menus").className = "menus-style";
    document.getElementById("music-menus").className = "menus-style";
    document.getElementById("gear-menus").className = "menus-style";
    document.getElementById("bg-menus").className = "menus-style";
    document.getElementById("circle-menus").className = "menus-style";
}, false);

document.getElementById("menus").addEventListener("click", e => e.stopPropagation());

//gear-menu----------------------------------------------------------
document.getElementById("gear-chenge").addEventListener('click', () => {
    document.getElementById("gear-menus").className = "menus-style hover";
    document.getElementById("menus").className = "menus-style";
}, false);

document.getElementById("gear-menu-back").addEventListener('click', () => {
    document.getElementById("gear-menus").className = "menus-style";
    document.getElementById("menus").className = "menus-style hover";
}, false);

document.getElementById("gear-off").addEventListener('click', () => {
    document.getElementById("gear-off").innerHTML = "off / Now"
    document.getElementById("gear-static").innerHTML = "Static"
    document.getElementById("gear-dynamic").innerHTML = "Dynamic"
    document.getElementById("smbg2").className = "off";
    document.getElementById("gear1").className = "off";
    document.getElementById("gear2").className = "off";
    document.getElementById("gear3").className = "off";
    document.getElementById("gear4").className = "off";
})

document.getElementById("gear-static").addEventListener('click', () => {
    document.getElementById("gear-off").innerHTML = "off"
    document.getElementById("gear-static").innerHTML = "Static / Now"
    document.getElementById("gear-dynamic").innerHTML = "Dynamic"
    document.getElementById("smbg2").className = "on";
    document.getElementById("gear1").className = "off";
    document.getElementById("gear2").className = "off";
    document.getElementById("gear3").className = "off";
    document.getElementById("gear4").className = "off";
})

document.getElementById("gear-dynamic").addEventListener('click', () => {
    document.getElementById("gear-off").innerHTML = "off"
    document.getElementById("gear-static").innerHTML = "Static"
    document.getElementById("gear-dynamic").innerHTML = "Dynamic / Now"
    document.getElementById("smbg2").className = "off";
    document.getElementById("gear1").className = "on";
    document.getElementById("gear2").className = "on";
    document.getElementById("gear3").className = "on";
    document.getElementById("gear4").className = "on";
}, false);

document.getElementById("gear-menus").addEventListener("click", e => e.stopPropagation());
//music-menu---------------------------------------------------------

document.getElementById("music-menus").addEventListener("click", e => e.stopPropagation());

document.getElementById("music").addEventListener('click', () => {
    document.getElementById("music-menus").className = "menus-style hover";
    document.getElementById("menus").className = "menus-style";
}, false);

document.getElementById("music-menu-back").addEventListener('click', () => {
    document.getElementById("music-menus").className = "menus-style";
    document.getElementById("menus").className = "menus-style hover";
}, false);

var bgm = new Audio();
bgm.src = "./music/nc97701.mp3";
bgm.loop = true;
bgm.volume = .3;
//bgm.play();

document.getElementById("volume").addEventListener('input', () => {
    bgm.volume = document.getElementById("volume").value;
}, false);

var clickf = true;
document.getElementById("music-onff").addEventListener('click', () => {
    clickf = !clickf;
    if (clickf) {
        bgm.play();
        document.getElementById("music-onff").innerHTML = "ON/OFF / " + (clickf === false ? "一時停止中" : "再生中") + ""
    } else {
        bgm.pause();
        document.getElementById("music-onff").innerHTML = "ON/OFF / " + (clickf === false ? "一時停止中" : "再生中") + ""
    }
}, false);

//bg-menu------------------------------------------------------------
document.getElementById("bg-menus").addEventListener("click", e => e.stopPropagation());

document.getElementById("bg-chenge").addEventListener('click', () => {
    document.getElementById("bg-menus").className = "menus-style hover";
    document.getElementById("menus").className = "menus-style";
}, false);

document.getElementById("bg-menu-back").addEventListener('click', () => {
    document.getElementById("bg-menus").className = "menus-style";
    document.getElementById("menus").className = "menus-style hover";
}, false);

document.getElementById("bg1").addEventListener('click', () => {
    bgcount(1);
}, false);

document.getElementById("bg2").addEventListener('click', () => {
    bgcount(2);
}, false);

document.getElementById("bg3").addEventListener('click', () => {
    bgcount(3);
}, false);

document.getElementById("bg4").addEventListener('click', () => {
    bgcount(4);
}, false);

var bgnumber;
var bgname = [1, "Star Night", "bg" + bgnumber];

function bgcount(bgnumber) {
    //console.log(bgname[1]);
    document.getElementById("bg" + bgname[0]).innerHTML = bgname[1];
    if (bgnumber == 1) {
        document.getElementById("bg").style.backgroundImage = "url('./img/bgc.png')";
        document.getElementById("line-x").style.borderBottomColor = "white";
        document.getElementById("line-y").style.borderRightColor = "white";
        document.getElementById("circle").style.backgroundImage = "url('./img/smg/smg11.png')";
        document.getElementById("circle3").style.backgroundImage = "url('./img/smg/SW12-3.png')";
    }
    if (bgnumber == 2) {
        document.getElementById("bg").style.backgroundImage = "url('./img/bg.png')";
        document.getElementById("line-x").style.borderBottomColor = "black";
        document.getElementById("line-y").style.borderRightColor = "black";
        document.getElementById("circle").style.backgroundImage = "url('./img/smg/smg5.png')";
        document.getElementById("circle3").style.backgroundImage = "url('./img/smg/SW12-2.png')";
    }
    if (bgnumber == 3) {
        document.getElementById("bg").style.backgroundImage = "url('./img/back.jpg')";
        document.getElementById("line-x").style.borderBottomColor = "black";
        document.getElementById("line-y").style.borderRightColor = "black";
        document.getElementById("circle").style.backgroundImage = "url('./img/smg/smg5.png')";
        document.getElementById("circle3").style.backgroundImage = "url('./img/smg/SW12-4.png')";
    }
    if (bgnumber == 4) {
        document.getElementById("bg").style.backgroundImage = "url('./img/nc9416.png')";
        document.getElementById("line-x").style.borderBottomColor = "white";
        document.getElementById("line-y").style.borderRightColor = "white";
        document.getElementById("circle").style.backgroundImage = "url('./img/smg/smg5.png')";
        document.getElementById("circle3").style.backgroundImage = "url('./img/smg/SW12-3.png')";
    }

    bgname[1] = document.getElementById("bg" + bgnumber).innerHTML;
    bgname[0] = bgnumber;
    document.getElementById("bg" + bgnumber).innerHTML += " / Now";
}

//circle-menu--------------------------------------------------------
document.getElementById("circle-menus").addEventListener("click", e => e.stopPropagation());

document.getElementById("circle-chenge").addEventListener('click', () => {
    document.getElementById("circle-menus").className = "menus-style hover";
    document.getElementById("menus").className = "menus-style";
}, false);

document.getElementById("circle-menu-back").addEventListener('click', () => {
    document.getElementById("circle-menus").className = "menus-style";
    document.getElementById("menus").className = "menus-style hover";
}, false);

document.getElementById("circle-static").addEventListener('click', () => {
    document.getElementById("circle-static").innerHTML = "Static / Now";
    document.getElementById("circle-dynamic").innerHTML = "Dynamic";
    document.getElementById("circle").className = "";
    document.getElementById("circle2").className = "";
}, false);

document.getElementById("circle-dynamic").addEventListener('click', () => {
    document.getElementById("circle-static").innerHTML = "Static";
    document.getElementById("circle-dynamic").innerHTML = "Dynamic / Now";
    document.getElementById("circle").className = "circle-rotation";
    document.getElementById("circle2").className = "circle-rotation";
}, false);

//start-menu---------------------------------------------------------
document.getElementById("start").addEventListener('click', () => {
    if (document.getElementById("start").className != "hover") {
        document.getElementById("start").className = "hover";
        document.getElementById("starts").className = "hover";
    }
}, false);

document.getElementById("st-close").addEventListener("click", e => e.stopPropagation());

document.getElementById("st-close").addEventListener('click', () => {
    document.getElementById("start").className = "out";
    document.getElementById("starts").className = "";
}, false);