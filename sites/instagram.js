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
	var xhr = $.get(`https://api.instagram.com/v1/tags/search?q=${localStorage.query}&access_token=${token}`);
	console.log(xhr);
	xhr.catch(function(error){
		console.log(error);
	});
	// xhr.done(function(data){
	// 	console.log("WE HAVE PUPPIES FROM INSTAGRAM!", data);
	// 	oAuthMethods.compiledImages.push({type: 'instagram', data});
	// 	oAuthMethods.loadIndex ++;
	// 	oAuthMethods.loadImages();
	// });
};

// cors issue is happening within instagram
// need to ignore error and use info returned from network tab
// https://api.instagram.com/v1/tags/search?q=pittie&access_token=6103829376.4f006fb.ae8af2aa30394f38b996aaf57002d7e4