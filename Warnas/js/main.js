$(function(){
	$('.header-block__list-link').click(function(event) {
		event.preventDefault();
		 $('.header-block__info').not($(this)).removeClass('header-block__info--active');;
		 $($(this).attr('href')).addClass('header-block__info--active');
	});
})	



