const init = () => {
  let h1Element = document.createElement("h1");
  h1Element.innerText = "Go Packers!";
  //document.body.appendChild(h1Element);

  document.querySelector("#heading").appendChild(h1Element);
  let mainContent = document.createElement("main");
  mainContent.innerHTML = "<h2>This is the main content area.</h2>";

  mainContent.setAttribute("class", "maincontent"); //sets the class attribute in the main content element
  mainContent.setAttribute("id", "myMainid"); //sets the id attribute
  mainContent.setAttribute("class", "anotherClass"); //overrides previous class definition

  // id="myMainid" class="maincontent anotherClass"

  mainContent.setAttribute("class", "maincontent anotherClass");
  mainContent.setAttribute("data-main-id", "23"); // data attribute

  document.body.appendChild(mainContent);

  createList(mainContent);
  // approach 2 - inline events with js dotnotation
  let button = document.querySelector("#blueButton");
  button.onclick = dotNotationEventHandler;
  let redbutton = document.querySelector("#redButton");
  redbutton.onclick = dotNotationEventHandler;
  // approach 3 dynamic events with js
  let buttonEventListener = document.querySelector("#greenButton");
  buttonEventListener.addEventListener("click", expandInfo); // do not include ()
  let buttonEventListener2 = document.querySelector("#pinkButton");
  buttonEventListener2.addEventListener("click", expandInfo);

  let buttonEventListener3 = document.querySelector("#tealButton");
  // buttonEventListener3.addEventListener("click", expandInfo);
  //buttonEventListener3.addEventListener("click" Printnfo);

  // using anonomus innerfunction
  buttonEventListener3.addEventListener("click", () => {
    //expandInfo() // assuming dont need to use the event
    //expandInfor(event)
    // expandInfo;
    // printInfo;
    expandInfo(event);
    printInfo(event);
  });

  // let dogButtons = document.getElementsByClassName("dogButton");
  let dogButtons = document.querySelectorAll(".dogButtons");
  dogButtons.forEach((dogButton, i) => {
    console.log(dogButton);
    dogButton.addEventListener("click", () => {
      dogEvent(event);
    });
  });
};
const createList = (mainContent) => {
  // let mainContent = document.getelementById( 'myMainId) // get it from scratch
  let ulElement = document.createElement("ul");
  mainContent.appendChild(ulElement);

  // creating 5 li to go into ulElement

  for (let i = 0; i < 5; i++) {
    let listItem;
    listItem = document.createElement("li"); // <li></li>
    listItem.textContent = i; // <li></li> 0,1,2,3,4
    ulElement.appendChild(listItem);
  }
  let footer = document.querySelector("#footer");
  let additionalContent = createElement("div");
  additionalContent.setAttribute("id", "additionalContent");
  additionalContent.setAttribute("class", "content");
  //div id="additionalContent" class="content"

  //document.body.appendChild(dditionalContent);
  document.insertBefore(additionalContent, footer); // placed before the footer element

  document.body.removeChild(document.querySelector("#Heading")); // remove heading

  let controlParent = document.querySelector("#additionalContent").parentNode;
  console.log(controlParent);
  console.log(controlParent.lastChild);

  let text = document.createElement("div");
  text.textContent = "this is being replaced";
  controlParent.replaceChild(text.controlParent.lastChild);
};

// aprroarch one inline event
const clickButton = (control) => {
  console.log(control.getAttribute("data-model"));
};

//approach 2 inline events with js dotnotiation

const dotNotationEventHandler = (event) => {
  console.log(event.currentTarget.getAttribute("data-model"));
};

const expandInfo = () => {
  console.log(event.currentTarget.getAttribute("data-model"));
};

const printInfo = () => {
  console.log(event.currentTarget.getAttribute("id"));
};

const dogEvent = (event) => {
  console.log(event.currentTarget.getAttribute("data-model"));
};

document.addEventListener("DOMContentLoaded", init);
