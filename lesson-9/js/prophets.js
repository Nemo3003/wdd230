const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();

    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];
        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let birthdate = document.createElement('p');
            let birthplace = document.createElement('p');
            let order = document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            birthdate.textContent = "Date of Birth: " + prophets[i].birthdate;
            birthplace.textContent = "Place of Birth: " + prophets[i].birthplace;
     
            if(prophets[i].order === 1) {
                image.setAttribute('alt', prophets[i].name+' '+prophets[i].lastname+' - '+ prophets[i].order + "st" + ' ' + "president");
               
            }
            else if(prophets[i].order === 2) {
                image.setAttribute('alt', prophets[i].name+' '+prophets[i].lastname+' - '+ prophets[i].order + "nd" + ' ' + "president");
            }
            else if(prophets[i].order === 3) {
                image.setAttribute('alt', prophets[i].name+' '+prophets[i].lastname+' - '+ prophets[i].order + "rd" + ' ' + "president");
            }
            else{
                image.setAttribute('alt', prophets[i].name+' '+prophets[i].lastname+' - '+ prophets[i].order + "th" + ' ' + "president");
            }
            
            card.appendChild(h2);
            card.appendChild(birthdate);
            card.appendChild(birthplace);
            card.appendChild(order);
            card.appendChild(image);

            image.setAttribute('src', prophets[i].imageurl);
        

            document.querySelector('div.cards').appendChild(card);
        };
    });
    //Nemo's
