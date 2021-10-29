$(document).ready(function () {
    $('body').mousemove(function(e) {
        gsap.to('#cursor', {
            duration: 0.3,
            x: e.clientX -15,
            y: e.clientY -15,
            ease: Power3.easeOut
        });
       
    });

    $("#portfolio").on("mouseover", function(){
          $('#cursor').addClass('small');
    });
    $("#portfolio").on("mouseout", function(){
          $('#cursor').removeClass('small');
    });

    //menu
    $('#header .menu ul li a').on('click', function () {
        e.preventDefault(); 
        $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 400, 'swing');
      });

});