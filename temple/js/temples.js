const cput = (array)=>{
    array.forEach(temple => {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        const h4 = document.createElement('h4');
        const h4_2 = document.createElement('h4');
        const img = document.createElement('img');
        const voting = document.createElement('div');
        const like = document.createElement('button');
        const dislike = document.createElement('button')
        h3.innerHTML = temple.templeName;
        h4.innerHTML = temple.location;
        h4_2.innerHTML = temple.dedicated;

        like.setAttribute('type', 'like');
        dislike.setAttribute('type', 'dislike');
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
