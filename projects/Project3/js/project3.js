// Name: Buddie Powell
// Date: 05/04/2026
// Section: Advanced JavaScript Hybrid Mon/Wed 10:30AM - 12:10PM

// constants for the api key, url, and student id
const apikey = "Itcheui2tB58SlUGe8rrP8mskudGsNDT9nfKKG9S";
const url = "https://ghu8xhzgfe.execute-api.us-east-1.amazonaws.com/tasks";
const studentid = "2989121";

// Global scope variables for DOM elements for the task list, main content area, and footer
let tasklist;
let maincontent;
let footer;

// Initializes the application by setting up the UI and event listeners
const init = () => {
  // Selects the main content area and footer from the DOM
  maincontent = document.querySelector("#main");
  footer = document.querySelector("footer");

  // Creates a new unordered list element to hold the tasks
  // and appends it to the main content area
  tasklist = document.createElement("ul");
  tasklist.setAttribute("id", "tasklist");
  tasklist.setAttribute("style", "list-style-type: none;");
  maincontent.appendChild(tasklist);

  // Attach event listener to the Add Task button
  document.querySelector("#addnewtask").addEventListener("click", addnewtask);

  // Fetch and display all tasks for the student on initial load
  displayalltasks();
};

// Displays all tasks for the student by fetching from API
// if the fetch is successful, it parses the response data
// and creates list items for each task.
const displayalltasks = async () => {
  console.log("Fetching tasks...");
  tasklist.innerHTML = "";

  try {
    let response = await fetch(`${url}/${studentid}`, {
      method: "GET",
      headers: {
        "x-api-key": apikey,
        "Content-Type": "application/json",
      },
    });

    // parase the response data
    let data = await response.json();
    let tasksArray = [];

    // Handle different data structures from API
    if (Array.isArray(data)) {
      tasksArray = data;
    } else if (data && typeof data === "object") {
      tasksArray = data.Items || data.tasks || Object.values(data);
    }

    // Create list items for each task
    tasksArray.forEach((task) => {
      createTaskListItem(task);
    });
  } catch (error) {
    console.log("Error fetching tasks:", error);
  }
};

// Creates a single task list item with delete functionality
const createTaskListItem = (task) => {
  let li = document.createElement("li");
  li.setAttribute("style", "margin-bottom: 10px;");

  let span = document.createElement("span");
  let taskDesc = task.Description || task.task || "No Description";
  span.textContent = taskDesc + " ";
  li.appendChild(span);

  // Create delete button for this task
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.setAttribute("style", "margin-left: 10px; cursor: pointer;");

  deleteBtn.addEventListener("click", () => deleteTask(taskDesc));

  li.appendChild(deleteBtn);
  tasklist.appendChild(li);
};

// Deletes a specific task by description
const deleteTask = async (taskDesc) => {
  console.log(`Deleting task: ${taskDesc}...`);
  try {
    let response = await fetch(url, {
      method: "DELETE",
      headers: {
        "x-api-key": apikey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        StudentId: studentid,
        Description: taskDesc,
        version: "JSON",
      }),
    });
    // if the response is successful, log a success message and refresh the task list.
    // if there is an error during the fetch operation, catch it and log the error message.
    if (response.ok) {
      console.log("Task deleted successfully");
      displayalltasks();
    }
  } catch (error) {
    console.log("Error deleting task:", error);
  }
};

// Adds a new task via API and refreshes the task list
const addnewtask = async () => {
  console.log("Adding new task...");
  let taskInput = document.querySelector("#taskdescription");
  let taskDescription = taskInput.value.trim();

  // if the task description is empty,
  // log a message and return early to prevent adding an empty task
  if (taskDescription === "") {
    console.log("Task description cannot be empty");
    return;
  }

  // Prepare the task data to be sent in the POST request
  let taskData = {
    Description: taskDescription,
    StudentId: studentid,
  };

  // Send a POST request to the API to add the new task
  try {
    let taskresponse = await fetch(url, {
      method: "POST",
      headers: {
        "x-api-key": apikey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    });
    // if the response is successful, log a success message, clear the input field, and refresh the task list.
    // if the response is not successful, log a failure message.
    // If there is an error during the fetch operation, catch it and log the error message.

    if (taskresponse.ok) {
      console.log("Task added successfully");
      taskInput.value = "";
      displayalltasks();
    } else {
      console.log("Failed to add task");
    }
  } catch (error) {
    console.log("Error adding task:", error);
  }
};

// loads the init function when the window finishes loading to set up the application
window.onload = init;
