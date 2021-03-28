$(function(){
	$('.reviews__wrapper-slider').slick({
		arrows:false,
		dots:true,

	});
	$('.menu__btn').on('click', function(){
		$('.menu__list').slideToggle();
	});
	
})	
