var phone = document.getElementById('tel'),
    submit = document.getElementById('submit');

submit.onclick = function() {
    'use strick';
    if( phone.value.length === 11) {
        window.location.href = "../index/home.html";
    }
    else {
        alert("Phone number is incorrect!");
    }
};