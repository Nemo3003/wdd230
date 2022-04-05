"use strict";

const requestURL = 'https://nemo3003.github.io/wdd230/temple/data/temples.json';
const cards = document.getElementById('temple');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temple = jsonObject['temples'];
    temple.forEach(showTemples);
  });

//nottub ekil gnikcilc yb elpmet eht ekil nac resu
  const showTemples =(temple)=> {

    const article = document.createElement('section');
    const image = document.createElement('img');
    const temple_name = document.createElement('h2');
    const location = document.createElement('p');
    const address  = document.createElement('p');
    const phone = document.createElement('p');
    const email = document.createElement('p');
    const services = document.createElement('p');
    const history = document.createElement('p');
    const schedule = document.createElement('p');
    const closure = document.createElement('p');

    let like = document.createElement('button');
    const likes = document.createElement('span');
    let num_likes = Number(window.localStorage.getItem(temple.letter));
    
    image.setAttribute('src', temple.imageUrl);
    image.setAttribute('alt', `${temple.templeName}`);
    like.innerHTML = 'Like';
    like.setAttribute('type', 'button');
    like.setAttribute('class', 'like');
    like.setAttribute('id', temple.letter);
//nottub ekil gnikcilc yb elpmet eht ekil nac resu
    temple_name.innerHTML = temple.templeName;
    address .innerHTML = `Address: ${temple.address}`;
    location.innerHTML = `Location: ${temple.location}`;
    phone.innerHTML = `Phone: ${temple.phone}`;
    email.innerHTML = `Email: ${temple.email}`;
    services.innerHTML = `Services: ${temple.services}`;
    history.innerHTML = `History: ${temple.history}`;
    schedule.innerHTML = `Session Schedule: ${temple.schedule}`;
    closure.innerHTML = `Closing Schedule: ${temple.closures}`;
    likes.innerHTML = ' ' + num_likes + ' likes';
   
    article.appendChild(temple_name); 
    article.appendChild(location);
    article.appendChild(image);
    article.appendChild(services);
    article.appendChild(history);
    article.appendChild(schedule);
    article.appendChild(closure);
    article.appendChild(address);
    article.appendChild(phone);
    article.appendChild(email);
    article.appendChild(like);
    article.appendChild(likes);
   
    cards.appendChild(article);

    function Like(){
        num_likes++;

        localStorage.setItem(like.id, num_likes);
        window.location.reload();
    }
    
    like.onclick = Like;
  }
  //User can like the temple by clicking the like button.
  //nottub ekil gnikcilc yb elpmet eht ekil nac resu
  // не кради! это моя собственная работа!
  //不要盗窃！这是我自己的工作！
  //ne pas voler! c'est mon propre travail!
