
$(window).scroll(function(){
	var scrollValue = $(window).scrollTop();
	var offsetValue = $('.what-we-do-wrapper').offset().top - 200;
	var offsetValue1 = $('.partnerships').offset().top - 200;
	var offsetValue2 = $('.why-talentica-section').offset().top - 200;
	// console.log(offsetValue2);
	if(scrollValue > offsetValue && scrollValue < offsetValue1) {
		$('.what-we-do-slider').slick('slickPlay');
	}
	else if(scrollValue > offsetValue1 && offsetValue < offsetValue1) {
		$('.partnership-slider').slick('slickPlay');
	}
	if(scrollValue > offsetValue2 && offsetValue2 > offsetValue1) {
		$('.what-talentica-slider').slick('slickPlay');
	}
});
