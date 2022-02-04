
let today = new Date();
document.getElementById('displayDateTime').innerHTML=today;
//document.getElementById("displayDateTime").innerHTML = dateTime + ' <br> Day :- ' + daylist[day];

let banner = document.querySelector('#banner');
let dayOfWeek = new Date().getDay();
// if Monday or Tuesday displays this
if (dayOfWeek == 2 || dayOfWeek == 3) {
    banner.style.display = "block";
}

document.getElementById("modify").innerHTML = document.lastModified
document.getElementById("year").innerHTML = new Date().getFullYear()

