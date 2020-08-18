jQuery(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        $('.header').addClass('active');
    });
    
    $('.popup-btn').on('click',  function(event) {
		event.preventDefault();
		$('.popup').fadeIn();
        $('body').addClass('stop');
        $('.header').addClass('none');
	}); 
	$('.popup-close').on('click',  function(event) {
		event.preventDefault();
		$('.popup').fadeOut();
        $('body').removeClass('stop');
        $('.header').removeClass('none');
	});
});
