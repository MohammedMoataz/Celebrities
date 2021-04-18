$(document).ready(function() {

    $('#search').click(function() {
        $('#searchPage').animate({
            top: '60%',
        }, 1000);

        $('#searchPage').animate({
            top: '50%',
        }, 500);

        $('#searchPage').animate({
            top: '0',
            width: '100%',
            height: '100%',
            left: '0',
            top: '0',
            borderRadius: '0'
        }, 1500, function() {
            $('.show').fadeIn(450);
        });
    });

    $('#close').click(function() {
        $('.show').fadeOut(450, function() {
            $('#searchPage').animate({
                width: '100px',
                height: '100px',
                top: '50%',
                left: '50%',
                borderRadius: '50%'
            }, 1000);

            $('#searchPage').animate({
                 top: '-100%'
            }, 800);
        });
    });

});














/*************** Theme ***************/
$(document).ready(function() {
    $('#toggle').click(function() {
        $('.fa-toggle-on').toggle(1, function() {
            $('.fa-toggle-off').toggle(1, function() {
                $('#nav').toggleClass('theme0');
                $('.logo').toggleClass('theme1');
                $('#toggle i').toggleClass('theme2');
                $('.nav ul li a').toggleClass('theme3');
                $('.logout').toggleClass('theme4');
                $('#searchPage').toggleClass('theme5');
                $('#list ul li').toggleClass('theme6');
                $('#close').toggleClass('theme7');
                $('.show form input[type="search"]').toggleClass('theme8');
                $('.show form input[value="SEARCH"]').toggleClass('theme9');
                $('.foo').toggleClass('theme10');
                $('.content').toggleClass('theme11');
                $('.content .icons ul li a').toggleClass('theme12');
            });
        });
    });
});