var oAuthObj = {
	'fivehundredpx': {
		post: 'https://api.500px.com/v1/oauth/request_token?oauth_callback=https://kaseyllabelle.github.io/IoP/callback.html'
		// oauth_callback:'https://kaseyllabelle.github.io/IoP/callback.html'
	},
	'giphy': {
		api_key: 'AmvMPkwbW7v9oeXFDjyRXtCWJtNOZ2UL'
	},
	'imgur': {
		client_id: 'e60c71383760a15',
		client_secret: '54de1523950a8bea8c6a461445082977ffa7adfb',
		request_token: 'https://api.imgur.com/oauth2/authorize?client_id=e60c71383760a15&response_type=token'
		//'https://app.getpostman.com/oauth2/callback#access_token=f2179a5e9b68ffb7b92969d49ca10f334f2b0532&expires_in=315360000&token_type=bearer&refresh_token=73a3e40943641f82ca3f07c2b52cc6857a03d158&account_username=klldesigndev&account_id=72276011'
	},
	'instagram': {
		client_id: '4f006fb6e156494d9f84141085c9ddae',
		client_secret: '8c233ead378f4ec399226e6ff988ea3b',
		request_token: 'https://api.instagram.com/oauth/authorize/?client_id=4f006fb6e156494d9f84141085c9ddae&redirect_uri=https://kaseyllabelle.github.io/IoP/callback.html&response_type=token'
		// 'https://kaseyllabelle.github.io/IoP/callback.html#access_token=6103829376.4f006fb.ae8af2aa30394f38b996aaf57002d7e4'
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
		// api.tumblr.com/v2/tagged?api_key=NPVdky515PEendzYYA44WarFcZeKhstduONQB979h3q8KMFCKM&tag=pitbull-puppies
	},
	'youtube': {
		api_key: 'AIzaSyCzk-5OigvpFn0Bo1U8InpPOj5VOc3Awf8'
		// https://www.googleapis.com/youtube/v3/search?key=AIzaSyCzk-5OigvpFn0Bo1U8InpPOj5VOc3Awf8&part=snippet&q=puppies
	}
};

// keep switch stmt in logins.js
// on callback, take string, convert into array, loop through

$(document).ready(function(){
	var selectedSources = localStorage.getItem('selectedSources');
	selectedSources = selectedSources.split(',');
	console.log(typeof(selectedSources), selectedSources);
	// selectedSources = string
	// helper to convert from obj to string back to obj

	for(var i=0; i<selectedSources.length; i++){
		if(!selectedSources[i].token.length){
			oAuthMethods[selectedSources[i].site]();

			// set global object named oAuthMethods
			// create var before load these secondary files
			// set function to login as a key of oAuth obj
			// that allows us to use the string we've already written to run the fn and log in
		}

	}
});

// for loop
// loop through array of objects
// look into each one, see if token has been filled out
// if token has been, go to next
// if not, stop for loop and call function related to site itself, pass in info associated with site
// when site finishes, run for loop again