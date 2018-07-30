var of=false;

var left=document.getElementById('left');
left.addEventListener('click',()=>{
	of=!of;
	document.getElementById('left').className=String(of);
	document.getElementById('right').className=String(of);
})