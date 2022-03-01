

document.querySelector('#now').innerHTML = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format();
//document.getElementById("displayDateTime").innerHTML = dateTime + ' <br> Day :- ' + daylist[day];

let banner = document.querySelector('#banner');
let dayOfWeek = new Date().getDay();
// if Monday or Tuesday displays this
if (dayOfWeek == 1 || dayOfWeek == 2) {
    banner.style.display = "block";
}
//Let's get the hamburguer working!

function toggleMenu() {

    document.getElementById('Nav').classList.toggle('open');
}

let navig = document.getElementById('hamburgerBtn')
navig.onclick = toggleMenu

document.getElementById("modify").innerHTML = document.lastModified
document.getElementById("year").innerHTML = new Date().getFullYear()

