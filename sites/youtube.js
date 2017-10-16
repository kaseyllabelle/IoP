oAuthMethods.youtube = function(obj){
	// console.log('log into youtube with: ' + obj.api_key);
	$.getJSON(
		'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCzk-5OigvpFn0Bo1U8InpPOj5VOc3Awf8&part=snippet&q=puppies', 
		function callback(data){
			console.log(data);
		}
	);
};