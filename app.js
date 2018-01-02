$(document).ready(function(){
	$('input[type=checkbox]').click(function(){
		formatLocalStorage();
	});
	$('input.button').click(function(){
		localStorage.setItem('query',$('input[type=text]').val());
		window.location.href = '/IoP/callback.html';
	});

 //  	// remove this before pushing
	// localStorage.setItem('fivehundredpx_token', 'jdqPAbiJ7hoWo9IAuM0DjNS23P1mt2VOAc3p1x7T');
	// localStorage.setItem('giphy_token', 'AmvMPkwbW7v9oeXFDjyRXtCWJtNOZ2UL');
	// localStorage.setItem('imgur_token', '25106fb1b49ed4ba17901c415d3c2ac8803ec921');
	// localStorage.setItem('instagram_token', '6103829376.4f006fb.ae8af2aa30394f38b996aaf57002d7e4');
	// // localStorage.setItem('pinterest_token', 'AeGLHsdraOcQzJFOXIzGOuthtj9iFQJnit7vt0pEkOfdp8A4swAAAAA');
	// localStorage.setItem('tumblr_token', 'NPVdky515PEendzYYA44WarFcZeKhstduONQB979h3q8KMFCKM');
	// localStorage.setItem('youtube_token', 'AIzaSyCzk-5OigvpFn0Bo1U8InpPOj5VOc3Awf8');
	// localStorage.setItem('query', 'pittie');

	if(~window.location.href.indexOf('load-puppies')){
		oAuthMethods.compiledImages = [];
		oAuthMethods.loadArray = [];
		oAuthMethods.loadIndex = 0;
		for(key in localStorage){
			if(~key.indexOf('_token')){
				let tmp = [key, localStorage[key]];
				oAuthMethods.loadArray.push(tmp);
			}
		}
		oAuthMethods.loadImages();
	}
});

function formatLocalStorage(){
	var selectedSources = '';
	$('input[type=checkbox]').each(function(){
		if(this.checked){
			selectedSources += $(this).attr('name') + ',';
		}
	});
	selectedSources = selectedSources.slice(0, -1);
	if(~selectedSources.indexOf('fivehundredpx')){
		selectedSources = selectedSources.replace(/fivehundredpx/g, '');
		selectedSources += ',fivehundredpx';
	}
	selectedSources.replace(/,,/g, ',');
	if(selectedSources.charAt(0) === ','){
		selectedSources = selectedSources.slice(1, selectedSources.length);
	}
	localStorage.setItem('selectedSources',selectedSources);
}

oAuthMethods.loadImages = function(){
	if(oAuthMethods.loadIndex >= oAuthMethods.loadArray.length){
		console.log(oAuthMethods.compiledImages);
		oAuthMethods.displayImages();
		return;
	}
	// console.log(oAuthMethods.loadArray[oAuthMethods.loadIndex], parseInt(oAuthMethods.loadIndex));
	oAuthMethods[oAuthMethods.loadArray[oAuthMethods.loadIndex][0]](oAuthMethods.loadArray[oAuthMethods.loadIndex][1]);
}

let h = 0; // where should this go?

function imageLoaded(){
	if(++h >= oAuthMethods.compiledImages.length){
		var msnry = new Masonry( elem, {
			itemSelector: '.grid-item',
			columnWidth: '.grid-sizer',
			gutter: '.gutter-sizer',
			percentPosition: true
		});
		$('.grid').css("visibility", "visible");

		// // INFINITE SCROLL
		// // get Masonry instance
		// var msnry = $grid.data('masonry');

		// // init Infinite Scroll
		// $grid.infiniteScroll({
		// 	// Infinite Scroll options...
		// 	append: '.grid__item',
		// 	outlayer: msnry,
		// });

		// // $('.container').infiniteScroll({
		// // 	path: '.pagination__next',
		// // 	append: '.post',
		// // 	history: false,
		// // });
	}
};

oAuthMethods.displayImages = function(){
	oAuthMethods.compiledImages.sort(function(a, b){
		return 0.5 - Math.random()
	});
	for(i=0; i<oAuthMethods.compiledImages.length; i++){
		$('.grid').append(`
			<div class="grid-item post wrapper">
				<a href="${oAuthMethods.compiledImages[i].url}" target="_blank">
					<div class="wrapper-inner">
						<img onLoad="imageLoaded()" class="thumbnail" src="${oAuthMethods.compiledImages[i].thumbnail}"/>
					</div>
					<p class="caption">Source: ${oAuthMethods.compiledImages[i].source}</p>
				</a>
			</div>
		`);
	}
}

var elem = document.querySelector('.grid'); // where should this go?