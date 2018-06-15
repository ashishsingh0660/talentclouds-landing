/** this is for On Mouse up out of #myNavmenu **/

$(document).ready(function() {
		$('.overlay-menu--cta').click(function() {
				$('.overlay-nav').toggleClass('active');
				$('.overlay-menu--cta').toggleClass('open');

				$(window).on('load resize', function(){
					if($(window).width() >= 768) {
						if($('.overlay-nav').hasClass('active')) {
								disableScroll();
						}
						else {
								enableScroll();
						}
					}
				});
		});
});



$(window).load(function(){
	$('.slt-video-fit').addClass('active');
});

// Animation AOS
setTimeout(function(){
		AOS.init({
				once: true
		});
},100);

//  contact page - form js
$(window).load(function() {
		// input text
		$("input").val("");
		$(".input-field input").focusout(function() {
				if ($(this).val() != "") {
						$(this).addClass("has-content");
				} else {
						$(this).removeClass("has-content");
				}
		})
		// input textarea
		$("textarea").val("");
		$(".input-field textarea").focusout(function() {
				if ($(this).val() != "") {
						$(this).addClass("has-content");
				} else {
						$(this).removeClass("has-content");
				}
		})
});


// Blog Page -- blog-filter
$(document).ready(function() {

	$(".blog-filter__link").click(function(e) {
			e.preventDefault();
			 $(".filter-overlay").addClass("filter-active");
			 // $('.blog-overlay').addClass('active');
	})


	$('.blog-filter').click(function(e){
			e.preventDefault();
			$('.blog-overlay').addClass('active');
			$(window).on('load resize', function(){
				if($(window).width() >= 768) {
					if($('.blog-overlay').hasClass('active')) {
						disableScroll();
					}
					else {
						enableScroll();
					}
				}
			});
	});

	 $(".filter-overlay__top-close").click(function(e) {
			e.preventDefault();
			$(".filter-overlay").removeClass("filter-active");
			$('.blog-overlay').removeClass('active')
			$(window).on('load resize', function(){
				if($(window).width() >= 768) {
					if($('.blog-overlay').hasClass('active')) {
						disableScroll();
					}
					else {
						enableScroll();
					}
				}
			});
	});

	 $(window).on('load resize',function(){
		if($(window).width() < 768) {
			$('.nav-sub-item').slideUp();
			$('.nav-item__cta--slide').click(function(e){
				e.preventDefault();
				// $('.nav-item__cta--tech').siblings('.nav-sub-item').slideUp();
				$(this).siblings().slideToggle();
			});
			// $('.nav-item__cta--tech').click(function(e){
			// 	e.preventDefault();
			// 	$('.nav-item__cta--updates').siblings('.nav-sub-item').slideUp();
			// 	$(this).siblings('.nav-sub-item').slideToggle();
			// });
		}
	 });

		$(window).on('load resize',function(){
		if($(window).width() >= 768) {
			 $('.nav-item-hover').mouseenter(function(){
					$('.nav-item__cta').css('opacity','0.5');
					$(this).find('.nav-item__cta').css('opacity','1');
			 });
			 $('.nav-item-hover').mouseleave(function(){
					$('.nav-item__cta').css('opacity','1');
			 });
		}
	 });




});// document ready



// window.addEventListener('load', function () {

// 	document.getElementById('video1').play();
// 	document.getElementById('video1').addEventListener('ended', function(e) {
// 		console.log('video2');
// 		document.getElementById('video2').play();
// 		document.getElementById('video2').addEventListener('ended', function(e) {
// 			console.log('video3');
// 			document.getElementById('video3').play();
// 			document.getElementById('video3').addEventListener('ended', function(e) {
// 				console.log('video3');
// 				document.getElementById('video1').play();
// 			});
// 		});


// 	});
// });


// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
	e = e || window.event;
	if (e.preventDefault)
			e.preventDefault();
	e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
		if (keys[e.keyCode]) {
				preventDefault(e);
				return false;
		}
}

function disableScroll() {
	if (window.addEventListener) // older FF
			window.addEventListener('DOMMouseScroll', preventDefault, false);
	window.onwheel = preventDefault; // modern standard
	window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
	window.ontouchmove  = preventDefault; // mobile
	document.onkeydown  = preventDefaultForScrollKeys;
}


//Of course I can code this more programatically, but this seems good to me.

$().ready(function() {
		$('.send').click(function() {
				setTimeout(function() {
						$('#plate').removeClass('front');
						$('#container').removeClass('beginning');
						$('.curvable').addClass('curved');
						setTimeout(function() {
								$('#container').addClass('hover');
						}, 2800);
				}, 200);
		});
});

function enableScroll() {
		if (window.removeEventListener)
				window.removeEventListener('DOMMouseScroll', preventDefault, false);
		window.onmousewheel = document.onmousewheel = null;
		window.onwheel = null;
		window.ontouchmove = null;
		document.onkeydown = null;
}

// onscorll down hide navbar
$(window).on('resize load',function(){
	if($(window).width() >= 768) {
		(function(){
			var didScroll;
			var lastScrollTop = 0;
			var delta = 5;
			var navbarHeight = $('.navbar').outerHeight();

			$(window).scroll(function(event){
					didScroll = true;
			});

			setInterval(function() {
					if (didScroll) {
							hasScrolled();
							didScroll = false;
					}
			}, 500);

			function hasScrolled() {
					var st = $(this).scrollTop();

					// Make sure they scroll more than delta
					if(Math.abs(lastScrollTop - st) <= delta)
							return;

					// If they scrolled down and are past the navbar, add class .nav-up.
					// This is necessary so you never see what is "behind" the navbar.
					if (st > lastScrollTop && st > navbarHeight){
							// Scroll Down
							$('.navbar').removeClass('nav-down').addClass('nav-up');
					} else {
							// Scroll Up
							if(st + $(window).height() < $(document).height()) {
									$('.navbar').removeClass('nav-up').addClass('nav-down');
							}
					}

					lastScrollTop = st;
			}
		})();
	}
});


$(window).on('resize load',function(){
		if($(window).width() >= 1600) {
				var leftMargin = $('main').offset().left;
				$('.overlay-menu--close').css('right', leftMargin + 26);
		}
 });

$(window).load(function(){
	$('.mask').addClass('active');
});



// Object fit solution

/* Object fit solution  */
// check class
function hasClass(el, className) {
	return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
}

/**
* helper function to add a class to an element
* @param {HTMLElement} el the element
* @param {string} className the class
*/
function addClass(el, className) {
	if (el.classList) {
		el.classList.add(className);
	} else if (!hasClass(el, className)) {
		el.className += ' ' + className;
	}
}

var imgContainers;
var len;

function isIE(){
	return (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0);
}


// fallback for IE
$(function(){
	if (isIE()) {
		// btn fallback
		// $('.btn').addClass('fallback');
		var aBtnLabel = $('.approach-btn-label');
		if (aBtnLabel.length > 0) {
			aBtnLabel.addClass('fix');
		}
	}

})

// ABOUT US PAGE
$(function(){
	// Target touch Devices
	// to add profile popup without hover/touch
	// if (Modernizr.touch) {
	// 	// console.log("THis is a touch device!");
	// 	if ($('.about-team-lists__items').length > 0 ) {
	// 		// $('.about-team-profile').css({'bottom': '20px'});
	// 	}
	// }

	// Add sticky to left sidebar of bigger contents
	var $stickyStartHeight = $(window).height()/70;
	var $scientistSidebar = $('.scientist-sidebar');
	// console.log(windowHalfHeight);
	$(window).on('load resize',function(){
		if($(window).width() > 767) {
			if ($scientistSidebar.length > 0) {
				$scientistSidebar.stickem({
					start: $stickyStartHeight
				});

			}
		}
	});

});

// TECH AREA PAGES
$(function(){


	// Add sticky to left sidebar of bigger contents
	var $techStartHeight = $(window).height()/70;
	var $techAreaSidebar =$('.techarea-sidebar');
	// console.log(windowHalfHeight);
	$(window).on('load resize',function(){
		if($(window).width() > 767) {
			if ($techAreaSidebar.length > 0) {
				$techAreaSidebar.stickem({
					start: $techStartHeight
				});

			}
		}
	});

});

// Career sticky

$(function(){


		// Add sticky to left sidebar of bigger contents
		var $techStartHeight = $(window).height()/70;
		var $techAreaSidebar = $('.career-sidebar');
		// console.log(windowHalfHeight);
		$(window).on('load resize',function(){
			if($(window).width() > 767) {
				if ($techAreaSidebar.length > 0) {
					$techAreaSidebar.stickem({
						start: $techStartHeight
					});

				}
			}
		});

	});


$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).width() > 767) {
			var scrollValue = $(window).scrollTop();
			if(scrollValue > 27) {
				$('.white-logo-cta img').attr('src', 'img/Talentclouds-Logo.svg');
			}
			else {
				$('.white-logo-cta img').attr('src', 'img/Talentclouds-white-Logo.svg');
			}
		}
		else {
			$('.white-logo-cta img').attr('src', 'img/Talentclouds-Logo.svg');
		}
	});
	// $(window).on('load resize',function(){
	// 	if($(window).width() > 767) {
	// 		$('.white-logo-cta img').attr('src', 'img/Talentclouds-white-Logo.svg');
	// 	}
	// 	else {
	// 		$('.white-logo-cta img').attr('src', 'img/Talentclouds-Logo.svg');
	// 	}
	// });

});

$('.next-section-scroll').click(function(e) {
	$("html, body").animate({
		scrollTop : ($('.what-we-do-wrapper').offset().top - 0)
	}, 1000);
});
