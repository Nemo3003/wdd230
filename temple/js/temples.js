let temples = [];
const out = element => document.getElementById(element)
const tager = tag => document.createElement(tag)
const attris = (tag, attribute, value ) => tag.setAttribute(attribute,value);
let temples_list = [{
    "templeName": "Bountiful Utah Temple",
    "location": "Bountiful, Utah, United States",
    "dedicated": "8 January 1995",
    "imageUrl": "https://assets.ldscdn.org/b3/1f/b31f8fc3892ce063cfbd0607cd53980290fcc0ae/aba_nigeria_temple_lds.jpeg"
},
{
    "templeName": "Brigham City Utah Temple",
    "location": "Brigham City, Utah, United States",
    "dedicated": "23 September 2012",
    "imageUrl": "https://assets.ldscdn.org/93/92/9392e6adee3d1aa025548de1a852a27ad8ea40f4/brigham_city_utah_temple_dawn.jpeg"
}
];
const output = (array)=>{
    array.forEach(temple => {
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

const url = 'https://byui-cse.github.io/cse121b-course/week05/temples.json'
fetch(url)

.then(response => response.json())

.then(temples_list =>{
    temples = temples_list;
    output(temples);
})

const reset = () =>{
    const mainNode = document.querySelector("#temples");
    while (mainNode.firstChild) {
        mainNode.removeChild(mainNode.lastChild);
    }
}
function compare(a, b) {
	if (a.name > b.name) {
		return 1;
	} else if (a.name < b.name) {
		return -1;
	} else {
        return 0;
}}

const sortBy = () =>{
    reset();
    let value = out('sortBy').value;
    let temples_sorted = [];

	if (value === 'templeNameAscending') {
		temples_sorted = temples.sort(compare);
	} else if (value === 'templeNameDescending') {
		temples_sorted = temples.reverse(compare);
	} else {
		console.log('Something went troppo male, brutissimo!!');
	}
    output(temples_sorted);
    console.log(temples_sorted)
}

out('sortBy').addEventListener('change', sortBy);
