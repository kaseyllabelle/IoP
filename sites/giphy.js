oAuthMethods.giphy = function(){
	localStorage.setItem('giphy_token', 'AmvMPkwbW7v9oeXFDjyRXtCWJtNOZ2UL');
	window.location.href = '/IoP/callback.html';
};

oAuthMethods.giphy_token = function(token){
	var xhr = $.get(`https://api.giphy.com/v1/gifs/search?q=${localStorage.query}&api_key=${token}&limit=10`);
	xhr.catch(function(error){
		console.log(error);
		oAuthMethods.loadIndex ++;
		oAuthMethods.loadImages();
	});
	xhr.done(function(data){
		console.log("WE HAVE PUPPIES FROM GIPHY!", data.data);
		for(let i=0; i<data.data.length; i++){
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