"use strict";

const url = 'https://nemo3003.github.io/wdd230/temple/data/temples.json';

let positions1 = [0,1,2]
let positions2 = [3,4,5]
let positions3 = [6,7,8]
function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}


fetch(url)
//dedication, imageUrl, location, templeName
.then(response => response.json())

.then((jsObject) => {
    const temples = jsObject['temples'];
    for (let i = 0; i < 1; i++) {
        let choice = randomChoice(positions1);
        let card = document.createElement('div');
        let name = document.createElement('h2');
        let image = document.createElement('img');
        let dedication = document.createElement('p');
        let location = document.createElement('p');

        name.textContent = temples[choice].templeName;
        image.setAttribute('src', temples[choice].imageUrl);
        image.setAttribute('alt', temples[choice].templeName);
        dedication.textContent = temples[choice].dedication;
        location.textContent = temples[choice].location;

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(dedication);
        card.appendChild(location);

        document.getElementById('temple1').appendChild(card);
      


    }
    for (let i = 0; i < 1; i++) {
        let choice = randomChoice(positions2);
        let card = document.createElement('div');
        let name = document.createElement('h2');
        let image = document.createElement('img');
        let dedication = document.createElement('p');
        let location = document.createElement('p');

        name.textContent = temples[choice].templeName;
        image.setAttribute('src', temples[choice].imageUrl);
        image.setAttribute('alt', temples[choice].templeName);
        dedication.textContent = temples[choice].dedication;
        location.textContent = temples[choice].location;

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(dedication);
        card.appendChild(location);

        document.getElementById('temple2').appendChild(card);}
        for (let i = 0; i < 1; i++) {
            let choice = randomChoice(positions3);
            let card = document.createElement('div');
            let name = document.createElement('h2');
            let image = document.createElement('img');
            let dedication = document.createElement('p');
            let location = document.createElement('p');
    
            name.textContent = temples[choice].templeName;
            image.setAttribute('src', temples[choice].imageUrl);
            image.setAttribute('alt', temples[choice].templeName);
            dedication.textContent = temples[choice].dedication;
            location.textContent = temples[choice].location;
    
            card.appendChild(name);
            card.appendChild(image);
            card.appendChild(dedication);
            card.appendChild(location);
    
            document.getElementById('temple3').appendChild(card);}


});