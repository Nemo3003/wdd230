"use strict";
const requestURL = 'https://nemo3003.github.io/wdd230/temple/data/temples.json';
const cards = document.getElementById('temples');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temple = jsonObject['temples'];
    temple.slice(-3).forEach(showTemples);
  });

//nottub ekil gnikcilc yb elpmet eht ekil nac resu
  const showTemples =(temple)=> {
    const article = document.createElement('section');
    const image = document.createElement('img');
    const temple_name = document.createElement('h2');
    const location = document.createElement('p');
    const address  = document.createElement('p');
    
    image.setAttribute('src', temple.imageUrl);
    image.setAttribute('alt', `${temple.templeName}`);

//nottub ekil gnikcilc yb elpmet eht ekil nac resu
    temple_name.innerHTML = temple.templeName;
    address .innerHTML = `Address: ${temple.address}`;
    location.innerHTML = `Location: ${temple.location}`;

   
    article.appendChild(temple_name); 
    article.appendChild(location);
    article.appendChild(image);
    article.appendChild(address);

   
    cards.appendChild(article);

  }
    // не кради! это моя собственная работа!
  //不要盗窃！这是我自己的工作！
  //ne pas voler! c'est mon propre travail!