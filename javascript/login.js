var page = document.getElementById('login'),
    userName = document.getElementById('username'),
    password = document.getElementById('password'),
    login = document.getElementById('log-in'),
    // link = document.querySelectorAll('a'),
    switcher = document.getElementById('tog'),
    eye_1 = document.getElementById('eye1'),
    eye_2 = document.getElementById('eye2');


window.onload = function() {
    'use strick';
    userName.focus();
};

login.onclick = function() {
    'use strick';
    
    console.log(userName.value);
    console.log(password.value);
    console.log(password.value.length);
    
    window.location.href = "../index/home.html";
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
