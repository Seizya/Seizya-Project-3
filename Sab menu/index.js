//document.getElementById('level').scrollTop = document.getElementById('level').scrollHeight;
var of=false;
var ofa=false;
var link;

document.getElementById('menu').addEventListener('click',()=>{
	ofa=!ofa;
	document.getElementById('menus').className=String(ofa);
})

document.getElementById('right-close').addEventListener('click',()=>{
	document.getElementById('right').className=String(false);
})

document.getElementById('lv1').addEventListener('click',()=>{
	starts("../Brain God/index.html");
})

document.getElementById('lv2').addEventListener('click',()=>{
	starts("../Brain G/index.html");
})

document.getElementById('lv3').addEventListener('click',()=>{
	starts("../Brain Good/index.html");
})

function starts(link){
	document.getElementById('right').className="true";
	document.getElementById('start').addEventListener('click',()=>{
		document.getElementById('load').className="true";
		setTimeout(()=>{
			document.location.href=link;
			document.getElementById('load').className="";
			document.getElementById('right').className="";
		},5000)
	})	
}
