// Get the buttons and message elements
const button1 = document.getElementById('button1');
const message1 = document.getElementById('message1');
const button2 = document.getElementById('button2');
const message2 = document.getElementById('message2');
const button3 = document.getElementById('button3');
const message3 = document.getElementById('message3');

// Function to change the button color
function changeColor(button) {
  button.style.backgroundColor = 'lightblue';
}

// Function to display a message
function showMessage(message) {
  message.style.display = 'block';
}

// Function to hide a message
function hideMessage(message) {
  message.style.display = 'none';
}

// Function to hide a button
function hideButton(button) {
  button.style.display = 'none';
}

// Add event listeners to each button
button1.addEventListener('click', () => changeColor(button1));
button1.addEventListener('mouseover', () => showMessage(message1));
button1.addEventListener('mouseout', () => hideMessage(message1));
button1.addEventListener('dblclick', () => hideButton(button1));

button2.addEventListener('click', () => changeColor(button2));
button2.addEventListener('mouseover', () => showMessage(message2));
button2.addEventListener('mouseout', () => hideMessage(message2));
button2.addEventListener('dblclick', () => hideButton(button2));

button3.addEventListener('click', () => changeColor(button3));
button3.addEventListener('mouseover', () => showMessage(message3));
button3.addEventListener('mouseout', () => hideMessage(message3));
button3.addEventListener('dblclick', () => hideButton(button3));