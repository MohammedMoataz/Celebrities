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



// console.log(myLinks[s].textContent);

// let value;
// searchInput.addEventListener('input', (event) => {
//     value = event.target.value.toLowerCase();
// });
// console.log(value);

// searchButton.onclick = function() {
//     'use strick';
//     for(var i = 0; i < listItems.length; ++i) {
//         if(value === listItems[i]) {
//             console.log(value);
//             break;
//         }  
//         else {
//             console.log("Element is not found");
//             console.log(value);
//             break;
//         }
//     }  
// };






// var fucking=["fuck", "you", "litle", "bitch"];   

// fucking.sort();                                                                                                    // sort by name
// var newArray=fucking.slice(1,4);                                                                                   // take a part of the array  [(1,4)or(-6,-2)]
// fucking=fucking.toString();                                                                                        // convert to string
// newArray=newArray.toLocaleString();                                                                                // convert to string

// var search=arraycol.indexOf("bitch",2);                                                                            // search an item in array (from the start)
// var search2=arraycol.lastIndexOf("dick");                                                                          // search an item in array (from the end)
// document.getElementById("javascript").innerHTML=arraycol[search]+"<br>"+arraycol[search2];



// var mycar={colour:"black",
//             type:"macedse",
//             model:"2017",
//             price:"100000"};
// var prop;
// for(prop in mycar)
// {
//     if(mycar.hasOwnProperty(prop))
//     console.log(prop+": "+mycar[prop]);
// }

// var mynumber=01234567;
// var newnumber=mynumber.toString();                                                                              // convert to string
// var newnumber=String(mynumber);                                                                                    // convert to string
// var five=newnumber.indexOf(5);                                                                                  // display the position of item   {(5,0)or("5",0)}
// var five=newnumber.search("5");                                                                                    // display the position of item   {(5)or(/5/i)}
// var mystring="i love javascript and i'm learning JavaScript",
//     myspilettedstring=mystring.split(" ",3),                                                                       // control the separetor between string - (sep.,limit)                       
//     myslicedstring=mystring.slice(0,17),                                                                           // display some string - (start,end)                   
//     mysubstrr=mystring.substr(7,10),                                                                               // display some string - (start,length)
//     mysubstring=mystring.substring(17,7),//===(7,17)                                                               // display some string - (start,end)or(end,start)
//     mychar=mystring.charAt(mystring.length-1),                                                                     // find the character in string              
//     mycodechar=mystring.charCodeAt(7),                                                                             // find the unicode of character in string
//     myreplace=mystring.replace(/javascript/gi,"HTML & CSS"),                                                       // replace values (old value,new value)
//     myconcatnation=mystring.concat(" & HTML and CSS"),                                                             // concatunation strings
//     mycapital=mystring.toUpperCase(),                                                                              // convert sting to capital letters
//     mysmall=mycapital.toLowerCase(),                                                                               // convert sting to small letters
    // newstring="   HELLO    ".trim(),                                                                               // remove separators in the start and end
    // breezed="BREEZED".link("../../items/mywork/index/home.html");                                                  // put a link






// ['../../Joo/Text-1.html',
//                '../../Joo/men.html',
//                '../../Joo/women.html',
//                 '../../Gimmy/famous scientists.html',
//                 '../../Gimmy/project 1.html',
//                 '../../Gimmy/project 2.html',]
































/*
const searchInput = document.getElementById('srch'),
      searchButton = document.getElementById('srchBtn'),
      searchList = document.getElementById('list');

var links =[
            { name: "SINGERS"},
            { name: "Famous singers"},
            { name: "Most popular male singers of all time<"},
            { name: "Most popular female singers of all time"},
            { name: "SCIENTISTS"},
            { name: "Famous scirntists"},
            { name: "Scientists through history"},
            { name: "Arab scientists"}
];

function setList(pages) {
    'use strick';

    clearList();

    for( const link of pages) {
        const item = document.createElement('li'),
              item_2 = document.createElement('a'),
              text = document.createTextNode(link.name);
        
        item_2.appendChild(text);
        item.appendChild(item_2);
        searchList.appendChild(item);
    }    
    if(links.length === 0) {
        setNoResults();
    }
};

function clearList() {
    'use strick';

    // while( searchList.firstChild) {
    //     searchList.removeChild(searchList.firstChild);
    // }
};

function setNoResults() {
    'use strick';

    const item = document.createElement('li'),
        //   item_2 = document.createElement('a'),
          text = document.createTextNode("No results found");
        
    // item_2.appendChild(text);
    item.appendChild(text);
    searchList.appendChild(item);
};

function getRelevancy( value, searchTerm) {
    if( value === searchTerm) {
        return 2;
    }
    else if ( value.startsWith(searchTerm)) {
        return 1;
    }
    else if( value.includes(searchTerm)) {
        return 0;
    }
    else {
        return -1;
    }
};

searchInput.addEventListener('input', (event) => {
    let value = event.target.value;

    if( value && value.trim().length > 0) {
        value = value.trim().toLowerCase();

        setList(links.filter( link => {
            return link.name.includes(value);
        }).sort((link_1, link_2) => {
            return getRelevancy(link_2.name, value) - getRelevancy(link_1.name, value);
        }));
    }
    else {
        clearList();
    }
});
*/