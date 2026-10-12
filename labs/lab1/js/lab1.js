// Name: Buddie Powell
// Date: 02/01/2026
// Section: Advanced JavaScript  Hybrid Mon/Wed 10:30AM - 12:10PM

// Global variable to store the username
let userName;

// Function to handle the button click
function handleSubmit() {
  // Get the value from the input field
  userName = document.getElementById("userNameInput").value;

  // Call the checkUserName function
  checkUserName(userName);
}

// Function to check if the input is empty
// if its empty display the error message
// if its not empty display the username
function checkUserName(userName) {
  // Check if the input is empty
  if (userName === "") {
    // Output error message to the page via innerHTML if the input is empty
    document.getElementById("userNameDisplay").innerHTML =
      "username is a required field";
  } else {
    // Otherwise, output the entered username to console and page
    console.log("the username you entered is: " + userName);
    document.getElementById("userNameDisplay").innerHTML =
      "the username you have entered is: " + userName;
  }
}
