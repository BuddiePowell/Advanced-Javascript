// Name: Buddie Powell
// Section: Advanced JavaScript Hybrid Mon/Wed 10:30AM - 12:10PM
// Date: 03/01/2026

// Initialize the application automatically when the script loads using the init() method
const init = () => {
  // Create XMLHttpRequest object to send request to the server
  let xhr = new XMLHttpRequest();

  // sets up  the URL to send the request to the server
  let serverUrl = "helloworld.txt";

  // opens the connection to the server using the GET method and the URL defined above
  xhr.open("GET", serverUrl);

  // Set up callback routine to handle response from the server
  // using the onreadystatechange event handler
  // if the ready state is 4, then the response is received
  // and we can output the response text to the page and console
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      document.getElementById("output").innerHTML = xhr.responseText;
      console.log(xhr.responseText);
    }
  };

  // Send the request to the server as null
  xhr.send(null);
};

// calls the init method when the page loads using window.onload
window.onload = init;
