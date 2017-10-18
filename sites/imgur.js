oAuthMethods.imgur = function(obj, requestFinalToken = false){
	if(!requestFinalToken){
		console.log('test b');

		window.location.href = 'https://api.imgur.com/oauth2/authorize?client_id=e60c71383760a15&response_type=token';
	}
	else{
		console.log('test c');

		localStorage.setItem('imgur_token', getURLParameter('access_token'));
		// window.location.href = '/callback.html';
	}
};