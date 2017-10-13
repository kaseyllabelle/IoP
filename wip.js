// code from app.js
const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
var searchQuery, pageToken = '';

$('form').submit(function(event){
	event.preventDefault();
	if(searchQuery !== $('input').val()+' puppies'){
		pageToken = '';
	}
	searchQuery = $('input').val()+' puppies';
	getDataFromApi(searchQuery, renderResults);
});

$('.js-results').on('click', 'button', function(){
	$('form').submit();
});

function getDataFromApi(searchTerm, callback){
  var query = {
  	part: 'snippet',
  	key: 'AIzaSyAesluMeXQRiHMHR-B0Ud_35mPBHAmuAMg',
  	q: searchTerm,
  	pageToken: pageToken
  }
  $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
}

function renderResults(data){
	pageToken = data.nextPageToken;
	$('.js-results').find('button').remove();
	$('h2').html(`
		${searchQuery}
	`);
	for(i=0; i<data.items.length; i++){
		$('.js-results').append(`
			<div class="result-container">
				<a class="result" href="https://www.youtube.com/watch?v=${data.items[i].id.videoId}">
					<img src="${data.items[i].snippet.thumbnails.medium.url}" class="thumbnail"/>
					<p class="title">${data.items[i].snippet.title}</p>
				</a>
			</div>
		`);
	}
	$('.js-results').append(`
		<button class="button">More ${searchQuery}, please!</button>
	`);
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