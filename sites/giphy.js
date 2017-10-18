oAuthMethods.giphy = function(){
	$.getJSON(
		'https://api.giphy.com/v1/gifs/search?q=puppies&api_key=AmvMPkwbW7v9oeXFDjyRXtCWJtNOZ2UL', 
		function callback(data){
			console.log(data);
		}
	);
};