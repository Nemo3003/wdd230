"use strict";

const url = 'https://nemo3003.github.io/wdd230/temple/data/temples.json';
fetch(url)
//dedication, imageUrl, location, templeName
.then(response => response.json())

.then((jsObject) => {
    const temples = jsObject['temples'];
    for (let i = 0; i < 1; i++) {
        let card = document.createElement('div');
        let name = document.createElement('h2');
        let image = document.createElement('img');
        let dedication = document.createElement('p');
        let location = document.createElement('p');

        name.textContent = temples[i].templeName;
        image.setAttribute('src', temples[i].imageUrl);
        image.setAttribute('alt', temples[i].templeName);
        dedication.textContent = temples[i].dedication;
        location.textContent = temples[i].location;

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(dedication);
        card.appendChild(location);

        document.getElementById('temple').appendChild(card);


    }


});