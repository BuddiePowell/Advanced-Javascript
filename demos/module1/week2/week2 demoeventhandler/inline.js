// window.onload = function() {
//   init();
// };

window.onload = init;

// init method
const init = () => {
  console.log(" in the init function");

  let header;
  let list;
  let listall;
  list = document.querySelectorAll(".myClass"); // return first list
  console.log(list);

  let selectTTag = document.getElementsByTagName("ul");
  document.get;
  // return first select tag
  listall = document.querySelectorAll("ul.myClass"); // return all lists
  console.log(listall);
  header = document.querySelector("#header");
  console.log(header);

  for (let i = 0; i < listall.length; i++) {
    console.log(listall[i]);
  }
};

// function printMessage()
// {
//     console.log(" Hello")
// }

const printMessage = () => {
  console.log(" Hello");
};

const valueChanged = () => {
  let pet = document.getElementById("pet");
  let petValue = pet.value;
  let pettest = pet.options[pet.selectedIndex].text;
  console.log(" the pet value is: " + petValue);
  console.log(" the pet text is: " + pettest);
};

document.addEventListener("DOMContentLoaded", init);
