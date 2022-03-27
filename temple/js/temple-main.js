const output = (array)=>{
    array.slice(-3).forEach(temple => {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        const h4 = document.createElement('h4');
        const h4_2 = document.createElement('h4');
        const img = document.createElement('img');
        h3.innerHTML = temple.templeName;
        h4.innerHTML = temple.location;
        h4_2.innerHTML = temple.dedicated;
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.setAttribute('class', 'temple-image');
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(h4_2);
        article.appendChild(img);
        document.querySelector('#temples').appendChild(article);
    }, this);
 }

const url = 'https://nemo3003.github.io/wdd230/temple/data/temples.json';
fetch(url)

.then(response => response.json())

.then(temples_list =>{
    temples = temples_list;
    output(temples);
})
