//Loads when the javascript has loaded. when menu-trigger is clicked the function slide toggle occurs. THe 500 is the length of the animation.

$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('nav ul').slideToggle(500);
  });//end slide toggle

//When window is resized, the display:none is turned off for the ul so the menu displays on click or touch.
  $(window).resize(function() {
	   if (  $(window).width() > 700 ) {
		$('nav ul').removeAttr('style');
	 }
	});//end resize
});//end ready
//ON RESIZE
$(window).resize(function () {clearTimeout(body.stories);this.class = stories(checkTimer, 500);});
function checkTimer() {
    var width = $("stories").width();
//MOBILE
    if (width < 640) {
        mobileView();
    }
//TABLET
    else if (width > 640 && width <966) {
        appendFix();
    }
//DESKTOP
    else if (width >966) {
        appendFix();
    }
};
//ON RELOAD
    var width2 = $(window).width();
//MOBILE
    if (width2 < 640) {
        mobileView();
    };
//TABLET
    if (width2 > 640 && width2 <966) {
        appendFix();
    };
//DESKTOP
    if (width2 > 966) {
        appendFix();
    };
