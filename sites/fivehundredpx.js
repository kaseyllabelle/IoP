oAuthMethods.fivehundredpx = function(obj, requestFinalToken = false){
	console.log(obj);
	let win;
	if(!requestFinalToken){
		win = window.open('https://api.500px.com/api/js-sdk/authorize?sdk_key=d53a58c94138c694793ca71c78cf347dae4b7e1b&callback=oAuthMethods.fivehundredpxcb',
						'500px_js_sdk_login',
						'width=1240,height=480,left=100,top=100,menu=no,location=yes,scrollbars=no,status=no,toolbar=no');
	}
	else{
		console.log('paused!');
		// localStorage.setItem('fivehundredpx_token', getURLParameter('token:'));
		// win.close();
		oAuthMethods.fivehundredpxcb();
	}
};

oAuthMethods.fivehundredpxcb = function(obj){
	console.log(obj);
	let iframe_element = document.createElement('iframe');
	iframe_element.src = 'https://api.500px.com/api/js-sdk/check_authorization?sdk_key=d53a58c94138c694793ca71c78cf347dae4b7e1b&callback=oAuthMethods.fivehundredpxComplete';
	document.getElementsByTagName("body")[0].innerHtml=iframe_element;
};

oAuthMethods.fivehundredpxComplete = function(obj){
	console.log(obj);
	// location.href = '/IoP/callback.html';
};


// https://api.500px.com/api/js-sdk/authorize?sdk_key=d53a58c94138c694793ca71c78cf347dae4b7e1b&callback=oAuthMethods.fivehundredpxcb
// https://kaseyllabelle.github.io/IoP/callback.html#token:jdqPAbiJ7hoWo9IAuM0DjNS23P1mt2VOAc3p1x7T,callback:oAuthMethods.fivehundredpxcb