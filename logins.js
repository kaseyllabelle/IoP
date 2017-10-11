var oAuthObj = {
	'fivehundredpx': {
		post: 'https://api.500px.com/v1/oauth/request_token?oauth_callback=https://kaseyllabelle.github.io/IoP/callback.html',
		// oauth_callback:'https://kaseyllabelle.github.io/IoP/callback.html'
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

$(document).ready(function(){
	var selectedSources = localStorage.getItem('selectedSources');
	console.log(selectedSources);
});

/*

//codepen
$(document).ready(function(){
  $('input').click(function(){
    formatLocalStorage();
  });
})

function formatLocalStorage()
{
  var oAuths = [];
  $('input[type=checkbox]').each(function () {
    if(this.checked){
      let oAuthCreds = {
        site:$(this).attr('name'),
        token:''
      }
      oAuths.push(oAuthCreds)
    }
  });
  console.log('oAuths',oAuths);
  localStorage.setItem('oAuths',oAuths)
}


// code from callback.html
function getURLParameter(name)
{ return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null; }

var fiveHundredPx = {
	oauth_callback: 'https://kaseyllabelle.github.io/IoP/callback.html'
}

var pinterest = {
		grant_type:'authorization_code',
		client_id:'4924393521510627802',
		client_secret:'953d71f8410650fb398fc0e22eb771318dcf6b0d33a80e3609f8dc73e5665758',
		code:'b49a7a88d9bd5e8a'};

$('form').submit(function(e){
	event.preventDefault();
	let obj = {},
			tmp = '';

			if($('textarea').val().length)
			{
				tmp = $('textarea').val().trim().split(',');
				tmp.map((itm) => {
					let tmp2 = itm.split(/:(?=\')/g);
					// if(tmp2[1] && !tmp2[1].length){continue}
					obj[tmp2[0].trim()] = tmp2[1].replace(/\'/g,'').trim();
				})
			}
			// obj = JSON.stringify(obj)
			console.log('obj:',obj,tmp,$('input[type="radio"]:checked').val());
	$.ajax({
		method:$('input[type="radio"]:checked').val(),
		url:$('input[type="text"]').val(),
		data: obj
	},function(data){console.log(data);});
});

$(document).ready(()=>
{
	//handle pinterest from start to finish
	if(getURLParameter('state') === 'pinpuppies')
	{
		$('input[type="text"]').val('https://api.pinterest.com/v1/oauth/token')
		$('textarea').val(`grant_type:'authorization_code',client_id:'4924393521510627802',client_secret:'953d71f8410650fb398fc0e22eb771318dcf6b0d33a80e3609f8dc73e5665758',code:'${getURLParameter('code')}'`)
		$('input[type="submit"]').click();
		alert('pinterest key is in the console (network tab)')
	}
	//giphy
	var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=AmvMPkwbW7v9oeXFDjyRXtCWJtNOZ2UL&limit=5");
	xhr.done(function(data) { console.log("success got data", data); });
});
function login500(e)
{
	window.open('https://api.500px.com/api/js-sdk/authorize?sdk_key=04a57d5e6d2c3a8ee908e4c41db09f0f5ec31b26&callback=login500cb',
						'500px_js_sdk_login',
						'width=1240,height=480,left=100,top=100,menu=no,location=yes,scrollbars=no,status=no,toolbar=no');
}
function login500cb(e)
{
	$('body').append('howdy');
	//https://github.com/500px/500px-js-sdk/blob/master/500px.js
	let iframe_element = document.createElement('iframe');
	iframe_element.src = 'https://api.500px.com/api/js-sdk/check_authorization?sdk_key=04a57d5e6d2c3a8ee908e4c41db09f0f5ec31b26&callback=check500';
	$('body').appendChild(iframe_element);
	console.log('login 500',e);
}
function check500(e)
{
	$('body').append('doody');
	//https://api.500px.com/api/js-sdk/check_authorization?sdk_key=04a57d5e6d2c3a8ee908e4c41db09f0f5ec31b26&callback=check500
	console.log('check500',e);
}
function createNonce(len){
  let now = new Date().getTime();
  nonce = now+'';

  while (nonce.length < len)
  { nonce += new Date().getTime(); }
  nonce = nonce.split('').reverse().join('');
  nonce = btoa(nonce);
  nonce = nonce.slice(0,len)
  nonce = nonce.replace(/\+/g, '0').replace(/\//g, '0');
  
  return nonce;
}

*/