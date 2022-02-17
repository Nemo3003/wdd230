
let today = new Date();
document.getElementById('displayDateTime').innerHTML=today;
//document.getElementById("displayDateTime").innerHTML = dateTime + ' <br> Day :- ' + daylist[day];



let banner = document.querySelector('#banner');
let dayOfWeek = new Date().getDay();
// if Monday or Tuesday displays this
if (dayOfWeek == 1 || dayOfWeek == 2) {
    banner.style.display = "block";
}

let todayDisplay = document.querySelector(".today");
let visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}
numVisits++;

localStorage.setItem("visits-ls", numVisits);

document.getElementById("modify").innerHTML = document.lastModified
document.getElementById("year").innerHTML = new Date().getFullYear()

