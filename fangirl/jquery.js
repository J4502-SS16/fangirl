$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('nav ul').slideToggle(500);
  });//end slide toggle

//When window is resized, the display:none is turned off for the ul so the menu displays on click or touch.
  $(window).resize(function() {
	   if (  $(window).width() > 1100 ) {
		$('nav ul').removeAttr('style');
	 }
	});//end resize
});//end ready
