$(document).ready(function() {
	$(window).on('scroll',function() {
		 if ($(window).scrollTop() > 30) {
				 $('.navbar-default').addClass('active');
		 }
		 else {
				$('.navbar-default').removeClass('active');
		}
	});

});
