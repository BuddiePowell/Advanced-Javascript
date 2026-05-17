const init = () => {
  let flowerbutton = document.querySelector("#flowerbutton");
  flowerbutton.addEventListener("click", displayFlowers);
};

const displayFlowers = () => {
  //let url data/flowers.json;
  const url = data / flowers.json;
  //let url = "MadisonCollege.edu";
  //let url = "/onlinedata/flowers.json";

  let xhr = new XMLHttpRequest(); //XHR STEP 1 - create the XHR object

  xhr.open("GET", url); // XHR STEP 2 - open the connection

  /*
  text String
  arraybuffer
  blob
  document - XML or HTML depending on the MIME type(text/xml "application/xml" or "text/html")
  json - JSON automatically parsed into a JavaScript object (not supported by IE 11)
  */
  xhr.responseType = "text"; // XHR STEP 2a - set the response type to text

  //xhr.onreadystatechange = () => {
  //let flowers = JSON.parse(xhr.response); // XHR STEP 4 - parse the response as JSON
  //console.log(xhr.response);
  //console.log(typeof flowers);

  xhr.onload = () => {
    console.log(`loaded ${xhr.response}`);
    let flowers = JSON.parse(xhr.response); // XHR STEP 4 - parse the response as JSON
    console.log(xhr.response);
    console.log(typeof flowers);
  };

  xhr.onerror = () => {
    console.log("Network error .");
  };
  xhr.onprogress = () => {
    // event.loaded - the number of bytes downloaded
    // event.lengthComputable(TRUE) - a boolean indicating if the total number of bytes is known
    // event.total - the total number of bytes to download (if known)
    console.log(`Downloaded ${event.loaded} of ${event.total} bytes`);
  };
  xhr.send(null); // XHR STEP 3 - send the request
};

window.addEventListener("load", init);
