oAuthMethods.fivehundredpx = function(obj, requestFinalToken = false){
	if(!requestFinalToken){
		$.ajax({
			method: 'post',
			url: 'https://api.500px.com/v1/oauth/request_token?oauth_callback=https://kaseyllabelle.github.io/IoP/callback.html'
		})
	}
	else{
		localStorage.setItem('fivehundredpx_token', getURLParameter('access_token'));
		window.location.href = '/IoP/callback.html';
	}
};