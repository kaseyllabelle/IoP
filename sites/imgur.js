oAuthMethods.imgur = function(obj, requestFinalToken = false){
	if(!requestFinalToken){
		window.location.href = 'https://api.imgur.com/oauth2/authorize?client_id=e60c71383760a15&response_type=token';
	}
	else{
		localStorage.setItem('imgur_token', getURLParameter('access_token'));
		window.location.href = '/IoP/callback.html';
	}
};

oAuthMethods.imgur_token = function(token){
	var xhr = $.ajax({url: `https://api.imgur.com/3/gallery/search?q=${localStorage.query}`, headers: {'authorization': `Client-ID e60c71383760a15`}});
	xhr.done(function(data){
		console.log("WE HAVE PUPPIES!", data);
		oAuthMethods.compiledImages.push({type: 'imgur', data});
		oAuthMethods.loadIndex ++;
		oAuthMethods.loadImages();
	});
};