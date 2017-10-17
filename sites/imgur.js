oAuthMethods.imgur = function(requestFinalToken = false){
	if(!requestFinalToken){
		window.location.href = 'https://api.imgur.com/oauth2/authorize?client_id=e60c71383760a15&response_type=token';
	}
	else{
		localStorage.setItem('imgur_token', getURLParameter(access_token));
		window.location.href = '/callback.html';
	}
};