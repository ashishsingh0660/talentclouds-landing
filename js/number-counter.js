$(window).on("scroll.test",function(){
   if($('.count').parent().hasClass('aos-animate')) {
    startCounter();
    $(window).off('.test');
   }
});

 function startCounter(){
   $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
      }, {
          duration: 3000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
    });
  });
}
