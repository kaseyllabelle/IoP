oAuthMethods.tumblr = function(){
	localStorage.setItem('tumblr_token', 'NPVdky515PEendzYYA44WarFcZeKhstduONQB979h3q8KMFCKM');
	window.location.href = '/IoP/callback.html';
};

oAuthMethods.tumblr_token = function(token){
	let xhr = $.get(`https://api.tumblr.com/v2/tagged?api_key=${token}&tag=${localStorage.query}`);
	xhr.catch(function(error){
		console.log(error);
		oAuthMethods.loadIndex ++;
		oAuthMethods.loadImages();
	});
	xhr.done(function(data){
		for(let i=0; i<Math.min(data.response.length, 10); i++){
			if(!data.response[i].photos[0].alt_sizes[4].url && !data.response[i].thumbnail_url){
				continue;
			}
			oAuthMethods.compiledImages.push({
				source: 'tumblr', 
				url: data.response[i].short_url, 
				thumbnail: (data.response[i].photos) ? data.response[i].photos[0].alt_sizes[4].url : data.response[i].thumbnail_url, 
				title: data.response[i].caption, 
				type: data.response[i].type
			});
		}
		oAuthMethods.loadIndex ++;
		oAuthMethods.loadImages();
	});
};