"use strict";
//The side menu
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  //This will hide the menu when the page is loaded
window.addEventListener('load', () => {
  document.getElementById('mySidenav').style.width = '0'; 
});
//Last modified
document.getElementById("modify").innerHTML = document.lastModified
document.getElementById("year").innerHTML = new Date().getFullYear()