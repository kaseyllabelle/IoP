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
	'pinterest': {
		app_id: '4924393521510627802',
		app_ssecret: '953d71f8410650fb398fc0e22eb771318dcf6b0d33a80e3609f8dc73e5665758',
		authorization_code: 'https://api.pinterest.com/oauth/?response_type=code&client_id=4924393521510627802&state=puppies&scope=read_public&redirect_uri=https://kaseyllabelle.github.io/IoP/callback.html',
		access_token: 'https://api.pinterest.com/v1/oauth/token?grant_type=authorization_code&client_id=4924393521510627802&client_secret=953d71f8410650fb398fc0e22eb771318dcf6b0d33a80e3609f8dc73e5665758&code=41282aeb31f629c4'
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
	
	if(!matched){
		oAuthMethods[localStorage.getItem('currentOAuth')]({},true);
		return false;
	}

	console.log('test a');

	var selectedSources = localStorage.getItem('selectedSources');

	selectedSources = selectedSources.split(',');
	// localStorage.setItem('currentOAuth',selectedSources[0]);

	function attemptOAuth(selectedSources){
		if(!selectedSources[0].length){
			return;
		}

		var currentOAuth = selectedSources.shift();
		localStorage.setItem('selectedSources',selectedSources);
		localStorage.setItem('currentOAuth',currentOAuth);	
		
		oAuthMethods[currentOAuth](oAuthObj[currentOAuth]);
	};

	attemptOAuth(selectedSources);
});

function getURLParameter(name){
	return decodeURIComponent((new RegExp('[?|&|#]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) 
		|| [null, ''])[1].replace(/\+/g, '%20')) 
		|| null;
}



// div class="results" data-attribute="source" data-sort="type"
// sort by type (img, gif, video), source (500px, insta, etc.)