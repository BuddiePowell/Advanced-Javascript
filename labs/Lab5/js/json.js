// Name: Buddie Powell
// Section: Advanced JavaScript Hybrid Mon/Wed 10:30AM - 12:10PM
// Date: 02/22/2026

// Initialize the application automatically when the script loads using the init() method
const init = () => {
  // Create a collection of student objects of their id, name, and email
  let students = [
    {
      id: 1,
      name: "Buddie Powell",
      email: "bpowell5@madisoncollege.edu",
    },
    {
      id: 2,
      name: "Sherlock Holmes",
      email: "sholmes@madisoncollege.edu",
    },
    {
      id: 3,
      name: "Luke Skywalker",
      email: "lskywalker@madisoncollege.edu",
    },
    {
      id: 4,
      name: "Harry Potter",
      email: "hpotter@madisoncollege.edu",
    },
    {
      id: 5,
      name: "Bruce Wayne",
      email: "bwayne@madisoncollege.edu",
    },
  ];

  // Loop through the collection of student objects and output the id and email to the console
  for (let i = 0; i < students.length; i++) {
    // Output to console using console.log on a new line for the email
    console.log(`id: ${students[i].id}\nemail: ${students[i].email}`);
  }
};

// calls the init method when the window loads
window.onload = init;
