oAuthMethods.giphy = function(){
	localStorage.setItem('giphy_token', 'AmvMPkwbW7v9oeXFDjyRXtCWJtNOZ2UL');
	window.location.href = '/IoP/callback.html';
};

oAuthMethods.giphy_token = function(token){
	let xhr = $.get(`https://api.giphy.com/v1/gifs/search?q=${localStorage.query}&api_key=${token}`);
	xhr.catch(function(error){
		console.log(error);
		oAuthMethods.loadIndex ++;
		oAuthMethods.loadImages();
	});
	xhr.done(function(data){
		console.log("WE HAVE PUPPIES FROM GIPHY!", data);
		for(let i=0; i<Math.min(data.data.length, 10); i++){
			if(!data.data[i].images.fixed_width.url){
				continue;
			}
			oAuthMethods.compiledImages.push({
				source: 'giphy', 
				url: data.data[i].url, 
				thumbnail: data.data[i].images.fixed_width.url, 
				title: data.data[i].title, 
				type: data.data[i].type
			});
		}
		oAuthMethods.loadIndex ++;
		oAuthMethods.loadImages();
	});
};