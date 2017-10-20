let iframe_element;

oAuthMethods.fivehundredpx = function(obj, requestFinalToken = false){
	console.log(obj);
	let win;

	if(location.href.indexOf('token:') > -1){
		console.log(location.href);
		let token = location.href.replace(/.*token:/g,'').replace(/,callback:.*/g,'');
		localStorage.setItem('fivehundredpx_token', token);
		win.close();
	}

	if(!requestFinalToken){
		win = window.open('https://api.500px.com/api/js-sdk/authorize?sdk_key=d53a58c94138c694793ca71c78cf347dae4b7e1b&callback=oAuthMethods.fivehundredpxcb',
						'500px_js_sdk_login',
						'width=1240,height=480,left=100,top=100,menu=no,location=yes,scrollbars=no,status=no,toolbar=no');
	}
	else{
		console.log('paused!');
		if(localStorage.getItem('fivehundredpx_parsing') != 'true'){
			localStorage.setItem('fivehundredpx_parsing','true');
			oAuthMethods.fivehundredpxcb();	
		}
		else{
			console.log(iframe_element);
		}
	}
};

oAuthMethods.fivehundredpxcb = function(obj){
	console.log(obj);
	iframe_element = document.createElement('iframe');
	iframe_element.src = 'https://api.500px.com/api/js-sdk/check_authorization?sdk_key=d53a58c94138c694793ca71c78cf347dae4b7e1b&callback=oAuthMethods.fivehundredpxComplete';
	$('body').append(iframe_element);
};

oAuthMethods.fivehundredpxComplete = function(obj){
	console.log(obj);
	// location.href = '/IoP/callback.html';
};