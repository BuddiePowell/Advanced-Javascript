// name Buddie Powell
// date 04/11/2026
// course Advanced JavaScript hybrid monday/wednesday 10:30am-12:10pm

// this function initializes the event listener for when
// the DOM content is loaded and then executes the init function
const init = () => {
  //  Select all the courses from the unordered list with
  // the id "courses" and store them in a variable called courses
  const courses = document.querySelectorAll("#courses li");

  //  create an array of the course names by mapping over
  // the selected list items and extracting their text content
  const coursetext = [...courses].map((li) => li.textContent);

  // this is an array of additional courses that should
  // be added to the list of courses from the unordered list
  const additionalCourses = [
    "Advanced Java Programming",
    "C# Web Development with ASP.NET",
  ];

  // create a new array that combines the courses
  // from the list and the additional courses into a single array
  const outputfullcourselist = [...coursetext, ...additionalCourses];

  // Print the outputfullcourselist to the console
  console.log(outputfullcourselist);
};

// Call init when DOM is ready
document.addEventListener("DOMContentLoaded", init);
