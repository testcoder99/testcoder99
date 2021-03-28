$(function(){

	$('.reviews__slider').slick({
		slidesToShow:3,
		infinite:false,
		prevArrow:'<button type="button" class="slick-arrow slick-prev"><svg class="reviews-arrow"><use xlink:href=#arrow-left></use></svg></button>',
		nextArrow:'<button type="button" class="slick-arrow slick-next"><svg class="reviews-arrow"><use xlink:href=#arrow-right></use></svg></button>',
		responsive:[
  			{
  				breakpoint: 991,
  				settings:{
  					slidesToShow:2,
  				}
  			},
  			{
  				breakpoint: 771,
  				settings:{
  					slidesToShow:1,
  				}
  			},
  		]
	});


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
	$('.header__top-btn').on('click', function(){
		$('.header__menu-list').slideToggle('')
	});
})	
document.querySelectorAll('.scheduling__dropdown-wrapper').forEach(function (dropDownWrapper){

	const dropDownBtn = dropDownWrapper.querySelector('.scheduling__dropdown-btn');
	const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
	const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
	const dropDownInputHidden = dropDownWrapper.querySelector('.catalog-filter__input-hidden');


	dropDownBtn.addEventListener('click',function(){
		dropDownList.classList.toggle('dropdown__list--visible');
	});
	dropDownListItems.forEach(function(listItem){
		listItem.addEventListener('click', function(e){
			e.stopPropagation();
			dropDownBtn.innerText = this.innerText;
			dropDownBtn.focus();
			 dropDownInputHidden.value = this.dataset.value;
			dropDownList.classList.remove('dropdown__list--visible');

		});		
	});
	document.addEventListener('click', function(e){
		if (e.target !== dropDownBtn){
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});


	
	document.addEventListener('keydown', function (e){
		if(e.key === 'Tab' || e.key === 'Escape'){
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});
	});


