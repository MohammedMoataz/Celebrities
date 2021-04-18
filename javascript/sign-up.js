var page = document.getElementById('sign-up'),
    pass1 = document.getElementById('password1'),
    pass2 = document.getElementById('password2'),
    tel = document.getElementById('tel'),
    signUp = document.getElementById('signUp');

signUp.onclick = function() {
    'use strick';
    
    // if( pass1.value != pass2.value) {
        // pass2.classList.add('error');

        // alert("Your passwords are not the same!");

        // pass2.onmouseover = function() {
            // 'use strick';
            // pass2.classList.remove('error');
        // };
    // }

    // if( pass1.value.length < 6) {
        // pass1.classList.add('error');

        // alert("Your password is week!");

        // pass1.onmouseover = function() {
            // 'use strick';
            // pass1.classList.remove('error');
        // };
    // }

    // if( tel.value.length != 11) {
        // tel.classList.add('error');

        // alert("Your telephone number is incorrect!");

        // tel.onmouseover = function() {
            // 'use strick';
            // tel.classList.remove('error');
        // };
    // }

    // if( pass1.value === pass2.value && pass1.value.length > 6 && tel.value.length === 11) {
        window.location.href = "../index/home.html";
    // }
    // else {
        // alert("Your information is incorrect")
    // }

};

// signUp.onmouseover = function() {
//     'use strick';
//     signUp.classList.add('buttonZoom');
// };
// signUp.onmouseout = function() {
//     'use strick';
//     signUp.classList.remove('buttonZoom');
// };