// Name: Buddie Powell
// Date: 02/08/2026
// Section: Advanced JavaScript  Hybrid Mon/Wed 10:30AM - 12:10PM

// Global variable to store the lab title
let labTitle = "Programming for Designers - Lab 2";

// Method to print the labTitle to the console
const printLabTitle = () => {
  console.log(labTitle);
};

// Init method to define local variables and print their values
const init = () => {
  // Define the three local variables of id, name, and bornInMadison
  let id = 10;
  let name = "Buddie";
  let bornInMadison = true;

  // Print the variable names and the values to the console
  console.log(
    "id: " + id + " name: " + name + " bornInMadison: " + bornInMadison,
  );
  //  Call the printLabTitle method to print the lab title
  printLabTitle();
};
// Event listener to call the init method when the DOM content is loaded
document.addEventListener("DOMContentLoaded", init);
