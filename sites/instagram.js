oAuthMethods.instagram = function(obj, requestFinalToken = false){
	if(!requestFinalToken){
		window.location.href = 'https://api.instagram.com/oauth/authorize/?client_id=4f006fb6e156494d9f84141085c9ddae&redirect_uri=https://kaseyllabelle.github.io/IoP/callback.html&response_type=token';
	}
	else{
		localStorage.setItem('instagram_token', getURLParameter('access_token'));
		window.location.href = '/callback.html';
	}
	// 'instagram': {
	// 	client_id: '4f006fb6e156494d9f84141085c9ddae',
	// 	client_secret: '8c233ead378f4ec399226e6ff988ea3b',
	// 	request_token: 'https://api.instagram.com/oauth/authorize/?client_id=4f006fb6e156494d9f84141085c9ddae&redirect_uri=https://kaseyllabelle.github.io/IoP/callback.html&response_type=token'
	// 	// 'https://kaseyllabelle.github.io/IoP/callback.html#access_token=6103829376.4f006fb.ae8af2aa30394f38b996aaf57002d7e4'
	// }
};