$(function(){
	$('.content-block__list-wrapper').click(function(event) {
		event.preventDefault();
		 $('.content-block__info').not($(this)).removeClass('content-block__info--active');;
		 $($(this).attr('href')).addClass('content-block__info--active');
	});
	$('.characters__warning-button--close').on('click', function(event){
		event.preventDefault();
		$('.characters__warning').addClass('characters__warning--hidden')
	});
	$('.characters-content__tabs-item').click(function(event) {
		event.preventDefault();
		$('.characters-content__wrapper').not($(this)).removeClass('characters-content__wrapper--active');
		$($(this).attr('href')).addClass('characters-content__wrapper--active');
		if($('.characters-content__tabs-item').hasClass('characters-content__tabs-item--active')){
		 		$('.characters-content__tabs-item').removeClass('characters-content__tabs-item--active');
				$('.characters-content__tabs-item').not($(this)).removeClass('characters-content__tabs-item--active');
		 };
		$(this).addClass('characters-content__tabs-item--active');
	});

})	

document.querySelector('.menu__btn').addEventListener('click', function(){
	document.querySelector('.menu-mobile').classList.add('menu-mobile--active')
});

document.querySelector('.close-btn').addEventListener('click', function(){
	document.querySelector('.menu-mobile').classList.remove('menu-mobile--active')
});