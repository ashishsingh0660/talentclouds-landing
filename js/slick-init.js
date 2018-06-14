
//connect slider

$(document).ready(function(){
	 $('.testimonial-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: true,
		infinite: true,
		autoplay: false,
		adaptiveHeight: false,
		autoplaySpeed: 7000
	});
	 $('.what-we-do-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: true,
		infinite: true,
		autoplay: false,
		centerPadding: false,
		autoplaySpeed: 3000
	});
	 $('.what-talentica-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: true,
		infinite: true,
		autoplay: false,
		centerPadding: false,
		autoplaySpeed: 3000
	});
	 $('.partnership-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: true,
		infinite: true,
		autoplay: false,
		centerPadding: false,
		adaptiveHeight: false,
		autoplaySpeed: 7000

	});
	 $('.opera-casestudy').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: true,
		infinite: true,
		autoplay: true,
		centerPadding: false,
		autoplaySpeed: 3000
	});

	 $('.js-approach-btn').slick({
		 slidesToShow: 5,
		slidesToScroll: 5,
		dots: false,
		infinite: true,
		centerMode: false,
		focusOnSelect: true,
		 responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						arrows: false
					}
				}
			]
	 });

	 $('.join-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		accessibility:true,
		infinite: false,
		adaptiveHeight: false,
		autoplay: false,
		autoplaySpeed: 3000
	});

	 $('.home-award-slider1').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		dots: true,
		accessibility:true,
		autoplaySpeed: 3000
	});
	 $('.home-award-slider2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		dots: true,
		accessibility:true,
		autoplaySpeed: 3000
	});

	 $('.client-logo-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		fade: false,
		speed: 1000,
		dots: true,
		infinite: false,
		autoplay: false,
		responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						dots: false
					}
				}
			]
	});



});
