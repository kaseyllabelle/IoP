var xhr;

oAuthMethods.pinterest = function(obj, requestFinalToken = false){
	if(location.href.indexOf('state') === -1){
		window.location.href = 'https://api.pinterest.com/oauth/?response_type=code&client_id=4929100152309825327&state=puppies&scope=read_public&redirect_uri=https://kaseyllabelle.github.io/IoP/callback.html';
	}
	else{
		let authCode = getURLParameter('code');
		$.post('https://api.pinterest.com/v1/oauth/token?grant_type=authorization_code&client_id=4929100152309825327&client_secret=cd9ec9a34b641dc603cada805774032b1a68767f37ebf0ade176160a50dc27fc&code=' + authCode, 
			function(data){
				localStorage.setItem('pinterest_token', data.access_token);
				window.location.href = '/IoP/callback.html';
			}
		);
	}
};

// oAuthMethods.pinterest_token = function(token){
// 	// var xhr = $.get(`https://api.pinterest.com/v1/search/pins/?q=${localStorage.query}&access_token=${token}&limit=10`);
// 	xhr = $("#content").load(`https://www.pinterest.com/search/pins/?q=${localStorage.query}&rs=typed&term_meta[]=pittie%7Ctyped`);
// 	// xhr.done(function(data){
// 	// 	console.log("WE HAVE PUPPIES FROM PINTEREST!", data);
// 	// 	// for(let i=0; i<Math.min(data.items.length, 10); i++){
// 	// 	// 	oAuthMethods.compiledImages.push({
// 	// 	// 		source: 'youtube', 
// 	// 	// 		url: 'https://www.youtube.com/watch?v=' + data.items[i].id.videoId, 
// 	// 	// 		thumbnail: data.items[i].snippet.thumbnails.medium.url, 
// 	// 	// 		title: data.items[i].snippet.title, 
// 	// 	// 		type: data.items[i].id.kind
// 	// 	// 	});
// 	// 	// }
// 	// 	oAuthMethods.loadIndex ++;
// 	// 	oAuthMethods.loadImages();
// 	// });
// 	console.log(xhr);
// 	xhr.catch(function(error){
// 		console.log(error);
// 		oAuthMethods.loadIndex ++;
// 		oAuthMethods.loadImages();
// 	});
// };


oAuthMethods.pinterest_token = function(token){
	$.ajax({
		type: 'GET',
		url: `https://www.pinterest.com/search/pins/?q=${localStorage.query}`,
		getAllResponseHeaders: function(data,a,b){ 
			console.log('xxxxx',data,a,b);
		},
		success: function(data, textStatus, XMLHttpRequest){
			console.log(data, textStatus, XMLHttpRequest);
			var cookietoSet=XMLHttpRequest.getResponseHeader('Set-Cookie');
			// Set_Cookie(cookietoSet.split('=')[0],cookietoSet.split('=')[1],expires, path, domain, secure)//change as per ur needs
		}, 
		error: function(XMLHttpRequest, textStatus, errorThrown){
			alert(XMLHttpRequest.getResponseHeader('some_header'));
			oAuthMethods.loadIndex ++;
			oAuthMethods.loadImages();
		}
	});
};

function Set_Cookie( name, value, expires, path, domain, secure )
{
	// set time, it's in milliseconds
	var today = new Date();
	today.setTime( today.getTime() );

	/*
	if the expires variable is set, make the correct
	expires time, the current script below will set
	it for x number of days, to make it for hours,
	delete * 24, for minutes, delete * 60 * 24
	*/
	if ( expires )
	{
	expires = expires * 1000 * 60 * 60 * 24;
	}
	var expires_date = new Date( today.getTime() + (expires) );

	document.cookie = name + "=" +escape( value ) +
	( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) +
	( ( path ) ? ";path=" + path : "" ) +
	( ( domain ) ? ";domain=" + domain : "" ) +
	( ( secure ) ? ";secure" : "" );
};


	// var xhr = $.get(`https://www.pinterest.com/search/pins/?q=${localStorage.query}`)
	// xhr.catch(function(error){
	// 	console.log(error);
	// 	oAuthMethods.loadIndex ++;
	// 	oAuthMethods.loadImages();
	// });
	// xhr.done(function(data, a, b, c){
	// 	console.log(data, a, b, c);
		// var cookietoSet = XMLHttpRequest.getResponseHeader('Set-Cookie');
		// Set_Cookie(cookietoSet.split('=')[0],cookietoSet.split('=')[1],expires, path, domain, secure)


		// let objStr = data.match(/(window\._sharedData\s=\s)(.*)(?=;.*<\/script>)/g);
		// objStr = objStr[0];
		// objStr = objStr.replace(/window\._sharedData\s=\s/,'').trim();

		// setTimeout(()=>{
		// 	let obj = JSON.parse(pinterestPuppies);
		// 	let data = obj.entry_data.TagPage["0"].tag.media.nodes
		// 	console.log(obj);
		// 	for(let i=0; i<Math.min(data.length, 10); i++){
		// 		oAuthMethods.compiledImages.push({
		// 			source: 'instagram', 
		// 			url: `https://www.instagram.com/p/${data[i].code}/`,
		// 			thumbnail: data[i].display_src, 
		// 			title: data[i].caption, 
		// 			type: (data[i].is_video) ? 'video' : 'image'
		// 		});
		// 	}
		// 	oAuthMethods.loadIndex ++;
		// 	oAuthMethods.loadImages();
		// },1000);

	// 	// window.pinterestPuppies = objStr;
// 	// })
// };