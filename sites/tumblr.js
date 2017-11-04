oAuthMethods.tumblr = function(){
	localStorage.setItem('tumblr_token', 'NPVdky515PEendzYYA44WarFcZeKhstduONQB979h3q8KMFCKM');
	window.location.href = '/IoP/callback.html';
};

oAuthMethods.tumblr_token = function(token){
	var xhr = $.get(`https://api.tumblr.com/v2/tagged?api_key=${token}&tag=${localStorage.query}`);
	xhr.done(function(data){
		console.log("WE HAVE PUPPIES FROM TUMBLR!", data);
		for(let i=0; i<Math.min(data.response.length, 10); i++){
			oAuthMethods.compiledImages.push({
				source: 'tumblr', 
				url: data.response[i].short_url, 
				// thumbnail isn't working, error = cannot read property [0] of undefined
				// thumbnail: data.response[i].photos[0].alt_sizes[4].url, 
				title: data.response[i].caption, 
				type: data.response[i].type
			});
		}
		oAuthMethods.loadIndex ++;
		oAuthMethods.loadImages();
	});
};