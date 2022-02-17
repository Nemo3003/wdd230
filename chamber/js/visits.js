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