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
    const btnStory= document.createElement('button');
    const btnClose = document.createElement('button');
    const story = document.createElement('p');
    const storyiA = "sjdfnjsbfsjkbfsA"
    const storyiB = "sjdfnjsbfsjkbfsB"
    const storyiC = "sjdfnjsbfsjkbfsC"
    story.style.display='none';
    btnClose.innerHTML = 'Close';
    btnClose.setAttribute('type', 'button');
    btnClose.setAttribute('class', 'btnClose');
    btnClose.setAttribute('id', `btnclose${temple.letter}`);
    btnClose.style.display='none';


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
    btnStory.innerHTML = 'Know More';
    btnStory.setAttribute('type', 'button');
    btnStory.setAttribute('class', 'btnStory');
    btnStory.setAttribute('id', `btnstory${temple.letter}`);
    story.innerHTML = temple.story;
    article.appendChild(btnStory);
    article.appendChild(btnClose);
    article.appendChild(story);
    btnClose.addEventListener('click', function(){
      if(btnClose.id === `btnclose${temple.letter}`){
        story.style.display='none';
        btnClose.style.display='none';
        btnStory.id = `btnstory${temple.letter}`;
      }
    });
    btnStory.addEventListener('click', function(){
      if(btnStory.id === `btnstory${temple.letter}`){
        story.innerHTML = temple.history;
        btnStory.id = `btnstory${temple.letter}`;
        story.style.display='block';
        btnClose.style.display='block';
      }
    });
    
    

    cards.appendChild(article);

  };
    // не кради! это моя собственная работа!
  //不要盗窃！这是我自己的工作！
  //ne pas voler! c'est mon propre travail!