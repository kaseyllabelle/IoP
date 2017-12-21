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
	var xhr = $.get(`https://www.pinterest.com/search/pins/?q=${localStorage.query}`)
	xhr.catch(function(error){
		console.log(error);
		oAuthMethods.loadIndex ++;
		oAuthMethods.loadImages();
	});
	xhr.done(function(data){
		console.log(data);
		
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

		// window.pinterestPuppies = objStr;
	})
};