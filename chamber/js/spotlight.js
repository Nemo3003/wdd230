"use strict";

const requestURL =" https://nemo3003.github.io/wdd230/chamber/data/spotlight.json";
//name, address, phone, website, imageurl

fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {
    const spotlights = jsObject['spotlights'];
    for (let i = 0; i < spotlights.length; i++) {
        let title = document.createElement('h2');
        let image = document.createElement('img');
        let description = document.createElement('p');
        
        title.textContent = spotlights[i].name;
        description.textContent = spotlights[i].description;

        image.setAttribute('src', spotlights[i].image);

        document.getElementById('spot').appendChild(title);
        document.getElementById('spot').appendChild(image);
        document.getElementById('spot').appendChild(description);

    

    }
    });