
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
window.addEventListener('load', (event) => {
    document.getElementById('mySidenav').style.width = "250px";
})