/*************** Nav ***************/
var nav = document.getElementById('nav'),
    ulli = document.querySelectorAll('ul')[0],
    list = document.createElement('li'), 
    logout = document.createElement('a'),
    icon = document.createElement('i'),
    text = document.createTextNode('Logout ');

icon.className = "fa fa-sign-out";
logout.className = "logout";

ulli.appendChild(list);
list.appendChild(logout);
logout.appendChild(text);
logout.appendChild(icon);

list.style.display = "inline-block";

list.onclick = function() {
    list.style.display = "none";
};

/*************** Search ***************/
const searchInput = document.getElementById('srch'),
      searchButton = document.getElementById('srchBtn'),
      listItems = document.querySelector('#links'),
      myLinks = document.querySelectorAll('#links li a');

for(var j = 0; j < myLinks.length; ++j) {
    myLinks[j].textContent = myLinks[j].textContent.toLowerCase();
}

window.onload = function() {
    'use strick';
    listItems.style.display = "none";
};

let key;
searchInput.addEventListener('input', () => {
    key = event.target.value.toLowerCase();
});

searchButton.onclick = function() {
    'use strick';

    console.log(key);
    for( var s = 0; s < myLinks.length; ++s) {
        found = myLinks[s].textContent.indexOf(key);
        if(found > -1) {
            console.log(found);
            console.log(key);
            console.log(myLinks[s].textContent);
            break;
        }
        else {
            alert("Not found");
            break;
        }
    }
};
