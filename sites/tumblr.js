oAuthMethods.tumblr = function(){
	$.getJSON(
		'https://api.tumblr.com/v2/tagged?api_key=NPVdky515PEendzYYA44WarFcZeKhstduONQB979h3q8KMFCKM&tag=pitbull-puppies', 
		function callback(data){
			console.log(data);
		}
	);
};