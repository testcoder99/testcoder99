document.querySelector('.menu__btn').addEventListener('click', function(){
	this.classList.toggle('menu__btn--active');
	document.querySelector('.header__top-mobile').classList.toggle('header__top-mobile--active');
})



