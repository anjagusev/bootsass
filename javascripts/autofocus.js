/*$(document).ready(function(){
	if(!("autofocus" in document.createElemeent("input"))){
	$("#q").focus();
	}
});*/
//Autofocus with fallback event

$(document).bind('focus_ready', function(){
	if(!("autofocus" in document.createElement("input"))){
		$('#fname').focus();
	}
});

