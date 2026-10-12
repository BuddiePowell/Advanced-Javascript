// Name: Buddie Powell
// Date: 02/08/2026
// Section: Advanced JavaScript Hybrid Mon/Wed 10:30AM - 12:10PM

// Define the init function
const init = () => {
  // Create the output div to display the username on the page
  let outputDiv = document.createElement("div");
  outputDiv.setAttribute("id", "output");

  // Create the form element
  const form = document.createElement("form");

  // Create the div with class 'form-group'
  const div = document.createElement("div");
  div.setAttribute("class", "form-group");

  // Create the input with class 'form-control', type 'text', and id 'username'
  const input = document.createElement("input");
  input.setAttribute("class", "form-control");
  input.setAttribute("type", "text");
  input.setAttribute("id", "username");
  input.setAttribute("placeholder", "Enter username");

  // Create the button with type 'button' and text 'click me'
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.innerHTML = "click me";

  // Add event listener to the button for outputting to console and page
  button.addEventListener("click", function () {
    let username = document.getElementById("username").value;

    // Output to console
    console.log("The username is: " + username);

    // Output to the page
    outputDiv.innerHTML = "The username is: " + username;
  });

  // Append input and button to the div
  div.appendChild(input);
  div.appendChild(button);

  // Append the div to the form
  form.appendChild(div);

  // Append the form and output div to the body
  document.body.appendChild(form);
  document.body.appendChild(outputDiv);
};

// Automatically call init when the page loads
// via the window.onload function
window.onload = init;
