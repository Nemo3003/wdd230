const cput = (array)=>{
    array.forEach(temple => {
        
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        const h4 = document.createElement('h4');
        const h4_2 = document.createElement('h4');
        const count = document.createElement('p');
        const p = document.createElement('p');
        const p_2 = document.createElement('p');
        const p_3 = document.createElement('p');
        const p_4 = document.createElement('p');
        const p_5 = document.createElement('p');
        const p_6 = document.createElement('p');
        const img = document.createElement('img');
        const voting = document.createElement('div');
        const like = document.createElement('button');
        const dislike = document.createElement('button')
        h3.innerHTML = temple.templeName;
        h4.innerHTML = temple.location;        
        h4_2.innerHTML = `Dedicated: ${temple.dedicated}`
        p.innerHTML = `Address: ${temple.address}`;
        p_2.innerHTML = `Phone: ${temple.phone}`;
        p_3.innerHTML = `Email: ${temple.email}`
        p_4.innerHTML = `Services: ${temple.services}`;
        p_5.innerHTML = `Closures: ${temple.closure}`;   
        p_6.innerHTML = `Schedule: ${temple.schedule}`;
        count.innerHTML = `Count: ${temple.position}`;

        like.setAttribute('type', 'like');
        like.setAttribute('id', temple.name);
        dislike.setAttribute('type', 'dislike');
        dislike.setAttribute('id', temple.name);
        like.setAttribute('onclick', 'Like()');
        dislike.setAttribute('onclick', 'Dislike()');
        like.textContent = 'Like';
        dislike.textContent = 'Dislike';

        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.setAttribute('class', 'temple-image');

        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(h4_2);
        article.appendChild(count);
        article.appendChild(p);
        article.appendChild(p_2);
        article.appendChild(p_3);
        article.appendChild(p_4);
        article.appendChild(p_5);
        article.appendChild(p_6);
        article.appendChild(img);
        
        voting.appendChild(like);
        voting.appendChild(dislike);
        article.appendChild(voting);

        document.querySelector('#temple').appendChild(article);
    }, this);
 }

const url = 'https://nemo3003.github.io/wdd230/temple/data/temples.json';
fetch(url)

.then(response => response.json())

.then(temples_list =>{
    temples = temples_list;
    cput(temples);
})
const Like = () =>{
    console.log('I like it!')
}
const Dislike = () => {
    console.log('I do not like this!!!')
}
