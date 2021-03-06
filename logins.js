var oAuthObj = {
	'fivehundredpx': {
		post: 'https://api.500px.com/v1/oauth/request_token?oauth_callback=https://kaseyllabelle.github.io/IoP/callback.html'
	},
	'giphy': {
		api_key: 'AmvMPkwbW7v9oeXFDjyRXtCWJtNOZ2UL'
	},
	'imgur': {
		client_id: 'e60c71383760a15',
		client_secret: '54de1523950a8bea8c6a461445082977ffa7adfb',
		request_token: 'https://api.imgur.com/oauth2/authorize?client_id=e60c71383760a15&response_type=token'
	},
	'instagram': {
		client_id: '4f006fb6e156494d9f84141085c9ddae',
		client_secret: '8c233ead378f4ec399226e6ff988ea3b',
		request_token: 'https://api.instagram.com/oauth/authorize/?client_id=4f006fb6e156494d9f84141085c9ddae&redirect_uri=https://kaseyllabelle.github.io/IoP/callback.html&response_type=token'
	},
	'tumblr': {
		consumer_key: 'NPVdky515PEendzYYA44WarFcZeKhstduONQB979h3q8KMFCKM',
		secret_key: '5TMtCd28LXQ9RJxSyjXYnJkl4ztcl7uyXkJasH3e9FyerPZiUJ'
	},
	'youtube': {
		api_key: 'AIzaSyCzk-5OigvpFn0Bo1U8InpPOj5VOc3Awf8'
	}
};

$(document).ready(function(){
	let matched = window.location.href.match(/.html$/); 
	
	if(!matched && localStorage.getItem('currentOAuth')){
		oAuthMethods[localStorage.getItem('currentOAuth')]({},true);
		return false;
	}

	let selectedSources = localStorage.getItem('selectedSources');

	selectedSources = (selectedSources) ? selectedSources.split(',') : [];

	function attemptOAuth(selectedSources){
		if(!selectedSources[0] || !selectedSources[0].length){
			window.location.href = '/IoP/index.html?load-puppies';
			return;
		}

		let currentOAuth = selectedSources.shift();
		localStorage.setItem('selectedSources',selectedSources);
		localStorage.setItem('currentOAuth',currentOAuth);	
		
		oAuthMethods[currentOAuth](oAuthObj[currentOAuth]);
	};

	attemptOAuth(selectedSources);
});

function getURLParameter(name){
	return decodeURIComponent((new RegExp('[?|&|#]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) 
		|| [null, ''])[1].replace(/\+/g, '%20')) 
		|| null;
}