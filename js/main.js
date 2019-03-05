/* scroll navbar */
$(window).on('scroll load resize', () => {
	let scrollTop = $(window).scrollTop();
	let widthDevice = $(window).width();
	let sliderAreaHeight = $('#slider-area').height();

	if(scrollTop > sliderAreaHeight - 50 || widthDevice < 768)
		$('header').addClass('isSticky');
	else
		$('header').removeClass('isSticky');
	
});

/* mouse parallax */
function parallaxIt(e, target, movement) {
  let $this = $("#slider-area");
  let relX = e.pageX - $this.offset().left;
  let relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}

$("#slider-area").mousemove((e) => {
	let widthDevice = $(window).width();

	if(widthDevice >= 768) {
  		parallaxIt(e, ".objects-bg1", -100);
  		parallaxIt(e, ".objects-bg2", -150);
	}
});


$(document).ready(() => {
	let background = $(this).attr('background-cover');
});


$('a.nav-link').on('click', function(event) {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000, 'easeInOutExpo');

        event.preventDefault();
    });

$(window).on('scroll resize', function() {

        let scrollMid = $(window).scrollTop() + $(window).height()/2;

        $('a.nav-link').each(function(i){

            let $element = $($(this).attr('href'));
            let element_height = $element.outerHeight();
            let element_top_position = $element.offset().top;
            let element_bottom_position = (element_top_position + element_height);

            if((element_top_position <= scrollMid) && (element_bottom_position >= scrollMid)) {
                $('nav ul li').removeClass('active');
                $(this).parent().addClass('active');
            }

        });
    });