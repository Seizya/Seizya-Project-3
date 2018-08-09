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
    if(document.getElementById("menu").className !=  "hover"){
        document.getElementById("menu").className = "hover";
        document.getElementById("menus").className = "menus-style hover";
    }else{
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

document.getElementById("menus").addEventListener("click",e=>e.stopPropagation());

//gear-menu----------------------------------------------------------
document.getElementById("gear-chenge").addEventListener('click', () => {
    document.getElementById("gear-menus").className = "menus-style hover";
    document.getElementById("menus").className = "menus-style";
}, false);

document.getElementById("gear-menu-back").addEventListener('click', () => {
    document.getElementById("gear-menus").className = "menus-style";
    document.getElementById("menus").className = "menus-style hover";
}, false);

document.getElementById("gear-off").addEventListener('click',()=>{
    document.getElementById("gear-off").innerHTML="off / Now"
    document.getElementById("gear-static").innerHTML="Static"
    document.getElementById("gear-dynamic").innerHTML="Dynamic"
    document.getElementById("smbg2").className = "off";
    document.getElementById("gear1").className = "off";
    document.getElementById("gear2").className = "off";
    document.getElementById("gear3").className = "off";
    document.getElementById("gear4").className = "off";
})

document.getElementById("gear-static").addEventListener('click',()=>{
    document.getElementById("gear-off").innerHTML="off"
    document.getElementById("gear-static").innerHTML="Static / Now"
    document.getElementById("gear-dynamic").innerHTML="Dynamic"
    document.getElementById("smbg2").className = "on";
    document.getElementById("gear1").className = "off";
    document.getElementById("gear2").className = "off";
    document.getElementById("gear3").className = "off";
    document.getElementById("gear4").className = "off";
})

document.getElementById("gear-dynamic").addEventListener('click', () => {
    document.getElementById("gear-off").innerHTML="off"
    document.getElementById("gear-static").innerHTML="Static"
    document.getElementById("gear-dynamic").innerHTML="Dynamic / Now"
    document.getElementById("smbg2").className = "off";
    document.getElementById("gear1").className = "on";
    document.getElementById("gear2").className = "on";
    document.getElementById("gear3").className = "on";
    document.getElementById("gear4").className = "on";
}, false);

//music-menu---------------------------------------------------------

document.getElementById("music-menus").addEventListener("click",e=>e.stopPropagation());

document.getElementById("music").addEventListener('click', () => {
    document.getElementById("music-menus").className = "menus-style hover";
    document.getElementById("menus").className = "menus-style";
}, false);

document.getElementById("music-menu-back").addEventListener('click', () => {
    document.getElementById("music-menus").className = "menus-style";
    document.getElementById("menus").className = "menus-style hover";
}, false);

var bgm = new Audio();
bgm.src="./music/nc97701.mp3";
bgm.loop = true;
bgm.volume = .3;
//bgm.play();

document.getElementById("volume").addEventListener('input', () => {
    bgm.volume=document.getElementById("volume").value;
}, false);

var clickf = true;
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

//bg-menu------------------------------------------------------------
document.getElementById("bg-menus").addEventListener("click",e=>e.stopPropagation());

document.getElementById("bg-chenge").addEventListener('click', () => {
    document.getElementById("bg-menus").className = "menus-style hover";
    document.getElementById("menus").className = "menus-style";
}, false);

document.getElementById("bg-menu-back").addEventListener('click', () => {
    document.getElementById("bg-menus").className = "menus-style";
    document.getElementById("menus").className = "menus-style hover";
}, false);

document.getElementById("bg1").addEventListener('click', () => {
    document.getElementById("bg1").innerHTML="Star Night / Now";
    document.getElementById("bg2").innerHTML="Tittle pattern";
    document.getElementById("bg3").innerHTML="Sea";
    document.getElementById("bg4").innerHTML="Light tree";
    document.getElementById("bg").className = "one";
    document.getElementById("circle").className = "circle-rotation one";
    document.getElementById("line-x").className = "one";
    document.getElementById("line-y").className = "one";    
}, false);

document.getElementById("bg2").addEventListener('click', () => {
    document.getElementById("bg1").innerHTML="Star Night";
    document.getElementById("bg2").innerHTML="Tittle pattern / Now";
    document.getElementById("bg3").innerHTML="Sea";
    document.getElementById("bg4").innerHTML="Light tree";
    document.getElementById("bg").className = "two";
    document.getElementById("circle").className = "circle-rotation two";
    document.getElementById("line-x").className = "two";
    document.getElementById("line-y").className = "two";
}, false);

document.getElementById("bg3").addEventListener('click', () => {
    document.getElementById("bg1").innerHTML="Star Night";
    document.getElementById("bg2").innerHTML="Tittle pattern";
    document.getElementById("bg3").innerHTML="Sea /Now";
    document.getElementById("bg4").innerHTML="Light tree";
    document.getElementById("bg").className = "three";
    document.getElementById("circle").className = "circle-rotation three";
    document.getElementById("line-x").className = "three";
    document.getElementById("line-y").className = "three";
}, false);

document.getElementById("bg4").addEventListener('click', () => {
    document.getElementById("bg1").innerHTML="Star Night";
    document.getElementById("bg2").innerHTML="Tittle pattern";
    document.getElementById("bg3").innerHTML="Sea";
    document.getElementById("bg4").innerHTML="Light tree / Now";
    document.getElementById("bg").className = "four";
    document.getElementById("circle").className = "circle-rotation four";
    document.getElementById("line-x").className = "four";
    document.getElementById("line-y").className = "four";    
}, false);

//circle-menu--------------------------------------------------------
/*document.getElementById("circle-menus").addEventListener("click",e=>e.stopPropagation());

document.getElementById("circle-chenge").addEventListener('click', () => {
    document.getElementById("circle-menus").className = "menus-style hover";
    document.getElementById("menus").className = "menus-style";
}, false);

document.getElementById("circle-menu-back").addEventListener('click', () => {
    document.getElementById("circle-menus").className = "menus-style";
    document.getElementById("menus").className = "menus-style hover";
}, false);

document.getElementById("circle-static").addEventListener('click', () => {
    document.getElementById("circle-static").innerHTML="Static / Now";
    document.getElementById("circle-dynamic").innerHTML="Dynamic";
    document.getElementById("circle").className = "";   
    document.getElementById("circle2").className = "";   
}, false);

document.getElementById("circle-dynamic").addEventListener('click', () => {
    document.getElementById("circle-static").innerHTML="Static";
    document.getElementById("circle-dynamic").innerHTML="Dynamic / Now";
    document.getElementById("circle").className = "circle-rotation";   
    document.getElementById("circle2").className = "circle-rotation";   
}, false);
*/
//start-menu---------------------------------------------------------
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
