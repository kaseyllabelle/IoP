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

function formatLocalStorage()
{
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

let h = 0;

function imageLoaded(){
	if(++h >= oAuthMethods.compiledImages.length){
		var msnry = new Masonry( elem, {
			// options
			itemSelector: '.grid-item',
			columnWidth: 200
		});
		$('.grid').css("visibility", "visible");
	}
};

oAuthMethods.displayImages = function(){
	oAuthMethods.compiledImages.sort(function(a, b){
		return 0.5 - Math.random()
	});

	for(i=0; i<oAuthMethods.compiledImages.length; i++){
		$('.grid').append(`
			<div class="grid-item wrapper">
				<a href="${oAuthMethods.compiledImages[i].url}">
					<div class="wrapper-inner">
						<img onLoad="imageLoaded()" class="puppy-pic" src="${oAuthMethods.compiledImages[i].thumbnail}"/>
					</div>
					<p class="title">Source: ${oAuthMethods.compiledImages[i].source}</p>
				</a>
			</div>
		`);
	}
}

var elem = document.querySelector('.grid');



// $('.container').infiniteScroll({
// 	// options
// 	path: '.pagination__next',
// 	append: '.post',
// 	history: false,
// });

// div class="results" data-attribute="source" data-sort="type"
// sort by type (img, gif, video), source (500px, insta, etc.)