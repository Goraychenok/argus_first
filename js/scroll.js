
jQuery(window).scroll(function() { 
    var the_top = jQuery(document).scrollTop();
    if (the_top > 10) {
        jQuery('.header').addClass('active');
    }
    else {
        jQuery('.header').removeClass('active');
    }

});

function slowScroll(id){
	var offset = 10;
	$('html,body').animate ({
		scrollTop: $(id).offset ().top - offset
	},1000);
	$('body').removeClass('lock');
	$('.header__burger,.header__menu').removeClass('active');
	return false;
}