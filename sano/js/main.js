$(function(){
	$('.product-tabs__list-link').click( function(event){
		event.preventDefault();
		if($('.product-tabs__list-link').hasClass('product-tabs__list-link--active')){
			$('.product-tabs__list-link').not($(this)).removeClass('product-tabs__list-link--active');
		}
		$(this).addClass('product-tabs__list-link--active');
		$('.product-wrapper__content-item').not($(this)).removeClass('product-wrapper__content-item--active');
		$($(this).attr('href')).addClass('product-wrapper__content-item--active');
	});



	// $('.product2-settings__dropdown-wrapper').click( function(e){
	// 	e.stopPropagation();
	// 	$(this).toggleClass('product2-settings__dropdown-wrapper--active');
	// 	$(this).children('.product2-settings__dropdown-btn').toggleClass('product2-settings__dropdown-btn--active');

	// });
	// $('body').click( function(){
	// 	$('.product2-settings__dropdown-wrapper').removeClass('product2-settings__dropdown-wrapper--active');
	// 	$('.product2-settings__dropdown-btn').removeClass('product2-settings__dropdown-btn--active');
	// });

	// Code for fqa.html
	$('.FQA-wrapper__content-item').on('click', function(){
		$(this).children('.FQA-contents__content-symbol').toggleClass('FQA-contents__content-symbol--active').next().slideToggle();
		

	});

	// Main index.html slider
	$('.header-body__slider').slick({
		dots:true,
		responsive:[
		{
			breakpoint:771,
			settings:{
				arrows:false, 
			}
		},
		]
	});

	// Slider "Aktuala informacija"
	$('.information-wrapper__colum-slider').slick({
		dots:true,
		arrows:false,
		autoplay:3000,
	});

	// Smarphone software mock up mobile slider
	$('.mobile-inner__slider').slick({
		dots:false,
		arrows:true,
		slidesToshow:1,
		// fade:true,
	});


	
})	


// Mobile menu open
document.querySelector('.header-top__content-btn').addEventListener('click', function(){
		document.querySelector('.header-top__mobile-list').classList.add('header-top__mobile-list--active');
	});

// Mobile menu close
document.querySelector('.header-top__close-btn').addEventListener('click', function(){
		document.querySelector('.header-top__mobile-list').classList.remove('header-top__mobile-list--active');
	});


window.onload = function(){

	// Scope of product2.html code
	{
		// If elements are found on the page
		if(document.querySelectorAll('.product2-settings__dropdown-btn.dropdown-btn').length != 0){
		
			// Get all inputs
			let d_downs = document.querySelectorAll('.product2-settings__dropdown-btn.dropdown-btn');

			// Get all dropdown items
			let d_downs_items = document.querySelectorAll('.e_ddown_item');

			// Add click event listeners
			for(let i = 0; i < d_downs.length; i++){
				d_downs[i].addEventListener('click', open_dd, false);
			}	
						
			for(let i = 0; i < d_downs_items.length; i++){
				d_downs_items[i].addEventListener('click', choose_option, false);
			}	

			document.addEventListener('click', close_dd, false);

			function choose_option(){
				this.parentElement.parentElement.firstElementChild.innerHTML = this.innerHTML;
			}

			function close_dd(e){
				if(e.target.getAttribute('data-type') != 'button_group_1'){
					for(let i = 0; i < d_downs.length; i++){
						d_downs[i].nextElementSibling.style.display = "none";
						d_downs[i].classList.remove('toggle_class_arrow_down');
					}	
				}
	
			}
		
	
			function open_dd(){
				for(let i = 0; i < d_downs.length; i++){
					d_downs[i].nextElementSibling.style.display = "none";
					d_downs[i].classList.remove('toggle_class_arrow_down');
				}

				this.nextElementSibling.style.display = "block";
				
				this.classList.add('toggle_class_arrow_down');
			}
		}
	}

	// Scope for menu dropdown code
	{
		let first_line = document.querySelectorAll('.menu_group_1');
		let second_line = document.querySelectorAll('.header-bottom__menu');

		let top_element = document.querySelector('.header-top__content-top');
		let bottom_element = document.querySelector('.header-top__content-top');

		let last_hover = 'null';



		// Functions

		// Close 2nd line
		let out_f1 = function(e){
			// second_line.style.transform = "translateY(-100%)";
			if(last_hover != "null"){
				first_line[last_hover].style.backgroundColor = "transparent";

				second_line[last_hover].style.transform = "translateY(-100%)";
			}
			// console.log(e.target);
		}

		// Close 2nd line on scroll
		// let temp_function_1 = function(e){
			// document.removeEventListener('scroll', temp_function_1, false);
			// out_f1();
		// }

		// Open 2nd line
		let hover_f1 = function(){

			if(parseInt(this.getAttribute('data-index')) < 6){

				second_line[parseInt(this.getAttribute('data-index'))].style.transform = "translateY(0)";
				this.style.backgroundColor = "rgba(4,169,186,1)";

				// Last hover
				if(last_hover == 'null'){
					last_hover = parseInt(this.getAttribute('data-index'));
				}else if(last_hover == parseInt(this.getAttribute('data-index'))){
					last_hover = parseInt(this.getAttribute('data-index'));
				}else{
					second_line[last_hover].style.transform = "translateY(-100%)";
					first_line[last_hover].style.backgroundColor = "transparent";
					last_hover = parseInt(this.getAttribute('data-index'));
				}

				// Add temp function on scroll then remove it
				// document.addEventListener('scroll', temp_function_1, false);

			}else{
				// Last hover
				if(last_hover == 'null'){
					last_hover = parseInt(this.getAttribute('data-index'));
				}else if(last_hover == parseInt(this.getAttribute('data-index'))){
					last_hover = parseInt(this.getAttribute('data-index'));
				}else{
					second_line[last_hover].style.transform = "translateY(-100%)";
					first_line[last_hover].style.backgroundColor = "transparent";
					last_hover = parseInt(this.getAttribute('data-index'));
				}
			}

		}


		// Event listeners

		for(let i = 0; i < first_line.length; i++){
			first_line[i].addEventListener("mouseenter", hover_f1, false);
		}
		for(let i = 0; i < second_line.length; i++){
			second_line[i].addEventListener("mouseleave", out_f1, false);
		}

	}

	// Scope for mobile menu 2 levels
	{

		// Variables
		let level_1 = document.querySelector('.mobile_menu_options_wrap_1');
		let level_2 = document.querySelector('.mobile_menu_options_wrap_2');

		let level_3 = document.querySelector('.mobile_menu_options_wrap_3');
		let level_4 = document.querySelector('.mobile_menu_options_wrap_4');
		let level_5 = document.querySelector('.mobile_menu_options_wrap_5');
		let level_6 = document.querySelector('.mobile_menu_options_wrap_6');
		let level_7 = document.querySelector('.mobile_menu_options_wrap_7');

		let lvl_arr = [level_2, level_3, level_4, level_5, level_6, level_7];


		let back_btn_1 = document.querySelectorAll('.mobile_back_button_1');

		let menu_level_1 = document.querySelectorAll('.menu_level_1');

		
		let opened_lvl;

		// Functions
		let back_1 = function(){
			level_1.style.transform = "translateX(0)";
			lvl_arr[opened_lvl].style.transform = "translateX(100%)";
		}

		let change_lvl_1 = function(){
			opened_lvl = parseInt(this.getAttribute('data-index'));
			level_1.style.transform = "translateX(-100%)";
			lvl_arr[opened_lvl].style.transform = "translateX(0)";
		}




		// Event listeners
		for(let i = 0; i < menu_level_1.length; i++){
			menu_level_1[i].addEventListener('click', change_lvl_1, false);
		}

		for(let i = 0; i < back_btn_1.length; i++){
			back_btn_1[i].addEventListener('click', back_1, false);
		}

	








	}

	// Scope for language changing button
	{

		// Variables
		const dropDownBtn = document.querySelector('.dropdown_id_1');
		const dropDownList = document.querySelector('.dropdown_list_id_1');

		let lang_options = document.querySelectorAll('.language_options');
		let lang_img = document.querySelector('.language_img');

		let image_paths = ['https://www.novaldigital.com/sano_baltic/images/estonia.png','https://www.novaldigital.com/sano_baltic/images/lithuania.png','https://www.novaldigital.com/sano_baltic/images/latvia.png'];

		// Functions
		let change_img = function(){
			lang_img.src = image_paths[parseInt(this.getAttribute('data-img'))];
		}


		// Event listeners
		dropDownBtn.addEventListener('click',function(){
			dropDownList.classList.toggle('dropdown__list--visible');
		});

		for(let i = 0; i < lang_options.length; i++){
			lang_options[i].addEventListener('click', change_img, false);
		}







		// Make dropdown invisible again
		document.addEventListener('click', function(e){
			// console.log(e.target);
			if (e.target !== dropDownBtn){
				dropDownList.classList.remove('dropdown__list--visible');
			}
		});
	}


	// 
	{
		// If elements are found on the page
		if(document.querySelectorAll('.ball_item_wrap').length != 0){

			let wraps = document.querySelectorAll('.ball_item_wrap');

			
		}

	}


	// Form "Add to Cart" process functions
	{
		const elements = document.querySelectorAll('.element_1');
		const el_items_1 = document.querySelectorAll('.element_item_1');
		const el_items_2 = document.querySelectorAll('.element_item_2');
		const el_items_3 = document.querySelectorAll('.element_item_3');
		const el_items_4 = document.querySelectorAll('.element_item_4');
		
		let operation_1 = function(){
			elements[0].style.display = "none";
		}
		let operation_2 = function(){
			elements[1].style.display = "none";
		}
		let operation_3 = function(){
			elements[2].style.display = "none";
		}
		let operation_4 = function(){
			elements[3].style.display = "none";
		}

		for(let i = 0; i < el_items_1.length; i++){
			el_items_1[i].addEventListener('click', operation_1, false);
		}

		for(let i = 0; i < el_items_1.length; i++){
			el_items_2[i].addEventListener('click', operation_2, false);
		}

		for(let i = 0; i < el_items_1.length; i++){
			el_items_3[i].addEventListener('click', operation_3, false);
		}

		for(let i = 0; i < el_items_1.length; i++){
			el_items_4[i].addEventListener('click', operation_4, false);
		}
		
	}

	


}




