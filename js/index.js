
$(document).ready(function(){
	$("#szz").click(function(){
		$("#szy").animate({height:"toggle"});
	});
	$("#fcc").click(function(){
		$("#fcy").animate({height:"toggle"});
	});
	$("#zpp").click(function(){
		$("#zpy").animate({height:"toggle"});
	});
	$("#xzz").click(function(){
		$("#xzy").animate({height:"toggle"});
	});
	$("#jyz").click(function(){
		$("#jyy").animate({height:"toggle"});
	});
var szz=document.getElementById("szz");
szz.onclick=function() {
	if(this.value=="展开"){
		this.value="收回";
	}else{
		this.value="展开";
	}
}
var fcc=document.getElementById("fcc");
fcc.onclick=function() {
	if(this.value=="展开"){
		this.value="收回";
	}else{
		this.value="展开";
	}
}
var zpp=document.getElementById("zpp");
zpp.onclick=function() {
	if(this.value=="展开"){
		this.value="收回";
	}else{
		this.value="展开";
	}
}
var xzz=document.getElementById("xzz");
xzz.onclick=function() {
	if(this.value=="展开"){
		this.value="收回";
	}else{
		this.value="展开";
	}
}
var jyz=document.getElementById("jyz");
jyz.onclick=function() {
	if(this.value=="展开"){
		this.value="收回";
	}else{
		this.value="展开";
	}
}
});
