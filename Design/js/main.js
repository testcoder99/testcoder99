$(function(){
	$('.header__body-slider').slick({
		arrows:false,
		autoplay:true,
	})
	
	var header =$(".header"),
		headerTop =$("#header__top"),
		introB = $("#body").innerHeight(),
		scrollOfset = $(window).scrollTop();

    checkScroll(scrollOfset);		

	$(window).on("scroll", function() {
		
		scrollOfset = $(this).scrollTop();

		checkScroll(scrollOfset);
		
	});

	function checkScroll(scrollOfset) {

		if( scrollOfset >= introB) {
			header.addClass("header__active-fixed");
			headerTop.addClass("header__top-fixed");
		}
		else{
			header.removeClass("header__active-fixed");
			headerTop.removeClass("header__top-fixed");
		}
	};

	$("[data-scroll").on("click", function(event){
		event.preventDefault();

		var	$this = $(this), 
			blockId = $this.data("scroll"),
			blockOffset = $(blockId).offset().top;
		$(".menu-mobile").removeClass("menu-mobile--active");
		$(".header__top-link").removeClass("active")	
		$this.addClass("active");

		$("html, body").animate({
			scrollTop: blockOffset
		}, 1500);
		
	});
});


document.querySelector('.menu__btn').addEventListener('click',function(){
	document.querySelector('.menu-mobile').classList.add('menu-mobile--active')
});
document.querySelector('.menu-mobile__close').addEventListener('click',function(){
	document.querySelector('.menu-mobile').classList.remove('menu-mobile--active')
});

const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll(params) {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const  animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint ) && pageYOffset < (animItemOffset + animItemHeight)){
				animItem.classList.add('active');
			} else {
				if(!animItem.classList.contains('anim-no-hide')){
				animItem.classList.remove('active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }	
	}
	setTimeout(() => {
		animOnScroll();
	}, 300);
}