oAuthMethods.giphy = function(){
	// console.log('log into giphy with:' + 'api_key: AmvMPkwbW7v9oeXFDjyRXtCWJtNOZ2UL');
	$.getJSON(
		'http://api.giphy.com/v1/gifs/search?q=puppies&api_key=AmvMPkwbW7v9oeXFDjyRXtCWJtNOZ2UL', 
		function callback(data){
			console.log(data);
		}
	);
};