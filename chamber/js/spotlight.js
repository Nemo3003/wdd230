"use strict";
const positions1 = [1,2,3,4,5,6,7,8,9]
const positions2 = [6,5,4,3,2,1,8,9,7]
const positions3 = [2,3,1,5,6,4,9,7,8]
function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}
let choice = randomChoice(positions1);
console.log(choice)

const requestURL =" https://nemo3003.github.io/wdd230/chamber/data/spotlight.json";
//name, address, phone, website, imageurl

fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {
    const spotlights = jsObject['spotlights'];
    for (let i = 0; i <1; i++) {
        let choice = randomChoice(positions1);
        let title = document.createElement('h2');
        let image = document.createElement('img');
        let description = document.createElement('p');
        
        title.textContent = spotlights[choice].name;
        description.textContent = spotlights[choice].description;

        image.setAttribute('src', spotlights[choice].image);

        document.getElementById('spot').appendChild(title);
        document.getElementById('spot').appendChild(image);
        document.getElementById('spot').appendChild(description);

    }
    });

    fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {
    const spotlights = jsObject['spotlights'];
    let choice = randomChoice(positions3);
    for (let i = 0; i <1; i++) {
        let title = document.createElement('h2');
        let image = document.createElement('img');
        let description = document.createElement('p');
        
        title.textContent = spotlights[choice].name;
        description.textContent = spotlights[choice].description;

        image.setAttribute('src', spotlights[choice].image);

        document.getElementById('spot1').appendChild(title);
        document.getElementById('spot1').appendChild(image);
        document.getElementById('spot1').appendChild(description);

    }
    });

fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {
    const spotlights = jsObject['spotlights'];
    for (let i = 0; i <1; i++) {
        let title = document.createElement('h2');
        let image = document.createElement('img');
        let description = document.createElement('p');
        
        title.textContent = spotlights[choice].name;
        description.textContent = spotlights[choice].description;

        image.setAttribute('src', spotlights[choice].image);

        document.getElementById('spot2').appendChild(title);
        document.getElementById('spot2').appendChild(image);
        document.getElementById('spot2').appendChild(description);

    }
    });


