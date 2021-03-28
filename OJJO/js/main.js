$(function(){
	$('.categories__item-link').click(function(event) {
		event.preventDefault();
		 	if($('.categories__item').hasClass('categories__item--active')){
		 		$('.categories__item-link').removeClass('categories__item-link--active');
				$('.categories__item').not($(this)).removeClass('categories__item--active');
		  }
		 $(this).addClass('categories__item-link--active');
		 $(this).parent().addClass('categories__item--active');
		 $('.categories__inner').not($(this)).removeClass('categories__inner--active');;
		 $($(this).attr('href')).addClass('categories__inner--active');
	});
	$('.subscribe__info-title').on('click', function(){
		$(this).toggleClass('subscribe__info-active').next().slideToggle();
		$('.subscribe__info-title').not($(this)).removeClass('subscribe__info-active');
		$('.subscribe__info-content').not($(this).next()).slideUp(300);
	});

	

	var header =$("#header"),
		contentH = $("#content").innerHeight(),
		scrollOfset = $(window).scrollTop();

    checkScroll(scrollOfset);		

	$(window).on("scroll", function() {
		
		scrollOfset = $(this).scrollTop();

		checkScroll(scrollOfset);
		
	});
	function checkScroll(scrollOfset) {

		if( scrollOfset >= contentH) {
			header.addClass("page-header--fixed");
			header.addClass("page-header");
		}
		else{
			header.removeClass("page-header--fixed");
		}
	}
	
	$(".menu__btn").on("click", function(event){
		event.preventDefault();//Убирает стандратное поведение кнопки
		$(".menu-mobile").toggleClass("menu-mobile--active")
		$(this).toggleClass("active")

	});

	jQuery("a.galerey__content-video").YouTubePopUp( { autoplay: 1 } );
   

	

})
	
	document.querySelectorAll('.catalog-filter__list-wrapper').forEach(function (dropDownWrapper){

	const dropDownBtn = dropDownWrapper.querySelector('.catalog-filter__list-btn');
	const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
	const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
	const dropDownInputHidden = dropDownWrapper.querySelector('.catalog-filter__input-hidden');


	//Клик по кнопке. Открыть/закрыть select.
	dropDownBtn.addEventListener('click',function(){
		dropDownList.classList.toggle('dropdown__list--visible');
	});
	//Выбор элемента списка. Запомнтить выбранное значение. Закрыть дропдаун
	dropDownListItems.forEach(function(listItem){
		listItem.addEventListener('click', function(e){
			e.stopPropagation();//Типа z-index больше всего документа 
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


	//Нажатие на Tab или на Escape. Закрыть дропдаун
	document.addEventListener('keydown', function (e){
		if(e.key === 'Tab' || e.key === 'Escape'){
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});
	});
		
	window.onload = function () {
	var imgArr = document.getElementsByClassName('galery-content');
	var modalWindow = document.getElementById('modalImg');
	var modalImg = document.getElementById('img01');
	var caption =document.getElementById('caption');
	var span = document.getElementById('galerey-close');
	var modalBlock = document.getElementById('modal__block');


	for(i=0;i<imgArr.length;i++){
		var picture = imgArr[i];
		picture.onclick = function(){
			openImg(this);
		}
	}
	function openImg(pic){
		modalWindow.style.display='block';
		modalBlock.style.transform = 'translateY(0%)';
		modalImg.src = pic.src;

	  
	}

	function close(){
		modalWindow.style.display ='none';
	}
	span.onclick = function(){
		
		setTimeout(	close, 100);
	}


}
	const btn = document.querySelector('.service__content-btn');
		
		btn.addEventListener('click', function() {
		document.querySelector('.service__info-text').classList.toggle('service__info-text--active');
	  	btn.innerHTML =
	    (btn.innerHTML === 'читать полностью') ? btn.innerHTML = 'Скрыть' : btn.innerHTML = 'читать полностью';
	
	});