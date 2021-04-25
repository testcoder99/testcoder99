$(function(){
	$('.menu__btn').on('click', function(){
		$('.header__top-list').slideToggle();
	});
	$("[data-scroll").on("click", function(event){
		event.preventDefault();

		var	$this = $(this), 
			blockId = $this.data("scroll"),
			blockOffset = $(blockId).offset().top;
		$("html, body").animate({
			scrollTop: blockOffset
		}, 1500);
		
	});
})	



