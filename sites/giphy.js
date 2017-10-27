oAuthMethods.giphy = function(){
	localStorage.setItem('giphy_token', 'AmvMPkwbW7v9oeXFDjyRXtCWJtNOZ2UL');
	window.location.href = '/IoP/callback.html';
};

oAuthMethods.giphy_token = function(token){
	var xhr = $.get(`https://api.giphy.com/v1/gifs/search?q=${localStorage.query}&api_key=${token}&limit=5`);
	xhr.done(function(data){
		console.log("WE HAVE PUPPIES!", data);
		oAuthMethods.compiledImages.push({type: 'giphy', data});
		oAuthMethods.loadIndex ++;
		oAuthMethods.loadImages();
	});
};