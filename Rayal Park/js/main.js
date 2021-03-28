$(function(){
	$('.menu__btn').on('click', function(){
		$('.header__top-list').slideToggle();
	});
	$("[data-scroll").on("click", function(event){
		event.preventDefault();

		var	$this = $(this), 
			blockId = $this.data("scroll"),
			blockOffset = $(blockId).offset().top;
		$(".menu-mobile").removeClass("menu-mobile--active");
		$('.header__top-list').slideToggle();
		$(".header__list-link").removeClass("active")	
		$this.addClass("active");

		$("html, body").animate({
			scrollTop: blockOffset
		}, 1500);
		
	});
	var header =$(".header__top-content"),
		headerTop =$("#header__top"),
		introB = $("#content").innerHeight(),
		scrollOfset = $(window).scrollTop();

    checkScroll(scrollOfset);		

	$(window).on("scroll", function() {
		
		scrollOfset = $(this).scrollTop();

		checkScroll(scrollOfset);
		
	});

	function checkScroll(scrollOfset) {

		if( scrollOfset >= introB) {
			header.addClass("header__top-content--fixed");
		}
		else{
			header.removeClass("header__top-content--fixed");
			headerTop.removeClass("header__top-fixed");
		}
	};
})	



