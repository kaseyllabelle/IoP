oAuthMethods.instagram = function(obj, requestFinalToken = false){
	if(!requestFinalToken){
		window.location.href = 'https://api.instagram.com/oauth/authorize/?client_id=4f006fb6e156494d9f84141085c9ddae&redirect_uri=https://kaseyllabelle.github.io/IoP/callback.html&response_type=token';
	}
	else{
		localStorage.setItem('instagram_token', getURLParameter('access_token'));
		window.location.href = '/IoP/callback.html';
	}
};