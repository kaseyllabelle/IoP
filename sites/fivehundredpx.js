let iframe_element;

oAuthMethods.fivehundredpx = function(obj, requestFinalToken = false){
	let win;
	if(location.href.indexOf('token:') > -1){
		let token = location.href.replace(/.*token:/g,'').replace(/,callback:.*/g,'');
		localStorage.setItem('fivehundredpx_token', token);
		window.close();
		self.close();
		var wind = window.open("","_self"); wind.close();
		window.parent.close();
		top.open('','_self',''); top.close();
	}
	if(!requestFinalToken){
		win = window.open('https://api.500px.com/api/js-sdk/authorize?sdk_key=d53a58c94138c694793ca71c78cf347dae4b7e1b&callback=oAuthMethods.fivehundredpxcb',
						'500px_js_sdk_login',
						'width=1240,height=480,left=100,top=100,menu=no,location=yes,scrollbars=no,status=no,toolbar=no');
	}
};

oAuthMethods.fivehundredpx_token = function(token){
	var xhr = $.ajax({url: `https://api.500px.com/v1/photos/search?term=${localStorage.query}`, 
		headers: {'Authorization': `OAuth oauth_consumer_key="xHkW9aeTnoYk4k1lUYicCjbKY9VXjYOWxE3OsBt8"`}});
	xhr.done(function(data){
		console.log("WE HAVE PUPPIES FROM 500PX!", data);
		oAuthMethods.compiledImages.push({type: 'fivehundredpx', data});
		oAuthMethods.loadIndex ++;
		oAuthMethods.loadImages();
	});
};

// Authorization:
// OAuth oauth_consumer_key=&quot;xHkW9aeTnoYk4k1lUYicCjbKY9VXjYOWxE3OsBt8
// &quot;,oauth_signature_method=
// &quot;HMAC-SHA1&quot;,oauth_timestamp=
// &quot;1509565131&quot;,oauth_nonce=
// &quot;58246894&quot;,oauth_version=
// &quot;1.0&quot;,oauth_token=
// &quot;B2mY6ayoLjeUbGA6hl7cd0J3SeAxxQyKahRC1yxk
// &quot;,oauth_signature=&quot;Tt9cqP%2FIPrkEPfSMGrDCCRMPB2g%3D&quot;