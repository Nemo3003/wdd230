
// Create three variables that hold references 
// to the input, button, and list elements using const.
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('.list');

//Create an click event listener for the 
// Add Chapter button using addEventListener and 
// an anonymous function.
button.addEventListener('click', function() {
  let myBookItems = input.value;


  //input.value = '';

 
  const listItem = document.createElement('li');
  // I'm not sure why I need this but when I removed it
  // my code stopped working so I just let it there

  const listText = document.createElement('span');

  // create a delete button
  const listBtn = document.createElement('button');

  //listItem.appendChild(listText);

  // populate the li elements 
  // textContent or innerHTML with the input
  if (input == input.value) {
    // create an li element
    listText.textContent = myBookItems;
    listItem.appendChild(listBtn);
 }


  // populate the button textContent with an ❌
  listBtn.textContent = 'X';

  // append the li element with the delete button
  listItem.append(listBtn);

  // append the list element with the li element just 
  // created and appended with text and the delete button
  // list.append(listItem);

  // add an event listener to the delete button that 
  // removes the li element when clicked
  listBtn.addEventListener('click', function(e) {
    list.removeChild(listItem);
  })

  // send the focus to the input element
  input.focus();
})