oAuthMethods.fivehundredpx = function(obj, requestFinalToken = false){
	console.log(obj);
	if(!requestFinalToken){
		window.open('https://api.500px.com/api/js-sdk/authorize?sdk_key=04a57d5e6d2c3a8ee908e4c41db09f0f5ec31b26&callback=oAuthMethods.fivehundredpxcb',
						'500px_js_sdk_login',
						'width=1240,height=480,left=100,top=100,menu=no,location=yes,scrollbars=no,status=no,toolbar=no');
	}
	else{
		console.log('paused');
		// localStorage.setItem('fivehundredpx_token', getURLParameter('access_token'));
		// window.location.href = '/IoP/callback.html';
	}
};

oAuthMethods.fivehundredpxcb = function(obj){
	console.log(obj);
	let iframe_element = document.createElement('iframe');
	iframe_element.src = 'https://api.500px.com/api/js-sdk/check_authorization?sdk_key=04a57d5e6d2c3a8ee908e4c41db09f0f5ec31b26&callback=check500';
	$('body').appendChild(iframe_element);
};

oAuthMethods.fivehundredpxComplete = function(obj){
	console.log(obj);
};