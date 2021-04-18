/******************** HOME ********************/
var container_1 = $('.cont1'),
    container_2 = $('.cont2'),
    container_3 = $('.cont3'),
    container_4 = $('.cont4'),
    container_5 = $('.cont5'),
    animation_1 = $('.animy1'),
    animation_2 = $('.animy2'),
    animation_3 = $('.animy3'),
    animation_4 = $('.animy4'),
    animation_5 = $('.animy5'),
    backAgain_1 = $('.back1'),
    backAgain_2 = $('.back2'),
    backAgain_3 = $('.back3'),
    backAgain_4 = $('.back4'),
    backAgain_5 = $('.back5');

$(document).ready(function() {
    container_1.hover(function() {
        animation_1.addClass('moving');
    }, function() {
        animation_1.removeClass('moving');
    });

    container_2.hover(function() {
        animation_2.addClass('moving');
    }, function() {
        animation_2.removeClass('moving');
    });

    container_3.hover(function() {
        animation_3.addClass('moving');
    }, function() {
        animation_3.removeClass('moving');
    });

    container_4.hover(function() {
        animation_4.addClass('moving');
    }, function() {
        animation_4.removeClass('moving');
    });

    container_5.hover(function() {
        animation_5.addClass('moving');
    }, function() {
        animation_5.removeClass('moving');
    });


    animation_1.click(function() {
        container_1.addClass('rotate');
    });

    animation_2.click(function() {
        container_2.addClass('rotate');
    });

    animation_3.click(function() {
        container_3.addClass('rotate');
    });

    animation_4.click(function() {
        container_4.addClass('rotate');
    });

    animation_5.click(function() {
        container_5.addClass('rotate');
    });


    backAgain_1.click(function() {
        container_1.removeClass('rotate');
    });

    backAgain_2.click(function() {
        container_2.removeClass('rotate');
    });

    backAgain_3.click(function() {
        container_3.removeClass('rotate');
    });

    backAgain_4.click(function() {
        container_4.removeClass('rotate');
    });

    backAgain_5.click(function() {
        container_5.removeClass('rotate');
    });
});


/*************** Theme ***************/
$(document).ready(function() {
    $('#toggle').click(function() {
        $('.main-nav').toggleClass('the0');
        $('#join-us').toggleClass('the1');
        $('.topics header h2').toggleClass('the2');
        $('.line').toggleClass('the3');
        $('.front').toggleClass('the4');
        $('.back').toggleClass('the4');
        $('.topics .cards .container .front .title h3 a').toggleClass('the5');
        $('.topics .cards .container .front .title p').toggleClass('the6');
        $('.topics .cards .container .front .anemy').toggleClass('the8');
        $('.topics .cards .container .back .describtion h2').toggleClass('the8');
        $('.topics .cards .container .back .describtion p').toggleClass('the9');
        $('.topics .cards .container .back .describtion a').toggleClass('the10');
        $('.topics .cards .container .back .again').toggleClass('the11');                
    });
});