// Name: Buddie Powell
// Section: advanced Javascript Mon/Wens Hybrid 10:30am-12:10pm
// Date: 02/15/2026

// init method
const init = () => {
  // Setup dot notation event handlers for group 2 buttons
  const group2Buttons = document.querySelectorAll("#group2 button");
  group2Buttons.forEach((button) => {
    button.onclick = dotNotation;
  });

  // Setup addEventListener event handlers the group 3 buttons
  const group3Buttons = document.querySelectorAll("#group3 button");
  group3Buttons.forEach((button) => {
    button.addEventListener("click", w3c);
  });
};
// arrow functions to get the values to output the values to the console
const inline = (event) => console.log(event.value);

const dotNotation = (event) => console.log(event.target.value);

const w3c = (event) => console.log(event.target.value);
// event to load the output to the window
window.onload = init;
