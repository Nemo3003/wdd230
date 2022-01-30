// Decalres function
function addButton(){
	function addChapter(){
        // Declares variables with object element. 
		let list = document.querySelector('.list'); 
		let input = document.querySelector('#favchap');
		let item = document.createElement('li'); 
		let button = document.createElement('button'); 
		
		// Creates a list when user input something to li
		item.innerText = input.value; 
		
		// Creates an X button for deletion
		button.innerText = '❌'; 
		
		// Deletes an element from the parent list
		button.addEventListener('click', x => {button.parentElement.remove()});
		
		// Adds what the user input to the list
		item.appendChild(button); 
		
		// Adds what the user input to the list with an X button
		list.appendChild(item); 
		
		// Makes sure the input is empty 
		input.value = ''; 
	
		// Sets the element as the active element in the current document
		input.focus(); 
	}
	
	// Retuns the element within the document for button and links with a click
	document.querySelector('button').addEventListener('click',addChapter)
}

// Initiates the function addButton();
function init(){
    addButton();
}

// Registers the argument of the content
window.addEventListener('DOMContentLoaded', init);
//Last modified
document.getElementById("modify").innerHTML = document.lastModified
document.getElementById("year").innerHTML = new Date().getFullYear()