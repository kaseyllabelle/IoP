oAuthMethods.pinterest = function(obj, requestFinalToken = false){
	if(location.href.indexOf('state') === -1){
		window.location.href = 'https://api.pinterest.com/oauth/?response_type=code&client_id=4929100152309825327&state=puppies&scope=read_public&redirect_uri=https://kaseyllabelle.github.io/IoP/callback.html';
	}
	else{
		let authCode = getURLParameter('code');
		$.post('https://api.pinterest.com/v1/oauth/token?grant_type=authorization_code&client_id=4929100152309825327&client_secret=cd9ec9a34b641dc603cada805774032b1a68767f37ebf0ade176160a50dc27fc&code=' + authCode, 
			function(data){
				localStorage.setItem('pinterest_token', data.access_token);
				window.location.href = '/IoP/callback.html';
			}
		);
	}
};