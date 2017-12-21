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
	var xhr = $.get(`https://www.instagram.com/explore/tags/${localStorage.query}/?hl=en`)
	xhr.catch(function(error){
		console.log(error);
		oAuthMethods.loadIndex ++;
		oAuthMethods.loadImages();
	});
	xhr.done(function(data){
	  let objStr = data.match(/(window\._sharedData\s=\s)(.*)(?=;.*<\/script>)/g);
	  objStr = objStr[0];
	  objStr = objStr.replace(/window\._sharedData\s=\s/,'').trim();
	  setTimeout(()=>{
	    let obj = JSON.parse(instagramPuppies);
	    let data = obj.entry_data.TagPage["0"].tag.media.nodes
	    // console.log(obj);
		for(let i=0; i<Math.min(data.length, 10); i++){
			oAuthMethods.compiledImages.push({
				source: 'instagram', 
				url: `https://www.instagram.com/p/${data[i].code}/`,
				thumbnail: data[i].display_src, 
				title: data[i].caption, 
				type: (data[i].is_video) ? 'video' : 'image'
			});
		}
		oAuthMethods.loadIndex ++;
		oAuthMethods.loadImages();
	  },1000);
	  window.instagramPuppies = objStr;
	})
};