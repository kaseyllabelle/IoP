oAuthMethods.pinterest = function(){
	console.log('log into pinterest with:' + 'app_id: 4924393521510627802, app_ssecret: 953d71f8410650fb398fc0e22eb771318dcf6b0d33a80e3609f8dc73e5665758, authorization_code: https://api.pinterest.com/oauth/?response_type=code&client_id=4924393521510627802&state=puppies&scope=read_public&redirect_uri=https://kaseyllabelle.github.io/IoP/callback.html, access_token: https://api.pinterest.com/v1/oauth/token?grant_type=authorization_code&client_id=4924393521510627802&client_secret=953d71f8410650fb398fc0e22eb771318dcf6b0d33a80e3609f8dc73e5665758&code=41282aeb31f629c4');
	// 'pinterest': {
	// 	app_id: '4924393521510627802',
	// 	app_ssecret: '953d71f8410650fb398fc0e22eb771318dcf6b0d33a80e3609f8dc73e5665758',
	// 	authorization_code: 'https://api.pinterest.com/oauth/?response_type=code&client_id=4924393521510627802&state=puppies&scope=read_public&redirect_uri=https://kaseyllabelle.github.io/IoP/callback.html',
	// 	access_token: 'https://api.pinterest.com/v1/oauth/token?grant_type=authorization_code&client_id=4924393521510627802&client_secret=953d71f8410650fb398fc0e22eb771318dcf6b0d33a80e3609f8dc73e5665758&code=41282aeb31f629c4'
	// }
};


// update info from imgur -> pinterest
// oAuthMethods.imgur = function(requestFinalToken = false){
// 	if(!requestFinalToken){
// 		window.location.href = 'https://api.imgur.com/oauth2/authorize?client_id=e60c71383760a15&response_type=token';
// 	}
// 	else{
// 		window.location.href = `
// 			https://kaseyllabelle.github.io/IoP/callback.html#
// 				access_token=${getURLParameter(access_token)}&
// 				expires_in=315360000&
// 				token_type=bearer&
// 				refresh_token=${getURLParameter(refresh_token)}&
// 				account_username=${getURLParameter(account_username)}&
// 				account_id=${getURLParameter(account_id)}
// 			`;
// 		if(){

// 		}
// 	}
// };