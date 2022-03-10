"use strict";

const requestURL =" https://nemo3003.github.io/wdd230/chamber/data/spotlight.json";
//name, address, phone, website, imageurl

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const spotlights = jsonObject['spotlights']
        for (let i = 0; i < spotlights.length; i++) {
            let card = document.createElement('section');
            let title = document.createElement('h2');
            let image = document.createElement('img');
            let description = document.createElement('p');

            title.textContent = spotlights[i].title;
            description.textContent = spotlights[i].description;

            card.appendChild(title);
            card.appendChild(image);
            card.appendChild(description);
            
            image.setAttribute('src', spotlights[i].image);
            title.setAttribute('class', 'title-spot');
            image.setAttribute('class', 'img-spot');
            card.setAttribute('id', 'item-spot');
            image.setAttribute('alt', spotlights[i].title);

            document.getElementById('cards-spot').appendChild(card);
        };
    });