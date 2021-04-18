/*************** Theme ***************/
$(document).ready(function() {
    $('#toggle').click(function() {
        $('.login').toggleClass('the0');
        $('.login .tree').toggleClass('the1');
        $('.login .tree .head').toggleClass('the2');
        $('.login .tree .info .input').toggleClass('the3');
        $('.login .tree .info i').toggleClass('the4');
        $('.login .tree .info input').toggleClass('the5');
        $('.login .tree .info a').toggleClass('the6');
        $('.login .tree .info button').toggleClass('the7');
        $('.login .tree .info button a').toggleClass('the8');
        $('.login .tree .info button i').toggleClass('the9');
    });
});