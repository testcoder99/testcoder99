	// Scope for language changing button
	{

		// Variables
		const dropDownBtn = document.querySelector('.header-top__language-button');
		const dropDownList = document.querySelector('.header-top__language-list');

		let lang_options = document.querySelectorAll('.header-top__language-item');
		let lang_opt = document.getElementById('lang_selected');

		let options = ['Latviešu','English','Español','Suomi','Lietuvos','Eesti keel','Français','Nederlands','Русский','Czech','Norwegian','Slovak','Svenska'];
		


		// Functions
		let change_text = function(){
			lang_opt.innerHTML = options[this.getAttribute('data-lang')];
		}


		// Event listeners
		dropDownBtn.addEventListener('click',function(e){
			e.stopPropagation();
			dropDownList.classList.toggle('header-top__language-list--visible');
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


