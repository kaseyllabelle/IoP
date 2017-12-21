oAuthMethods.youtube = function(obj){
	localStorage.setItem('youtube_token', 'AIzaSyCzk-5OigvpFn0Bo1U8InpPOj5VOc3Awf8');
	window.location.href = '/IoP/callback.html';
};

oAuthMethods.youtube_token = function(token){
	var xhr = $.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${token}&q=${localStorage.query}&maxResults=10`);
	xhr.catch(function(error){
		console.log(error);
		oAuthMethods.loadIndex ++;
		oAuthMethods.loadImages();
	});
	xhr.done(function(data){
		// console.log("WE HAVE PUPPIES FROM YOUTUBE!", data);
		for(let i=0; i<Math.min(data.items.length, 10); i++){
			oAuthMethods.compiledImages.push({
				source: 'youtube', 
				url: 'https://www.youtube.com/watch?v=' + data.items[i].id.videoId, 
				thumbnail: data.items[i].snippet.thumbnails.medium.url, 
				title: data.items[i].snippet.title, 
				type: data.items[i].id.kind
			});
		}
		oAuthMethods.loadIndex ++;
		oAuthMethods.loadImages();
	});
};