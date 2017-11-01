oAuthMethods.youtube = function(obj){
	localStorage.setItem('youtube_token', 'AIzaSyCzk-5OigvpFn0Bo1U8InpPOj5VOc3Awf8');
	window.location.href = '/IoP/callback.html';
};

// oAuthMethods.giphy_token = function(token){
// 	var xhr = $.get(`https://api.giphy.com/v1/gifs/search?q=${localStorage.query}&api_key=${token}&limit=5`);
// 	xhr.done(function(data){
// 		console.log("WE HAVE PUPPIES FROM GIPHY!", data);
// 		oAuthMethods.compiledImages.push({type: 'giphy', data});
// 		oAuthMethods.loadIndex ++;
// 		oAuthMethods.loadImages();
// 	});
// };