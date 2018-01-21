var h = 0;
var elem = document.querySelector('.grid');
oAuthMethods.currentPage = 0;

$(document).ready(function(){	
	$('input[type=checkbox]').click(function(){
		formatLocalStorage();
	});
	$('input[type=submit]').click(function(){
		if($(this).attr('disabled')){
			return false;
		}
		localStorage.setItem('query', $('input[type=text]').val() + ' puppies');
		window.location.href = '/IoP/callback.html';
	});
	$('input[type=text]').keydown(function(){
		if(localStorage.getItem('checkedCheckboxes')){
			$('input[type=submit]').removeAttr('disabled');
		}
	});
	// $('input[type=button]').click(function(){
	// 	oAuthMethods.currentPage++;
	// 	oAuthMethods.compiledImages=[];
	// 	oAuthMethods.fivehundredpx_token(localStorage.getItem('fivehundredpx_token'));
	// });	
	// for(k in localStorage){
	// 	if(k.indexOf('_token') > -1){
	// 		oAuthMethods[k](localStorage.getItem(k));
	// 	}
	// }

	if(~window.location.href.indexOf('load-puppies')){
		$('.main').append(`
			<div class="loading">
				<p>Loading puppies!</p>
				<img src="./images/loading.gif"/>
			</div>
		`);
		oAuthMethods.compiledImages = [];
		oAuthMethods.loadArray = [];
		oAuthMethods.loadIndex = 0;
		let checkboxes = localStorage.getItem('checkedCheckboxes') ? localStorage.getItem('checkedCheckboxes').split(',') : [];
		for(i=0; i<checkboxes.length; i++){
			$(`input[name=${checkboxes[i]}]`).attr('checked', 'checked');
		}
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
	let selectedSources = '';
	$('input[type=submit]').removeAttr('disabled');
	$('input[type=checkbox]').each(function(){
		if(this.checked){
			selectedSources += $(this).attr('name') + ',';
		}
		else{
			delete localStorage[$(this).attr('name') + '_token'];
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
	localStorage.setItem('checkedCheckboxes',selectedSources);
}

oAuthMethods.loadImages = function(){
	if(oAuthMethods.loadIndex >= oAuthMethods.loadArray.length){
		oAuthMethods.displayImages();
		return;
	}
	oAuthMethods[oAuthMethods.loadArray[oAuthMethods.loadIndex][0]](oAuthMethods.loadArray[oAuthMethods.loadIndex][1]);
}

function imageLoaded(){
	if(++h >= oAuthMethods.compiledImages.length){
		let msnry = new Masonry( elem, {
			itemSelector: '.grid-item',
			columnWidth: '.grid-sizer',
			gutter: '.gutter-sizer',
			percentPosition: true
		});
		$('.main .loading').css('display', 'none');
		$('.grid').css('visibility', 'visible');
		$('input[type=button]').css('display', 'block');
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