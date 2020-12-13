window.addEventListener('DOMContentLoaded', function()  {

	var 	mainBody = document.querySelector('body'),
			scriptIE = document.createElement('script'),
			scriptMain = document.createElement('script'),
			ua = navigator.userAgent,
			is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	
	scriptIE.setAttribute('src', 'js/scriptIE.min.js');
	
	scriptMain.setAttribute('src', 'js/script.min.js');
	
	if(is_ie){
		mainBody.appendChild(scriptIE);
	}else{
		mainBody.appendChild(scriptMain);
	}
});

	




