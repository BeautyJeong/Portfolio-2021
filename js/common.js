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

    //pc버전 안내화면 (1440)
    const wrapHei = $(window).height();
    //console.log(wrapHei);

    if ($(window).width() < 1440) {
        $('.pc_version').addClass('on');
        $('html, body').css({height: wrapHei, overflow: 'hidden'});
        $('.wrap').css({visibility: 'hidden', height: 0});
    } 

    $(window).on('resize', function () {    
        if ($(window).width() < 1440) {
            $('.pc_version').addClass('on');
            $('html, body').css({height: wrapHei, overflow: 'hidden'});
            $('.wrap').css({visibility: 'hidden', height: 0});
        } else {
            $('.pc_version').removeClass('on');
            $('html, body').removeAttr('style');
            $('.wrap').css({visibility: 'visible', height: 'auto'});
        }
    });

    //copyright 연도 자동 업뎃
    const now = new Date();
    const ty = now.getFullYear();
    const year = document.getElementById('year');
    year.innerHTML = ty;

});