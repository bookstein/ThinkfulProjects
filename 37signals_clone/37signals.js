$(document).ready(function() {

	$('section.products a').hover(
		
		function(){
			prod = 'div.' + $(this).attr('class');			
			$(this).toggleClass('hover-box');
			$('p', this).toggleClass('hidden')
			$('header').toggleClass('hidden');
			$(prod).toggleClass('hidden extra');
		},
		function(){
			$(this).toggleClass('hover-box');
			$('p', this).toggleClass('hidden')			
			$('header').toggleClass('hidden');
			$(prod).toggleClass('hidden extra');
		}
	);
});