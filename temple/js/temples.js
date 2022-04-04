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
    let num_likes = Number(window.localStorage.getItem(temple.templeName));
    
    image.setAttribute('src', temple.imageUrl);
    image.setAttribute('alt', `${temple.templeName}`);

    like.setAttribute('value', 'Like');
    like.setAttribute('class', 'like');
    like.setAttribute('id', temple.letter);
//nottub ekil gnikcilc yb elpmet eht ekil nac resu
    temple_name.textContent = temple.templeName;
    address .textContent = `Address: ${temple.address}`;
    location.textContent = `Location: ${temple.location}`;
    phone.textContent = `Phone: ${temple.phone}`;
    email.textContent = `Email: ${temple.email}`;
    services.textContent = `Services: ${temple.services}`;
    //history.textContent = `History: ${temple.history}`;
    schedule.textContent = `Session Schedule: ${temple.sessionSchedule}`;
    closure.textContent = `Closing Schedule: ${temple.closingSchedule}`;
    likes.textContent = ' ' + num_likes + ' likes';
   
    article.appendChild(temple_name); 
    article.appendChild(location);
    article.appendChild(image);
    article.appendChild(services);
    article.appendChild(schedule);
    article.appendChild(closure);
    article.appendChild(address);
    article.appendChild(phone);
    article.appendChild(email);
    article.appendChild(like);
    article.appendChild(likes);
    //article.appendChild(history);
   
    cards.appendChild( article);

    function Like(){
        num_likes++;

        localStorage.setItem(like.id, num_likes);
    }
    
    like.onclick = Like;
  }
  //User can like the temple by clicking the like button.
  //nottub ekil gnikcilc yb elpmet eht ekil nac resu
  // не кради! это моя собственная работа!
  //不要盗窃！这是我自己的工作！
  //ne pas voler! c'est mon propre travail!
