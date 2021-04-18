var page = document.getElementById('login'),
    userName = document.getElementById('username'),
    password = document.getElementById('password'),
    login = document.getElementById('log-in'),
    // link = document.querySelectorAll('a'),
    switcher = document.getElementById('tog'),
    eye_1 = document.getElementById('eye1'),
    eye_2 = document.getElementById('eye2');

// link[6].onmouseover = function() {
//     'use strick';
//     link[6].classList.add('hover');
// };
// link[6].onmouseout = function() {
//     'use strick';
//     link[6].classList.remove('hover');
// };

// link[8].onmouseover = function() {
//     'use strick';
//     link[8].classList.add('hover');
// };
// link[8].onmouseout = function() {
//     'use strick';
//     link[8].classList.remove('hover');
// };

// login.onmouseover = function() {
//     'use strick';
//     login.classList.add('button3d');
// };
// login.onmouseout = function() {
//     'use strick';
//     login.classList.remove('button3d');
// };

window.onload = function() {
    'use strick';
    userName.focus();
};

login.onclick = function() {
    'use strick';
    
    console.log(userName.value);
    console.log(password.value);
    console.log(password.value.length);

    // if( password.value.length < 6) {
        // fw.classList.add('error');

        // alert("Your password is week");

        // fw.onmouseover = function() {
        //     fw.classList.remove('error');
        // };
    // }
    // else {
        window.location.href = "../index/home.html";
    // }
};

switcher.onclick = function() {
    if(password.type === 'password') {
        password.type = 'text';
        eye_1.style.display = 'none';
        eye_2.style.display = 'block';
    }
    else {
        password.type = 'password';
        eye_1.style.display = 'block';
        eye_2.style.display = 'none';
    }
}