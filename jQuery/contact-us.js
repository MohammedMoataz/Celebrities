/*************** Theme ***************/
$(document).ready(function() {
    $('#toggle').click(function() {
        $('.contact-us').toggleClass('dark');
        $('.contact-us .inter .cont h1').toggleClass('the0');
        $('.contact-us .inter .cont .line').toggleClass('the1');
        $('.contact-us .inter .content .record .btn').toggleClass('the2');
        $('.contact-us .inter .content .list ul li i').toggleClass('the3');
        $('.contact-us .inter .content .record form input').toggleClass('theHover');
        $('.contact-us .inter .content .record form textarea').toggleClass('theHover');
    });
});