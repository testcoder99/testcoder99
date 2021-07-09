	// Scope for language changing button
	{

		// Variables
		const dropDownBtn = document.querySelectorAll('.header-top__language-button');
		const dropDownList = document.querySelector('.header-top__language-list');

		let lang_options = document.querySelectorAll('.header-top__language-item');
		let lang_opt = document.getElementById('lang_selected');

		let options = ['Latviešu','English','Español','Suomi','Lietuvos','Eesti keel','Français','Nederlands','Русский','Czech','Norwegian','Slovak','Svenska'];
		


		// Functions
		let change_text = function(){
			lang_opt.innerHTML = options[this.getAttribute('data-lang')];
		}


		// Event listeners
		dropDownBtn.forEach(function(item){
			item.addEventListener('click',function(e){
				e.stopPropagation();
				dropDownList.classList.toggle('header-top__language-list--visible');
			});
		});

		for(let i = 0; i < lang_options.length; i++){
			lang_options[i].addEventListener('click', change_text, false); 
		}







		// Make dropdown invisible again
		document.addEventListener('click', function(e){
			// console.log(e.target);
			if (e.target !== dropDownBtn){
				dropDownList.classList.remove('header-top__language-list--visible');
			}
		});
	}

// Scope for additional menu
	{
		let first_line = document.querySelectorAll('.menu_group-1');
		console.log(first_line);
		let second_line = document.querySelectorAll('.header-additional__menu');
		
		let top_element = document.querySelector('.header-top__body');

		let bottom_element = document.querySelector('.header-top__body');

		let last_hover = 'null';



		// Functions

		// Close 2nd line
		let out_f1 = function(e){
			if(last_hover != "null"){
				second_line[last_hover].style.transform = "translateY(-100%)";
			}
		}

		// Open 2nd line
		let hover_f1 = function(){

			if(parseInt(this.getAttribute('data-index')) < 6){

				second_line[parseInt(this.getAttribute('data-index'))].style.transform = "translateY(100%)";

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


// Scope for burger menu
	{

	
		let burger = document.querySelector('.header-bottom__wrapper-burger');
		let burgerLine = document.querySelector('.header-bottom__burger-line');
		let mobileMenu = document.querySelector('.header-bottom__mobile-menu');
		let main = document.querySelector('.main');
		let headerLine = document.querySelector('.header-bottom__wrapper');

		burger.addEventListener('click', function(){
			burgerLine.classList.toggle('header-bottom__burger-line--active');
			main.classList.toggle('main-active');
			mobileMenu.classList.toggle('header-bottom__mobile-menu--active');
			headerLine.classList.toggle('header-bottom__wrapper--active');

		});

	}




{	
	document.addEventListener('DOMContentLoaded', function() {
	
	// let error_array = [];

	// // Error modal scope starts
	// {
	// 	if(document.querySelector('.error-modal')){

	// 		let element_text = document.querySelector('#modal-text');
	// 		let error_modal = document.querySelector('.error-modal');
	// 		let error_close = document.querySelector('.error-modal__wrapper-close');
	// 		let error_wrapper = document.querySelector('.error-modal__wrapper');

	// 		var open_modal = function(flag){
	// 			error_modal.classList.remove('hidden');

	// 			if(flag == 1){
	// 				element_text.innerHTML = "Jūsu ziņa jau ir ceļā pie mums! <br> Atbildēsim jums tuvākajā laikā.";
	// 			}else if(flag == 2){
	// 				element_text.innerHTML = "Pieslēgšanās veiksmīga!";
	// 			}else if(flag == 3){
	// 				element_text.innerHTML = "Reģistrēšanās veiksmīga!";
	// 			}else{	
	// 				let html = '';
	// 				for(let i = 0; i < error_array.length; i++){
	// 					html += '<div class="list_item">'+error_array[i]+'</div>';
	// 				}
	// 				element_text.innerHTML = html;
	// 			}

	// 			error_array = [];
	// 		}

	// 		error_close.addEventListener('click', function(){
	// 			error_modal.classList.add('hidden');
	// 		});
	// 		error_modal.addEventListener('click', function(){
	// 			this.classList.add('hidden');
	// 		});
	// 		error_wrapper.addEventListener('click', function(e){
	// 			e.stopPropagation();
	// 		});
	// 	}

	// }
	// // Error modal scope ends


	

	// Contact form check and send
	{
		// If element is found
		if(document.getElementById('submit_1')){

			// Variables
			let button = document.getElementById('submit_1');
			let phone = document.getElementById('phone');
			let email = document.getElementById('email');
			let text = document.getElementById('text');
			let name = document.getElementById('name');
			let label = document.querySelectorAll('.page-contacts__form-label');
			// Functions
			let check_form = function(e){
				e.preventDefault();

				// Read and save current values
				let name_value = name.value.trim();
				let phone_value = phone.value.trim();
				let email_value = email.value.trim();
				let text_value = text.value.trim();
				
				let no_error = true;


				// https://regexr.com/
				// Reg expression checks if string has anything except
				// + sign, digits and free space
				// if there is then reg exp is true
				let reg_1 = new RegExp(/[^\+\d\s]/, 'i');

				// Reg exp checks if there is string FRAGMENT
				// that starts with @ then there are infinite
				// number of letters which ends with a dot

				// forgot numbers
				let reg_2 = new RegExp(/@[A-z]*\./, 'i');


				// Check if not empty
				if(name_value.length < 1){
					// Check with reg exp 1
					label.forEach(function(item){
						item.classList.add('page-contacts__form-label--error');
					});
					no_error = false;
						
				}else{
					label.classList.remove('page-contacts__form-label--error');
				}

				// Phone check

				// Check if not empty
				if(phone_value.length > 0){
					// Check with reg exp 1
					if(reg_1.test(phone_value)){
						label.classList.add('page-contacts__form-label--error');
						no_error = false;
					}
                      
				}
				// else{
				// 	open_modal("Ierakstiet telefona numuru, lai varam ar jums sazināties.");
				// 	no_error = false;
				// }

				// Email check

				// Check if not empty
				if(email_value.length > 0){

					// Check with reg exp 2
					if(!reg_2.test(email_value)){
						label.classList.add('page-contacts__form-label--error');
						// open_modal("Nepareizs epasts");
						no_error = false;
						// 1) el.style.display = "flex";
						// 2) el.classList.add("class_1");
						// 3) el.classList.remove("class_1");

					}

				}else{
					// If empty
					// Error
					// error_array.push("Ierakstiet jūsu epasta adresi.");
					// open_modal("Ierakstiet jūsu epasta adresi");
					
					no_error = false;
				}

				// Text check

				// Check if not empty
				if(text_value.length > 0){

				}else{
					// If empty
					// Error
					// error_array.push("Ierakstiet ziņu.");
					// open_modal("Ierakstiet ziņu.");
					no_error = false;
				}

				
				//Tut ja dolzhen ponjatj bili oshibki ili net

				// if(no_error){
				// 	open_modal(1);
					
				// }else{
				// 	open_modal(0);
				// }

			}



			// functions

			// let open_modal = function(text){
			// 	console.log(text);
			// 	let element_text = document.querySelector('#modal-text');
			// 	let error_modal = document.querySelector('.error-modal');
			// 	error_modal.addEventListener('click', function(){
			// 		this.querySelector('.error-modal__wrapper-close').addEventListener('click', function(){
			// 			error_modal.classList.add('hidden');
			// 		});
			// 	});
			// 	error_modal.classList.remove('hidden');
			// 	element_text.innerText = text;
			// }



			// Event listeners
			button.addEventListener('click', check_form, false);


		} // If ends
		
	} // Scope Ends
});
}
// Slider
{
	const prev = document.getElementById('slider-btn__prev'),
		  next = document.getElementById('slider-btn__next'),
		  slides = document.querySelectorAll('.slider-wrapper__item'),
		  dots = document.querySelectorAll('.slider-dots__item');
	let index = 0;
	const activeSlide = n => {
		for(slide of slides){
			slide.classList.remove('active')
		}
		slides[n].classList.add('active');
	}

	const activeDot = n =>{
		for(dot of dots){
			dot.classList.remove('active');
		}
		dots[n].classList.add('active')
	}

	const prepareCurrentSlide = ind =>{
		activeSlide(ind);
		activeDot(ind);
	}

	const nextSlide = () =>{
		if(index == slides.length - 1){
			index = 0;
			prepareCurrentSlide(index);
		} else{
			index++;
			prepareCurrentSlide(index);
		}
	} 

	const prevSlide = () =>{
		if(index == 0){
			index = slides.length - 1;
			prepareCurrentSlide(index);
		} else{
			index--;
			prepareCurrentSlide(index);
		}
	} 

	dots.forEach((item, indexDot) => {
		item.addEventListener('click', () =>{
			index = indexDot;
			prepareCurrentSlide(index);
		})
	})	
	next.addEventListener('click', nextSlide, false);
	prev.addEventListener('click', prevSlide, false)	
}