window.onload = function () {
  let age = 20;
  console.log(age);
  displayAge();
};

function displayAge(age) {
  console.log(age); // displays the age variable
}

function displayBirthYear(birthYear) {
  console.log(birthYear);
}

function calculateBirthYear() {
  let age = retrieveAge();

  let birthYear = 2020 - age;
  displayAge(age);

  displayBirthYear(birthYear);
}

function retrieveAge() {
  let age = document.getElementById("age").value;
  return age;
}
