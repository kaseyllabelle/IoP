oAuthMethods.instagram = function(obj, requestFinalToken = false){
	if(!requestFinalToken){
		window.location.href = 'https://api.instagram.com/oauth/authorize/?client_id=4f006fb6e156494d9f84141085c9ddae&redirect_uri=https://kaseyllabelle.github.io/IoP/callback.html&response_type=token&scope=public_content';
	}
	else{
		localStorage.setItem('instagram_token', getURLParameter('access_token'));
		window.location.href = '/IoP/callback.html';
	}
};

oAuthMethods.instagram_token = function(token){
	var xhr = $.get(`https://api.instagram.com/v1/tags/search?q=${localStorage.query}&access_token=${token}&scope=public_content`);
	xhr.done(function(data){
		console.log("WE HAVE PUPPIES FROM INSTAGRAM!", data);
		oAuthMethods.compiledImages.push({type: 'instagram', data});
		oAuthMethods.loadIndex ++;
		oAuthMethods.loadImages();
	});
};