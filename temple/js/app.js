"use strict";
//The side menu
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
//Last modified
document.getElementById("modify").innerHTML = document.lastModified
document.getElementById("year").innerHTML = new Date().getFullYear()