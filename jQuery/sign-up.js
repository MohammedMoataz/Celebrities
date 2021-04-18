/*************** Theme ***************/
$(document).ready(function() {
    $('#toggle').click(function() {
        $('.sign-up .container').toggleClass('the0');
        $('.sign-up .container .reg').toggleClass('the1');
        $('.sign-up .container .reg .head').toggleClass('the2');
        $('.sign-up .container .reg input').toggleClass('the3');
        $('.sign-up .container .reg h4').toggleClass('the4');
        $('.sign-up .container .reg select').toggleClass('the5');
        $('.sign-up .container .reg select option').toggleClass('the6');
        $('.sign-up .container .reg #signUp').toggleClass('the7');
    });
});