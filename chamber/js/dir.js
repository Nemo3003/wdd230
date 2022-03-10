"use strict";
const requestURL =" https://nemo3003.github.io/wdd230/chamber/data/data.json";
//name, address, phone, website, imageurl

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const companies = jsonObject['companies'];
        for (let i = 0; i < companies.length; i++) {
            let card = document.createElement('section');
            let title = document.createElement('h2');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let website = document.createElement('p');
            let image = document.createElement('img');

            title.textContent = companies[i].name;
            address.textContent = `Address: ${companies[i].address}`;
            phone.textContent = `Tel: ${companies[i].phone}`;
            website.textContent	= `Website: ${companies[i].website}`;

            card.appendChild(title);
            card.appendChild(image);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(website);
            
            image.setAttribute('src', companies[i].imageurl);
            title.setAttribute('class', 'title-dir');
            image.setAttribute('class', 'img-dir');
            card.setAttribute('id', 'item');
            image.setAttribute('alt', companies[i].name);

            document.getElementById('cards').appendChild(card);
            
        };
    });


//get the buttons
let list_btn = document.getElementById("sList")
let grid_btn = document.getElementById('sGrid')
//This displays the list view
list_btn.addEventListener('click', ()=>{
    document.getElementById('cards').setAttribute('class', 'list-cards');
    var divs = document.querySelectorAll('#item');
    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.add('item-list');
    }
    document.getElementById('cards').removeAttribute('class', 'grid-cards');
    var divs = document.querySelectorAll('#item');
    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.remove('item-grid');
    }
    document.getElementById('cards').setAttribute('class', 'list-cards');
    var divs = document.querySelectorAll('#item');
    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.add('item-list');
    }
})
//Here we handle the grid view
grid_btn.addEventListener('click', ()=>{
    document.getElementById('cards').setAttribute('class', 'grid-cards');
    var divs = document.querySelectorAll('#item');
    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.add('item-grid');
    }
    document.getElementById('cards').removeAttribute('class', 'list-cards');
    var divs = document.querySelectorAll('#item');
    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.remove('item-list');
    }
    document.getElementById('cards').setAttribute('class', 'grid-cards');
    var divs = document.querySelectorAll('#item');
    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.add('item-grid');
    }
})
//This handles the resizing event. It displays the list view
let res = function () {
    let eventHandlers = function(event){
        let element = document.getElementById('cards');
        element.setAttribute('class', 'list-cards');
        var divs = document.querySelectorAll('#item');
        for (var i = 0; i < divs.length; i++) {
           divs[i].classList.add('item-list');
        }
        element.removeAttribute('class', 'grid-cards');
        var divs = document.querySelectorAll('#item');
        for (var i = 0; i < divs.length; i++) {
            divs[i].classList.remove('item-grid');
        }
        element.setAttribute('class', 'list-cards');
        var divs = document.querySelectorAll('#item');
        for (var i = 0; i < divs.length; i++) {
            divs[i].classList.add('item-list');
        }
    };
    window.addEventListener('resize', eventHandlers, false);
};

document.addEventListener('DOMContentLoaded', res, false);

//This will handle the event after the page loads. It displays inmediately the grid view

window.addEventListener('load', (event) => {
    document.getElementById('cards').setAttribute('class', 'grid-cards');
    var divs = document.querySelectorAll('#item');
    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.add('item-grid');
    }
    document.getElementById('cards').removeAttribute('class', 'list-cards');
    var divs = document.querySelectorAll('#item');
    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.remove('item-list');
    }
    document.getElementById('cards').setAttribute('class', 'grid-cards');
    var divs = document.querySelectorAll('#item');
    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.add('item-grid');
    }
});
//Jquery code to handle the different views
//$(".listView").on('click', function() {
 //   listView();
 //   setView('list');
//  });
  
//  $(".gridView").on('click', function() {
 //    gridView();
  //   setView('grid');
 // });
  
  //function setView(view) {
   // localStorage.setItem('view', view);
  //}
  
  //function getView(view) {
   // return localStorage.getItem('view');
  //}
    //Nemo's