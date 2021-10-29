$(document).ready(function () {
    // scroll 
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 10) $('.main_vis .txt_box2').addClass('on');
        else $('.main_vis .txt_box2').removeClass('on');

        //console.log($('#about').offset().top, $(this).scrollTop());
        if ( $(this).scrollTop() >= $('#about').offset().top ) $('.main_vis .img_wrap').addClass('active');
        else $('.main_vis .img_wrap').removeClass('active');

        if ($(this).scrollTop() >= $('#portfolio').offset().top - 30) {
            $('#header').addClass('active');
            $('#portfolio').addClass('on');
        } else {
            $('#header').removeClass('active');
            $('#portfolio').removeClass('on');
        }

        if ( $(this).scrollTop() >= $('#portfolio').offset().top ) $('#portfolio .tit_box h2').addClass('active');
        else $('#portfolio .tit_box h2').removeClass('active');

        // if ($(this).scrollTop() >= $('.hobby').offset().top && $(this).scrollTop() <= $('.swimming').offset().top) $('.hobby_txt_box').addClass('on');
        // else $('.hobby_txt_box').removeClass('on');

        // if ($(this).scrollTop() >= $('.hobby .hiking').offset().top + 100) $('.hb_list .txt_cyc').addClass('on');
        // else $('.hb_list .txt_cyc').removeClass('on');

    });
    
    //gsap
    /* main_vis */
    gsap.registerPlugin(ScrollTrigger);

    const main_txt01 = new SplitType('.main_vis .txt_box1 .txt_wrap', {
        types: 'words, chars',
        absolute: true,  
    });
     const main_txt02 = new SplitType('.main_vis .txt_box2 .txt_wrap', {
        types: 'words, chars',
        absolute: true,  
    });


    let load = gsap.timeline({
        scrollTrigger: {
        trigger: ".main_vis",
        pin: true, //고정
        start: "top top",
        end: "+=8000", 
        scrub: 1,
        // markers:true,
        }
    });
    load.to('.main_vis .img_wrap', {duration:3,scale:1,'background-size':'150%'})
    .fromTo(main_txt01.chars,{y: '0%',opacity: 1},{opacity: 0,y: '100%',stagger: 0.01,})
    .fromTo(main_txt02.chars,{opacity: 0,},{duration: 2,y: '0%',stagger: 0.04,opacity: 1})
    .to('.main_vis .txt_box2', {opacity: 0,})
    .fromTo('.area_btm',{y: 0,},{duration: 2,y: '-100%',opacity: 1})
    

    gsap.to('.main_vis .img_wrap', {
    scrollTrigger: {trigger: "#about",start: "top 100%",scrub: 1,},
    delay: 1,'background-position':' 50% 40%'}, -0.1)




    
    /* about */

    let about = gsap.timeline({
        scrollTrigger:{
            trigger: '#about',
            start: 'top 70%',
            end: "+=2000",
            scrub: 1,
            //markers:true,
        },
    });
    let about_txt = gsap.timeline({
        scrollTrigger:{
            trigger: '#about',
            start: 'top 40%',
            end: "+=2000",
            // scrub: 1,
            //markers:true,
        },
    });
    const about_txt01 = new SplitType('#about .txt_box p span', {types: 'words, chars',absolute: true,  });

    about.to('#about ul li.txt01',{x: '5%'},-1)
    .to('#about ul li.txt02',{x: '25%'},-1)
    .to('#about ul li.txt03',{x: '45%'},-1)

    about_txt.to('#about .txt_box h2 span', {y: '0%'})
    .to(about_txt01.chars, {y: '0%',stagger: 0.01,opacity: 1});
  


    // Personality
    // about_sc
    let about_sc = gsap.timeline({
        scrollTrigger:{
            trigger: '#about .about_sc',
            start: 'top top',
            pin:'#about .about_sc',
            end: "+=2000",
            scrub: 1,
            // markers:true,
        },
    });
    about_sc.to('#about .about_sc',{x:'-200vw'})




    // hoddy
    let hobby = gsap.timeline({
        scrollTrigger:{
            trigger: '.hobby',
            start: 'top 0%',
            pin:'.hobby',
            end: "+=3000",
            scrub: 1,
            //markers:true,
        },
    });
    hobby.to('.hobby .cycling',{ height:'100%'})
    .to('.hobby .swimming',{height:'100%'})

    let hobby2 = gsap.timeline({
        scrollTrigger:{
            trigger: '.hobby',
            start: 'top 0%',
            pin:'.hobby',
            end: "+=3000",
            scrub: 1,
            //markers:true,
        },
    });
    hobby2.to('#about .hobby_txt_box p',{ y:'-33.33%'})
    .to('#about .hobby_txt_box p',{y:'-66.66%'})
    


    /* portfolio */
    gsap.to('#portfolio .tit_box', {
        scrollTrigger:{
            trigger: '#portfolio',
            start: 'top 10%',
            scrub: 1
        },
        duration: 0.5,
        y: '-5%'
    });
    gsap.to('#portfolio .tit_box h2', {
        scrollTrigger:{
            trigger: '#portfolio .tit_box',
            start: 'top',
            scrub: 1
        },
        duration: 0.5,
        opacity: 0,
        'font-size': '1vw',
        height: 0,
    });

    gsap.to('#portfolio .lotte .tit span', {
        scrollTrigger:{
            trigger: '#portfolio .pf_content .lotte',
            start: 'top 50%',
        },
        duration: 0.5,
        y: '0%',
        opacity: 1,
    });
    gsap.to('#portfolio .dram .tit span', {
        scrollTrigger:{
            trigger: '#portfolio .pf_content .dram',
            start: 'top 50%',
        },
        duration: 0.5,
        y: '-14%',
        opacity: 1,
    });
    gsap.to('#portfolio .ikea .tit span', {
        scrollTrigger:{
            trigger: '#portfolio .pf_content .ikea',
            start: 'top 50%',
        },
        duration: 0.5,
        y: '0%',
        opacity: 1,
    });

    const portfolio_txt01 = new SplitType('#portfolio .lotte .desc span', {
        types: 'words, chars',
        absolute: true,  
    });
    const portfolio_txt02 = new SplitType('#portfolio .dram .desc span', {
        types: 'words, chars',
        absolute: true,
    });
    const portfolio_txt03 = new SplitType('#portfolio .ikea .desc span', {
        types: 'words, chars',
        absolute: true,
    });

    gsap.to(portfolio_txt01.chars, {
        scrollTrigger:{
            trigger: '#portfolio .pf_content .lotte',
            start: 'top 50%',
        },
        delay: 0.5,
        duration: 0.5,
        y: '0%',
        stagger: 0.01,
        opacity: 1
    });
    gsap.to(portfolio_txt02.chars, {
        scrollTrigger:{
            trigger: '#portfolio .pf_content .dram',
            strat: 'top 50%',
        },
        delay: 0.5,
        duration: 0.5,
        y: '0%',
        stagger: 0.01,
        opacity: 1
    });
    gsap.to(portfolio_txt03.chars, {
        scrollTrigger:{
            trigger: '#portfolio .pf_content .ikea',
            strat: 'top 50%',
        },
        delay: 0.5,
        duration: 0.5,
        y: '0%',
        stagger: 0.01,
        opacity: 1
    });

});