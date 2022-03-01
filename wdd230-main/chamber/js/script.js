
// script for hamburger menu
function toggleMenu() {

    document.getElementById('primaryNav').classList.toggle('open');
}

let x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu


// script for time and date 
document.querySelector('#now').innerHTML = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format();


// script for footer year and date modified
document.querySelector('#year').innerHTML = new Date().getFullYear();
document.querySelector('#currentDateandTime').innerHTML = document.lastModified;
  



// Script for the to display a banner on Mondays or Tuesdays only at the very 
// top of the page that says "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m." 
const banner = document.querySelector('#top-page-banner');

let dayOfWeek = new Date().getDay();

if (dayOfWeek == 1 || dayOfWeek == 2) {
    banner.style.display = 'block';
}
else {
    banner.style.display = 'none';
}

// Script for closing the banner
const closeBtn = document.querySelector('.bannerBtn');
closeBtn.addEventListener('click', function() {
    if (banner.style.display !== "none") {
        banner.style.display = "none";
    }
})


// Script for Validating the RegEx
let input = document.querySelector('#businessPosition');
input.oninvalid = function(event) {
    event.target.setCustomValidity('Business Position should only contain alpha characters, hyphen, space and up to 7 characters only.');
}



