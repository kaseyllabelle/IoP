oAuthMethods.instagram = function(obj, requestFinalToken = false){
	if(!requestFinalToken){
		window.location.href = 'https://api.instagram.com/oauth/authorize/?client_id=4f006fb6e156494d9f84141085c9ddae&redirect_uri=https://kaseyllabelle.github.io/IoP/callback.html&response_type=token&scope=public_content';
	}
	else{
		localStorage.setItem('instagram_token', getURLParameter('access_token'));
		window.location.href = '/IoP/callback.html';
	}
};

oAuthMethods.instagram_token = function(token){
	let xhr = $.get(`https://www.instagram.com/explore/tags/${localStorage.query}/?hl=en`)
	xhr.catch(function(error){
		console.log(error);
		oAuthMethods.loadIndex ++;
		oAuthMethods.loadImages();
	});
	xhr.done(function(data){
		console.log("WE HAVE PUPPIES FROM INSTAGRAM!", data);
		let objStr = data.match(/(window\._sharedData\s=\s)(.*)(?=;.*<\/script>)/g);
		objStr = objStr[0];
		objStr = objStr.replace(/window\._sharedData\s=\s/,'').trim();
		setTimeout(()=>{
		let obj = JSON.parse(instagramPuppies);
		let data = obj.entry_data.TagPage["0"].graphql.hashtag.edge_hashtag_to_media.edges
		for(let i=0; i<Math.min(data.length, 10); i++){
			if(!data[i].node.thumbnail_src){
				continue;
			}
			oAuthMethods.compiledImages.push({
				source: 'instagram', 
				url: data[i].node.display_url,
				thumbnail: data[i].node.thumbnail_src, 
				title: data[i].node.edge_media_to_caption.edges["0"].node.text, 
				type: (data[i].node.is_video) ? 'video' : 'image'
			});
		}
		oAuthMethods.loadIndex ++;
		oAuthMethods.loadImages();
		},1000);
		window.instagramPuppies = objStr;
	});
};