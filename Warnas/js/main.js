$(function(){
	$('.content-block__list-wrapper').click(function(event) {
		event.preventDefault();
		 $('.content-block__info').not($(this)).removeClass('content-block__info--active');;
		 $($(this).attr('href')).addClass('content-block__info--active');
	});
})	

document.querySelector('.menu__btn').addEventListener('click', function(){
	document.querySelector('.menu-mobile').classList.add('menu-mobile--active')
});

document.querySelector('.close-btn').addEventListener('click', function(){
	document.querySelector('.menu-mobile').classList.remove('menu-mobile--active')
});