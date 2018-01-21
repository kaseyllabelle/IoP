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
	let xhr = $.ajax({url: `https://api.imgur.com/3/gallery/search?q=${localStorage.query}`, headers: {'authorization': `Client-ID e60c71383760a15`}});
	xhr.catch(function(error){
		console.log(error);
		oAuthMethods.loadIndex ++;
		oAuthMethods.loadImages();
	});
	xhr.done(function(data){
		for(let i=0; i<Math.min(data.data.length, 10); i++){
			if(!data.data[i].images){
				continue;
			}
			oAuthMethods.compiledImages.push({
				source: 'imgur', 
				url: data.data[i].link, 
				thumbnail: data.data[i].images[0].link, 
				title: data.data[i].title, 
				type: data.data[i].images[0].type
			});
		}
		oAuthMethods.loadIndex ++;
		oAuthMethods.loadImages();
	});
};