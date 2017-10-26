// oAuthMethods.pinterest = function(obj, requestFinalToken = false){
// 	console.log(obj);

// 	if(location.href.indexOf('token:') > -1){
// 		console.log(location.href);
// 		let token = location.href.replace(/.*token:/g,'').replace(/,callback:.*/g,'');
// 		localStorage.setItem('pinterest_token', token);
// 	}

// 	if(!requestFinalToken){
// 		win = window.open('https://api.500px.com/api/js-sdk/authorize?sdk_key=d53a58c94138c694793ca71c78cf347dae4b7e1b&callback=oAuthMethods.fivehundredpxcb',
// 						'500px_js_sdk_login',
// 						'width=1240,height=480,left=100,top=100,menu=no,location=yes,scrollbars=no,status=no,toolbar=no');
// 	}
// };

// https://api.pinterest.com/oauth/?response_type=code&client_id=4929100152309825327&state=puppies&scope=read_public&redirect_uri=https://kaseyllabelle.github.io/IoP/callback.html
// https://kaseyllabelle.github.io/IoP/callback.html?state=puppies&code=93ed5ba1a51d98ec
// https://api.pinterest.com/v1/oauth/token?grant_type=authorization_code&client_id=4929100152309825327&client_secret=cd9ec9a34b641dc603cada805774032b1a68767f37ebf0ade176160a50dc27fc&code=93ed5ba1a51d98ec

oAuthMethods.pinterest = function(obj, requestFinalToken = false){
	console.log(location.href);

	if(location.href.indexOf('state') === -1){
		console.log('if');
		window.location.href = 'https://api.pinterest.com/oauth/?response_type=code&client_id=4929100152309825327&state=puppies&scope=read_public&redirect_uri=https://kaseyllabelle.github.io/IoP/callback.html';
	}

	else{
		let authCode = getURLParameter('code');
		console.log(authCode);
		$.post('https://api.pinterest.com/v1/oauth/token?grant_type=authorization_code&client_id=4929100152309825327&client_secret=cd9ec9a34b641dc603cada805774032b1a68767f37ebf0ade176160a50dc27fc&code=' + authCode, 
			function(data){
				localStorage.setItem('pinterest_token', data.access_token);
				window.location.href = '/IoP/callback.html';
			}
		);
	}
};